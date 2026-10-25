/** llms.txt (RECETTE §21), generated at build from the page registry: always in sync with the site. */
import { PAGES } from '../lib/guides';
import { SITE_URL, LAST_UPDATED, SITE_NAMES } from '../data/site-config';
import { route } from '../i18n/routes';
import { GROUPS_ORDER, groupLabel } from '../i18n/nav';
import params from '../data/params-2026.json';

const words = (iso: string) => new Date(iso + 'T12:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export function GET() {
  const lines = [
    `# ${SITE_NAMES.en} (lifeinukexam.co.uk)`,
    '',
    `> Free Life in the UK Test practice: unlimited mock tests of 24 questions marked at 18 correct, 16 numbered tests, a question bank written by Radif Partners from the facts in the official handbook (no handbook text reproduced), and British naturalisation calculators: earliest date to apply with absences counted day by day against the Home Office guidance, Home Office fees for a household (including priority service), English B1 requirement and approved SELT centres. Independent site, not a government service. Calculations run in the browser. Published by Radif Partners. Last updated ${words(LAST_UPDATED)}.`,
    '',
    '## Data',
    `- Rules and fees read on gov.uk (Open Government Licence v3.0), retrieved ${words(params.retrieved_at)}; Home Office fees table effective ${words(params.uk.fees.effective)}.`,
    '- Approved SELT centres: Home Office list, October 2026 (OGL v3.0).',
    '- Practice questions: written by Radif Partners; they are not official test questions.',
    '',
    `- [Life in the UK mock test](${SITE_URL}${route('home', 'en')}): free mock tests, pass mark, chapters and the road to British citizenship`,
    '',
    ...GROUPS_ORDER.flatMap((g) => [`## ${groupLabel(g)}`, ...PAGES.filter((p) => p.group === g).map((p) => `- [${p.en.nav}](${SITE_URL}${route(p.id, 'en')}): ${p.en.card}`), '']),
    '## About',
    `- [Method and sources](${SITE_URL}${route('method', 'en')})`,
    `- [About](${SITE_URL}${route('about', 'en')})`,
  ];
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
