import { describe, expect, it } from 'vitest';
import P from '../src/data/params-2026.json';
import { absentDaysIn, addYears, checkTrips, totalAbsent } from '../src/lib/engine/dates';
import { absenceBand, finalYearBand, qualifyingStart, ukEarliest, ukVerdict, ukWithinDiscretion } from '../src/lib/engine/eligibility';
import { buildExam, buildPractice, lintBank, numberedSeed, passNeeded, score, type Question } from '../src/lib/engine/exam';
import { ukCost } from '../src/lib/engine/cost';
import { getSpec, SPEC_KINDS } from '../src/lib/mini-specs';
import { CHAPTERS } from '../src/lib/banks';
import UK from '../src/data/questions/uk.json';
import SIZE from '../src/data/bank-size.json';

const bank = UK.questions as Question[];

describe('absences: whole days only (nationality guidance)', () => {
  it('left on 22 September, back on 23 September → no absence (guidance example)', () => {
    expect(absentDaysIn({ out: '2025-09-22', back: '2025-09-23' }, '2020-01-01', '2030-01-01')).toBe(0);
  });
  it('Monday → Friday: Tuesday, Wednesday, Thursday', () => {
    expect(absentDaysIn({ out: '2026-10-05', back: '2026-10-09' }, '2020-01-01', '2030-01-01')).toBe(3);
  });
  it('a trip is cut at the edges of the window', () => {
    expect(absentDaysIn({ out: '2026-01-01', back: '2026-01-31' }, '2026-01-10', '2026-01-19')).toBe(10);
  });
  it('29 February → 28 February', () => { expect(addYears('2024-02-29', 1)).toBe('2025-02-28'); });
  it('overlapping trips are refused', () => {
    expect(checkTrips([{ out: '2026-01-01', back: '2026-01-10' }, { out: '2026-01-05', back: '2026-01-07' }])).toMatch(/chevauchent/);
  });
});

describe('naturalisation, sections 6(1) and 6(2)', () => {
  it('guidance example: application on 1 September 2022 → in the UK on 2 September 2017', () => {
    expect(qualifyingStart('2022-09-01', '6(1)')).toBe('2017-09-02');
    expect(ukVerdict({ route: '6(1)', firstEntry: '2017-09-02', ilr: '2021-01-01', trips: [] }, '2022-09-01').ok).toBe(true);
    expect(ukVerdict({ route: '6(1)', firstEntry: '2017-09-03', ilr: '2021-01-01', trips: [] }, '2022-09-01').ok).toBe(false);
  });
  it('Guide AN example, spouse: received 5 May 2021 → present on 6 May 2018', () => {
    expect(qualifyingStart('2021-05-05', '6(2)')).toBe('2018-05-06');
  });
  it('gov.uk example: received 20 June 2022, away 10 to 25 June 2017 → wait until 24 June 2022', () => {
    const x = { route: '6(1)' as const, firstEntry: '2015-01-01', ilr: '2019-01-01', trips: [{ out: '2017-06-10', back: '2017-06-25' }] };
    expect(ukVerdict(x, '2022-06-20').ok).toBe(false);
    expect(ukEarliest(x, '2022-06-20').date).toBe('2022-06-24');
  });
  it('ILR held 12 months, except for the spouse of a British citizen', () => {
    const base = { firstEntry: '2018-01-01', ilr: '2026-03-01', trips: [] };
    expect(ukEarliest({ route: '6(1)', ...base }, '2026-10-25').date).toBe('2027-03-01');
    expect(ukEarliest({ route: '6(2)', ...base }, '2026-10-25').date).toBe('2026-10-25');
  });
  it('451 days abroad over 5 years → over the limit, within the 30-day discretion', () => {
    const trips = [{ out: '2019-01-01', back: '2020-03-28' }];
    expect(totalAbsent(trips, '2018-01-01', '2026-01-01')).toBe(451);
    const v = ukVerdict({ route: '6(1)', firstEntry: '2015-01-01', ilr: '2020-06-01', trips }, '2023-10-01');
    expect(v.ok).toBe(false);
    expect(ukWithinDiscretion(v)).toBe(true);
  });
  it('more than 90 days abroad in the last 12 months moves the date', () => {
    const trips = [{ out: '2026-06-01', back: '2026-09-15' }];
    const x = { route: '6(1)' as const, firstEntry: '2018-01-01', ilr: '2023-01-01', trips };
    const r = ukEarliest(x, '2026-10-25');
    expect(r.verdictToday.ok).toBe(false);
    expect(ukVerdict(x, r.date!).ok).toBe(true);
    expect(ukVerdict(x, '2026-10-25').checks.find((c) => c.id === 'absences12m')!.value).toBe(105);
  });
  it('absence bands of the guidance', () => {
    expect(absenceBand('6(1)', 450)).toBe('within');
    expect(absenceBand('6(1)', 480)).toBe('discretion');
    expect(absenceBand('6(1)', 481)).toBe('conditions');
    expect(absenceBand('6(1)', 900)).toBe('conditions');
    expect(absenceBand('6(1)', 901)).toBe('beyond');
    expect(absenceBand('6(2)', 300)).toBe('discretion');
    expect(absenceBand('6(2)', 540)).toBe('conditions');
    expect(finalYearBand(90)).toBe('within');
    expect(finalYearBand(100)).toBe('discretion');
    expect(finalYearBand(180)).toBe('strongLinks');
    expect(finalYearBand(181)).toBe('exceptional');
  });
});

describe('mock tests', () => {
  it('24 questions, 18 to pass', () => {
    expect(passNeeded()).toBe(18);
    const e = buildExam(bank, 42, CHAPTERS);
    expect(e.questions).toHaveLength(P.uk.test.questions);
    expect(new Set(e.questions.map((q) => q.id)).size).toBe(24);
    expect(score(e, e.questions.map((q, i) => (i < 18 ? q.answer : (q.answer + 1) % q.options.length))).pass).toBe(true);
    expect(score(e, e.questions.map((q, i) => (i < 17 ? q.answer : null))).pass).toBe(false);
  });
  it('every chapter appears in a mock, same seed same test', () => {
    const e = buildExam(bank, numberedSeed(3), CHAPTERS);
    for (const c of CHAPTERS) expect(e.questions.some((q) => q.chapter === c)).toBe(true);
    expect(buildExam(bank, numberedSeed(3), CHAPTERS).questions.map((q) => q.id)).toEqual(e.questions.map((q) => q.id));
  });
  it('numbered tests 1 to 16 are all different', () => {
    const keys = Array.from({ length: 16 }, (_, k) => buildExam(bank, numberedSeed(k + 1), CHAPTERS).questions.map((q) => q.id).sort().join());
    expect(new Set(keys).size).toBe(16);
  });
  it('practice set stays in its chapter', () => {
    expect(buildPractice(bank, CHAPTERS[2], 7, 10).every((q) => q.chapter === CHAPTERS[2])).toBe(true);
  });
});

describe('official cost (fees table of 8 October 2026)', () => {
  it('one adult: £1,709 + £130 ceremony + £50 test = £1,889', () => {
    expect(ukCost({ adults: 1, children: 0, ilrToPay: 0, testAttempts: 1, other: 0 }).total).toBe(1889);
  });
  it('priority adds £500 per adult, a child registration is £1,000', () => {
    expect(ukCost({ adults: 2, children: 1, ilrToPay: 0, testAttempts: 0, priority: 2, other: 0 }).total).toBe(2 * 1839 + 1000 + 1000);
  });
});

describe('mini-tools', () => {
  it('every mini-tool runs with its defaults', () => {
    for (const k of SPEC_KINDS) {
      const s = getSpec(k);
      const v = Object.fromEntries(s.inputs.map((i) => [i.id, i.def]));
      const o = s.run(v);
      expect(o.head[1], k).toBeTruthy();
      expect(JSON.stringify(o), k).not.toMatch(/NaN|undefined|Invalid/);
    }
  });
  it('bank-size.json matches the bank', () => {
    expect(SIZE.total).toBe(bank.length);
    expect(SIZE.byChapter).toEqual(CHAPTERS.map((c) => bank.filter((q) => q.chapter === c).length));
  });
});
