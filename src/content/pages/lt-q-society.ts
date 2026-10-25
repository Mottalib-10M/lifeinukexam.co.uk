import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'lt-q-society',
  group: 'practice',
  order: 16,
  tool: {"kind": "bank", "props": {"chapter": 3}},
  mini: {"kind": "mini:chaptershare", "props": {"c": 3}},
  related: ["lt-questions", "lt-q-history", "lt-q-government", "lt-practice"],
  sources: ["uk_test"],
  en: {
    slug: 'life-in-the-uk-test/questions/modern-society',
    nav: "Chapter 4 questions: society",
    card: 'Chapter 4 questions on festivals, saints’ days, sport, music, books, art, inventions and leisure, each with its answer.',
    title: 'Life in the UK Chapter 4 Questions: Modern Society',
    description: 'Chapter 4 Life in the UK questions with answers: festivals and their dates, sport, the arts, writers and inventors, grouped into themes that are easy to revise.',
    h1: 'Chapter 4 questions: a modern, thriving society',
    intro: 'A calendar, a sports page, a bookshelf and a list of inventions. This chapter is wide rather than deep, so it is learned by theme.',
    resume: (h) => `Chapter 4 of the handbook, A modern, thriving society, describes everyday Britain: religion and the established churches, the calendar of festivals and saints' days, sport, music, theatre, art, literature, food, leisure and a long list of British inventions. Our bank holds ${h.num(h.inChapter(3))} questions on it, ${h.pc(h.inChapter(3) / h.count)} of our ${h.num(h.count)}, which means about ${Math.round((h.inChapter(3) / h.count) * h.T.questions)} questions in each ${h.T.questions}-question mock drawn by our engine. The difficulty is breadth. One question asks which date is St Patrick's Day, the next who wrote Pride and Prejudice, the next where the Grand National is run. None is hard on its own, but there are many separate facts with little logic linking them, so they are best learned in themed batches: the calendar, sport, words (books and poems), sound and stage (music and theatre), pictures, and inventions. Each batch is small enough to master in one sitting, and the wrong options in a question nearly always come from the same batch.`,
    faqs: (h) => [
      { q: 'Which saints’ days are public holidays?', a: 'In our bank, St Andrew’s Day (30 November) is an official bank holiday in Scotland and St Patrick’s Day (17 March) a public holiday in Northern Ireland, while St George’s Day (23 April) is not a public holiday in England. St David’s Day falls on 1 March. A question may give the four dates and ask which belongs to which saint, so learn the pairs together.' },
      { q: 'Why does a modern society chapter ask about writers who died long ago?', a: 'Because the handbook presents British culture as a whole, so Austen, Dickens, Burns and Wordsworth sit beside modern festivals and musicals. Questions usually ask you to match a work to its author, or an author to a nation (Burns to Scotland, Dylan Thomas to Wales). A quick pairing list of work and author covers most of them.' },
      { q: 'How should I remember the inventions?', a: 'Pair each with its inventor and, where our bank gives one, a decade: Baird and television in the 1920s, Whittle and the jet engine, Issigonis and the Mini in 1959, Cockerell and the hovercraft in the 1950s, Dolly the sheep in 1996. Questions offer other inventors from the same list as distractors, so the pairing matters more than the date.' },
    ],
    body: (h) => `
<h2>Six themes, one sitting each</h2>
${h.table(['Theme', 'Examples from our bank', 'Usual trap'], [
  ['Calendar', 'Hogmanay, Pancake Day, Bonfire Night on 5 November, Mothering Sunday, Remembrance Day, Diwali, Hanukkah', 'swapping saints’ days, or which ones are public holidays'],
  ['Sport', 'Wimbledon since 1877, the Ashes, golf at St Andrews, rugby named after a school, the Grand National at Aintree, Bannister’s mile in 1954, Redgrave’s five golds', 'mixing up the venue and the sport'],
  ['Words', 'Austen, Dickens, Conan Doyle, Fleming’s James Bond, Burns, Wordsworth, Dylan Thomas, the Booker Prize', 'matching a book to the wrong author'],
  ['Sound and stage', 'the Proms, Handel’s Water Music, Elgar, Lloyd Webber, the Edinburgh Fringe, the Eisteddfod, pantomime, The Mousetrap', 'Booker against Turner, festival against city'],
  ['Pictures and places', 'Constable’s The Hay Wain, the Turner Prize, the National Trust, the Chelsea Flower Show', 'which body runs which event'],
  ['Inventions', 'Baird’s television, Whittle’s jet engine, the Mini, the hovercraft, Dolly the sheep', 'swapping inventors within the list'],
], 'Our grouping of the chapter 4 facts in our bank.', ['l', 'l', 'l'])}
<p>Work through one theme per sitting in the bank above: read its questions with answers open, then close the answers and go again. Six sittings of twenty minutes cover the chapter.</p>
<h2>How the questions are built</h2>
<p>Chapter 4 questions are almost always pairings. A festival is paired with its date ("${h.q('uk-127')?.q}"), a person with a work, a sport with a venue, an organisation with an event. The four options are four items of the same kind, so someone who knows only that Wimbledon is "a sport event in London" cannot separate tennis from the other three. You need the exact pairing.</p>
<p>A smaller group asks about customs and their meaning: why poppies are worn before Remembrance Day, what people do on April Fool's Day (jokes until midday), what a pantomime is, or that watching live television needs a TV licence. These reward reading the explanation once rather than memorising.</p>
<h2>Calendar facts in order</h2>
<p>The calendar is the theme with the most questions, so it is worth a fixed list. Going through the year as our bank does: 14 February Valentine's Day, 1 March St David, 17 March St Patrick, Mothering Sunday three weeks before Easter, 1 April April Fool's Day, 23 April St George, 31 October Halloween, 5 November Bonfire Night (the failed plot of 1605), 11 November Remembrance Day, 30 November St Andrew, 25 and 26 December Christmas and Boxing Day, 31 December Hogmanay. Recite it once a day for a week and the calendar questions are settled.</p>
<h2>Traps specific to this chapter</h2>
<p><strong>Two prizes, two arts.</strong> The Turner Prize rewards contemporary visual art; the Booker Prize rewards a novel in English.</p>
<p><strong>London's three Olympics.</strong> 1908, 1948 and 2012: a question asks how many times, and "twice" is a tempting wrong answer.</p>
<p><strong>The church question.</strong> The Church of England is the established church in England; the Church of Scotland is Presbyterian. Both questions appear in our bank and they are easily crossed.</p>
<h2>Fitting it into your revision</h2>
<p>Because the facts are independent, this chapter suits small daily doses better than one long session: a theme a day, plus one mixed ${h.a('lt-practice', 'practice set')}. The tool below shows how many questions our mocks draw from chapter 4. After it, the ${h.a('lt-q-government', 'chapter on government and law')} switches to a very different style of question, based on institutions and rules.</p>
<p>Every question here checks a fact the handbook states, written in our own words by Radif Partners. The ${h.src('uk_test', 'gov.uk Life in the UK Test page')} states that the test is based only on that handbook.</p>`,
  },
});
