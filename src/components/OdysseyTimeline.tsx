"use client";

import { useState } from "react";
import Link from "next/link";
import { journey } from "@/data/odyssey";

export function OdysseyTimeline() {
  const [selected, setSelected] = useState<string>(journey[0].id);
  const stage = journey.find((s) => s.id === selected) ?? journey[0];

  return (
    <div>
      <div className="timeline-cols">
        <div>
          <h2 className="timeline-head ancient">Homer&rsquo;s Odyssey</h2>
          <div className="timeline-list">
            {journey.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`timeline-item${selected === s.id ? " selected" : ""}`}
                onClick={() => setSelected(s.id)}
                aria-pressed={selected === s.id}
              >
                <span className="ti-title">{s.homer.title}</span>
                <span className="ti-sub">{s.homer.note}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="timeline-head scifi">Ulysses 31</h2>
          <div className="timeline-list">
            {journey.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`timeline-item scifi${selected === s.id ? " selected" : ""}`}
                onClick={() => setSelected(s.id)}
                aria-pressed={selected === s.id}
              >
                <span className="ti-title">{s.ulysses.title}</span>
                <span className="ti-sub">{s.ulysses.note}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="timeline-detail panel" role="status" aria-live="polite">
        <span className="eyebrow">Stage selected</span>
        <div className="two-col" style={{ marginTop: 6 }}>
          <div className="col-panel ancient">
            <span className="col-tag">{stage.homer.title}</span>
            <p className="mb-0 text-dim">{stage.homer.note}</p>
          </div>
          <div className="col-panel scifi">
            <span className="col-tag">{stage.ulysses.title}</span>
            <p className="text-dim">{stage.ulysses.note}</p>
            <div className="tag-links">
              {stage.ulysses.episodeSlug && (
                <Link href={`/episodes/${stage.ulysses.episodeSlug}`} className="tag-link">
                  View episode →
                </Link>
              )}
              {stage.mythSlug && (
                <Link href={`/myths/${stage.mythSlug}`} className="tag-link">
                  View myth →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
