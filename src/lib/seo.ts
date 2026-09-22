import type { Episode, Source } from "@/data/types";
import { getMythBySlug, type MythEntity } from "./data";

export const SITE_URL = "https://takuhii.github.io/ulysses31";
export const SITE_NAME = "Ulysses 31 — The Mythology Companion";

/** Absolute URL for a path, respecting the deployment base URL. */
export function abs(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean}`;
}

interface Crumb {
  name: string;
  path: string;
}

/** schema.org BreadcrumbList from an ordered list of crumbs. */
export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

/** The site itself: WebSite (with search action) + Organization publisher. */
export function siteLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      description:
        "An educational reference exploring the ancient myths behind the 1981 animated series Ulysses 31.",
      inLanguage: "en",
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/episodes/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  ];
}

/** A single episode as a TVEpisode within the series. */
export function episodeLd(episode: Episode) {
  const mythNames = episode.myths
    .map((s) => getMythBySlug(s)?.name ?? s)
    .filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "TVEpisode",
    name: episode.englishTitle,
    alternateName: episode.frenchTitle,
    episodeNumber: episode.id,
    url: abs(`/episodes/${episode.slug}`),
    inLanguage: "en",
    description: episode.summary,
    keywords: episode.keywords.join(", "),
    about: mythNames.map((name) => ({ "@type": "Thing", name })),
    partOfSeries: {
      "@type": "TVSeries",
      name: "Ulysses 31",
      alternateName: "Ulysse 31",
      numberOfEpisodes: 26,
      genre: ["Science fiction", "Animation"],
      inLanguage: ["en", "fr"],
    },
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

/** An ancient literary source as a Book / CreativeWork. */
export function sourceLd(source: Source) {
  return {
    "@context": "https://schema.org",
    "@type": source.category === "greek" && source.slug === "warsaw-survey" ? "CreativeWork" : "Book",
    name: source.work,
    author: { "@type": "Person", name: source.author },
    url: abs(`/sources/${source.slug}`),
    description: source.description,
    ...(source.externalUrl ? { sameAs: source.externalUrl } : {}),
  };
}

/** A mythological figure/concept as a DefinedTerm in a glossary. */
export function mythLd(entity: MythEntity) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: entity.name,
    description: entity.description,
    url: abs(`/myths/${entity.slug}`),
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Ulysses 31 Mythology Index",
      url: abs("/myths"),
    },
  };
}
