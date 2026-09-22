import type { Comparison } from "@/data/types";

// "From Myth to Science Fiction" — visual comparison cards.
export function ComparisonCards({ comparisons }: { comparisons: Comparison[] }) {
  return (
    <div className="compare-grid">
      {comparisons.map((c, i) => (
        <div className="compare-card" key={i}>
          <div className="compare-side ancient">
            <span className="lbl">Ancient myth</span>
            <span className="val">{c.ancient}</span>
          </div>
          <span className="compare-arrow" aria-hidden="true">
            ⟶
          </span>
          <div className="compare-side scifi">
            <span className="lbl">Ulysses 31</span>
            <span className="val">{c.scifi}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
