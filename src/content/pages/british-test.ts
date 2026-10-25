import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'british-test',
  group: 'practice',
  order: 26,
  tool: {"kind": "quiz", "props": {"mode": "exam"}},
  mini: {"kind": "mini:ukexempt"},
  related: ["bc-citizenship", "lt-mock", "en-test", "lt-exempt", "bc-date"],
  sources: ["uk_test", "uk_ilr", "uk_guide_an"],
  en: {
    slug: 'british-citizenship-test',
    nav: "British citizenship test",
    card: 'The British citizenship test explained: the Life in the UK Test plus the English requirement, who needs them and when.',
    title: 'British Citizenship Test: Life in the UK Test and English',
    description: 'British citizenship test practice and rules: the Life in the UK Test (24 questions, pass at 18) plus a separate B1 English requirement, and who needs both.',
    h1: 'The British citizenship test: what it really is',
    intro: 'There is no separate "citizenship exam". Naturalisation asks for a Life in the UK Test pass and proof of English, and the practice test above covers the first.',
    resume: (h) => `What people call the British citizenship test, the UK citizenship test or the naturalisation test is the Life in the UK Test: ${h.T.questions} multiple-choice questions on the official handbook, ${h.T.minutes} minutes, a pass at ${h.pc(h.T.passPercent / 100)} (${h.need} correct), booked on gov.uk for ${h.gbp(h.T.fee)} and sat in person at a test centre. To naturalise you also need to prove your English at level ${h.E.level} in ${h.E.skills}, which the Home Office's Guide AN calls a separate requirement: you must meet both. Many applicants have already passed the Life in the UK Test for indefinite leave to remain, and gov.uk says a previous pass means you do not sit it again. Those exempt are people aged ${h.T.exemptFromAge} or over and people with a long-term physical or mental condition backed by a doctor's evidence. Holders of EU settled status usually did not take it for settlement and must do so before applying. On the naturalisation bill, the test is the smallest line: ${h.gbp(h.T.fee)} beside ${h.gbp(h.F.naturalisation)} for the application and ${h.gbp(h.F.ceremony)} for the ceremony.`,
    faqs: (h) => [
      { q: 'Is the citizenship test different from the Life in the UK Test I took for settlement?', a: 'No, it is the same test. gov.uk says you do not need to take it again if you have passed it before, giving the example of someone who passed it for settlement and now applies to become a citizen. You give the reference number from that pass on your citizenship application, and the Home Office uses it to check the result.' },
      { q: 'Do I need to pass the English test as well as the citizenship test?', a: `Yes, unless you are exempt or meet the English requirement another way. Guide AN describes knowledge of English and knowledge of life in the UK as two separate requirements. English can be shown with an approved ${h.E.level} test, a degree taught in English, or nationality of a majority English-speaking country; the Life in the UK Test still has to be passed in every one of those cases.` },
      { q: 'Should I take the test before checking the other citizenship requirements?', a: 'Guide AN advises making sure you will meet all the other requirements for naturalisation before you take the test. A pass will not help if your absences are over the limit, you have not held settled status long enough, or a good character issue would lead to refusal. Check your earliest application date first, then book the test.' },
      { q: 'I have EU settled status. Do I still need the citizenship test?', a: 'Yes. Guide AN explains that people granted indefinite leave under the EU Settlement Scheme did not have to meet the knowledge of language and life requirements for settlement, so they must pass the Life in the UK Test and show their English before applying to naturalise, unless they are 65 or over or have a qualifying long-term condition.' },
    ],
    body: (h) => `
<h2>Two requirements, often called one test</h2>
${h.table(['Requirement', 'How you meet it', 'Exempt'], [
  ['Knowledge of life in the UK', `pass the Life in the UK Test: ${h.T.questions} questions, ${h.T.minutes} minutes, ${h.need} correct, ${h.gbp(h.T.fee)}`, `${h.T.exemptFromAge} or over; long-term condition with medical evidence`],
  ['Knowledge of English', `${h.E.level} ${h.E.skills}: approved test, English-taught degree, or majority English-speaking nationality`, `${h.E.exemptFromAge} or over; long-term condition with medical evidence`],
], 'The knowledge of language and life requirement for naturalisation, from Guide AN and gov.uk.', ['l', 'l', 'l'])}
<p>The two halves are proved separately. A degree taught in English or a passport from Canada covers English but never the Life in the UK Test; a test pass covers life in the UK but never English. Guide AN warns that an application made without meeting both, when you are not exempt, may be refused and the fee kept. Our ${h.a('en-test', 'English test page')} covers the language half in detail.</p>
<h2>Where the test fits in the naturalisation steps</h2>
<p>For the usual route under section 6(1), Guide AN lists the conditions as: aged ${h.N.minAge} or over, ${h.N.route61.years} years' residence within the absence limits, free of immigration time restrictions for ${h.N.route61.ilrHeldMonths} months, intention to live in the UK, a Life in the UK Test pass, sufficient English, good character, and two referees. The spouse or civil partner of a British citizen applies under section 6(2) with a ${h.N.route62spouse.years}-year period, but the same test and English rules.</p>
<p>A sensible order: first check that the residence conditions will be met on a given date (our ${h.a('bc-date', 'earliest date calculator')} does it trip by trip), then book and pass the test, then the English if needed, then apply. Most people on the settlement route did the test and English years earlier for indefinite leave to remain and simply reuse them.</p>
<h2>Do you need to sit it?</h2>
<p>gov.uk lists four cases where you do not: under ${h.T.exemptUnder}, ${h.T.exemptFromAge} or over, passed it before, or a long-term physical or mental condition supported by an exemption form or a doctor's letter. For naturalisation the first case rarely applies, since adults apply and children are registered rather than naturalised. Guide AN adds that illiteracy and long residence are not grounds for exemption, and that someone exempted when they got indefinite leave must now meet the requirement, unless the exemption was for age or a condition. The checker under this section applies the gov.uk list to your situation.</p>
<h2>What the test costs within the whole application</h2>
${h.table(['Item', 'Fee'], [
  ['Life in the UK Test, one sitting', h.gbp(h.T.fee)],
  ['Naturalisation application', h.gbp(h.F.naturalisation)],
  ['Citizenship ceremony', h.gbp(h.F.ceremony)],
  ['Total with one test sitting', h.gbp(h.totalWithTest)],
], `Home Office fees in force from ${h.date(h.F.effective)}; test fee from gov.uk. English test fees are set by each provider and not included.`, ['l', 'r'])}
<p>Each retake adds another ${h.gbp(h.T.fee)}, since gov.uk says you pay every time you rebook. That is a good reason to practise until your mock scores are reliably above the line.</p>
<h2>Practising for it</h2>
<p>The test at the top of this page draws ${h.T.questions} questions from our bank of ${h.num(h.count)}, written by Radif Partners from the handbook's facts, and marks you at ${h.need}. For a timed rehearsal use the ${h.a('lt-mock', 'mock test')} with its ${h.T.minutes}-minute clock. gov.uk says the test covers only the official handbook, so nothing outside it will be asked. Official details: ${h.src('uk_test', 'Life in the UK Test')}, ${h.src('uk_ilr', 'citizenship with indefinite leave to remain')} and ${h.src('uk_guide_an', 'Guide AN')}.</p>`,
  },
});
