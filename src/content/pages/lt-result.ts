import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'lt-result',
  group: 'test',
  order: 52,
  tool: {"kind": "frise", "props": {"preset": "result"}},
  mini: {"kind": "mini:urn"},
  related: ["lt-pass-mark", "lt-fail", "bc-application", "ilr"],
  sources: ["uk_test_day", "uk_guide_an", "uk_passrate"],
  en: {
    slug: 'life-in-the-uk-test/result',
    nav: "Results and reference number",
    card: 'After a pass: the unique reference number, the older test reference ID letter, and what to send if you lost it.',
    title: 'Life in the UK Test Results: Reference Number, Pass Rates',
    description: 'Life in the UK test results: the unique reference number a pass gives, the older letter, what to do if it is lost, and the pass rates the Home Office published.',
    h1: 'Life in the UK test results, reference number and pass rates',
    intro: 'Enter the date you book the test: the timeline runs from the result to a decision on your application. Below it, check which reference you hold.',
    resume: (h) => `If you pass the Life in the UK Test, with ${h.need} or more correct answers out of ${h.T.questions}, gov.uk says you get a unique reference number. You need it to complete your citizenship or settlement application, and the Home Office uses it to check that you passed. Guide AN says that for tests taken on or after ${h.date(h.T.urnSince)} the number is in the email sent with your results, in a format beginning with HOM followed by groups of digits separated by slashes. If you took the test before ${h.date(h.T.urnSince)}, you have a letter with a test reference ID instead, a shorter number printed at the top of the results letter. Guide AN adds that for the oldest passes, confirmed by letter, the letter itself goes with a naturalisation application, while later passes are given by reference number and the certificate does not normally need to be sent. If you have lost your letter, gov.uk says to send a letter explaining that it is lost with your application. A pass used for settlement can be reused for citizenship, so you do not sit the test twice.`,
    faqs: (h) => [
      { q: 'Where do I find my Life in the UK unique reference number?', a: `For a test taken on or after ${h.date(h.T.urnSince)}, Guide AN says the reference number is in the email sent to you with your results. Search your inbox for that email and keep a copy somewhere safe, along with the date of the test. You will type the number into your settlement or citizenship application form.` },
      { q: 'I passed years ago and cannot find my pass letter. Do I have to retake the test?', a: 'Not because of the lost letter alone. gov.uk says that if you have lost your letter, you send a letter explaining that you have lost it with your citizenship or settlement application. Give as much detail as you can, such as the approximate date and the centre where you sat the test, so that the pass can be traced.' },
      { q: 'What is the Life in the UK test pass rate?', a: `The Home Office has not put a current figure on gov.uk. Its transparency data, which stops in December ${'2013'}, shows ${h.T.passRates.years[0].rate}% of sittings passing from April 2010 to March 2011, ${h.T.passRates.years[2].rate}% two years later and ${h.T.passRates.years[3].rate}% from April to December 2013, counting retakes. Treat any newer percentage as unofficial.` },
      { q: 'Do I need to send my pass certificate with my citizenship application?', a: `Usually not. Guide AN says you are asked for the reference number on the application form and do not normally need to send the certificate. The exception is an older pass confirmed by letter, from shortly before the switch to reference numbers in ${h.T.urnSince.slice(0, 4)} or earlier: Guide AN says you must then provide that letter with your application.` },
    ],
    body: (h) => `
<h2>Two systems, one cut-off date</h2>
${h.table(['Test taken', 'What you have', 'Where it is', 'For your application'], [
  [`on or after ${h.date(h.T.urnSince)}`, 'a unique reference number', 'in the email sent with your results', 'type the number on the form'],
  [`before ${h.date(h.T.urnSince)}`, 'a test reference ID', 'at the top of your results letter', 'see the letter rule below'],
], 'From gov.uk (what happens at the test) and Guide AN.', ['l', 'l', 'l', 'l'])}
<p>The reference checker under the summary sorts you into one of the two rows from the date you passed. The switch happened on ${h.date(h.T.urnSince)}; anyone who sat the test before that holds a letter rather than a number by email.</p>
<h2>The letter rule for naturalisation</h2>
<p>Guide AN draws a second line, a little earlier in ${h.T.urnSince.slice(0, 4)} than the switch to reference numbers, for what you must send with a citizenship application. Passes after that line are given as a test reference number on the form. Passes before it were confirmed by letter, and you must provide that letter with your application. An older pass therefore means finding the original letter, or explaining in writing that it is lost. Guide AN gives the exact cut-off date.</p>
<h2>Using the pass in an application</h2>
<p>gov.uk is clear that a previous pass is enough: you do not take the test again if you passed it before, for example for settlement, and now apply to become a citizen. The Home Office uses the reference number to check the result, so it must be exact. Copy it directly from the email rather than retyping it from memory.</p>
<p>A few habits avoid trouble later. Save the results email as a file as well as in your inbox. Write the number and the test date in the same place as your other immigration records. If you change email address, forward the message to the new one first. Your settlement application, your citizenship application and any application for a family member may all ask for the same details, sometimes years apart.</p>
<h2>If the letter or email is lost</h2>
<p>gov.uk's instruction covers the older letters: send a letter explaining that you have lost it with your citizenship or settlement application. Say when and roughly where you sat the test and in which name you booked, especially if your name has changed since. Guide AN repeats the same instruction for naturalisation. For a pass after ${h.date(h.T.urnSince)}, the first step is to look for the results email; if it cannot be found, explaining the situation in your application is the route gov.uk sets out for a missing letter.</p>
<h2>If you did not pass</h2>
<p>A score below ${h.need} out of ${h.T.questions} gives no reference number. You can rebook as many times as you need, paying ${h.gbp(h.T.fee)} each time; there is no published waiting period on gov.uk. Our ${h.a('lt-fail', 'page on failing')} explains how to work out which chapters cost you the points, and the checker below shows how far a given score sits from the mark.</p>
<!--tool:mini:ukpass-->
<h2>Pass rates published by the Home Office</h2>
<p>The Home Office does not show a pass rate on its test pages. The most recent figures we found on gov.uk are in its ${h.src('uk_passrate', 'transparency data on Life in the United Kingdom tests')}, which runs from April 2010 to December 2013 and counts every sitting, retakes included. The Home Office notes that the figures were supplied by the test provider and were not checked in detail. Across those years the share of sittings that passed moved between ${h.T.passRates.quarters2013[2].rate}% and ${h.T.passRates.years[2].rate}%, and candidates sitting the test for settlement passed more often than those sitting it for citizenship in every year.</p>
${h.table(['Period', 'Tests taken', 'Passed', 'Pass rate', 'For settlement', 'For citizenship'], h.T.passRates.years.map((y) => [y.period, y.taken, y.passed, `${y.rate}%`, `${y.settlement}%`, `${y.citizenship}%`]), 'Home Office transparency data, April 2010 to December 2013 (all sittings, retakes included).', ['l', 'r', 'r', 'r', 'r', 'r'])}
<p>The last three quarters in the table, from April to December 2013, read ${h.T.passRates.quarters2013.map((q) => `${q.rate}%`).join(', ')}: lower than the year before. No later official series has been published on gov.uk, so any recent percentage you see elsewhere is not a Home Office figure. What these numbers do say is that roughly a quarter of sittings ended below the mark, which is why a few full mocks at ${h.need} or more before booking is worth the time.</p>
<p>Sources: ${h.src('uk_test_day', 'what happens at the Life in the UK Test (gov.uk)')}, ${h.src('uk_guide_an', 'Guide AN, section 9.1')} and ${h.src('uk_passrate', 'Home Office transparency data')}.</p>`,
  },
});
