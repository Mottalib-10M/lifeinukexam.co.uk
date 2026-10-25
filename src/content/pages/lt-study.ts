import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'lt-study',
  group: 'practice',
  order: 28,
  tool: {"kind": "mini:studyplan"},
  mini: {"kind": "quiz", "props": {"mode": "practice", "chapter": 2}},
  related: ["lt-handbook", "lt-practice", "lt-mock", "lt-dates"],
  sources: ["uk_test", "uk_guide_an"],
  en: {
    slug: 'life-in-the-uk-test/study-guide',
    nav: "Study plan",
    card: 'A study plan for the Life in the UK Test: questions per day for your date, which chapter first, and when to sit mocks.',
    title: 'Life in the UK Test Study Plan: Questions a Day to Pass',
    description: 'Life in the UK test study plan: enter the days left and get questions per day, a week-by-week order of chapters, handbook formats, and how many mocks to sit.',
    h1: 'A study plan for the Life in the UK Test',
    intro: 'Tell the planner how many days you have. It works out the daily load; the plan below says what to put in each week.',
    resume: (h) => `Preparing for the Life in the UK Test comes down to two jobs: reading the official handbook, which gov.uk says is the only material the test covers and which is sold as a book, an eBook and in audio, and answering enough practice questions to turn its facts into quick recall. The planner above divides the work by the days you have. With ${h.num(h.count)} questions in our bank and two passes through it, three weeks means ${Math.ceil((h.count * 2) / 21)} questions a day, about forty minutes, plus a full mock roughly every four days. A sound order is to start with the chapters that have the most separate facts to memorise (history, then modern society), keep values and the geography of the UK, which turn on short lists, for later, and save government and law for the middle, when you can link it to news you see every day. Book the test, at least ${h.T.bookAtLeastDaysAhead} days ahead on gov.uk for ${h.gbp(h.T.fee)}, once your lowest recent mock is comfortably above ${h.need} out of ${h.T.questions}.`,
    faqs: (h) => [
      { q: 'How long does it take to prepare for the Life in the UK Test?', a: 'There is no official figure, and it depends on how much British history and culture you already know and how fluently you read English. As a planning range, our suggestion is two to six weeks at under an hour a day. Use the planner: if it asks for more questions a day than you can manage, push your booking back rather than cramming.' },
      { q: 'Is the audio version of the handbook enough to prepare?', a: 'gov.uk lists audio as one of the official formats, alongside the book and eBook, and listening suits commutes. On its own it is weak for dates and names, which are easier to retain when you see and write them. A good mix is audio for a first pass through each chapter, then practice questions on screen, where those details are tested.' },
      { q: 'Which chapter should I study first?', a: 'Start where the facts are densest and least familiar, usually history: it has the most dates and names to fix in memory and benefits most from repetition over several weeks. Leave the chapter on values and principles until later, because its questions turn on a short list of ideas that a single evening of revision usually secures.' },
    ],
    body: (h) => `
<h2>What the planner calculates</h2>
<p>You enter the days until your test and how many times you want to go through our bank of ${h.num(h.count)} questions. It returns the questions per day, the total to answer, and how many full mocks fit if you sit one every four days. Two passes is a good default: the first teaches you the facts, the second shows which ones did not stay. Three passes makes sense if English is not your first language or the history is entirely new to you. The planner's rhythm is a suggestion by Radif Partners, not an official study plan.</p>
${h.table(['Days left', 'Passes', 'Questions a day', 'Mocks (one every 4 days)'], [
  [14, 2, Math.ceil((h.count * 2) / 14), Math.floor(14 / 4)],
  [21, 2, Math.ceil((h.count * 2) / 21), Math.floor(21 / 4)],
  [30, 2, Math.ceil((h.count * 2) / 30), Math.floor(30 / 4)],
  [45, 3, Math.ceil((h.count * 3) / 45), Math.floor(45 / 4)],
], 'A few outputs of the planner with our current bank.', ['r', 'r', 'r', 'r'])}
<h2>A four-week plan, week by week</h2>
<p><strong>Week 1: history.</strong> Read the history chapter of the handbook, then work through the ${h.a('lt-q-history', 'history questions')} with the answers open. Learn the seven anchor dates first and attach the others to them. Practise with the set at the bottom of this page, already filtered on history.</p>
<p><strong>Week 2: modern society and the UK.</strong> Read both chapters. Learn the calendar of festivals and saints' days as one list, then sport, books and inventions as separate batches. Chapter 2 on what the UK is can be summarised in four small tables: nations and capitals, status of territories, flags, highest points.</p>
<p><strong>Week 3: government and law, then values.</strong> Parliament, elections, courts and daily duties, with their numbers on a card. End the week with the chapter on values and principles, which is mostly about sorting principles, responsibilities and freedoms correctly. Sit your first full ${h.a('lt-mock', 'timed mock')}.</p>
<p><strong>Week 4: mixed practice and mocks.</strong> One mock every few days, with the gaps filled by ${h.a('lt-practice', 'chapter practice')} on whichever chapter lost the most points. Reread your list of missed facts each morning. If the lowest of your last three mocks is two points or more above ${h.need}, book.</p>
<h2>The handbook in its three formats</h2>
<p>gov.uk says the test only covers information from the official Guide for New Residents, available as a book, an eBook or in audio. Guide AN recommends familiarising yourself with it before attempting the test and does not recommend unofficial study guides. Our questions are a way to test yourself on its facts, not a substitute for reading it: they are short, and the handbook gives the context that makes facts easier to keep. The ${h.a('lt-handbook', 'handbook page')} has its full title, edition and ISBN.</p>
<h2>Habits that make the difference</h2>
<p><strong>Little and often.</strong> Thirty questions a day for three weeks beats a whole weekend of cramming, because each fact is met several times with gaps in between.</p>
<p><strong>Write the misses.</strong> One line per wrong answer, in your own words. That list becomes your final revision sheet.</p>
<p><strong>Practise on a computer.</strong> The real test is sat on a computer at the centre, according to Guide AN. Clicking through questions on a screen beforehand removes one source of nerves.</p>
<p><strong>Do not stop at the first pass.</strong> One mock at ${h.need} proves little. Several fresh mocks at ${h.need + 2} or more are a much safer basis for spending ${h.gbp(h.T.fee)} on a booking.</p>
<p>Sources: the ${h.src('uk_test', 'gov.uk Life in the UK Test page')} for the format and handbook formats, and ${h.src('uk_guide_an', 'Guide AN')} for the Home Office's advice on preparation.</p>`,
  },
});
