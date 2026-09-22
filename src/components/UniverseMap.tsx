"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { Episode, SourceCategory } from "@/data/types";

interface MapEpisode {
  id: number;
  slug: string;
  title: string;
  categories: SourceCategory[];
}

const CATEGORY_META: Record<
  SourceCategory,
  { label: string; color: string; angle: number }
> = {
  odyssey: { label: "Homer's Odyssey", color: "#45e0ff", angle: -90 },
  greek: { label: "Greek mythology", color: "#b98bff", angle: -18 },
  roman: { label: "Roman mythology", color: "#e6b84f", angle: 54 },
  other: { label: "Other mythology (Inca / Flood)", color: "#8fd694", angle: 126 },
  original: { label: "Original / uncertain", color: "#7f8bb5", angle: 198 },
};

const CATEGORY_ORDER: SourceCategory[] = ["odyssey", "greek", "roman", "other", "original"];

const W = 900;
const H = 720;
const CX = W / 2;
const CY = H / 2;
const CAT_R = 210; // radius of category ring
const EP_R = 320; // radius of episode ring

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export function UniverseMap({ episodes }: { episodes: MapEpisode[] }) {
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<MapEpisode | null>(null);

  // Category node positions
  const categoryNodes = useMemo(
    () =>
      CATEGORY_ORDER.map((cat) => {
        const meta = CATEGORY_META[cat];
        const pos = polar(CX, CY, CAT_R, meta.angle);
        return { cat, ...meta, ...pos };
      }),
    [],
  );
  const catPos = useMemo(() => {
    const m = new Map<SourceCategory, { x: number; y: number }>();
    categoryNodes.forEach((n) => m.set(n.cat, { x: n.x, y: n.y }));
    return m;
  }, [categoryNodes]);

  // Episode node positions, spread evenly around the outer ring
  const episodeNodes = useMemo(() => {
    const n = episodes.length;
    return episodes.map((ep, i) => {
      const angle = -90 + (360 / n) * i;
      const pos = polar(CX, CY, EP_R, angle);
      return { ep, ...pos, angle };
    });
  }, [episodes]);

  function isActiveEpisode(slug: string) {
    return hovered === slug || selected?.slug === slug;
  }
  function isActiveCategory(cat: SourceCategory) {
    if (hovered === `cat:${cat}`) return true;
    if (selected?.categories.includes(cat)) return true;
    if (hovered && hovered.startsWith("ep:")) {
      const ep = episodes.find((e) => `ep:${e.slug}` === hovered);
      return ep?.categories.includes(cat) ?? false;
    }
    return false;
  }

  return (
    <div>
      <div className="map-wrap">
        <svg
          className="map-svg"
          viewBox={`0 0 ${W} ${H}`}
          role="group"
          aria-label="Interactive map of the mythological universe of Ulysses 31. Episodes connect to mythological categories which connect to the central series."
        >
          {/* Lines: category -> centre */}
          {categoryNodes.map((n) => (
            <line
              key={`cl-${n.cat}`}
              className={`map-line pulse${isActiveCategory(n.cat) ? " active" : ""}`}
              x1={CX}
              y1={CY}
              x2={n.x}
              y2={n.y}
            />
          ))}

          {/* Lines: episode -> each of its categories */}
          {episodeNodes.map(({ ep, x, y }) =>
            ep.categories.map((cat) => {
              const cp = catPos.get(cat);
              if (!cp) return null;
              const active =
                isActiveEpisode(ep.slug) || hovered === `cat:${cat}`;
              return (
                <line
                  key={`el-${ep.slug}-${cat}`}
                  className={`map-line${active ? " active" : ""}`}
                  x1={x}
                  y1={y}
                  x2={cp.x}
                  y2={cp.y}
                  opacity={active ? 1 : 0.35}
                />
              );
            }),
          )}

          {/* Centre node */}
          <g className="map-node" aria-hidden="true">
            <circle cx={CX} cy={CY} r={54} fill="#10163a" stroke="#e6b84f" strokeWidth={2} />
            <circle cx={CX} cy={CY} r={64} fill="none" stroke="#45e0ff" strokeWidth={1} opacity={0.5} />
            <text x={CX} y={CY - 4} textAnchor="middle" fontFamily="var(--font-display)" fontSize={16} fill="#f5d27a">
              ULYSSES
            </text>
            <text x={CX} y={CY + 16} textAnchor="middle" fontFamily="var(--font-display)" fontSize={16} fill="#f5d27a">
              31
            </text>
          </g>

          {/* Category nodes */}
          {categoryNodes.map((n) => (
            <g
              key={n.cat}
              className="map-node"
              tabIndex={0}
              role="link"
              aria-label={`${n.label}. View episodes.`}
              onMouseEnter={() => setHovered(`cat:${n.cat}`)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(`cat:${n.cat}`)}
              onBlur={() => setHovered(null)}
              onClick={() => router.push(`/episodes`)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  router.push(`/episodes`);
                }
              }}
            >
              <circle cx={n.x} cy={n.y} r={30} fill="#0d1230" stroke={n.color} strokeWidth={1.6} />
              <circle cx={n.x} cy={n.y} r={6} fill={n.color} />
              <text
                x={n.x}
                y={n.y + (n.y < CY ? -40 : 48)}
                textAnchor="middle"
                fontSize={12}
                fill="#e8ecff"
              >
                {n.label}
              </text>
            </g>
          ))}

          {/* Episode nodes */}
          {episodeNodes.map(({ ep, x, y, angle }) => {
            const active = isActiveEpisode(ep.slug);
            const color = CATEGORY_META[ep.categories[0]].color;
            const labelOnLeft = Math.cos((angle * Math.PI) / 180) < 0;
            return (
              <g
                key={ep.slug}
                className="map-node"
                tabIndex={0}
                role="link"
                aria-label={`Episode ${ep.id}: ${ep.title}. View episode.`}
                onMouseEnter={() => {
                  setHovered(`ep:${ep.slug}`);
                }}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => {
                  setHovered(`ep:${ep.slug}`);
                  setSelected(ep);
                }}
                onBlur={() => setHovered(null)}
                onClick={() => router.push(`/episodes/${ep.slug}`)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    router.push(`/episodes/${ep.slug}`);
                  }
                }}
              >
                <circle
                  cx={x}
                  cy={y}
                  r={active ? 13 : 9}
                  fill={active ? color : "#151b45"}
                  stroke={color}
                  strokeWidth={1.5}
                />
                <text
                  x={x + (labelOnLeft ? -16 : 16)}
                  y={y + 4}
                  textAnchor={labelOnLeft ? "end" : "start"}
                  fontSize={11}
                  fill={active ? "#f5d27a" : "#a7add0"}
                >
                  {String(ep.id).padStart(2, "0")}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="map-legend">
          {CATEGORY_ORDER.map((cat) => (
            <span key={cat}>
              <i style={{ background: CATEGORY_META[cat].color }} />
              {CATEGORY_META[cat].label}
            </span>
          ))}
        </div>
      </div>

      {/* Detail panel — updates on hover/focus, gives a keyboard/pointer path */}
      <div className="panel" style={{ marginTop: 18 }} role="status" aria-live="polite">
        {selected ? (
          <>
            <span className="eyebrow">Episode {String(selected.id).padStart(2, "0")}</span>
            <h3 className="ep-title" style={{ marginTop: 0 }}>
              {selected.title}
            </h3>
            <div className="tag-links" style={{ marginTop: 8 }}>
              <Link href={`/episodes/${selected.slug}`} className="tag-link">
                Open episode →
              </Link>
            </div>
          </>
        ) : (
          <p className="text-dim mb-0">
            Hover, focus or select any node to explore the connections. Every
            episode links out to the mythological traditions behind it; select a
            node to open its page.
          </p>
        )}
      </div>

      {/* Accessible text alternative / non-visual navigation */}
      <details className="panel" style={{ marginTop: 18 }}>
        <summary style={{ cursor: "pointer", fontFamily: "var(--font-ui)", letterSpacing: "0.1em" }}>
          Text list of all connections
        </summary>
        <ul style={{ marginTop: 14, paddingLeft: 18 }}>
          {episodes.map((ep) => (
            <li key={ep.slug} style={{ marginBottom: 6 }}>
              <Link href={`/episodes/${ep.slug}`}>
                {String(ep.id).padStart(2, "0")} · {ep.title}
              </Link>{" "}
              <span className="text-dim" style={{ fontSize: "0.9rem" }}>
                → {ep.categories.map((c) => CATEGORY_META[c].label).join(", ")}
              </span>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
