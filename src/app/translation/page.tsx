import type { Metadata } from "next";
import { translations } from "@/lib/data";
import { DictIcon } from "@/components/Artwork";

export const metadata: Metadata = {
  title: "Myth → Science Fiction",
  description:
    "The visual dictionary of Ulysses 31's transformation system: the sea becomes space, the ship becomes a starship, Olympus becomes a cosmic realm, and the Underworld becomes the Kingdom of Hades.",
  alternates: { canonical: "/translation" },
};

export default function TranslationPage() {
  return (
    <div className="container">
      <header className="section" style={{ marginTop: 0 }}>
        <span className="eyebrow">The Visual Dictionary</span>
        <h1 className="section-title">Myth → Science Fiction</h1>
        <p className="section-lead">
          <em>Ulysses 31</em> runs on a consistent translation system. The same
          rules turn ancient elements into science fiction across every episode.
          This is the key.
        </p>
      </header>

      <div className="dict-grid">
        {translations.map((t) => (
          <div className="dict-card" key={t.slug}>
            <DictIcon icon={t.icon} />
            <h2 className="dict-title">{t.concept}</h2>
            <p className="text-dim mb-0">{t.note}</p>
            <div className="dict-transform">
              <div className="side ancient">
                <span className="lbl">Ancient</span>
                {t.ancient}
              </div>
              <span className="arrow" aria-hidden="true">
                ⟶
              </span>
              <div className="side scifi">
                <span className="lbl">Ulysses 31</span>
                {t.scifi}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
