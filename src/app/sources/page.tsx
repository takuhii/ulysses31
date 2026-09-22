import type { Metadata } from "next";
import Link from "next/link";
import { sources, episodesForSource } from "@/lib/data";

export const metadata: Metadata = {
  title: "Ancient Sources",
  description:
    "The ancient literary sources behind Ulysses 31: Homer's Odyssey, the Homeric Hymn to Demeter, Sophocles' Oedipus Rex, Apollonius' Argonautica, Ovid's Metamorphoses and Virgil's Georgics.",
  alternates: { canonical: "/sources" },
};

export default function SourcesPage() {
  return (
    <div className="container">
      <header className="section" style={{ marginTop: 0 }}>
        <span className="eyebrow">The Library</span>
        <h1 className="section-title">Ancient Sources</h1>
        <p className="section-lead">
          The classical texts that <em>Ulysses 31</em> draws upon. Each source
          lists the episodes that use it, so you can trace a single ancient book
          across the whole series.
        </p>
      </header>

      <div className="stack">
        {sources.map((s) => {
          const eps = episodesForSource(s.slug);
          return (
            <div className="panel" key={s.slug} id={s.slug}>
              <div className="flex items-center justify-between" style={{ flexWrap: "wrap", gap: 10 }}>
                <div>
                  <span className="eyebrow" style={{ marginBottom: 4 }}>
                    {s.tradition}
                  </span>
                  <h2 className="section-title" style={{ fontSize: "1.5rem", margin: 0 }}>
                    <Link href={`/sources/${s.slug}`}>{s.work}</Link>
                  </h2>
                  <p className="detail-french" style={{ fontStyle: "normal", marginTop: 4 }}>
                    {s.author}
                  </p>
                </div>
                {s.externalUrl && (
                  <a
                    href={s.externalUrl}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read online ↗
                  </a>
                )}
              </div>

              <p className="text-dim" style={{ marginTop: 12 }}>
                {s.description}
              </p>

              {s.books && s.books.length > 0 && (
                <div className="grid grid-2" style={{ marginTop: 8 }}>
                  {s.books.map((b) => (
                    <div key={b.label} className="compare-card" style={{ display: "block" }}>
                      <span className="src-author" style={{ display: "block" }}>
                        {b.label}
                      </span>
                      <span className="text-dim" style={{ fontSize: "0.92rem" }}>
                        {b.detail}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {eps.length > 0 && (
                <div style={{ marginTop: 16 }}>
                  <span className="eyebrow">Used by episodes</span>
                  <div className="tag-links" style={{ marginTop: 6 }}>
                    {eps.map((ep) => (
                      <Link key={ep.slug} href={`/episodes/${ep.slug}`} className="tag-link">
                        {String(ep.id).padStart(2, "0")} · {ep.englishTitle}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
