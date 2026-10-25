import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'lt-dates',
  group: 'practice',
  order: 32,
  tool: {"kind": "quiz", "props": {"mode": "practice", "chapter": 2}},
  mini: {"kind": "mini:dates"},
  related: ["lt-q-history", "lt-study", "lt-handbook", "lt-mock"],
  sources: ["uk_test"],
  en: {
    slug: 'life-in-the-uk-test/dates-to-remember',
    nav: "Dates to remember",
    card: 'Every year in the history chapter of our bank on one timeline, with a memory hook for each and a practice set beside it.',
    title: 'Life in the UK Test Dates: Timeline of Years to Remember',
    description: 'Important dates for the Life in the UK test on one timeline, from 55 BC to 1991, each with a memory hook, and the date pairs that cause most wrong answers.',
    h1: 'Life in the UK test dates to remember',
    intro: 'Read the timeline once from top to bottom, then answer the history set above. Dates learned in order are far easier to recall than dates learned alone.',
    resume: (h) => `The years most worth knowing for the Life in the UK Test are those attached to turning points in the handbook's history chapter: the Roman conquest in AD 43, St Augustine's mission in AD 597, the Battle of Hastings in 1066, the Domesday Book in 1086, Magna Carta in 1215, Bannockburn in 1314, the Black Death in 1348, Agincourt in 1415, Bosworth in 1485, the Armada in 1588, the union of the crowns in 1603, the execution of Charles I in 1649, the Restoration in 1660, the Great Fire in 1666, the Glorious Revolution in 1688, the Act of Union in 1707, Trafalgar in 1805, Waterloo in 1815, the end of slavery in the empire in 1833, the first votes for women in 1918, equal votes in 1928, the NHS in 1948 and the voting age of 18 in 1969. The timeline below gathers every year that appears in the history chapter of our bank of ${h.num(h.count)} questions, ${h.num(h.inChapter(2))} of which are on history, each with a hook to remember it. Learn them in sequence, not as a shuffled list.`,
    faqs: (h) => [
      { q: 'Which dates come up most in Life in the UK practice questions?', a: 'In our own bank, the years asked directly as the answer include AD 43, 1215, 1649, 1666, 1918, 1928 and 1969, and many other questions mention a year in the stem, such as Hastings in 1066, Bannockburn in 1314 or the Armada in 1588. The questions used at test centres are not published, so treat any list of dates as preparation, not prediction.' },
      { q: 'Do I need to learn BC dates?', a: 'Only one appears in our history questions: Julius Caesar’s landing in 55 BC, which matters mostly because it is offered as a wrong answer against AD 43, when the real Roman conquest began under Claudius. Remember that the two belong to the same story and that the conquest is the later of the two.' },
      { q: 'What is the easiest way to stop mixing up dates?', a: 'Learn them in pairs and chains. Pairs: 1807 and 1833 for the slave trade and slavery, 1918 and 1928 for votes for women, 55 BC and AD 43 for Rome. Chains: 1603, 1649, 1660, 1666, 1688, 1689 for the seventeenth century. A wrong option is usually the other half of a pair or the next link in a chain.' },
    ],
    body: (h) => `
<h2>The timeline</h2>
${h.table(['Year', 'Event (as in our bank)', 'Memory hook'], [
  ['55 BC', 'Julius Caesar lands in Britain but does not stay', 'the visit before the conquest'],
  ['AD 43', 'Roman conquest begins under Emperor Claudius', 'Rome stays almost 400 years'],
  ['around AD 60', 'Boudicca, queen of the Iceni, revolts', 'her statue stands near Parliament'],
  ['AD 120s', 'Hadrian’s Wall built across the north', 'the frontier against the Picts'],
  ['AD 597', 'St Augustine sent by the Pope, first Archbishop of Canterbury', 'Christianity reaches the Anglo-Saxon south'],
  ['878', 'Alfred the Great defeats the Vikings at Edington', 'Wessex holds'],
  ['1066', 'Battle of Hastings, Norman conquest', 'shown on the Bayeux Tapestry'],
  ['1086', 'Domesday Book completed', 'twenty years after Hastings'],
  ['1215', 'Magna Carta agreed by King John', 'the king under the law'],
  ['1314', 'Bannockburn: Robert the Bruce beats Edward II', 'Scotland stays unconquered'],
  ['1348', 'Black Death reaches England', 'a third or more of people die'],
  ['1415', 'Agincourt: Henry V defeats the French', 'Shakespeare’s Henry V'],
  ['1470s', 'Caxton sets up the first printing press in England', 'prints The Canterbury Tales'],
  ['1485', 'Henry Tudor wins at Bosworth, end of the Wars of the Roses', 'red rose meets white'],
  ['1564', 'Shakespeare born in Stratford-upon-Avon', 'Elizabethan England'],
  ['1577 to 1580', 'Drake sails around the world', 'the Golden Hind'],
  ['1588', 'Spanish Armada defeated', 'Elizabeth I’s great victory'],
  ['1603', 'James VI of Scotland becomes James I of England', 'one king, two kingdoms'],
  ['1649', 'Charles I executed, republic follows', 'Cromwell rules until 1658'],
  ['1660', 'Restoration of Charles II', 'the monarchy returns'],
  ['1666', 'Great Fire of London', 'Wren rebuilds St Paul’s'],
  ['1688', 'Glorious Revolution: William of Orange invited', 'William and Mary'],
  ['1689', 'Bill of Rights', 'a year after 1688'],
  ['1707', 'Act of Union: England and Scotland form Great Britain', 'one parliament at Westminster'],
  ['1721 to 1742', 'Walpole leads the government, the first Prime Minister', 'early Georgian era'],
  ['1745 to 1746', 'Bonnie Prince Charlie’s uprising ends at Culloden', 'last battle on British soil'],
  ['1805', 'Trafalgar: Nelson wins and is killed', 'Nelson’s Column'],
  ['1807', 'Slave trade abolished in the empire', 'Wilberforce'],
  ['1815', 'Waterloo: Wellington defeats Napoleon', 'ten years after Trafalgar'],
  ['1833', 'Emancipation Act abolishes slavery in the empire', 'the second half of the 1807 story'],
  ['1837 to 1901', 'Reign of Queen Victoria', 'almost 64 years'],
  ['1840s', 'Great Famine in Ireland', 'potato crop fails'],
  ['1850s', 'Crimean War, Florence Nightingale', 'modern nursing'],
  ['1903', 'Emmeline Pankhurst founds the WSPU', 'the suffragettes'],
  ['1916', 'Battle of the Somme', 'worst single day for the British army'],
  ['1918', 'Some women over 30 get the vote; armistice on 11 November', 'one year, two milestones'],
  ['1928', 'Equal voting age for women; Fleming discovers penicillin', 'ten years after 1918'],
  ['1940', 'Churchill Prime Minister, Dunkirk, Battle of Britain', 'the year Britain stood'],
  ['1942', 'Beveridge report', 'blueprint for the welfare state'],
  ['1944', 'D-Day landings in Normandy, 6 June', 'the liberation begins'],
  ['1948', 'National Health Service created (Aneurin Bevan)', 'three years after the war'],
  ['1969', 'Voting age lowered from 21 to 18', 'the late sixties'],
  ['1979', 'Margaret Thatcher, first woman Prime Minister', 'in office until 1990'],
  ['1991', 'First page of the World Wide Web online (Tim Berners-Lee)', 'the most recent date here'],
], 'Every year stated in the history chapter of our bank. Hooks by Radif Partners.', ['l', 'l', 'l'])}
<h2>Pairs that trip people up</h2>
<p>Most wrong answers on dates are not random: they are the other half of a pair. 1807 and 1833 (slave trade, then slavery). 1918 and 1928 (some women, then equal voting). 55 BC and AD 43 (Caesar's visit, then Claudius's conquest). 1688 and 1689 (the invitation to William, then the Bill of Rights). 1805 and 1815 (Trafalgar, then Waterloo, ten years apart). When you meet a date question, ask yourself first which pair it belongs to, then which half is being asked.</p>
<h2>Dates that live in other chapters</h2>
<p>Not every year sits in the history chapter. Our bank also asks, under modern society, about Bonfire Night recalling the plot of 1605, Wimbledon first held in 1877, Bannister's mile in 1954 and London's Olympics of 1908, 1948 and 2012. Under what the UK is, the present Union Flag dates from 1801. Under government and law, the Scottish Parliament first met in its modern form in 1999. These are worth adding to the end of the timeline once the history dates are secure.</p>
<h2>A method for learning the list</h2>
<p>Do not try to learn all of it at once. Split the timeline into blocks of about eight rows. Cover the year column and recall it from the event, then cover the event and recall it from the year. Move on only when a block is clean, and start each session with a quick run through the blocks already learned. After a week, the history set at the top of this page, which draws only from chapter 3 of our bank, should feel routine.</p>
<p>The calculator under this section turns any year into its century and decade. Placing a date in its century before reading the options is often enough to rule out two of them: if you know the Armada was Elizabethan, the sixteenth century, an option in the 1700s cannot be right.</p>
<h2>Where these dates come from</h2>
<p>Each year above is taken from a question or explanation in our own bank, written by Radif Partners from facts in the handbook's history chapter. The handbook itself is the reference: gov.uk says on its ${h.src('uk_test', 'Life in the UK Test page')} that the test covers only its content. For the periods behind the dates, see the ${h.a('lt-q-history', 'history questions page')}.</p>`,
  },
});
