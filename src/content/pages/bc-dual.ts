import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'bc-dual',
  group: 'citizenship',
  order: 110,
  tool: {"kind": "mini:fees", "props": {"s": 4}},
  mini: {"kind": "mini:passport"},
  related: ["bc-after", "bc-citizenship", "bc-eu", "bc-refused"],
  sources: ["uk_dual", "uk_guide_an", "uk_fees"],
  en: {
    slug: 'british-citizenship/dual-nationality',
    nav: "Dual nationality",
    card: 'The UK lets you keep your other nationality; your other country may not. What to check before you naturalise, and how dual nationals travel.',
    title: 'Dual Citizenship UK: Keeping Your Nationality as a Briton',
    description: 'Dual citizenship and the UK: Britain allows it, your other country may not. What to check before naturalising, consular help, travel and renouncing later on.',
    h1: 'Dual nationality and British citizenship',
    intro: 'The fee tool opens on renunciation of British citizenship, the step some people face when their other country forbids two nationalities.',
    resume: (h) => `The United Kingdom allows dual nationality: you can become a British citizen and remain a citizen of another country, and gov.uk says there is nothing to apply for to hold both. The question is the other country's law. Guide AN warns that some countries do not allow dual citizenship, so naturalising as British may mean losing or having to give up your existing nationality, and it advises asking that country before you apply. If your first country still treats you as its citizen, its duties can apply to you while you are on its territory, including military service in some states. As a dual national you cannot get British diplomatic help while you are in your other country of nationality. To enter the UK you use a British or Irish passport or a certificate of entitlement, not an electronic travel authorisation. Giving up British citizenship later, if the other country demands it, costs ${h.gbp(h.F.renunciation)} under the fees table in force since ${h.date(h.F.effective)}.`,
    faqs: (h) => [
      { q: 'Will I lose my current nationality if I become British?', a: 'The UK will not take it from you: British law allows dual nationality. Whether you keep it depends entirely on your other country. gov.uk says many countries do not accept dual citizenship, and Guide AN says you may lose it or have to give it up. The consulate or embassy of that country in the UK is the authority to ask, before you apply.' },
      { q: 'Can I get help from the British embassy when I visit my other country of nationality?', a: 'No. gov.uk states that as a dual national you cannot get diplomatic help from the British government while you are in the other country where you hold citizenship. Its example: someone with British and French citizenship cannot get UK diplomatic help in France. In third countries, British consular help is available to you as to any British citizen.' },
      { q: 'As a dual national, can I enter the UK on my other passport with an ETA?', a: `No. gov.uk says you cannot get an electronic travel authorisation if you are a British or Irish dual citizen. You travel to the UK on a valid UK or Irish passport or with a certificate of entitlement, which costs ${h.gbp(h.F.rightOfAbode)}. People who naturalised after settling under the EU Settlement Scheme may also use their other passport or EU identity card, linked to their UKVI account.` },
      { q: 'If I give up British citizenship to keep my original nationality, can I get it back later?', a: 'There is a route back. gov.uk lists becoming a British citizen again after giving it up among the citizenship applications that can use the priority service, and the nationality guidance refers to registration following renunciation. It is a separate application with its own fee and conditions, so treat renunciation as a serious step rather than a formality to undo later.' },
    ],
    body: (h) => `
<h2>Two legal systems, one person</h2>
<p>Naturalisation touches two bodies of law. British law decides whether you become British, and it has no objection to your keeping another nationality. Your other country's law decides whether you remain its citizen, and that varies a great deal. gov.uk says many countries do not accept dual citizenship, and Guide AN says their nationals may lose their citizenship, or have to give it up, on becoming British; other countries accept it. None of this is decided by the Home Office, which is why Guide AN tells you to seek advice from your own country before applying.</p>
${h.table(['Situation', 'Effect on your other nationality', 'Where to check'], [
  ['Other country allows dual citizenship', 'you keep both', 'its consulate in the UK'],
  ['Other country ends citizenship on naturalisation abroad', 'you may lose it when you become British', 'its consulate, before applying'],
  ['Other country requires you to renounce', 'you may have to give it up', 'its consulate, before applying'],
  ['You later need to give up British citizenship', `renunciation, ${h.gbp(h.F.renunciation)}`, 'Home Office'],
], 'Dual nationality outcomes, summarised from Guide AN and gov.uk. The outcome depends on the other country\'s law.', ['l', 'l', 'l'])}
<h2>Questions to ask your consulate</h2>
<ul>
<li>Do I lose my citizenship automatically when I acquire another one, or only if I renounce it?</li>
<li>Must I tell you, or ask permission, before naturalising?</li>
<li>Can my children keep both nationalities, and does it matter if they were born in the UK?</li>
<li>Do I keep property, inheritance or residence rights at home if I lose citizenship?</li>
<li>Do military service or other duties still apply to me when I visit?</li>
</ul>
<p>Guide AN flags the last point: a country that still regards you as its citizen may hold you to its citizens' duties while you are on its territory, which can include military service. gov.uk adds that in some countries a married person is automatically counted as holding their partner's nationality, and children can hold a parent's nationality even when born abroad.</p>
<h2>Travelling as a dual national</h2>
<p>Most dual nationals carry two passports and use each where it helps. For the UK, gov.uk says you travel on a valid UK passport, an Irish passport, or a certificate of entitlement to the right of abode; British and Irish dual citizens cannot get an electronic travel authorisation. Your carrier may let you travel with an expired UK passport issued in 1989 or later together with a valid passport of a nationality eligible for an ETA, provided the personal details match, but that is the airline's decision. If you naturalised after settling under the EU Settlement Scheme, you may also enter on your other passport or EU identity card, kept linked to your UKVI account. Passport costs for a family are in the tool below.</p>
<p>In your other country, use its passport and remember that British consular help is not available to you there. Elsewhere in the world, you have it like any British citizen.</p>
<h2>Renunciation, if it comes to that</h2>
<p>Some people discover after naturalising that their other country will only let them keep, or regain, its citizenship if they give up British nationality. Renouncing British citizenship is a formal Home Office application costing ${h.gbp(h.F.renunciation)}, shown in the tool at the top. Weigh it carefully: a route to register again as British exists, with its own conditions and fee, but it is not automatic. If the issue is only about how you travel, a ${h.a('bc-after', 'certificate of entitlement')} or simply choosing which passport to show may solve it without renouncing anything.</p>`,
  },
});
