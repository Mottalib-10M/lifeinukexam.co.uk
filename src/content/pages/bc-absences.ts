import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'bc-absences',
  group: 'citizenship',
  order: 84,
  tool: {"kind": "mini:absband"},
  mini: {"kind": "mini:qstart"},
  related: ["bc-date", "bc-discretion", "bc-spouse", "ilr-lost"],
  sources: ["uk_guidance", "uk_ilr", "uk_guide_an"],
  en: {
    slug: 'british-citizenship/absences',
    nav: "Absences: the 450-day rule",
    card: 'How the Home Office counts days abroad for naturalisation: whole days only, two windows to check, and the evidence that proves your trips.',
    title: '450 Days Rule for Citizenship: Counting Absences Correctly',
    description: 'The 450-day and 90-day absence rules for British citizenship: whole days only, how both windows are measured, the evidence to give and the mistakes to avoid.',
    h1: 'Absences and British citizenship: the 450-day rule',
    intro: 'Enter your total days abroad and those in the last 12 months. The tool places them in the Home Office bands; the page explains how to count them.',
    resume: (h) => `For naturalisation the Home Office checks two windows of absence. Over the whole qualifying period you may spend up to ${h.num(h.N.route61.maxAbsenceDays)} days outside the UK on the ${h.N.route61.years}-year route, or ${h.num(h.N.route62spouse.maxAbsenceDays)} days on the ${h.N.route62spouse.years}-year route for spouses and civil partners of British citizens. Separately, the 12 months ending with your application date may contain no more than ${h.N.route61.maxAbsenceLast12m} days abroad on either route. Only whole days count: the day you leave and the day you come back are both treated as days in the UK, so a trip out on 22 September and back on 23 September counts as zero. Weekends away therefore weigh little and long stays weigh a lot. You list every absence on the form from your own records, and the Home Office compares the list with its entry and exit records and your passports. Totals a little above the limits can still be accepted under the guidance on discretion.`,
    faqs: (h) => [
      { q: 'Do day trips to France or a weekend in Dublin count as absences for citizenship?', a: 'A day trip counts as nothing, because the day out and the day back are not counted and here they are the same day. A Friday to Sunday weekend counts as one day, the Saturday. Ireland is outside the UK for this rule, so trips there are absences like any other, even without a passport check at the border. List them all on the form.' },
      { q: 'Which 12 months does the 90-day limit cover?', a: `The guidance describes it as the period of 12 months ending with the date of application, which is the day the Home Office receives your form, the same day if you apply online. Moving your application date forward or back by a few weeks changes which trips fall inside it, so the qualifying start tool below also gives the first day of that final year.` },
      { q: 'I cannot remember the exact dates of trips from four years ago. What should I put?', a: 'Guide AN accepts that people may not remember exact dates and asks you to do your best; the Home Office will use its own records to help confirm your presence. gov.uk suggests working from emails and boarding passes, and says the Home Office will fill gaps or correct errors. Do not invent precision you lack, and do not leave trips out.' },
      { q: 'Does time spent in the Channel Islands or the Isle of Man count as an absence?', a: 'No. Guide AN treats presence in the Isle of Man or the Channel Islands as presence for the first-day rule, and the British Nationality Act 1981 reads the United Kingdom as including the Islands for its purposes. Trips to Jersey, Guernsey or the Isle of Man therefore do not add days abroad. Ireland, by contrast, is a separate state and every whole day there counts.' },
    ],
    body: (h) => `
<h2>How to count a trip</h2>
<p>The rule is printed in the nationality guidance: count whole days outside the UK only, never the dates of departure and arrival. In practice, the number of days abroad for one trip is the number of nights away minus one.</p>
${h.table(['Trip', 'Left', 'Returned', 'Days counted'], [
  ['Day trip to Paris', '6 March', '6 March', 0],
  ['Weekend in Amsterdam', 'Friday 14 March', 'Sunday 16 March', 1],
  ['Family visit', '3 April', '17 April', 13],
  ['Summer abroad', '20 July', '3 September', 44],
  ['Total for the year', '', '', 58],
], 'Worked example: whole days only, departure and arrival days excluded.', ['l', 'l', 'l', 'r'])}
<p>That year stays well within ${h.N.route61.maxAbsenceLast12m} days even with a six-week summer away. Repeat the pattern every year of a ${h.N.route61.years}-year period and the total is ${h.num(58 * h.N.route61.years)}, still under ${h.num(h.N.route61.maxAbsenceDays)}; on the spouse route, ${h.N.route62spouse.years} such years make ${h.num(58 * h.N.route62spouse.years)}, under ${h.num(h.N.route62spouse.maxAbsenceDays)}. Add one long trip of a few months and both windows can tip over at once.</p>
<h2>Two windows, one application date</h2>
<p>Both limits are measured backwards from the day the Home Office receives your application. The whole-period window runs from the first day of the qualifying period (the day after the application date minus ${h.N.route61.years} or ${h.N.route62spouse.years} years). The final-year window is the 12 months ending with the application date. A long trip that sits 13 months before you apply weighs only in the first window; push the application back by two months and it can drop out of the final year entirely, though it still counts in the period. Planning around that is legitimate, and the ${h.a('bc-date', 'date calculator')} does it trip by trip.</p>
<h2>Proving where you were</h2>
<p>You declare absences on the form; the Home Office checks them. Guide AN lists what it relies on:</p>
<ul>
<li>Your passports covering the period, even where they were not stamped on entry.</li>
<li>Home Office records of entry to and exit from the UK, which you do not need to request yourself.</li>
<li>If passports are missing, letters from employers with start and end dates, payslips, P60s, letters from colleges or from other government departments.</li>
<li>Doctors' letters only as a last resort, and only if the doctor saw you regularly over the period.</li>
</ul>
<p>Documents you uploaded with earlier immigration applications need not be sent again: the Home Office already holds them. If your trips do not fit in the space on the form, Guide AN says to add them as a separate attachment. The nationality guidance tells caseworkers to give the benefit of the doubt where claimed absences are within normal limits and nothing suggests the list is wrong.</p>
<h2>Mistakes that turn up again and again</h2>
<ul>
<li><strong>Counting departure and return days.</strong> It overstates the total, sometimes by a hundred days over a long period with frequent travel, and can make people wait a year for nothing.</li>
<li><strong>Forgetting the final year.</strong> A period total of 300 days looks safe on the 6(1) route, but if 120 of them fell in the last 12 months the application is above ${h.N.route61.maxAbsenceLast12m}.</li>
<li><strong>Leaving trips off the list.</strong> The Home Office compares your list with its own records; an omission raises questions of accuracy that a full list would never have raised.</li>
<li><strong>Ignoring the first day.</strong> Being abroad on the first day of the period is a separate problem from the totals; the tool below gives that date.</li>
<li><strong>Assuming time abroad while waiting for ILR does not matter.</strong> Every day of the qualifying period counts, whatever status you held at the time.</li>
</ul>
<p>If your totals are above the limits, read the ${h.a('bc-discretion', 'page on excess absences')} before deciding to wait. Very long absences raise a separate risk to settlement itself, explained on the ${h.a('ilr-lost', 'time abroad page')}.</p>`,
  },
});
