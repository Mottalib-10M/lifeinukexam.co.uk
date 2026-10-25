/**
 * One page = ONE data file in `src/content/pages/<id>.ts` (English, en-GB). How to add a page:
 * CONTRIBUTING-PAGES.md.
 */
import type { Helpers } from './helpers';

export type Lang = 'en';
/** Section of the site: menus, footer and home lists follow it. */
export type Group = 'test' | 'practice' | 'citizenship' | 'english' | 'settle';
export interface FAQ { q: string; a: string }
/**
 * `quiz` (props: mode 'exam' | 'practice', chapter (index), timed, sets (numbered tests)),
 * `bank` (props: chapter), `date` (props: route '6(1)' | '6(2)', eu), `cost`, `english`, `centres`
 * or `mini:<spec>` from `lib/mini-specs.ts`.
 */
export interface ToolDef { kind: string; props?: Record<string, string | number | boolean> }
export interface PageText {
  /** Path after /en/, without slashes at the ends; may hold one "/" (life-in-the-uk-test/practice). */
  slug: string; nav: string; card: string;
  /** 50–60 characters, key term first (RECETTE §11). */
  title: string;
  /** 150–160 characters. */
  description: string;
  h1: string; intro: string;
  /** Citable block, one paragraph of 120 words or more (RECETTE §21), folded after its first sentence. */
  resume: (h: Helpers) => string;
  faqs: (h: Helpers) => FAQ[];
  /** HTML; `<!--tool:mini:spec-->` or `<!--tool:date|{"route":"6(2)"}-->` places a tool in the body. */
  body: (h: Helpers) => string;
}
export interface PageDef {
  id: string; group: Group; order: number;
  tool?: ToolDef; mini?: ToolDef;
  related: string[];
  /** Keys of `data/params-2026.json` sources. */
  sources: string[];
  /** Démarche page (application, booking, fees): the "independent, not a government service" line under the H1. */
  demarche?: boolean;
  en: PageText;
}
export const definePage = (g: PageDef): PageDef => g;
