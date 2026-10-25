import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'bc-cost',
  group: 'citizenship',
  order: 92,
  tool: {"kind": "cost"},
  mini: {"kind": "mini:natcost"},
  related: ["bc-priority", "bc-children", "lt-cost", "bc-application", "bc-after"],
  sources: ["uk_fees", "uk_priority", "uk_passport", "uk_ilr"],
  demarche: true,
  en: {
    slug: 'british-citizenship/cost',
    nav: "Citizenship cost",
    card: 'Every fee between settlement and a British passport, from the Home Office table in force since 8 October 2026, added up for your household.',
    title: 'British Citizenship Cost 2026: Fees for Adults and Children',
    description: 'British citizenship cost in 2026: £1,709 plus the £130 ceremony per adult, £1,000 per child, the £50 test, priority and first passports, totalled for a family.',
    h1: 'How much British citizenship costs in 2026',
    intro: 'Set the number of adults and children, the test attempts and the options. The calculator adds the official fees line by line.',
    resume: (h) => `Naturalising as a British citizen costs one adult ${h.gbp(h.total)} in Home Office fees: ${h.gbp(h.F.naturalisation)} for the application and ${h.gbp(h.F.ceremony)} for the citizenship ceremony, both paid when you apply, under the fees table in force since ${h.date(h.F.effective)}. Add ${h.gbp(h.T.fee)} for each sitting of the Life in the UK Test and the price of an approved English test if you need one. Registering a child under 18 costs ${h.gbp(h.F.registrationChild)}, plus ${h.gbp(h.F.ceremony)} if the child turns 18 during the process. The priority service adds ${h.gbp(h.F.priority)} per application. Taking biometrics carries no fee. After the ceremony, a first adult passport costs ${h.gbp(h.P.uk.passport.adultOnline)} online or ${h.gbp(h.P.uk.passport.adultPaper)} on paper, and ${h.gbp(h.P.uk.passport.childOnline)} for a child under 16 online. If you are not yet settled, indefinite leave to remain comes first, at ${h.gbp(h.F.ilr)}. A couple with two children who all pass first time pays ${h.gbp(2 * h.totalWithTest + 2 * h.F.registrationChild)} in fees before passports.`,
    faqs: (h) => [
      { q: 'Is the £130 ceremony fee optional if I do not want a ceremony?', a: `No. For adults the ceremony is a legal requirement and the point at which you become British, and the ${h.gbp(h.F.ceremony)} is part of the ${h.gbp(h.total)} paid with the application. gov.uk says the ceremony cost is included in the application fee. You might pay more to your local authority if you choose a private ceremony instead of a group one.` },
      { q: 'Can I get a fee waiver for a child\'s citizenship application?', a: `Possibly. gov.uk says that if your child is under 18 and you cannot afford the ${h.gbp(h.F.registrationChild)} registration fee, you may be able to apply for a fee waiver. No similar waiver is mentioned for adults applying to naturalise. Applications under the Windrush Scheme are free of charge, according to Guide AN.` },
      { q: 'Do I get the priority fee back if the decision takes longer than promised?', a: `Not usually. gov.uk says the ${h.gbp(h.F.priority)} is not refunded if the decision is late because the Home Office needed more information or evidence, though it may refund it if the delay was caused by something outside its control, such as a technical problem. It also states that a refused application gets no refund.` },
      { q: 'Why does the Life in the UK Test sometimes cost more than £50 in total?', a: `Because the ${h.gbp(h.T.fee)} buys one sitting. If you fail, you book and pay again, with no limit on attempts. A cancellation less than ${h.T.bookAtLeastDaysAhead} days before the test is not refunded either, nor is a sitting lost because you brought the wrong ID. Two attempts make the test ${h.gbp(2 * h.T.fee)}, which is why practising until you pass mock tests comfortably saves money.` },
    ],
    body: (h) => `
<h2>Every fee on the way</h2>
${h.table(['Item', 'Fee', 'Who pays it'], [
  ['Naturalisation application', h.gbp(h.F.naturalisation), 'each adult'],
  ['Citizenship ceremony', h.gbp(h.F.ceremony), 'each adult (and each child who turns 18 before the decision)'],
  ['Life in the UK Test', `${h.gbp(h.T.fee)} a sitting`, 'each adult not exempt'],
  ['Registration of a child', h.gbp(h.F.registrationChild), 'each child under 18 not already British'],
  ['Priority service', `${h.gbp(h.F.priority)} extra`, 'optional, per application'],
  ['Biometrics', 'no fee', 'everyone'],
  ['Indefinite leave to remain', h.gbp(h.F.ilr), 'only if not yet settled'],
  ['Adult passport, online / paper', `${h.gbp(h.P.uk.passport.adultOnline)} / ${h.gbp(h.P.uk.passport.adultPaper)}`, 'after the ceremony'],
  ['Child passport, online', h.gbp(h.P.uk.passport.childOnline), 'after registration'],
], `Home Office fees table in force from ${h.date(h.F.effective)} (OGL v3.0), gov.uk passport fees and Life in the UK Test fee.`, ['l', 'r', 'l'])}
<p>English test prices are set by the providers, not the Home Office, so the calculator leaves them out; check the provider's website when you book. Advice from a regulated adviser or solicitor is also optional and not counted. Nor is travel to a test centre or to your biometrics appointment, which can matter if the nearest venue is in another city.</p>
<h2>Three households, three totals</h2>
<p><strong>A single applicant</strong> who passes the test first time and needs no English test pays ${h.gbp(h.totalWithTest)}, then ${h.gbp(h.P.uk.passport.adultOnline)} for a passport online: ${h.gbp(h.totalWithTest + h.P.uk.passport.adultOnline)} from start to finish.</p>
<p><strong>A couple</strong> who both naturalise, one of whom fails the test once: ${h.gbp(2 * h.total)} in Home Office fees, ${h.gbp(3 * h.T.fee)} for three test sittings, ${h.gbp(2 * h.P.uk.passport.adultOnline)} for two passports. Total ${h.gbp(2 * h.total + 3 * h.T.fee + 2 * h.P.uk.passport.adultOnline)}.</p>
<p><strong>A family of four</strong> with two children born abroad: ${h.gbp(2 * h.totalWithTest)} for the parents, ${h.gbp(2 * h.F.registrationChild)} to register the children, and ${h.gbp(2 * h.P.uk.passport.adultOnline + 2 * h.P.uk.passport.childOnline)} for four passports online, ${h.gbp(2 * h.totalWithTest + 2 * h.F.registrationChild + 2 * h.P.uk.passport.adultOnline + 2 * h.P.uk.passport.childOnline)} in all. With the priority service on all four applications, add ${h.gbp(4 * h.F.priority)}.</p>
<h2>Fees that only some people pay</h2>
<ul>
<li><strong>Settlement first.</strong> Anyone without indefinite leave to remain or EU settled status pays for settlement before citizenship. EU settled status was free; ILR costs ${h.gbp(h.F.ilr)}. The ${h.a('ilr-cost', 'settlement cost page')} adds the two steps together.</li>
<li><strong>Registration under the provisions for Irish citizens.</strong> The fees table lists a lower fee for this kind of registration: ${h.gbp(h.F.registrationIrishChild)} for a child and ${h.gbp(h.F.registrationIrishAdult)} for an adult. It is a separate legal route from naturalisation, with its own conditions, so check that it applies to you before relying on the lower figure.</li>
<li><strong>Mistakes after the ceremony.</strong> A reissued certificate costs ${h.gbp(h.F.reissuedCertificate)}, though Guide AN says you only pay to correct an error on your certificate if the mistake was yours.</li>
<li><strong>Oath outside a ceremony.</strong> ${h.gbp(h.F.oathNotAtCeremony)}, in the rare cases where it applies.</li>
</ul>
<h2>When money is lost</h2>
<p>The fee pays for the decision, not for a grant. gov.uk states that a refused application gets no refund in the priority service context, and Guide AN warns that applications without the test or English, with absences far above the limits, or with untruthful declarations may lose the fee. Missing the ceremony window without good reason means a refusal and a new application at the full price. Spending ${h.gbp(h.T.fee)} on a test sitting only when your mocks are comfortably above the pass mark, and checking the ${h.a('bc-date', 'earliest date')} before paying ${h.gbp(h.F.naturalisation)}, are the two cheapest insurance policies available.</p>
<p>The figures here come from the Home Office table in force since ${h.date(h.F.effective)}, which left every nationality fee at its previous level. We compare the published table with our data each month and change the calculator when an amount moves, so the date under each table tells you when it was last checked.</p>
<p>The calculator only shows official fees. We take no payment and file nothing: you pay the Home Office directly when you apply online, as explained in the ${h.a('bc-application', 'application guide')}.</p>`,
  },
});
