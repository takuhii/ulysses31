"use client";

import { useMemo, useState } from "react";
import type { Episode, SourceCategory, Classification } from "@/data/types";
import { EpisodeCard } from "./EpisodeCard";

interface SearchRecord {
  episode: Episode;
  haystack: string;
}

interface Props {
  index: SearchRecord[];
  characterOptions: { slug: string; name: string }[];
}

const SOURCE_FILTERS: { value: SourceCategory; label: string }[] = [
  { value: "odyssey", label: "Homer's Odyssey" },
  { value: "greek", label: "Greek mythology" },
  { value: "roman", label: "Roman mythology" },
  { value: "other", label: "Other mythology" },
  { value: "original", label: "Original / uncertain" },
];

const ADAPTATION_FILTERS: { value: Classification; label: string }[] = [
  { value: "direct", label: "Direct" },
  { value: "hybrid", label: "Hybrid" },
  { value: "motif", label: "Motif" },
  { value: "original", label: "Primarily original" },
];

export function EpisodeExplorer({ index, characterOptions }: Props) {
  const [query, setQuery] = useState("");
  const [sources, setSources] = useState<Set<SourceCategory>>(new Set());
  const [adaptations, setAdaptations] = useState<Set<Classification>>(new Set());
  const [character, setCharacter] = useState("");

  function toggle<T>(set: Set<T>, value: T, updater: (s: Set<T>) => void) {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    updater(next);
  }

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return index
      .filter(({ episode, haystack }) => {
        if (q && !haystack.includes(q)) return false;
        if (sources.size > 0 && !episode.sourceCategories.some((s) => sources.has(s)))
          return false;
        if (adaptations.size > 0 && !adaptations.has(episode.classification)) return false;
        if (character && !episode.characters.includes(character)) return false;
        return true;
      })
      .map((r) => r.episode)
      .sort((a, b) => a.id - b.id);
  }, [query, sources, adaptations, character, index]);

  const hasFilters =
    query.trim() !== "" || sources.size > 0 || adaptations.size > 0 || character !== "";

  function clearAll() {
    setQuery("");
    setSources(new Set());
    setAdaptations(new Set());
    setCharacter("");
  }

  return (
    <div>
      <div className="filters">
        <div className="filter-search">
          <span className="search-icon" aria-hidden="true">
            <SearchIcon />
          </span>
          <label className="visually-hidden" htmlFor="episode-search">
            Search episodes
          </label>
          <input
            id="episode-search"
            type="search"
            placeholder="Search titles, myths, characters, sources, keywords…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="filter-groups">
          <fieldset className="filter-group" style={{ border: "none", padding: 0, margin: 0 }}>
            <legend className="fg-label">Source</legend>
            <div className="filter-pills">
              {SOURCE_FILTERS.map((f) => (
                <button
                  key={f.value}
                  type="button"
                  className="pill"
                  aria-pressed={sources.has(f.value)}
                  onClick={() => toggle(sources, f.value, setSources)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="filter-group" style={{ border: "none", padding: 0, margin: 0 }}>
            <legend className="fg-label">Adaptation</legend>
            <div className="filter-pills">
              {ADAPTATION_FILTERS.map((f) => (
                <button
                  key={f.value}
                  type="button"
                  className="pill"
                  aria-pressed={adaptations.has(f.value)}
                  onClick={() => toggle(adaptations, f.value, setAdaptations)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="filter-group">
            <label className="fg-label" htmlFor="character-filter">
              Character
            </label>
            <select
              id="character-filter"
              className="filter-select"
              value={character}
              onChange={(e) => setCharacter(e.target.value)}
            >
              <option value="">All characters</option>
              {characterOptions.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-md" style={{ justifyContent: "space-between", flexWrap: "wrap" }}>
          <span className="result-count" role="status" aria-live="polite">
            Showing {results.length} of {index.length} episodes
          </span>
          {hasFilters && (
            <button type="button" className="pill" onClick={clearAll}>
              Clear all filters
            </button>
          )}
        </div>
      </div>

      {results.length === 0 ? (
        <div className="empty-state">
          <p>No episodes match your filters.</p>
          <button type="button" className="btn btn-secondary" onClick={clearAll}>
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid grid-auto">
          {results.map((ep) => (
            <EpisodeCard key={ep.slug} episode={ep} />
          ))}
        </div>
      )}
    </div>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="7" cy="7" r="5" />
      <path d="M11 11l4 4" />
    </svg>
  );
}
