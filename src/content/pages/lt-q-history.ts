import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'lt-q-history',
  group: 'practice',
  order: 15,
  tool: {"kind": "bank", "props": {"chapter": 2}},
  mini: {"kind": "mini:dates"},
  related: ["lt-questions", "lt-dates", "lt-q-society", "lt-practice"],
  sources: ["uk_test"],
  en: {
    slug: 'life-in-the-uk-test/questions/history',
    nav: "Chapter 3 questions: history",
    card: 'Chapter 3 history questions with answers, grouped into seven periods so that names and dates fall into place.',
    title: 'Life in the UK History Questions: Chapter 3 with Answers',
    description: 'Life in the UK history questions with answers, from Skara Brae to the World Wide Web, and a method to learn chapter 3 by period instead of by date lists.',
    h1: 'Chapter 3 questions: a long and illustrious history',
    intro: 'Thousands of years in one chapter. Learn it as a story in seven acts and most dates stop being arbitrary numbers.',
    resume: (h) => `Chapter 3 of the handbook, A long and illustrious history, runs from prehistoric Britain to the late twentieth century, and its questions ask about events, the people behind them and, often, the year. Our bank has ${h.num(h.inChapter(2))} questions on it, ${h.pc(h.inChapter(2) / h.count)} of our ${h.num(h.count)}, so about ${Math.round((h.inChapter(2) / h.count) * h.T.questions)} of every ${h.T.questions}-question mock in our engine come from here. Candidates who try to memorise a list of dates usually stall around the Tudors. A sturdier method is to learn seven periods, each with one anchor event you are sure of (Roman Britain from AD 43, the Norman conquest of 1066, the Tudors after Bosworth in 1485, the Stuarts from 1603, union and empire from 1707, Victoria from 1837, the world wars and after), then hang every other fact on the nearest anchor. With that frame, a question about Caxton's printing press or Culloden can be solved by placing the event in its century, which often rules out two of the four options before you even recall the answer.`,
    faqs: (h) => [
      { q: 'Do I need to know exact years for the history questions?', a: 'For a core of famous events, yes: 1066, 1215, 1588, 1666, 1707 and 1918 come up repeatedly in our bank, either as the answer or inside the question. For the rest, knowing the century and the order of events is usually enough, because wrong options tend to sit in other centuries. Use the date tool on this page to place any year before practising.' },
      { q: 'Which period of history is the hardest to keep in order?', a: 'The seventeenth century, the densest stretch of our bank, because so much happens close together: the union of the crowns in 1603, the Civil War, the execution of Charles I in 1649, Cromwell, the Restoration in 1660, the Great Fire of 1666, the Glorious Revolution of 1688 and the Bill of Rights in 1689. Learn those eight in order as a single chain.' },
      { q: 'Are inventors and writers part of chapter 3 or chapter 4?', a: `Both chapters mention them, depending on the period. In our bank, Shakespeare, Chaucer, Caxton, Watt, Fleming and Berners-Lee are filed under history, while Dickens, Austen, Baird and the inventors of the jet engine and hovercraft are filed under modern society. On the day the label does not matter; ${h.T.questions} questions are mixed regardless of chapter.` },
    ],
    body: (h) => `
<h2>Seven periods, one anchor each</h2>
${h.table(['Period', 'Anchor (year as in our bank)', 'Other facts the bank hangs on it'], [
  ['Before and under Rome', 'Claudius invades, AD 43', 'Skara Brae on Orkney, Caesar in 55 BC, Boudicca, Hadrian’s Wall'],
  ['Anglo-Saxons and Vikings', 'St Augustine arrives, AD 597', 'Angles, Saxons and Jutes, Sutton Hoo, Alfred the Great at Edington in 878'],
  ['Normans and the Middle Ages', 'Battle of Hastings, 1066', 'Domesday Book 1086, Magna Carta 1215, Bannockburn 1314, Black Death 1348, Agincourt 1415, Chaucer'],
  ['Tudors', 'Bosworth Field, 1485', 'Caxton’s press in the 1470s, Henry VIII and the Church of England, Drake, the Armada 1588, Shakespeare'],
  ['Stuarts', 'Union of the crowns, 1603', 'Charles I executed 1649, Cromwell, Restoration 1660, Great Fire 1666, Wren, 1688 and the Bill of Rights 1689'],
  ['Union, empire and industry', 'Act of Union, 1707', 'Walpole, Culloden 1746, Adam Smith, Watt, Trafalgar 1805, slave trade ended 1807, Waterloo 1815, slavery abolished 1833'],
  ['Victoria to the present', 'Victoria crowned, 1837', 'Irish famine, Crimean War, votes for women 1918 and 1928, the Somme, Churchill, D-Day, NHS 1948, Thatcher 1979, the web 1991'],
], 'Our grouping of the history facts in our bank. The handbook tells the story in its own order.', ['l', 'l', 'l'])}
<p>Learn the left two columns first, until you can recite the seven anchors in order. Then work through the right-hand column one period at a time in the bank above, where every question carries its year in the explanation.</p>
<h2>How history questions are built</h2>
<p>Three shapes recur. The first gives an event and asks for its year: "${h.q('uk-110')?.q}" The second gives an event and asks for the person: "${h.q('uk-098')?.q}" The third asks why something happened or what it changed: why Henry VIII broke with Rome, what the Domesday Book recorded, what the Bill of Rights confirmed. Distractors are chosen from the same period, so Henry VIII is set against other Tudors and 1666 against other seventeenth-century years. That is why knowing the century alone is not quite enough for the anchor events.</p>
<h2>Traps worth knowing in advance</h2>
<p><strong>Pairs of dates for one story.</strong> Women first gained the vote in 1918 (some women over 30) and equal voting age with men in 1928. The slave trade was abolished in 1807, slavery itself in 1833. Caesar landed in 55 BC, the real conquest began in AD 43. Questions pick one half of the pair and offer the other as a wrong answer.</p>
<p><strong>1918 twice.</strong> It is the year of the first women's vote and of the armistice on 11 November. Know both.</p>
<p><strong>Kings with numbers.</strong> James VI of Scotland became James I of England; Henry V won Agincourt, Henry VIII founded the Church of England; Charles I was executed, Charles II restored. Read the numeral carefully.</p>
<p><strong>Same year, two facts.</strong> 1940 alone gives Churchill as Prime Minister, Dunkirk and the Battle of Britain. 1928 gives equal votes and Fleming's penicillin.</p>
<h2>A two-week revision plan for chapter 3</h2>
<p>Day one: learn the seven anchors. Days two to eight: one period a day, reading its questions in the bank with answers open, then hiding them. Days nine to fourteen: two ${h.a('lt-practice', 'practice sets')} a day filtered on history, and a weekly ${h.a('lt-mock', 'mock')}. Our ${h.a('lt-dates', 'dates page')} lists every year in this chapter of our bank in one timeline, useful for a last reread the evening before the test. The calculator under this section turns any year into its century and decade; placing an event in its century is the quickest way to discard options that cannot be right.</p>
<h2>About the source of these questions</h2>
<p>Each question checks a fact stated in the handbook's history chapter, rewritten by Radif Partners; no text is reproduced. The handbook's history ends where its edition was written, so recent events after it are not in the test. The ${h.src('uk_test', 'gov.uk Life in the UK Test page')} states that the test is based only on the handbook.</p>`,
  },
});
