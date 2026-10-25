import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'lt-pass-mark',
  group: 'test',
  order: 40,
  tool: {"kind": "mini:ukpass"},
  mini: {"kind": "mini:passchance"},
  related: ["lt-mock", "lt-result", "lt-fail", "lt-tests"],
  sources: ["uk_test_day", "uk_test", "uk_guide_an"],
  en: {
    slug: 'life-in-the-uk-test/pass-mark',
    nav: "Pass mark and format",
    card: 'The pass mark is 75 per cent, or 18 of 24 questions in 45 minutes. What each score means and why margin matters.',
    title: 'Life in the UK Test Pass Mark: 18 of 24, What Scores Mean',
    description: 'The Life in the UK test pass mark is 75%: 18 right out of 24 in 45 minutes. A score table from 15 to 24, why 17 fails, and the margin to aim for in mocks.',
    h1: 'Life in the UK test pass mark: 18 out of 24',
    intro: 'Type a score into the checker to see where it lands. The rule itself fits in one line; what it means for your preparation takes a little longer.',
    resume: (h) => `To pass the Life in the UK Test you must score ${h.pc(h.T.passPercent / 100)} or more, gov.uk says, and the test has ${h.T.questions} questions, so the pass mark is ${h.need} correct answers. ${h.need - 1} correct is ${h.pc((h.need - 1) / h.T.questions, 1)}, below the line, and there is no rounding up: ${h.T.questions - h.need} wrong answers is the most you can afford. You have ${h.T.minutes} minutes for the whole test, which Guide AN describes as lasting up to ${h.T.minutes} minutes and taken on a computer at the test centre. Every question carries the same weight, whatever its chapter, and an unanswered question simply counts as wrong, so a reasoned guess is always better than a blank. A pass gives you a unique reference number for your settlement or citizenship application; a fail means rebooking and paying ${h.gbp(h.T.fee)} again. Because a single question separates the two, aim to clear ${h.need} with room to spare in practice, not to scrape it.`,
    faqs: (h) => [
      { q: 'Is 17 out of 24 a pass in the Life in the UK Test?', a: `No. ${h.need - 1} out of ${h.T.questions} is about ${h.pc((h.need - 1) / h.T.questions)}, and gov.uk requires ${h.pc(h.T.passPercent / 100)} or more. The lowest passing score is ${h.need}. There is no partial credit and no rounding, so a candidate one answer short has to rebook and pay the ${h.gbp(h.T.fee)} fee again.` },
      { q: 'Are some questions worth more points than others?', a: 'Nothing on gov.uk suggests any weighting: the pass rule is stated simply as a percentage of the questions, which means each answer counts the same. A question on the date of a battle is worth exactly as much as one on the emergency telephone number, so no chapter can be written off as minor.' },
      { q: 'Does an unanswered question lose me extra marks?', a: `There is no rule on gov.uk about negative marking; the pass is a share of correct answers. A blank answer is therefore just a wrong answer. With ${h.T.minutes} minutes for ${h.T.questions} questions there is time to answer everything, so before you finish, check that no question has been left empty and make your best guess on any you skipped.` },
      { q: 'What score should I get in mocks before booking?', a: `Our suggestion, not an official rule: book when the lowest of your last three fresh mocks is at least ${h.need + 2}. One mock at ${h.need} shows you can pass on a good day; a floor two points higher means one or two unlucky questions on the day will not turn a pass into a fail.` },
    ],
    body: (h) => `
<h2>Every score from ${h.T.questions - 9} to ${h.T.questions}</h2>
${h.table(['Correct answers', 'Percentage', 'Result', 'Wrong answers'], Array.from({ length: 10 }, (_, i) => {
  const k = h.T.questions - 9 + i;
  return [`${k} / ${h.T.questions}`, h.pc(k / h.T.questions, 1), k >= h.need ? 'Pass' : 'Fail', h.T.questions - k];
}), `Pass at ${h.pc(h.T.passPercent / 100)} or more (gov.uk).`, ['l', 'r', 'l', 'r'])}
<p>The step from ${h.need - 1} to ${h.need} is the whole difference between a reference number and another booking. Each question is worth a little over four percentage points, so there is no such thing as a near pass.</p>
<p>Read the table the other way round too. The right-hand column is your budget of mistakes: ${h.T.questions - h.need} at most. A candidate who arrives knowing that tends to stay calm after two early doubts, because two errors still leave room; one who thinks every miss is fatal often rushes the rest.</p>
<h2>The format at a glance</h2>
${h.table(['Rule', 'Value'], [
  ['Questions', h.T.questions],
  ['Time', `up to ${h.T.minutes} minutes`],
  ['Pass mark', `${h.pc(h.T.passPercent / 100)} (${h.need} correct)`],
  ['Where', `a test centre in the UK, on a computer (over ${h.T.centresOver} centres)`],
  ['Content', 'only the official handbook, Life in the United Kingdom: A Guide for New Residents'],
  ['Fee', `${h.gbp(h.T.fee)} each sitting`],
], 'From gov.uk and Guide AN.', ['l', 'l'])}
<h2>Why margin matters more than the mark</h2>
<p>A sitting of ${h.T.questions} questions samples a handbook full of facts. Even a candidate who knows nine facts in ten will sometimes meet three or four of the tenth kind in the same paper. That is why a practice average just above ${h.pc(h.T.passPercent / 100)} is risky: the average hides the bad draws. The estimator under this section shows the effect. Enter the share of practice questions you usually get right and it returns a statistical chance of reaching ${h.need} on a single sitting, assuming every question is equally likely to be right. Try a few values: the chance climbs steeply between 75 and 90 per cent, which is the zone where extra revision pays off most.</p>
<p>The estimate is a model, not a forecast. Real questions are worded differently from ours and a weak chapter can drag the result below what the average suggests. Use it to set a target, then check that target on a timed ${h.a('lt-mock', 'mock test')}.</p>
<h2>Getting the most out of ${h.T.minutes} minutes</h2>
<p>The time limit works out at close to two minutes per question, generous for questions you know. Answer in one pass, choose your best option where you hesitate, and use the remaining time to revisit doubtful questions. Change an answer only if you recall a specific fact that contradicts it, not out of a vague feeling. And make sure nothing is left blank: a guess between two remaining options is right half the time, a blank never.</p>
<h2>After the result</h2>
<p>gov.uk says that if you pass you get a unique reference number, which the Home Office uses to check the pass when you apply. If you do not reach ${h.need}, you can rebook as many times as you need, paying each time. The ${h.a('lt-result', 'result page')} covers what to do with the reference number, and the ${h.a('lt-fail', 'page on failing')} explains how to diagnose what went wrong before trying again. Sources: ${h.src('uk_test_day', 'what happens at the test (gov.uk)')}, ${h.src('uk_test', 'Life in the UK Test (gov.uk)')} and ${h.src('uk_guide_an', 'Guide AN')}.</p>`,
  },
});
