/**
 * Official cost of becoming British, line by line. Amounts: params-2026.json (Home Office fees table
 * in force from 8 October 2026; passport fees on gov.uk). What has no official scale (English test,
 * translations, travel) is typed by the visitor, never estimated here.
 */
import P from '../../data/params-2026.json';

export interface Line { id: string; amount: number; each?: number; count?: number }
export interface Cost { lines: Line[]; total: number }
const sum = (lines: Line[]) => lines.reduce((s, l) => s + l.amount, 0);

export interface UkCostInput {
  adults: number;
  /** children registered as British citizens (form MN1) */
  children: number;
  /** people who still need indefinite leave to remain first */
  ilrToPay: number;
  /** Life in the UK Test sittings per adult (1 = pass first time, 0 = already passed or exempt) */
  testAttempts: number;
  /** optional priority service for each adult application */
  priority?: number;
  /** first adult passports, applied for online */
  passports?: number;
  /** costs typed by the visitor (English test, translations…) */
  other: number;
}
export function ukCost(x: UkCostInput): Cost {
  const F = P.uk.fees;
  const lines: Line[] = [
    { id: 'naturalisation', each: F.naturalisation, count: x.adults, amount: F.naturalisation * x.adults },
    { id: 'ceremony', each: F.ceremony, count: x.adults, amount: F.ceremony * x.adults },
  ];
  if (x.testAttempts > 0 && x.adults > 0) lines.push({ id: 'lifeInUkTest', each: F.lifeInUkTest, count: x.adults * x.testAttempts, amount: F.lifeInUkTest * x.adults * x.testAttempts });
  if (x.children > 0) lines.push({ id: 'registrationChild', each: F.registrationChild, count: x.children, amount: F.registrationChild * x.children });
  if (x.ilrToPay > 0) lines.push({ id: 'ilr', each: F.ilr, count: x.ilrToPay, amount: F.ilr * x.ilrToPay });
  if (x.priority && x.priority > 0) lines.push({ id: 'priority', each: F.priority, count: x.priority, amount: F.priority * x.priority });
  if (x.passports && x.passports > 0) lines.push({ id: 'passport', each: P.uk.passport.adultOnline, count: x.passports, amount: P.uk.passport.adultOnline * x.passports });
  if (x.other > 0) lines.push({ id: 'other', amount: x.other });
  return { lines, total: sum(lines) };
}
