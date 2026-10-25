import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'bc-spouse',
  group: 'citizenship',
  order: 88,
  tool: {"kind": "date", "props": {"route": "6(2)"}},
  mini: {"kind": "mini:routes", "props": {"r": 1}},
  related: ["bc-date", "bc-absences", "bc-citizenship", "bc-cost"],
  sources: ["uk_spouse", "uk_guide_an", "uk_dual"],
  en: {
    slug: 'british-citizenship/spouse-route',
    nav: "Spouse or civil partner route",
    card: 'The 3-year route for husbands, wives and civil partners of British citizens: shorter residence, no wait after ILR, same fee.',
    title: 'British Citizenship for Spouses: the 3-Year Route Explained',
    description: 'British citizenship for the spouse or civil partner of a British citizen: 3 years, 270 days abroad, ILR without the 12-month wait, the papers and the same fee.',
    h1: 'Citizenship as the spouse or civil partner of a British citizen',
    intro: 'The calculator is set to the 3-year route. Add your arrival date, the date you got settlement and your trips to find your first possible day.',
    resume: (h) => `If you are married to, or in a civil partnership with, a British citizen, you can naturalise under section 6(2) of the British Nationality Act 1981 instead of the standard route. You need ${h.N.route62spouse.years} years of residence rather than ${h.N.route61.years}, no more than ${h.num(h.N.route62spouse.maxAbsenceDays)} days abroad in that period and no more than ${h.N.route62spouse.maxAbsenceLast12m} in the last 12 months. You must hold indefinite leave to remain, indefinite leave to enter or EU settled status on the day you apply, but unlike the standard route there is no ${h.N.route61.ilrHeldMonths}-month wait after getting it: gov.uk says you can apply as soon as you have it. There is also no requirement to intend to live in the UK. Everything else is the same: ${h.N.minAge} or over, in the UK on the first day of the ${h.N.route62spouse.years} years, the Life in the UK Test, English at ${h.E.level}, good character, and the same fee of ${h.gbp(h.total)}. Marriage itself never makes anyone British.`,
    faqs: (h) => [
      { q: 'Does marrying a British citizen make me British automatically?', a: 'No. gov.uk states that you do not automatically become a British citizen when you marry a person from the UK; you need to apply as the spouse of a British citizen. The marriage shortens the residence period and removes the wait after settlement, but you still need settlement, the test, the English requirement and good character, and you still pay the full fee.' },
      { q: 'We are engaged or living together but not married. Can I use the spouse route?', a: `No. Guide AN says you must be married to, or in a formal civil partnership with, a British citizen to apply under section 6(2), and that being in a relationship is not sufficient. An unmarried partner uses the standard route with ${h.N.route61.years} years and the ${h.N.route61.ilrHeldMonths}-month wait after settlement, or applies under 6(2) after the wedding if the other conditions are met by then.` },
      { q: 'My British husband died. Can I still apply on the 3-year route?', a: `No. gov.uk says you cannot apply as the partner of a British citizen if your partner has died, because the marriage must exist on the date of application. You can check whether you qualify another way, most often on the standard route with indefinite leave to remain, ${h.N.route61.years} years of residence and the ${h.N.route61.ilrHeldMonths}-month wait after settlement.` },
      { q: 'What documents prove that my spouse is British?', a: 'Guide AN asks for your spouse\'s or civil partner\'s current passport, or their naturalisation or registration certificate showing they are a British citizen, together with your marriage or civil partnership certificate. Upload clear copies of every page the caseworker needs, and keep the originals ready in case they are asked for later in the process.' },
    ],
    body: (h) => `
<h2>Side by side with the standard route</h2>
${h.table(['', `Spouse route, section 6(2)`, 'Standard route, section 6(1)'], [
  ['Residence', `${h.N.route62spouse.years} years`, `${h.N.route61.years} years`],
  ['Days abroad, whole period', h.num(h.N.route62spouse.maxAbsenceDays), h.num(h.N.route61.maxAbsenceDays)],
  ['Days abroad, last 12 months', h.N.route62spouse.maxAbsenceLast12m, h.N.route61.maxAbsenceLast12m],
  ['Settlement held before applying', 'from the day of application', `${h.N.route61.ilrHeldMonths} months`],
  ['Intention to live in the UK', 'not required', 'required'],
  ['Discretion band for excess absences', `${h.num(h.N.route62spouse.band[0])} to ${h.num(h.N.route62spouse.band[1])} days`, `${h.num(h.N.route61.band[0])} to ${h.num(h.N.route61.band[1])} days`],
  ['Home Office fee', h.gbp(h.total), h.gbp(h.total)],
], 'Section 6(2) against section 6(1), from Guide AN (July 2026) and gov.uk.', ['l', 'l', 'l'])}
<p>The absence limit per year is in fact the same on both routes, ${h.num(h.N.route62spouse.maxAbsenceDays / h.N.route62spouse.years)} days a year on average; the spouse route simply measures a shorter span. What changes the date most is the missing wait after settlement.</p>
<h2>A worked date</h2>
<p>Sofia, a Brazilian national, moved to Bristol on 10 May 2022 and married her British partner. She was granted indefinite leave to remain on 2 March 2026. On the standard route she would have to wait until 2 March 2027 for her settlement to be ${h.N.route61.ilrHeldMonths} months old. As a spouse, her residence alone would have allowed an application from May 2025, and the ILR condition is met the day she gets it: in practice she can apply from 2 March 2026, provided she was in the UK on the first day of the ${h.N.route62spouse.years}-year period and her trips stay within ${h.num(h.N.route62spouse.maxAbsenceDays)} days. Her Life in the UK Test and English result are what she must arrange first.</p>
<p>The first day still bites. gov.uk's example: if the Home Office receives an application on 20 June 2022 but the applicant was abroad from 10 to 25 June 2019, they do not qualify and must wait until 24 June 2022. The calculator at the top checks this for you.</p>
<h2>Conditions people overlook</h2>
<ul>
<li><strong>The marriage must exist on the day you apply.</strong> A civil partnership counts; an engagement or cohabitation does not.</li>
<li><strong>Your spouse must already be British.</strong> If your partner is also waiting to naturalise, you cannot use 6(2) until they are.</li>
<li><strong>Settlement is still required.</strong> The route shortens time; it does not replace indefinite leave to remain or EU settled status. Pre-settled status holders have a separate, narrow path described on the ${h.a('bc-eu', 'EU settled status page')}.</li>
<li><strong>The Life in the UK Test and English apply in full.</strong> A British spouse does not exempt you; nationality of a listed English-speaking country, a degree or age might.</li>
</ul>
<h2>Spouses of British citizens serving abroad</h2>
<p>If your husband, wife or civil partner works outside the UK in Crown service or a designated service, Guide AN describes an alternative to the ${h.N.route62spouse.years}-year residence period. Your spouse must be serving abroad on the day you apply and have been recruited in the UK, your naturalisation must be in the interests of their employer (which writes a letter saying so), and the marriage must have lasted ${h.N.route62spouse.years} years or more. Character, language and the Life in the UK Test still apply. This is a specialist path; read the guidance before relying on it.</p>
<h2>Children and dual nationality</h2>
<p>gov.uk notes that a child born in the UK to a British parent is usually British automatically. Children born abroad, or born before either parent was British or settled, may need to be registered, which is a separate application at ${h.gbp(h.F.registrationChild)} per child; see ${h.a('bc-children', 'registering children')}. Before applying, check whether your own country lets you keep its nationality, as some countries count a married person as holding their partner's nationality or restrict dual citizenship; the ${h.a('bc-dual', 'dual nationality page')} covers this.</p>`,
  },
});
