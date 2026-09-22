import type { Metadata } from "next";
import { UniverseMap } from "@/components/UniverseMap";
import { orderedEpisodes } from "@/lib/data";

export const metadata: Metadata = {
  title: "The Mythological Universe",
  description:
    "An interactive knowledge graph connecting every Ulysses 31 episode to the mythological traditions behind it — Homer's Odyssey, Greek and Roman mythology, and flood traditions.",
  alternates: { canonical: "/map" },
};

export default function MapPage() {
  const mapEpisodes = orderedEpisodes().map((e) => ({
    id: e.id,
    slug: e.slug,
    title: e.englishTitle,
    categories: e.sourceCategories,
  }));

  return (
    <div className="container">
      <header className="section" style={{ marginTop: 0 }}>
        <span className="eyebrow">The Knowledge Graph</span>
        <h1 className="section-title">The Mythological Universe of Ulysses 31</h1>
        <p className="section-lead">
          At the centre is the series itself. Around it orbit the mythological
          traditions it draws upon, and around those, all 26 episodes. Follow the
          glowing routes to see how everything connects, then click through to any
          episode or tradition.
        </p>
      </header>
      <UniverseMap episodes={mapEpisodes} />
    </div>
  );
}
