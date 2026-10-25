import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'bc-citizenship',
  group: 'citizenship',
  order: 80,
  tool: {"kind": "date"},
  mini: {"kind": "mini:routes"},
  related: ["bc-date", "bc-cost", "british-test", "en-test", "bc-application"],
  sources: ["uk_british", "uk_ilr", "uk_spouse", "uk_guidance", "uk_guide_an"],
  en: {
    slug: 'british-citizenship',
    nav: "British citizenship",
    card: 'The conditions to naturalise as a British citizen, the two residence routes, the steps and the fees, with a calculator for your first date.',
    title: 'British Citizenship Requirements 2026: Routes, Steps, Fees',
    description: 'British citizenship by naturalisation in 2026: the 5-year and 3-year routes, absences, the test, English, character, fees and a calculator for your first date.',
    h1: 'Becoming a British citizen: requirements and routes',
    intro: 'Enter your arrival date and your trips abroad: the calculator finds the first day you meet the residence rules, then the checklist below covers the rest.',
    resume: (h) => `Most adults become British by naturalisation under the British Nationality Act 1981. The standard route, section 6(1), asks for ${h.N.route61.years} years' residence with no more than ${h.num(h.N.route61.maxAbsenceDays)} days abroad, at most ${h.N.route61.maxAbsenceLast12m} of them in the final 12 months, and indefinite leave to remain or EU settled status held for ${h.N.route61.ilrHeldMonths} months. The spouse or civil partner of a British citizen uses section 6(2): ${h.N.route62spouse.years} years, ${h.num(h.N.route62spouse.maxAbsenceDays)} days abroad, ${h.N.route62spouse.maxAbsenceLast12m} in the last year, and no wait after settlement. On both routes you must be ${h.N.minAge} or over, have been in the UK on the first day of the period, pass the Life in the UK Test, show English at ${h.E.level} and be of good character; on the 6(1) route you must also intend to keep living in the UK. The Home Office fee is ${h.gbp(h.F.naturalisation)} plus ${h.gbp(h.F.ceremony)} for the ceremony, ${h.gbp(h.total)} in all, and a decision usually comes within ${h.N.decisionUsuallyMonths} months. Naturalisation is discretionary: meeting the conditions makes you eligible, not automatically British.`,
    faqs: (h) => [
      { q: 'I was born in the UK. Am I automatically a British citizen?', a: 'Not necessarily. gov.uk says birth in the UK does not on its own make you British: it depends on when you were born and on your parents\' circumstances, such as whether one of them was British or settled at the time. Use the official check on gov.uk before applying to naturalise, because someone who is already British, or entitled to register, should not pay for naturalisation.' },
      { q: 'Can I choose between the 5-year route and the spouse route if I am married to a British citizen?', a: `Yes. gov.uk says that if you are eligible in more than one way you can choose which way to apply. Most married applicants pick section 6(2) because it needs ${h.N.route62spouse.years} years rather than ${h.N.route61.years}, has no ${h.N.route61.ilrHeldMonths}-month wait after settlement and no future intention requirement. The fee is the same on both routes.` },
      { q: 'Do I need to keep my visa or status valid while my citizenship application is pending?', a: 'Yes. Guide AN states that a nationality application gives you no immigration status while it is considered, so you need valid permission to stay until you have had your decision and attended the ceremony. Indefinite leave to remain, settled status and pre-settled status all count as permission for this purpose, according to gov.uk.' },
      { q: 'Can I apply for British citizenship with pre-settled status?', a: 'In a narrow case. gov.uk allows it if you are from the EU, Norway, Iceland or Liechtenstein (or a family member), started living in the UK by 31 December 2020, and have lived here 5 years in a row while working, studying, looking for work for up to 3 months or self-sufficient. You then wait a further year, unless your spouse is British. Most people convert to settled status first.' },
    ],
    body: (h) => `
<h2>The checklist, condition by condition</h2>
${h.table(['Condition', 'Section 6(1), standard', 'Section 6(2), spouse or civil partner'], [
  ['Age', `${h.N.minAge} or over`, `${h.N.minAge} or over`],
  ['Residence period', `${h.N.route61.years} years`, `${h.N.route62spouse.years} years`],
  ['In the UK on the first day of the period', 'yes', 'yes'],
  ['Days abroad in the whole period', `${h.num(h.N.route61.maxAbsenceDays)} at most`, `${h.num(h.N.route62spouse.maxAbsenceDays)} at most`],
  ['Days abroad in the last 12 months', `${h.N.route61.maxAbsenceLast12m} at most`, `${h.N.route62spouse.maxAbsenceLast12m} at most`],
  ['Settlement held before applying', `${h.N.route61.ilrHeldMonths} months`, 'any length, on the day you apply'],
  ['Intention to live in the UK', 'required', 'not required'],
  ['Life in the UK Test and English', 'both, unless exempt', 'both, unless exempt'],
  ['Good character', 'required', 'required'],
], 'Statutory requirements for naturalisation, from Guide AN (July 2026) and the Home Office nationality guidance (version 16.0).', ['l', 'l', 'l'])}
<p>Each line has its own page: ${h.a('bc-absences', 'absences')}, ${h.a('bc-spouse', 'the spouse route')}, ${h.a('british-test', 'the test')}, ${h.a('en-test', 'the English requirement')} and ${h.a('bc-good-character', 'good character')}. The calculator at the top handles the four lines about time.</p>
<h2>The date is where most applications go wrong</h2>
<p>Three time rules run at once and the last one to be met decides your date. Take Karim, who arrived on a work visa on 15 August 2020, got indefinite leave to remain on 1 October 2025 and never travelled for long. His ${h.N.route61.years} years end in August 2025, but on the 6(1) route he must also have held ILR for ${h.N.route61.ilrHeldMonths} months, so his first date is in October 2026, not 2025. Guide AN warns that on this route you may need to wait until you have been in the UK for at least ${h.U.settlement.waitOftenYears} years.</p>
<p>The first-day rule matters too. The period starts on the day after the application date minus ${h.N.route61.years} (or ${h.N.route62spouse.years}) years, and you must have been physically in the UK that day. gov.uk gives the case of someone abroad from 10 to 25 June 2017 whose application arrives on 20 June 2022: they do not qualify and must wait until 24 June 2022. The calculator flags these days.</p>
<h2>From application to passport</h2>
<ol>
<li>Pass the Life in the UK Test and meet the English requirement; keep both reference numbers.</li>
<li>Find two referees who meet the rules (one professional, one British passport holder).</li>
<li>Apply online and pay ${h.gbp(h.total)}; the application counts as received the same day.</li>
<li>Give your biometrics within ${h.N.biometricsDays} days, or the application becomes invalid.</li>
<li>Wait for the decision, usually within ${h.N.decisionUsuallyMonths} months; a priority service exists for ${h.gbp(h.F.priority)} more.</li>
<li>Attend a citizenship ceremony within ${h.N.ceremonyWithinDays} days of the invitation; you become British when you take the oath.</li>
<li>Apply for a British passport with your naturalisation certificate, which cannot be used to travel.</li>
</ol>
<p>The ${h.a('bc-application', 'application guide')} goes through each step and the ${h.a('bc-cost', 'cost page')} adds up the fees for a household, including children, who are registered rather than naturalised.</p>
<h2>Discretion works both ways</h2>
<p>Guide AN opens with a reminder that naturalisation is not an entitlement: the Home Secretary may grant it only to people who meet the statutory requirements, and may still refuse. In the other direction, caseworkers can overlook some shortfalls. Absences slightly above the limit, a missed first day for reasons such as illness, or a recent move to settlement can be set aside in defined circumstances, which the ${h.a('bc-discretion', 'excess absences page')} describes. Guide AN warns more than once that a failed application can cost you the fee, so the safest application is one that needs no discretion at all.</p>
<p>Other ways in exist for people with a British parent, other forms of British nationality, stateless people and Commonwealth citizens covered by the Windrush Scheme, which charges no fee. gov.uk lists them on its eligibility page; this site covers naturalisation.</p>`,
  },
});
