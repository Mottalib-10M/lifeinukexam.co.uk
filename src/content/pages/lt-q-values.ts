import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'lt-q-values',
  group: 'practice',
  order: 13,
  tool: {"kind": "bank", "props": {"chapter": 0}},
  mini: {"kind": "mini:chaptershare", "props": {"c": 0}},
  related: ["lt-questions", "lt-q-uk", "lt-practice", "lt-mock"],
  sources: ["uk_test"],
  en: {
    slug: 'life-in-the-uk-test/questions/values-and-principles',
    nav: "Chapter 1 questions: values",
    card: 'Chapter 1 questions on British values, rights and responsibilities, the test itself and the citizenship ceremony, with answers.',
    title: 'Life in the UK Chapter 1 Questions: Values and Principles',
    description: 'Chapter 1 Life in the UK questions with answers: the fundamental principles, freedoms versus responsibilities, the test, the ceremony, and the traps to avoid.',
    h1: 'Chapter 1 questions: the values and principles of the UK',
    intro: 'Few dates and no battles: chapter 1 questions turn on fine distinctions between lists that sound alike.',
    resume: (h) => `Chapter 1 of the handbook, The values and principles of the UK, sets out the fundamental principles of British life (democracy, the rule of law, individual liberty, tolerance of those with different faiths and beliefs, and participation in community life), the responsibilities and freedoms that come with living in the UK, and practical points about becoming a permanent resident: the Life in the UK Test itself and the citizenship ceremony. Our bank holds ${h.num(h.inChapter(0))} questions on it, out of ${h.num(h.count)}, so it supplies about ${Math.round((h.inChapter(0) / h.count) * h.T.questions)} of the ${h.T.questions} questions in each of our mocks. Few of them need a date. What they test is whether you can tell a principle from a responsibility, and a responsibility from a freedom, because the wrong options are usually real items from the neighbouring list. A missed point here costs exactly as much as a missed battle in the history chapter, and with only ${h.T.questions - h.need} errors allowed before you fall below ${h.need}, it is worth an evening of focused revision.`,
    faqs: (h) => [
      { q: 'Which are the five fundamental principles in chapter 1?', a: 'Democracy, the rule of law, individual liberty, tolerance of those with different faiths and beliefs, and participation in community life. Questions often give a short scenario, such as helping at a local event, and ask which principle it reflects. Learn the five as a fixed list, word for word, so that a near miss among the options stands out.' },
      { q: 'What is the difference between a responsibility and a freedom in these questions?', a: 'A responsibility is something residents are expected to do: obey the law, respect the rights of others, treat people fairly, look after themselves and their family, look after their area and the environment. A freedom is something the UK guarantees to you, such as freedom of belief, of speech, a fair trial or freedom from unfair discrimination. Options mix the two lists on purpose.' },
      { q: 'Does chapter 1 really ask questions about the test and the ceremony?', a: `Yes, the handbook explains both, so our bank covers them: the number of questions, the time allowed, the pass mark, the oath or affirmation and the pledge. They are among the easiest points available, since anyone preparing has already read that the test has ${h.T.questions} questions in ${h.T.minutes} minutes. Do not lose them by skipping the chapter.` },
    ],
    body: (h) => `
<h2>What this chapter covers</h2>
<p>The chapter frames the rest of the handbook. It opens with the principles everyone living in the UK is expected to share, whatever their background, then lists what residents owe the community and what the community guarantees in return. It closes with the route to settlement: the test, the English requirement, and what happens at a citizenship ceremony. Our questions follow that order loosely and fall into three families.</p>
${h.table(['Family', 'Typical question in our bank', 'Answer'], [
  ['Principles', h.q('uk-011')?.q ?? '', h.q('uk-011')?.options[h.q('uk-011')?.answer ?? 0] ?? ''],
  ['Responsibilities and freedoms', h.q('uk-220')?.q ?? '', h.q('uk-220')?.options[h.q('uk-220')?.answer ?? 0] ?? ''],
  ['Becoming a resident or citizen', h.q('uk-033')?.q ?? '', h.q('uk-033')?.options[h.q('uk-033')?.answer ?? 0] ?? ''],
], 'Three examples from our bank, one per family of questions.', ['l', 'l', 'l'])}
<h2>How the questions are built</h2>
<p>Most chapter 1 questions describe a situation and ask you to name what it shows. "Not dropping litter" points to looking after the area you live in; an employer turning down a candidate because of their ethnic background points to unlawful discrimination; a neighbour whose politics you dislike points to respecting the rights of others. The skill tested is matching a concrete example to an abstract label.</p>
<p>The rest are direct recall: which law brought the European Convention on Human Rights into UK courts (the Human Rights Act 1998), which Act gathered anti-discrimination rules for Great Britain (the Equality Act 2010), what a new citizen receives at the end of the ceremony (a certificate, not a passport). These are short facts with one right answer and are quick to learn.</p>
<h2>The traps candidates fall into</h2>
<p><strong>Swapping the lists.</strong> "Treating others with fairness" is a responsibility; "freedom from unfair discrimination" is a freedom. They sound alike and appear together as options. Draw two columns on paper and sort every item the bank mentions into one or the other.</p>
<p><strong>Choosing the generous answer.</strong> Options such as "joining a political party" or "voting in every election" sound like good citizenship, but neither is on the list of responsibilities. The question asks what the handbook lists, not what seems admirable.</p>
<p><strong>Missing the NOT.</strong> A question such as "Which of these is NOT protected by freedom of speech?" flips the logic: three options are protected, the one that encourages violence is not. Read the stem twice when it contains a negative.</p>
<p><strong>Ceremony details.</strong> An oath mentions God, an affirmation does not, and both carry the same legal effect; the pledge follows either one. Questions also ask who organises ceremonies (the local authority) and what you receive there.</p>
<h2>How to revise it in one evening</h2>
<p>Read the whole chapter in the bank above with the answers open: ${h.num(h.inChapter(0))} questions take about forty minutes. Then hide the answers and go through again, saying each answer aloud. Finish with two ${h.a('lt-practice', 'practice sets')} filtered on this chapter. Because the facts recur across questions, most candidates reach nine or ten out of ten by the second set, and the chapter then needs only a quick reread in the week of the test.</p>
<p>The tool under this section shows how many questions a ${h.T.questions}-question mock is likely to draw from chapter 1 in our engine. Once it is secure, move to ${h.a('lt-q-uk', 'chapter 2 on the geography and symbols of the UK')}, which is similarly compact.</p>
<h2>A note on where the facts come from</h2>
<p>gov.uk says the test covers only the handbook's content, and our questions check facts stated there, in our own words. None of them is a question used at a test centre. The ${h.src('uk_test', 'gov.uk Life in the UK Test page')} sets out the format of the real test and the booking rules.</p>`,
  },
});
