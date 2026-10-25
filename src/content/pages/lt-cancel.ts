import { definePage } from '../../lib/guide-types';

/** An example date moved by n days, written in words. */
const plus = (fmt: (iso: string) => string, iso: string, n: number) => fmt(new Date(Date.parse(`${iso}T00:00:00Z`) + n * 86400000).toISOString().slice(0, 10));

export default definePage({
  id: 'lt-cancel',
  group: 'test',
  order: 46,
  tool: {"kind": "mini:refund"},
  mini: {"kind": "mini:bookdates"},
  related: ["lt-booking", "lt-cost", "lt-exam-day", "lt-id"],
  sources: ["uk_test_cancel"],
  demarche: true,
  en: {
    slug: 'life-in-the-uk-test/cancel-and-refund',
    nav: "Cancel, move or refund",
    card: 'Cancel or move your Life in the UK Test: the 72-hour refund rule, cases with no refund, and how to claim or complain.',
    title: 'Life in the UK Test Cancel and Refund: The 72-Hour Rule',
    description: 'Cancel or move the Life in the UK test: refund only if cancelled 72 hours ahead, none for wrong ID, illness or delay, 3 months to claim if the centre cancels.',
    h1: 'Cancelling or moving the Life in the UK Test',
    intro: 'Enter your test date and the day you plan to cancel. The calculator gives the last refundable day; the rules and the exceptions follow.',
    resume: (h) => `You can cancel or rearrange a Life in the UK Test booking yourself from your Life in the UK account, and gov.uk sets one rule for the money: the ${h.gbp(h.T.fee)} fee is refunded only if you cancel at least ${h.T.bookAtLeastDaysAhead} days (${h.T.refundIfCancelHours} hours) before the test. Cancel or rearrange inside those ${h.T.refundIfCancelHours} hours and you get nothing back. A refund goes automatically to the card used to book, and you do not need to contact UK Visas and Immigration. Rearranging is caught by the same deadline: gov.uk says there is no refund if you cancel or rearrange within those days. There is no refund either if you bring the wrong ID, do not bring the right documents, are ill, arrive late or refuse to have your photo taken. If the test centre cancels, you can ask the test provider for a refund within ${h.T.refundClaimMonths} months of the test date. Complaints also go to the provider, within ${h.T.complaintMonths} months of the test, and gov.uk says you will get a response within ${h.T.complaintReplyWorkingDays} working days.`,
    faqs: (h) => [
      { q: 'I am ill on the day of my Life in the UK Test. Can I get my money back?', a: `Not under the gov.uk rules: illness is listed among the cases where you cannot ask for a refund. If you feel unwell a few days before, cancelling at least ${h.T.refundIfCancelHours} hours ahead keeps your ${h.gbp(h.T.fee)}. On the day itself, the fee is lost, and you book and pay for a new date when you are ready.` },
      { q: 'How exactly do I cancel the test online?', a: 'gov.uk gives three steps: sign in to your Life in the UK account, select Confirmed tests, then select Cancel tests. If you are within the refund window, the fee goes back to the card you used without any further request, and you can then book another date whenever you like, paying again for the new booking.' },
      { q: 'What should I do if the test centre cancels my test?', a: `Ask the test provider, PSI, for a refund within ${h.T.refundClaimMonths} months of the test date. gov.uk lists an email address, a telephone line and a postal address for this. The refund goes to the card used for the booking. Keep the cancellation message from the centre, since it shows that the cancellation was not your choice.` },
      { q: 'Can I complain about how my Life in the UK Test was run?', a: `Yes. Complaints go to PSI, the test provider, by email or telephone, and must be made within ${h.T.complaintMonths} months of the test date. gov.uk says you will get a response within ${h.T.complaintReplyWorkingDays} working days. Write down what happened, the centre and the time as soon as possible after the test, while the details are fresh.` },
    ],
    body: (h) => `
<h2>Counting the ${h.T.refundIfCancelHours} hours</h2>
<p>gov.uk puts the limit as "at least ${h.T.bookAtLeastDaysAhead} days (${h.T.refundIfCancelHours} hours)" before you are due to take the test. Count in hours from the start time on your booking. A test on ${h.date('2026-11-20')} at 10am can be cancelled with a refund until 10am on ${plus(h.date, '2026-11-20', -h.T.bookAtLeastDaysAhead)}. At 10.05am that day the window has closed.</p>
${h.table(['Test date (10am)', 'Last refundable moment', 'Cancel the day after that'], [
  [h.date('2026-11-20'), `10am, ${plus(h.date, '2026-11-20', -h.T.bookAtLeastDaysAhead)}`, 'no refund'],
  [h.date('2026-12-07'), `10am, ${plus(h.date, '2026-12-07', -h.T.bookAtLeastDaysAhead)}`, 'no refund'],
  [h.date('2027-01-04'), `10am, ${plus(h.date, '2027-01-04', -h.T.bookAtLeastDaysAhead)}`, 'no refund'],
], 'Worked examples of the gov.uk rule. Weekends and bank holidays count like any other day.', ['l', 'l', 'l'])}
<p>The last example shows why a test early in January needs care: the deadline falls between Christmas and the new year, when it is easy to lose track of dates.</p>
<h2>Cancelling and rearranging</h2>
<p>Both are done in your Life in the UK account (Confirmed tests, then Cancel tests). gov.uk treats them alike for refunds: neither is refunded within ${h.T.bookAtLeastDaysAhead} days of the test. If you are outside that window, the money returns to your card and you book the new date separately, with a new payment. The new date must itself be at least ${h.T.bookAtLeastDaysAhead} days after the day you book it; the calculator under this section shows the earliest possible date and the refund deadline for it.</p>
<h2>When no refund is possible</h2>
${h.table(['Situation', 'Refund?'], [
  [`You cancel at least ${h.T.refundIfCancelHours} hours before`, 'yes, automatically to your card'],
  [`You cancel or rearrange within ${h.T.refundIfCancelHours} hours`, 'no'],
  ['The test centre cancels', `yes, if you ask within ${h.T.refundClaimMonths} months`],
  ['You bring the wrong ID or not the right documents', 'no'],
  ['You are ill', 'no'],
  ['You are late', 'no'],
  ['You refuse to have your photo taken', 'no'],
], 'Refund cases listed on gov.uk.', ['l', 'l'])}
<p>The ID line deserves attention because it is entirely avoidable. You must bring the same original ID you booked with, not a copy or a screenshot. Check it the evening before, along with the journey time to the centre, and the two most common ways of losing a fee are gone.</p>
<h2>Claims and complaints: the ${h.T.refundClaimMonths}-month limits</h2>
<p>Both a refund claim after a centre cancellation and a complaint must reach the test provider within ${h.T.complaintMonths} months of the test date. gov.uk lists email and telephone for both, and a postal address for refund requests. A complaint gets a response within ${h.T.complaintReplyWorkingDays} working days. These limits are short in practice: if a test is cancelled in November, the claim must be made by February.</p>
<h2>Our role</h2>
<p>This site is independent and has no access to bookings. We cannot cancel, move or refund a test; only your Life in the UK account and the provider can. The rules above are taken from the gov.uk page on ${h.src('uk_test_cancel', 'cancellations, refunds and complaints')}. For the booking itself, see our ${h.a('lt-booking', 'booking guide')}, and for the documents that must match, the ${h.a('lt-id', 'ID page')}.</p>`,
  },
});
