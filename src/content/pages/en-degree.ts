import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'en-degree',
  group: 'english',
  order: 68,
  tool: {"kind": "mini:englishroute", "props": {"deg": 2}},
  mini: {"kind": "mini:seltvalid"},
  related: ["en-test", "en-exempt", "en-selt", "bc-application"],
  sources: ["uk_guide_an", "uk_english"],
  en: {
    slug: 'english-test-for-citizenship/degree',
    nav: "Using a degree",
    card: 'When a degree taught in English replaces the B1 test, and which Ecctis statements a graduate from a foreign university must add.',
    title: 'Degree Taught in English for Citizenship: Ecctis and Rules',
    description: 'A degree taught in English for British citizenship: UK degrees, postgraduate diplomas, foreign degrees with Ecctis AQUALS and ELPS, and diplomas that fail.',
    h1: 'Using your degree to meet the English requirement',
    intro: 'A degree taught in English can stand in for the B1 test. What you send depends on where it was awarded and in which country you studied.',
    resume: (h) => `An academic degree taught or researched in English meets the English requirement for naturalisation, so you need no ${h.E.level} test. Guide AN accepts a qualification equivalent to a UK bachelor's, master's or PhD. If a UK institution awarded it, the degree certificate is enough, and gov.uk adds that this holds even if you studied outside the UK. A degree awarded abroad needs Ecctis, the body formerly called UK NARIC: from a majority English-speaking country you add an Academic Qualification Level Statement (AQUALS) confirming the UK equivalence; from anywhere else you add both the AQUALS and an English Language Proficiency Statement (ELPS) confirming the teaching was in English. Postgraduate and graduate diplomas from a UK university also count. Professional diplomas that do not require a first degree for entry, such as accountancy or marketing diplomas, are refused, and vocational degrees cannot be used. The Life in the UK Test is still required, whatever your degree.`,
    faqs: (h) => [
      { q: 'My degree was taught in English in India. Do I need both Ecctis statements?', a: 'Yes. India is not on the Home Office list of majority English-speaking countries, so Guide AN asks for two documents from Ecctis with your degree certificate: the AQUALS confirming that the qualification is equivalent to a UK degree, and the ELPS showing it was taught in English. The same applies to degrees from Nigeria, Pakistan, the Philippines or any other country missing from the list.' },
      { q: 'I already got an Ecctis certificate for my visa years ago. Must I apply again?', a: 'No. The gov.uk page on degrees says that if you have already been assessed by Ecctis, you can use the certificate from that assessment instead of reapplying. Check that it states both the level of the qualification and, where relevant, that it was taught in English, since a naturalisation caseworker needs both points if your degree comes from a country off the list.' },
      { q: 'I have graduated but my degree certificate has not been issued yet. Can I still apply?', a: 'gov.uk accepts proof of a passed degree in two other forms: an official transcript showing your name, the institution, the degree and confirmation of the award, or an official letter from the university confirming when the certificate will be issued or that it cannot reissue a lost one. The letter must give your name, the degree and the date it was or will be awarded.' },
    ],
    body: (h) => `
<h2>Which document set do you need?</h2>
<p>Three questions settle it: who awarded the degree, where it was taught, and whether it is truly academic. The tool at the top starts on the most common case among visitors, a degree from abroad; switch the answer to "from a UK university" to compare.</p>
${h.table(['Your qualification', 'What to send with the application'], [
  ['Degree awarded by a UK institution, taught or researched in English', 'degree certificate'],
  ['Postgraduate or graduate diploma from a UK university', 'diploma certificate'],
  ['Degree from a majority English-speaking country', 'degree certificate + Ecctis AQUALS'],
  ['Degree from any other country, taught in English', 'degree certificate + Ecctis AQUALS + Ecctis ELPS'],
  ['Postgraduate or graduate diploma from outside the UK', 'certificate + Ecctis confirmation that it is comparable to a UK degree and taught in English'],
  ['Professional diploma that needs no first degree for entry', 'not accepted: use a test instead'],
], 'Degree evidence for the English requirement, from Home Office Guide AN (July 2026).', ['l', 'l'])}
<h2>Three worked cases</h2>
<p><strong>Amira</strong> holds an MSc from a British university, taught in Malaysia at its overseas campus. The award comes from a UK institution and the course was in English, so her certificate alone covers the requirement; she does not need Ecctis.</p>
<p><strong>Daniel</strong> studied a BA in Canada. Canada is on the majority English-speaking list, so he needs the AQUALS from Ecctis to show the level, but not the ELPS. If he also holds Canadian nationality he could skip the degree altogether and rely on his passport, as the ${h.a('en-exempt', 'exemptions page')} explains.</p>
<p><strong>Lucía</strong> took a master's taught in English at a university in Spain. Spain is not on the list, so she needs both the AQUALS and the ELPS. Without the ELPS, nothing in her file would show the caseworker that the teaching was in English.</p>
<h2>Academic, not vocational</h2>
<p>gov.uk insists that the degree must be academic and that a vocational degree cannot be used; if you are unsure which kind yours is, it suggests asking the university. Guide AN draws the same line for diplomas. A postgraduate diploma in legal practice, a graduate diploma in law, or a postgraduate diploma in education or teaching, from a UK university, are accepted: they are examples Guide AN gives, and all of them require a first degree for entry. Diplomas in accountancy, marketing, hotel management, cosmetic science or food hygiene are cited as examples of professional diplomas that are refused, whether earned in the UK or abroad, because they do not need an undergraduate degree as an entry requirement.</p>
<h2>Degree or test: which is quicker?</h2>
<p>If you need Ecctis statements you are waiting on an outside body; a ${h.E.level} speaking and listening test can usually be sat within ${h.E.bookWithinDays} days of booking. Some applicants with a foreign degree simply take the test. Two points weigh the other way. A test result lasts ${h.E.seltValidYears} years from its award, while the time limit Guide AN sets is written for test results, not for degrees. And a degree certificate you already hold costs nothing more.</p>
<p>If you go with a test, the checker below shows whether a result awarded on a given date is still usable when you apply. Either way, the English evidence goes in the same application as everything else; the ${h.a('bc-application', 'application steps')} show where it fits.</p>
<h2>One thing a degree never replaces</h2>
<p>Guide AN repeats it under every heading: graduates still need to pass the Life in the UK Test to show their knowledge of life in the UK. A doctorate from Oxford meets the English requirement and nothing else. The ${h.a('british-test', 'British citizenship test page')} explains that second requirement.</p>`,
  },
});
