/**
 * Mock tests: reproducible draw (seed in the shared link) and marking with the gov.uk rule
 * (24 questions, 75% or more, so 18 correct), read from params-2026.json. The questions are written by
 * Radif Partners from the facts of the official handbook (data/questions/uk.json); none is copied from
 * a book, an app or another site.
 */
import P from '../../data/params-2026.json';

export interface Question {
  id: string;
  country: 'uk';
  lang: 'en';
  /** chapter of the handbook where the fact sits */
  chapter: string;
  q: string;
  options: string[];
  answer: number;
  explain: string;
  /** where to check the fact: official document + section */
  ref: { doc: string; section: string; url: string };
}
export interface Exam { seed: number; questions: Question[] }
export interface Score { correct: number; total: number; pass: boolean; needed: number }

/** mulberry32: same seed, same test (shareable link, hydration). */
export function rng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function pick<T>(xs: T[], n: number, r: () => number): T[] {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
}

export const examSize = () => P.uk.test.questions;
/** 75% of 24, rounded up: 18. */
export const passNeeded = () => Math.max(P.uk.test.passCorrect, Math.ceil((P.uk.test.passPercent / 100) * P.uk.test.questions));

/**
 * A full mock: 24 questions. With `spread`, the draw takes from every chapter in proportion to the
 * bank (the real test can sample any chapter), then shuffles.
 */
export function buildExam(bank: Question[], seed: number, chapters?: string[]): Exam {
  const r = rng(seed);
  const n = examSize();
  if (bank.length < n) throw new Error('bank too small');
  if (!chapters) return { seed, questions: pick(bank, n, r) };
  const by = chapters.map((c) => bank.filter((q) => q.chapter === c));
  const base = by.map((b) => Math.floor((b.length / bank.length) * n));
  let left = n - base.reduce((s, x) => s + x, 0);
  const order = pick(by.map((_, i) => i), by.length, r);
  for (const i of order) { if (left <= 0) break; if (base[i] < by[i].length) { base[i]++; left--; } }
  const qs = by.flatMap((b, i) => pick(b, base[i], r));
  return { seed, questions: pick(qs, qs.length, r) };
}

/** answers[i] = index chosen for question i, or null if unanswered (counts as wrong). */
export function score(exam: Exam, answers: (number | null)[]): Score {
  const correct = exam.questions.reduce((s, q, i) => s + (answers[i] === q.answer ? 1 : 0), 0);
  const needed = passNeeded();
  return { correct, total: exam.questions.length, needed, pass: correct >= needed };
}

/** Bank check: unique ids, answer among the options, source given, explanation long enough. */
export function lintBank(bank: Question[]): string[] {
  const errs: string[] = [];
  const seen = new Set<string>();
  const seenQ = new Set<string>();
  for (const q of bank) {
    if (seen.has(q.id)) errs.push(`${q.id}: duplicate id`);
    seen.add(q.id);
    const k = q.q.toLowerCase().replace(/\W+/g, ' ').trim();
    if (seenQ.has(k)) errs.push(`${q.id}: duplicate question text`);
    seenQ.add(k);
    if (q.options.length < 2 || q.answer < 0 || q.answer >= q.options.length) errs.push(`${q.id}: answer outside the options`);
    if (new Set(q.options).size !== q.options.length) errs.push(`${q.id}: duplicate options`);
    if (!q.ref?.doc || !q.ref?.section || !q.ref?.url) errs.push(`${q.id}: missing source`);
    if (!q.explain || q.explain.length < 20) errs.push(`${q.id}: explanation too short`);
  }
  return errs;
}

/** Practice set: `n` questions of one chapter (or of the whole bank when `chapter` is null), same seed → same set. */
export function buildPractice(bank: Question[], chapter: string | null, seed: number, n = 10): Question[] {
  const own = chapter ? bank.filter((q) => q.chapter === chapter) : bank;
  return pick(own, Math.min(n, own.length), rng(seed));
}
/** Stable seed from a text (page id): the build and the browser draw the same first test. */
export function seedOf(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619) >>> 0;
  return h;
}
/** Seed of numbered test k (1, 2, 3…): the same test for everyone, every time. */
export const numberedSeed = (k: number) => seedOf(`numbered-test-${k}`);
