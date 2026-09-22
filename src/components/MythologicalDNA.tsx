import Link from "next/link";
import type { DnaBranch } from "@/data/types";

// Visual diagram: Ulysses 31 episode -> mythological source -> ancient text.
// Hybrid episodes show multiple branches side by side.
export function MythologicalDNA({
  episodeTitle,
  branches,
}: {
  episodeTitle: string;
  branches: DnaBranch[];
}) {
  return (
    <div className="dna" role="group" aria-label={`Mythological DNA of ${episodeTitle}`}>
      <div className="dna-branch">
        <span className="dna-node origin">{episodeTitle}</span>
        <span className="dna-arrow" aria-hidden="true">
          ↓
        </span>
      </div>
      <div className="dna-branches">
        {branches.map((b, i) => (
          <div className="dna-branch" key={`${b.myth}-${i}`}>
            {b.mythSlug ? (
              <Link href={`/myths/${b.mythSlug}`} className="dna-node myth">
                {b.myth}
              </Link>
            ) : (
              <span className="dna-node myth">{b.myth}</span>
            )}
            <span className="dna-arrow" aria-hidden="true">
              ↓
            </span>
            {b.sourceSlug ? (
              <Link href={`/sources/${b.sourceSlug}`} className="dna-node text">
                {b.ancientText}
              </Link>
            ) : (
              <span className="dna-node text">{b.ancientText}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
