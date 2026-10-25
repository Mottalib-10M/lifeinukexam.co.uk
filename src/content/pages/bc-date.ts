import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'bc-date',
  group: 'citizenship',
  order: 82,
  tool: { kind: 'date' },
  mini: { kind: 'mini:qstart' },
  related: ['bc-absences', 'bc-discretion', 'bc-spouse', 'bc-eu', 'bc-application'],
  sources: ['uk_guidance', 'uk_ilr', 'uk_spouse', 'uk_guide_an'],
  en: {
    slug: 'british-citizenship/when-can-i-apply',
    nav: 'When can I apply?',
    card: 'Type your arrival date, the day you got settled status and every trip: the first day all residence rules hold at once.',
    title: 'British Citizenship Date Calculator: When You Can Apply',
    description: 'Find the first day you can apply for British citizenship: trips counted in whole days, 450 or 270 days, 90 in the last year and the 12-month ILR wait.',
    h1: 'When can I apply for British citizenship?',
    intro: 'Enter the day you first lived in the UK, the day you were granted settlement and every trip, past or planned. The date moves forward until each rule holds.',
    resume: (h) => `You can apply for British citizenship by naturalisation on the first day when four residence conditions hold together. Under section 6(1) of the British Nationality Act 1981 you must have been in the UK on the first day of a ${h.N.route61.years}-year period, which starts the day after your application date minus ${h.N.route61.years} years; you must have spent no more than ${h.num(h.N.route61.maxAbsenceDays)} days abroad in that period and no more than ${h.N.route61.maxAbsenceLast12m} in the last 12 months; and you must have held indefinite leave to remain or EU settled status for ${h.N.route61.ilrHeldMonths} months. The husband, wife or civil partner of a British citizen applies under section 6(2): ${h.N.route62spouse.years} years, ${h.num(h.N.route62spouse.maxAbsenceDays)} days abroad at most, the same ${h.N.route62spouse.maxAbsenceLast12m}-day cap on the final year, and no wait once settlement is granted. Only whole days outside the UK count, so the day you fly out and the day you land are days in the country. The calculator tests every date from today and stops at the first one that passes, then shows each condition with your own figures.`,
    faqs: (h) => [
      { q: 'Why does the calculator give a later date than five years after I arrived?', a: `Usually one of three reasons. Settlement came later, so the ${h.N.route61.ilrHeldMonths}-month wait after it ends after your fifth anniversary; a long trip sits in the last 12 months and pushes you over ${h.N.route61.maxAbsenceLast12m} days; or you were abroad on the exact day the period would start. The table under the date shows which condition was holding you back.` },
      { q: 'Can I submit my application a few days before the date shown?', a: 'Not safely. The Home Office measures the period backwards from the day it receives your application, so an early application has a different first day and a different count of absences. Small excesses may be treated with discretion, but a missing day of presence at the start is a requirement, not an absence, and the form fee is not refunded because you applied early.' },
      { q: 'Do I need to list trips that lasted only a weekend?', a: 'Yes, the application form asks for your absences, and caseworkers check them against passport stamps and Home Office travel records. A trip from Friday to Sunday adds only one day to the count, the Saturday, because departure and arrival days are days in the UK, but leaving it out can look like an inaccurate answer, which raises questions about honesty.' },
      { q: 'What should I enter if I came to the UK as a child?', a: `Enter the first day you lived here. The residence rule looks only at the ${h.N.route61.years} years before the application, so earlier years change nothing, but naturalisation is for adults: you must be ${h.N.minAge} or over on the day you apply. Children usually become British by registration instead, which has its own form, fee and conditions.` },
    ],
    body: (h) => `
<h2>The four conditions the date has to meet</h2>
<p>The calculator does not add five years to a date and stop. It checks, for each candidate day, the conditions the nationality guidance and gov.uk set for the residence part of a naturalisation application. The first day on which all of them hold is the date it displays.</p>
${h.table(['Condition', 'Section 6(1), settled', 'Section 6(2), spouse or civil partner'], [
  ['Length of the period', `${h.N.route61.years} years`, `${h.N.route62spouse.years} years`],
  ['In the UK on its first day', 'yes', 'yes'],
  ['Days abroad in the period', `${h.num(h.N.route61.maxAbsenceDays)} at most`, `${h.num(h.N.route62spouse.maxAbsenceDays)} at most`],
  ['Days abroad in the last 12 months', `${h.N.route61.maxAbsenceLast12m} at most`, `${h.N.route62spouse.maxAbsenceLast12m} at most`],
  ['Settled status held for', `${h.N.route61.ilrHeldMonths} months`, 'any time, it must simply be held'],
  ['Age', `${h.N.minAge} or over`, `${h.N.minAge} or over`],
], 'Residence conditions read on gov.uk and in the Home Office nationality guidance, version 16.0.', ['l', 'l', 'l'])}
<p>Other requirements are not dates, so the tool cannot judge them: good character, the ${h.a('lt-mock', 'Life in the UK Test')}, the ${h.a('en-test', 'English requirement')}, lawful residence during the period and, on the settled route, the intention to keep your main home in the UK.</p>
<h2>Where the period starts: one day that matters</h2>
<p>The guidance gives its own example: for an application made on 1 September 2022, the person must have been in the UK on 2 September 2017. The period ends on the application date and begins the day after the same date ${h.N.route61.years} years earlier. Guide AN gives the matching spouse example: an application received on 5 May 2021 needs presence on 6 May 2018. If you were abroad for the whole of that first day, the application fails on that point however few your other absences.</p>
<p>gov.uk shows what this means in practice. If the Home Office receives your application on 20 June 2022 and you were away from 10 to 25 June 2017, the first day of your period falls during that trip. You would have to wait until 24 June 2022, so that the period starts on 25 June 2017, the day you came back. Our tests run that exact case and the calculator gives 24 June 2022. The small tool below shows the first day of the period, and the start of the final 12 months, for any application date.</p>
<!--tool:mini:qstart|{"r":0}-->
<h2>How the trips are counted</h2>
<p>The guidance is explicit: count only whole days outside the UK, never the day of departure or the day of arrival. A person who leaves on 22 September and returns on 23 September has no absence at all. A week in Spain from Saturday to Saturday is six days, a fortnight from the 1st to the 15th is thirteen. The calculator applies the same rule to every trip you enter and cuts long trips at the edges of each window.</p>
<p>Enter trips you have already planned too. A holiday booked for next summer may be harmless today and still push your final-year count over ${h.N.route61.maxAbsenceLast12m} days by the time you apply. If the result falls within five days of a limit, the tool warns you: compare each date with your passport stamps or a travel history request before you rely on it.</p>
<h2>When you are over a limit</h2>
<p>Being over a limit does not always end the matter. The guidance tells caseworkers to use discretion when total absences exceed the limit by ${h.N.discretionWithinDays} days or less, unless there are other reasons to refuse. Beyond that, between ${h.num(h.N.route61.band[0])} and ${h.num(h.N.route61.band[1])} days on the five-year route, discretion is considered only when your home, work, family and finances are established in the UK and one of a short list of reasons applies, such as a career that requires travel. Above ${h.num(h.N.route61.band[1])} days, the guidance calls discretion highly unlikely. Our page on ${h.a('bc-discretion', 'excess absences')} sets out every band; the date shown here is always the date with no discretion needed.</p>
<h2>After the date: what to have ready</h2>
<p>On the date shown you should already hold a pass in the Life in the UK Test (unless exempt), evidence of English at B1, two referees who meet the rules, and the fee of ${h.gbp(h.total)} for the application and ceremony. The Home Office usually decides within ${h.N.decisionUsuallyMonths} months and asks for your biometrics within ${h.N.biometricsDays} days of the application. Our ${h.a('bc-application', 'step-by-step guide')} lists the order that avoids last-minute surprises, and the ${h.a('bc-cost', 'cost calculator')} adds up the fees for a whole household.</p>`,
  },
});
