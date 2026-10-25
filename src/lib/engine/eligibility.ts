/**
 * Earliest date to apply for British citizenship by naturalisation (sections 6(1) and 6(2) of the
 * British Nationality Act 1981) and how the Home Office treats excess absences.
 *
 * Pure engine: every limit comes from params-2026.json (P); "today" is an argument. Only the residence
 * condition, the settled-status wait and age are judged: good character, English, the Life in the UK
 * Test and future intentions are listed as conditions, never decided here.
 */
import P from '../../data/params-2026.json';
import { type Iso, type Trip, addDays, addMonths, addYears, dayNum, isAbroadAllDay, maxIso, totalAbsent } from './dates';

export interface Check {
  id: string;
  ok: boolean;
  value?: number | Iso | null;
  limit?: number | Iso;
  /** within `NEAR` days of the limit: the result depends on the exact travel record */
  near?: boolean;
}
export interface Verdict { on: Iso; ok: boolean; checks: Check[] }
export interface Earliest { date: Iso | null; verdictToday: Verdict; verdictAtDate: Verdict | null }

const NEAR = 5;
const HORIZON_DAYS = 365 * 20;
export type Route = '6(1)' | '6(2)';
export const routeRules = (r: Route) => (r === '6(1)' ? P.uk.naturalisation.route61 : P.uk.naturalisation.route62spouse);

export interface UkInput {
  route: Route;
  /** first day of residence in the UK */
  firstEntry: Iso;
  /** date ILR, settled status or ILE was granted (null if not yet) */
  ilr: Iso | null;
  birth?: Iso | null;
  trips: Trip[];
}
/** First day of the qualifying period: the day after the application date minus the period (guidance: 1 Sep 2022 → 2 Sep 2017). */
export const qualifyingStart = (on: Iso, route: Route) => addDays(addYears(on, -routeRules(route).years), 1);

export function ukVerdict(x: UkInput, on: Iso): Verdict {
  const R = routeRules(x.route);
  const start = qualifyingStart(on, x.route);
  const abs = totalAbsent(x.trips, start, on);
  const l12 = totalAbsent(x.trips, addDays(addMonths(on, -12), 1), on);
  const checks: Check[] = [
    { id: 'presentAtStart', ok: x.firstEntry <= start && !isAbroadAllDay(x.trips, start), value: x.firstEntry, limit: start },
    { id: 'absences', ok: abs <= R.maxAbsenceDays, value: abs, limit: R.maxAbsenceDays, near: Math.abs(R.maxAbsenceDays - abs) <= NEAR },
    { id: 'absences12m', ok: l12 <= R.maxAbsenceLast12m, value: l12, limit: R.maxAbsenceLast12m, near: Math.abs(R.maxAbsenceLast12m - l12) <= NEAR },
    { id: 'settled', ok: x.ilr !== null && x.ilr <= addMonths(on, -R.ilrHeldMonths) && x.ilr <= on, value: x.ilr, limit: addMonths(on, -R.ilrHeldMonths) },
  ];
  if (x.birth) checks.push({ id: 'age', ok: addYears(x.birth, P.uk.naturalisation.minAge) <= on, value: x.birth, limit: addYears(on, -P.uk.naturalisation.minAge) });
  return { on, ok: checks.every((c) => c.ok), checks };
}
function search(today: Iso, start: Iso, test: (on: Iso) => Verdict): Earliest {
  const verdictToday = test(today);
  let d = maxIso(today, start);
  const stop = dayNum(today) + HORIZON_DAYS;
  while (dayNum(d) <= stop) {
    const v = test(d);
    if (v.ok) return { date: d, verdictToday, verdictAtDate: v };
    d = addDays(d, 1);
  }
  return { date: null, verdictToday, verdictAtDate: null };
}
export function ukEarliest(x: UkInput, today: Iso): Earliest {
  const R = routeRules(x.route);
  const starts = [addDays(addYears(x.firstEntry, R.years), -1)];
  if (x.ilr) starts.push(addMonths(x.ilr, R.ilrHeldMonths));
  if (x.birth) starts.push(addYears(x.birth, P.uk.naturalisation.minAge));
  return search(today, maxIso(...starts), (on) => ukVerdict(x, on));
}

/**
 * How the nationality guidance (version 16.0, section on absences) treats a total of absences over the
 * qualifying period. Bands, never a decision:
 *  'within'      at or under the limit (450 / 270)
 *  'discretion'  over by 30 days or less: caseworkers "must exercise discretion" unless other grounds
 *  'conditions'  in the 480–900 (6(1)) or 300–540 (6(2)) band: discretion only with home, work, family
 *                and finances established in the UK plus one listed reason
 *  'beyond'      above 900 / 540: "highly unlikely", normally refused
 * (limit + 30 = 480 / 300: the bands follow on with no gap.)
 */
export type Band = 'within' | 'discretion' | 'conditions' | 'beyond';
export function absenceBand(route: Route, days: number): Band {
  const R = routeRules(route);
  const within = P.uk.naturalisation.discretionWithinDays;
  if (days <= R.maxAbsenceDays) return 'within';
  if (days <= R.maxAbsenceDays + within) return 'discretion';
  if (days <= R.band[1]) return 'conditions';
  return 'beyond';
}
/**
 * Final 12 months (guidance, "Absences in the final year"): up to 90 normal; 91–100 discretion
 * exercised; 101–180 discretion with strong links (family, work, home); over 180 only with the home
 * made in the UK, and exceptional circumstances if the full-period rule is not met.
 */
export type FinalBand = 'within' | 'discretion' | 'strongLinks' | 'exceptional';
export function finalYearBand(days: number): FinalBand {
  const F = P.uk.naturalisation.finalYear;
  if (days <= F.normal) return 'within';
  if (days <= F.discretion) return 'discretion';
  if (days <= F.strongLinks) return 'strongLinks';
  return 'exceptional';
}
/** Over by 30 days or less on the full period, every other check met. */
export function ukWithinDiscretion(v: Verdict): boolean {
  const a = v.checks.find((c) => c.id === 'absences')!;
  const others = v.checks.filter((c) => c.id !== 'absences').every((c) => c.ok);
  return !a.ok && others && (a.value as number) - (a.limit as number) <= P.uk.naturalisation.discretionWithinDays;
}
