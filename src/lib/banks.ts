/**
 * Question bank. `BANK` (lib/banks-build.ts, static import) is for the build only: pages, helpers and
 * the first render of each tool. In the browser, `loadBank` fetches the bank on demand (one chunk),
 * so a page ships only the questions it shows until the visitor asks for a new draw.
 */
import type { Question } from './engine/exam';
export async function loadBank(): Promise<Question[]> {
  const m = await import('../data/questions/uk.json');
  return (m.default as { questions: Question[] }).questions;
}
/** Chapters in the order of the official handbook (3rd edition). */
export const CHAPTERS: string[] = ['The values and principles of the UK', 'What is the UK?', 'A long and illustrious history', 'A modern, thriving society', 'The UK government, the law and your role'];
