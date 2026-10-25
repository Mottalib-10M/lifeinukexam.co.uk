import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'lt-cost',
  group: 'test',
  order: 44,
  tool: {"kind": "mini:ukattempts"},
  mini: {"kind": "mini:refund"},
  related: ["lt-booking", "lt-cancel", "bc-cost", "lt-fail"],
  sources: ["uk_test", "uk_fees", "uk_test_cancel"],
  en: {
    slug: 'life-in-the-uk-test/cost',
    nav: "Test cost and retakes",
    card: 'The Life in the UK Test costs £50 each time you sit it. What retakes add, when you get a refund, and the wider bill.',
    title: 'Life in the UK Test Cost: £50 a Sitting, Retakes and Refunds',
    description: 'The Life in the UK test costs £50 per sitting, paid again for each retake. What extra attempts add to citizenship or settlement fees, and when you get a refund.',
    h1: 'Life in the UK Test cost: £50 every time',
    intro: 'One fee, paid by card when you book, and paid again for each new attempt. Enter how many times you expect to sit it to see the total.',
    resume: (h) => `The Life in the UK Test costs ${h.gbp(h.T.fee)} per sitting, paid by debit or credit card when you book on gov.uk. There is no discount for a retake: gov.uk says you can rebook as many times as you need but must pay each time, so two attempts cost ${h.gbp(h.T.fee * 2)} and three cost ${h.gbp(h.T.fee * 3)}. The fee is refunded to your card only if you cancel at least ${h.T.bookAtLeastDaysAhead} days (${h.T.refundIfCancelHours} hours) before the test, or if the centre cancels and you ask within ${h.T.refundClaimMonths} months; there is no refund for wrong ID, illness, lateness or refusing the photo. Set against the whole application, the test is a small line. For naturalisation, the Home Office charges ${h.gbp(h.F.naturalisation)} for the application and ${h.gbp(h.F.ceremony)} for the ceremony, so one sitting brings the total to ${h.gbp(h.totalWithTest)}; for indefinite leave to remain the application fee is ${h.gbp(h.F.ilr)}. Practice, on the other hand, costs nothing here: every mock and question on this site is free.`,
    faqs: (h) => [
      { q: 'Is the Life in the UK Test fee the same for everyone?', a: `gov.uk states a single fee of ${h.gbp(h.T.fee)} and lists no reductions, whether for age, income or a retake. People who are exempt, such as those under ${h.T.exemptUnder} or aged ${h.T.exemptFromAge} and over, do not pay because they do not sit the test. Guide AN adds that fees are subject to review, so check the amount on gov.uk when you book.` },
      { q: 'Is the test fee included in the citizenship application fee?', a: `No. The Home Office's ${h.gbp(h.F.naturalisation)} naturalisation fee and ${h.gbp(h.F.ceremony)} ceremony fee are paid to the Home Office when you apply. The test fee is paid separately, by card, when you book the test on gov.uk, often months or years earlier if you passed it for settlement. English test fees, set by each approved provider, are another separate cost.` },
      { q: 'If I pass the test for settlement, do I pay again for citizenship?', a: 'No. gov.uk says you do not need to take the test if you have passed it before, and gives exactly that example: someone applying for citizenship who passed it as part of their settlement application. You reuse the pass by giving its reference number on the form, so the fee is paid only once across both applications.' },
    ],
    body: (h) => `
<h2>What retakes add up to</h2>
${h.table(['Sittings', 'Test fees', 'With naturalisation and ceremony'], [1, 2, 3, 4].map((k) => [k, h.gbp(h.T.fee * k), h.gbp(h.total + h.T.fee * k)]), `Test fee from gov.uk; Home Office fees in force from ${h.date(h.F.effective)}. One adult, standard service.`, ['r', 'r', 'r'])}
<p>The tool at the top of the page does the same sum for any number of sittings, up to ten. In practice the difference between one and three sittings is ${h.gbp(h.T.fee * 2)}, small against ${h.gbp(h.total)} of Home Office fees but not trivial, and each failed attempt also costs weeks: a new booking at least ${h.T.bookAtLeastDaysAhead} days ahead, and the date you want may already be taken, before your application can go in.</p>
<h2>Where the test sits in the full bill</h2>
${h.table(['Item', 'Fee', 'Paid to'], [
  ['Life in the UK Test', h.gbp(h.T.fee), 'the test booking service, by card'],
  ['Indefinite leave to remain (if not yet settled)', h.gbp(h.F.ilr), 'Home Office'],
  ['Naturalisation application', h.gbp(h.F.naturalisation), 'Home Office'],
  ['Citizenship ceremony', h.gbp(h.F.ceremony), 'Home Office'],
  ['Optional priority service for citizenship', h.gbp(h.F.priority), 'Home Office'],
  ['First adult British passport, online', h.gbp(h.U.passport.adultOnline), 'the passport service on gov.uk'],
], 'Main fees for one adult. Home Office fee table and gov.uk passport fees.', ['l', 'r', 'l'])}
<p>Notice who receives what. The test fee goes to the booking service when you book, sometimes years before you apply; everything else is paid to the Home Office or the passport service at the time of each application. Budget the test separately, and early, because it must be passed before the citizenship application goes in.</p>
<p>For a full household calculation, with children, priority and passports, use our ${h.a('bc-cost', 'citizenship cost calculator')}.</p>
<h2>When the £${h.T.fee} comes back</h2>
<p>gov.uk sets out the refund rules on its cancellations page. Cancel from your Life in the UK account at least ${h.T.bookAtLeastDaysAhead} days (${h.T.refundIfCancelHours} hours) before the test and the fee is refunded automatically to the card you used, without contacting UK Visas and Immigration. Cancel or rearrange within those ${h.T.bookAtLeastDaysAhead} days and nothing is refunded. If the centre cancels, you can ask the test provider for a refund within ${h.T.refundClaimMonths} months of the test date.</p>
<p>No refund is given if you bring the wrong ID or not the right documents, are ill, are late, or refuse to have your photo taken. Those are the costly mistakes, because they waste a fee without even a chance to sit the test. The checker under this section tells you, for a test date and a cancellation date, whether the fee would come back.</p>
<h2>Keeping the cost to one sitting</h2>
<p>The cheapest test is the one you pass first time. Practice here is free and unlimited, so it makes sense to spend time rather than money: work through the ${h.a('lt-practice', 'chapter practice')} until each chapter is solid, then sit fresh timed mocks until the lowest of three is comfortably above ${h.need} out of ${h.T.questions}. On the administrative side, check your ID and its exact name before booking, plan the journey to the centre, and book far enough ahead to keep a refundable window. If you do need another attempt, our ${h.a('lt-fail', 'page on failing')} explains how to use your mock results to target the retake.</p>
<p>Sources: ${h.src('uk_test', 'gov.uk Life in the UK Test')}, ${h.src('uk_test_cancel', 'cancellations, refunds and complaints')} and the ${h.src('uk_fees', 'Home Office fees table')}.</p>`,
  },
});
