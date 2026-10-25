/**
 * Official cost of becoming British for a household, line by line (Home Office fees table in force
 * from 8 October 2026; passport fees on gov.uk). Costs without an official scale (English test,
 * translations) are typed by the visitor, never estimated.
 */
import { useMemo, useState } from 'react';
import NumberField from '../ui/NumberField';
import SelectField from '../ui/SelectField';
import { ukCost } from '../../lib/engine/cost';
import { money } from '../../lib/format-l';

const L = {
  adults: 'Adults applying to naturalise', children: 'Children to register (under 18)', ilr: 'People who still need ILR first', attempts: 'Life in the UK Test sittings per adult', priority: 'Priority service', passports: 'First adult passports (online)', other: 'Other costs you expect (English test, translations)',
  head: 'Official cost', l: { naturalisation: 'Naturalisation fee', ceremony: 'Citizenship ceremony', lifeInUkTest: 'Life in the UK Test', registrationChild: 'Child registration', ilr: 'Indefinite leave to remain', priority: 'Priority service', passport: 'Adult passport, online', other: 'Your other costs' } as Record<string, string>,
  note: 'Fees are paid to the Home Office and HM Passport Office when you apply; this site takes no fee and sends no application.',
};
interface Props { idPrefix?: string; defaults?: Record<string, number> }
export default function CostTool({ idPrefix = 'c', defaults = {} }: Props) {
  const [v, setV] = useState({ adults: 1, children: 0, ilr: 0, attempts: 1, priority: 0, passports: 0, other: 0, ...defaults });
  const set = (k: keyof typeof v) => (x: number) => setV((o) => ({ ...o, [k]: Math.round(x) }));
  const cost = useMemo(() => ukCost({ adults: v.adults, children: v.children, ilrToPay: v.ilr, testAttempts: v.attempts, priority: v.priority ? v.adults : 0, passports: v.passports, other: v.other }), [v]);
  const f = (id: keyof typeof v, label: string, max: number, unit = '') => <NumberField key={id} id={`${idPrefix}-${id}`} label={label} value={v[id]} onChange={set(id)} max={max} unit={unit} tag="en-GB" />;
  return (
    <div className="not-prose grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">
      <form className="grid content-start gap-x-4 gap-y-3 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
        {f('adults', L.adults, 10)}
        {f('attempts', L.attempts, 10)}
        {f('children', L.children, 10)}
        {f('ilr', L.ilr, 10)}
        <SelectField id={`${idPrefix}-priority`} label={L.priority} value={String(v.priority)} onChange={(x) => set('priority')(Number(x))} options={[{ value: '0', label: 'No, standard service' }, { value: '1', label: 'Yes, for each adult' }]} />
        {f('passports', L.passports, 10)}
        {f('other', L.other, 100000, '£')}
      </form>
      <div data-resultat aria-live="polite" className="h-fit rounded-xl border border-accent-200 bg-accent-50/60 p-4">
        <p className="text-sm font-medium text-navy-700">{L.head}</p>
        <p className="tabular-nums mt-1 text-4xl font-bold text-navy-900">{money(cost.total)}</p>
        <table className="mt-3 w-full text-sm"><tbody className="divide-y divide-navy-200">
          {cost.lines.map((l) => <tr key={l.id}><td className="py-1.5 pr-2 text-navy-700">{L.l[l.id] ?? l.id}{l.count && l.count > 1 && l.each ? ` (${l.count} × ${money(l.each)})` : ''}</td><td className="tabular-nums py-1.5 text-right text-navy-900">{money(l.amount)}</td></tr>)}
        </tbody></table>
        <p className="mt-2 text-xs text-navy-700">{L.note}</p>
      </div>
    </div>
  );
}
