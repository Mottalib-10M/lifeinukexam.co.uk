/**
 * Question bank browser: one chapter at a time, every question with its answer and explanation in the
 * HTML (native <details>, readable without JavaScript). First render = the chapter of the page at build
 * time (or a sample of every chapter when `chapter` is empty); another chapter is loaded only when the visitor picks it.
 */
import { useState } from 'react';
import SelectField from '../ui/SelectField';
import { loadBank, CHAPTERS } from '../../lib/banks';
import type { Question } from '../../lib/engine/exam';

/** Sample of every chapter: every n-th question of each, so the overview page never repeats a chapter page. */
export const sampleAll = (all: Question[], per = 5) => CHAPTERS.flatMap((c) => { const qs = all.filter((q) => q.chapter === c); const step = Math.max(1, Math.floor(qs.length / per)); return qs.filter((_, i) => i % step === 0).slice(0, per); });

interface Props { chapter: string; initial: Question[]; total: number; idPrefix?: string }
export default function QuestionBank({ chapter: ch0, initial, total, idPrefix = 'b' }: Props) {
  const [chapter, setChapter] = useState(ch0);
  const [qs, setQs] = useState<Question[]>(initial);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const pickChapter = async (c: string) => {
    setChapter(c); setLoading(true);
    const all = await loadBank();
    setQs(c ? all.filter((q) => q.chapter === c) : sampleAll(all)); setLoading(false);
  };
  const known = qs.length;
  return (
    <div className="not-prose grid gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
      <div>
        <form className="grid gap-3 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
          <SelectField id={`${idPrefix}-chapter`} label="Handbook chapter" value={chapter} onChange={pickChapter} options={[{ value: '', label: 'A sample from all five chapters' }, ...CHAPTERS.map((c, i) => ({ value: c, label: `${i + 1}. ${c}` }))]} />
          <div className="grid grid-rows-subgrid row-span-3 content-start gap-y-0">
            <span className="mb-1 block text-sm font-medium text-navy-700">Answers</span>
            <button type="button" onClick={() => setOpen((o) => !o)} aria-pressed={open} className="h-12 rounded-lg border border-navy-300 bg-white px-4 text-left text-navy-900 hover:bg-navy-50">{open ? 'Hide every answer' : 'Show every answer'}</button>
            <span />
          </div>
        </form>
        {loading ? <p className="mt-4 text-navy-700">Loading…</p> : (
          <ol className="mt-4 space-y-2">
            {qs.map((q, i) => (
              <li key={q.id}>
                <details className="group rounded-lg border border-navy-200 bg-white" open={open}>
                  <summary className="cursor-pointer px-4 py-3 font-medium text-navy-900"><span className="tabular-nums mr-2 text-navy-600">{i + 1}.</span>{q.q}</summary>
                  <div className="px-4 pb-4 text-sm text-navy-800">
                    <ul className="mb-2 space-y-1">{q.options.map((o, j) => <li key={j} className={j === q.answer ? 'font-semibold text-green-800' : 'text-navy-700'}>{j === q.answer ? '✓ ' : '· '}{o}</li>)}</ul>
                    <p>{q.explain}</p>
                    <p className="mt-1 text-xs text-navy-600">Where to check: {q.ref.section}</p>
                  </div>
                </details>
              </li>
            ))}
          </ol>
        )}
      </div>
      <div data-resultat className="h-fit rounded-xl border border-accent-200 bg-accent-50/60 p-4 lg:sticky lg:top-20">
        <p className="text-sm font-medium text-navy-700">{chapter || 'Sample from all five chapters'}</p>
        <p className="tabular-nums mt-1 text-4xl font-bold text-navy-900">{known}</p>
        <p className="text-sm text-navy-700">{chapter ? 'questions in this chapter' : 'questions shown'}, {total} in the whole bank</p>
        <p className="mt-3 text-xs text-navy-700">Open a question to see the four options, the right answer and the fact behind it.</p>
      </div>
    </div>
  );
}
