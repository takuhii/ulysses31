import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  episodes,
  getEpisodeBySlug,
  getMythBySlug,
  getCharacterBySlug,
  getSourceBySlug,
  orderedEpisodes,
} from "@/lib/data";
import { ClassificationBadge, ConfidenceTag, AdaptationStrength, strengthFromEpisode } from "@/components/Badges";
import { MythologicalDNA } from "@/components/MythologicalDNA";
import { ComparisonCards } from "@/components/ComparisonCards";

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return episodes.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const episode = getEpisodeBySlug(params.slug);
  if (!episode) return { title: "Episode not found" };

  const mythNames = episode.myths
    .map((s) => getMythBySlug(s)?.name ?? s)
    .slice(0, 3)
    .join(", ");
  const description = `Explore the mythology behind Ulysses 31's "${episode.englishTitle}" (${episode.frenchTitle})${
    mythNames ? `, including ${mythNames}` : ""
  }. How the series reworked the ancient story into science fiction.`;

  return {
    title: episode.englishTitle,
    description,
    alternates: { canonical: `/episodes/${episode.slug}` },
    openGraph: {
      title: `${episode.englishTitle} — Ulysses 31 Mythology Companion`,
      description,
      type: "article",
    },
  };
}

export default function EpisodePage({ params }: Params) {
  const episode = getEpisodeBySlug(params.slug);
  if (!episode) notFound();

  const all = orderedEpisodes();
  const idx = all.findIndex((e) => e.slug === episode.slug);
  const prev = idx > 0 ? all[idx - 1] : undefined;
  const next = idx < all.length - 1 ? all[idx + 1] : undefined;

  const strength = strengthFromEpisode(episode.classification, episode.confidence);

  const characters = episode.characters
    .map((s) => getCharacterBySlug(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const myths = episode.myths
    .map((s) => getMythBySlug(s))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));
  const sourceEntries = episode.sources
    .map((s) => getSourceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <article className="container">
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/episodes">Episodes</Link>
        <span aria-hidden="true">/</span>
        <span>{episode.englishTitle}</span>
      </div>

      {/* Header */}
      <header className="detail-header">
        <span className="ep-number">EPISODE {String(episode.id).padStart(2, "0")} OF 26</span>
        <h1 className="detail-title">{episode.englishTitle}</h1>
        <p className="detail-french">{episode.frenchTitle}</p>
        <div className="detail-meta">
          <ClassificationBadge value={episode.classification} />
          <ConfidenceTag value={episode.confidence} />
          <AdaptationStrength value={strength} />
        </div>
      </header>

      {/* Overview — two columns */}
      <section className="section" style={{ marginTop: 0 }}>
        <span className="eyebrow">Episode Overview</span>
        <div className="two-col">
          <div className="panel col-panel scifi">
            <span className="col-tag">Ulysses 31 — 31st century</span>
            <p className="mb-0 text-dim">{episode.summary}</p>
          </div>
          <div className="panel col-panel ancient">
            <span className="col-tag">Ancient mythology</span>
            <p className="mb-0 text-dim">{episode.ancientStory}</p>
          </div>
        </div>
      </section>

      {/* Uncertainty note */}
      {episode.uncertaintyNote && (
        <section className="section">
          <div className="callout">
            <span className="callout-tag">A note on certainty</span>
            {episode.uncertaintyNote}
          </div>
        </section>
      )}

      {/* Mythological DNA */}
      <section className="section">
        <span className="eyebrow">The Lineage</span>
        <h2 className="section-title">Mythological DNA</h2>
        <p className="section-lead">
          How this episode traces from the screen back through the myth to the
          ancient text. {episode.dna.length > 1 && "This is a hybrid, so it has more than one branch."}
        </p>
        <div className="panel" style={{ marginTop: 18 }}>
          <MythologicalDNA episodeTitle={episode.englishTitle} branches={episode.dna} />
        </div>
      </section>

      {/* What changed */}
      <section className="section">
        <span className="eyebrow">From Myth to Science Fiction</span>
        <h2 className="section-title">What changed?</h2>
        <p className="section-lead">{episode.adaptation}</p>
        <div style={{ marginTop: 20 }}>
          <ComparisonCards comparisons={episode.comparisons} />
        </div>
      </section>

      {/* Characters + myths + motifs */}
      <section className="section">
        <div className="grid grid-2">
          {myths.length > 0 && (
            <div className="panel">
              <span className="eyebrow">Mythological Sources</span>
              <div className="tag-links" style={{ marginTop: 6 }}>
                {myths.map((m) => (
                  <Link key={m.slug} href={`/myths/${m.slug}`} className="tag-link">
                    {m.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
          {characters.length > 0 && (
            <div className="panel">
              <span className="eyebrow">Characters Involved</span>
              <div className="tag-links" style={{ marginTop: 6 }}>
                {characters.map((c) => (
                  <Link key={c.slug} href={`/myths/${c.slug}`} className="tag-link">
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        {episode.motifs.length > 0 && (
          <div className="panel" style={{ marginTop: 20 }}>
            <span className="eyebrow">Important Motifs</span>
            <div className="chip-row" style={{ marginTop: 6 }}>
              {episode.motifs.map((m) => (
                <span key={m} className="chip">
                  {m}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Sources & further reading */}
      <section className="section">
        <span className="eyebrow">Sources &amp; Further Reading</span>
        <h2 className="section-title">Relevant ancient texts</h2>
        <p className="section-lead">
          Where an interpretation comes from modern scholarship rather than the
          ancient text itself, we distinguish the two. The primary scholarly
          reference for this project is the Our Mythical Childhood Survey.
        </p>
        <ul className="source-list" style={{ marginTop: 16 }}>
          {sourceEntries.map((s) => (
            <li key={s.slug}>
              <span className="src-author">{s.author}</span>
              <span>
                <Link href={`/sources/${s.slug}`}>{s.work}</Link>
                {s.externalUrl && (
                  <>
                    {" "}
                    <a href={s.externalUrl} target="_blank" rel="noopener noreferrer">
                      ↗
                    </a>
                  </>
                )}
                <span className="text-faint" style={{ display: "block", color: "var(--c-text-faint)", fontSize: "0.85rem" }}>
                  {s.tradition}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Prev / next */}
      <nav className="section flex items-center justify-between" style={{ gap: 12, flexWrap: "wrap" }} aria-label="Episode navigation">
        {prev ? (
          <Link href={`/episodes/${prev.slug}`} className="btn btn-secondary">
            ← {String(prev.id).padStart(2, "0")} {prev.englishTitle}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/episodes/${next.slug}`} className="btn btn-secondary">
            {String(next.id).padStart(2, "0")} {next.englishTitle} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
