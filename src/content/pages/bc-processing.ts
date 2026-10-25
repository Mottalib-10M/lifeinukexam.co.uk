import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'bc-processing',
  group: 'citizenship',
  order: 104,
  tool: {"kind": "frise", "props": {"preset": "decision"}},
  mini: {"kind": "mini:priority"},
  related: ["bc-priority", "bc-application", "bc-ceremony", "bc-refused"],
  sources: ["uk_guide_an", "uk_priority", "uk_ilr"],
  en: {
    slug: 'british-citizenship/decision-time',
    nav: "Decision time",
    card: 'How long a naturalisation decision takes, what can slow it down, and what you must keep doing while you wait for the letter.',
    title: 'British Citizenship Processing Time: the 6-Month Benchmark',
    description: 'British citizenship processing time: a decision usually within 6 months, 30 working days on priority, what delays a case, and keeping your status until the end.',
    h1: 'How long a citizenship decision takes',
    intro: 'Enter the date the Home Office received your application: the timeline places biometrics, the decision and the ceremony, from the priority target to the standard one.',
    resume: (h) => `The Home Office aims to decide naturalisation applications within ${h.N.decisionUsuallyMonths} months of receiving them, and Guide AN says most applicants will usually get a decision within that time, while some take longer. If yours is expected to run over, the Home Office says it will contact you before the ${h.N.decisionUsuallyMonths} months are up, and it asks applicants not to chase for updates within that period. With the priority service, for ${h.gbp(h.F.priority)} extra, the usual time is ${h.F.priorityWorkingDays} working days from your identity appointment, though checks with other government departments or a complex case can push it back. The clock depends on you as well: biometrics must be given within ${h.N.biometricsDays} days or the application becomes invalid, and a request for more information pauses progress until you answer. Throughout the wait you need valid permission to stay in the UK, because a citizenship application gives you no status. After a grant comes the ceremony, within ${h.N.ceremonyWithinDays} days of the invitation.`,
    faqs: (h) => [
      { q: 'It has been five months since I applied for citizenship. Should I contact the Home Office?', a: `Guide AN asks applicants not to contact the Home Office for updates within the ${h.N.decisionUsuallyMonths}-month timeframe; it will get in touch if it needs more information. gov.uk adds that if your case will take longer, you will be told before the ${h.N.decisionUsuallyMonths} months have passed. Do check your spam folder, since letters and invitations may arrive by email.` },
      { q: 'What can make a naturalisation decision take longer than six months?', a: 'Guide AN mentions a few causes: a request for more details, checks with other government departments, and cases that are particularly complex. Another arises when you applied before meeting the first-day rule. The Home Office may then look for a later date on which you qualify, which can delay the decision, and you pay the fee in force on that new date.' },
      { q: 'Can I change address or get married while my application is being decided?', a: 'You can, but you must tell UK Visas and Immigration. gov.uk gives a move, a marriage and an arrest as examples of changes to report while the application is pending, and Guide AN repeats it. An arrest or charge after applying must be reported under section 46 of the British Nationality Act 1981; failing to do so risks prosecution.' },
    ],
    body: (h) => `
<h2>The phases of the wait</h2>
${h.table(['Phase', 'Time', 'Who acts'], [
  ['Submission', 'day 0 (online: same day)', 'you'],
  ['Biometrics appointment', `within ${h.N.biometricsDays} days`, 'you, at a service point'],
  ['Checks and decision, standard', `usually within ${h.N.decisionUsuallyMonths} months of receipt`, 'Home Office'],
  ['Checks and decision, priority', `usually ${h.F.priorityWorkingDays} working days from the appointment`, 'Home Office'],
  ['Ceremony invitation to ceremony', `within ${h.N.ceremonyWithinDays} days`, 'you and your local authority'],
], 'Timescales from Guide AN (July 2026) and gov.uk.', ['l', 'l', 'l'])}
<p>The two tools give the dates for your case. The timeline at the top runs from the day the Home Office receives your form, through biometrics and the decision, to the end of the ceremony window; the checker below compares the standard and priority targets from your biometrics appointment. Both use targets published by the Home Office, not guarantees.</p>
<h2>Keeping your status valid while you wait</h2>
<p>Guide AN is explicit that a nationality application does not give you any immigration status. For most applicants this is no worry: indefinite leave to remain and EU settled status do not expire, and gov.uk counts pre-settled status as permission too. Two situations need attention:</p>
<ul>
<li><strong>Long absences.</strong> Indefinite leave lapses after ${h.U.settlement.ilrLostAfterYearsAbroad} years in a row outside the UK. Nobody waits that long for a decision, but someone who leaves soon after applying and stays away should do the sum, and remember the future intention requirement on the standard route.</li>
<li><strong>Documents.</strong> Your BRP may have expired; the status it showed has not. Guide AN accepts an expired BRP as evidence up to ${h.T.brpMonthsAfterExpiry} months after its expiry date, and not after ${h.date(h.T.brpDeadline)}. An eVisa is the lasting proof.</li>
</ul>
<h2>Why a case stalls</h2>
<p>Some causes of delay sit in the file itself, and you can head them off before submitting:</p>
<ul>
<li>Missing or wrong reference numbers for the Life in the UK Test or the English test, which the caseworker must then chase.</li>
<li>Absences that do not match the Home Office's own records of entry and exit.</li>
<li>A first day of the qualifying period spent abroad. The Home Office may move your application date to a later day when you qualify, if that works in your favour, but this "may result in delays", and if the fee changed in between you pay the new one. The nationality guidance also lets a caseworker put an application on hold when you will meet the requirement shortly.</li>
<li>Good character points needing enquiries with the police, HMRC or other departments.</li>
</ul>
<p>A caseworker who needs more will write to you. Answer quickly and completely: the case cannot move on while the request is open.</p>
<p>Travel is allowed while you wait. Guide AN says you need not tell the Home Office about trips, but you must enrol biometrics in time, be reachable quickly by email, and be able to return for a ceremony once invited. Because the application gives no immigration permission, you show your own status at the border when you come back.</p>
<h2>When the letter comes</h2>
<p>A grant arrives as an invitation to a citizenship ceremony, often by email, naming the local authority to contact. You then have ${h.N.ceremonyWithinDays} days to arrange and attend; the ${h.a('bc-ceremony', 'ceremony page')} has the details. A refusal letter gives the reasons, and the ${h.a('bc-refused', 'refusal page')} explains the review and reapplication options. If time matters from the start, compare the options on the ${h.a('bc-priority', 'priority service page')} before you apply, since it can only be chosen when you submit.</p>`,
  },
});
