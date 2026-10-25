/** Writing helpers handed to every page: links, figures read from params-2026.json, tables, bank. */
import { route, ROUTES, type Locale } from '../i18n/routes';
import { formatNumberL, money, pct, dateL } from './format-l';
import { BANK } from './banks-build';
import { CHAPTERS } from './banks';
import { passNeeded } from './engine/exam';
import P from '../data/params-2026.json';
import SELT from '../data/selt-centres.json';

export type SourceKey = keyof typeof P.sources;
const esc = (s: string | number) => String(s).replace(/&(?!(?:[a-z]+|#\d+);)/g, '&amp;').replace(/</g, '&lt;');
export function table(headers: string[], rows: Array<Array<string | number>>, caption: string | undefined, align: Array<'l' | 'r'>) {
  const al = (i: number) => (align[i] === 'r' ? 'text-right' : 'text-left');
  return `<div class="not-prose my-6 overflow-x-auto"><table class="journal w-full text-sm">${caption ? `<caption class="mb-2 text-left text-sm text-navy-600">${caption}</caption>` : ''}<thead><tr>${headers.map((h, i) => `<th scope="col" class="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-navy-700 ${al(i)}">${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<td class="tabular-nums border-b border-navy-100 px-3 py-2 text-navy-800 ${al(i)}">${typeof c === 'number' ? esc(formatNumberL(c)) : c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

export function helpers(lang: Locale = 'en', strict = false) {
  const a = (id: string, text: string) => {
    if (!ROUTES.some((r) => r.id === id)) { if (strict) throw new Error(`Unknown page id in a link: ${id}`); return text; }
    return `<a href="${route(id, lang)}">${text}</a>`;
  };
  const ext = (url: string, text: string) => `<a href="${url}" target="_blank" rel="nofollow noopener noreferrer">${text}</a>`;
  const src = (k: SourceKey, text: string) => ext(P.sources[k].url, text);
  const gbp = (n: number) => money(n);
  const num = (n: number, d = 0) => formatNumberL(n, 'en', d);
  const pc = (x: number, d = 0) => pct(x, 'en', d);
  const U = P.uk, F = P.uk.fees, N = P.uk.naturalisation, T = P.uk.test, E = P.uk.english;
  const cities = [...new Set(SELT.centres.map((c) => c.city))].sort();
  return {
    lang, a, ext, src, gbp, num, pc, P, U, F, N, T, E,
    date: (iso: string) => dateL(iso),
    table: (h: string[], r: Array<Array<string | number>>, c?: string, al: Array<'l' | 'r'> = []) => table(h, r, c, al),
    /** Size of the bank and of each chapter, read from the JSON (never typed in a page). */
    count: BANK.length,
    chapters: CHAPTERS,
    inChapter: (i: number) => BANK.filter((q) => q.chapter === CHAPTERS[i]).length,
    /** A question of the bank (by id), for a worked example in the text. */
    q: (id: string) => BANK.find((x) => x.id === id),
    need: passNeeded(),
    /** Naturalisation + ceremony + one test sitting. */
    total: F.naturalisation + F.ceremony,
    totalWithTest: F.naturalisation + F.ceremony + F.lifeInUkTest,
    selt: { centres: SELT.centres.length, cities: cities.length, cityList: cities, inCity: (c: string) => SELT.centres.filter((x) => x.city === c).length },
  };
}
export type Helpers = ReturnType<typeof helpers>;
