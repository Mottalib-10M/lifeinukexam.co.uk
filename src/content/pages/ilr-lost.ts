import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'ilr-lost',
  group: 'settle',
  order: 122,
  tool: {"kind": "mini:ilrlost"},
  mini: {"kind": "mini:absband"},
  related: ["ilr", "bc-absences", "bc-eu", "bc-date"],
  sources: ["uk_ilr_lose", "uk_eu", "uk_ilr", "uk_guide_an"],
  en: {
    slug: 'indefinite-leave-to-remain/time-abroad',
    nav: "Time abroad and losing ILR",
    card: 'How long you can stay abroad before ILR or EU settled status lapses, and why citizenship sets a much lower ceiling on time away.',
    title: 'Losing ILR After 2 Years Abroad: Settled Status, Citizenship',
    description: 'Time abroad and settlement: ILR lapses after 2 years in a row outside the UK, EU settled status after 5 (4 for Swiss citizens). What that means for citizenship.',
    h1: 'Time abroad: when ILR or settled status is lost',
    intro: 'Enter the day you leave, the day you plan to come back and your status. The tool checks the continuous absence against the limit for that status.',
    resume: (h) => `Settled status in the UK can be lost by staying away too long in one stretch. gov.uk says you may lose indefinite leave to remain if you have been outside the UK for more than ${h.U.settlement.ilrLostAfterYearsAbroad} years at any time since you got it, in which case you would need to apply for a Returning Resident visa. Settled status under the EU Settlement Scheme is more generous: you can spend up to ${h.U.settlement.settledStatusLostAfterYears} years in a row outside the UK and Islands without losing it, or ${h.U.settlement.settledStatusSwissYears} years for Swiss citizens and their family members, and any visit to the UK restarts that count. These limits protect the status, not your path to citizenship. Naturalisation counts every whole day abroad against ${h.num(h.N.route61.maxAbsenceDays)} days over ${h.N.route61.years} years and ${h.N.route61.maxAbsenceLast12m} in the final year, and a recent absence of ${h.N.futureAbsenceMonths} months or more can cast doubt on your intention to live in the UK. A two-year stay abroad that keeps your ILR may still delay a citizenship application by years.`,
    faqs: (h) => [
      { q: 'Does a short visit to the UK reset the two-year clock for ILR?', a: `The gov.uk wording for ILR is being outside the UK for more than ${h.U.settlement.ilrLostAfterYearsAbroad} years at any time since you got it, which describes one continuous absence. For EU settled status gov.uk is explicit that entering the UK for any amount of time lets you spend up to ${h.U.settlement.settledStatusLostAfterYears} more years outside. Short visits do not help with citizenship, where each whole day abroad counts.` },
      { q: 'I lost my ILR after a long stay abroad. Can I get it back?', a: `gov.uk points to a Returning Resident visa for people who have been away more than ${h.U.settlement.ilrLostAfterYearsAbroad} years and lost their indefinite leave, and its ILR page lists returning to the UK after previously having ILR among the other ways to apply. Eligibility depends on your circumstances, so read that guidance before travelling back on any other visa.` },
      { q: 'Can I lose pre-settled status by staying abroad?', a: `Yes. gov.uk says you lose pre-settled status automatically if you spend more than ${h.U.settlement.settledStatusLostAfterYears} years in a row outside the UK, the Channel Islands or the Isle of Man. Shorter absences matter too, though, because converting to settled status needs continuous residence, which gov.uk measures by the time you spend in the UK and Islands in each 12-month period.` },
    ],
    body: (h) => `
<h2>The limits by status</h2>
${h.table(['Status', 'Lost after a continuous absence of', 'What resets or restores it'], [
  ['Indefinite leave to remain (ILR)', `more than ${h.U.settlement.ilrLostAfterYearsAbroad} years`, 'Returning Resident visa if lost'],
  ['EU settled status', `more than ${h.U.settlement.settledStatusLostAfterYears} years in a row`, 'any entry to the UK restarts the count'],
  ['EU settled status, Swiss citizens and family', `more than ${h.U.settlement.settledStatusSwissYears} years in a row`, 'any entry to the UK restarts the count'],
  ['EU pre-settled status', `more than ${h.U.settlement.settledStatusLostAfterYears} years in a row`, 'lost automatically'],
], 'From gov.uk (citizenship with ILR page, EU Settlement Scheme guidance), read on ' + h.date(h.P.retrieved_at) + '.', ['l', 'l', 'l'])}
<h2>A worked case</h2>
<p>Leila, who holds ILR, accepts a posting abroad and leaves on 1 June 2026, planning to return on 1 March 2028. The tool at the top, with those dates, counts the whole days away and compares them with the ${h.U.settlement.ilrLostAfterYearsAbroad}-year limit, which would fall on 1 June 2028: on her plan she keeps her ILR with three months to spare. A delay of a few months on the posting would change that, which is why the tool also gives the last safe return date.</p>
<p>Now look at the same trip from the citizenship side. Leila's absence runs to more than ${h.num(600)} whole days. That single trip is already above the ${h.num(h.N.route61.maxAbsenceDays)} days allowed over ${h.N.route61.years} years and puts her in the middle discretion band (${h.num(h.N.route61.band[0])} to ${h.num(h.N.route61.band[1])}) before any holiday is counted. The second tool shows the band her total falls in. In practice she would wait until enough of the posting falls outside the ${h.N.route61.years}-year window before applying, and her final 12 months would need to stay within ${h.N.route61.maxAbsenceLast12m} days or close to it.</p>
<h2>Citizenship looks at time abroad differently</h2>
<ul>
<li><strong>Totals, not stretches.</strong> The status limits are about one continuous absence; the naturalisation limits add up every trip.</li>
<li><strong>The final year.</strong> ${h.N.route61.maxAbsenceLast12m} days at most in the 12 months before applying, with discretion up to ${h.N.finalYear.discretion} and, with strong links, up to ${h.N.finalYear.strongLinks}.</li>
<li><strong>Future intentions.</strong> On the standard route Guide AN says that a recent absence of ${h.N.futureAbsenceMonths} months or more can cast doubt on your intention to live in the UK, and that announcing a continuous absence of more than ${h.N.futureAbsenceMonths} months usually leads to refusal, with exceptions such as voluntary work, training needed for a UK career, or a pattern like work at sea.</li>
<li><strong>The first day.</strong> If you were abroad on the first day of the qualifying period, you need exceptional reasons or a later date.</li>
</ul>
<h2>Planning a long stay abroad</h2>
<p>If you expect to be away for a long period, decide first which matters more: keeping the status or naturalising soon. To keep ILR, come back before the ${h.U.settlement.ilrLostAfterYearsAbroad}-year mark; for EU settled status, any visit restarts the count. To naturalise soon, consider applying before you leave, since Guide AN says you may travel while the application is pending, provided you give biometrics within ${h.N.biometricsDays} days and can attend a ceremony within ${h.N.ceremonyWithinDays} days of the invitation. Keep boarding passes and travel emails from the whole period: the Home Office compares your list of trips with its own records, and good notes make both the status question and the citizenship count easy to answer. The ${h.a('bc-absences', 'absences page')} explains how days are counted and the ${h.a('bc-eu', 'EU settled status page')} covers scheme holders.</p>`,
  },
});
