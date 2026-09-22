import { episodes } from "@/data/episodes";
import { myths } from "@/data/myths";
import { sources } from "@/data/sources";
import { characters } from "@/data/characters";
import { translations } from "@/data/translations";
import type {
  Classification,
  Confidence,
  Episode,
  Myth,
  Source,
  Character,
  SourceCategory,
} from "@/data/types";

export { episodes, myths, sources, characters, translations };

// ---------------------------------------------------------------------------
// Lookups
// ---------------------------------------------------------------------------

export function getEpisodeBySlug(slug: string): Episode | undefined {
  return episodes.find((e) => e.slug === slug);
}

export function getMythBySlug(slug: string): Myth | undefined {
  return myths.find((m) => m.slug === slug);
}

export function getSourceBySlug(slug: string): Source | undefined {
  return sources.find((s) => s.slug === slug);
}

export function getCharacterBySlug(slug: string): Character | undefined {
  return characters.find((c) => c.slug === slug);
}

// ---------------------------------------------------------------------------
// Cross-links: given a myth/source/character, which episodes reference it?
// ---------------------------------------------------------------------------

export function episodesForMyth(slug: string): Episode[] {
  return episodes.filter((e) => e.myths.includes(slug));
}

export function episodesForSource(slug: string): Episode[] {
  return episodes.filter((e) => e.sources.includes(slug));
}

export function episodesForCharacter(slug: string): Episode[] {
  return episodes.filter((e) => e.characters.includes(slug));
}

export function orderedEpisodes(): Episode[] {
  return [...episodes].sort((a, b) => a.id - b.id);
}

// ---------------------------------------------------------------------------
// Derived statistics (used on the homepage instead of hard-coded numbers)
// ---------------------------------------------------------------------------

export interface SiteStats {
  episodeCount: number;
  mythCount: number;
  sourceCount: number;
  authorCount: number;
  characterCount: number;
  directCount: number;
  hybridCount: number;
  motifCount: number;
  originalCount: number;
}

export function getSiteStats(): SiteStats {
  const uniqueAuthors = new Set(
    sources.filter((s) => s.slug !== "warsaw-survey").map((s) => s.author),
  );
  return {
    episodeCount: episodes.length,
    mythCount: myths.length,
    sourceCount: sources.length,
    authorCount: uniqueAuthors.size,
    characterCount: characters.length,
    directCount: countByClassification("direct"),
    hybridCount: countByClassification("hybrid"),
    motifCount: countByClassification("motif"),
    originalCount: countByClassification("original"),
  };
}

function countByClassification(c: Classification): number {
  return episodes.filter((e) => e.classification === c).length;
}

// ---------------------------------------------------------------------------
// Presentation helpers
// ---------------------------------------------------------------------------

export const classificationLabels: Record<Classification, string> = {
  direct: "Direct",
  hybrid: "Hybrid",
  motif: "Motif",
  original: "Original",
};

export const classificationDescriptions: Record<Classification, string> = {
  direct: "A recognisable adaptation of a specific ancient story.",
  hybrid: "Two or more myths have been combined.",
  motif: "Uses an identifiable mythological idea but not the original story.",
  original: "No specific ancient source has been identified.",
};

export const confidenceLabels: Record<Confidence, string> = {
  high: "Well-established connection",
  probable: "Probable influence",
  possible: "Possible influence",
  uncertain: "No confirmed source",
};

export const sourceCategoryLabels: Record<SourceCategory, string> = {
  odyssey: "Homer's Odyssey",
  greek: "Greek mythology",
  roman: "Roman mythology",
  other: "Other mythology",
  original: "Original / uncertain",
};

// ---------------------------------------------------------------------------
// Search index for the episode explorer
// ---------------------------------------------------------------------------

export interface EpisodeSearchRecord {
  episode: Episode;
  haystack: string;
}

export function buildEpisodeSearchIndex(): EpisodeSearchRecord[] {
  return episodes.map((episode) => {
    const mythNames = episode.myths
      .map((slug) => getMythBySlug(slug)?.name ?? slug)
      .join(" ");
    const characterNames = episode.characters
      .map((slug) => getCharacterBySlug(slug)?.name ?? slug)
      .join(" ");
    const sourceNames = episode.sources
      .map((slug) => {
        const s = getSourceBySlug(slug);
        return s ? `${s.author} ${s.work}` : slug;
      })
      .join(" ");
    const haystack = [
      episode.englishTitle,
      episode.frenchTitle,
      mythNames,
      characterNames,
      sourceNames,
      episode.keywords.join(" "),
      episode.summary,
    ]
      .join(" ")
      .toLowerCase();
    return { episode, haystack };
  });
}

/** Distinct character slugs used across episodes, for filter menus. */
export function characterFilterOptions(): { slug: string; name: string }[] {
  const used = new Set<string>();
  episodes.forEach((e) => e.characters.forEach((c) => used.add(c)));
  return characters
    .filter((c) => used.has(c.slug))
    .map((c) => ({ slug: c.slug, name: c.name }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

// ---------------------------------------------------------------------------
// Unified mythological entity resolver.
// The /myths/[slug] route serves both myths and named characters, since many
// figures (Circe, Atlas, Orpheus...) appear in both datasets and episode pages
// link characters there too.
// ---------------------------------------------------------------------------

export interface MythEntity {
  slug: string;
  name: string;
  tradition: string;
  category: SourceCategory;
  role: string;
  description: string;
  sources: string[];
  reinterpretation: string;
  kind: "myth" | "character";
}

export function getMythEntity(slug: string): MythEntity | undefined {
  const myth = getMythBySlug(slug);
  if (myth) return { ...myth, kind: "myth" };
  const character = getCharacterBySlug(slug);
  if (character) return { ...character, kind: "character" };
  return undefined;
}

/** All slugs that need a static page under /myths (myths + characters, deduped). */
export function allMythEntitySlugs(): string[] {
  const set = new Set<string>();
  myths.forEach((m) => set.add(m.slug));
  characters.forEach((c) => set.add(c.slug));
  return Array.from(set);
}

/** Episodes referencing an entity via either its myth or character slug. */
export function episodesForEntity(slug: string): Episode[] {
  return episodes
    .filter((e) => e.myths.includes(slug) || e.characters.includes(slug))
    .sort((a, b) => a.id - b.id);
}
