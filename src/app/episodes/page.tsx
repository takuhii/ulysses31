import type { Metadata } from "next";
import { EpisodeExplorer } from "@/components/EpisodeExplorer";
import { buildEpisodeSearchIndex, characterFilterOptions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Episode Explorer",
  description:
    "Browse all 26 episodes of Ulysses 31 and trace each one back to Homer's Odyssey, Greek and Roman mythology. Filter by source, adaptation type and character, or search across titles, myths and ancient texts.",
  alternates: { canonical: "/episodes" },
};

export default function EpisodesPage() {
  const index = buildEpisodeSearchIndex();
  const characterOptions = characterFilterOptions();

  return (
    <div className="container">
      <header className="section" style={{ marginTop: 0 }}>
        <span className="eyebrow">The Archive</span>
        <h1 className="section-title">Episode Explorer</h1>
        <p className="section-lead">
          All 26 voyages of the <em>Odyssey</em>, each traced back to the ancient
          myths that inspired it. Filter by source or adaptation type, choose a
          character, or search across titles, myths, characters and ancient texts.
        </p>
      </header>
      <EpisodeExplorer index={index} characterOptions={characterOptions} />
    </div>
  );
}
