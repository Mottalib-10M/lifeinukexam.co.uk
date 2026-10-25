import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'bc-priority',
  group: 'citizenship',
  order: 94,
  tool: {"kind": "mini:priority"},
  mini: {"kind": "mini:natcost", "props": {"p": 1}},
  related: ["bc-processing", "bc-cost", "bc-application", "bc-ceremony"],
  sources: ["uk_priority", "uk_guide_an"],
  demarche: true,
  en: {
    slug: 'british-citizenship/priority-service',
    nav: "Priority service",
    card: 'The £500 priority service for citizenship: a decision usually in 30 working days instead of six months, who can use it and when it pays.',
    title: 'Citizenship Priority Service: £500 for a Faster Decision',
    description: 'Priority service for British citizenship: £500 extra, a decision usually within 30 working days, online only, no super priority, and when the fee is lost.',
    h1: 'The priority service for citizenship applications',
    intro: 'Enter the date of your biometrics appointment. The tool compares the priority target with the usual standard timescale.',
    resume: (h) => `The Home Office sells a priority service for British citizenship applications made online. It costs ${h.gbp(h.F.priority)} on top of the application fee, so a naturalising adult pays ${h.gbp(h.total + h.F.priority)} instead of ${h.gbp(h.total)}, and gov.uk says settlement and citizenship applications on priority usually take ${h.F.priorityWorkingDays} working days. Without it, Guide AN says a decision usually comes within ${h.N.decisionUsuallyMonths} months. The clock starts on the day of your biometrics appointment, or on the working day after you finish uploading documents if you are told to use the ID Check app. There is no super priority service for citizenship, and the priority option cannot be chosen on a paper form. Guide AN adds two limits: the target may be missed if the Home Office needs checks with other government departments or if the case is complex. The fee is not refunded when the application is refused, nor when a delay comes from a request for more information.`,
    faqs: (h) => [
      { q: 'Is there a super priority service for British citizenship like for visas?', a: `No. gov.uk says plainly that the super priority service, which promises a decision by the end of the next working day for some visa and settlement applications, cannot be used for citizenship applications. The fastest option for naturalisation is the ${h.gbp(h.F.priority)} priority service, with a usual target of ${h.F.priorityWorkingDays} working days from your identity appointment.` },
      { q: 'Can I add the priority service after I have already submitted my application?', a: 'gov.uk describes the priority service as something you choose when you apply, and tells you during the online application whether you are eligible. It does not describe a way to add it afterwards. If speed matters, decide before you submit, and make sure you are applying online, since the option does not exist for paper applications.' },
      { q: 'Does the priority service also cover my child\'s registration?', a: `The child's registration is its own application. gov.uk lists registering a child under 18 among the citizenship applications eligible for priority, so you can choose it for the child as well, at ${h.gbp(h.F.priority)} more on that application. Without priority on both, a parent's fast decision and a child's standard one can arrive months apart.` },
    ],
    body: (h) => `
<h2>Standard against priority</h2>
${h.table(['', 'Standard', 'Priority'], [
  ['Extra fee', 'none', h.gbp(h.F.priority)],
  ['Usual decision time', `within ${h.N.decisionUsuallyMonths} months`, `${h.F.priorityWorkingDays} working days`],
  ['Clock starts', 'when the application is received', 'at the biometrics appointment, or the working day after your app upload'],
  ['How to apply', 'online or by post', 'online only'],
  ['If it takes longer', `the Home Office tells you before the ${h.N.decisionUsuallyMonths} months pass`, 'no refund if the delay is due to a request for information'],
], 'Citizenship decision times, from gov.uk (faster decision page) and Guide AN (July 2026).', ['l', 'l', 'l'])}
<p>${h.F.priorityWorkingDays} working days is about six calendar weeks, longer around Christmas and Easter, since bank holidays do not count. The tool at the top counts Monday to Friday from your appointment and shows the earliest likely date; it cannot know the bank holidays in between, so treat it as a lower bound.</p>
<h2>Which citizenship applications qualify</h2>
<p>gov.uk lists the online citizenship applications that can use the priority service:</p>
<ul>
<li>naturalisation;</li>
<li>registering a child under 18;</li>
<li>registration as a British overseas territories citizen, British overseas citizen, British subject, British protected person or British National (Overseas);</li>
<li>people born in the UK on or after 1 January 1983 who lived here until the age of 10;</li>
<li>people becoming British again after renouncing it;</li>
<li>people born to a British father whose parents were not married, or born before 1983 to a British mother;</li>
<li>stateless people.</li>
</ul>
<p>The online form tells you whether your own application is eligible before you pay, and the extra fee is charged per application, so a family choosing it for everyone pays it several times. Applicants in the Channel Islands, the Isle of Man or a British overseas territory, who gov.uk says must apply by post or in person, should note that priority cannot be chosen on a paper form.</p>
<h2>When the money is well spent</h2>
<p>Paying ${h.gbp(h.F.priority)} makes most sense when a fixed date hangs on the outcome. Three common cases:</p>
<ul>
<li><strong>A firm job offer for which British citizenship is a genuine requirement</strong>, the example Guide AN itself uses elsewhere, with a start date already fixed. A letter from the employer will not speed up a standard application, but priority can.</li>
<li><strong>Travel plans.</strong> You need a British passport after the ceremony, and the ceremony itself must be booked with your council within ${h.N.ceremonyWithinDays} days of the invitation. Guide AN suggests thinking about passport timescales before applying if you plan to travel.</li>
<li><strong>Expiring permission.</strong> The application gives you no immigration status. Most applicants hold indefinite leave or settled status, which does not expire, but anyone whose permission is limited needs it to last until the ceremony.</li>
</ul>
<p>If none of these apply, the standard route usually finishes within ${h.N.decisionUsuallyMonths} months anyway, and the money may be better kept for the passport.</p>
<h2>What priority does not change</h2>
<p>It does not loosen any requirement or make a grant more likely: the caseworker applies exactly the same rules. A weak application on absences or character simply gets refused faster, and gov.uk states that a refused application gets no refund. It does not shorten the biometrics step, which you must complete within ${h.N.biometricsDays} days of applying in any case, and it does not move the ceremony, which your local authority schedules. For the full sequence after you submit, see ${h.a('bc-processing', 'decision times')}; for the household total with priority on every application, use the calculator below or the ${h.a('bc-cost', 'cost page')}.</p>`,
  },
});
