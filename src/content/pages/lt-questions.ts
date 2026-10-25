import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'lt-questions',
  group: 'practice',
  order: 12,
  tool: {"kind": "bank", "props": {"chapter": "all"}},
  mini: {"kind": "mini:chaptershare"},
  related: ["lt-q-values", "lt-q-uk", "lt-q-history", "lt-q-society", "lt-q-government"],
  sources: ["uk_test"],
  en: {
    slug: 'life-in-the-uk-test/questions',
    nav: "All questions and answers",
    card: 'Every question of our bank with its answer and explanation, sorted by the five chapters of the handbook.',
    title: 'Life in the UK Test Questions and Answers: Full Bank',
    description: 'Life in the UK test questions with answers and explanations, all five handbook chapters together: read them, hide the answers to test yourself, then practise.',
    h1: 'Life in the UK test questions and answers',
    intro: 'The list opens on a sample from all five chapters. Choose a chapter for its full set, each answer folded underneath, or show every answer at once.',
    resume: (h) => `This page holds our whole bank of ${h.num(h.count)} Life in the UK practice questions, each with its answer and a short explanation, sorted into the five chapters of the handbook Life in the United Kingdom: A Guide for New Residents: values and principles, what the UK is, history, modern society, and government and law. Every chapter has ${h.num(h.inChapter(0))} questions, so a chapter is about ${h.pc(h.inChapter(0) / h.count)} of the bank and contributes roughly ${Math.round((h.inChapter(0) / h.count) * h.T.questions)} questions to each of our ${h.T.questions}-question mocks. Radif Partners wrote every question from a fact the handbook states; none of its text is reproduced, and none of these is a question from a test centre, because those are not published. The real test, booked on gov.uk for ${h.gbp(h.T.fee)}, asks ${h.T.questions} questions in ${h.T.minutes} minutes and needs ${h.need} right. Reading the answers here is the fastest way to find what you do not know yet; drilling them in the ${h.a('lt-practice', 'chapter practice')} is what makes them stick.`,
    faqs: (h) => [
      { q: 'Are these the questions asked at the test centre?', a: 'No. The questions used at test centres are not published, and anyone who claims to sell them should be treated with suspicion. Ours are written by Radif Partners from the facts set out in the handbook, which gov.uk says is the only material the test covers. Knowing the facts behind our questions prepares you for any wording the centre uses.' },
      { q: 'Should I read the answers or try the questions first?', a: 'Try first. Press "Hide every answer", go down the list and say your answer out loud before opening each one. Questions you got right without hesitation can be skipped next time; the others go on a short list. Reading answers passively feels productive but leaves far less in memory than a guess that turns out wrong.' },
      { q: 'Why do some questions look alike?', a: 'Because the same fact can be asked from several angles: the date of an event, the person involved, or what it changed. We sometimes ask the same fact twice in different forms on purpose, since the real test can approach a topic from any side. If you can answer both versions, you know the fact rather than the wording.' },
      { q: 'How many questions are in each chapter of this bank?', a: `${h.num(h.inChapter(0))} in each of the five, ${h.num(h.count)} in all. The official spread of questions across chapters is not published, so we gave each chapter the same weight. The chapter tool on this page shows how many questions a ${h.T.questions}-question mock is likely to draw from any chapter you select.` },
    ],
    body: (h) => `
<h2>The five chapter pages</h2>
<p>Each chapter has its own page with the same bank opened on it and advice specific to that part of the handbook: what kind of facts it asks, where candidates slip, and how to revise it.</p>
${h.table(['Chapter', 'Our questions', 'What it asks about'], [
  [`1. ${h.a('lt-q-values', h.chapters[0])}`, h.inChapter(0), 'principles, rights and duties, the test and the ceremony'],
  [`2. ${h.a('lt-q-uk', h.chapters[1])}`, h.inChapter(1), 'nations, capitals, flags, emblems, landmarks'],
  [`3. ${h.a('lt-q-history', h.chapters[2])}`, h.inChapter(2), 'events, people and dates from prehistory to the late twentieth century'],
  [`4. ${h.a('lt-q-society', h.chapters[3])}`, h.inChapter(3), 'festivals, sport, arts, inventions, religion'],
  [`5. ${h.a('lt-q-government', h.chapters[4])}`, h.inChapter(4), 'Parliament, elections, courts, tax, driving, emergencies'],
], `Our bank of ${h.num(h.count)} questions by handbook chapter.`, ['l', 'r', 'l'])}
<h2>How a question is written</h2>
<p>We start from one fact the handbook states and build a question that can only be answered by knowing it. The three wrong options are chosen to be plausible to someone who half-remembers: neighbouring dates, a person from the same period, a city in the same nation. For instance, the bank asks "${h.q('uk-054')?.q}" and offers Glasgow among the options, because it is Scotland's largest city and a frequent wrong guess. The explanation then gives the context in a few lines so that the right answer has something to hang on.</p>
<p>A handful of questions are statements to mark true or false, and a few use a reversed form ("Which of these is NOT..."). Those reversed questions catch more people than any hard date, simply because they read too fast. When you see the word NOT, slow down and test each option against the question before choosing.</p>
<h2>Three ways to use the bank</h2>
<p><strong>As a reading list.</strong> Leave the answers open and read one chapter in a sitting, the way you would read a summary. Useful in the first days, when most facts are new.</p>
<p><strong>As flashcards.</strong> Hide every answer and work down the page, opening each one only after you have committed to an option. Mark the ones you missed and start the next session with them.</p>
<p><strong>As a source of corrections.</strong> After a ${h.a('lt-mock', 'mock test')}, come back here to the chapter that cost you points and read every question in it, not only the ones you missed: wrong answers usually come in clusters around a theme.</p>
<h2>How much weight each chapter carries</h2>
<p>gov.uk does not say how many questions on the day come from each chapter, and we do not guess. In our own mocks each chapter supplies a share proportional to its size in the bank, which with equal chapters means about the same number from each. The tool below shows the share for any chapter. The practical lesson is that no chapter can be skipped: with ${h.T.questions - h.need} mistakes allowed, a chapter you have not revised can cost you the test on its own.</p>
<h2>What the bank is not</h2>
<p>It is not a copy of the handbook, which is Crown copyright and sold by its publisher, and it does not replace reading it. Our explanations are short by design. If a fact surprises you, the handbook gives the fuller account. Nor is any question here a promise of what you will meet: the ${h.src('uk_test', 'gov.uk test page')} says only that you will be tested on the handbook's content. Our ${h.a('lt-handbook', 'handbook page')} explains its editions and formats.</p>`,
  },
});
