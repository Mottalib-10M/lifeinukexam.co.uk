/**
 * "When can I apply for British citizenship?": the earliest date under section 6(1) (settled for 12
 * months, 5 years) or 6(2) (spouse or civil partner of a British citizen, 3 years), counting every past
 * and planned trip with the whole-days rule of the nationality guidance.
 * First render = build day and example dates (RECETTE §17.5); today and a shared link after mount.
 */
import { useEffect, useMemo, useState } from 'react';
import SelectField from '../ui/SelectField';
import { ukEarliest, ukWithinDiscretion, absenceBand, type Earliest, type Route } from '../../lib/engine/eligibility';
import { dayNum, type Trip } from '../../lib/engine/dates';
import { dateL, formatNumberL } from '../../lib/format-l';
import { readParams, updateURL } from '../../lib/url-state';

declare const __BUILD_DAY__: string;
const iso = (s: string | null) => !!s && /^\d{4}-\d{2}-\d{2}$/.test(s);
const L = {
  route: 'Your route', r61: 'Settled (ILR or EU settled status), 5-year route', r62: 'Married to or civil partner of a British citizen, 3-year route',
  arrival: 'First day you lived in the UK', ilr: 'Date you got ILR or settled status',
  trips: 'Trips outside the UK (past and planned)', left: 'Left the UK on', back: 'Back in the UK on', add: 'Add a trip', remove: 'Remove trip',
  head: 'Earliest date to apply', none: 'Not within 20 years with these trips', now: 'You can apply today', inDays: (d: number) => `in ${formatNumberL(d)} days`,
  checks: 'On that date', today: 'If you applied today',
  k: { presentAtStart: 'In the UK on the first day of the period', absences: 'Days abroad in the period', absences12m: 'Days abroad in the last 12 months', settled: 'Settled status held long enough', age: 'Aged 18 or over' } as Record<string, string>,
  ok: 'met', ko: 'not met', limit: 'limit', near: 'Within 5 days of a limit: check every date against your passport stamps or travel history before you apply.',
  discretion: 'Today you are over the limit by 30 days or less. The nationality guidance tells caseworkers to use discretion in that case unless there are other grounds to refuse. It is not automatic.',
  band: 'Today your absences are in the band where discretion is only considered with your home, work, family and finances in the UK and a listed reason.',
  err: { order: 'A trip comes back before it leaves.', overlap: 'Two trips overlap.' },
  rule: 'Counting rule: the day you leave and the day you come back are days in the UK; only whole days abroad count.',
};
const DEF = { a: '2021-09-01', b: '2026-03-02', trips: [{ out: '2024-07-10', back: '2024-07-31' }, { out: '2025-12-18', back: '2026-01-05' }] as Trip[] };
interface Props { route?: Route; eu?: boolean; idPrefix?: string }

export default function ResidenceDate({ route: r0 = '6(1)', eu = false, idPrefix = 'd' }: Props) {
  const [today, setToday] = useState(__BUILD_DAY__);
  const [a, setA] = useState(DEF.a);
  const [b, setB] = useState(DEF.b);
  const [route, setRoute] = useState<Route>(r0);
  const [trips, setTrips] = useState<Trip[]>(DEF.trips);
  useEffect(() => {
    setToday(new Date().toISOString().slice(0, 10));
    const u = readParams(window.location.search);
    const ua = u.get('a'), ub = u.get('b'), ur = u.get('r'), ut = u.get('t');
    if (iso(ua)) setA(ua!); if (iso(ub)) setB(ub!); if (ur === '61') setRoute('6(1)'); if (ur === '62') setRoute('6(2)');
    if (ut) { const tt = ut.split(',').map((x) => x.split('_')).filter(([o, k]) => iso(o) && iso(k)).map(([o, k]) => ({ out: o, back: k })); if (tt.length) setTrips(tt); }
  }, []);
  useEffect(() => { updateURL({ a, b, r: route === '6(1)' ? '61' : '62', t: trips.filter((t) => iso(t.out) && iso(t.back)).map((t) => `${t.out}_${t.back}`).join(',') }); }, [a, b, route, trips]);
  const valid = trips.filter((t) => iso(t.out) && iso(t.back));
  const err = (() => {
    const s = [...valid].sort((x, y) => (x.out < y.out ? -1 : 1));
    for (let i = 0; i < s.length; i++) { if (s[i].back! < s[i].out) return L.err.order; if (i && s[i - 1].back! > s[i].out) return L.err.overlap; }
    return null;
  })();
  const res: Earliest | null = useMemo(() => {
    if (err || !iso(a)) return null;
    return ukEarliest({ route, firstEntry: a, ilr: iso(b) ? b : null, trips: valid }, today);
  }, [a, b, route, trips, today, err]);
  const fmt = (v: unknown) => (typeof v === 'number' ? formatNumberL(v) : typeof v === 'string' && iso(v) ? dateL(v) : '');
  const inputCls = 'h-12 w-full rounded-lg border border-navy-300 bg-white px-3 text-navy-900 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20';
  const field = (id: string, label: string, val: string, set: (v: string) => void) => (
    <div className="grid min-w-0 grid-rows-subgrid row-span-3 content-start gap-y-0"><label htmlFor={`${idPrefix}-${id}`} className="mb-1 block text-sm font-medium text-navy-700">{label}</label><input id={`${idPrefix}-${id}`} type="date" value={val} onChange={(e) => set(e.target.value)} className={`${inputCls} min-w-0`} /><span /></div>
  );
  const date = res?.date ?? null;
  const days = date ? dayNum(date) - dayNum(today) : null;
  const v = res?.verdictAtDate ?? res?.verdictToday ?? null;
  const vt = res?.verdictToday;
  const disc = vt && !vt.ok && ukWithinDiscretion(vt);
  const absToday = vt?.checks.find((c) => c.id === 'absences')?.value as number | undefined;
  const inBand = vt && !disc && absToday !== undefined && absenceBand(route, absToday) === 'conditions';
  return (
    <div className="not-prose grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
          <SelectField id={`${idPrefix}-route`} label={L.route} value={route} onChange={(x) => setRoute(x as Route)} options={[{ value: '6(1)', label: eu ? 'EU settled status (or ILR), 5-year route' : L.r61 }, { value: '6(2)', label: L.r62 }]} />
          {field('a', L.arrival, a, setA)}
          {field('b', eu ? 'Date you got settled status' : L.ilr, b, setB)}
        </div>
        <fieldset className="rounded-xl border border-navy-200 bg-white p-4">
          <legend className="px-1 text-sm font-semibold text-navy-900">{L.trips}</legend>
          <div className="space-y-3">
            {trips.map((t, i) => (
              <div key={i} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-end gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]">
                {field(`o${i}`, L.left, t.out, (x) => setTrips((o) => o.map((y, j) => (j === i ? { ...y, out: x } : y))))}
                {field(`r${i}`, L.back, t.back ?? '', (x) => setTrips((o) => o.map((y, j) => (j === i ? { ...y, back: x } : y))))}
                <button type="button" onClick={() => setTrips((o) => o.filter((_, j) => j !== i))} className="col-span-2 mb-0 h-12 rounded-lg border border-navy-300 px-3 text-sm text-navy-800 hover:bg-navy-50 sm:col-span-1" aria-label={`${L.remove} ${i + 1}`}>×</button>
              </div>
            ))}
          </div>
          <button type="button" onClick={() => setTrips((o) => [...o, { out: today, back: today }])} className="mt-3 h-12 rounded-lg border border-navy-300 px-4 text-sm font-medium text-navy-800 hover:bg-navy-50">+ {L.add}</button>
          {err && <p role="status" className="mt-2 text-sm font-medium text-red-700">{err}</p>}
          <p className="mt-2 text-xs text-navy-700">{L.rule}</p>
        </fieldset>
      </form>
      <div data-resultat aria-live="polite" className="h-fit rounded-xl border border-accent-200 bg-accent-50/60 p-4 lg:sticky lg:top-20">
        <p className="text-sm font-medium text-navy-700">{L.head}</p>
        <p className="mt-1 text-3xl font-bold text-navy-900">{res ? (date ? (days !== null && days <= 0 ? L.now : dateL(date)) : L.none) : '…'}</p>
        {date && days !== null && days > 0 && <p className="text-sm text-navy-700">{L.inDays(days)}</p>}
        {v && (
          <>
            <p className="mt-3 text-sm font-semibold text-navy-900">{res?.verdictAtDate ? L.checks : L.today}</p>
            <table className="mt-1 w-full text-sm"><tbody className="divide-y divide-navy-200">
              {v.checks.map((c) => (
                <tr key={c.id}><td className="py-1.5 pr-2 text-navy-700">{L.k[c.id] ?? c.id}{typeof c.value === 'number' && typeof c.limit === 'number' ? ` (${fmt(c.value)} / ${L.limit} ${fmt(c.limit)})` : ''}</td><td className={`py-1.5 text-right font-medium ${c.ok ? 'text-green-800' : 'text-red-700'}`}>{c.ok ? L.ok : L.ko}</td></tr>
              ))}
            </tbody></table>
            {v.checks.some((c) => c.near) && <p className="mt-2 text-xs text-amber-800">{L.near}</p>}
            {disc && <p className="mt-2 text-xs text-navy-700">{L.discretion}</p>}
            {inBand && <p className="mt-2 text-xs text-navy-700">{L.band}</p>}
          </>
        )}
      </div>
    </div>
  );
}
