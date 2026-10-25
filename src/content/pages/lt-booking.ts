import { definePage } from '../../lib/guide-types';

/** An example date moved by n days, written in words. */
const plus = (fmt: (iso: string) => string, iso: string, n: number) => fmt(new Date(Date.parse(`${iso}T00:00:00Z`) + n * 86400000).toISOString().slice(0, 10));

export default definePage({
  id: 'lt-booking',
  group: 'test',
  order: 42,
  tool: {"kind": "mini:bookdates"},
  mini: {"kind": "mini:refund"},
  related: ["lt-id", "lt-cost", "lt-cancel", "lt-exam-day"],
  sources: ["uk_test", "uk_guide_an"],
  demarche: true,
  en: {
    slug: 'life-in-the-uk-test/booking',
    nav: "How to book the test",
    card: 'How to book the Life in the UK Test on gov.uk: what you need, the three-day rule, name matching, centres and special requests.',
    title: 'Life in the UK Test Booking: Book on gov.uk, Step by Step',
    description: 'Life in the UK test booking, step by step: only on gov.uk, at least 3 days ahead, £50 by card, ID with your exact name, a centre you choose, special requests.',
    h1: 'How to book the Life in the UK Test',
    intro: 'The booking is made by you, on gov.uk, in one sitting. Check the dates with the calculator first, then gather the three things the service asks for.',
    resume: (h) => `You book the Life in the UK Test online through gov.uk, which calls it the only official government service for booking the test. You need three things: an email address, a debit or credit card for the ${h.gbp(h.T.fee)} fee, and an accepted form of ID, ideally an eVisa share code, otherwise a valid passport, an EU, Swiss, Icelandic, Liechtenstein or Norwegian ID card, a travel document with a photo, or a BRP or BRC within its time limit. The name you type must match the name on that ID exactly, and you must bring the same original ID on the day. Bookings must be made at least ${h.T.bookAtLeastDaysAhead} days ahead, and you choose your centre among over ${h.T.centresOver} in the UK during the booking. If you have a disability you can make special requests when booking; if you have changed gender and do not want centre staff to see your previous gender, you email the Home Office before booking. Radif Partners is an independent publisher: we do not book tests and never take payment for them.`,
    faqs: (h) => [
      { q: 'What happens if the name on my booking does not match my ID?', a: 'gov.uk says the name on the booking must be an exact match with the name on the ID used to book, and that you must bring that same original ID on the day. Without the correct ID you cannot sit the test and you get no refund. Copy your name exactly as printed, including middle names, before paying.' },
      { q: 'Can someone else book the test for me?', a: 'gov.uk does not describe booking on behalf of another person, and the details entered must match the candidate’s own ID. A relative can help you through the form at home, but the booking is in your name, with your ID details. Be wary of anyone who offers to book the test for a fee: the only cost is the official fee, paid on gov.uk.' },
      { q: 'How far in advance can I book the Life in the UK Test?', a: `gov.uk sets a minimum, at least ${h.T.bookAtLeastDaysAhead} days ahead, but does not publish a maximum on its booking page. Guide AN notes that demand can be considerable and advises booking early. Booking two or three weeks out also gives you a cancellation window, since a refund needs cancelling at least ${h.T.refundIfCancelHours} hours before the test.` },
      { q: 'Who do I contact if the booking site gives me a problem?', a: 'gov.uk lists a Life in the UK Test Helpline, run by the test provider, for help with bookings, reachable by email and by telephone on weekdays. The contact details are on the gov.uk test page. For problems with your ID itself, such as not having any accepted document, gov.uk says to contact UK Visas and Immigration instead.' },
    ],
    body: (h) => `
<h2>Before you open the booking page</h2>
${h.table(['You need', 'Details from gov.uk'], [
  ['An email address', 'required by the booking service'],
  ['A debit or credit card', `the fee is ${h.gbp(h.T.fee)} per test`],
  ['Accepted ID', 'eVisa share code first; otherwise passport, EU, Swiss, Icelandic, Liechtenstein or Norwegian ID card, travel document with photo (not an emergency one), or BRP or BRC within its limit'],
  ['Your exact name', 'as printed on that ID'],
], 'Booking requirements on gov.uk.', ['l', 'l'])}
<p>Guide AN adds a step that is easy to skip: make sure you will meet all the other requirements for naturalisation (or settlement) before you take the test. A pass does not cure an excess of absences or a missing year of settled status.</p>
<h2>The booking, step by step</h2>
<p><strong>1. Check your ID.</strong> If you have an eVisa, sign in to your UK Visas and Immigration account and generate a share code; gov.uk says eVisa holders should book with it. If you still rely on a biometric residence permit or card, check its date with our ${h.a('lt-id', 'ID page')}: it is accepted only until ${h.T.brpMonthsAfterExpiry} months after the expiry printed on it or until ${h.date(h.T.brpDeadline)}, whichever comes first.</p>
<p><strong>2. Choose a date at least ${h.T.bookAtLeastDaysAhead} days away.</strong> Someone booking on ${h.date('2026-11-02')} can take a test on ${plus(h.date, '2026-11-02', h.T.bookAtLeastDaysAhead)} at the earliest. The calculator above checks your own dates and shows the last day to cancel with a refund.</p>
<p><strong>3. Choose a centre.</strong> There are over ${h.T.centresOver} in the UK and you pick one during the booking. Travel time matters: being late is one of the cases where gov.uk says no refund is given.</p>
<p><strong>4. Enter your details exactly as on the ID, and make any special request.</strong> If you have a disability and need extra equipment or help accessing the centre, gov.uk says you can ask for it at this stage.</p>
<p><strong>5. Pay and keep the confirmation.</strong> Payment is by card, ${h.gbp(h.T.fee)}. You can later cancel or rearrange from your Life in the UK account.</p>
<h2>Special cases</h2>
<p><strong>Changed gender, including a different name.</strong> gov.uk asks you to email the Home Office's sensitive bookings team before booking if you do not want centre staff to see your previous gender or for it to show on your result.</p>
<p><strong>No accepted ID at all.</strong> gov.uk says to contact UK Visas and Immigration for help; the test cannot be booked without one.</p>
<p><strong>Exempt applicants.</strong> If you are under ${h.T.exemptUnder}, ${h.T.exemptFromAge} or over, have passed before, or have a long-term condition with medical evidence, you may not need to book at all. See ${h.a('lt-exempt', 'who does not need the test')}.</p>
<h2>Timing the booking with your revision</h2>
<p>A date in the diary concentrates the mind, but a test booked too early either costs a retake or a forfeited fee. Our suggestion: book when the lowest of your last three fresh mocks is two points or more above ${h.need}, and pick a date two to three weeks out. That leaves time for final revision and keeps you well clear of the ${h.T.refundIfCancelHours}-hour cancellation limit if something comes up. The refund checker under this section tells you whether a cancellation on a given day would still be refunded.</p>
<h2>What we do and do not do</h2>
<p>This site, run by Radif Partners, is independent: it is not a government service, and it neither books tests nor collects fees. The only booking route is the one linked from the ${h.src('uk_test', 'gov.uk Life in the UK Test page')}. More on preparation and the test centres in ${h.src('uk_guide_an', 'Guide AN')}.</p>`,
  },
});
