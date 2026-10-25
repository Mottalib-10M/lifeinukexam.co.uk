import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'bc-application',
  group: 'citizenship',
  order: 102,
  tool: {"kind": "mini:timeline"},
  mini: {"kind": "mini:fees"},
  related: ["bc-date", "bc-cost", "bc-referees", "bc-processing", "bc-ceremony"],
  sources: ["uk_ilr", "uk_guide_an", "uk_spouse"],
  demarche: true,
  en: {
    slug: 'british-citizenship/how-to-apply',
    nav: "How to apply",
    card: 'The naturalisation application from the first screen to the biometrics appointment: documents to gather, reference numbers to quote, deadlines to meet.',
    title: 'Apply for British Citizenship: Form AN, Documents, Deadlines',
    description: 'Applying for British citizenship: the online form or paper Form AN, the documents and reference numbers to have ready, biometrics within 45 days, what follows.',
    h1: 'How to apply for British citizenship',
    intro: 'Pick the day you plan to submit. The timeline shows the biometrics deadline and the usual decision date; the checklist below gets the file ready.',
    resume: (h) => `You apply to naturalise on the Home Office online service, which is the route Guide AN recommends for a smoother and quicker process; paper Form AN remains for people in the Channel Islands, the Isle of Man or a British overseas territory and for those who choose to post it. An online application counts as received on the day you submit it, which fixes the dates for the residence rules. You pay ${h.gbp(h.total)} at the end of the form (${h.gbp(h.F.naturalisation)} plus ${h.gbp(h.F.ceremony)} for the ceremony), then book an appointment at a UK Visa and Citizenship Application Services point to give fingerprints and a photo, at no extra fee. Biometrics must normally be given within ${h.N.biometricsDays} days of submitting, or the application becomes invalid. Documents are uploaded or scanned at the appointment, so nothing is posted. Have ready your settlement evidence, your Life in the UK Test reference number, your English evidence, your list of absences and your ${h.N.referees} referees' details. We are an independent site: we file nothing and take no payment.`,
    faqs: (h) => [
      { q: 'What happens if I submit my citizenship application with a document missing?', a: 'Guide AN says that if you do not submit the application with the supporting documents and the correct fee, it will be returned to you unprocessed. A caseworker may also write to ask for more details while the application is being decided. It is better to gather everything first and indicate on the form which documents you have supplied and why.' },
      { q: 'Can I travel abroad after I submit my citizenship application?', a: `Yes. Guide AN says you are free to travel on your valid passport, with evidence of your immigration status, while waiting for a decision, and you need not tell the Home Office. Plan around two dates: biometrics within ${h.N.biometricsDays} days of submitting, and, if approved, a ceremony within ${h.N.ceremonyWithinDays} days of the invitation. Long trips also count against your intention to live in the UK.` },
      { q: 'Can someone help me fill in the online citizenship form?', a: 'Yes, in two ways. gov.uk offers help with completing the online form if you do not feel confident using a computer or have no internet access, though this service gives no immigration advice. For advice, you can use an adviser registered with the Immigration Advice Authority, or a solicitor or barrister regulated by a recognised professional body. Giving nationality advice outside that scheme is a criminal offence.' },
      { q: 'Will I have to attend an interview for naturalisation?', a: 'Not usually, but gov.uk says you might be asked to attend an interview, where you will need to speak without an interpreter. If you receive such a request, answer it promptly. Keep your contact details up to date with UK Visas and Immigration while the application is pending, because Guide AN says the Home Office should be able to reach you quickly.' },
    ],
    body: (h) => `
<h2>Before you open the form</h2>
<p>Gather the following. Most of it is reference numbers rather than paper.</p>
${h.table(['What', 'Form it takes', 'Notes'], [
  ['Settlement', 'eVisa share code or 16-digit UAN; or BRP, letter, passport stamp', `an expired BRP is accepted up to ${h.T.brpMonthsAfterExpiry} months after expiry, and not after ${h.date(h.T.brpDeadline)}`],
  ['Identity', 'passport or national identity card, plus your BRP if you had one', 'a birth certificate, photo driving licence or recent bank statement are alternatives'],
  ['Life in the UK Test', 'reference number from the result email', 'format HOM/... since 17 December 2019; before that, a 7-digit number and, for passes before 1 October 2019, the letter itself'],
  ['English', 'SELT unique reference number, or degree certificate (with Ecctis statements), or passport', `test results count for ${h.E.seltValidYears} years unless used for your ILR`],
  ['Absences', 'list of every trip in the period', 'add an attachment if the form runs out of space'],
  ['Referees', `names and details of ${h.N.referees} people`, `professional person + British passport holder, each knowing you ${h.N.refereeKnownYears} years`],
  ['Spouse route only', "your spouse's British passport or certificate, marriage or civil partnership certificate", ''],
  ['Tax (self-employed)', 'Self-Assessment statement of account', 'PAYE employees need nothing extra'],
], 'Documents and references for naturalisation, from Home Office Guide AN (July 2026).', ['l', 'l', 'l'])}
<p>Documents uploaded in earlier immigration applications need not be sent again. If you changed your name or gender, add evidence such as a deed poll, marriage certificate or Gender Recognition Certificate.</p>
<h2>The order of steps</h2>
<ol>
<li><strong>Fix your date.</strong> Run the ${h.a('bc-date', 'date calculator')}. The first-day rule and the absence windows are measured from the day of submission, so this comes first.</li>
<li><strong>Complete the online form</strong>, including the good character section and the further information box where you explain anything unusual.</li>
<li><strong>Pay</strong> ${h.gbp(h.total)}, plus ${h.gbp(h.F.priority)} if you choose the priority service (online only).</li>
<li><strong>Book and attend the biometrics appointment</strong> within ${h.N.biometricsDays} days. Upload copies before it, or have documents scanned there. Children under 16 come with a parent or guardian.</li>
<li><strong>Wait</strong>, usually up to ${h.N.decisionUsuallyMonths} months; keep valid permission to stay throughout.</li>
<li><strong>Attend the ceremony</strong> within ${h.N.ceremonyWithinDays} days of the invitation.</li>
</ol>
<p>The tool at the top turns the date you submit into the biometrics deadline and the usual decision date. Submitting on 9 November 2026, for example, puts the biometrics cut-off in late December, so book early if holiday travel could get in the way.</p>
<h2>Children, partners and paper forms</h2>
<p>Each person applies separately. A spouse who also naturalises fills in their own form and pays their own fee. Children under ${h.N.minAge} are registered, not naturalised, on a different form; Guide AN says their applications can go in at the same time as yours (see ${h.a('bc-children', 'registering children')}). If you live in the Channel Islands, the Isle of Man or a British overseas territory, gov.uk says to apply by post or in person and to check which with your governor's office. People eligible under the Windrush Scheme use its own form, free of charge, not Form AN.</p>
<h2>Once it is submitted</h2>
<p>Tell UK Visas and Immigration if your circumstances change before the decision: a move, a marriage, or an arrest, which you must report under section 46 of the British Nationality Act 1981. Avoid contacting the Home Office for updates within the first ${h.N.decisionUsuallyMonths} months; Guide AN says it will write if it needs more information or if the decision will take longer. The ${h.a('bc-processing', 'decision time page')} explains the wait, and the fee tool below lists the other nationality fees you might meet later, from a reissued certificate to a status letter.</p>`,
  },
});
