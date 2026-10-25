import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'lt-practice',
  group: 'practice',
  order: 10,
  tool: {"kind": "quiz", "props": {"mode": "practice"}},
  mini: {"kind": "mini:passchance"},
  related: ["lt-mock", "lt-questions", "lt-study", "lt-tests", "lt-q-history"],
  sources: ["uk_test"],
  en: {
    slug: 'life-in-the-uk-test/practice',
    nav: "Practice by chapter",
    card: 'Free sets of ten questions, one handbook chapter at a time, each answer corrected the moment you click it.',
    title: 'Life in the UK Test Practice: Free Sets by Chapter',
    description: 'Free Life in the UK test practice in sets of ten, filtered by handbook chapter, with each answer corrected at once and an explanation of the fact behind it.',
    h1: 'Life in the UK test practice, ten questions at a time',
    intro: 'Pick a chapter or mix all five, answer, and see straight away whether you were right and why. No clock, no sign-up.',
    resume: (h) => `Practice here works in short sets of ten questions, taken from the chapter you choose or from all five chapters of the handbook mixed together, and every answer is corrected the moment you click it, with a sentence or two on the fact it tests. That is the opposite of the real Life in the UK Test, where gov.uk gives you ${h.T.minutes} minutes for ${h.T.questions} questions and no feedback until the end, and it is meant to be: practice is for learning, the ${h.a('lt-mock', 'timed mock')} is for measuring. The ${h.num(h.count)} questions behind it are written by Radif Partners from facts in the official handbook, ${h.num(h.inChapter(0))} per chapter, and none of the handbook's text is copied. A good routine is one or two sets a day on your weakest chapter, a note of every fact you missed, then a full mock once your practice rate stays well above the ${h.pc(h.T.passPercent / 100)} you need on the day, which is ${h.need} correct answers out of ${h.T.questions}.`,
    faqs: (h) => [
      { q: 'Why does practice mode show the answer straight away?', a: 'Because a correction read seconds after a mistake is remembered far better than one read twenty minutes later. In practice you want each wrong answer to turn into a fact you keep, so the right option and the explanation appear at once. You can switch the correction to the end with the toggle above the questions if you prefer to test yourself first.' },
      { q: 'Can I practise only one chapter of the handbook?', a: `Yes. Use the chapter menu above the questions: each set of ten is then drawn only from that chapter, which holds ${h.num(h.inChapter(2))} questions in our bank. Choose "All chapters (mixed)" to go back to a blend. Working one chapter at a time is the quickest way to close a gap that keeps showing up in your mock scores.` },
      { q: 'How many practice sets should I do before a mock test?', a: `There is no official number. Our rule of thumb: once you have seen most of the ${h.num(h.count)} questions and your last few sets average eight or more out of ten, sit a full timed mock. If that mock lands below ${h.need}, go back to sets on the chapter that lost the most points, then try another mock a few days later.` },
      { q: 'Does a practice rate of 80 per cent mean I will pass?', a: `Not on its own. A rate is an average, and a single sitting of ${h.T.questions} questions can land on your weak topics. Enter your rate in the estimator on this page to see the chance it gives of reaching ${h.need}, then check it on a timed mock, where there is no feedback to lean on and the conditions match the centre.` },
    ],
    body: (h) => `
<h2>What a practice set looks like</h2>
<p>Each set holds ten questions. Most offer four options with one right answer; a few are statements to mark true or false. As soon as you pick an option, the tool tells you whether it was right, shows the correct answer if not, and adds an explanation that gives the context of the fact, so that the next question on the same theme feels familiar rather than new. Press "New random test" for another ten; the draw changes each time, and the address keeps it so you can return to the same set later.</p>
<p>Take a question from the history chapter of our bank as an example: "${h.q('uk-095')?.q}" The answer, ${h.q('uk-095')?.options[h.q('uk-095')?.answer ?? 0]}, comes with a reminder of the battle he won and the date, 878. Learning the date together with the name and the kingdom is what lets you answer a differently worded question on the same event.</p>
<h2>Practice versus a mock: two different jobs</h2>
${h.table(['', 'Practice (this page)', 'Timed mock'], [
  ['Questions', '10 per set', String(h.T.questions)],
  ['Chapters', 'one of your choice, or all', 'all five, in proportion'],
  ['Corrections', 'after each answer', 'at the end'],
  ['Clock', 'none', `${h.T.minutes} minutes`],
  ['What it tells you', 'which facts you do not know yet', 'whether you would pass today'],
], 'Our two training modes compared. Format of the real test from gov.uk.', ['l', 'l', 'l'])}
<p>Mixing the two up is the most common revision mistake. Candidates who only ever practise with instant feedback overrate themselves, because the explanation of question three often hints at question seven. Candidates who only sit full mocks learn slowly, because they meet each missed fact once, twenty minutes after the question. Use sets to learn and ${h.a('lt-mock', 'mocks')} to check.</p>
<h2>A routine that turns sets into a pass</h2>
<p>Start with the chapter you find hardest, not the one you enjoy. For most people that is history, the chapter with the most dates and names, but your first mixed sets will tell you. Do two sets on that chapter, write each missed fact in a single line ("Bannockburn, 1314, Robert the Bruce beats Edward II"), and reread the list the next morning before your next sets. After three or four days the same chapter should come back at eight or nine out of ten; move on to the next weakest.</p>
<p>Keep one set in every session mixed across all chapters. It stops the facts you learned last week from fading while you drill something new, and it gets you used to switching from a festival date to a court system in the space of two questions, as the real test does.</p>
<h2>Reading your practice rate</h2>
<p>Your rate is simply the share of practice questions you get right over your recent sets. The estimator above turns it into a chance of reaching ${h.need} out of ${h.T.questions}, assuming each question is right with that same probability. The model is deliberately simple and flatters people whose average hides one weak chapter, so treat the result as a ceiling. If it says you are comfortable but your chapter scores vary a lot, the ${h.a('lt-questions', 'question bank')} lets you read every answer in the weak chapter before practising it again.</p>
<p>When the rate stays high for a week, switch to measurement: the ${h.a('lt-tests', 'numbered practice tests')} give you fixed papers to score, and the ${h.a('lt-study', 'study plan')} spreads what is left over the days until your booking.</p>
<h2>Where the questions come from</h2>
<p>gov.uk states that the test covers only information in the official handbook, Life in the United Kingdom: A Guide for New Residents. Our questions follow its five chapters and each checks one fact the handbook states, in our own words. They are not the questions used at test centres, which are not published, so treat a strong practice record as preparation rather than a preview. The ${h.src('uk_test', 'gov.uk Life in the UK Test page')} describes the format and the booking service.</p>`,
  },
});
