import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sources, getSourceBySlug, episodesForSource } from "@/lib/data";
import { EpisodeCard } from "@/components/EpisodeCard";

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return sources.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const source = getSourceBySlug(params.slug);
  if (!source) return { title: "Source not found" };
  const description = `${source.author}'s ${source.work} and its influence on Ulysses 31. ${source.description}`.slice(0, 200);
  return {
    title: `${source.work} — ${source.author}`,
    description,
    alternates: { canonical: `/sources/${source.slug}` },
    openGraph: {
      title: `${source.work} — Ulysses 31 Mythology Companion`,
      description,
      type: "article",
    },
  };
}

export default function SourcePage({ params }: Params) {
  const source = getSourceBySlug(params.slug);
  if (!source) notFound();

  const eps = episodesForSource(source.slug);

  return (
    <article className="container">
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/sources">Sources</Link>
        <span aria-hidden="true">/</span>
        <span>{source.work}</span>
      </div>

      <header className="detail-header">
        <span className="ep-number">{source.tradition.toUpperCase()}</span>
        <h1 className="detail-title">{source.work}</h1>
        <p className="detail-french" style={{ fontStyle: "normal" }}>
          {source.author}
        </p>
        {source.externalUrl && (
          <div style={{ marginTop: 16 }}>
            <a href={source.externalUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              Read online ↗
            </a>
          </div>
        )}
      </header>

      <section className="section" style={{ marginTop: 0 }}>
        <div className="panel">
          <p className="mb-0 text-dim">{source.description}</p>
        </div>
      </section>

      {source.books && source.books.length > 0 && (
        <section className="section">
          <span className="eyebrow">Key Passages</span>
          <h2 className="section-title" style={{ fontSize: "1.4rem" }}>
            Books &amp; episodes drawn upon
          </h2>
          <div className="grid grid-2" style={{ marginTop: 16 }}>
            {source.books.map((b) => (
              <div key={b.label} className="panel">
                <span className="src-author" style={{ display: "block", fontSize: "1.1rem" }}>
                  {b.label}
                </span>
                <span className="text-dim">{b.detail}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="section">
        <span className="eyebrow">Cross-References</span>
        <h2 className="section-title" style={{ fontSize: "1.4rem" }}>
          Ulysses 31 episodes using this source
        </h2>
        {eps.length === 0 ? (
          <p className="text-dim">No episodes are linked to this source yet.</p>
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
