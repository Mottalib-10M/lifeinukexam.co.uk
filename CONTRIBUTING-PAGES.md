# Adding or editing a page

One page = one file `src/content/pages/<id>.ts` exporting `definePage({...})` (types in
`src/lib/guide-types.ts`). The file name must equal `id`. Model: `lt-mock.ts`. The page is built at
`/en/<en.slug>/`; menus, footer, home lists and sitemap follow by themselves. English only (en-GB).

## Fields

- `group`: `practice`, `test`, `citizenship`, `english` or `settle`; `order`: position in its group.
- `tool`: the main tool, shown right under the H1 (first screen, RECETTE §5):
  - `{ kind: 'quiz', props: { mode: 'exam'|'practice', chapter?: <0-4>, timed?: true, sets?: 16 } }`
  - `{ kind: 'bank', props: { chapter: <0-4> } }` (questions with answers, one chapter at a time)
  - `{ kind: 'date', props: { route?: '6(1)'|'6(2)', eu?: true } }` (earliest date to apply, trips day by day)
  - `{ kind: 'cost', props?: { adults, children, ilr, attempts, priority, passports } }` (official fees for a household)
  - `{ kind: 'centres', props?: { city: 'London' } }` (approved SELT centres in the UK)
  - `{ kind: 'mini:<spec>', props?: { <input id>: <default number> } }`, specs in `src/lib/mini-specs.ts`
    (`ukpass`, `passchance`, `ukexempt`, `ukattempts`, `refund`, `bookdates`, `brp`, `urn`, `studyplan`, `chaptershare`,
    `pace`, `ready`, `qstart`, `absband`, `natcost`, `priority`, `childreg`, `referee`, `ceremony`, `timeline`,
    `seltvalid`, `englishroute`, `b1tests`, `b2rule`, `ilrlost`, `ilrwait`, `fees`, `passport`, `goodchar`, `eu`,
    `routes`, `dates`). A new spec goes in `src/lib/mini-specs-extra-a.ts` or `-b.ts`, never with a second formula.
- `mini`: a second tool under the citable block (same kinds).
- In a body, `<!--tool:mini:pace-->` or `<!--tool:mini:absband|{"r":1}-->` places a tool between paragraphs.
- `related`: 3–6 page ids. `sources`: keys of `src/data/params-2026.json` → `sources`.
- `demarche: true` on pages about booking, applying or paying: adds "Independent site, not a government service" under the H1.

## Text rules (checked by `npx vitest run tests/pages.test.ts`, then `npm run check`)

- `title` 50–60 characters, key term first ("Life in the UK Test Cost: …", "British Citizenship Cost 2026: …"), never
  "How…", "What…", "UK…" or "Calculator…".
- `description` 150–160 characters.
- `resume(h)`: ONE paragraph (no tags but links) of at least 130 words answering the page's query with figures.
- `faqs(h)`: 3–5 questions unique to the page across the whole site, each answer 45–85 words, plain text.
- `body(h)`: HTML with at least three `<h2>` sections; resume + body at least 700 words. No `<h1>`.
- No em dash anywhere; colon, comma or parentheses instead. British spelling (licence, programme, organise).
- Dates in words ("8 October 2026"), never 2026-10-08 in text; future rules are written as coming, with their date.
- Pages must read differently (check-unique fails above 30 % shared sentences between two pages): no shared
  boilerplate paragraph, no sentence reused from another page.
- Links only to official sources (`h.src(key, text)`) and internal pages (`h.a(id, text)`). Never a competitor, app,
  publisher shop, law firm, adviser or affiliate; never mention Google, "first result" or any other site.
- Never present the site as a government body; never call our questions "official" or "real test questions".

## Figures

Never type a fee, a limit or a count: read them through `h` (`src/lib/helpers.ts`): `h.P` (params-2026.json), `h.T`
(test), `h.N` (naturalisation), `h.F` (fees), `h.E` (English), `h.U` (all UK), `h.gbp(n)`, `h.num(n)`, `h.pc(x)`,
`h.date(iso)`, `h.need` (correct answers to pass), `h.count` (bank size), `h.chapters`, `h.inChapter(i)`, `h.total`
(naturalisation + ceremony), `h.totalWithTest`, `h.selt` (centres), `h.table(headers, rows, caption, align)`.
A fact that is not on an official page (or in our own bank, for question facts) is not written.

## Data

- `src/data/params-2026.json`: rules and fees read on gov.uk (date in `retrieved_at`), checked monthly by
  `scripts/update-data.py` (workflow `.github/workflows/update-data.yml`, exit code 2 when an amount differs).
- `src/data/questions/uk.json`: question bank written by Radif Partners from the handbook's facts (no text reproduced:
  the handbook is Crown copyright, sold by TSO). `npx vitest run` lints it.
- `src/data/selt-centres.json`: Home Office list of approved SELT centres in the UK (October 2026, OGL v3.0).
