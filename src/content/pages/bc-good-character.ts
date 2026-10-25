import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'bc-good-character',
  group: 'citizenship',
  order: 100,
  tool: {"kind": "mini:goodchar"},
  mini: {"kind": "mini:absband"},
  related: ["bc-application", "bc-referees", "bc-refused", "bc-citizenship"],
  sources: ["uk_guide_an", "uk_guidance"],
  en: {
    slug: 'british-citizenship/good-character',
    nav: "Good character",
    card: 'What the good character requirement covers, from speeding tickets to NHS debt, and why declaring everything is safer than leaving it out.',
    title: 'Good Character Requirement for Citizenship: What to Declare',
    description: 'Good character for British citizenship: convictions, fixed penalties, civil judgments, bankruptcy, council tax, NHS debt of £500 or more, immigration breaches.',
    h1: 'The good character requirement',
    intro: 'Answer three money questions to see what goes on the form. The page then covers the rest: convictions, immigration history and how to explain them.',
    resume: (h) => `Every applicant for naturalisation must be of good character, a requirement written into the British Nationality Act 1981 and explained in Home Office Guide AN as observing UK laws and respecting the rights and freedoms of others. In practice it is a long list of declarations. You must give details of every criminal conviction in the UK and abroad, cautions, warnings, fines and other out-of-court disposals, civil judgments and civil penalties, and fixed penalty notices, including speeding and parking tickets, which are usually not held against you unless unpaid or numerous. You must also say if you have ever been declared bankrupt (an undischarged bankruptcy makes success unlikely), failed unreasonably to pay council tax, committed fraud involving public funds, or owe the NHS ${h.gbp(h.N.nhsDebt)} or more. Immigration history counts too: illegal entry normally leads to refusal. The Home Office checks with other departments, including HMRC. Declaring an item is not a refusal in itself; hiding it can be.`,
    faqs: (h) => [
      { q: 'Do I really have to declare a parking ticket on my citizenship application?', a: 'Yes. Guide AN says fixed penalty notices, including those for speeding or parking, must be disclosed. It adds that they will not normally be taken into account unless you failed to pay and criminal proceedings followed, or you received several in a short space of time. Declaring a paid parking ticket costs nothing; leaving it out turns a trivial matter into a question of honesty.' },
      { q: 'I have been arrested but not charged. Should I wait before applying?', a: 'Guide AN says that if you have been charged and are awaiting trial or sentencing, you are advised not to apply until the outcome is known. If you were arrested and have not been told that charges were dropped, you must declare it and may wish to confirm the position with the police. Any arrest or charge after you apply must also be reported while the application is pending.' },
      { q: 'Does an unpaid NHS bill of £300 count against my good character?', a: `The figure Guide AN uses is ${h.gbp(h.N.nhsDebt)}: you must declare an unpaid NHS debt of that amount or more. A smaller debt is not on the list of financial items to declare. Paying any NHS debt before applying is still the simplest course: it removes the question entirely, and the Home Office says it may check your answers with other government departments.` },
      { q: 'Do I need to declare my divorce or a child custody order?', a: 'No. Guide AN says you do not need to give details of family law proceedings such as divorce decrees, dissolved civil partnerships, guardianship orders and parental responsibility orders. It does ask you to say if any of your children have been convicted of an offence or have received a court order, which is a separate question on the form.' },
    ],
    body: (h) => `
<h2>What goes on the form</h2>
${h.table(['Area', 'Declare', 'Notes from Guide AN'], [
  ['Criminal record', 'all convictions, UK and overseas, custodial or not', 'includes cautions, warnings, reprimands, community sentences, hospital orders'],
  ['Fixed penalties', 'speeding, parking, other fixed penalty notices', 'usually ignored unless unpaid with court action, or many in a short time'],
  ['Driving', 'drink driving, licence endorsements', 'attach your DVLA record summary'],
  ['Civil matters', 'civil judgments, civil penalties under the Immigration Acts', 'family law orders are not needed'],
  ['Money', `bankruptcy, council tax failures, public funds fraud, NHS debt of ${h.gbp(h.N.nhsDebt)} or more`, 'undischarged bankruptcy: unlikely to succeed'],
  ['Tax', 'income tax and National Insurance in order', 'self-employed: attach a Self-Assessment statement of account'],
  ['Pending matters', 'arrests, charges, cases awaiting a hearing', 'report new ones while the application is pending'],
  ['Immigration', 'breaches, illegal entry, deception', 'illegal entry normally leads to refusal'],
], 'Good character declarations, summarised from Home Office Guide AN (July 2026), section 10.', ['l', 'l', 'l'])}
<p>The form also asks about terrorism, war crimes, crimes against humanity, genocide and international travel bans. Guide AN's advice for all of it is the same: if in doubt, mention it.</p>
<h2>Money: the three items the tool checks</h2>
<p>The tool at the top asks about the three financial items most often missed. An NHS debt counts once it reaches ${h.gbp(h.N.nhsDebt)}. Council tax counts if you were found to have failed unreasonably to pay it, which is different from a late payment you later settled. Bankruptcy counts whenever it happened, and an undischarged bankrupt is unlikely to succeed, according to Guide AN. Tax is checked separately: signing the form gives the Home Office consent to ask HM Revenue and Customs whether your tax and National Insurance affairs are in order, and self-employed applicants attach a Self-Assessment statement of account.</p>
<h2>Immigration history</h2>
<p>Holding indefinite leave to remain usually means the Home Office will not look further into breaches of immigration law during your qualifying period. Illegal entry is treated differently: Guide AN says an application will normally be refused if you entered the UK illegally, however long ago, or arrived without required entry clearance or travel authorisation after a dangerous journey, such as by small boat or hidden in a vehicle. The Home Office considers whether this was outside your control, for example if you were a child, trafficked, or a victim of modern slavery at the time.</p>
<h2>Explaining, not hiding</h2>
<p>Guide AN invites applicants to set out mitigating factors in the box for further information: genuine efforts to change behaviour, voluntary or charity work, or programmes addressing the cause of offending, such as alcohol, drug or anger management courses. A conviction declared with context is weighed by a caseworker. A conviction left off the form, then found by the criminal record check that is run in every case, raises a second issue of deception, and Guide AN warns that an untruthful declaration may make the application fail with no refund of the fee.</p>
<p>The risk does not end with the decision. Guide AN says citizenship granted on incorrect or fraudulent information can be taken away, and that making a false declaration knowingly is a criminal offence. Your referees face the same law, as explained on the ${h.a('bc-referees', 'referees page')}.</p>
<h2>Character and the rest of the application</h2>
<p>Good character is one of several conditions where the Home Office uses judgement; the other big one is absences. The tool below shows how your days abroad sit against the guidance bands, because an application that needs discretion on both counts is weaker than one that needs it on neither. If a past refusal on character worries you, the ${h.a('bc-refused', 'refusal page')} explains what can be done, and the detailed good character policy guidance used by caseworkers is published on gov.uk.</p>`,
  },
});
