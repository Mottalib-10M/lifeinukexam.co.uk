import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'lt-tests',
  group: 'practice',
  order: 22,
  tool: {"kind": "quiz", "props": {"mode": "exam", "sets": 16}},
  mini: {"kind": "mini:ukpass"},
  related: ["lt-mock", "lt-practice", "lt-pass-mark", "lt-online"],
  sources: ["uk_test"],
  en: {
    slug: 'life-in-the-uk-test/practice-tests',
    nav: "Numbered practice tests 1 to 16",
    card: 'Sixteen fixed practice papers of 24 questions that never change, so you can retake test 1 in three weeks and compare.',
    title: 'Life in the UK Practice Tests 1 to 16: Fixed Free Papers',
    description: 'Sixteen free Life in the UK practice tests of 24 questions each, numbered 1 to 16 and fixed, so a retake weeks later shows exactly how much you have improved.',
    h1: 'Life in the UK practice tests 1 to 16',
    intro: 'Choose a test number. The questions behind each number stay the same, so a better score on a retake is real progress, not a lucky draw.',
    resume: (h) => `These are sixteen numbered practice tests, each made of ${h.T.questions} questions from all five chapters of the handbook and marked against the same line as the real test: ${h.pc(h.T.passPercent / 100)}, which is ${h.need} correct answers. What sets them apart from our ${h.a('lt-mock', 'random mock')} is that each number always holds the same questions. Practice test 5 today is practice test 5 next month, so a jump from 16 to 21 on it says that you learned something, not that the draw was kind. The questions come from our bank of ${h.num(h.count)}, written by Radif Partners from facts the handbook states, and corrections are held until you mark the test, as at a centre. They are not timed by default; set a ${h.T.minutes}-minute alarm if you want the full conditions. Sixteen papers is enough to sit two a week for two months, with older ones retaken to check that facts learned early have not faded. The real test, booked on gov.uk for ${h.gbp(h.T.fee)}, uses questions that are not published.`,
    faqs: (h) => [
      { q: 'Why would I retake a practice test I have already seen?', a: 'To check retention. A fixed paper retaken after two or three weeks shows whether the facts you corrected the first time have stayed. If you score higher on test 3 the second time but miss the same history questions, those facts need a different method, such as writing them out or linking them to a period, not just rereading.' },
      { q: 'Do the numbered tests cover every question in the bank?', a: `Not exactly. Each test draws ${h.T.questions} questions in proportion to the chapters, so sixteen papers give ${h.num(16 * h.T.questions)} question slots and some questions appear in more than one paper while others appear in none. To see every question at least once, read the full bank chapter by chapter alongside the tests.` },
      { q: 'Is test 16 harder than test 1?', a: 'No. The numbers are labels, not levels. Each paper is drawn the same way from all five chapters, so the difficulty varies only by chance, depending on which facts it happens to include. If one paper feels much harder than the others, look at its chapter split at the end: it probably drew heavily on the chapter you know least.' },
      { q: 'Can I share a numbered test with someone revising with me?', a: 'Yes. The test number is kept in the page address, so a link to practice test 7 opens the same 24 questions for anyone. Sitting the same paper separately and comparing which questions each of you missed is a useful way to split revision between two people preparing at the same time.' },
    ],
    body: (h) => `
<h2>Fixed papers versus random draws</h2>
<p>A random mock answers the question "would I pass a test I have never seen?". A fixed paper answers a different one: "have I improved since last time?". You need both, at different moments. Early in your revision, the numbered tests give you a stable yardstick; in the final week, fresh random mocks are a fairer forecast because you cannot have memorised them.</p>
${h.table(['', 'Numbered tests (this page)', 'Random mock'], [
  ['Questions', `${h.T.questions}, the same every time for a given number`, `${h.T.questions}, new each draw`],
  ['Best for', 'measuring progress', 'forecasting the real result'],
  ['Clock', 'none by default', `${h.T.minutes} minutes`],
  ['Risk', 'you start remembering the answers', 'a lucky draw flatters you'],
], 'How our two full-length formats differ.', ['l', 'l', 'l'])}
<h2>Keep a score log</h2>
<p>Write down the test number, the date and the score each time, with the chapter that lost most points. A plain notebook is enough. After a few weeks it might look like this example (an illustration, not real data):</p>
${h.table(['Date', 'Test', 'Score', 'Weakest chapter'], [
  ['week 1', 'Test 1', `16 / ${h.T.questions}`, 'history'],
  ['week 1', 'Test 2', `17 / ${h.T.questions}`, 'history'],
  ['week 2', 'Test 3', `19 / ${h.T.questions}`, 'government and law'],
  ['week 3', 'Test 1 (retake)', `21 / ${h.T.questions}`, 'none clear'],
], 'Example of a score log. The pass mark is ' + h.need + ' out of ' + h.T.questions + '.', ['l', 'l', 'r', 'l'])}
<p>The retake of test 1 is the line that matters: five points gained on the very same questions. If a retake shows no gain, the revision in between has not worked and you should change method, not just put in more hours.</p>
<h2>A two-month schedule using all sixteen</h2>
<p>Weeks one to four: tests 1 to 8, two a week, each followed by the ${h.a('lt-practice', 'chapter practice')} on whatever chapter lost the most points. Week five: retake tests 1 and 2. Weeks six to eight: tests 9 to 16, again two a week, with one old paper retaken each week. Then switch to random timed mocks for the last stretch before your booking. Compress it if your test date is sooner; the ${h.a('lt-study', 'study plan')} calculator works out how many questions a day that implies.</p>
<h2>Reading a single score</h2>
<p>The checker under this section tells you whether a score passes and by how much. ${h.need} out of ${h.T.questions} is a pass, ${h.need - 1} is a fail, and there is no rounding: the line is ${h.pc(h.T.passPercent / 100)} or more. A paper passed with one point to spare is a warning, not a success, because a single unlucky question on the day would turn it into a fail. Aim for a cushion of two or three points across several papers before you book. The ${h.a('lt-pass-mark', 'pass mark page')} goes further into why that margin matters.</p>
<h2>What these papers are</h2>
<p>Practice material written by Radif Partners, free and without sign-up. They follow the format gov.uk publishes for the test, but their questions are ours, based on the handbook's facts and not on any test centre paper. The ${h.src('uk_test', 'gov.uk Life in the UK Test page')} is the only official source on the format and the booking service.</p>`,
  },
});
