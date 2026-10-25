import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'lt-handbook',
  group: 'practice',
  order: 30,
  tool: {"kind": "mini:chaptershare"},
  mini: {"kind": "quiz", "props": {"mode": "practice", "chapter": 0}},
  related: ["lt-study", "lt-questions", "lt-q-history", "lt-dates"],
  sources: ["uk_test", "uk_guide_an"],
  en: {
    slug: 'life-in-the-uk-test/handbook',
    nav: "The official handbook",
    card: 'The official handbook behind the test: full title, third edition, ISBN, formats, its five chapters and how to read it.',
    title: 'Life in the UK Handbook: 3rd Edition, Chapters and Formats',
    description: 'The Life in the UK handbook, A Guide for New Residents, 3rd edition: ISBN, publisher, book, eBook and audio, its five chapters and how to read it for the test.',
    h1: 'The Life in the UK handbook, third edition',
    intro: 'One book defines everything the test can ask. Here is how to identify the right edition, what each chapter covers, and how to read it with a pencil in hand.',
    resume: (h) => `The Life in the UK Test is based on a single book: ${h.T.handbook}, published by ${h.T.handbookPublisher}, ISBN ${h.T.handbookIsbn}. gov.uk states that you will only be tested on information from this Guide for New Residents and that it comes as a ${h.T.handbookFormats.replace(' and ', ' or ')} recording. The Home Office's Guide AN recommends familiarising yourself with it before attempting the test and says it does not recommend unofficial study guides. The handbook has five chapters: the values and principles of the UK; what the UK is; a long and illustrious history; a modern, thriving society; and the UK government, the law and your role. History and modern society hold most of the dates, names, festivals and works to remember, yet our bank of ${h.num(h.count)} practice questions gives each chapter equal room, ${h.num(h.inChapter(0))} questions apiece. Check the ISBN when buying: it is the simplest way to be sure you have the edition the test follows.`,
    faqs: (h) => [
      { q: 'How do I know I have the right edition of the handbook?', a: `Look for the full title, Life in the United Kingdom: A Guide for New Residents, the words third edition, and the ISBN ${h.T.handbookIsbn}, which Guide AN quotes for the printed version. Books with similar titles that are not published on behalf of the Life in the UK Advisory Group are unofficial guides, which the Home Office does not recommend.` },
      { q: 'What if something in the handbook is out of date?', a: 'The test checks what the handbook says. gov.uk is explicit that you are tested only on information from the Guide for New Residents, so answer with the handbook’s version of a fact even if you have read about a later change. Events that took place after the edition was written cannot appear in the test, which keeps revision bounded.' },
      { q: 'Is there a free copy of the handbook online?', a: 'The handbook is Crown copyright and sold through its publisher and booksellers, in print, as an eBook and in audio; gov.uk points buyers to the official shop. Our site does not reproduce it: our practice questions are written from its facts, in our own words, so they help you test yourself but do not replace reading it.' },
    ],
    body: (h) => `
<h2>Identity card of the book</h2>
${h.table(['Detail', 'What to look for'], [
  ['Title', 'Life in the United Kingdom: A Guide for New Residents'],
  ['Edition', 'third edition'],
  ['Publisher', h.T.handbookPublisher],
  ['ISBN (print)', h.T.handbookIsbn],
  ['Formats', h.T.handbookFormats],
  ['Covers', 'everything the test can ask, and nothing else'],
], 'From gov.uk and Guide AN.', ['l', 'l'])}
<h2>The five chapters and what they ask of you</h2>
<p><strong>1. The values and principles of the UK.</strong> The fundamental principles of British life, the responsibilities and freedoms of residents, and the steps to settlement and citizenship, including the test and the ceremony. Ideas rather than facts; our bank checks, for instance, that tolerance and individual liberty are both on the list of principles. ${h.a('lt-q-values', 'Chapter 1 questions')}.</p>
<p><strong>2. What is the UK?</strong> The four nations, Great Britain versus the United Kingdom, Crown dependencies and overseas territories, and some landmarks. A compact chapter of names and places. ${h.a('lt-q-uk', 'Chapter 2 questions')}.</p>
<p><strong>3. A long and illustrious history.</strong> From prehistoric Britain to the late twentieth century: Romans, Anglo-Saxons and Vikings, the Normans, the Tudors and Stuarts, union, empire, industry, the world wars and the post-war state. The densest chapter for dates. ${h.a('lt-q-history', 'Chapter 3 questions')}.</p>
<p><strong>4. A modern, thriving society.</strong> Religion, festivals and saints' days, sport, the arts, literature, food, leisure and inventions. Wide and varied. ${h.a('lt-q-society', 'Chapter 4 questions')}.</p>
<p><strong>5. The UK government, the law and your role.</strong> Monarchy and Parliament, elections, devolution, the courts in the UK's legal systems, international bodies, and everyday duties such as tax and driving. ${h.a('lt-q-government', 'Chapter 5 questions')}.</p>
<p>gov.uk does not publish how many test questions come from each chapter. The calculator above shows how our own mocks split their ${h.T.questions} questions, which is proportional to our bank.</p>
<h2>How to read it for the test</h2>
<p>Read each chapter twice, a few days apart. On the first pass, read for the story without notes. On the second, keep a sheet beside you and write down every fact that could become a question: a number, a date with its event, a name with what the person did, a place with its nation. That sheet, not the book, is what you will revise from in the last week.</p>
<p>Then test yourself. After each chapter, work through its questions in our ${h.a('lt-questions', 'question bank')} or with the practice set at the foot of this page, which starts on chapter 1. Facts you missed go back on the sheet, underlined. The ${h.a('lt-study', 'study plan')} spreads this over the days before your booking.</p>
<h2>Audio, eBook or paper?</h2>
<p>All three hold the same content. Paper suits annotating and flicking back to check a date. The eBook can be searched, which is handy for checking a single fact after a practice question. Audio fits a commute and helps with pronunciation of names, but makes dates harder to keep; pair it with written notes.</p>
<h2>Why we do not reproduce it</h2>
<p>The handbook is Crown copyright and sold by its publisher, so we reproduce none of its text and give no summaries that could replace it. Our ${h.num(h.count)} questions each check one fact it states, in our own wording, with a short explanation. They help you find what you do not know yet; the book is where you learn it properly. Official references: the ${h.src('uk_test', 'gov.uk Life in the UK Test page')} and ${h.src('uk_guide_an', 'Guide AN')}, section on the Life in the UK test.</p>`,
  },
});
