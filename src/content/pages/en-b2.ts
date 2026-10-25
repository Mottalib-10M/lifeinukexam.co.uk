import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'en-b2',
  group: 'english',
  order: 72,
  tool: {"kind": "mini:b2rule"},
  mini: {"kind": "mini:seltvalid"},
  related: ["en-test", "bc-changes", "ilr", "en-selt"],
  sources: ["uk_hc1691", "uk_english", "uk_selt"],
  en: {
    slug: 'english-test-for-citizenship/b2-from-2027',
    nav: "B2 for settlement from 2027",
    card: 'From 26 March 2027 many settlement routes will ask for English at B2, while citizenship stays at B1. See which level applies on your date.',
    title: 'English B2 for Settlement from 2027: What Changes and When',
    description: 'English B2 for settlement from 26 March 2027 under HC 1691, while British citizenship stays at B1: who is affected, what to do before then, and a checker.',
    h1: 'English at B2 for settlement from 26 March 2027',
    intro: 'A change is coming for settlement, not for citizenship. Pick your application and its date to see the level that applies.',
    resume: (h) => `The statement of changes to the Immigration Rules HC 1691, laid on 5 March 2026, raises the English level for settlement (indefinite leave to remain) from ${h.E.level} to B2 on many routes, for applications made from ${h.date(h.E.settlementB2From)}. It is a coming change: until that date the settlement level stays at ${h.E.level}, and nothing in HC 1691 alters the requirement for naturalisation, which remains ${h.E.level} in ${h.E.skills}. Someone who already holds indefinite leave to remain or EU settled status is not touched by it, since the change applies to settlement applications. The people to watch are those who will apply for settlement on or after ${h.date(h.E.settlementB2From)} on a route that the rules list. Because the change does not cover every route in the same way, read the rules for your own route rather than relying on a summary. The checker above shows the level by application type and date; the result for citizenship is the same either side of the change.`,
    faqs: (h) => [
      { q: 'Will I need B2 English to become a British citizen after March 2027?', a: `No. HC 1691 changes the level for settlement on many routes, not for naturalisation. A citizenship application made after ${h.date(h.E.settlementB2From)} still needs ${h.E.level} in ${h.E.skills}, or one of the usual alternatives: a degree taught in English, a passport from a listed country, or an exemption for age or a long-term condition.` },
      { q: 'I already have ILR. Does the new B2 level affect me?', a: `Not for citizenship. The B2 level applies to settlement applications made from ${h.date(h.E.settlementB2From)} on the routes concerned, and you have already been granted settlement. When you naturalise, the English requirement is ${h.E.level}, and Guide AN lets you rely on the ${h.E.level} result that was accepted for your ILR, even if it is more than ${h.E.seltValidYears} years old.` },
      { q: 'Are there two-skill English tests at B2 like the B1 Life Skills test?', a: 'On the Home Office list of approved tests taken in the UK that we checked, every test approved at B2 is a four-skill test, assessing reading and writing as well as speaking and listening: IELTS for UKVI, PTE Academic UKVI, Trinity ISE II and the LanguageCert SELTs. The two-skill tests stop at B1. The list can change before 2027, so check it when you book.' },
    ],
    body: (h) => `
<h2>What HC 1691 says, and what it does not</h2>
<p>HC 1691 is a statement of changes to the Immigration Rules published by the Home Office on 5 March 2026. Among its changes it sets English at B2 for settlement on many routes from ${h.date(h.E.settlementB2From)}. We summarise only what it states:</p>
${h.table(['Application', 'Before ' + h.date(h.E.settlementB2From), 'From ' + h.date(h.E.settlementB2From)], [
  ['Settlement (ILR), routes covered by the change', h.E.level, 'B2'],
  ['Settlement, routes not covered', h.E.level + ' (or route exemption)', 'unchanged'],
  ['British citizenship (naturalisation)', h.E.level, h.E.level + ', unchanged'],
], 'English level by application date, from HC 1691 (5 March 2026). The routes concerned are listed in the rules themselves.', ['l', 'l', 'l'])}
<p>It does not create a B2 requirement for people who already hold settlement, and it does not touch the Life in the UK Test. Nor is it the same thing as the wider "earned settlement" reform, which was put out to consultation in November 2025 and has not produced final rules; the ${h.a('bc-changes', 'rule changes page')} keeps the two apart.</p>
<h2>Three people, three outcomes</h2>
<p><strong>Priya</strong> will reach five years on her route in January 2027 and apply for ILR then. Her application comes before ${h.date(h.E.settlementB2From)}, so ${h.E.level} applies. A year later she can use that same ${h.E.level} result for citizenship.</p>
<p><strong>Tomás</strong> becomes eligible for ILR in June 2027 on a route the change covers. He needs B2. If he sits a four-skill test at B2, the same result will also more than satisfy the ${h.E.level} requirement when he later naturalises, because Guide AN accepts "${h.E.level} or higher".</p>
<p><strong>Mei</strong> has held ILR since 2024 and plans to naturalise in 2027. Nothing changes for her: ${h.E.level} for citizenship, and the result accepted for her ILR can be reused.</p>
<h2>What to do before the date</h2>
<p>If your settlement application falls just after ${h.date(h.E.settlementB2From)}, check two things. First, the exact day your route lets you apply, as set out in its own rules: a few weeks can put you on one side of the line or the other. Second, whether you already hold a result at B2 or higher, which a work or study visa may have required. A SELT result is valid for ${h.E.seltValidYears} years from its award, and the tool below checks a result against your application date.</p>
<p>If you need a new test at B2, budget more preparation than for ${h.E.level}. The approved tests at B2 on the current list are four-skill tests, so reading and writing are examined as well as speaking and listening. The ${h.a('en-selt', 'approved tests page')} lists the ${h.E.level} options for citizenship and explains how to book the SELT version of each.</p>
<p>If your route is not one the change covers, or if it exempts you from English at the settlement stage, your ILR application is unaffected. Remember, though, that the exemption stops there: when you later naturalise, the ${h.E.level} requirement applies unless you are ${h.E.exemptFromAge} or over, have a qualifying long-term condition, hold a degree taught in English or carry a passport from a listed country.</p>
<h2>Why citizenship applicants still care</h2>
<p>Most people naturalise after settling, so the level you face for ILR shapes the evidence you carry into citizenship. Under the rule in Guide AN, a result accepted for settlement is good for naturalisation without a time limit. A B2 result accepted for ILR after March 2027 will therefore do double duty. The ${h.a('ilr', 'settlement page')} covers the Life in the UK Test and English for ILR together, and the ${h.a('en-test', 'English requirement page')} covers citizenship.</p>`,
  },
});
