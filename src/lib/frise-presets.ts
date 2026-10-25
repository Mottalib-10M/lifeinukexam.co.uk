/** Steps of the timelines (RECETTE §17.6). Every duration is read from params-2026.json, never typed here:
 * a step without an official duration is a milestone (0/0). Months are converted at 30.44 days. */
import P from '../data/params-2026.json';
import type { FriseStep, FriseLabels } from '../components/ui/Frise';

const U = P.uk, N = U.naturalisation, T = U.test, F = U.fees, S = P.sources;
const src = (k: keyof typeof S, label: string) => ({ label, href: S[k].url });
const months = (m: number) => Math.round(m * 30.44);
/** 30 working days on the priority service, shown in calendar days (5 working days a week, bank holidays left out). */
const priorityDays = Math.ceil((F.priorityWorkingDays / 5) * 7);
const decisionMax = months(N.decisionUsuallyMonths);

const steps: Record<string, FriseStep[]> = {
  journey: [
    { id: 'test', title: 'Pass the Life in the UK Test', detail: `Booked at least ${T.bookAtLeastDaysAhead} days ahead; a pass gives the unique reference number.`, minDays: T.bookAtLeastDaysAhead, maxDays: T.bookAtLeastDaysAhead, source: src('uk_test', 'gov.uk: book the test') },
    { id: 'ilr', title: 'Settlement granted', detail: 'Indefinite leave to remain or settled status: the day the waiting year starts.', minDays: 0, maxDays: 0, source: src('uk_ilr', 'gov.uk: indefinite leave to remain') },
    { id: 'wait', title: `Hold it for ${N.route61.ilrHeldMonths} months`, detail: 'Required on the five-year route; a spouse or civil partner of a British citizen skips this wait.', minDays: months(N.route61.ilrHeldMonths), maxDays: months(N.route61.ilrHeldMonths), source: src('uk_guide_an', 'Guide AN') },
    { id: 'apply', title: 'Apply and give biometrics', detail: `Form AN online, then fingerprints and photo within ${N.biometricsDays} days.`, minDays: 0, maxDays: N.biometricsDays, source: src('uk_guide_an', 'Guide AN') },
    { id: 'decision', title: 'Home Office decision', detail: `Usually within ${N.decisionUsuallyMonths} months of receipt; ${F.priorityWorkingDays} working days with the priority service.`, minDays: priorityDays, maxDays: decisionMax - N.biometricsDays, source: src('uk_priority', 'gov.uk: priority service') },
    { id: 'ceremony', title: 'Citizenship ceremony', detail: `Booked with your council and attended within ${N.ceremonyWithinDays} days of the invitation.`, minDays: 0, maxDays: N.ceremonyWithinDays, source: src('uk_ceremony', 'gov.uk: citizenship ceremonies') },
  ],
  decision: [
    { id: 'received', title: 'Application received', detail: 'The online form is received the day you send it and pay.', minDays: 0, maxDays: 0, source: src('uk_guide_an', 'Guide AN') },
    { id: 'bio', title: 'Biometrics appointment', detail: `Fingerprints and photo within ${N.biometricsDays} days.`, minDays: 0, maxDays: N.biometricsDays, source: src('uk_guide_an', 'Guide AN') },
    { id: 'decision', title: 'Decision letter', detail: `Standard target: ${N.decisionUsuallyMonths} months from receipt. Priority: ${F.priorityWorkingDays} working days.`, minDays: priorityDays, maxDays: decisionMax - N.biometricsDays, source: src('uk_priority', 'gov.uk: priority service') },
    { id: 'ceremony', title: 'Ceremony', detail: `Within ${N.ceremonyWithinDays} days of the invitation.`, minDays: 0, maxDays: N.ceremonyWithinDays, source: src('uk_ceremony', 'gov.uk: citizenship ceremonies') },
  ],
  result: [
    { id: 'book', title: 'Booking', detail: `At least ${T.bookAtLeastDaysAhead} days before the test.`, minDays: T.bookAtLeastDaysAhead, maxDays: T.bookAtLeastDaysAhead, source: src('uk_test', 'gov.uk: book the test') },
    { id: 'pass', title: 'Pass and reference number', detail: `${T.passCorrect} correct answers out of ${T.questions}; the reference number goes on your application.`, minDays: 0, maxDays: 0, source: src('uk_test_day', 'gov.uk: what happens at the test') },
    { id: 'apply', title: 'Application and biometrics', detail: `Biometrics within ${N.biometricsDays} days of applying.`, minDays: 0, maxDays: N.biometricsDays, source: src('uk_guide_an', 'Guide AN') },
    { id: 'decision', title: 'Decision', detail: `Usually within ${N.decisionUsuallyMonths} months of receipt.`, minDays: priorityDays, maxDays: decisionMax - N.biometricsDays, source: src('uk_guide_an', 'Guide AN') },
  ],
  ceremony: [
    { id: 'invite', title: 'Invitation received', detail: 'Sent by the Home Office once the application is approved.', minDays: 0, maxDays: 0, source: src('uk_ceremony', 'gov.uk: citizenship ceremonies') },
    { id: 'attend', title: 'Book and attend the ceremony', detail: `The last day is printed on the invitation: ${N.ceremonyWithinDays} days.`, minDays: 0, maxDays: N.ceremonyWithinDays, source: src('uk_ceremony', 'gov.uk: citizenship ceremonies') },
    { id: 'cert', title: 'Certificate in hand', detail: 'Presented at the end of the ceremony, with a welcome pack.', minDays: 0, maxDays: 0, source: src('uk_ceremony', 'gov.uk: citizenship ceremonies') },
  ],
};

const starts: Record<string, string> = {
  journey: 'Date you book the Life in the UK Test',
  decision: 'Date the Home Office receives your application',
  result: 'Date you book the test',
  ceremony: 'Date of your ceremony invitation',
};
const captions: Record<string, string> = {
  journey: 'Each bar is one stage, its length the official time it takes; the marker shows where today falls.',
  decision: 'From receipt to ceremony: earliest end with the priority service, latest with the standard target and the full ceremony window.',
  result: 'From booking the test to a decision on the application that needs your reference number.',
  ceremony: 'The ceremony window counted from your invitation; the certificate is presented at the end of it.',
};

export const friseSteps = (preset: string): FriseStep[] => steps[preset] ?? steps.journey;
export const friseLabels = (preset: string): FriseLabels => ({
  start: starts[preset] ?? starts.journey,
  startHelp: 'Change the date: every stage moves with it.',
  end: 'Estimated end',
  between: 'between', and: 'and', today: 'Today', done: 'Done', current: 'In progress', upcoming: 'Coming',
  day: 'day', days: 'days', week: 'week', weeks: 'weeks', month: 'month', months: 'months',
  milestone: 'milestone', upTo: 'up to',
  caption: captions[preset] ?? captions.journey,
});
