import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'ilr',
  group: 'settle',
  order: 120,
  tool: {"kind": "mini:ilrwait"},
  mini: {"kind": "mini:ukexempt"},
  related: ["ilr-lost", "ilr-cost", "bc-date", "lt-exempt", "en-b2"],
  sources: ["uk_ilr_lose", "uk_english", "uk_fees", "uk_test", "uk_ilr"],
  en: {
    slug: 'indefinite-leave-to-remain',
    nav: "ILR and the test",
    card: 'The Life in the UK Test and English for indefinite leave to remain, who is exempt, and how one pass also serves for citizenship.',
    title: 'ILR Life in the UK Test: Settlement, English, Citizenship',
    description: 'Life in the UK Test and English for indefinite leave to remain: who needs them, route exemptions, the £3,226 fee and how a pass carries over to citizenship.',
    h1: 'Indefinite leave to remain and the Life in the UK Test',
    intro: 'Already settled? Enter your grant date to see when citizenship opens. Still on the way? The page explains what settlement asks of you.',
    resume: (h) => `Indefinite leave to remain (ILR) is how you settle in the UK: gov.uk describes it as the right to live, work and study here for as long as you like, and the status you use to apply for British citizenship. Many routes reach it after ${h.N.route61.years} years, some sooner, and long lawful residence is a route of its own. Applicants aged ${h.T.exemptUnder} to ${h.T.exemptFromAge - 1} usually have to show knowledge of English and of life in the UK: they pass the Life in the UK Test (${h.T.questions} questions, ${h.T.minutes} minutes, ${h.gbp(h.T.fee)}) and prove English at ${h.E.level} in ${h.E.skills}, unless their route exempts them. Doing both for settlement pays off later: gov.uk says you need not retake the test for citizenship if you passed it for settlement, and a ${h.E.level} result accepted for your ILR can be reused for naturalisation with no time limit. The ILR fee is ${h.gbp(h.F.ilr)} under the table in force since ${h.date(h.F.effective)}. On the standard route you then wait ${h.N.route61.ilrHeldMonths} months before applying for citizenship.`,
    faqs: (h) => [
      { q: 'Do I need the Life in the UK Test for ILR on a Skilled Worker visa?', a: 'For the Life in the UK Test, check your route guidance: the gov.uk test page says you may need it for settlement and to check the application guidance. For English, gov.uk lists Skilled Worker among the work routes where you need not prove English again for settlement, because you proved it for your visa. Plan for citizenship, though, where English is required unless you meet another exemption.' },
      { q: 'I passed the Life in the UK Test for my ILR years ago. Do I need to take it again for citizenship?', a: 'No. gov.uk lists having passed it before, for example for a settlement application, among the reasons you do not need to take the test. You give the reference number from your pass, or for tests before 17 December 2019 the details from your letter. If you lost the letter, gov.uk says to send a letter explaining that with your application.' },
      { q: 'I was exempt from English for my ILR as a refugee. Am I exempt for citizenship too?', a: `Not automatically. The gov.uk English page says that if you were exempt when you were granted settlement, you will need to submit an exemption form again for citizenship, and Guide AN says exemptions granted for settlement on grounds other than age or a long-term condition do not carry over. Most former refugees therefore need a ${h.E.level} test, a degree taught in English or a listed passport.` },
    ],
    body: (h) => `
<h2>Routes to settlement</h2>
<p>gov.uk groups the ways to ILR by circumstance. The time needed varies:</p>
${h.table(['Route', 'Usual time in the UK', 'Notes from gov.uk'], [
  ['Work visas (Skilled Worker and others)', `usually ${h.N.route61.years} years`, 'shorter for Global Talent, Innovator Founder and old tier 1 visas'],
  ['Family (partner, parent, child)', 'depends on the visa', 'other routes if a partner died or after domestic violence'],
  ['Long residence', 'a long continuous period, see the route', 'separate route for private life visas'],
  ['UK Ancestry', `${h.N.route61.years} years`, 'Commonwealth citizens'],
  ['British National (Overseas) visa', `${h.N.route61.years} years`, ''],
  ['Refugees, humanitarian protection, armed forces, stateless people', 'varies', 'see the route guidance'],
  ['EU Settlement Scheme', 'continuous residence, see the scheme', 'settled status, free, no test or English required'],
], 'Settlement routes summarised from gov.uk, "Check if you can get indefinite leave to remain".', ['l', 'l', 'l'])}
<h2>The test and English at the settlement stage</h2>
<p>The Life in the UK Test is the same test whether you take it for settlement or citizenship, booked only through gov.uk at least ${h.T.bookAtLeastDaysAhead} days ahead. The test page lists who need not take it: anyone under ${h.T.exemptUnder}, anyone ${h.T.exemptFromAge} or over, anyone who has passed it before, and people with a long-term physical or mental condition backed by an exemption form or a doctor's letter. The second tool below applies those rules.</p>
<p>English for settlement follows the gov.uk page on proving your English: a qualification at ${h.E.level} or above on the approved list, or a degree taught in English, unless you are exempt. The settlement exemptions are wider than for citizenship. They include several work routes (Skilled Worker, Scale-up Worker, Innovator Founder, International Sportsperson and others, because English was proved for the visa), refugees and people with humanitarian protection, victims of domestic violence and bereaved partners. An expired qualification can still be used for settlement if it is on the current list and was accepted for an earlier immigration application.</p>
<p>From ${h.date(h.E.settlementB2From)}, HC 1691 raises the level for settlement to B2 on many routes; the ${h.a('en-b2', 'B2 page')} explains who is concerned.</p>
<h2>Why it is worth doing both now</h2>
<p>Suppose Nadia, on a Skilled Worker visa, reaches settlement in 2026. Her route spares her the English requirement for ILR. If she sits a ${h.E.level} speaking and listening test anyway and uses it in her ILR application, it will be "accepted for settlement", and Guide AN lets her rely on it for citizenship whatever its age. If she does not, she will need a fresh result, valid for ${h.E.seltValidYears} years, when she naturalises. The same goes for the Life in the UK Test: one pass serves both steps.</p>
<h2>After the grant</h2>
<p>Once you hold ILR, the clock for citizenship starts. On the standard route gov.uk says you must usually have lived in the UK for ${h.N.route61.ilrHeldMonths} months after getting it; if your spouse or civil partner is British, you can apply at once. The tool at the top gives the date from your grant. Keep two limits in mind meanwhile: ILR lapses after ${h.U.settlement.ilrLostAfterYearsAbroad} years in a row outside the UK (see ${h.a('ilr-lost', 'time abroad')}), and absences still count against the citizenship limits. For the money side, the ${h.a('ilr-cost', 'ILR and citizenship cost page')} adds the two applications together, from the first test sitting to the first passport.</p>`,
  },
});
