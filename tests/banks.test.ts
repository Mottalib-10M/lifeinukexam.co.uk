import { describe, expect, it } from 'vitest';
import { lintBank, type Question } from '../src/lib/engine/exam';
import { CHAPTERS } from '../src/lib/banks';
import UK from '../src/data/questions/uk.json';

const bank = UK.questions as Question[];
describe('question bank', () => {
  it('clean bank: unique ids and texts, answer among the options, source, explanation', () => {
    expect(lintBank(bank)).toEqual([]);
  });
  it('every question in a known chapter, at least 40 per chapter', () => {
    for (const q of bank) expect(CHAPTERS).toContain(q.chapter);
    for (const c of CHAPTERS) expect(bank.filter((q) => q.chapter === c).length).toBeGreaterThanOrEqual(40);
  });
  it('no em dash, right answers spread across positions', () => {
    for (const q of bank) expect(JSON.stringify(q)).not.toMatch(/—/);
    const four = bank.filter((q) => q.options.length === 4);
    for (let i = 0; i < 4; i++) expect(four.filter((q) => q.answer === i).length).toBeGreaterThan(four.length * 0.15);
  });
});
