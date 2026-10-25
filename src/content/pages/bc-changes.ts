import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'bc-changes',
  group: 'citizenship',
  order: 114,
  tool: {"kind": "mini:b2rule"},
  mini: {"kind": "mini:ilrwait"},
  related: ["en-b2", "ilr", "bc-citizenship", "bc-cost"],
  sources: ["uk_earned", "uk_hc1691", "uk_fees", "uk_guide_an"],
  en: {
    slug: 'british-citizenship/rule-changes',
    nav: "What is changing",
    card: 'What has changed for settlement and citizenship in 2026, what is only proposed, and what stays exactly the same, each with its date and source.',
    title: 'Citizenship and Settlement Rule Changes: 2026 to 2027',
    description: 'UK settlement and citizenship rule changes: earned settlement (consultation only), B2 English for settlement from March 2027, October 2026 fees and BRP rules.',
    h1: 'What is changing for settlement and citizenship',
    intro: 'Rules change often and rumours faster. Here is the state of play on 25 October 2026, separating what is in force, what is scheduled and what is only proposed.',
    resume: (h) => `On 25 October 2026 the conditions for naturalisation are those of Guide AN (July 2026) and the nationality guidance version 16.0: ${h.N.route61.years} years' residence on the standard route, ${h.num(h.N.route61.maxAbsenceDays)} days abroad at most, settlement held for ${h.N.route61.ilrHeldMonths} months, the Life in the UK Test and English at ${h.E.level}. Two changes are coming and should not be confused. The first is scheduled: under HC 1691, laid on 5 March 2026, settlement applications on many routes will need English at B2 from ${h.date(h.E.settlementB2From)}, while citizenship stays at ${h.E.level}. The second is only proposed: the "earned settlement" consultation, opened on 20 November 2025 and closed on 12 February 2026, would end settlement as an automatic step after a fixed period and require migrants to earn it through conduct, contribution and integration. No final rules from it were in force on 25 October 2026. Meanwhile the fees table of ${h.date(h.F.effective)} kept naturalisation at ${h.gbp(h.F.naturalisation)}, the ceremony at ${h.gbp(h.F.ceremony)} and ILR at ${h.gbp(h.F.ilr)}.`,
    faqs: (h) => [
      { q: 'Has earned settlement changed the rules for my ILR application already?', a: 'Not as of 25 October 2026. The Home Office consultation on earned settlement ran from 20 November 2025 to 12 February 2026, and no final rules from it were in force on that date. Check the Immigration Rules for your route when you apply, and treat summaries of the proposals as previews, not law.' },
      { q: 'Did the citizenship fee go up on 8 October 2026?', a: `No. The fees table that took effect on ${h.date(h.F.effective)} lists the same figures as before for naturalisation (${h.gbp(h.F.naturalisation)}), the ceremony (${h.gbp(h.F.ceremony)}), child registration (${h.gbp(h.F.registrationChild)}) and indefinite leave to remain (${h.gbp(h.F.ilr)}), with the change column at zero. Fees are reviewed regularly, so we read the table again every month.` },
      { q: 'Is the Life in the UK Test changing?', a: `Nothing published on gov.uk by 25 October 2026 changes the format: ${h.T.questions} questions, ${h.T.minutes} minutes, a pass at ${h.pc(h.T.passPercent / 100)}, ${h.gbp(h.T.fee)} a sitting, questions drawn only from the third edition of the handbook. The 2025 white paper on immigration and the earned settlement consultation discuss integration more broadly, but no new test or handbook has been announced as in force.` },
      { q: 'I applied before the B2 rule takes effect. Will it apply to me?', a: `HC 1691 sets the B2 level for settlement applications made from ${h.date(h.E.settlementB2From)} on the routes it covers. A settlement application made before that date is assessed at ${h.E.level}. Citizenship applications are outside the change in any case. If your settlement date is close to the cut-off, read the transitional wording for your route in the rules themselves.` },
    ],
    body: (h) => `
<h2>In force, scheduled, proposed</h2>
${h.table(['Change', 'Status on 25 October 2026', 'Who it affects'], [
  [`Fees table of ${h.date(h.F.effective)}`, 'in force; nationality and ILR fees unchanged', 'everyone applying'],
  ['BRP destroyed after the ceremony (Guide AN)', 'in force since 23 April 2026', 'new citizens'],
  ['Expired BRP accepted as ID or evidence', `only until ${h.date(h.T.brpDeadline)}, and within ${h.T.brpMonthsAfterExpiry} months of expiry`, 'test candidates, applicants'],
  ['LanguageCert four-skill ESOL SELT replaced', `since 6 July 2025; old results valid ${h.E.seltValidYears} years`, 'English test takers'],
  [`English B2 for settlement (HC 1691)`, `scheduled from ${h.date(h.E.settlementB2From)}`, 'settlement applicants on many routes'],
  ['Earned settlement', 'consultation closed 12 February 2026; no final rules', 'future settlement applicants'],
], 'Status of recent and coming changes, from gov.uk and Home Office publications, read on ' + h.date(h.P.retrieved_at) + '.', ['l', 'l', 'l'])}
<p>The tool at the top shows which English level applies to an application on a given date. The one below shows when you can apply for citizenship after settlement under today's rules.</p>
<h2>Earned settlement: what is actually known</h2>
<p>The Home Office consultation page summarises the idea in three sentences. Settlement, also known as indefinite leave to remain, is the right to live in the UK permanently without immigration restrictions. The 2025 Immigration White Paper, <em>Restoring Control over the Immigration System</em>, introduced significant reforms to how migrants can settle. Settlement would no longer be granted automatically after a fixed period; migrants would need to earn it by demonstrating sustained good conduct, contribution and integration.</p>
<p>Beyond that, details reported in the press are proposals until rules are laid before Parliament. We will update this page when they are. Two practical points follow. First, the consultation is about how settlement will be earned in future; whether anything would change for people already settled depends on rules that have not been written. Second, because citizenship normally requires settlement first, any longer path to settlement would push back citizenship dates for those not yet settled, even if the naturalisation rules themselves did not change.</p>
<h2>What stays the same for citizenship</h2>
<ul>
<li>The two routes: ${h.N.route61.years} years (section 6(1)) and ${h.N.route62spouse.years} years for spouses and civil partners (section 6(2)).</li>
<li>The absence limits and the discretion bands in the nationality guidance.</li>
<li>English at ${h.E.level} in ${h.E.skills}, with the same alternatives (degree, listed nationality, exemptions).</li>
<li>The Life in the UK Test: format, pass mark and handbook.</li>
<li>A decision usually within ${h.N.decisionUsuallyMonths} months, priority within ${h.F.priorityWorkingDays} working days for ${h.gbp(h.F.priority)}.</li>
</ul>
<h2>What to do now</h2>
<p>If you already qualify for citizenship, nothing announced so far is a reason to wait, and the ${h.a('bc-date', 'date calculator')} shows your first day. If you are working towards settlement, check whether your ILR application will fall before or after ${h.date(h.E.settlementB2From)} and whether your route is one the B2 rule covers; the ${h.a('en-b2', 'B2 page')} has worked cases. Keep an eye on the earned settlement proposals, but plan on the rules that exist. When rules do change, the Home Office publishes a statement of changes with a start date, as it did with HC 1691, and its wording says which applications the change covers, usually by the date they are made. Our tools apply the rules in force on the date you enter. Guide AN itself shows how rules shift: its July 2026 edition notes that the citizenship ban introduced by the Illegal Migration Act 2023 never took effect, after regulations of 23 July 2024.</p>`,
  },
});
