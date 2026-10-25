#!/usr/bin/env python3
"""Relit le tableau des frais du Home Office (gov.uk, OGL v3.0) et le compare à
src/data/params-2026.json.

Usage : python3 scripts/update-data.py [--write]
  sans --write : affiche les écarts et sort en code 2 s'il y en a (le cron échoue alors) ;
  avec --write : écrit data/official-latest.json (valeurs lues + date + URL), jamais params-2026.json,
                 qui ne change qu'après relecture humaine de la règle (RECETTE §17.4).

Source (aucun scraping de concurrent) : « Home Office immigration and nationality fees », tableau ODS
le plus récent publié sur gov.uk. Dépendances : Python 3.10+ (stdlib seulement).
"""
import datetime as dt
import io
import json
import re
import sys
import urllib.request
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PARAMS = ROOT / "src" / "data" / "params-2026.json"
OUT = ROOT / "data" / "official-latest.json"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"
UK_PUB = "https://www.gov.uk/government/publications/visa-regulations-revised-table"


def get(url: str, tries: int = 4) -> bytes:
    import time

    req = urllib.request.Request(url, headers={"User-Agent": UA})
    for i in range(tries):
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read()
        except OSError:
            if i == tries - 1:
                raise
            time.sleep(10 * (i + 1))


def money(s: str) -> int:
    return int(round(float(s.replace(",", ""))))


# ---------- Royaume-Uni ----------
def uk() -> dict:
    page = get(UK_PUB).decode("utf-8", errors="ignore")
    links = re.findall(r'https://assets\.publishing\.service\.gov\.uk/media/[^"]+?\.ods', page)
    if not links:
        raise RuntimeError("UK : aucun tableau ODS trouvé sur " + UK_PUB)
    ods_url = links[0]  # la page liste le plus récent en premier
    z = zipfile.ZipFile(io.BytesIO(get(ods_url)))
    root = ET.fromstring(z.read("content.xml"))
    T = "{urn:oasis:names:tc:opendocument:xmlns:table:1.0}"
    P = "{urn:oasis:names:tc:opendocument:xmlns:text:1.0}p"
    rows = []
    for r in root.iter(T + "table-row"):
        cells = []
        for c in r.findall(T + "table-cell"):
            txt = re.sub(r"\s+", " ", " ".join("".join(p.itertext()) for p in c.findall(P)).replace("\xa0", " ")).strip()
            n = min(int(c.get(T + "number-columns-repeated", "1")), 20)
            cells += [txt] * n
        rows.append([c for c in cells if c])

    def fee(label_re: str) -> int:
        for cells in rows:
            if cells and re.search(label_re, cells[0], re.I):
                for c in cells[1:]:
                    m = re.match(r"£([\d,]+)", c)
                    if m:
                        return money(m.group(1))
        raise RuntimeError(f"UK : ligne introuvable « {label_re} » dans {ods_url}")

    title = re.search(r"Fees_?Table_?([^/]+?)\.ods", ods_url)
    return {
        "naturalisation": fee(r"^Naturalisation \(British citizenship\)"),
        "ceremony": fee(r"^The arrangement of a citizenship ceremony"),
        "registrationAdult": fee(r"^Nationality registration as a British citizen - adult"),
        "registrationChild": fee(r"^Nationality registration as a British citizen - child"),
        "ilr": fee(r"^Indefinite leave to remain - main applicant"),
        "lifeInUkTest": fee(r"^Life in the UK test"),
        "registrationIrishAdult": fee(r"^Nationality registration as a British citizen \(under provisions for Irish citizens\) - adult"),
        "registrationIrishChild": fee(r"^Nationality registration as a British citizen \(under provisions for Irish citizens\) - child"),
        "oathNotAtCeremony": fee(r"^The administration of a citizenship oath"),
        "renunciation": fee(r"^Renunciation of nationality"),
        "rightOfAbode": fee(r"^Certificate of Entitlement to Right of Abode \(in the UK\)"),
        "review": fee(r"^Nationality review"),
        "reissuedCertificate": fee(r"^Nationality reissued Certificate"),
        "sourceFile": ods_url,
        "table": title.group(1) if title else "",
    }


def main() -> int:
    params = json.loads(PARAMS.read_text())
    lu = dt.date.today().isoformat()
    out, diffs = {"_lu": lu}, []
    try:
        got = uk()
    except Exception as e:
        print("ERREUR", e)
        return 1
    out["uk"] = got
    ref = params["uk"]["fees"]
    for k, v in got.items():
        if k in ref and v is not None and ref[k] != v:
            diffs.append(f"uk.{k} : params={ref[k]} → source={v}")
    for d in diffs:
        print("ÉCART ", d)
    if not diffs:
        print(f"OK : frais identiques au tableau du Home Office ({lu}, {got.get('table')}).")
    if "--write" in sys.argv:
        OUT.parent.mkdir(parents=True, exist_ok=True)
        OUT.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n")
        print("écrit", OUT.relative_to(ROOT))
    return 2 if diffs else 0


if __name__ == "__main__":
    sys.exit(main())
