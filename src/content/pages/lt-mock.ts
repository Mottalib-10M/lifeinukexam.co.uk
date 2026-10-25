import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'lt-mock',
  group: 'practice',
  order: 20,
  tool: { kind: 'quiz', props: { mode: 'exam', timed: true } },
  mini: { kind: 'mini:ready' },
  related: ['lt-tests', 'lt-practice', 'lt-pass-mark', 'lt-booking', 'lt-questions'],
  sources: ['uk_test', 'uk_test_day'],
  en: {
    slug: 'life-in-the-uk-test/mock-test',
    nav: 'Timed mock test',
    card: 'A 24-question mock against a 45-minute clock, marked at 18, with your score split across the five chapters.',
    title: 'Life in the UK Mock Test: 24 Questions in 45 Minutes',
    description: 'Life in the UK mock test with a 45-minute countdown: 24 questions from all five chapters, corrections held to the end, a pass at 18 and a score per chapter.',
    h1: 'Life in the UK mock test, timed like the real one',
    intro: 'The clock starts with your first answer. Keep corrections for the end, as in the centre, then read where the points went.',
    resume: (h) => `This mock test copies the format gov.uk describes for the real Life in the UK Test: ${h.T.questions} multiple-choice questions to answer in ${h.T.minutes} minutes, drawn from the five chapters of the official handbook. A pass needs ${h.pc(h.T.passPercent / 100)} or more, which on ${h.T.questions} questions is ${h.need} correct answers, so ${h.T.questions - h.need} mistakes is the most you can afford. Each draw takes questions from all five chapters in proportion to our bank of ${h.num(h.count)}, every one written by Radif Partners from facts in the handbook rather than copied from it, and the countdown begins only when you choose your first answer. Leave the correction mode on "When I finish" to rehearse the real sitting, where no answer is revealed along the way. At the end you get the score, the verdict against ${h.need}, and a line per chapter: that last part tells you what to revise before booking a test that costs ${h.gbp(h.T.fee)} per attempt.`,
    faqs: (h) => [
      { q: 'Does the timer stop if I close the page in the middle of a mock?', a: `No. The clock runs from your first answer and the questions are kept only while the page stays open, so closing it loses the attempt. That is deliberate: the real ${h.T.minutes} minutes cannot be paused either. If you need to stop, take a fresh draw later rather than resuming, so the result still measures one continuous sitting.` },
      { q: 'Why do some mocks feel much harder than others?', a: `With only ${h.T.questions} questions, a draw that lands three or four times on your weakest topic can cost you several points on its own. The real test samples the handbook in the same way, so the swing is genuine. Judge yourself on the lowest of your last few mocks, not on the best one, and look at which chapter keeps losing marks.` },
      { q: 'Is a pass on this mock the same as a pass at the test centre?', a: `It is a good sign, not a promise. The mark, the number of questions and the time are the same as on gov.uk, but the official questions are not published and are worded differently. Candidates who clear ${h.need} comfortably on several fresh mocks are in a much stronger position than those who scrape a pass once.` },
      { q: 'Can I see the questions I got wrong after the clock runs out?', a: 'Yes. When the time is up or you mark the test, every missed question is listed with the right answer and a short explanation of the fact behind it. Copy those facts into your notes, then use the chapter practice to drill the chapter they come from before your next full mock.' },
    ],
    body: (h) => `
<h2>How this mock is built</h2>
<p>Every draw is a fresh set of ${h.T.questions} questions. The engine takes a share from each of the five handbook chapters, sized to the number of questions we hold on that chapter, then shuffles them so that history, government and everyday life arrive in no particular order, as they do on the day. Two people who open this page see the same first test, because it is drawn when the page is built; the button "New random test" then gives each of you a different one, and the address bar keeps the draw so that you can send it to someone who is revising with you.</p>
<p>The questions themselves are ours. The handbook, Life in the United Kingdom: A Guide for New Residents, is Crown copyright and sold by its publisher, so we reproduce none of its text. Each question checks one fact that the handbook states, offers four options (or true and false), and comes with an explanation of a sentence or two. The ${h.a('lt-questions', 'full question bank')} shows them all with their answers.</p>
${h.table(['Rule', 'Real test (gov.uk)', 'This mock'], [
  ['Questions', h.T.questions, h.T.questions],
  ['Time', `${h.T.minutes} minutes`, `${h.T.minutes} minutes, from the first answer`],
  ['Pass mark', `${h.pc(h.T.passPercent / 100)} or more`, `${h.need} correct`],
  ['Corrections', 'none during the test', 'your choice: at the end or after each answer'],
  ['Cost', `${h.gbp(h.T.fee)} per sitting`, 'free, unlimited'],
], 'Format of the real test as published on gov.uk, read on ' + h.date(h.P.retrieved_at) + '.', ['l', 'l', 'l'])}
<h2>Sit it like the real thing</h2>
<p>A mock is only a forecast if the conditions match. Pick a moment when you have ${h.T.minutes} quiet minutes, put the handbook and your phone out of reach, and do not pause. gov.uk says you cannot bring children or other family members to the test centre, so practising alone is closer to the day than revising at the kitchen table with help.</p>
<p>Use the mode "When I finish". It hides whether each answer was right until you mark the test, which is the only way to learn how you cope with doubt: on the day you will meet questions you are unsure of and must move on without knowing.</p>
<h2>Pacing without rushing</h2>
<p>${h.T.minutes} minutes for ${h.T.questions} questions is close to two minutes each, more than most candidates need. Time trouble usually comes from rereading the same few questions. Answer what you know, choose your best option on the rest, and come back to them with the time left. An unanswered question scores nothing, while a reasoned guess between two options is right half the time. The pace checker below tells you how much time you have per remaining question at any point.</p>
<!--tool:mini:pace-->
<h2>What to do with your score</h2>
<p>After each mock, list the questions you missed and note the chapter of each. One wrong answer on a date is noise; three on the same chapter across two mocks is a gap. Work that chapter on its own in the ${h.a('lt-practice', 'chapter practice')}, where each answer is corrected straight away, then come back for another full mock. The ${h.a('lt-pass-mark', 'pass mark page')} explains how the ${h.need} out of ${h.T.questions} is reached and what the margin above it tells you.</p>
<p>If you want fixed tests to measure progress week after week, the ${h.a('lt-tests', 'numbered practice tests')} keep the same questions every time you open them, so a higher score really means you know more.</p>
<h2>When to book the real test</h2>
<p>Our suggestion, not an official rule: book once the lowest of your last three fresh mocks is at least two points above ${h.need}. The checker above applies it. You book only through the official service on gov.uk, at least ${h.T.bookAtLeastDaysAhead} days ahead, with the same ID you will bring on the day; our ${h.a('lt-booking', 'booking guide')} walks through the steps and the refund rules.</p>`,
  },
});
