import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getMythEntity,
  allMythEntitySlugs,
  episodesForEntity,
  getSourceBySlug,
} from "@/lib/data";
import { EpisodeCard } from "@/components/EpisodeCard";

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return allMythEntitySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const entity = getMythEntity(params.slug);
  if (!entity) return { title: "Not found" };
  const description = `${entity.name} in ancient mythology and in Ulysses 31: ${entity.role}. ${entity.reinterpretation}`;
  return {
    title: entity.name,
    description,
    alternates: { canonical: `/myths/${entity.slug}` },
    openGraph: {
      title: `${entity.name} — Ulysses 31 Mythology Companion`,
      description,
      type: "article",
    },
  };
}

export default function MythPage({ params }: Params) {
  const entity = getMythEntity(params.slug);
  if (!entity) notFound();

  const eps = episodesForEntity(entity.slug);
  const sourceEntries = entity.sources
    .map((s) => getSourceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <article className="container">
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/myths">Myths</Link>
        <span aria-hidden="true">/</span>
        <span>{entity.name}</span>
      </div>

      <header className="detail-header">
        <span className="ep-number">{entity.tradition.toUpperCase()}</span>
        <h1 className="detail-title">{entity.name}</h1>
        <p className="detail-french" style={{ fontStyle: "normal" }}>
          {entity.role}
        </p>
      </header>

      <section className="section" style={{ marginTop: 0 }}>
        <div className="two-col">
          <div className="panel col-panel ancient">
            <span className="col-tag">Who / what it is</span>
            <p className="mb-0 text-dim">{entity.description}</p>
          </div>
          <div className="panel col-panel scifi">
            <span className="col-tag">How Ulysses 31 reinterprets it</span>
            <p className="mb-0 text-dim">{entity.reinterpretation}</p>
          </div>
        </div>
      </section>

      {sourceEntries.length > 0 && (
        <section className="section">
          <span className="eyebrow">Ancient Sources</span>
          <h2 className="section-title" style={{ fontSize: "1.4rem" }}>
            Where the tradition is recorded
          </h2>
          <ul className="source-list" style={{ marginTop: 12 }}>
            {sourceEntries.map((s) => (
              <li key={s.slug}>
                <span className="src-author">{s.author}</span>
                <span>
                  <Link href={`/sources/${s.slug}`}>{s.work}</Link>
                  <span style={{ display: "block", color: "var(--c-text-faint)", fontSize: "0.85rem" }}>
                    {s.tradition}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="section">
        <span className="eyebrow">On Screen</span>
        <h2 className="section-title" style={{ fontSize: "1.4rem" }}>
          Ulysses 31 appearances
        </h2>
        {eps.length === 0 ? (
          <p className="text-dim">
            This figure informs the wider mythological background of the series
            rather than a single named episode.
          </p>
        ) : (
          <div className="grid grid-auto" style={{ marginTop: 16 }}>
            {eps.map((ep) => (
              <EpisodeCard key={ep.slug} episode={ep} />
            ))}
          </div>
        )}
      </section>
    </article>
  );
}
