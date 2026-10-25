import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'en-test',
  group: 'english',
  order: 60,
  tool: {"kind": "mini:englishroute"},
  mini: {"kind": "mini:b1tests"},
  related: ["en-selt", "en-centres", "en-exempt", "en-degree", "british-test"],
  sources: ["uk_english", "uk_selt", "uk_guide_an"],
  en: {
    slug: 'english-test-for-citizenship',
    nav: "English test for citizenship",
    card: 'The B1 speaking and listening requirement explained, with the four ways to meet it and a check that tells you which one is yours.',
    title: 'English Test for Citizenship: the B1 Rule and Who Needs It',
    description: 'English test for British citizenship: B1 speaking and listening, the approved tests, and when a passport, a degree or your age replaces the test. Check yours.',
    h1: 'The English test for British citizenship',
    intro: 'Citizenship asks for English at B1 in speaking and listening. Many applicants never sit a test at all: answer four questions to see where you stand.',
    resume: (h) => `To naturalise as a British citizen you must show English (or Welsh, or Scottish Gaelic) at level ${h.E.level} of the Common European Framework, in ${h.E.skills} only: reading and writing are not assessed for this purpose. Guide AN accepts four kinds of evidence. The first is a pass in a Secure English Language Test (SELT) on the Home Office list, sat at an approved centre and awarded no more than ${h.E.seltValidYears} years before you apply. The second is a degree taught or researched in English, from a UK university or confirmed by Ecctis if it was awarded abroad. The third is a passport from one of the ${h.E.majorityEnglish.length} majority English-speaking countries and territories on the Home Office list. The fourth is an exemption: being ${h.E.exemptFromAge} or over, or a long-term physical or mental condition backed by a doctor's form. This is a separate requirement from the Life in the UK Test, which almost everyone still needs, and a B1 result already accepted for your settlement normally covers citizenship too.`,
    faqs: (h) => [
      { q: 'Is the English requirement for citizenship the same thing as the Life in the UK Test?', a: `No. Guide AN calls them two separate requirements and you must meet both. The Life in the UK Test checks what you know about British history, institutions and customs, with ${h.T.questions} questions on a computer. The English requirement checks that you can speak and understand English at ${h.E.level}. A US passport, for instance, settles the language part but you still book and pass the Life in the UK Test.` },
      { q: 'Does a GCSE or A level in English count for naturalisation?', a: 'No. The gov.uk page on proving your English says that ESOL qualifications only count if they appear on the list of approved secure English language tests, and it names GCSEs, A levels and NVQs as qualifications that cannot be used. If you studied for a degree in English, that route may work instead; otherwise you book one of the approved B1 tests.' },
      { q: 'Can I use a higher level than B1 for my citizenship application?', a: `Yes. Guide AN asks for an approved qualification at ${h.E.level} or higher, so a B2, C1 or C2 speaking and listening result on the SELT list is fine, as long as it is still within its ${h.E.seltValidYears}-year validity or was already accepted for your settlement. There is no extra credit for a higher grade: the caseworker only checks that the level is met.` },
      { q: 'What happens if I send the wrong English evidence with my application?', a: 'The gov.uk guidance is blunt: a citizenship application can be refused if the wrong qualification is sent, and Guide AN adds that the fee may be lost. Check that the exact test name appears on the approved list, that it was sat at an approved centre and that you quote the SELT reference number on the form before you pay.' },
    ],
    body: (h) => `
<h2>Four ways to meet the requirement</h2>
<p>Most people reading this page assume they must sit an exam. Before you book anything, go through the four doors in order, because the first one that opens is the one you use. The check at the top of the page runs the same order: age and health first, then nationality, then a degree, and only then a test.</p>
${h.table(['Route', 'What you provide', 'Who it suits'], [
  [`Exemption`, `doctor's exemption form, or nothing if you are ${h.E.exemptFromAge} or over`, 'older applicants, people with a lasting condition'],
  ['Nationality', 'your passport from a listed country', `nationals of the ${h.E.majorityEnglish.length} listed countries and territories`],
  ['Degree', 'degree certificate (plus Ecctis statements if awarded abroad)', 'graduates of courses taught in English'],
  ['SELT', 'the SELT unique reference number', 'everyone else'],
], 'Evidence accepted for the English requirement, from Home Office Guide AN (July 2026).', ['l', 'l', 'l'])}
<p>The details of each door are on their own pages: ${h.a('en-exempt', 'exemptions and the country list')}, ${h.a('en-degree', 'using a degree')} and ${h.a('en-selt', 'the approved B1 tests')}. One point catches people out: English being an official language of your country is not enough. gov.uk says that if your country is not on the list, you must prove your English even where English is official, so a national of India, Nigeria or Singapore normally needs a degree or a test.</p>
<h2>What B1 speaking and listening means in practice</h2>
<p>B1 is the "threshold" level of the European framework. For citizenship only ${h.E.skills} are tested, which is why the tests on the approved list for this purpose are short, face-to-face conversations rather than written papers. The SELT guidance groups citizenship with settlement, partner and parent applications as routes that need a two-skill test, while work and study visas need a four-skill test with reading and writing.</p>
<p>The four tests a UK candidate can book for ${h.E.level} are listed below with their minimum result. Choose by provider and centre, not by difficulty: each one is accepted on the same footing.</p>
<!--tool:mini:b1tests|{"p":3}-->
<h2>Timing your English evidence</h2>
<p>A SELT result counts for ${h.E.seltValidYears} years from the date it is awarded. A test sat in March 2025 can be used for an application made in February 2027, but not one made in April 2027, unless the same result was already accepted when you were granted settlement. In that case gov.uk and Guide AN both say you do not need to take another test, even if the result has run out and even if the test is no longer on the current list. The ${h.a('en-validity', 'validity page')} has a date checker for this.</p>
<p>The SELT guidance says you should be able to sit a test within ${h.E.bookWithinDays} days of booking, though not always at the centre nearest to you. If your citizenship date is close, book the English test early so that the result is in hand when the residence clock allows you to apply; the ${h.a('bc-date', 'date calculator')} tells you when that is.</p>
<h2>Exempt in the past is not exempt now</h2>
<p>Several settlement routes do not ask for English at all: Skilled Worker and other work visas, refugees, and partners who were victims of domestic violence, among others. Citizenship has no such list. Guide AN says that if you were exempted from the knowledge of language and life requirements when you got indefinite leave to remain, you must meet them before naturalising, unless the exemption was for age or a physical or mental condition. People with EU settled status are in the same position, because the EU Settlement Scheme never asked for English.</p>
<h2>Where the English sits among the other conditions</h2>
<p>The language is one line of a longer list: residence, absences, good character, the Life in the UK Test, and an indefinite status held for long enough. Meeting the English part early costs nothing in time, since a result can wait up to ${h.E.seltValidYears} years, but booking it before you know your application date may mean paying twice if your plans slip. The overview of ${h.a('bc-citizenship', 'British citizenship')} shows how the pieces fit together, and the ${h.a('british-test', 'British citizenship test page')} covers the knowledge test that sits alongside the English.</p>`,
  },
});
