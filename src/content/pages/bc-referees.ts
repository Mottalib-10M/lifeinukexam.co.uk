import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'bc-referees',
  group: 'citizenship',
  order: 98,
  tool: {"kind": "mini:referee"},
  mini: {"kind": "mini:timeline"},
  related: ["bc-application", "bc-good-character", "bc-citizenship", "bc-processing"],
  sources: ["uk_guide_an"],
  en: {
    slug: 'british-citizenship/referees',
    nav: "Referees",
    card: 'Who can endorse your naturalisation application: the two referee profiles, the three-year rule, who is excluded and what a false statement risks.',
    title: 'Referees for British Citizenship: Who Qualifies and Who Not',
    description: 'Referees for British citizenship: one professional of any nationality, one British passport holder, known 3 years, unrelated, no recent convictions, the checks.',
    h1: 'Choosing referees for your citizenship application',
    intro: 'Describe a possible referee: how long they have known you, their job, passport and age. The tool says whether they fit either slot.',
    resume: (h) => `A naturalisation application must be endorsed by ${h.N.referees} referees, according to Home Office Guide AN. One can be of any nationality but must be a professional person, such as a minister of religion, a civil servant, or a member of a professional body like an accountant or a solicitor who is not acting for you. The other must hold a British citizen passport and be either a professional person or over the age of ${h.N.refereeMinAge}. Each must have known you for at least ${h.N.refereeKnownYears} years. Neither may be related to you or to the other referee, act as your solicitor or agent on the application, or work for the Home Office, and a referee convicted of an imprisonable offence in the last ${h.N.refereeConvictionYears} years will not usually be accepted. The Home Office may check their convictions, standing and signatures. Knowingly or recklessly giving false information is an offence under section 46(1) of the British Nationality Act 1981, punishable by up to ${h.N.falseInfoMaxMonths} months in prison, a fine of up to ${h.gbp(h.N.falseInfoMaxFine)}, or both.`,
    faqs: (h) => [
      { q: 'Can my best friend be a referee if she is not British and not a professional?', a: `Not on the rules in Guide AN. The first referee can be any nationality but must be a professional person; the second can be a non-professional, but only if they hold a British citizen passport and are over ${h.N.refereeMinAge}. A friend who is neither British nor a professional fits neither slot, however long she has known you. Look among colleagues, neighbours or community contacts instead.` },
      { q: 'Can my employer or line manager act as a referee?', a: `Nothing in Guide AN rules out an employer. A manager who is a professional person and has known you for ${h.N.refereeKnownYears} years can be the first referee whatever their nationality, and can be the second if they hold a British citizen passport. They must not be related to you or to the other referee, and they must not work for the Home Office.` },
      { q: 'Is a spouse\'s brother acceptable as a referee if he is a doctor?', a: 'Guide AN says referees must not be related to you. A brother-in-law is a relative by marriage, so he is best avoided even with a profession that would otherwise qualify him. The safest choices are people with no family link to you or to each other, which also spares the caseworker any question about independence.' },
    ],
    body: (h) => `
<h2>The two slots</h2>
${h.table(['', 'First referee', 'Second referee'], [
  ['Nationality', 'any', 'holds a British citizen passport'],
  ['Profession or age', 'professional person', `professional person, or over ${h.N.refereeMinAge}`],
  ['Known you for', `${h.N.refereeKnownYears} years or more`, `${h.N.refereeKnownYears} years or more`],
  ['Must not be', 'related to you or the other referee, your solicitor or agent, Home Office staff', 'same'],
  ['Convictions', `no imprisonable offence in the last ${h.N.refereeConvictionYears} years (usually)`, 'same'],
], 'Referee rules from Home Office Guide AN (July 2026), section 12.', ['l', 'l', 'l'])}
<p>Guide AN gives three examples of a professional person: a minister of religion, a civil servant, and a member of a professional body such as an accountant or solicitor. It does not publish a closed list, so if a candidate's job is not obviously "professional", choose someone else for the first slot rather than argue the point after you have applied.</p>
<h2>Testing four candidates</h2>
<p>Adaeze needs two referees. She runs four names through the tool at the top:</p>
<ul>
<li><strong>Her GP practice manager</strong>, Nigerian, known for six years, member of a professional body. Fits the first slot, not the second (no British passport).</li>
<li><strong>Her neighbour Tom</strong>, British, aged 68, retired bus driver, known for nine years. Not a professional, but British and over ${h.N.refereeMinAge}: fits the second slot.</li>
<li><strong>Her cousin</strong>, a British solicitor. Related to her: excluded from both slots, whatever the profession.</li>
<li><strong>A British church minister</strong> she met two years ago. Qualifies on profession and passport, but has not known her for ${h.N.refereeKnownYears} years. Not yet.</li>
</ul>
<p>Her pair is the practice manager and Tom. They are not related to each other, and neither is helping her with the application.</p>
<h2>What the referees actually do</h2>
<p>Guide AN describes referees as people who know you and can help prove your identity, and says they endorse the application. Their details go into the form when you apply. The Home Office may then check that they have no unspent convictions, that they are qualified to act for you, and that their signatures are genuine. Tell your referees in advance that their details may be checked, and give them the facts they are confirming, such as how long and in what capacity they have known you.</p>
<p>The warning in Guide AN is addressed to everyone involved: providing false information knowingly or recklessly is a criminal offence under section 46(1) of the British Nationality Act 1981, with up to ${h.N.falseInfoMaxMonths} months' imprisonment, a fine of up to ${h.gbp(h.N.falseInfoMaxFine)}, or both. A referee who signs for someone they barely know, or overstates how long they have known them, takes that risk personally.</p>
<h2>Common reasons a referee is turned down</h2>
<ul>
<li>They have known you for less than ${h.N.refereeKnownYears} years, often a new manager or a recent friend.</li>
<li>They are family, including relatives by marriage, or related to your other referee.</li>
<li>They are the solicitor or adviser handling your application.</li>
<li>They work for the Home Office.</li>
<li>They were convicted of an imprisonable offence in the last ${h.N.refereeConvictionYears} years.</li>
</ul>
<h2>When to line them up</h2>
<p>Choose referees before you start the form: the ${h.N.refereeKnownYears}-year rule means someone you met recently cannot be added in a hurry. The timeline tool below shows what follows submission: biometrics within ${h.N.biometricsDays} days, then a decision usually within ${h.N.decisionUsuallyMonths} months. The full order of steps is on the ${h.a('bc-application', 'application page')}, and the declarations you make about yourself are covered under ${h.a('bc-good-character', 'good character')}.</p>`,
  },
});
