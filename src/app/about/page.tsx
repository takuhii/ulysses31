import type { Metadata } from "next";
import Link from "next/link";
import {
  classificationLabels,
  classificationDescriptions,
  getSiteStats,
} from "@/lib/data";
import type { Classification } from "@/data/types";

export const metadata: Metadata = {
  title: "About & Methodology",
  description:
    "About the Ulysses 31 Mythology Companion — an educational reference examining the myths behind the 1981 French-Japanese series, and the methodology used to classify each adaptation.",
  alternates: { canonical: "/about" },
};

const CLASS_ORDER: Classification[] = ["direct", "hybrid", "motif", "original"];

export default function AboutPage() {
  const stats = getSiteStats();

  return (
    <div className="container">
      <header className="section" style={{ marginTop: 0 }}>
        <span className="eyebrow">About This Archive</span>
        <h1 className="section-title">A mythology reference, not a fan reproduction</h1>
      </header>

      <section className="section" style={{ marginTop: 0 }}>
        <div className="panel prose">
          <p>
            <em>Ulysses 31</em> (<em>Ulysse 31</em>) is a French-Japanese animated
            series first broadcast in 1981 that reimagines Homer&rsquo;s{" "}
            <em>Odyssey</em> in the 31st century. Its hero, Ulysses, angers the
            gods of Olympus and is condemned to wander the cosmos with a comatose
            crew until he can reach the Kingdom of Hades and find his way home to
            Earth.
          </p>
          <p>
            This site examines the mythology <strong>behind</strong> the series
            rather than attempting to reproduce the original programme. It uses no
            copyrighted screenshots or promotional artwork; every graphic here is
            an original work inspired by Greek pottery, astronomical charts,
            ancient architecture and retro-futuristic design.
          </p>
          <p>
            Across {stats.episodeCount} episodes the series draws on more than{" "}
            {stats.mythCount} mythological figures and traditions and at least{" "}
            {stats.authorCount} major ancient authors. Some of these connections
            are explicit and well established; others are scholarly interpretations
            or probable influences. Where a link is uncertain, we say so plainly
            rather than presenting it as fact.
          </p>
        </div>
      </section>

      <section className="section">
        <span className="eyebrow">Methodology</span>
        <h2 className="section-title" style={{ fontSize: "1.5rem" }}>
          How each episode is classified
        </h2>
        <p className="section-lead">
          Every episode carries one of four classifications. These describe how
          closely it follows an identifiable ancient story — they are a guide to
          reading, not an absolute scholarly ruling.
        </p>
        <div className="grid grid-2" style={{ marginTop: 20 }}>
          {CLASS_ORDER.map((c) => (
            <div key={c} className="panel">
              <span className={`badge badge-${c}`}>{classificationLabels[c]}</span>
              <p className="text-dim" style={{ margin: "12px 0 0" }}>
                {classificationDescriptions[c]}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <span className="eyebrow">On Certainty</span>
        <h2 className="section-title" style={{ fontSize: "1.5rem" }}>
          Probable and possible influences
        </h2>
        <div className="callout">
          <span className="callout-tag">Reading the confidence labels</span>
          Where an interpretation rests on a recurring motif or modern scholarship
          rather than a named figure in the ancient text, episodes are marked as a{" "}
          <strong>probable influence</strong> or <strong>possible influence</strong>.
          Classification is never communicated by colour alone — each badge carries
          a label and a symbol, and each connection its own note.
        </div>
      </section>

      <section className="section">
        <span className="eyebrow">Sources</span>
        <h2 className="section-title" style={{ fontSize: "1.5rem" }}>
          Where this comes from
        </h2>
        <div className="panel prose">
          <p>
            The primary scholarly reference for this project is the{" "}
            <a
              href="https://www.omc.obta.al.uw.edu.pl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Our Mythical Childhood
            </a>{" "}
            survey at the University of Warsaw, which catalogues the reception of
            classical antiquity in children&rsquo;s and young-adult culture.
            Ancient texts referenced include Homer&rsquo;s <em>Odyssey</em>, the{" "}
            <em>Homeric Hymns</em>, Sophocles&rsquo; <em>Oedipus Rex</em>,
            Apollonius&rsquo; <em>Argonautica</em>, Ovid&rsquo;s{" "}
            <em>Metamorphoses</em> and Virgil&rsquo;s <em>Georgics</em>. Browse
            them all on the <Link href="/sources">Sources</Link> page.
          </p>
        </div>
      </section>

      <section className="section center">
        <Link href="/episodes" className="btn btn-primary">
          Begin with the Episodes
        </Link>
      </section>
    </div>
  );
}
