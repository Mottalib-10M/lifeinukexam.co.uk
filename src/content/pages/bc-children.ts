import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'bc-children',
  group: 'citizenship',
  order: 96,
  tool: {"kind": "mini:childreg"},
  mini: {"kind": "mini:passport"},
  related: ["bc-cost", "bc-citizenship", "bc-ceremony", "bc-after"],
  sources: ["uk_child", "uk_fees", "uk_ilr", "uk_guide_an"],
  demarche: true,
  en: {
    slug: 'british-citizenship/children',
    nav: "Registering children",
    card: 'Children are registered, not naturalised: who needs form MN1, the £1,000 fee, when a ceremony is due and which children are British already.',
    title: 'Register a Child as a British Citizen: MN1, Fee and Timing',
    description: 'Registering a child as a British citizen: who needs form MN1, the £1,000 fee, the ceremony at 18, fee waivers, biometrics and children who are British already.',
    h1: 'Registering your children as British citizens',
    intro: 'Enter how many children you plan to register and how many will be 18 by the decision. The tool adds the registration and ceremony fees.',
    resume: (h) => `Only adults naturalise; a child under ${h.N.minAge} becomes British by registration, a separate application usually made on form MN1. gov.uk says you apply separately for each child, and Guide AN says it can be done at the same time as a parent applies to naturalise. Registration is needed for a child born outside the UK, or born in the UK before you were granted indefinite leave to remain. A child born in the UK after a parent got indefinite leave, or born in the UK to a British parent, is usually British automatically and needs no application, only a passport. The fee is ${h.gbp(h.F.registrationChild)} per child under the Home Office table in force since ${h.date(h.F.effective)}, with a fee waiver possible for children whose families cannot afford it. A child who turns ${h.N.minAge} during the process also pays the ${h.gbp(h.F.ceremony)} ceremony fee and attends a ceremony. Every child gives biometrics, though under-fives give only a photograph.`,
    faqs: (h) => [
      { q: 'My daughter was born in London after I got ILR. Does she need to be registered?', a: 'Usually not. gov.uk says a child may automatically be a British citizen if born in the UK after the parent was granted indefinite leave to remain. She would then need no registration and no fee: you apply directly for a British passport for her. If she was born before your ILR, or abroad, registration is the route instead.' },
      { q: 'Do children have to pass the Life in the UK Test or prove English?', a: `No. The Life in the UK Test is not required for anyone under ${h.T.exemptUnder}, and the knowledge of language and life requirements in Guide AN are written for adults who naturalise. A child's registration on form MN1 rests on its own conditions, set out in the Home Office guidance for the form. A child who turns ${h.N.minAge} before applying would be an adult applicant instead.` },
      { q: 'Does a toddler need fingerprints for a citizenship application?', a: 'No. Guide AN says children under 5 do not give fingerprints but must have a digital photograph of their face taken. Every citizenship application, including a child registration made alongside a parent, needs biometric enrolment, and children under 16 must be accompanied by a parent or legal guardian at the appointment. There is no upper age limit for biometrics.' },
    ],
    body: (h) => `
<h2>Does your child need registering at all?</h2>
${h.table(['Child', 'Status', 'What to do'], [
  ['Born in the UK after a parent got ILR or settled status', 'usually British automatically', 'apply for a passport'],
  ['Born in the UK to a British parent', 'usually British automatically', 'apply for a passport'],
  ['Born in the UK before a parent got ILR', 'not British yet', `register (form MN1), ${h.gbp(h.F.registrationChild)}`],
  ['Born outside the UK', 'not British yet (unless through a British parent)', `register (form MN1), ${h.gbp(h.F.registrationChild)}`],
  [`Turns ${h.N.minAge} before you apply`, 'adult', 'naturalise in their own right'],
], 'Simplified from gov.uk (citizenship with ILR, spouse route) and Guide AN. Check the official guidance for your child.', ['l', 'l', 'l'])}
<p>The table simplifies real law: birth dates before 1983, parents who were British by descent, and children born abroad to British parents each have their own rules. gov.uk has an official checker for whether someone is already British; use it before paying ${h.gbp(h.F.registrationChild)} for a child who may not need it.</p>
<h2>Fees for a family</h2>
<p>Registration costs ${h.gbp(h.F.registrationChild)} for each child. A ceremony fee of ${h.gbp(h.F.ceremony)} is added only for a child who turns ${h.N.minAge} during the process, because only adults attend a ceremony. The tool at the top multiplies these out. A worked example: parents naturalising with three children aged 6, 12 and 17, where the eldest will be 18 by the time of the decision, pay ${h.gbp(3 * h.F.registrationChild + h.F.ceremony)} for the children (${h.gbp(3 * h.F.registrationChild)} in registrations plus one ceremony) on top of the adults' ${h.gbp(2 * h.total)}.</p>
<p>gov.uk says that if your child is under ${h.N.minAge} and you cannot afford the fee, you may be able to apply for a fee waiver. The priority service, at ${h.gbp(h.F.priority)} more per application, is available for children's registrations made online. A lower fee of ${h.gbp(h.F.registrationIrishChild)} applies to registration under the provisions for Irish citizens, a different legal basis.</p>
<h2>Timing the children's applications</h2>
<p>You can apply for children together with your own naturalisation or later. Applying together keeps the process in step: the biometrics appointments can be booked as a family, and the decisions tend to follow similar timescales, usually within ${h.N.decisionUsuallyMonths} months. Applying later can make sense where a child's case depends on a parent already being British, or where the family budget cannot absorb every fee in the same month. Either way, have each child's documents ready: gov.uk says copies can be uploaded to the online service or scanned at the biometrics appointment. Watch birthdays. A child of 17 at application who turns ${h.N.minAge} before the decision must attend a ceremony within ${h.N.ceremonyWithinDays} days of the invitation, as adults do, and pays the ceremony fee.</p>
<h2>After the decision</h2>
<p>A registered child receives a certificate of registration. Children under ${h.N.minAge} do not have to attend a ceremony. If they want to watch a parent's, note that gov.uk says you are usually allowed to take 2 guests, so a larger family should ask the council in advance. The certificate cannot be used to travel, so the next step is a passport: for a child under 16, ${h.gbp(h.P.uk.passport.childOnline)} online; from 16, the adult passport at ${h.gbp(h.P.uk.passport.adultOnline)} online. The passport calculator below totals the family. Keep the registration certificate safe with the child's other documents: it is the proof of citizenship that later passport applications rely on. The ${h.a('bc-after', 'after citizenship page')} covers applying with a certificate, and the ${h.a('bc-cost', 'cost page')} puts the whole household in one figure.</p>`,
  },
});
