import type { Metadata } from "next";
import Link from "next/link";
import { myths, episodesForMyth, sourceCategoryLabels } from "@/lib/data";
import type { SourceCategory } from "@/data/types";

export const metadata: Metadata = {
  title: "Mythology Index",
  description:
    "An interactive index of the mythological figures behind Ulysses 31 — Odysseus, Poseidon, the Cyclops, Circe, Sisyphus, Atlas, the Minotaur, Orpheus, Hades and more.",
  alternates: { canonical: "/myths" },
};

const ORDER: SourceCategory[] = ["odyssey", "greek", "roman", "other", "original"];

export default function MythsPage() {
  const grouped = ORDER.map((cat) => ({
    category: cat,
    items: myths.filter((m) => m.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="container">
      <header className="section" style={{ marginTop: 0 }}>
        <span className="eyebrow">The Pantheon</span>
        <h1 className="section-title">Mythology Index</h1>
        <p className="section-lead">
          Every myth is a doorway. Follow a figure to the ancient texts that
          record it and to every <em>Ulysses 31</em> episode that draws upon it.
        </p>
      </header>

      {grouped.map((group) => (
        <section className="section" key={group.category}>
          <h2 className="section-title" style={{ fontSize: "1.4rem" }}>
            {sourceCategoryLabels[group.category]}
          </h2>
          <div className="grid grid-auto" style={{ marginTop: 16 }}>
            {group.items.map((m) => {
              const eps = episodesForMyth(m.slug);
              return (
                <Link key={m.slug} href={`/myths/${m.slug}`} className="card">
                  <h3 className="ep-title" style={{ marginTop: 0 }}>
                    {m.name}
                  </h3>
                  <p className="ep-french" style={{ fontStyle: "normal" }}>
                    {m.tradition} · {m.role}
                  </p>
                  <p className="ep-desc">{m.description}</p>
                  <span className="ep-number" style={{ marginTop: "auto", paddingTop: 12 }}>
                    {eps.length} episode{eps.length === 1 ? "" : "s"}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
