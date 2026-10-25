import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'en-selt',
  group: 'english',
  order: 62,
  tool: {"kind": "mini:b1tests"},
  mini: {"kind": "mini:seltvalid"},
  related: ["en-test", "en-centres", "en-validity", "en-b2"],
  sources: ["uk_selt", "uk_guide_an"],
  en: {
    slug: 'english-test-for-citizenship/approved-tests',
    nav: "Approved B1 tests",
    card: 'The four approved B1 speaking and listening tests side by side: exact names, pass grade, provider and the reference number to quote.',
    title: 'SELT B1 Test for Citizenship: the Four Approved Options',
    description: 'SELT B1 tests approved for British citizenship: IELTS Life Skills, LanguageCert ESOL SELT, PTE Home and Trinity GESE 5, with the grade and reference to quote.',
    h1: 'Approved B1 English tests (SELT) for citizenship',
    intro: 'Only tests on the Home Office SELT list count. Pick a provider below to see the exact test name to book and the result you need.',
    resume: (h) => `A Secure English Language Test (SELT) is an English test the Home Office has approved for visa, settlement and nationality applications. For British citizenship you need ${h.E.level} in ${h.E.skills}, and in the UK ${h.E.b1Tests.length} tests are approved at that level: ${h.E.b1Tests.map((t) => `${t.name} from ${t.provider} (minimum ${t.grade})`).join('; ')}. They are sold only by ${h.E.providersUk.join(', ')}, the ${h.E.providersUk.length} providers allowed to run SELTs inside the UK. A result counts only if the test is on the approved list, was sat at an approved centre and was awarded within ${h.E.seltValidYears} years of your application. You send no certificate: you quote the SELT unique reference number printed on your result, and the caseworker checks it in the provider's online verification system. Leaving the number out can lead to a refusal, according to the Home Office SELT guidance updated on 12 October 2026.`,
    faqs: (h) => [
      { q: 'Is IELTS Life Skills the same as the IELTS test used for university entry?', a: 'No. The SELT guidance names two IELTS products as approved: IELTS for UKVI, which tests reading, writing, speaking and listening and is used for work and study visas, and IELTS Life Skills, which tests speaking and listening only. For citizenship at B1 the two-skill IELTS Life Skills B1 is the one on the list. An ordinary IELTS taken for a foreign university is not a SELT.' },
      { q: 'Where do I find the SELT reference number on my result?', a: 'Each provider prints it under its own label, according to the SELT guidance: UER on Trinity College London results, UKVI number on IELTS SELT Consortium results, Candidate URN on LanguageCert results and SELT URN on Pearson results. That is the number to type in the English section of the citizenship form. Without it the Home Office cannot verify the result and may refuse the application.' },
      { q: 'Can I book an approved English test through an agency instead of the provider?', a: 'The Home Office guidance allows it but warns against it. If you use a third party, check that the test provider officially recognises it and that its price is no higher than on the provider\'s own website, because some agencies claim links with Home Office partners that they do not have. Booking directly with the provider avoids the problem altogether.' },
      { q: 'I failed one part of a two-skill test. Do I have to sit both parts again?', a: 'Possibly not. The SELT guidance says that in certain circumstances a candidate who failed one component may be allowed to resit that component alone, but it depends on the provider\'s terms and conditions, so read them before you book. Where components are examined together, the required scores must all come from the same provider as part of one combined assessment.' },
    ],
    body: (h) => `
<h2>The ${h.E.b1Tests.length} B1 tests at a glance</h2>
<p>All ${h.E.b1Tests.length} assess the same two skills at the same level, so none is "easier" in the eyes of the Home Office. The differences are practical: which centres are near you, how soon a date is free, and the format of the speaking part. The table repeats the minimum result printed on the Home Office list of approved tests taken in the UK, and the date each test joined it.</p>
${h.table(['Test to book', 'Provider', 'Minimum result', 'On the list since'], h.E.b1Tests.map((t) => [t.name, t.provider, t.grade, h.date(t.since)]), 'Approved B1 speaking and listening tests taken in the UK (Home Office list, October 2026).', ['l', 'l', 'l', 'l'])}
<p>Note the LanguageCert line: the pass mark is a score out of 100, not a simple pass, so a candidate who scores below ${h.E.b1Tests[1].grade} has not met the requirement even if the certificate shows a result. The other three are graded pass or fail at this level.</p>
<h2>Book the SELT version, not a look-alike</h2>
<p>Each provider sells tests that are not SELTs, and the names are close. The Home Office SELT guidance lists the exact products that count: "IELTS for UKVI" or "IELTS Life Skills"; "LanguageCert International ESOL SELT", "LanguageCert Academic SELT" or "LanguageCert General SELT"; "PTE Academic UKVI" or "PTE Home"; and Trinity College London's "Secure English Language Tests for UKVI", meaning Integrated Skills in English (ISE) or Graded Examinations in Spoken English (GESE). A Trinity GESE taken at a school for a non-UKVI purpose, or a PTE Academic without "UKVI", will not be accepted.</p>
<p>The four-skill tests on that list (IELTS for UKVI, PTE Academic UKVI, Trinity ISE and the LanguageCert Academic and General SELT) are also accepted for citizenship if they show ${h.E.level} or higher in speaking and listening, since Guide AN asks for "B1 CEFR or higher". They are longer and add reading and writing, so most citizenship applicants who have no other use for them book a two-skill test.</p>
<h2>The LanguageCert change of 6 July 2025</h2>
<p>From 6 July 2025 the LanguageCert ESOL SELT four-skill test was replaced by the LanguageCert Academic SELT and General SELT. The guidance says a four-skill ESOL SELT result already held stays valid for its ${h.E.seltValidYears} years. The two-skill LanguageCert International ESOL SELT B1 used for citizenship is still on the list.</p>
<h2>On the day and after</h2>
<p>Book in the exact name shown on your passport or identity document: if your surname has changed but your passport has not, the booking stays in the passport name. Bring an original, valid document with your photo; a passport, a convention travel document or a stateless persons travel document works everywhere, an eVisa share code works for tests in the UK, and an expired BRP or BRC is accepted only up to ${h.T.brpMonthsAfterExpiry} months after its expiry and no later than ${h.date(h.T.brpDeadline)}. Emergency travel documents are refused. Candidates who need extra equipment or help with access ask for it when booking.</p>
<p>Results are checked online, so keep the result email safe and note the reference number with the award date. The checker below tells you whether that date still works for the day you plan to apply; centres by city are on the ${h.a('en-centres', 'test centres page')}.</p>`,
  },
});
