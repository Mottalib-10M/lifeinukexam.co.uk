import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'bc-steps',
  group: 'citizenship',
  order: 81,
  tool: { kind: 'frise', props: { preset: 'journey' } },
  mini: { kind: 'mini:ilrwait' },
  related: ['bc-date', 'lt-booking', 'ilr', 'bc-application', 'bc-processing', 'bc-ceremony'],
  sources: ['uk_test', 'uk_ilr', 'uk_guide_an', 'uk_priority', 'uk_ceremony', 'uk_fees'],
  demarche: true,
  en: {
    slug: 'british-citizenship/steps',
    nav: 'Every step, test to ceremony',
    card: 'The whole road on one timeline: the Life in the UK Test, settlement, the waiting year, the application, the decision and the ceremony.',
    title: 'British Citizenship Timeline: Every Step, Test to Ceremony',
    description: 'The British citizenship timeline step by step: Life in the UK Test, settlement, the 12-month wait, applying, biometrics, the decision and the ceremony, dated.',
    h1: 'From the Life in the UK Test to the citizenship ceremony',
    intro: 'Enter the day you book the test. The timeline lays out every stage with its official length and gives the window in which the certificate could reach you.',
    resume: (h) => `Becoming British by naturalisation on the usual five-year route takes six stages in a fixed order. First you pass the Life in the UK Test, booked at least ${h.T.bookAtLeastDaysAhead} days ahead for ${h.gbp(h.T.fee)}, and keep the reference number. Second, you are granted indefinite leave to remain or EU settled status, an application that already asks for the test and for English at ${h.E.level}. Third, under section 6(1) you hold that status for ${h.N.route61.ilrHeldMonths} months, a wait the husband, wife or civil partner of a British citizen does not have. Fourth, you apply online and pay ${h.gbp(h.total)}, then give fingerprints and a photo within ${h.N.biometricsDays} days. Fifth, the Home Office usually decides within ${h.N.decisionUsuallyMonths} months of receipt, or within ${h.F.priorityWorkingDays} working days if you add the ${h.gbp(h.F.priority)} priority service. Sixth, you book and attend a ceremony within ${h.N.ceremonyWithinDays} days of the invitation, where the certificate is presented. The timeline above adds these lengths to your own start date.`,
    faqs: (h) => [
      { q: 'Should I take the Life in the UK Test before or after getting settlement?', a: `Before. gov.uk says the test is part of an application for indefinite leave to remain or for citizenship, so most people sit it on the way to settlement and reuse the same reference number years later when they naturalise. A pass is not taken twice. Booking it early also leaves time to rebook, at ${h.gbp(h.T.fee)} a sitting, if the first attempt falls short.` },
      { q: 'How long does British citizenship take from start to finish?', a: `It depends on where you start. From the grant of settlement on the five-year route, add the ${h.N.route61.ilrHeldMonths}-month wait, up to ${h.N.biometricsDays} days for biometrics, a decision usually within ${h.N.decisionUsuallyMonths} months of receipt and up to ${h.N.ceremonyWithinDays} days to attend the ceremony. Enter your own date in the timeline to see the earliest and latest ends.` },
      { q: 'Which stage can be made shorter?', a: `Only the decision, by paying ${h.gbp(h.F.priority)} for the priority service, which targets ${h.F.priorityWorkingDays} working days. The waiting year after settlement is a legal condition and cannot be bought down, and the residence period itself runs at its own pace. Booking the ceremony quickly after the invitation trims the last stage, subject to dates offered by your council.` },
    ],
    body: (h) => `
<h2>Six stages, one order</h2>
<p>Each stage depends on the one before it. The Home Office will not consider citizenship until settlement has been held long enough, and the ceremony invitation only follows an approved application. The table gives the official length of each step and the page where we look at it in depth.</p>
${h.table(['Stage', 'Official length', 'Cost', 'In depth'], [
  ['1. Life in the UK Test', `book at least ${h.T.bookAtLeastDaysAhead} days ahead`, h.gbp(h.T.fee), h.a('lt-booking', 'booking the test')],
  ['2. Settlement (ILR)', 'its own application', h.gbp(h.F.ilr), h.a('ilr', 'indefinite leave to remain')],
  ['3. Hold settlement', `${h.N.route61.ilrHeldMonths} months (section 6(1) only)`, 'none', h.a('bc-date', 'date calculator')],
  ['4. Apply and biometrics', `biometrics within ${h.N.biometricsDays} days`, h.gbp(h.total), h.a('bc-application', 'how to apply')],
  ['5. Decision', `usually within ${h.N.decisionUsuallyMonths} months; ${h.F.priorityWorkingDays} working days on priority`, `${h.gbp(h.F.priority)} if priority`, h.a('bc-processing', 'decision time')],
  ['6. Ceremony', `within ${h.N.ceremonyWithinDays} days of the invitation`, 'included in the fee', h.a('bc-ceremony', 'the ceremony')],
], 'Lengths from gov.uk and Guide AN; fees from the Home Office table of ' + h.date(h.F.effective) + '.', ['l', 'l', 'r', 'l'])}
<p>The timeline at the top of the page uses exactly these figures. Where an official page gives a maximum, such as the ${h.N.biometricsDays} days for biometrics or the ${h.N.ceremonyWithinDays} days for the ceremony, the stage runs from zero to that maximum. Where it gives a target, such as the decision, the earliest end uses the priority target and the latest the standard one. Stages without an official length, such as the day settlement is granted, are drawn as milestones.</p>

<h2>Where the waiting year sits</h2>
<p>The step people most often misjudge is the third one. On the five-year route the ${h.N.route61.ilrHeldMonths} months of settled status must be complete on the day the Home Office receives your form, and the same day ends the ${h.N.route61.years}-year residence period, with its limits of ${h.num(h.N.route61.maxAbsenceDays)} days abroad in total and ${h.N.route61.maxAbsenceLast12m} in the final year. The diagram shows how the two periods overlap.</p>
<figure class="not-prose my-8 rounded-2xl border border-navy-200 bg-white p-4 sm:p-6">
<svg viewBox="0 0 640 170" class="hidden h-auto w-full sm:block" role="img" aria-label="On the five-year route, the residence period covers the five years before the application; settlement must have been held for the last twelve of them, and no more than ninety days may be spent abroad in that final year.">
<rect x="20" y="40" width="600" height="34" rx="6" fill="var(--color-accent-100)"/>
<rect x="500" y="40" width="120" height="34" rx="6" fill="var(--color-accent-500)"/>
<text x="260" y="62" font-size="14" font-weight="600" text-anchor="middle" fill="var(--color-navy-900)">${h.N.route61.years}-year residence period: ${h.num(h.N.route61.maxAbsenceDays)} days abroad at most</text>
<text x="560" y="62" font-size="13" font-weight="600" text-anchor="middle" fill="#fff">final year</text>
<line x1="500" y1="30" x2="500" y2="112" stroke="var(--color-navy-900)" stroke-width="2"/>
<line x1="620" y1="30" x2="620" y2="112" stroke="var(--color-navy-900)" stroke-width="2"/>
<text x="500" y="22" font-size="12" text-anchor="middle" fill="var(--color-navy-700)">settlement granted</text>
<text x="608" y="22" font-size="12" text-anchor="end" fill="var(--color-navy-700)">apply</text>
<rect x="500" y="96" width="120" height="16" rx="4" fill="var(--color-accent-300)"/>
<text x="490" y="108" font-size="12" text-anchor="end" fill="var(--color-navy-700)">settlement held ${h.N.route61.ilrHeldMonths} months</text>
<text x="560" y="140" font-size="12" text-anchor="middle" fill="var(--color-navy-700)">${h.N.route61.maxAbsenceLast12m} days abroad at most</text>
<text x="20" y="140" font-size="12" fill="var(--color-navy-700)">in the UK on the first day</text>
</svg>
<svg viewBox="0 0 320 300" class="h-auto w-full sm:hidden" role="img" aria-label="Five-year route: the residence period ends on the day of application; settlement must have been held for the final twelve months, with ninety days abroad at most in that year.">
<rect x="20" y="20" width="56" height="200" rx="6" fill="var(--color-accent-100)"/>
<rect x="20" y="220" width="56" height="60" rx="6" fill="var(--color-accent-500)"/>
<rect x="84" y="220" width="12" height="60" rx="3" fill="var(--color-accent-300)"/>
<line x1="14" y1="220" x2="104" y2="220" stroke="var(--color-navy-900)" stroke-width="2"/>
<line x1="14" y1="280" x2="104" y2="280" stroke="var(--color-navy-900)" stroke-width="2"/>
<text x="112" y="28" font-size="14" fill="var(--color-navy-700)">in the UK on the first day</text>
<text x="112" y="110" font-size="15" font-weight="600" fill="var(--color-navy-900)">${h.N.route61.years}-year residence period</text>
<text x="112" y="130" font-size="14" fill="var(--color-navy-700)">${h.num(h.N.route61.maxAbsenceDays)} days abroad at most</text>
<text x="112" y="224" font-size="14" fill="var(--color-navy-700)">settlement granted</text>
<text x="112" y="246" font-size="14" font-weight="600" fill="var(--color-navy-900)">final year: held ${h.N.route61.ilrHeldMonths} months,</text>
<text x="112" y="264" font-size="14" fill="var(--color-navy-700)">${h.N.route61.maxAbsenceLast12m} days abroad at most</text>
<text x="112" y="290" font-size="14" fill="var(--color-navy-700)">apply</text>
</svg>
<figcaption class="mt-3 text-sm text-navy-500">Section 6(1): both periods end on the day the Home Office receives the application. Under section 6(2) the period is ${h.N.route62spouse.years} years and the settlement can be brand new.</figcaption>
</figure>
<p>Settlement is often granted later than the fifth anniversary of arrival, because the settlement route itself has its own qualifying years. That is why the waiting year usually ends after the residence period is already long enough, and why the ${h.a('bc-date', 'date calculator')} tests every day rather than adding five years to an arrival date.</p>

<h2>What to prepare at each stage</h2>
<ol>
<li><strong>Before the test:</strong> study the five chapters of the handbook and sit ${h.a('lt-mock', 'timed mock tests')} until ${h.need} out of ${h.T.questions} is routine; bring the same identity document you booked with.</li>
<li><strong>Before settlement:</strong> have the test reference number and proof of English at ${h.E.level}, unless you are exempt.</li>
<li><strong>During the waiting year:</strong> keep a dated list of trips; a long journey in the final ${h.N.route61.maxAbsenceLast12m}-day window is the commonest reason to move the date.</li>
<li><strong>At the application:</strong> line up ${h.N.referees} referees, settlement evidence, the English evidence and the absences list, then book biometrics without delay.</li>
<li><strong>While waiting for the decision:</strong> keep your settled status valid and avoid long absences; the good character requirement applies until the decision.</li>
<li><strong>After the invitation:</strong> contact the council named in it, book a date inside the ${h.N.ceremonyWithinDays}-day window and bring the invitation and identity documents.</li>
</ol>
<p>After the ceremony the certificate is the proof of citizenship. A first adult British passport costs ${h.gbp(h.U.passport.adultOnline)} online, applied for separately.</p>

<h2>What this timeline does not include</h2>
<p>It does not count the years that lead to settlement, which depend on your visa route, nor any time spent preparing documents. It also assumes nothing goes wrong: a refusal, a request for more information or a missed ceremony window all add time. Applicants on the spouse route can remove the third stage entirely. The figures are those of ${h.date(h.F.effective)} for fees and of Guide AN and gov.uk for the lengths, and changes announced for later years are tracked on our ${h.a('bc-changes', 'rule changes page')}.</p>
<p>We are an independent publisher: we book no test, file no application and take no payment. Sources: ${h.src('uk_test', 'Life in the UK Test (gov.uk)')}, ${h.src('uk_guide_an', 'Guide AN')}, ${h.src('uk_priority', 'priority service (gov.uk)')}, ${h.src('uk_ceremony', 'citizenship ceremonies (gov.uk)')} and ${h.src('uk_fees', 'Home Office fees table')}.</p>`,
  },
});
