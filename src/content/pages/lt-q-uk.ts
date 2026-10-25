import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'lt-q-uk',
  group: 'practice',
  order: 14,
  tool: {"kind": "bank", "props": {"chapter": 1}},
  mini: {"kind": "mini:chaptershare", "props": {"c": 1}},
  related: ["lt-questions", "lt-q-values", "lt-q-history", "lt-practice"],
  sources: ["uk_test"],
  en: {
    slug: 'life-in-the-uk-test/questions/what-is-the-uk',
    nav: "Chapter 2 questions: the UK",
    card: 'Chapter 2 questions on the four nations, capitals, Crown dependencies and overseas territories, flags, emblems and landmarks.',
    title: 'Life in the UK Chapter 2 Questions: What Is the UK?',
    description: 'Chapter 2 Life in the UK questions with answers: the four nations and their capitals, Great Britain versus the UK, Crown dependencies, the flags and emblems.',
    h1: 'Chapter 2 questions: what is the UK?',
    intro: 'Names, places and symbols. Most of this chapter can be learned as a handful of small tables, which is exactly how we suggest you revise it.',
    resume: (h) => `Chapter 2 of the handbook, What is the UK?, describes the country as a unit: the four nations of England, Scotland, Wales and Northern Ireland, the difference between Great Britain and the United Kingdom, the Crown dependencies and the British overseas territories, the capitals, the Union Flag and the crosses it combines, the national emblems, and a selection of places and landmarks. Our bank has ${h.num(h.inChapter(1))} questions on it, ${h.pc(h.inChapter(1) / h.count)} of our ${h.num(h.count)}, so a ${h.T.questions}-question mock in our engine draws about ${Math.round((h.inChapter(1) / h.count) * h.T.questions)} from it. The chapter rewards neat organisation more than memory: almost every question asks you to place a name in the right box (which nation, which status, which emblem). The usual losses come from three confusions that we treat one by one below: Great Britain against the UK, a Crown dependency against an overseas territory, and the crosses of the patron saints on the flag.`,
    faqs: (h) => [
      { q: 'Is Northern Ireland part of Great Britain?', a: 'No. Great Britain is the island shared by England, Scotland and Wales. The United Kingdom adds Northern Ireland, which lies on the island of Ireland, hence the full name United Kingdom of Great Britain and Northern Ireland. Questions test this both ways, so remember that every part of Great Britain is in the UK, but not every part of the UK is in Great Britain.' },
      { q: 'Are Jersey and the Isle of Man part of the United Kingdom?', a: 'No. The Channel Islands (including Jersey and Guernsey) and the Isle of Man are Crown dependencies with their own governments and laws. They are closely linked to the UK, which is responsible for their defence, but they are not part of it. Gibraltar and the Falkland Islands are different again: British overseas territories, also outside the UK.' },
      { q: 'Why is there no Welsh symbol on the Union Flag?', a: 'Because Wales was already united with England when the first Union Flag combined the crosses of England and Scotland in 1606. The cross of St Patrick was added in 1801, giving the flag used today. Wales is represented instead by its own national flag, the red dragon on white and green, which our bank also asks about.' },
    ],
    body: (h) => `
<h2>Four small tables that cover most of the chapter</h2>
<p>Rather than reading chapter 2 as prose, sort its facts into short grids. Every row below comes from a question in our bank.</p>
${h.table(['Nation', 'Capital', 'Patron saint and day', 'Emblem'], [
  ['England', 'London', 'St George, 23 April', 'rose'],
  ['Scotland', 'Edinburgh', 'St Andrew, 30 November', 'thistle'],
  ['Wales', 'Cardiff', 'St David, 1 March', 'daffodil (and leek)'],
  ['Northern Ireland', 'Belfast', 'St Patrick, 17 March', 'shamrock'],
], 'The four nations at a glance. Saints’ days are asked in chapter 4 but learned best here.', ['l', 'l', 'l', 'l'])}
${h.table(['Status', 'Examples in our bank', 'Part of the UK?'], [
  ['Country of the UK', 'England, Scotland, Wales, Northern Ireland', 'yes'],
  ['Crown dependency', 'Isle of Man, Channel Islands (Jersey, Guernsey)', 'no'],
  ['British overseas territory', 'Falkland Islands, Gibraltar, Bermuda', 'no'],
  ['Independent state', 'Republic of Ireland', 'no'],
], 'Who belongs where.', ['l', 'l', 'l'])}
${h.table(['Cross', 'Saint', 'Looks like'], [
  ['St George', 'England', 'red upright cross on white'],
  ['St Andrew (the Saltire)', 'Scotland', 'white diagonal cross on blue'],
  ['St Patrick', 'Ireland', 'red diagonal cross on white, added in 1801'],
], 'The three crosses combined in the Union Flag.', ['l', 'l', 'l'])}
<p>The fourth grid is yours to fill in: highest points and waters. Ben Nevis is the highest mountain in the UK, Scafell Pike in England, Yr Wyddfa (Snowdon) in Wales; the Severn is the longest river and Lough Neagh the largest lake by area. Write it out once by hand and the questions on it become free points.</p>
<h2>How chapter 2 questions are built</h2>
<p>Most give a name and ask for its box: "${h.q('uk-086')?.q}" (Scotland), or "Banks in which parts of the UK issue their own banknotes?" (Scotland and Northern Ireland). Others reverse it and give a box, asking for the name that fits. A few are true or false, such as whether Great Britain is made up of England, Scotland and Wales. The wrong options nearly always belong to the same category, so an Irish city is offered against a Scottish one, never against a river.</p>
<h2>Three confusions that cost points</h2>
<p><strong>Great Britain or the UK.</strong> Whenever a question names Great Britain, check whether Northern Ireland is meant to be in or out. It is out.</p>
<p><strong>Dependency or territory.</strong> Crown dependencies are the islands close to Britain (Channel Islands, Isle of Man). Overseas territories are far away (Falklands in the South Atlantic, Gibraltar at the tip of Spain). Neither is part of the UK. Our bank deliberately offers Orkney and the Scilly Isles as distractors because they are part of Scotland and England respectively.</p>
<p><strong>Largest or capital.</strong> Glasgow is Scotland's largest city but Edinburgh is the capital. Cardiff is both the capital and the largest city of Wales. Expect options that play on the difference.</p>
<h2>Revising it in two short sessions</h2>
<p>Session one: copy the four tables above from memory, check them against the bank with answers open, correct, and repeat until clean. Session two, a day later: two ${h.a('lt-practice', 'practice sets')} filtered on chapter 2, then the bank with answers hidden. With ${h.num(h.inChapter(1))} questions it is the chapter where a full score in practice is most within reach, and points secured here give you room for the ${h.a('lt-q-history', 'history chapter')}, where most candidates lose them.</p>
<h2>Where these facts come from</h2>
<p>Every question checks a fact stated in the handbook, Life in the United Kingdom: A Guide for New Residents, rewritten by Radif Partners; the handbook's own text is not reproduced. gov.uk states that the test covers only the handbook's information: see the ${h.src('uk_test', 'Life in the UK Test page on gov.uk')}.</p>`,
  },
});
