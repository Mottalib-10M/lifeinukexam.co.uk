import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'lt-online',
  group: 'practice',
  order: 24,
  tool: {"kind": "quiz", "props": {"mode": "exam"}},
  mini: {"kind": "mini:pace"},
  related: ["lt-mock", "lt-tests", "lt-booking", "british-test"],
  sources: ["uk_test", "uk_test_day", "uk_guide_an"],
  en: {
    slug: 'life-in-the-uk-test/online-test',
    nav: "Free online test",
    card: 'A free online Life in the UK test to practise in your browser, and why the real one is never sat from home.',
    title: 'Life in the UK Test Online: Free Practice and the Real Test',
    description: 'Free Life in the UK test online to practise in your browser. The real test cannot be taken online: it is booked on gov.uk and sat on a computer in a centre.',
    h1: 'Life in the UK test online: practise here, sit it in a centre',
    intro: 'Practise as often as you like in your browser. The test that counts for settlement or citizenship is taken in person, at a centre you choose when booking on gov.uk.',
    resume: (h) => `You can practise the Life in the UK Test online here for free, as often as you like: the test above has ${h.T.questions} questions from all five chapters of the handbook, marked at ${h.need} correct, with no account and no payment. The real Life in the UK Test, however, is never taken online from home. It is booked online through the only official government service, on gov.uk, at least ${h.T.bookAtLeastDaysAhead} days ahead for ${h.gbp(h.T.fee)}, and then sat in person at one of over ${h.T.centresOver} test centres in the UK. The Home Office's Guide AN says the test is taken on a computer at the centre, with a chance to practise using the equipment and a short trial test first; you then have up to ${h.T.minutes} minutes for the ${h.T.questions} questions and need ${h.pc(h.T.passPercent / 100)} or more to pass. So the word "online" covers two different things: free practice, which anyone can offer, and booking, which only gov.uk provides. A website that offers to let you sit the actual test from home, or sells an "official" pass, is not part of the official process.`,
    faqs: (h) => [
      { q: 'Can I take the Life in the UK Test from home on my laptop?', a: `No. gov.uk describes a test you book online and then attend in person at a test centre, bringing the original ID you booked with and having your photo taken on the day. There is no home or remote version. What you can do from home is practise, here or with the handbook, until your mock scores sit comfortably above ${h.need}.` },
      { q: 'Is this online practice test the official one?', a: 'No. It is free practice material written by Radif Partners, an independent publisher, from the facts in the handbook. The questions used at test centres are not published. Our test follows the official format, the same number of questions and the same pass mark, so it is a good rehearsal, but it gives you no reference number and counts for nothing in an application.' },
      { q: 'Will the computer at the test centre be hard to use?', a: 'Guide AN says you are given an opportunity to practise using the equipment and can complete a short trial test before the real one begins. If you rarely use a mouse or keyboard, practising here on a computer rather than a phone is a useful warm-up: it gets you used to reading a question on screen and clicking one answer out of four.' },
    ],
    body: (h) => `
<h2>Two meanings of "online"</h2>
${h.table(['', 'Practice online', 'The real test'], [
  ['Where', 'any browser, at home', `a test centre in the UK (over ${h.T.centresOver})`],
  ['Cost', 'free here', `${h.gbp(h.T.fee)} per sitting`],
  ['How you access it', 'open this page', `book on gov.uk, at least ${h.T.bookAtLeastDaysAhead} days ahead`],
  ['ID', 'none', 'the same original ID used to book, photo taken on the day'],
  ['Format', `${h.T.questions} questions, ${h.T.minutes} minutes on our timed mock`, `${h.T.questions} questions, up to ${h.T.minutes} minutes, on a computer`],
  ['Result', 'instant, counts for nothing', 'a pass gives a unique reference number for your application'],
], 'Practice versus the test that counts. Official facts from gov.uk and Guide AN.', ['l', 'l', 'l'])}
<h2>What the online booking involves</h2>
<p>gov.uk calls its booking page the only official government service for booking the test. To use it you need an email address, a debit or credit card and an accepted form of ID, and the name you give must match your ID exactly. You choose your centre during booking. We do not book tests and cannot do it for you; our ${h.a('lt-booking', 'booking guide')} walks through the steps and the ${h.a('lt-id', 'ID page')} lists the documents gov.uk accepts.</p>
<p>Guide AN also mentions that demand for slots can be high and advises booking early. In practice, once your mocks are steady, book first and keep practising while you wait.</p>
<h2>Making online practice look like the centre</h2>
<p>The real test is on a screen, so practise on a screen, preferably a computer with a mouse rather than a phone. Use the mode that keeps corrections until the end, because at the centre you will not see whether an answer was right until you have finished. Sit somewhere quiet; gov.uk says you cannot bring children or other family members to the centre, so the day itself will be a solitary sitting.</p>
<p>Watch your pace too. ${h.T.minutes} minutes for ${h.T.questions} questions leaves almost two minutes each, and most candidates finish with time to spare. The checker under this section tells you how much time remains per question at any point: if you have answered ten questions in fifteen minutes, you are comfortably ahead.</p>
<h2>How to judge a practice website</h2>
<p>Free practice is useful from many sources, but a few warning signs suggest someone is selling more than they can deliver: a promise of the "real" or "official" questions (they are not published), an offer to sit the actual test online, a fee to "register" you for the test, or a promise that you will pass. None of these fits the official process described on gov.uk, where booking costs ${h.gbp(h.T.fee)} and is paid only through the government's booking service. The Home Office's Guide AN goes further and does not recommend unofficial study guides at all, pointing instead to the handbook itself.</p>
<h2>From online practice to a booking</h2>
<p>Our suggestion, not an official rule: book once the lowest of your last three fresh mocks is two points or more above ${h.need}. Until then, alternate the test above with the ${h.a('lt-tests', 'numbered practice tests')}, which let you track progress on fixed papers. For the official details, read the ${h.src('uk_test', 'gov.uk Life in the UK Test page')}, the page on ${h.src('uk_test_day', 'what happens at the test')} and ${h.src('uk_guide_an', 'Guide AN')}.</p>`,
  },
});
