import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'bc-discretion',
  group: 'citizenship',
  order: 86,
  tool: {"kind": "mini:absband", "props": {"tot": 520}},
  mini: {"kind": "mini:qstart"},
  related: ["bc-absences", "bc-date", "bc-refused", "bc-spouse"],
  sources: ["uk_guidance", "uk_guide_an"],
  en: {
    slug: 'british-citizenship/excess-absences',
    nav: "Excess absences and discretion",
    card: 'What happens when your days abroad pass the limit: the bands in the Home Office guidance, the reasons it accepts and when to wait instead.',
    title: 'Excess Absences and Citizenship: the 480 and 900-Day Bands',
    description: 'Excess absences for British citizenship: the Home Office discretion bands (30 days over, 480 to 900, 300 to 540), the final-year scale and accepted reasons.',
    h1: 'Over the absence limit: how discretion works',
    intro: 'The tool opens on 520 days on the 5-year route, a typical "slightly over" case. Change the figures to see which band your own totals fall in.',
    resume: (h) => `Being over the absence limit does not end a citizenship application, but each extra day narrows the options. Under the Home Office nationality guidance (version 16.0), if you exceed ${h.num(h.N.route61.maxAbsenceDays)} days on the ${h.N.route61.years}-year route, or ${h.num(h.N.route62spouse.maxAbsenceDays)} on the spouse route, by ${h.N.discretionWithinDays} days or less, caseworkers must exercise discretion unless there are other grounds to refuse. Between ${h.num(h.N.route61.band[0])} and ${h.num(h.N.route61.band[1])} days (${h.num(h.N.route62spouse.band[0])} to ${h.num(h.N.route62spouse.band[1])} for spouses) they may do so only where your home, employment, family and finances are in the UK and a listed reason applies, such as ${h.N.route61.priorResidenceYears} years of residence before the period without substantial absences, Crown service, travel built into your career, or being stranded abroad by the pandemic. Above ${h.num(h.N.route61.band[1])} (or ${h.num(h.N.route62spouse.band[1])}) refusal is normal. The final 12 months have their own scale: up to ${h.N.finalYear.discretion} days is normally overlooked, up to ${h.N.finalYear.strongLinks} needs strong links, beyond that only exceptional cases succeed.`,
    faqs: (h) => [
      { q: 'I am 25 days over the 450-day limit. Should I wait or apply now?', a: `The guidance says that where the excess is ${h.N.discretionWithinDays} days or less, caseworkers must exercise discretion unless there are other grounds for refusal. If every other requirement is met, including the final-year limit and good character, applying now is within the guidance. Explain the absences briefly in the further information box so the caseworker sees you know about them.` },
      { q: 'What counts as residence without substantial absences before the qualifying period?', a: `It is one of the listed reasons in the ${h.num(h.N.route61.band[0])} to ${h.num(h.N.route61.band[1])} day band. The guidance looks for at least ${h.N.route61.priorResidenceYears} years (${h.N.route62spouse.priorResidenceYears} on the spouse route) of residence just before the period begins, rising to ${h.N.route61.bigPriorYears} (or ${h.N.route62spouse.bigPriorYears}) years if absences exceed ${h.num(h.N.route61.bigAbsence)} days (${h.num(h.N.route62spouse.bigAbsence)}). Guide AN puts the same idea as expecting ${h.N.route61.years + h.N.route61.priorResidenceYears} or ${h.N.route61.years + h.N.route61.bigPriorYears} years in the UK in total on the standard route.` },
      { q: 'Do absences caused by Covid travel restrictions get special treatment?', a: 'Yes. Both Guide AN and the nationality guidance list being unable to return to the UK because of a global pandemic among the reasons for excess absences, and the guidance mentions inability to travel because of a pandemic when weighing absences in the final year. Keep evidence of the cancelled flights, closed borders or quarantine rules that kept you abroad.' },
      { q: 'Can a long posting abroad for a British employer be disregarded?', a: 'It depends on the employer. Postings in Crown service, meaning working overseas directly for the UK government, are treated generously: discretion should normally be used if you lived in the UK before the posting. For private employers, the guidance accepts absences that are an unavoidable consequence of the career, for example a merchant seaman or an employee of a UK-based multinational who travels frequently.' },
    ],
    body: (h) => `
<h2>The bands for the whole period</h2>
${h.table(['Total days abroad', `Route 6(1), ${h.N.route61.years} years`, `Route 6(2), ${h.N.route62spouse.years} years`, 'What the guidance says'], [
  ['Within the limit', `up to ${h.num(h.N.route61.maxAbsenceDays)}`, `up to ${h.num(h.N.route62spouse.maxAbsenceDays)}`, 'requirement met'],
  [`Over by ${h.N.discretionWithinDays} or less`, `${h.num(h.N.route61.maxAbsenceDays + 1)} to ${h.num(h.N.route61.band[0])}`, `${h.num(h.N.route62spouse.maxAbsenceDays + 1)} to ${h.num(h.N.route62spouse.band[0])}`, 'discretion must be exercised, unless other grounds to refuse'],
  ['Middle band', `${h.num(h.N.route61.band[0] + 1)} to ${h.num(h.N.route61.band[1])}`, `${h.num(h.N.route62spouse.band[0] + 1)} to ${h.num(h.N.route62spouse.band[1])}`, 'only with home, work, family and finances in the UK and a listed reason'],
  ['Above the band', `over ${h.num(h.N.route61.band[1])}`, `over ${h.num(h.N.route62spouse.band[1])}`, 'normally refused; reapply later'],
], 'Absence bands from the Home Office nationality guidance, version 16.0 (11 November 2025).', ['l', 'l', 'l', 'l'])}
<p>The listed reasons for the middle band are: residence of ${h.N.route61.priorResidenceYears} years (${h.N.route62spouse.priorResidenceYears} for 6(2)) before the period without substantial absences, raised to ${h.N.route61.bigPriorYears} (${h.N.route62spouse.bigPriorYears}) years once absences pass ${h.num(h.N.route61.bigAbsence)} (${h.num(h.N.route62spouse.bigAbsence)}) days; postings in Crown or designated service, or accompanying a British spouse on one; absences that are an unavoidable consequence of your career; exceptionally compelling occupational or compassionate reasons, such as a firm job offer for which British citizenship is a legal requirement; removal from the UK later overturned, or being wrongly prevented from resuming residence; and being unable to return because of a global pandemic.</p>
<h2>The final 12 months have their own scale</h2>
<p>The last year is weighed separately, against a normal limit of ${h.N.finalYear.normal} days. On the 6(1) route the guidance first asks whether the future intention requirement is met; without it, excess final-year absences are not normally overlooked.</p>
${h.table(['Days abroad in the last 12 months', 'Treatment'], [
  [`${h.N.finalYear.normal + 1} to ${h.N.finalYear.discretion}`, 'discretion exercised'],
  [`${h.N.finalYear.discretion + 1} to ${h.N.finalYear.strongLinks}, period limit met`, 'strong links needed: family, employment and home in the UK'],
  [`${h.N.finalYear.discretion + 1} to ${h.N.finalYear.strongLinks}, period limit not met`, 'established life in the UK and Crown service or compelling occupational or compassionate reasons'],
  [`over ${h.N.finalYear.strongLinks}, period limit met`, 'considered if you have made the UK your home'],
  [`over ${h.N.finalYear.strongLinks}, period limit not met`, 'only exceptional circumstances, such as Crown service'],
], undefined, ['l', 'l'])}
<h2>A worked case</h2>
<p>Olena applies on the ${h.N.route61.years}-year route with ${h.num(520)} days abroad, ${h.num(70)} of them in the last year. She is past ${h.num(h.N.route61.band[0])}, so the "${h.N.discretionWithinDays} days" safety margin does not help her. She lives in her own flat in Leeds with her children, works full time and pays tax here, which covers the "established" condition. What she still needs is a listed reason. Before her qualifying period she had lived in the UK for three years with only short holidays, which exceeds the ${h.N.route61.priorResidenceYears} years the guidance asks for at her level of absence. On those facts her case fits the middle band; she should set it out in the application with evidence, not leave the caseworker to discover it.</p>
<p>Had her absences been ${h.num(950)}, nothing in the list would normally save the application. Guide AN says absences above ${h.num(h.N.route61.band[1])} days are only very rarely disregarded and that the fee will not be fully refunded if it fails. Waiting until older trips fall out of the window would be the better plan; the qualifying start tool below shows how the window moves.</p>
<h2>Technical absences and the first day</h2>
<p>Some people are treated as absent while physically here: diplomats and others exempt from immigration control, members of visiting forces, and people held in detention after a conviction, for instance. The guidance gives caseworkers discretion to count such time as residence in some cases. Separately, missing the first day of the period through illness, pandemic travel restrictions or a removal later overturned can be overlooked, as described on the ${h.a('bc-absences', 'absences page')}.</p>
<p>The bands are guidance to caseworkers, not a promise to applicants. Discretion cuts both ways, and an application that needs it carries more risk than one that does not. If a refusal is likely, the ${h.a('bc-refused', 'refusal page')} explains what follows.</p>`,
  },
});
