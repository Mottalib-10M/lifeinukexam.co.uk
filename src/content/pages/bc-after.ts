import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'bc-after',
  group: 'citizenship',
  order: 108,
  tool: {"kind": "mini:passport"},
  mini: {"kind": "mini:ilrlost"},
  related: ["bc-ceremony", "bc-dual", "bc-children", "bc-cost"],
  sources: ["uk_passport", "uk_guide_an", "uk_dual", "uk_fees"],
  en: {
    slug: 'british-citizenship/after-the-ceremony',
    nav: "After the ceremony",
    card: 'Your first British passport, what to do with the old residence card, and how to travel in the weeks between the ceremony and the passport.',
    title: 'After the Citizenship Ceremony: Your First British Passport',
    description: 'After your citizenship ceremony: a first British passport with your certificate, destroying the BRP, travel before the passport arrives, and certificate errors.',
    h1: 'After the ceremony: passport, BRP and travel',
    intro: 'Enter how many adults and children in the family need a first passport. The tool totals the official online fees.',
    resume: (h) => `Once you have taken the oath and received your naturalisation certificate, you are British, but the certificate is not a travel document. Guide AN says that to travel as a British citizen you need either a British passport or a certificate of entitlement to the right of abode, and that there are no current plans for digital proof of citizenship. A first adult passport costs ${h.gbp(h.P.uk.passport.adultOnline)} online or ${h.gbp(h.P.uk.passport.adultPaper)} by paper form, and a child's ${h.gbp(h.P.uk.passport.childOnline)} online. A certificate of entitlement costs ${h.gbp(h.F.rightOfAbode)} under the fees table. Your BRP or BRC, if you still hold one, must be destroyed after the ceremony by cutting through your personal details, the royal coat of arms and the chip. After naturalising you can no longer enter the UK on your BRP, eVisa or certificate, and British citizens cannot get an electronic travel authorisation or a visa. People who settled under the EU Settlement Scheme may keep using their other passport or EU identity card.`,
    faqs: (h) => [
      { q: 'Can I travel abroad on my old passport in the weeks after my citizenship ceremony?', a: 'You can leave on your foreign passport, but returning is the problem. Guide AN says that once British you cannot use your BRP, eVisa or certificate to enter the UK, and you cannot get an electronic travel authorisation or a visa. Without a British passport or a certificate of entitlement you may face serious delays at the border. EU Settlement Scheme holders are the main exception.' },
      { q: 'Do I send my BRP back to the Home Office after the ceremony?', a: 'The current Guide AN, dated July 2026, tells you to destroy it yourself after attending the ceremony: cut the card into pieces, making sure you cut through your personal details, the royal coat of arms and the gold biometric chip if it has one. The same applies to a biometric residence card. Do this after the ceremony, not before, since you may need it until then.' },
      { q: 'There is a spelling mistake on my naturalisation certificate. How do I correct it?', a: `Guide AN says to use form RR to request an amendment, sending it with the original certificate to the address given in the guidance. Whether you pay depends on whose mistake it was; UK Visas and Immigration will write to say if a fee is due. A reissued certificate costs ${h.gbp(h.F.reissuedCertificate)} under the current fees table when a fee applies.` },
    ],
    body: (h) => `
<h2>Your first British passport</h2>
<p>A naturalised citizen applies for a first adult passport, not a renewal. gov.uk lists the documents for someone born outside the UK who holds a certificate of naturalisation or registration: the certificate itself, and the passport you used to come into the UK or the foreign passport you are included on. Applying on paper also needs two identical printed photos and a countersignatory who confirms your identity, and gov.uk warns that you may be asked to attend an interview, sometimes by video, after you apply. The fees:</p>
${h.table(['Passport', 'Online', 'Paper form'], [
  ['Adult (16 and over), standard', h.gbp(h.P.uk.passport.adultOnline), h.gbp(h.P.uk.passport.adultPaper)],
  ['Child (under 16), standard', h.gbp(h.P.uk.passport.childOnline), 'higher than online'],
], 'Passport fees from gov.uk (standard 34-page passport). Frequent traveller and urgent services cost more.', ['l', 'r', 'r'])}
<p>gov.uk adds that there is no refund if you cancel the application or turn out not to be entitled. The tool at the top multiplies the online fees for your family. A household of two adults and one child pays ${h.gbp(2 * h.P.uk.passport.adultOnline + h.P.uk.passport.childOnline)} online. Children registered as British apply with their certificate of registration in the same way.</p>
<p>If you would rather not hold a British passport, perhaps because your other country restricts dual nationality, the certificate of entitlement to the right of abode is the alternative way to prove your right to enter, at ${h.gbp(h.F.rightOfAbode)}.</p>
<h2>The gap between ceremony and passport</h2>
<p>Guide AN suggests checking passport processing times before you even apply for citizenship if you have travel planned, and the reason is this gap. Once British, you lose the ability to enter on your old documents. Plan trips for after the passport arrives.</p>
<p>The exception is the EU Settlement Scheme. Guide AN and gov.uk both say that British citizens who also hold Withdrawal Agreement rights, typically people who settled under the scheme, may enter the UK on a valid foreign passport or, for EEA and Swiss nationals, a national identity card. The document must be linked to the UKVI account that holds your EUSS status, or delays are likely.</p>
<h2>Destroying the BRP</h2>
<p>Guide AN, updated in 2026, tells you to destroy any BRP or BRC after the ceremony. Cut it into pieces and make sure the cuts go through your personal details, the royal coat of arms, and the gold biometric chip if the card has one. Older guidance asked people to post the card back; follow the current version.</p>
<h2>Paperwork to keep</h2>
<ul>
<li><strong>The certificate.</strong> It is your primary proof of citizenship. Replacing it costs ${h.gbp(h.F.reissuedCertificate)}; a Home Office letter confirming your status costs ${h.gbp(h.F.statusLetter)}.</li>
<li><strong>Your other passport.</strong> Whether you keep that nationality depends on the other country's law, not the UK's. In that country, as a dual national, you cannot get British diplomatic help; see ${h.a('bc-dual', 'dual nationality')}.</li>
<li><strong>Family members still on ILR.</strong> A partner or child who has not naturalised keeps their old status, with its limits: indefinite leave lapses after ${h.U.settlement.ilrLostAfterYearsAbroad} years in a row abroad, EU settled status after ${h.U.settlement.settledStatusLostAfterYears}. The tool below checks a planned absence for them.</li>
</ul>
<p>Store the certificate somewhere safe and keep a copy apart from it: you will need the original again for passport applications, and possibly for a child's application later. If a family member is still to become British, the ${h.a('bc-children', 'children page')} and the ${h.a('bc-cost', 'cost page')} cover the next applications.</p>`,
  },
});
