/**
 * Approved SELT test centres in the UK by town (Home Office list of October 2026, OGL v3.0), with the
 * B1 speaking and listening test each provider runs for citizenship. The list is in the HTML for the
 * town chosen at build time; another town is a filter on the same data, nothing is fetched.
 */
import { useState } from 'react';
import SelectField from '../ui/SelectField';
import DATA from '../../data/selt-centres.json';
import P from '../../data/params-2026.json';

const TEST: Record<string, string> = Object.fromEntries(P.uk.english.b1Tests.map((t) => [t.provider, `${t.name} (${t.grade})`]));
const CITIES = [...new Set(DATA.centres.map((c) => c.city))].sort();
interface Props { city?: string; provider?: string; idPrefix?: string }
export default function SeltCentres({ city: c0 = 'London', provider: p0 = '', idPrefix = 'sc' }: Props) {
  const [city, setCity] = useState(c0);
  const [prov, setProv] = useState(p0);
  const list = DATA.centres.filter((c) => c.city === city && (!prov || c.provider === prov));
  return (
    <div className="not-prose grid gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
      <div>
        <form className="grid gap-x-4 gap-y-3 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
          <SelectField id={`${idPrefix}-city`} label="Town or city" value={city} onChange={setCity} options={CITIES.map((c) => ({ value: c, label: `${c} (${DATA.centres.filter((x) => x.city === c).length})` }))} />
          <SelectField id={`${idPrefix}-prov`} label="Test provider" value={prov} onChange={setProv} options={[{ value: '', label: 'All four providers' }, ...P.uk.english.providersUk.map((p) => ({ value: p, label: p }))]} />
        </form>
        <ul className="mt-4 space-y-2">
          {list.map((c) => (
            <li key={c.name + c.address} className="rounded-lg border border-navy-200 bg-white px-4 py-3 text-sm">
              <p className="font-semibold text-navy-900">{c.name}</p>
              <p className="text-navy-700">{c.address}</p>
              <p className="mt-1 text-xs text-navy-600">{c.provider} · B1 test for citizenship: {TEST[c.provider] ?? 'see the provider'}</p>
            </li>
          ))}
          {list.length === 0 && <li className="text-sm text-navy-700">No centre of this provider in this town on the October 2026 list.</li>}
        </ul>
      </div>
      <div data-resultat aria-live="polite" className="h-fit rounded-xl border border-accent-200 bg-accent-50/60 p-4 lg:sticky lg:top-20">
        <p className="text-sm font-medium text-navy-700">Approved centres in {city}</p>
        <p className="tabular-nums mt-1 text-4xl font-bold text-navy-900">{list.length}</p>
        <p className="text-sm text-navy-700">of {DATA.centres.length} on the Home Office list for the UK</p>
        <p className="mt-3 text-xs text-navy-700">Book only with the provider: check on its site that the centre runs the B1 speaking and listening test on the date you want.</p>
      </div>
    </div>
  );
}
