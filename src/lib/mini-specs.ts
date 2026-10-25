/**
 * Mini-tools of the pages (RECETTE §9.3): one subject = one calculation, always read from
 * params-2026.json or the site's engines, never a second formula.
 */
import type { MiniSpec } from './mini-types';
import P from '../data/params-2026.json';
import { ukCost } from './engine/cost';
import { money, formatNumberL, pct, dateL } from './format-l';
import { passNeeded } from './engine/exam';
import { absenceBand, finalYearBand, qualifyingStart, routeRules, type Route } from './engine/eligibility';
import { addDays, addMonths, addYears, dayNum, isoOf } from './engine/dates';
import { CHAPTERS } from './banks';
import BANKSIZE from '../data/bank-size.json';
import { EXTRA_A } from './mini-specs-extra-a';
import { EXTRA_B } from './mini-specs-extra-b';

const T = P.uk.test, F = P.uk.fees, N = P.uk.naturalisation, E = P.uk.english;
const yn = [{ value: '0', label: 'No' }, { value: '1', label: 'Yes' }];
const clamp = (x: number, a: number, b: number) => Math.max(a, Math.min(b, Math.round(x)));
const n0 = (v: number) => formatNumberL(v);
const d = (iso: string) => dayNum(iso);
const D = (n: number) => dateL(isoOf(n));
const plural = (k: number, w: string) => `${n0(k)} ${w}${k === 1 ? '' : 's'}`;
const ROUTES = [{ value: '0', label: 'Settled, 5-year route (6(1))' }, { value: '1', label: 'Spouse of a British citizen, 3-year route (6(2))' }];
const routeOf = (x: number): Route => (x ? '6(2)' : '6(1)');
/** Working days after a date, weekends skipped (bank holidays not removed: the result is a lower bound). */
function addWorkingDays(start: number, k: number) {
  let x = start, left = k;
  while (left > 0) { x++; const wd = new Date(x * 86400000).getUTCDay(); if (wd !== 0 && wd !== 6) left--; }
  return x;
}
/** Binomial tail: chance of at least `need` right out of `n` when each answer is right with probability p. */
function atLeast(n: number, need: number, p: number) {
  let s = 0;
  for (let k = need; k <= n; k++) {
    let c = 1; for (let i = 0; i < k; i++) c = (c * (n - i)) / (i + 1);
    s += c * p ** k * (1 - p) ** (n - k);
  }
  return Math.min(1, Math.max(0, s));
}

const SPECS: Record<string, () => MiniSpec> = {
  ukpass: () => ({
    title: 'Is my score a pass?', cta: 'Sit a full mock test', ctaPage: 'lt-mock',
    inputs: [{ id: 'right', label: 'Correct answers', def: 19, max: T.questions, unit: `/ ${T.questions}` }],
    run: (v) => {
      const n = T.questions, need = passNeeded(), r = clamp(v.right ?? 0, 0, n);
      return { head: ['Result', r >= need ? 'Pass' : 'Fail'], rows: [['Pass mark', `${need} of ${n} (${pct(T.passPercent / 100)})`], ['Your score', pct(r / n)], [r >= need ? 'Margin' : 'Short by', r >= need ? plural(r - need, 'answer') + ' above the mark' : plural(need - r, 'answer')]] };
    },
  }),
  passchance: () => ({
    title: 'What my practice rate means on the day', cta: 'Measure it on a full mock', ctaPage: 'lt-mock',
    inputs: [{ id: 'rate', label: 'Share of practice questions you get right', def: 85, max: 100, unit: '%' }],
    run: (v) => {
      const p = clamp(v.rate ?? 0, 0, 100) / 100, n = T.questions, need = passNeeded();
      const c = atLeast(n, need, p);
      return { head: ['Estimated chance of 18 or more', pct(c)], rows: [['Expected score', `${n0(Math.round(p * n))} of ${n}`], ['Pass mark', `${need} of ${n}`], ['Model', 'each question right with the same rate']], note: 'A statistical estimate from your own practice rate, not a forecast: the real questions are worded differently and some topics may be weaker than your average.' };
    },
  }),
  ukexempt: () => ({
    title: 'Do I have to sit the Life in the UK Test?', cta: 'Read the exemption rules', ctaPage: 'lt-exempt',
    inputs: [{ id: 'age', label: 'Age on the day you apply', def: 40, max: 120, unit: 'yrs' }, { id: 'before', label: 'Passed it before (for settlement)?', def: 0, options: yn }, { id: 'cond', label: 'Long-term physical or mental condition?', def: 0, options: yn }],
    run: (v) => {
      const a = v.age ?? 0;
      const ex = a < T.exemptUnder ? `No: under ${T.exemptUnder}` : a >= T.exemptFromAge ? `No: ${T.exemptFromAge} or over` : v.before ? 'No: reuse your pass' : v.cond ? 'Only with a form or a doctor’s letter' : 'Yes, you need a pass';
      return { head: ['Test needed?', ex], rows: [['Ages exempt', `under ${T.exemptUnder}, or ${T.exemptFromAge} and over`], ['Fee if you sit it', money(T.fee)], ['Book at least', plural(T.bookAtLeastDaysAhead, 'day') + ' ahead']] };
    },
  }),
  ukattempts: () => ({
    title: 'What retakes add to the bill', cta: 'Full cost of citizenship', ctaPage: 'bc-cost',
    inputs: [{ id: 'n', label: 'Times you sit the test', def: 2, max: 10 }],
    run: (v) => {
      const k = clamp(v.n ?? 1, 1, 10); const c = ukCost({ adults: 1, children: 0, ilrToPay: 0, testAttempts: k, other: 0 });
      return { head: ['Test fees paid', money(T.fee * k)], rows: [['Fee per sitting', money(T.fee)], ['Of which retakes', money(T.fee * (k - 1))], ['Naturalisation, ceremony and tests', money(c.total)]], note: 'Every sitting is paid in full; gov.uk sets no limit on the number of attempts.' };
    },
  }),
  refund: () => ({
    title: 'Do I get my £50 back if I cancel?', cta: 'Booking rules step by step', ctaPage: 'lt-booking',
    inputs: [{ id: 'test', label: 'Date of your test', def: d('2026-11-20'), date: true }, { id: 'cancel', label: 'Date you cancel or move it', def: d('2026-11-16'), date: true }],
    run: (v) => {
      const last = (v.test ?? 0) - T.bookAtLeastDaysAhead, ok = (v.cancel ?? 0) <= last;
      return { head: ['Refund', ok ? `Yes, ${money(T.fee)}` : 'No refund'], rows: [['Last day for a refund', `${D(last)}, before the time of your test`], ['Rule', `at least ${T.bookAtLeastDaysAhead} days (${T.refundIfCancelHours} hours) before`], ['If the centre cancels', `claim within ${T.refundClaimMonths} months`]], note: 'On the last day, count in hours: 72 hours before the start time of your test.' };
    },
  }),
  bookdates: () => ({
    title: 'Key dates around a booking', cta: 'What happens on the day', ctaPage: 'lt-exam-day',
    inputs: [{ id: 'book', label: 'Date you book', def: d('2026-11-02'), date: true }, { id: 'test', label: 'Test date you want', def: d('2026-11-04'), date: true }],
    run: (v) => {
      const first = (v.book ?? 0) + T.bookAtLeastDaysAhead, ok = (v.test ?? 0) >= first;
      return { head: ['That test date', ok ? 'Can be booked' : 'Too soon'], rows: [['Earliest test date', D(first)], ['Last day to cancel with a refund', D((v.test ?? 0) - T.bookAtLeastDaysAhead)], ['Refund claim deadline (centre cancels)', D(dayNum(addMonths(isoOf(v.test ?? 0), T.refundClaimMonths)))]] };
    },
  }),
  brp: () => ({
    title: 'Can I still book with my expired BRP?', cta: 'All accepted ID', ctaPage: 'lt-id',
    inputs: [{ id: 'exp', label: 'Expiry date printed on the BRP', def: d('2024-12-31'), date: true }, { id: 'test', label: 'Date of your test', def: d('2026-11-20'), date: true }],
    run: (v) => {
      const lim = Math.min(dayNum(addMonths(isoOf(v.exp ?? 0), T.brpMonthsAfterExpiry)), d(T.brpDeadline));
      const ok = (v.test ?? 0) <= lim;
      return { head: ['BRP accepted for that test?', ok ? 'Yes' : 'No'], rows: [['Last test date with this BRP', D(lim)], ['24 months after expiry', D(dayNum(addMonths(isoOf(v.exp ?? 0), T.brpMonthsAfterExpiry)))], ['Fixed end date', dateL(T.brpDeadline)]], note: 'Whichever comes first. With an eVisa, book with a share code instead.' };
    },
  }),
  urn: () => ({
    title: 'Which pass reference do I have?', cta: 'After the result', ctaPage: 'lt-result',
    inputs: [{ id: 'test', label: 'Date you passed the test', def: d('2023-05-10'), date: true }],
    run: (v) => {
      const urn = (v.test ?? 0) >= d(T.urnSince);
      return { head: ['Your reference', urn ? 'Unique reference number' : 'Test reference ID'], rows: [['Change of system', dateL(T.urnSince)], ['Where you find it', urn ? 'the email sent with your result' : 'your pass notification letter'], ['Lost it?', urn ? 'contact the test helpline listed on gov.uk' : 'explain in a letter with your application']] };
    },
  }),
  studyplan: () => ({
    title: 'How many questions a day?', cta: 'Start the chapter practice', ctaPage: 'lt-practice',
    inputs: [{ id: 'days', label: 'Days until your test', def: 21, max: 365, unit: 'days' }, { id: 'rounds', label: 'Times through the bank', def: 2, max: 5 }],
    run: (v) => {
      const days = clamp(v.days ?? 1, 1, 365), rounds = clamp(v.rounds ?? 1, 1, 5), total = BANKSIZE.total * rounds, mocks = Math.max(1, Math.floor(days / 4));
      return { head: ['Questions per day', n0(Math.ceil(total / days))], rows: [['Bank on this site', `${n0(BANKSIZE.total)} questions`], ['Total to answer', n0(total)], ['Full mocks if one every 4 days', n0(mocks)]], note: 'A suggestion by Radif Partners, not an official study plan.' };
    },
  }),
  chaptershare: () => ({
    title: 'How much of a mock comes from one chapter?', cta: 'Questions of every chapter', ctaPage: 'lt-questions',
    inputs: [{ id: 'c', label: 'Chapter', def: 2, options: CHAPTERS.map((c, i) => ({ value: String(i), label: `${i + 1}. ${c}` })) }],
    run: (v) => {
      const i = clamp(v.c ?? 0, 0, CHAPTERS.length - 1), k = BANKSIZE.byChapter[i], share = k / BANKSIZE.total;
      return { head: ['Questions in this chapter', n0(k)], rows: [['Share of our bank', pct(share)], ['Expected in a 24-question mock', `about ${n0(Math.round(share * T.questions))}`], ['Whole bank', n0(BANKSIZE.total)]], note: 'Our mocks draw from each chapter in proportion to our bank. The official spread by chapter is not published.' };
    },
  }),
  pace: () => ({
    title: 'Am I on pace?', cta: 'Sit the timed mock', ctaPage: 'lt-mock',
    inputs: [{ id: 'done', label: 'Questions answered', def: 10, max: T.questions }, { id: 'min', label: 'Minutes used', def: 15, max: T.minutes, unit: 'min' }],
    run: (v) => {
      const done = clamp(v.done ?? 0, 0, T.questions), used = clamp(v.min ?? 0, 0, T.minutes), left = T.questions - done, rem = T.minutes - used;
      const per = left > 0 ? Math.floor((rem * 60) / left) : 0;
      return { head: ['Time per remaining question', left ? `${Math.floor(per / 60)} min ${per % 60} s` : 'All answered'], rows: [['Questions left', n0(left)], ['Minutes left', n0(rem)], ['Average allowed at the start', `${Math.floor((T.minutes * 60) / T.questions / 60)} min ${Math.round((T.minutes * 60) / T.questions) % 60} s`]] };
    },
  }),
  ready: () => ({
    title: 'Ready to book? Check your last mocks', cta: 'Book on gov.uk only', ctaPage: 'lt-booking',
    inputs: [{ id: 'a', label: 'Lowest of your last 3 mock scores', def: 19, max: T.questions, unit: `/ ${T.questions}` }, { id: 'b', label: 'Highest of your last 3', def: 22, max: T.questions, unit: `/ ${T.questions}` }],
    run: (v) => {
      const lo = clamp(Math.min(v.a ?? 0, v.b ?? 0), 0, T.questions), hi = clamp(Math.max(v.a ?? 0, v.b ?? 0), 0, T.questions), need = passNeeded();
      const verdict = lo >= need + 2 ? 'Ready to book' : lo >= need ? 'Close: one more week' : 'Keep practising';
      return { head: ['Our suggestion', verdict], rows: [['Pass mark', `${need} of ${T.questions}`], ['Lowest margin', `${lo - need >= 0 ? '+' : ''}${lo - need}`], ['Spread between mocks', plural(hi - lo, 'point')]], note: 'Rule of thumb by Radif Partners: the lowest of three fresh mocks at least two points above the mark.' };
    },
  }),
  qstart: () => ({
    title: 'Where does my qualifying period start?', cta: 'Find my first date to apply', ctaPage: 'bc-date',
    inputs: [{ id: 'on', label: 'Date the Home Office receives your application', def: d('2026-12-01'), date: true }, { id: 'r', label: 'Route', def: 0, options: ROUTES }],
    run: (v) => {
      const route = routeOf(v.r ?? 0), R = routeRules(route), on = isoOf(v.on ?? 0), start = qualifyingStart(on, route);
      return { head: ['You must be in the UK on', dateL(start)], rows: [['Period', `${R.years} years`], ['Absences allowed in it', `${n0(R.maxAbsenceDays)} days`], ['Last 12 months start', dateL(addDays(addMonths(on, -12), 1))]], note: 'The day after the application date minus the period, as in the guidance’s example (1 September 2022 → 2 September 2017).' };
    },
  }),
  absband: () => ({
    title: 'How the Home Office treats my absences', cta: 'Count them trip by trip', ctaPage: 'bc-date',
    inputs: [{ id: 'r', label: 'Route', def: 0, options: ROUTES }, { id: 'tot', label: 'Days abroad in the whole period', def: 470, max: 2000, unit: 'days' }, { id: 'y', label: 'Of which in the last 12 months', def: 95, max: 366, unit: 'days' }],
    run: (v) => {
      const route = routeOf(v.r ?? 0), R = routeRules(route), tot = clamp(v.tot ?? 0, 0, 2000), y = clamp(v.y ?? 0, 0, 366);
      const b = absenceBand(route, tot), fy = finalYearBand(y);
      const T1: Record<string, string> = { within: 'Within the limit', discretion: 'Over by 30 days or less: discretion normally used', conditions: 'Discretion only with strong UK ties and a listed reason', beyond: 'Normally refused' };
      const T2: Record<string, string> = { within: 'within 90', discretion: '91 to 100: discretion used', strongLinks: '101 to 180: needs strong links', exceptional: 'over 180: exceptional only' };
      return { head: ['Whole period', T1[b]], rows: [['Limit for this route', `${n0(R.maxAbsenceDays)} days`], ['Band with conditions', `${n0(R.band[0])} to ${n0(R.band[1])} days`], ['Last 12 months', T2[fy]]], note: 'Bands of the Home Office nationality guidance (version 16.0). A caseworker decides; nothing here is a decision.' };
    },
  }),
  natcost: () => ({
    title: 'Naturalisation cost for my household', cta: 'Every line of the cost', ctaPage: 'bc-cost',
    inputs: [{ id: 'a', label: 'Adults applying', def: 2, max: 10 }, { id: 'p', label: 'Priority service?', def: 0, options: yn }],
    run: (v) => {
      const a = clamp(v.a ?? 1, 1, 10), c = ukCost({ adults: a, children: 0, ilrToPay: 0, testAttempts: 0, priority: v.p ? a : 0, other: 0 });
      return { head: ['Home Office fees', money(c.total)], rows: [['Per adult', money(F.naturalisation + F.ceremony + (v.p ? F.priority : 0))], ['Of which ceremony', money(F.ceremony)], ['Fees table in force from', dateL(F.effective)]] };
    },
  }),
  priority: () => ({
    title: 'Standard or priority: when could the decision come?', cta: 'Track the steps after you apply', ctaPage: 'bc-processing',
    inputs: [{ id: 'on', label: 'Date you apply (and give biometrics)', def: d('2026-11-09'), date: true }],
    run: (v) => {
      const on = v.on ?? 0;
      return { head: ['Priority target', `from ${D(addWorkingDays(on, F.priorityWorkingDays))}`], rows: [['Priority extra fee', money(F.priority)], ['Standard: usually within', `${N.decisionUsuallyMonths} months, by ${D(dayNum(addMonths(isoOf(on), N.decisionUsuallyMonths)))}`], ['Priority: usually within', `${F.priorityWorkingDays} working days`]], note: 'Working days counted Monday to Friday; bank holidays push the date later. Targets, not guarantees.' };
    },
  }),
  childreg: () => ({
    title: 'Registering children: the fees', cta: 'Total for the whole family', ctaPage: 'bc-cost',
    inputs: [{ id: 'k', label: 'Children to register', def: 2, max: 10 }, { id: 'o', label: 'Of whom 18 by the decision', def: 0, max: 10 }],
    run: (v) => {
      const k = clamp(v.k ?? 0, 0, 10), o = clamp(v.o ?? 0, 0, k);
      return { head: ['Fees to pay', money(k * F.registrationChild + o * F.ceremony)], rows: [['Per child', money(F.registrationChild)], ['Ceremony for those 18 or over', `${money(F.ceremony)} each`], ['Child of an Irish route', money(F.registrationIrishChild)]] };
    },
  }),
  referee: () => ({
    title: 'Can this person be my referee?', cta: 'All referee rules', ctaPage: 'bc-referees',
    inputs: [{ id: 'y', label: 'Years they have known you', def: 4, max: 60, unit: 'yrs' }, { id: 'rel', label: 'Related to you or the other referee?', def: 0, options: yn }, { id: 'pro', label: 'Professional person?', def: 1, options: yn }, { id: 'brit', label: 'Holds a British passport?', def: 0, options: yn }, { id: 'age', label: 'Their age', def: 40, max: 110, unit: 'yrs' }],
    run: (v) => {
      const base = (v.y ?? 0) >= N.refereeKnownYears && !v.rel;
      const first = base && !!v.pro, second = base && !!v.brit && (!!v.pro || (v.age ?? 0) > N.refereeMinAge);
      return { head: ['As a referee', second ? 'Either referee' : first ? 'First referee only' : 'Not accepted'], rows: [['Known for at least', plural(N.refereeKnownYears, 'year')], ['First referee', 'professional, any nationality'], ['Second referee', `British passport, professional or over ${N.refereeMinAge}`]], note: 'Neither may be related to you or to each other, act as your agent, or work for the Home Office.' };
    },
  }),
  ceremony: () => ({
    title: 'Deadline to attend the ceremony', cta: 'What happens at the ceremony', ctaPage: 'bc-ceremony',
    inputs: [{ id: 'inv', label: 'Date of your invitation', def: d('2027-02-15'), date: true }],
    run: (v) => {
      const last = (v.inv ?? 0) + N.ceremonyWithinDays;
      return { head: ['Attend no later than', D(last)], rows: [['Window', `${N.ceremonyWithinDays} days from the invitation`], ['Ceremony fee (paid with the application)', money(F.ceremony)], ['If you miss it without good reason', 'refused, apply again']], note: 'The exact date is written in your invitation: it is the one that counts.' };
    },
  }),
  timeline: () => ({
    title: 'My application timeline', cta: 'How to apply', ctaPage: 'bc-application',
    inputs: [{ id: 'on', label: 'Date you submit the application', def: d('2026-11-09'), date: true }],
    run: (v) => {
      const on = isoOf(v.on ?? 0);
      return { head: ['Biometrics by', dateL(addDays(on, N.biometricsDays))], rows: [['Decision usually by', dateL(addMonths(on, N.decisionUsuallyMonths))], ['Then the ceremony', `within ${N.ceremonyWithinDays} days of the invitation`], ['Missed biometrics deadline', 'application invalid']], note: `Biometrics within ${N.biometricsDays} days of submitting; decision usually within ${N.decisionUsuallyMonths} months (Guide AN).` };
    },
  }),
  seltvalid: () => ({
    title: 'Is my English test result still valid?', cta: 'Approved tests and scores', ctaPage: 'en-selt',
    inputs: [{ id: 'aw', label: 'Date the test was awarded', def: d('2025-01-20'), date: true }, { id: 'on', label: 'Date you will apply', def: d('2026-12-01'), date: true }, { id: 'ilr', label: 'Already used for your ILR?', def: 0, options: yn }],
    run: (v) => {
      const exp = dayNum(addYears(isoOf(v.aw ?? 0), E.seltValidYears)), ok = !!v.ilr || (v.on ?? 0) <= exp;
      return { head: ['Valid for this application?', ok ? 'Yes' : 'No, take a new test'], rows: [['Two-year limit', D(exp)], ['Used for ILR', v.ilr ? 'no time limit for citizenship' : 'no'], ['Level needed', `${E.level}, ${E.skills}`]], note: 'Guide AN: a B1 speaking and listening test used for settlement can be relied on again for naturalisation.' };
    },
  }),
  englishroute: () => ({
    title: 'How do I meet the English requirement?', cta: 'The B1 test for citizenship', ctaPage: 'en-test',
    inputs: [{ id: 'age', label: 'Your age', def: 35, max: 120, unit: 'yrs' }, { id: 'nat', label: 'National of a majority English-speaking country?', def: 0, options: yn }, { id: 'deg', label: 'Degree taught in English?', def: 0, options: [{ value: '0', label: 'No' }, { value: '1', label: 'Yes, from a UK university' }, { value: '2', label: 'Yes, from abroad (Ecctis check needed)' }] }, { id: 'cond', label: 'Long-term condition that prevents it?', def: 0, options: yn }],
    run: (v) => {
      const how = (v.age ?? 0) >= E.exemptFromAge ? `Exempt: ${E.exemptFromAge} or over` : v.cond ? 'Exempt with medical evidence' : v.nat ? 'By nationality: passport' : v.deg === 1 ? 'By your UK degree' : v.deg === 2 ? 'By degree with Ecctis statements' : 'Pass a B1 speaking and listening test';
      return { head: ['Your way to meet it', how], rows: [['Level', E.level], ['Skills tested', E.skills], ['Life in the UK Test', 'still needed (separate)']] };
    },
  }),
  b1tests: () => ({
    title: 'The B1 test of each provider', cta: 'Find a test centre', ctaPage: 'en-centres',
    inputs: [{ id: 'p', label: 'Provider', def: 0, options: E.b1Tests.map((t, i) => ({ value: String(i), label: t.provider })) }],
    run: (v) => {
      const t = E.b1Tests[clamp(v.p ?? 0, 0, E.b1Tests.length - 1)];
      return { head: ['Test to book', t.name], rows: [['Minimum result', t.grade], ['On the approved list since', dateL(t.since)], ['Result valid', plural(E.seltValidYears, 'year')]] };
    },
  }),
  b2rule: () => ({
    title: 'Which English level applies to me?', cta: 'What is changing', ctaPage: 'bc-changes',
    inputs: [{ id: 'k', label: 'Application', def: 0, options: [{ value: '0', label: 'British citizenship (naturalisation)' }, { value: '1', label: 'Settlement (ILR)' }] }, { id: 'on', label: 'Date you apply', def: d('2027-04-01'), date: true }],
    run: (v) => {
      const after = (v.on ?? 0) >= d(E.settlementB2From), lvl = v.k ? (after ? 'B2 on many routes' : 'B1') : 'B1';
      return { head: ['Level', lvl], rows: [['Citizenship', 'B1, unchanged'], ['Settlement from', `${dateL(E.settlementB2From)}: B2 on many routes`], ['Source', 'HC 1691, 5 March 2026']], note: v.k && after ? 'Check the rules of your own route: the change does not cover every settlement route in the same way.' : undefined };
    },
  }),
  ilrlost: () => ({
    title: 'Will a long stay abroad cost me my status?', cta: 'Settlement and the test', ctaPage: 'ilr',
    inputs: [{ id: 'out', label: 'Date you leave the UK', def: d('2026-06-01'), date: true }, { id: 'back', label: 'Date you plan to return', def: d('2028-03-01'), date: true }, { id: 's', label: 'Your status', def: 0, options: [{ value: '0', label: 'ILR' }, { value: '1', label: 'EU settled status' }, { value: '2', label: 'EU settled status, Swiss citizen' }] }],
    run: (v) => {
      const yrs = v.s === 0 ? P.uk.settlement.ilrLostAfterYearsAbroad : v.s === 1 ? P.uk.settlement.settledStatusLostAfterYears : P.uk.settlement.settledStatusSwissYears;
      const lim = dayNum(addYears(isoOf(v.out ?? 0), yrs)), away = Math.max(0, (v.back ?? 0) - (v.out ?? 0) - 1), ok = (v.back ?? 0) <= lim;
      return { head: ['Status kept?', ok ? 'Yes, on these dates' : 'At risk: lost after the limit'], rows: [['Continuous time abroad', `${n0(away)} days`], ['Limit', plural(yrs, 'year') + ' in a row'], ['Return no later than', D(lim)]], note: 'Long absences also count against the residence rule for citizenship.' };
    },
  }),
  ilrwait: () => ({
    title: 'When can I apply after getting ILR?', cta: 'Check every condition by date', ctaPage: 'bc-date',
    inputs: [{ id: 'ilr', label: 'Date ILR or settled status was granted', def: d('2026-03-02'), date: true }, { id: 'r', label: 'Route', def: 0, options: ROUTES }],
    run: (v) => {
      const route = routeOf(v.r ?? 0), R = routeRules(route), at = dayNum(addMonths(isoOf(v.ilr ?? 0), R.ilrHeldMonths));
      return { head: ['Settlement wait ends', D(at)], rows: [['Wait after ILR', R.ilrHeldMonths ? plural(R.ilrHeldMonths, 'month') : 'none for a spouse'], ['Also needed', `${R.years} years, at most ${n0(R.maxAbsenceDays)} days away`], ['ILR fee (if not yet paid)', money(F.ilr)]] };
    },
  }),
  fees: () => ({
    title: 'Home Office nationality fees', cta: 'Cost for my household', ctaPage: 'bc-cost',
    inputs: [{ id: 's', label: 'Service', def: 0, options: [
      { value: '0', label: 'Naturalisation (adult)' }, { value: '1', label: 'Registration (adult)' }, { value: '2', label: 'Registration (child)' }, { value: '3', label: 'Citizenship ceremony' }, { value: '4', label: 'Renunciation of British citizenship' }, { value: '5', label: 'Nationality review' }, { value: '6', label: 'Letter confirming status' }, { value: '7', label: 'Reissued certificate' }, { value: '8', label: 'Oath outside a ceremony' }, { value: '9', label: 'Certificate of entitlement (right of abode)' }] }],
    run: (v) => {
      const k = [F.naturalisation, F.registrationAdult, F.registrationChild, F.ceremony, F.renunciation, F.review, F.statusLetter, F.reissuedCertificate, F.oathNotAtCeremony, F.rightOfAbode][clamp(v.s ?? 0, 0, 9)];
      return { head: ['Fee', money(k)], rows: [['Fees table in force from', dateL(F.effective)], ['Life in the UK Test', `${money(T.fee)} a sitting`], ['Priority (citizenship)', `${money(F.priority)} extra`]] };
    },
  }),
  passport: () => ({
    title: 'First British passports for the family', cta: 'After citizenship', ctaPage: 'bc-after',
    inputs: [{ id: 'a', label: 'Adults (16 and over)', def: 2, max: 10 }, { id: 'k', label: 'Children under 16', def: 1, max: 10 }],
    run: (v) => {
      const a = clamp(v.a ?? 0, 0, 10), k = clamp(v.k ?? 0, 0, 10);
      return { head: ['Online, standard passports', money(a * P.uk.passport.adultOnline + k * P.uk.passport.childOnline)], rows: [['Adult, online', money(P.uk.passport.adultOnline)], ['Adult, paper form', money(P.uk.passport.adultPaper)], ['Child, online', money(P.uk.passport.childOnline)]] };
    },
  }),
  goodchar: () => ({
    title: 'What must I declare on the form?', cta: 'Good character rules', ctaPage: 'bc-good-character',
    inputs: [{ id: 'nhs', label: 'Unpaid NHS debt', def: 0, max: 100000, unit: '£' }, { id: 'ct', label: 'Ever failed to pay council tax?', def: 0, options: yn }, { id: 'bk', label: 'Ever declared bankrupt?', def: 0, options: yn }],
    run: (v) => {
      const items = [(v.nhs ?? 0) >= N.nhsDebt ? 'NHS debt' : '', v.ct ? 'council tax' : '', v.bk ? 'bankruptcy' : ''].filter(Boolean);
      return { head: ['To declare', items.length ? items.join(', ') : 'Nothing from these three'], rows: [['NHS debt threshold', `${money(N.nhsDebt)} or more`], ['Undischarged bankrupt', 'application unlikely to succeed'], ['Convictions, civil judgments', 'declare them all']], note: 'Declaring is required; it is not a refusal in itself. Leaving it out can be.' };
    },
  }),
  eu: () => ({
    title: 'EU citizen: can I apply yet?', cta: 'Find my exact date', ctaPage: 'bc-eu',
    inputs: [{ id: 's', label: 'Status under the EU Settlement Scheme', def: 1, options: [{ value: '0', label: 'Pre-settled status' }, { value: '1', label: 'Settled status' }] }, { id: 'g', label: 'Date settled status was granted', def: d('2025-09-01'), date: true }, { id: 'r', label: 'Route', def: 0, options: ROUTES }],
    run: (v) => {
      if (!v.s) return { head: ['Citizenship now?', 'No: settled status first'], rows: [['Pre-settled status', 'is not settlement'], ['Next step', 'apply for settled status'], ['Then wait (5-year route)', plural(N.route61.ilrHeldMonths, 'month')]] };
      const route = routeOf(v.r ?? 0), R = routeRules(route), at = dayNum(addMonths(isoOf(v.g ?? 0), R.ilrHeldMonths));
      return { head: ['Settlement wait ends', D(at)], rows: [['Route', route === '6(1)' ? '5 years' : '3 years, spouse'], ['Absences allowed', `${n0(R.maxAbsenceDays)} days`], ['Test and English', 'both still needed']] };
    },
  }),
  routes: () => ({
    title: 'The two naturalisation routes compared', cta: 'Date for my route', ctaPage: 'bc-date',
    inputs: [{ id: 'r', label: 'Route', def: 0, options: ROUTES }],
    run: (v) => {
      const route = routeOf(v.r ?? 0), R = routeRules(route);
      return { head: [route === '6(1)' ? 'Section 6(1)' : 'Section 6(2)', `${R.years} years`], rows: [['Days abroad allowed', n0(R.maxAbsenceDays)], ['In the last 12 months', n0(R.maxAbsenceLast12m)], ['Wait after ILR', R.ilrHeldMonths ? plural(R.ilrHeldMonths, 'month') : 'none'], ['Future intention to live in the UK', route === '6(1)' ? 'required' : 'not required']] };
    },
  }),
  dates: () => ({
    title: 'How long ago was it?', cta: 'Practise the history chapter', ctaPage: 'lt-q-history',
    inputs: [{ id: 'y', label: 'Year of the event', def: 1066, max: 2030 }],
    run: (v) => {
      const y = clamp(v.y ?? 0, 0, 2030), ago = P.year - y;
      const cen = Math.floor((y - 1) / 100) + 1, suf = cen % 100 >= 11 && cen % 100 <= 13 ? 'th' : ['th', 'st', 'nd', 'rd'][cen % 10] ?? 'th';
      const c = y > 0 ? `${cen}${suf} century` : '';
      return { head: ['Years ago', n0(ago)], rows: [['Century', c], ['Decade', `${Math.floor(y / 10) * 10}s`]], note: 'A memory aid: placing a date in its century is often enough to rule out two wrong options.' };
    },
  }),
};
const ALL: Record<string, () => MiniSpec> = { ...SPECS, ...EXTRA_A, ...EXTRA_B };
export function getSpec(kind: string, _lang: 'en' = 'en'): MiniSpec {
  const f = ALL[kind];
  if (!f) throw new Error(`Unknown mini-tool: ${kind}`);
  return f();
}
export const SPEC_KINDS = Object.keys(ALL);
