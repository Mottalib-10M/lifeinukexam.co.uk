import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'en-exempt',
  group: 'english',
  order: 66,
  tool: {"kind": "mini:englishroute", "props": {"nat": 1}},
  mini: {"kind": "mini:ukexempt"},
  related: ["en-test", "lt-exempt", "en-degree", "british-test"],
  sources: ["uk_english", "uk_guide_an"],
  en: {
    slug: 'english-test-for-citizenship/exemptions',
    nav: "English exemptions",
    card: 'Who skips the English test for citizenship: applicants aged 65 or over, people with a lasting condition, and nationals of the listed countries.',
    title: 'English Language Exemption for Citizenship: Who Is Exempt',
    description: 'English language exemption for British citizenship: aged 65 or over, a lasting condition with a medical form, or a passport of a listed English-speaking state.',
    h1: 'Who is exempt from the English requirement',
    intro: 'Three groups skip the English test. Only two of them also skip the Life in the UK Test, and the difference matters when you plan.',
    resume: (h) => `You do not have to prove English for British citizenship in three cases set out by gov.uk and Home Office Guide AN. You are aged ${h.E.exemptFromAge} or over. You have a long-term physical or mental condition that permanently prevents you from meeting the requirement, shown on a waiver form completed by a registered medical practitioner who has assessed you. Or you are a national of one of the ${h.E.majorityEnglish.length} countries and territories the Home Office treats as majority English-speaking: ${h.E.majorityEnglish.join(', ')}, with Ireland counted for citizenship only. The first two exemptions cover the Life in the UK Test as well; the nationality exemption does not, so a Canadian or an Australian still books and passes that test. Long residence, illiteracy and short-term illness are not grounds for exemption, and an exemption granted for your settlement does not carry over unless it was based on age or a lasting condition.`,
    faqs: (h) => [
      { q: 'English is an official language in my country. Am I exempt from the English test?', a: 'Not unless your country is on the Home Office list. gov.uk says plainly that nationals of countries missing from the list must prove their English even where English is an official language there. Nigeria, India, Ghana, Kenya, Singapore and South Africa are not on it, for example, so their nationals use an approved test or a degree taught in English instead.' },
      { q: 'I hold dual nationality and only one of my passports is from a listed country. Does that count?', a: 'Guide AN describes the evidence as your passport showing that you are a national of a country on the majority English-speaking list. The rule turns on nationality, so a valid passport from the listed country is what you provide, whatever your other nationality. If that passport has expired, renew it or ask the Home Office what other proof of that nationality it accepts before applying.' },
      { q: 'Would anxiety or depression exempt me from the English requirement?', a: `Rarely. Guide AN says temporary illnesses such as depression or stress would not normally be grounds, and that if a condition responds to treatment you are expected to prepare and meet the requirement. Only a condition that prevents you permanently is considered, with evidence from a doctor. For the test itself, providers offer adjustments such as extra time, which may be a better route.` },
      { q: 'I was exempt from English when I got indefinite leave to remain. Am I still exempt?', a: `Only if that exemption rested on age or a long-term condition. Guide AN says people exempted from the knowledge of language and life requirements at the settlement stage must meet them before naturalising unless exempt for age or impairment. Refugees, partners of people who died and work-route settlers who skipped English for settlement therefore need a test, a degree or a listed passport.` },
    ],
    body: (h) => `
<h2>The three exemptions, side by side</h2>
${h.table(['Ground', 'Evidence', 'Life in the UK Test too?'], [
  [`Aged ${h.E.exemptFromAge} or over`, 'nothing extra: your age shows on the application', 'Yes, exempt from both'],
  ['Long-term physical or mental condition', 'waiver form completed by a registered medical practitioner, with current medical reports', 'Yes, if the form covers it'],
  ['National of a listed country', 'your passport from that country', 'No, the test is still needed'],
], 'Grounds for exemption from the English requirement for naturalisation, from Guide AN (July 2026) and gov.uk.', ['l', 'l', 'l'])}
<p>The check at the top of the page starts with your nationality set to "yes", since that is the case most visitors to this page are testing. Change it, or enter your age, to see how the answer moves. The second tool below checks the Life in the UK Test exemption, which follows slightly different rules (it also lets off anyone under ${h.T.exemptUnder} and anyone who passed it before).</p>
<h2>The country list</h2>
<p>The Home Office list is short and fixed. It contains ${h.E.majorityEnglish.length} entries, mixing independent states and a single line for all the British overseas territories:</p>
<p>${h.E.majorityEnglish.join(' · ')}</p>
<p>Two details are easy to miss. Ireland appears on the list "for citizenship only": an Irish national does not prove English for naturalisation, but the entry does not extend to every settlement route. Malta is the only EU member state on the list besides Ireland, so a Maltese national with EU settled status naturalises without an English test while a Dutch or Swedish national does not, however fluent. Guyana and Belize are on it; South Africa, India and Nigeria are not.</p>
<h2>Medical exemptions: what the Home Office looks for</h2>
<p>An illness does not exempt you automatically. Guide AN expects people whose condition responds to treatment to prepare and meet the requirement; only a condition that prevents you permanently is considered. The request is made on the application, with the waiver form published on gov.uk, filled in by a registered medical practitioner who has met you as part of the assessment, and the gov.uk page asks for original copies of current medical reports with it.</p>
<p>Think about the scope of the form. You can ask to be exempt from either part or both. A person with a hearing impairment, say, might seek exemption from the English speaking and listening test but still sit the Life in the UK Test with adjustments; Guide AN lists, for Life in the UK Test centres, extra time, a reader, a scribe and a BSL interpreter among the support they offer.</p>
<h2>What does not exempt you</h2>
<ul>
<li>Long residence. Guide AN says it is not a reason for exemption, even after decades in the UK.</li>
<li>Illiteracy. The requirement is about speaking and listening, and Guide AN says you will not be exempted on that ground.</li>
<li>An earlier exemption granted for settlement on any basis other than age or a lasting condition.</li>
<li>EU settled status, which was granted without any English check; Guide AN states that settled status holders must meet the requirement before applying.</li>
</ul>
<p>If none of the exemptions fits, look next at a ${h.a('en-degree', 'degree taught in English')}, then at the ${h.a('en-selt', 'approved B1 tests')}. The ${h.a('lt-exempt', 'Life in the UK Test exemptions page')} covers the knowledge test in more depth.</p>`,
  },
});
