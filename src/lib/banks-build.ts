/** Build-time access to the bank (never imported by a client component). */
import UK from '../data/questions/uk.json';
import type { Question } from './engine/exam';
export const BANK: Question[] = UK.questions as Question[];
