import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'lt-fail',
  group: 'test',
  order: 54,
  tool: {"kind": "mini:ukattempts"},
  mini: {"kind": "mini:ready"},
  related: ["lt-mock", "lt-practice", "lt-cost", "lt-result"],
  sources: ["uk_test_day", "uk_test", "uk_guide_an"],
  en: {
    slug: 'life-in-the-uk-test/failed',
    nav: "Failed the test",
    card: 'Failed the Life in the UK Test? You can rebook as often as needed. How to find what went wrong and pass next time.',
    title: 'Failed Life in the UK Test: Retake Rules and a Recovery Plan',
    description: 'Failed the Life in the UK test? Rebook as many times as you need, paying £50 each time. The next test has different questions; here is how to target the retake.',
    h1: 'Failed the Life in the UK Test: what now?',
    intro: 'A fail costs a fee and some time, nothing more. The rules for retaking are simple; the work is in finding out why the points went missing.',
    resume: (h) => `If you score below ${h.need} out of ${h.T.questions} in the Life in the UK Test, gov.uk says you can rebook the test as many times as you need, paying each time. Guide AN confirms there is no limit on the number of attempts, that each one costs a further fee (${h.gbp(h.T.fee)} today), and that the next test will be different from the one you took, because questions are drawn at random from a large bank. Neither gov.uk nor Guide AN publishes a waiting period between attempts; the only timing rule on the booking page is to book at least ${h.T.bookAtLeastDaysAhead} days ahead. A fail does not affect an application you have not yet made, but you cannot apply for settlement or citizenship without a pass, unless exempt, and Guide AN warns that applying without meeting the requirement may lead to refusal and loss of the fee. The useful question is why you fell short. A timed mock split by chapter usually shows it within an hour: one or two weak chapters, nerves, or misreading. Fix that, then book again.`,
    faqs: (h) => [
      { q: 'How soon can I retake the Life in the UK Test after failing?', a: `gov.uk does not publish any waiting period between attempts. The only rule on its booking page is that a test must be booked at least ${h.T.bookAtLeastDaysAhead} days in advance. In practice the better question is when you will be ready: retaking within days, without changing how you revise, tends to produce a similar score. A week or two of targeted work is usually a better investment.` },
      { q: 'Will I get the same questions when I retake the test?', a: 'No. Guide AN says the questions are drawn randomly from a large bank, so any further test will be different from the earlier one. Trying to remember what you were asked last time is therefore of limited use; what helps is covering the handbook evenly, especially the chapters that felt hardest on the day.' },
      { q: 'Does failing the test count against me in my citizenship application?', a: 'Nothing on gov.uk or in Guide AN says that earlier fails are held against you: what the application asks for is the reference number of a pass. The real costs of failing are the extra fee for each attempt and the delay before you can apply, since the application needs a pass unless you are exempt.' },
      { q: 'I failed by one point. Should I rebook immediately?', a: `One point short means you know most of the handbook, but also that one unlucky question decides the result either way. Sit two or three fresh timed mocks first. If the lowest is at least ${h.need + 2}, book; if your scores hover around ${h.need}, find the weak chapter and spend a week on it before paying the fee again.` },
    ],
    body: (h) => `
<h2>The retake rules in one table</h2>
${h.table(['Question', 'Official answer'], [
  ['Can I retake?', 'yes, as many times as you need (gov.uk)'],
  ['Is there a limit on attempts?', 'no limit (Guide AN)'],
  ['Do I pay again?', `yes, each time; ${h.gbp(h.T.fee)} per sitting`],
  ['Same questions?', 'no, drawn randomly from a large bank (Guide AN)'],
  ['Waiting period?', 'none published; book at least ' + h.T.bookAtLeastDaysAhead + ' days ahead'],
], 'Retake rules from gov.uk and Guide AN.', ['l', 'l'])}
<h2>Finding out what went wrong</h2>
<p>Start the same week, while the test is fresh. Write down every topic you remember being unsure about, with its chapter: a date, a court, a festival, a principle. Then sit a ${h.a('lt-mock', 'timed mock')} on this site in full conditions. Its result is split by chapter, and that split, together with your notes from the day, usually points to one of four causes.</p>
${h.table(['Pattern', 'Likely cause', 'What to do'], [
  ['One chapter far below the rest', 'a gap in revision', 'a week of chapter practice on it, then another mock'],
  ['Losses spread evenly', 'not enough coverage overall', 'go through the whole bank again, with answers hidden'],
  ['Good at home, poor on the day', 'nerves or time pressure', 'more timed mocks in quiet, test-like conditions'],
  ['Errors on easy questions', 'misreading, especially NOT and true or false', 'slow down on the stem; reread before choosing'],
], 'Our diagnosis grid, a suggestion by Radif Partners.', ['l', 'l', 'l'])}
<p>The first pattern is the easiest to fix: one chapter, perhaps history or modern society, where facts were read once and never tested. The ${h.a('lt-practice', 'chapter practice')} exists for exactly this.</p>
<h2>A two-week recovery plan</h2>
<p><strong>Days 1 to 3.</strong> Diagnosis mock, then the full question bank for your weakest chapter, read with answers open and then hidden. Write every missed fact on one sheet.</p>
<p><strong>Days 4 to 10.</strong> Two practice sets a day on the weak chapter, one mixed set to keep the rest fresh. Reread your sheet each morning. Mid-way, a second timed mock.</p>
<p><strong>Days 11 to 14.</strong> Fresh timed mocks every other day. Enter the lowest and highest of your last three in the checker under this section: once it says you are ready, book on gov.uk for a date at least ${h.T.bookAtLeastDaysAhead} days away.</p>
<p>If English reading is the obstacle rather than the facts, take more time: work through the handbook slowly with a dictionary, and use the explanations under each of our questions as short reading exercises. The test has ${h.T.minutes} minutes for ${h.T.questions} questions, so there is time to read carefully once you know the content.</p>
<h2>What it costs to try again</h2>
<p>The tool at the top of the page adds up the test fees for any number of attempts, and shows them next to the naturalisation and ceremony fees. A second sitting brings the test total to ${h.gbp(h.T.fee * 2)}, a third to ${h.gbp(h.T.fee * 3)}. The fee is refundable only if you cancel at least ${h.T.refundIfCancelHours} hours before, so book the retake when you are confident rather than as a placeholder. See ${h.a('lt-cost', 'test cost and retakes')} for the full picture.</p>
<p>Sources: ${h.src('uk_test_day', 'what happens at the test (gov.uk)')}, ${h.src('uk_test', 'Life in the UK Test booking (gov.uk)')} and ${h.src('uk_guide_an', 'Guide AN')}, section on the Life in the UK test.</p>`,
  },
});
