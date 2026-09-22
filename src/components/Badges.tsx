import type { Classification, Confidence } from "@/data/types";
import { classificationLabels, confidenceLabels } from "@/lib/data";

export function ClassificationBadge({ value }: { value: Classification }) {
  return (
    <span className={`badge badge-${value}`}>
      <span className="visually-hidden">Classification:</span>
      {classificationLabels[value]}
    </span>
  );
}

export function ConfidenceTag({ value }: { value: Confidence }) {
  return (
    <span className="confidence" title="How certain the mythological connection is">
      <span aria-hidden="true">◈</span>
      {confidenceLabels[value]}
    </span>
  );
}

// Adaptation-strength meter derived from classification + confidence.
// Communicated with both bars and text so it never relies on colour alone.
export function strengthFromEpisode(classification: Classification, confidence: Confidence): number {
  const base: Record<Classification, number> = {
    direct: 4,
    hybrid: 3,
    motif: 2,
    original: 1,
  };
  let s = base[classification];
  if (confidence === "possible") s = Math.max(1, s - 1);
  if (confidence === "uncertain") s = 1;
  return Math.min(4, Math.max(1, s));
}

const strengthWords = ["", "Loose", "Partial", "Strong", "Direct"];

export function AdaptationStrength({ value }: { value: number }) {
  return (
    <div className="strength">
      <span className="strength-label">Adaptation</span>
      <span className="strength-bars" aria-hidden="true">
        {[1, 2, 3, 4].map((i) => (
          <span key={i} className={`strength-bar${i <= value ? " on" : ""}`} />
        ))}
      </span>
      <span className="strength-label" style={{ color: "var(--c-gold)" }}>
        {strengthWords[value]}
        <span className="visually-hidden"> adaptation strength, {value} of 4</span>
      </span>
    </div>
  );
}
