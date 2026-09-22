import Link from "next/link";
import { HeroArt } from "@/components/Artwork";
import { EpisodeCard } from "@/components/EpisodeCard";
import {
  getSiteStats,
  orderedEpisodes,
  classificationLabels,
  classificationDescriptions,
} from "@/lib/data";
import type { Classification } from "@/data/types";

export default function HomePage() {
  const stats = getSiteStats();
  const featured = orderedEpisodes().filter((e) =>
    ["vengeance-of-the-gods", "the-magic-spells-of-circe", "trapped-between-fire-and-ice", "the-kingdom-of-hades"].includes(
      e.slug,
    ),
  );

  const classItems: Classification[] = ["direct", "hybrid", "motif", "original"];

  return (
    <>
      {/* Hero */}
      <section className="hero container">
        <div className="hero-art">
          <HeroArt />
        </div>
        <h1>ULYSSES 31</h1>
        <p className="hero-sub">The Mythology Companion</p>
        <p className="hero-tag">The Odyssey was only the beginning.</p>
        <p className="hero-support">
          Explore the ancient myths hidden inside <em>Ulysses 31</em> — from
          Homer&rsquo;s <em>Odyssey</em> and the Cyclops to Sisyphus, Circe, the
          Minotaur, Atlas, Orpheus and the Kingdom of Hades.
        </p>
        <div className="hero-cta">
          <Link href="/episodes" className="btn btn-primary">
            Explore the Episodes
          </Link>
          <Link href="/myths" className="btn btn-secondary">
            Explore the Myths
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="container section" aria-label="Site statistics">
        <div className="stats-grid">
          <Stat num={stats.episodeCount} label="Episodes" />
          <Stat num={`${stats.mythCount}+`} label="Mythological sources & traditions" />
          <Stat num={stats.authorCount} label="Major ancient authors & traditions" />
          <Stat num={1} label="Journey home" />
        </div>
      </section>

      {/* Concept */}
      <section className="container section">
        <div className="panel">
          <span className="eyebrow">The Central Idea</span>
          <h2 className="section-title">
            What if Homer&rsquo;s <span className="text-gold">Odyssey</span> happened in the 31st century?
          </h2>
          <p className="section-lead">
            <em>Ulysses 31</em> takes the mythology of Homer&rsquo;s <em>Odyssey</em>,
            transports it into deep space, and fuses it with other Greek myths,
            Roman mythology and traditions from around the world. This archive
            traces every episode back to the ancient stories that inspired it —
            and shows exactly what the writers kept, and what they transformed.
          </p>
          <div className="meander" aria-hidden="true" />
          <div className="grid grid-2" style={{ marginTop: 8 }}>
            <div className="col-panel ancient">
              <span className="col-tag">The Ancient World</span>
              <p className="text-dim mb-0">
                A hero returns from the Trojan War across a sea of monsters,
                gods and enchantments, longing for home.
              </p>
            </div>
            <div className="col-panel scifi">
              <span className="col-tag">The 31st Century</span>
              <p className="text-dim mb-0">
                A commander is exiled across the cosmos by the gods of Olympus,
                steering the <em>Odyssey</em> toward Earth through the Kingdom of Hades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Classification key */}
      <section className="container section">
        <span className="eyebrow">How Episodes Are Classified</span>
        <h2 className="section-title">Four kinds of adaptation</h2>
        <p className="section-lead">
          Every episode is labelled by how closely it follows an ancient story.
          These are guides, not absolute scholarly facts — where a connection is
          interpretive, we say so.
        </p>
        <div className="grid grid-2" style={{ marginTop: 20 }}>
          {classItems.map((c) => (
            <div key={c} className="panel">
              <span className={`badge badge-${c}`}>{classificationLabels[c]}</span>
              <p className="text-dim" style={{ margin: "12px 0 0" }}>
                {classificationDescriptions[c]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured episodes */}
      <section className="container section">
        <div className="flex items-center justify-between" style={{ flexWrap: "wrap", gap: 12 }}>
          <div>
            <span className="eyebrow">From the Archive</span>
            <h2 className="section-title mb-0">Featured episodes</h2>
          </div>
          <Link href="/episodes" className="btn btn-secondary">
            All 26 episodes
          </Link>
        </div>
        <div className="grid grid-auto" style={{ marginTop: 22 }}>
          {featured.map((ep) => (
            <EpisodeCard key={ep.slug} episode={ep} />
          ))}
        </div>
      </section>

      {/* Explore CTA cards */}
      <section className="container section">
        <div className="grid grid-3">
          <Link href="/odyssey" className="card">
            <span className="eyebrow">Two Journeys</span>
            <h3 className="ep-title">The Odyssey Timeline</h3>
            <p className="ep-desc">
              Follow Homer&rsquo;s Odysseus and the crew of the <em>Odyssey</em>
              side by side, stop for stop.
            </p>
          </Link>
          <Link href="/map" className="card">
            <span className="eyebrow">Knowledge Graph</span>
            <h3 className="ep-title">The Mythological Universe</h3>
            <p className="ep-desc">
              An interactive map connecting episodes to the myths and ancient
              texts behind them.
            </p>
          </Link>
          <Link href="/translation" className="card">
            <span className="eyebrow">Visual Dictionary</span>
            <h3 className="ep-title">Myth → Science Fiction</h3>
            <p className="ep-desc">
              The recurring transformation system: the sea becomes space, the
              ship becomes a starship.
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}

function Stat({ num, label }: { num: number | string; label: string }) {
  return (
    <div className="stat">
      <div className="stat-num">{num}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
