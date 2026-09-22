import Link from "next/link";
import type { Episode } from "@/data/types";
import { getMythBySlug } from "@/lib/data";
import {
  ClassificationBadge,
  AdaptationStrength,
  strengthFromEpisode,
} from "./Badges";

export function EpisodeCard({ episode }: { episode: Episode }) {
  const mythNames = episode.myths
    .map((slug) => getMythBySlug(slug)?.name ?? slug)
    .slice(0, 4);
  const strength = strengthFromEpisode(episode.classification, episode.confidence);

  return (
    <Link href={`/episodes/${episode.slug}`} className="card">
      <div className="flex items-center justify-between">
        <span className="ep-number">
          EP {String(episode.id).padStart(2, "0")}
        </span>
        <ClassificationBadge value={episode.classification} />
      </div>
      <h3 className="ep-title">{episode.englishTitle}</h3>
      <p className="ep-french">{episode.frenchTitle}</p>
      <p className="ep-desc">{episode.summary.split(". ")[0]}.</p>

      {mythNames.length > 0 && (
        <div className="chip-row">
          {mythNames.map((name) => (
            <span key={name} className="chip">
              {name}
            </span>
          ))}
        </div>
      )}

      <AdaptationStrength value={strength} />
    </Link>
  );
}
