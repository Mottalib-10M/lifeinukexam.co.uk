import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'ilr-cost',
  group: 'settle',
  order: 124,
  tool: {"kind": "cost", "props": {"ilr": 1}},
  mini: {"kind": "mini:ilrwait"},
  related: ["ilr", "bc-cost", "lt-cost", "bc-priority"],
  sources: ["uk_fees", "uk_ilr_lose", "uk_priority", "uk_passport"],
  en: {
    slug: 'indefinite-leave-to-remain/cost',
    nav: "ILR then citizenship: total cost",
    card: 'The full price of the two-step path, indefinite leave to remain then naturalisation, for one person or a family, and when each bill falls due.',
    title: 'ILR Cost 2026 and the Path to Citizenship: Full Price',
    description: 'ILR cost in 2026 (£3,226 per person) plus British citizenship (£1,839), the test, passports and the priority option: the two-step total and when each is due.',
    h1: 'ILR then citizenship: what the whole path costs',
    intro: 'The calculator includes indefinite leave to remain for each person. Adjust the household and options to see the total for both steps.',
    resume: (h) => `Most people who become British pay twice: first for indefinite leave to remain, then for naturalisation. Under the Home Office fees table in force since ${h.date(h.F.effective)}, ILR costs ${h.gbp(h.F.ilr)} for each applicant, main applicant and dependants alike, and naturalisation costs ${h.gbp(h.total)} per adult (${h.gbp(h.F.naturalisation)} plus the ${h.gbp(h.F.ceremony)} ceremony). The Life in the UK Test, at ${h.gbp(h.T.fee)} a sitting, is usually paid only once, since a pass for settlement also serves for citizenship. A first adult passport adds ${h.gbp(h.P.uk.passport.adultOnline)} online. One adult who passes the test first time therefore pays ${h.gbp(h.F.ilr + h.totalWithTest + h.P.uk.passport.adultOnline)} across the two steps, before any English test, whose price is set by the provider. The bills are spread out: on the standard route there are at least ${h.N.route61.ilrHeldMonths} months between the ILR grant and the citizenship application. EU citizens with settled status skip the first bill, because the EU Settlement Scheme charged nothing.`,
    faqs: (h) => [
      { q: 'Does each family member pay the full ILR fee?', a: `The fees table lists indefinite leave to remain at ${h.gbp(h.F.ilr)} for the main applicant and dependants, so each person included pays it. A couple with two children applying together therefore pays ${h.gbp(4 * h.F.ilr)} for settlement alone. Children who later become British are registered at ${h.gbp(h.F.registrationChild)} each rather than naturalised, which keeps the second step cheaper for them.` },
      { q: 'Is there a priority service for ILR applications as well as citizenship?', a: `Yes. gov.uk says the priority service, at ${h.gbp(h.F.priority)} on top of the application fee, can be used for settlement and citizenship applications, which usually take ${h.F.priorityWorkingDays} working days with it. A super priority service exists for settlement but not for citizenship. Paying for priority on both steps adds ${h.gbp(2 * h.F.priority)} per person.` },
      { q: 'Can I skip ILR and apply for citizenship directly to save money?', a: 'Not on the naturalisation routes. Guide AN requires you to be free from immigration time restrictions when you apply, which in practice means holding indefinite leave, EU settled status, the right of abode or Irish citizenship. Without one of those, citizenship applications under section 6 fail, so the fee for settlement cannot be avoided unless another status already covers you.' },
    ],
    body: (h) => `
<h2>One person, two steps</h2>
${h.table(['Step', 'Fee', 'When'], [
  ['Life in the UK Test', `${h.gbp(h.T.fee)} a sitting`, 'before the ILR application, if your route needs it'],
  ['English test (if needed)', 'set by the provider', 'before ILR, or before citizenship'],
  ['Indefinite leave to remain', h.gbp(h.F.ilr), 'when you qualify for settlement'],
  ['Naturalisation + ceremony', h.gbp(h.total), `${h.N.route61.ilrHeldMonths} months after ILR on the standard route; at once for a spouse of a British citizen`],
  ['First adult passport (online)', h.gbp(h.P.uk.passport.adultOnline), 'after the ceremony'],
  ['Total, one adult, one test sitting', h.gbp(h.F.ilr + h.totalWithTest + h.P.uk.passport.adultOnline), ''],
], `Home Office fees table in force from ${h.date(h.F.effective)} and gov.uk passport fees. English test prices excluded.`, ['l', 'r', 'l'])}
<h2>A family over time</h2>
<p>Take Ravi and Meera, both on work routes with two children aged 9 and 13, all applying for settlement together. The tool at the top lays out the same household. Their bills fall in three waves:</p>
<ol>
<li><strong>Settlement:</strong> four ILR applications at ${h.gbp(h.F.ilr)}, ${h.gbp(4 * h.F.ilr)} in all, plus ${h.gbp(2 * h.T.fee)} for two Life in the UK Test sittings if both parents pass first time.</li>
<li><strong>Citizenship, at least ${h.N.route61.ilrHeldMonths} months later:</strong> ${h.gbp(2 * h.total)} for the parents and ${h.gbp(2 * h.F.registrationChild)} to register the children.</li>
<li><strong>Passports:</strong> ${h.gbp(2 * h.P.uk.passport.adultOnline)} for the adults online; the 13-year-old's depends on age at the time (adult rate from 16, ${h.gbp(h.P.uk.passport.adultOnline)}; child rate under 16, ${h.gbp(h.P.uk.passport.childOnline)}).</li>
</ol>
<p>Using the child rate for both children, the whole path costs ${h.gbp(4 * h.F.ilr + 2 * h.T.fee + 2 * h.total + 2 * h.F.registrationChild + 2 * h.P.uk.passport.adultOnline + 2 * h.P.uk.passport.childOnline)}. Spread over the waiting period, the second wave can be saved for while the first is digested.</p>
<h2>Ways the total moves</h2>
<ul>
<li><strong>Spouse route.</strong> A spouse or civil partner of a British citizen still pays for ILR but can naturalise straight after, so both bills may fall within a few months.</li>
<li><strong>EU Settlement Scheme.</strong> Settled status was free, so EU citizens pay only the citizenship step, plus the test and English they did not need for the scheme.</li>
<li><strong>Failing the test.</strong> Each extra sitting costs ${h.gbp(h.T.fee)}; there is no limit on attempts.</li>
<li><strong>Priority.</strong> ${h.gbp(h.F.priority)} more per application, on either step.</li>
<li><strong>Losing ILR.</strong> ILR lapses after ${h.U.settlement.ilrLostAfterYearsAbroad} years in a row abroad, and getting back in costs more time and money; see ${h.a('ilr-lost', 'time abroad')}.</li>
</ul>
<h2>Paying once instead of twice</h2>
<p>Two of the costs on the path can be paid a single time if you plan for it. The first is the Life in the UK Test: gov.uk says you do not need to take it again for citizenship if you passed it for settlement, so the ${h.gbp(h.T.fee)} you spend before ILR also covers naturalisation. The second is the English test. A ${h.E.level} speaking and listening result accepted for your ILR can be relied on for citizenship with no time limit, according to Guide AN and gov.uk, whereas a result taken separately for citizenship has to be less than ${h.E.seltValidYears} years old when you apply. Applicants whose route excuses them from English at settlement sometimes take the test anyway and include it with the ILR application for that reason.</p>
<p>The reverse also holds: an application made without the test or English, when you are not exempt, can be refused with the fee retained, Guide AN warns. Checking each requirement before paying ${h.gbp(h.F.ilr)} or ${h.gbp(h.total)} is the cheapest step of all. Biometrics carry no separate fee for citizenship, according to gov.uk.</p>
<h2>Timing the second bill</h2>
<p>The tool below gives the first date you can apply for citizenship from your ILR grant. That date is also the earliest moment the ${h.gbp(h.total)} falls due, though you can apply later. The fees are revised from time to time; the table of ${h.date(h.F.effective)} kept these figures unchanged, and we read it again every month. For the citizenship step alone, including children and options, the ${h.a('bc-cost', 'citizenship cost page')} has a dedicated calculator.</p>`,
  },
});
