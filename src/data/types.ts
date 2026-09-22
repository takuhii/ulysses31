// Core domain types for the Ulysses 31 Mythology Companion.
// All content is stored as structured data so UI components never hard-code lore.

export type Classification = "direct" | "hybrid" | "motif" | "original";

export type Confidence = "high" | "probable" | "possible" | "uncertain";

/** Broad source category used for filtering in the episode explorer. */
export type SourceCategory =
  | "odyssey"
  | "greek"
  | "roman"
  | "other"
  | "original";

export interface DnaBranch {
  /** The mythological figure / concept this branch represents. */
  myth: string;
  /** Slug into the myths dataset, when a matching entry exists. */
  mythSlug?: string;
  /** The ancient text this branch traces back to. */
  ancientText: string;
  /** Slug into the sources dataset, when a matching entry exists. */
  sourceSlug?: string;
}

export interface Comparison {
  /** The ancient / mythological element. */
  ancient: string;
  /** How Ulysses 31 reinterprets it. */
  scifi: string;
}

export interface Episode {
  id: number;
  slug: string;
  englishTitle: string;
  frenchTitle: string;
  classification: Classification;
  /** Broad source categories, used for filtering. */
  sourceCategories: SourceCategory[];
  /** Slugs into the ancient sources dataset. */
  sources: string[];
  /** Slugs into the myths dataset. */
  myths: string[];
  /** Slugs into the characters dataset. */
  characters: string[];
  summary: string;
  ancientStory: string;
  adaptation: string;
  motifs: string[];
  comparisons: Comparison[];
  dna: DnaBranch[];
  confidence: Confidence;
  /** Optional note flagging that a connection is interpretive rather than certain. */
  uncertaintyNote?: string;
  keywords: string[];
}

export interface Myth {
  slug: string;
  name: string;
  /** e.g. "Greek", "Roman", "Inca", "Flood tradition". */
  tradition: string;
  category: SourceCategory;
  /** One-line role/summary. */
  role: string;
  description: string;
  /** Slugs into ancient sources. */
  sources: string[];
  /** How the series reinterprets this figure. */
  reinterpretation: string;
}

export interface AncientBook {
  label: string;
  detail: string;
}

export interface Source {
  slug: string;
  author: string;
  work: string;
  category: SourceCategory;
  tradition: string;
  description: string;
  books?: AncientBook[];
  /** Optional external reference link. */
  externalUrl?: string;
}

export interface Character {
  slug: string;
  name: string;
  tradition: string;
  category: SourceCategory;
  role: string;
  description: string;
  /** Slugs into ancient sources. */
  sources: string[];
  reinterpretation: string;
}

export interface TranslationEntry {
  slug: string;
  concept: string;
  ancient: string;
  scifi: string;
  note: string;
  /** Simple icon key for the illustrated card. */
  icon: TranslationIcon;
}

export type TranslationIcon =
  | "sea"
  | "ship"
  | "olympus"
  | "underworld"
  | "monster"
  | "fire"
  | "atlas"
  | "lotus";
