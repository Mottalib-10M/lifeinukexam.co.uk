import { definePage } from '../../lib/guide-types';
import SELT from '../../data/selt-centres.json';

const byProvider = (p: string) => SELT.centres.filter((c) => c.provider === p).length;
const providers = [...new Set(SELT.centres.map((c) => c.provider))].sort((a, b) => byProvider(b) - byProvider(a));
const topCities = (() => {
  const m = new Map<string, number>();
  for (const c of SELT.centres) m.set(c.city, (m.get(c.city) ?? 0) + 1);
  return [...m.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, 8);
})();

export default definePage({
  id: 'en-centres',
  group: 'english',
  order: 64,
  tool: {"kind": "centres"},
  mini: {"kind": "mini:b1tests"},
  related: ["en-selt", "en-test", "en-validity", "lt-id"],
  sources: ["uk_selt"],
  en: {
    slug: 'english-test-for-citizenship/test-centres',
    nav: "SELT test centres",
    card: 'Every approved SELT centre in the UK from the Home Office list of October 2026, searchable by town and by test provider.',
    title: 'SELT Test Centres in the UK: Approved Venues by Town',
    description: 'Approved SELT test centres in the UK for the B1 citizenship English test, from the Home Office list of October 2026: search by town and provider, then book.',
    h1: 'Approved English test centres in the UK',
    intro: 'Choose a town and a provider to list the approved venues with their address. You then book on the provider\'s own website, never through the centre.',
    resume: (h) => `An English test only counts for citizenship if it was sat at a centre on the Home Office list of approved SELT test locations. The list for the UK published in October 2026 holds ${h.selt.centres} centres in ${h.selt.cities} towns and cities, run by the ${providers.length} providers allowed to deliver SELTs here: ${providers.map((p) => `${p} (${byProvider(p)} centres)`).join(', ')}. London has the most, with ${h.selt.inCity('London')} venues before counting Croydon, Stratford and Uxbridge, which the list names separately. The finder above reads that list. The Home Office tells candidates to check dates and opening on the provider's website and not to contact a centre directly; you should get a test within ${h.E.bookWithinDays} days of booking, though not always at the nearest venue. Whichever centre you choose, the result is valid for ${h.E.seltValidYears} years from the award date and is checked online with its reference number.`,
    faqs: (h) => [
      { q: 'Can I sit the citizenship English test at any language school that offers IELTS?', a: `No. Only the venues on the Home Office list of approved SELT centres count, and the October 2026 list for the UK has ${h.selt.centres} of them. A school can run ordinary IELTS or Trinity exams without being an approved SELT location, and a result from such a sitting will not be accepted for naturalisation. Check the venue in the finder before you pay.` },
      { q: 'Why does my preferred SELT provider have no centre in my town?', a: `Each provider runs its own network, so a town may host Pearson and LanguageCert venues but no Trinity or IELTS centre. Since the ${h.E.b1Tests.length} B1 tests are accepted on equal terms, the simplest fix is to switch provider rather than travel. Set the provider filter in the finder to "all" to see every option in your town.` },
      { q: 'Is a SELT taken abroad accepted for an application made in the UK?', a: 'Yes. The SELT guidance says a test taken in the UK can be used for applications made in the UK or overseas, and tests taken overseas can be used for applications made in the UK. Abroad the providers differ slightly: PSI Services replaces Trinity College London, and the centre must be on the separate list of approved centres outside the UK.' },
    ],
    body: (h) => `
<h2>Where the centres are</h2>
<p>The approved locations cluster in the large cities. The eight towns with the most venues on the October 2026 list are below; together they hold most of the network, and many smaller towns have a single centre run by one provider.</p>
${h.table(['Town or city', 'Approved centres'], topCities.map(([c, n]) => [c, n]), 'Towns with the most approved SELT centres, Home Office list of approved test centres in the UK (October 2026, OGL v3.0).', ['l', 'r'])}
<p>Croydon, Stratford and Uxbridge appear under their own names on the Home Office list, so a Londoner searching only "London" misses several venues within reach. In Scotland the list has centres in Edinburgh and Glasgow, in Wales in Cardiff, and in Northern Ireland in Belfast; candidates in the Highlands, west Wales or rural Northern Ireland should allow for travel when they book.</p>
<h2>How to book a slot</h2>
<p>The finder shows where you can sit the test, but it cannot book it, and neither can the centre. Booking happens on the provider's website:</p>
<ol>
<li>Decide which test you need. For citizenship it is a ${h.E.level} ${h.E.skills} test; the ${h.a('en-selt', 'approved tests page')} gives the exact name for each provider.</li>
<li>Open that provider's booking site and choose a venue that appears on the Home Office list.</li>
<li>Enter your name exactly as it appears on the identity document you will bring.</li>
<li>Note the date: you should be offered one within ${h.E.bookWithinDays} days, according to the Home Office.</li>
</ol>
<p>The Home Office warns that some third-party booking agents claim links with its partners that they do not have, and that an agent's price should never be higher than the provider's own. Booking directly avoids both risks.</p>
<h2>What the centre checks on arrival</h2>
<p>Staff check identity before anything else. Your document must be current, original (no photocopy), carry your photo and match the details you booked with; any signature on it is compared too. A passport works in every case. In the UK an eVisa share code is accepted, and an expired BRP or BRC can be used only within ${h.T.brpMonthsAfterExpiry} months of its expiry date and not after ${h.date(h.T.brpDeadline)}. Emergency travel documents are refused. If you cannot prove who you are, you will not sit the test. The rules mirror those for the Life in the UK Test, explained on the ${h.a('lt-id', 'ID page')}, but the two tests are booked and sat separately, usually at different venues.</p>
<p>If you have a previous gender or name you do not want the centre to see or the result to show, the guidance asks you to email the Home Office sensitive bookings team before booking. Requests for extra equipment or help with access, for example because of a disability, are made at the time of booking.</p>
<h2>After the test</h2>
<p>You leave with nothing to post to the Home Office. The provider issues a result with a SELT unique reference number, which you quote on the citizenship form, and the caseworker checks it online. Keep the date of award: it starts the ${h.E.seltValidYears}-year validity, which matters if your citizenship application is still some way off. The ${h.a('en-validity', 'validity page')} explains the one exception, a result already accepted for your settlement.</p>
<p>The Home Office says more centres will be added as new provider services become available, so a town missing today may appear on a later list. We refresh the finder from the published file.</p>`,
  },
});
