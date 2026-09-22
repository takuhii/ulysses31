import type { Metadata } from "next";
import { OdysseyTimeline } from "@/components/OdysseyTimeline";

export const metadata: Metadata = {
  title: "The Odyssey Timeline",
  description:
    "Follow Homer's Odysseus and the crew of the Odyssey side by side — from Troy and the Cyclops through Circe, the Sirens and the Underworld, all the way home.",
  alternates: { canonical: "/odyssey" },
};

export default function OdysseyPage() {
  return (
    <div className="container">
      <header className="section" style={{ marginTop: 0 }}>
        <span className="eyebrow">Two Journeys, One Route Home</span>
        <h1 className="section-title">The Odyssey Timeline</h1>
        <p className="section-lead">
          Homer&rsquo;s Odysseus crossed a sea of monsters and gods to reach
          Ithaca. Ulysses crosses the cosmos to reach Earth. Select any stage to
          see how the ancient voyage maps onto the 31st-century one — and jump
          straight to the episode or the myth.
        </p>
      </header>
      <OdysseyTimeline />
    </div>
  );
}
