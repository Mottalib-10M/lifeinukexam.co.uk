import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'bc-ceremony',
  group: 'citizenship',
  order: 106,
  tool: {"kind": "frise", "props": {"preset": "ceremony"}},
  mini: {"kind": "mini:ceremony"},
  related: ["bc-after", "bc-processing", "bc-children", "bc-application"],
  sources: ["uk_ceremony", "uk_guide_an"],
  en: {
    slug: 'british-citizenship/ceremony',
    nav: "Citizenship ceremony",
    card: 'From the invitation to the certificate: booking with your council, the oath or affirmation and the pledge, guests, and the deadline you must not miss.',
    title: 'Citizenship Ceremony UK: Oath, Pledge, Guests and Deadline',
    description: 'The UK citizenship ceremony: booking with your council within 90 days of the invitation, the oath or affirmation, the pledge, guests and your certificate.',
    h1: 'The citizenship ceremony',
    intro: 'Enter the date of your invitation: the timeline shows the window to book and attend, and the day the certificate is presented. What happens at the ceremony follows.',
    resume: (h) => `If your naturalisation is approved and you are ${h.N.minAge} or over, the Home Office sends an invitation to a citizenship ceremony, often by email, naming the local authority to contact. You must arrange and attend the ceremony within ${h.N.ceremonyWithinDays} days of receiving the invitation; the exact last date is printed on it. Ceremonies are usually held in groups, a private one can be requested and may cost more, and the standard ceremony is already paid for by the ${h.gbp(h.F.ceremony)} included in the application fee. You are usually allowed to take 2 guests, and you must bring your invitation. During the ceremony you swear an oath of allegiance to the Monarch, or make an affirmation if you prefer not to swear by God, and make a pledge to respect the rights, freedoms and laws of the UK. That moment is when you become a British citizen. You then receive your certificate of British citizenship and a welcome pack. Missing the deadline without good reason means refusal and a fresh application.`,
    faqs: (h) => [
      { q: 'Can I make an affirmation instead of swearing the oath at my citizenship ceremony?', a: 'Yes. gov.uk says you make an oath of allegiance, or an affirmation if you prefer not to swear by God, followed by the pledge. Guide AN treats affirming and swearing as two ways of meeting the same legal requirement, the moment at which an adult becomes British. Mention your choice to the local authority when you book, so there is no confusion on the day.' },
      { q: 'I am abroad when my ceremony invitation arrives. What can I do?', a: `gov.uk says that if you are abroad only for a short time you might be asked to postpone the ceremony until you return, but you must still book it within ${h.N.ceremonyWithinDays} days of the invitation. If you applied in the UK, you cannot have the ceremony abroad. Those who live outside the UK can ask the embassy or consulate in their country of residence about holding it there.` },
      { q: 'Can I be excused from attending a citizenship ceremony?', a: 'Rarely. Guide AN says exemptions may be granted when an applicant is physically unable to attend or their mental state would make attendance inappropriate, and you must give reasons with supporting evidence. People who become British under the Windrush Scheme can choose whether to attend and pay no ceremony fee. Anyone with special needs on the day should tell the local authority after the invitation arrives.' },
      { q: 'Do my children have to attend the ceremony as well?', a: `Only if they are ${h.N.minAge} or over when their application succeeds. gov.uk says the ceremony is for people aged ${h.N.minAge} or over who have successfully applied to become British. A child registered under ${h.N.minAge} receives a certificate without a ceremony, while a child who turns ${h.N.minAge} during the process attends and pays the ${h.gbp(h.F.ceremony)} ceremony fee.` },
    ],
    body: (h) => `
<h2>From invitation to ceremony</h2>
<ol>
<li><strong>The invitation arrives</strong>, possibly by email. Guide AN advises checking your spam or junk folder before contacting the Home Office if you expected it and nothing came.</li>
<li><strong>Contact the local authority</strong> named in the invitation. Councils organise ceremonies and set the dates; ask whether a group or private ceremony suits you.</li>
<li><strong>Book a date before the deadline.</strong> The tool at the top counts ${h.N.ceremonyWithinDays} days from the invitation. If you received it on 15 February 2027, for example, the last day falls in mid-May 2027; the date printed on the invitation is the one that counts.</li>
<li><strong>Keep your immigration permission valid</strong> until the ceremony. Guide AN repeats that the application itself gives you no status until you become British.</li>
<li><strong>Attend</strong> with your invitation and your guests.</li>
</ol>
<h2>What happens on the day</h2>
<p>The ceremony is a formal occasion. Its legal heart is two promises. First the oath of allegiance to the Monarch, or the affirmation for those who prefer not to swear by God. Then the pledge, by which you promise to respect the rights, freedoms and laws of the UK. Guide AN describes this as a legal requirement for adults and the point at which you become a British citizen. The certificate of British citizenship is then presented, with a welcome pack. Some local authorities sell photographs or videos of the event, gov.uk notes; ask yours in advance if you want them.</p>
${h.table(['Practical point', 'What gov.uk and Guide AN say'], [
  ['Cost', `included in the application fee (${h.gbp(h.F.ceremony)}); a private ceremony may cost more`],
  ['Guests', 'usually 2'],
  ['What to bring', 'your invitation'],
  ['Deadline', `${h.N.ceremonyWithinDays} days from receiving the invitation`],
  ['If you miss it without good reason', 'application refused; you must reapply'],
  ['Exemptions', 'rare: physical inability or mental state, with evidence'],
], undefined, ['l', 'l'])}
<h2>If the deadline is tight</h2>
<p>The ${h.N.ceremonyWithinDays}-day window is strict, which is why the tool shows the date as soon as you have the invitation. Guide AN says a ceremony not attended within ${h.N.ceremonyWithinDays} days without good reason leads to refusal, and a new application means paying ${h.gbp(h.total)} again. Councils' calendars vary, so call early. If illness or another serious reason is going to keep you away, raise it with the local authority and the Home Office before the date passes, with evidence, rather than after.</p>
<p>The fees table also lists ${h.gbp(h.F.oathNotAtCeremony)} for administering the oath, or oath and pledge, outside a citizenship ceremony; it applies only in the limited cases where the oath is taken that way. People registering as British overseas territories citizens, British overseas citizens or British subjects do not attend a ceremony but still make the oath.</p>
<h2>The day after</h2>
<p>Your certificate proves your citizenship, but it is not a travel document: Guide AN says you need a British passport or a certificate of entitlement to the right of abode to travel as a British citizen. Any BRP must be destroyed once you have attended the ceremony. Both steps, with the passport fees, are on the ${h.a('bc-after', 'after the ceremony page')}. If you notice a mistake on the certificate, Guide AN points to form RR to request an amendment. Check the spelling of your names and your date of birth before you leave the venue, while the details are fresh.</p>`,
  },
});
