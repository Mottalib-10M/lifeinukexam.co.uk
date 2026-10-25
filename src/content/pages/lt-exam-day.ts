import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'lt-exam-day',
  group: 'test',
  order: 48,
  tool: {"kind": "mini:pace"},
  mini: {"kind": "mini:brp"},
  related: ["lt-id", "lt-result", "lt-booking", "lt-mock"],
  sources: ["uk_test_day", "uk_test", "uk_guide_an"],
  en: {
    slug: 'life-in-the-uk-test/test-day',
    nav: "What happens on test day",
    card: 'What to bring and what happens at the Life in the UK Test centre, from the ID check and photo to the last question.',
    title: 'Life in the UK Test Day: What to Bring and What Happens',
    description: 'Life in the UK test day: bring the original ID you booked with, have your photo taken, come alone, then 24 questions in 45 minutes on a computer after a trial.',
    h1: 'Life in the UK test day, step by step',
    intro: 'Most surprises on the day are about documents, not questions. Here is the sequence, and a pace checker to keep in mind during the 45 minutes.',
    resume: (h) => `On the day of the Life in the UK Test you must bring the same ID you used to book, and it must be the original, not a copy or a screenshot, gov.uk says. Your photo is taken at the centre to confirm your identity. Without the correct ID, or if you refuse the photo, you cannot sit the test and the ${h.gbp(h.T.fee)} fee is not refunded; the same applies if you are late. You cannot bring children or other family members with you. The Home Office's Guide AN explains that the test is taken on a computer, that you get a chance to practise using the equipment and can do a short trial test before starting, and that the test then lasts up to ${h.T.minutes} minutes for ${h.T.questions} questions, all on the handbook. You need ${h.pc(h.T.passPercent / 100)} or more, ${h.need} correct answers. If you pass you receive a unique reference number, which you give on your settlement or citizenship application. Guide AN adds that staff report any attempt at cheating or at pressuring them, which can lead to prosecution.`,
    faqs: (h) => [
      { q: 'Can I bring a photocopy of my passport to the Life in the UK Test?', a: 'No. gov.uk says the ID must be the original, not a copy or screenshot, and that it must be the same document you used to book. If you booked with a share code from your eVisa, check the booking confirmation for what to show. Bringing the wrong document means you cannot take the test and the fee is not refunded.' },
      { q: 'Can my partner or children wait with me at the test centre?', a: 'gov.uk says you cannot bring children or other family members with you to the centre. Arrange childcare in advance and plan for someone to drop you off and meet you afterwards elsewhere if needed. Turning up with children risks not being able to sit the test, and the rules on refunds do not cover it.' },
      { q: 'Is there a practice question before the real test starts?', a: 'Yes. Guide AN says you are given the opportunity to practise using the equipment and the option of completing a short trial test before beginning. Use it even if you are confident with computers: it shows how answers are selected and how to move between questions, so the first real question gets your full attention.' },
    ],
    body: (h) => `
<h2>The evening before</h2>
<p>Lay out the ID you booked with. Check three things: it is the same document (or the share code route you used), it is the original, and it is still valid on the day. If it is a biometric residence permit or card, gov.uk accepts it only if your test is no later than ${h.T.brpMonthsAfterExpiry} months after the expiry date printed on the card and before ${h.date(h.T.brpDeadline)}, whichever comes first. The checker at the bottom of this page applies that rule to your card. Then plan the journey with a margin: lateness is one of the cases where gov.uk says no refund is given.</p>
<h2>At the centre, in order</h2>
${h.table(['Step', 'What happens', 'Source'], [
  ['1. Identity check', 'you show the same original ID used to book', 'gov.uk'],
  ['2. Photo', 'your photo is taken to confirm your identity', 'gov.uk'],
  ['3. Practice', 'a chance to practise using the equipment and an optional short trial test', 'Guide AN'],
  ['4. The test', `${h.T.questions} questions on a computer, up to ${h.T.minutes} minutes`, 'gov.uk and Guide AN'],
  ['5. Result', `pass at ${h.pc(h.T.passPercent / 100)} (${h.need} correct): you get a unique reference number`, 'gov.uk'],
], 'The sequence of the day as described in official sources.', ['l', 'l', 'l'])}
<p>You come alone: no children and no other family members. Guide AN adds a warning that applies to everyone in the room: staff report any attempt at cheating, and any pressure on them through bribery, threats or emotional blackmail, which may lead to prosecution, and a naturalisation application based on false results will fail.</p>
<h2>Managing the ${h.T.minutes} minutes</h2>
<p>The clock is generous: close to two minutes per question. Most candidates need less, so the risk is not running out of time but losing it to second-guessing. A simple plan: answer every question on the first pass, choosing your best option where you hesitate; then use the time left to revisit the doubtful ones. The checker at the top of this page tells you how much time you have per remaining question for any point in the test. Ten questions answered after fifteen minutes, for instance, leaves more than two minutes for each of the other fourteen. Rehearse this rhythm on our ${h.a('lt-mock', 'timed mock')} so that it is automatic on the day.</p>
<p>Read each question to the end. Reversed questions ("Which of these is NOT...") and true-or-false statements are where most careless errors happen. If two options look right, ask which one the handbook would state; gov.uk says nothing outside the handbook is tested.</p>
<h2>After the last question</h2>
<p>If you reach ${h.need} or more, gov.uk says you get a unique reference number, needed to complete your citizenship or settlement application; the Home Office uses it to check your pass. Guide AN says that for tests taken on or after ${h.date(h.T.urnSince)} the reference number is in the email sent with your results. Keep that email safe. If you fall short, you can rebook as many times as needed, paying each time. See the ${h.a('lt-result', 'result page')} for what to do next.</p>
<h2>A short checklist</h2>
<p>Original ID, the same one used to book. Valid on the day, BRP within its limits. Journey planned with time to spare. Childcare arranged. A calm last look at your list of missed facts, not a new chapter. Sources: ${h.src('uk_test_day', 'what happens at the test')}, the ${h.src('uk_test', 'gov.uk Life in the UK Test page')} for accepted ID, and ${h.src('uk_guide_an', 'Guide AN')} for the computer test and the trial run.</p>`,
  },
});
