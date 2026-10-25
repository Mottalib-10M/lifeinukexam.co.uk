// Writes src/data/bank-size.json (size of the bank and of each chapter) for the mini-tools, so that a
// page does not ship the whole bank to show two numbers. Run before every build (package.json).
import { readFileSync, writeFileSync } from 'node:fs';
const bank = JSON.parse(readFileSync(new URL('../src/data/questions/uk.json', import.meta.url))).questions;
const src = readFileSync(new URL('../src/lib/banks.ts', import.meta.url), 'utf8');
const chapters = JSON.parse(src.match(/CHAPTERS: string\[\] = (\[[^\]]+\])/)[1].replace(/'/g, '"'));
const out = { total: bank.length, byChapter: chapters.map((c) => bank.filter((q) => q.chapter === c).length) };
const path = new URL('../src/data/bank-size.json', import.meta.url);
let old = ''; try { old = readFileSync(path, 'utf8'); } catch {}
const next = JSON.stringify(out) + '\n';
if (old !== next) writeFileSync(path, next);
console.log('bank-size', next.trim());
