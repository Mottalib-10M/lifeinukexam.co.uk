import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'lt-q-government',
  group: 'practice',
  order: 17,
  tool: {"kind": "bank", "props": {"chapter": 4}},
  mini: {"kind": "mini:chaptershare", "props": {"c": 4}},
  related: ["lt-questions", "lt-q-society", "lt-practice", "lt-mock"],
  sources: ["uk_test"],
  en: {
    slug: 'life-in-the-uk-test/questions/government-and-law',
    nav: "Chapter 5 questions: government",
    card: 'Chapter 5 questions on Parliament, elections, devolution, the courts, tax, driving and emergency numbers, all with answers.',
    title: 'Life in the UK Chapter 5 Questions: Government and Law',
    description: 'Chapter 5 Life in the UK questions with answers: Parliament and elections, devolution, the courts in each legal system, tax, driving and the numbers to call.',
    h1: 'Chapter 5 questions: the UK government, the law and your role',
    intro: 'How the country is run and what it expects of you day to day. The questions are about institutions and rules, and many have a number in the answer.',
    resume: (h) => `Chapter 5 of the handbook, The UK government, the law and your role, explains how the UK is governed and what daily life asks of residents: the constitutional monarchy, the two Houses of Parliament, how general elections work, the Prime Minister and Cabinet, devolved government in Scotland, Wales and Northern Ireland, the UK's place in international bodies, the police and the courts, and practical duties such as tax, National Insurance, driving rules and calling the emergency services. Our bank holds ${h.num(h.inChapter(4))} questions on it, ${h.pc(h.inChapter(4) / h.count)} of our ${h.num(h.count)}, so about ${Math.round((h.inChapter(4) / h.count) * h.T.questions)} per ${h.T.questions}-question mock in our engine. Many answers are numbers (650 MPs, five years between elections, 12 jurors, 999, 101 and 112, a minimum driving age of 17) or the name of an institution. The main difficulty is that the UK has three legal systems, so a court question that is true for England and Wales may be wrong for Scotland. We show below how to keep them apart.`,
    faqs: (h) => [
      { q: 'Which numbers should I learn for chapter 5?', a: 'From our bank: 650 MPs in the House of Commons, a general election at least every five years, polling stations open 7 am to 10 pm, a voting age of 18 (lowered from 21 in 1969), 12 jurors in England, Wales and Northern Ireland, 17 as the minimum age to drive a car, 999 or 112 in an emergency and 101 for non-urgent police matters.' },
      { q: 'Do I need to know the courts in Scotland as well?', a: 'Some of them. Our bank asks who decides on prosecutions in Scotland (the Procurator Fiscal) and that the Supreme Court is the final court of appeal for civil cases across the UK and for criminal cases outside Scotland. Most court questions, such as magistrates, the Crown Court, the Youth Court and the County Court, describe England and Wales, and the question usually says so.' },
      { q: 'What is the difference between the House of Commons and the House of Lords?', a: 'MPs in the Commons are elected, one per constituency, by first past the post. Members of the Lords are not elected by the public: most are life peers, with some hereditary peers and senior bishops. The Lords can examine, amend and delay bills, but the elected Commons can in most cases pass a law over its objection.' },
    ],
    body: (h) => `
<h2>What chapter 5 asks about</h2>
<p>The chapter moves from the top of the state down to the citizen. Our questions follow the same five blocks, and each block has its own style.</p>
${h.table(['Block', 'Style of question', 'Example from our bank'], [
  ['Constitution and Parliament', 'roles and names', h.q('uk-165')?.q ?? ''],
  ['Elections', 'numbers and rules', h.q('uk-167')?.q ?? ''],
  ['Government and devolution', 'who does what, with a few years', h.q('uk-176')?.q ?? ''],
  ['The law and the courts', 'which court, which system', h.q('uk-190')?.q ?? ''],
  ['Your role', 'everyday duties and services', h.q('uk-194')?.q ?? ''],
], 'The five blocks of chapter 5 in our bank.', ['l', 'l', 'l'])}
<h2>Keeping the three legal systems apart</h2>
<p>England and Wales share one system, Scotland has its own, and Northern Ireland has a third. For the test this matters most for courts. In our bank: less serious criminal cases in England and Wales go before magistrates, usually unpaid volunteers; serious cases such as murder go to the Crown Court before a judge and a jury of 12, the jury deciding guilt; young people aged 10 to 17 usually appear before a Youth Court; civil disputes such as debts go to the County Court, with a small claims procedure for modest sums. In Scotland, prosecutions are decided by the Procurator Fiscal. Above them all, the Supreme Court, created in 2009, is the final court of appeal for civil cases and for criminal cases outside Scotland.</p>
<p>A good habit: when a court question does not name a part of the UK, look at the options. If one of them is Scottish (such as the Procurator Fiscal) and the others belong to England and Wales, the stem is usually testing which system you are in.</p>
<h2>The traps in this chapter</h2>
<p><strong>Monarch's role.</strong> The monarch is head of state, appoints the Prime Minister, opens Parliament and reads the speech setting out the government's plans, but acts on ministers' advice. Options that give the monarch political decisions are wrong.</p>
<p><strong>Ministers' portfolios.</strong> The Chancellor of the Exchequer handles the economy and public finances; the Home Secretary handles crime, policing and immigration. Offered side by side, they are easy to swap.</p>
<p><strong>Who can vote.</strong> British citizens, Irish citizens and eligible Commonwealth citizens resident in the UK can vote in general elections, provided they are on the electoral register. Other nationalities are offered as distractors.</p>
<p><strong>Three emergency numbers.</strong> 999 and 112 both reach the emergency services; 101 is the police when it is not an emergency.</p>
<p><strong>Lords and Commons.</strong> The Lords can delay a law but cannot normally block it for good. Questions that say the Lords has the final word are wrong.</p>
<h2>How to revise it</h2>
<p>Write the key numbers (650, five, 12, 17, 999, 101, 112) on a card and learn them first: they are the cheapest points in the chapter. Then read the courts block with the bank's answers open and draw a small diagram of the courts of England and Wales with the Supreme Court above. Finish with two ${h.a('lt-practice', 'practice sets')} on chapter 5. Because the questions are factual and the distractors are other real institutions, candidates who have drawn the diagram usually stop losing points here within a few days.</p>
<p>The tool below shows how many questions our engine draws from this chapter in a ${h.T.questions}-question mock. When chapter 5 is solid, a full ${h.a('lt-mock', 'timed mock')} will show whether the rest of the handbook is at the same level.</p>
<h2>Source of the facts</h2>
<p>Our questions check facts stated in the handbook, written in our own words by Radif Partners, and are not questions used at test centres. Practical rules can change after the handbook's edition; the test, as gov.uk states on its ${h.src('uk_test', 'Life in the UK Test page')}, is based only on the handbook.</p>`,
  },
});
