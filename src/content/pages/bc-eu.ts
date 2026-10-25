import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'bc-eu',
  group: 'citizenship',
  order: 90,
  tool: {"kind": "date", "props": {"eu": true}},
  mini: {"kind": "mini:eu"},
  related: ["bc-date", "bc-citizenship", "lt-exempt", "ilr-lost"],
  sources: ["uk_eu", "uk_ilr", "uk_guide_an", "uk_dual"],
  en: {
    slug: 'british-citizenship/eu-settled-status',
    nav: "EU settled status route",
    card: 'From EU settled status to a British passport: the 12-month wait, why pre-settled status is not enough, and the test you never took.',
    title: 'British Citizenship with EU Settled Status: Steps and Dates',
    description: 'British citizenship with EU settled status: the 12-month wait, pre-settled status limits, the Life in the UK Test and English you still need, and travel after.',
    h1: 'From EU settled status to British citizenship',
    intro: 'The calculator is set up for EU Settlement Scheme holders. Enter the date your settled status was granted and your trips to find your first date.',
    resume: (h) => `Settled status under the EU Settlement Scheme is indefinite leave to remain, so it counts as settlement for naturalisation. On the standard ${h.N.route61.years}-year route you must usually have held it for ${h.N.route61.ilrHeldMonths} months before applying; if your spouse or civil partner is British you can apply as soon as you have it, on the ${h.N.route62spouse.years}-year route. Settled status also settles the lawful residence question: Guide AN says it normally meets that requirement on its own, without evidence of what you did before, and without any explanation about comprehensive sickness insurance. Pre-settled status is not settlement, and only a narrow group can naturalise with it. The step that surprises most EU citizens is the knowledge of language and life requirement. The scheme never tested it, so you must pass the Life in the UK Test and prove English at ${h.E.level} before applying, unless you are ${h.T.exemptFromAge} or over, have a qualifying condition, or hold the nationality of Ireland or Malta for the English part.`,
    faqs: (h) => [
      { q: 'Do I need the Life in the UK Test if I already have EU settled status?', a: `Yes, unless you are exempt by age or a long-term condition. Guide AN says that people granted settlement under the EU Settlement Scheme did not have to meet the knowledge of language and life requirements, so they must pass the Life in the UK Test and show English at ${h.E.level} before applying to naturalise. The scheme itself is not a ground for exemption.` },
      { q: 'Can I use my old EEA permanent residence card to apply for citizenship?', a: 'No longer. Guide AN says you can no longer apply for citizenship on the basis of permanent residence acquired under the EEA Regulations before 1 July 2021, and advises applying to the EU Settlement Scheme first. A late application to the scheme is still possible where there are reasonable grounds for missing the 30 June 2021 deadline.' },
      { q: 'After naturalising, can I still enter the UK on my French or German passport?', a: 'Often yes. gov.uk says that if you became British after settling under the EU Settlement Scheme, you can travel to the UK on a valid passport of your other nationality or an EU, Norwegian, Icelandic, Liechtenstein or Swiss identity card. Before travelling, check your eVisa and make sure the document you travel on is linked to your UKVI account, or expect delays at the border.' },
      { q: 'How long can I be away from the UK without losing settled status before I naturalise?', a: `gov.uk allows up to ${h.U.settlement.settledStatusLostAfterYears} years in a row outside the UK and Islands without losing settled status, or ${h.U.settlement.settledStatusSwissYears} years for Swiss citizens and their family members. That limit protects the status, not your citizenship date: absences still count against the ${h.num(h.N.route61.maxAbsenceDays)} and ${h.N.route61.maxAbsenceLast12m} day limits for naturalisation, which are far stricter.` },
    ],
    body: (h) => `
<h2>Which status do you hold?</h2>
${h.table(['Your status', 'Can you naturalise?', 'When'], [
  ['Settled status, standard route', 'yes', `${h.N.route61.ilrHeldMonths} months after the grant, once the ${h.N.route61.years} years are met`],
  ['Settled status, married to a British citizen', 'yes', `as soon as you hold it, once the ${h.N.route62spouse.years} years are met`],
  ['Pre-settled status', 'rarely', 'only with a permanent right of residence under the Withdrawal Agreement (below)'],
  ['Irish citizen', 'yes, without EUSS status', `after ${h.N.route61.years} years' residence`],
  ['Old EEA permanent residence card only', 'no', 'apply to the EU Settlement Scheme first'],
], 'Status and naturalisation, from Guide AN (July 2026) and gov.uk.', ['l', 'l', 'l'])}
<p>The small tool below the page summary answers the same question in two clicks. Irish citizens are a case apart: Guide AN says they are considered settled from the day they arrive, so they need no EUSS status at all to show they are free from time restrictions.</p>
<h2>The wait after settled status, worked through</h2>
<p>Marco, an Italian chef in Manchester since 2017, was granted settled status on 1 September 2025. Residence is not his problem. On the standard route his settled status must be ${h.N.route61.ilrHeldMonths} months old, so his first day is 1 September 2026, provided his trips home stay within ${h.N.route61.maxAbsenceLast12m} days in the final year. If Marco marries his British partner, the wait disappears and he can apply on the spouse route at once.</p>
<p>gov.uk confirms the wait in simple words: you can usually apply for citizenship ${h.N.route61.ilrHeldMonths} months after you are given settled status. Use those months to pass the Life in the UK Test and the English test, since neither result loses value in that time.</p>
<h2>Pre-settled status: the narrow door</h2>
<p>Pre-settled status is limited leave, so on its own it does not let you naturalise. gov.uk describes one exception: you are from the EU, Norway, Iceland or Liechtenstein (or a family member), started living in the UK by 31 December 2020, and have lived here ${h.N.route61.years} years in a row while working, looking for work for up to 3 months, studying or self-sufficient. That gives a permanent right of residence under the Withdrawal Agreement, which you prove with evidence of the qualifying activity. You then live here for another year before applying, unless your spouse or partner is British. For most people, converting to settled status first, which is free, is simpler.</p>
<h2>The knowledge requirements the scheme skipped</h2>
<p>Guide AN repeats it twice: settled status holders must meet the knowledge of language and life in the UK requirements before naturalising, and an application made without them may be refused with the fee kept. Two tests, then:</p>
<ul>
<li>The <strong>Life in the UK Test</strong>, ${h.T.questions} questions in ${h.T.minutes} minutes, ${h.gbp(h.T.fee)} a sitting. Only age (${h.T.exemptFromAge}+) or a long-term condition exempts you; the ${h.a('lt-exempt', 'exemptions page')} has the detail.</li>
<li><strong>English at ${h.E.level}</strong> in ${h.E.skills}. Nationals of Ireland and Malta, the two EU states on the majority English-speaking list, skip it by passport; others use a degree taught in English or an approved test.</li>
</ul>
<h2>After the ceremony</h2>
<p>Check whether your country of origin lets you keep its nationality before you apply: Guide AN warns that not every country allows dual citizenship, and the UK has no say in another state's law. Once British, you may keep travelling on your EU passport or identity card, as long as it is linked to the UKVI account that holds your EUSS record. Long absences before you naturalise are a different matter: the ${h.a('ilr-lost', 'time abroad page')} explains when settled status itself lapses.</p>`,
  },
});
