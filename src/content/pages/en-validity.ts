import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'en-validity',
  group: 'english',
  order: 70,
  tool: {"kind": "mini:seltvalid"},
  mini: {"kind": "mini:b1tests"},
  related: ["en-selt", "en-test", "ilr", "bc-date"],
  sources: ["uk_selt", "uk_guide_an", "uk_english"],
  en: {
    slug: 'english-test-for-citizenship/result-validity',
    nav: "How long a result lasts",
    card: 'A SELT result lasts two years from its award, unless it was already accepted for your settlement. Enter two dates to see where you stand.',
    title: 'SELT Validity for Citizenship: the Two-Year Limit Explained',
    description: 'SELT validity for British citizenship: two years from the award date, the exception for a B1 result already used for ILR, and a checker for your two dates.',
    h1: 'How long an English test result stays valid',
    intro: 'Enter the award date on your result and the day you expect to apply. The checker applies the two-year rule and the settlement exception.',
    resume: (h) => `A Secure English Language Test result is valid for ${h.E.seltValidYears} years from the date it is awarded, according to the Home Office SELT guidance updated on 12 October 2026, and Guide AN says that once those ${h.E.seltValidYears} years have passed the result cannot support a naturalisation application. The test must therefore have been awarded within the ${h.E.seltValidYears} years before the date the Home Office receives your application, which for an online application is the day you submit it. There is one important exception. If you were granted indefinite leave to remain on the basis of a ${h.E.level} or higher speaking and listening qualification, you meet the English requirement for citizenship without another test, even if the result has since run out and even if that test has since been dropped from the approved list. A result used only for an earlier visa does not get this treatment for citizenship. Degrees and listed passports are not caught by the ${h.E.seltValidYears}-year limit at all.`,
    faqs: (h) => [
      { q: 'Does the two-year SELT limit run from the test day or from the result date?', a: `The SELT guidance and the Home Office list both count the ${h.E.seltValidYears} years from the date the test is awarded, which is the date on your result. Guide AN uses that wording too, though one sentence speaks of the date the test is taken. If your application date falls within a few days of the limit, measure from the earlier of the two dates to be safe.` },
      { q: 'My B1 test from my partner visa has expired. Can I use it for my citizenship application?', a: 'Only if it was also accepted when you were granted settlement. gov.uk lets you reuse an expired B1 to C2 qualification for citizenship when it was accepted for your settlement. A result accepted only for an earlier partner visa is a different case: for citizenship, the gov.uk page ties the exception to settlement, so you would need a new test, a degree or a listed passport.' },
      { q: 'Does the English result need to be valid on the day of my citizenship ceremony?', a: `No rule in Guide AN asks for that. The ${h.E.seltValidYears} years are measured against the date of your application, the day the Home Office receives it. A result that runs out while the caseworker is deciding, or before your ceremony, does not undo an application that was valid when you made it.` },
    ],
    body: (h) => `
<h2>The rule in one sentence, then three dates</h2>
<p>The result must have been awarded no more than ${h.E.seltValidYears} years before the Home Office receives your application. It is a simple test, but people get it wrong because they look at the wrong two dates. Here are the three that matter:</p>
${h.table(['Date', 'Where to find it', 'Why it counts'], [
  ['Award date', 'on your SELT result, next to the reference number', `starts the ${h.E.seltValidYears}-year clock`],
  ['Application date', 'the day the Home Office receives the form (same day online)', 'the clock must not have run out by then'],
  ['Settlement decision', 'your ILR or settlement letter, if a B1 result was used for it', 'removes the clock for citizenship'],
], undefined, ['l', 'l', 'l'])}
<p>Example: Joseph's PTE Home B1 was awarded on 20 January 2025. Its ${h.E.seltValidYears}-year validity ends in January 2027. If he applies for citizenship online on 1 December 2026, the result is fine. If his residence dates force him to wait until March 2027, it has expired and he must book a new test, unless that same result was the one accepted for his indefinite leave to remain. The checker above uses his dates by default.</p>
<h2>The settlement exception, read closely</h2>
<p>Guide AN says that if you successfully applied for indefinite leave to remain on the basis of a ${h.E.level} level qualification, you meet the requirement for naturalisation and do not need another test. It extends this to people who met the ILR requirement because they had already met ${h.E.level} for an earlier entry clearance or leave to remain. The gov.uk page on proving your English adds two useful details: it does not matter if the test is no longer on the current list, and the level can be anything from ${h.E.level} to C2.</p>
<p>The exception is generous but narrow. It works when the result was <em>accepted for settlement</em>. These situations are outside it:</p>
<ul>
<li>You settled on a work route that exempted you from English, so no test was ever assessed for your ILR.</li>
<li>You hold EU settled status: the EU Settlement Scheme never assessed English.</li>
<li>You took a test after getting ILR, specifically for citizenship: the ordinary ${h.E.seltValidYears}-year limit applies to it.</li>
</ul>
<h2>When a test changes name or leaves the list</h2>
<p>Tests do change. From 6 July 2025 LanguageCert replaced its four-skill ESOL SELT with the Academic SELT and the General SELT, and the Home Office confirmed that results already held stay valid for their ${h.E.seltValidYears} years. A test that disappears from the list keeps its value for the rest of its own validity; after that, only the settlement exception keeps an old result alive, and only for citizenship.</p>
<p>The four tests approved today for ${h.E.level} speaking and listening are shown in the tool below with the date each joined the list.</p>
<h2>Planning the order of things</h2>
<p>Because of the limit, the best moment to sit a new test is a few months before your citizenship date, not years ahead. Work out that date first with the ${h.a('bc-date', 'citizenship date calculator')}, which applies the residence and absence rules. Then book the English test with a margin: the Home Office aims for a test within ${h.E.bookWithinDays} days of booking. If you are still on the way to settlement, check whether the B1 you take now could serve both steps, as explained on the ${h.a('ilr', 'settlement page')}. That one result, accepted for ILR, then carries over to citizenship whatever its age.</p>`,
  },
});
