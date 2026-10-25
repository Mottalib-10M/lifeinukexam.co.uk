import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'bc-refused',
  group: 'citizenship',
  order: 112,
  tool: {"kind": "mini:fees", "props": {"s": 5}},
  mini: {"kind": "mini:absband"},
  related: ["bc-discretion", "bc-good-character", "bc-date", "bc-application"],
  sources: ["uk_fees", "uk_guidance", "uk_guide_an"],
  en: {
    slug: 'british-citizenship/refused',
    nav: "Refused application",
    card: 'Why naturalisation applications fail, what the refusal costs, the nationality review fee, and how to make the second application the last one.',
    title: 'British Citizenship Refused: Reasons, Review and Reapplying',
    description: 'British citizenship refused: the usual reasons (absences, first day, test or English, character, missed ceremony), the £513 nationality review and reapplying.',
    h1: 'When a citizenship application is refused',
    intro: 'The tool shows the nationality review fee next to the other nationality fees. Below, the usual reasons for refusal and how to fix each one.',
    resume: (h) => `A refused naturalisation application is not the end of the road, but it is expensive. The Home Office keeps the fee in most cases, and Guide AN warns specifically that applications made without the Life in the UK Test or the English requirement, with absences far above the limits, or with untruthful declarations can lose it. The refusal letter states the grounds, and they usually fall into a short list: too many days abroad, absence on the first day of the qualifying period, a missing test or English result, good character concerns, a doubtful intention to live in the UK on the standard route, or a ceremony not attended within ${h.N.ceremonyWithinDays} days. The Home Office fees table, in force since ${h.date(h.F.effective)}, lists a nationality review at ${h.gbp(h.F.review)}. Where the problem is one of timing, the nationality guidance tells caseworkers to advise applicants to reapply once they meet the requirements, which means a new application at the full ${h.gbp(h.total)}. Fixing the cause first is what makes the second attempt worth paying for.`,
    faqs: (h) => [
      { q: 'Do I get my £1,709 back if my citizenship application is refused?', a: `Generally not. Guide AN warns in several places that a failed application may lose the fee: where the knowledge requirements were not met, where absences exceed the upper limit (the fee "will not be fully refunded"), or where a declaration was untruthful. gov.uk adds that a refused application gets no refund of the ${h.gbp(h.F.priority)} priority fee either. Budget as if the fee is spent the day you apply.` },
      { q: 'Is it better to ask for a nationality review or simply apply again?', a: `It depends on the reason. If you met the requirements when you applied and believe the caseworker got it wrong, read the refusal letter closely for the route to challenge it; the fees table lists a nationality review at ${h.gbp(h.F.review)}. If you did not meet a requirement, such as the absence limits or the test, a review cannot change that; waiting until you qualify and reapplying is the realistic route.` },
      { q: 'Will a previous refusal count against me when I reapply for citizenship?', a: `A refusal for timing, such as excess absences or applying before your settlement was ${h.N.route61.ilrHeldMonths} months old, simply means you applied too early. A refusal on good character is more serious, and declaring everything truthfully the second time is essential. Guide AN warns that deception in dealings with the Home Office must be declared and is itself a character issue.` },
    ],
    body: (h) => `
<h2>The usual grounds, and the fix for each</h2>
${h.table(['Ground for refusal', 'What usually caused it', 'Before reapplying'], [
  ['Excess absences', `over ${h.num(h.N.route61.band[1])} days (${h.num(h.N.route62spouse.band[1])} on the spouse route), or in the middle band without a listed reason`, 'wait until older trips leave the window'],
  ['Final-year absences', `well over ${h.N.finalYear.normal} days in the last 12 months`, 'let a quieter year pass'],
  ['First day of the period', 'abroad on the first day without exceptional reasons', 'choose a date when you were in the UK'],
  ['Knowledge of language and life', 'no Life in the UK Test pass or valid English evidence', 'pass the test, get a valid result'],
  ['Good character', 'undeclared or serious convictions, debts, immigration breaches', 'resolve what can be resolved; declare everything'],
  ['Future intentions (6(1))', 'family abroad, long recent absence, plans to live outside the UK', 'settle the facts, then apply'],
  ['Ceremony missed', `not attended within ${h.N.ceremonyWithinDays} days without good reason`, 'reapply and attend promptly'],
], 'Typical refusal grounds, from Guide AN (July 2026) and the nationality guidance (version 16.0).', ['l', 'l', 'l'])}
<p>A related outcome is not a refusal at all: an application can be rejected as invalid if biometrics are not given when requested, within ${h.N.biometricsDays} days, or returned unprocessed if documents or the correct fee are missing.</p>
<h2>Reading the letter</h2>
<p>The refusal letter sets out the grounds: which requirement was not met and why. Read it against the checklist above before deciding anything. Ask three questions. Did I meet this requirement on the date I applied? If not, on what date will I meet it? And if I did, what evidence did the caseworker not have? The first two lead to a new application; the third may justify challenging the decision. The fees table lists ${h.gbp(h.F.review)} for a nationality review, the same sum as for renunciation, and the tool at the top places it among the other nationality fees.</p>
<h2>Example: refused for absences</h2>
<p>Rahul applied on the ${h.N.route61.years}-year route with ${h.num(h.N.route61.band[1] + 60)} days abroad, much of it on long assignments for a foreign employer. That is above the top of the band in the nationality guidance, which says that beyond it discretion is highly unlikely and caseworkers should normally refuse and advise reapplying when the statutory requirements are met. A review would not change the count. His route back is arithmetic: each month he stays in the UK, a month of old absences may slide out of the ${h.N.route61.years}-year window. The tool below shows which band a given total falls in, and the ${h.a('bc-date', 'date calculator')} finds the first day his trips fit, trip by trip. Guide AN adds that for absences above the top of the band, the fee will not be fully refunded, which is the lesson for next time.</p>
<h2>Getting advice</h2>
<p>If the refusal concerns good character, immigration history or a decision you believe was wrong, it is worth taking advice. Guide AN says that nationality advice may only be given by advisers registered with, or exempted by, the Immigration Advice Authority, or by solicitors and barristers authorised by a designated professional body, and that giving such advice outside the scheme is a criminal offence. We are an independent information site and do not give individual advice.</p>
<p>The ${h.a('bc-discretion', 'excess absences page')} explains the bands in detail, the ${h.a('bc-good-character', 'good character page')} lists everything to declare, and the ${h.a('bc-application', 'application guide')} covers the documents that avoid an invalid or returned file.</p>`,
  },
});
