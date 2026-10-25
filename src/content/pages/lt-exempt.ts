import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'lt-exempt',
  group: 'test',
  order: 56,
  tool: {"kind": "mini:ukexempt"},
  mini: {"kind": "mini:englishroute"},
  related: ["en-exempt", "british-test", "ilr", "lt-booking"],
  sources: ["uk_test", "uk_guide_an"],
  en: {
    slug: 'life-in-the-uk-test/exemptions',
    nav: "Who does not need the test",
    card: 'Who is exempt from the Life in the UK Test: under 18, 65 or over, passed before, or a long-term condition with evidence.',
    title: 'Life in the UK Test Exemption: Age, Prior Pass, Medical',
    description: 'Life in the UK test exemptions: under 18, 65 or over, passed before, or a lasting condition with medical proof. Why illiteracy or long residence do not count.',
    h1: 'Who does not need the Life in the UK Test',
    intro: 'Four situations remove the need for a test. Several others that people often assume would count do not. Check yours with the tool above.',
    resume: (h) => `gov.uk lists four cases where you do not need to take the Life in the UK Test: you are under ${h.T.exemptUnder}; you are ${h.T.exemptFromAge} or over; you have passed it before, for example for settlement before applying for citizenship; or you have a long-term physical or mental condition, shown by an exemption form or a doctor's letter. The Home Office's Guide AN, which covers naturalisation, adds the limits. A condition must prevent you from meeting the requirement; illness that responds to treatment does not exempt you, and temporary conditions such as depression or stress would not normally be grounds. The waiver request form must be completed by a registered medical practitioner who has met you. Illiteracy and long residence are expressly not grounds for exemption. Holders of EU settled status are not exempt either: they usually did not take the test for settlement and must pass it before naturalising. Anyone exempted from it at the settlement stage for another reason must meet it now, unless the exemption was for age or a condition. Being exempt saves the ${h.gbp(h.T.fee)} fee, not the citizenship fees.`,
    faqs: (h) => [
      { q: 'I have lived in the UK for 30 years. Am I exempt from the test?', a: 'No. Guide AN says long residence is not a reason for exemption: the knowledge of language and life in the UK requirement is set in law, and the length of time you have lived here does not change it. The only age-based exemption for an adult is being 65 or over. Years of living here may still make parts of the handbook familiar, which helps when you revise.' },
      { q: 'I cannot read well. Can I be exempted from the Life in the UK Test?', a: 'Guide AN says you will not be exempted on grounds of illiteracy. If reading is difficult, it may help to prepare with the audio version of the handbook, which gov.uk lists as an official format, and with reading practice on short texts. If a diagnosed long-term condition is the cause, a medical exemption may be considered on evidence.' },
      { q: 'Who fills in the medical exemption form?', a: 'Guide AN says the waiver request form, published on gov.uk, must be completed by a registered medical practitioner who has met you as part of their assessment. The Home Office expects the condition to prevent you permanently from meeting the requirement; if it responds to treatment, you will be expected to prepare and take the test instead.' },
      { q: 'I turn 65 soon. Should I wait before applying for citizenship?', a: `Possibly, if the test or the English requirement is a real obstacle for you. Guide AN exempts applicants aged ${h.T.exemptFromAge} or over from both. Weigh the delay against the rest of your plans, such as residence rules and absences, which keep running. Our checker uses your age on the day you apply; confirm the exact rule in Guide AN before relying on it.` },
    ],
    body: (h) => `
<h2>The four exemptions on gov.uk</h2>
${h.table(['Situation', 'Exempt?', 'What you need'], [
  [`Under ${h.T.exemptUnder}`, 'yes', 'nothing; adults are the ones who naturalise'],
  [`${h.T.exemptFromAge} or over`, 'yes', 'nothing beyond proof of age in the application'],
  ['Passed the test before', 'yes, no need to retake', 'the reference number or letter from that pass'],
  ['Long-term physical or mental condition', 'possibly', 'an exemption form or a doctor’s letter; for naturalisation, the waiver form by a registered medical practitioner'],
], 'Exemptions listed on gov.uk, with the evidence Guide AN asks for.', ['l', 'l', 'l'])}
<p>The checker at the top of this page applies the same list. For a 40-year-old with no previous pass and no condition, it answers that the test is needed; for a 66-year-old, that it is not.</p>
<h2>Situations that do not exempt you</h2>
${h.table(['You may assume this counts', 'What Guide AN says'], [
  ['Living in the UK for many years', 'long residence is not a reason for exemption'],
  ['Not being able to read or write well', 'you will not be exempted on grounds of illiteracy'],
  ['A temporary illness, such as stress or depression', 'would not normally be grounds for exemption'],
  ['An illness that responds to treatment', 'you are expected to prepare and meet the requirement'],
  ['EU settled status', 'not exempt: take the test and show English before naturalising'],
  ['An exemption granted when you got indefinite leave', 'you must meet the requirement now, unless it was for age or a condition'],
  ['A degree taught in English or a passport from an English-speaking country', 'covers English only; the Life in the UK Test is still needed'],
], 'From Guide AN, sections on knowledge of language and life in the UK.', ['l', 'l'])}
<p>The EU settled status point is easy to miss. Guide AN explains that people granted indefinite leave under the EU Settlement Scheme did not have to meet the knowledge of language and life in the UK requirements for settlement, so these must be met before applying to naturalise, with evidence sent with the application.</p>
<h2>Medical exemptions in detail</h2>
<p>The bar is high. Guide AN states that physical or mental illness does not automatically exempt you. Only a condition that prevents you permanently from meeting the requirements will be considered, and the evidence must come from your doctor or a medical professional. The waiver request form, published on gov.uk, must be completed by a registered medical practitioner who has met you as part of the assessment. You can indicate in your application that you think you should be exempt and give the details there.</p>
<p>If the condition makes the test harder rather than impossible, the booking route offers another option: gov.uk says you can make special requests when you book, for example extra equipment or help accessing the centre if you have a disability.</p>
<h2>The English requirement follows similar rules</h2>
<p>Guide AN treats knowledge of English and knowledge of life in the UK as two separate requirements but gives them the same exemptions for age (${h.E.exemptFromAge} or over) and long-term condition. Unlike the test, English can also be met by a degree taught in English or by nationality of a majority English-speaking country. The tool under this section checks which route applies to you; the ${h.a('en-exempt', 'English exemptions page')} has the detail.</p>
<h2>What it means for your application</h2>
<p>Guide AN warns that if you apply without meeting both requirements, and you are not exempt, the application may be refused and the fee kept. That is ${h.gbp(h.F.naturalisation)} at stake. If you are unsure whether you qualify for an exemption, passing the test removes the doubt for ${h.gbp(h.T.fee)}. Sources: the ${h.src('uk_test', 'gov.uk Life in the UK Test page')} and ${h.src('uk_guide_an', 'Guide AN')}, section 9.3. To prepare instead, start with our ${h.a('british-test', 'citizenship test page')}.</p>`,
  },
});
