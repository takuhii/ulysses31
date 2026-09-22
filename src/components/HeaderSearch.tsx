"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { Episode } from "@/data/types";

interface SearchRecord {
  episode: Episode;
  haystack: string;
}

export function HeaderSearch({
  index,
  variant = "desktop",
}: {
  index: SearchRecord[];
  variant?: "desktop" | "mobile";
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return index
      .filter((r) => r.haystack.includes(q))
      .slice(0, 8)
      .map((r) => r.episode);
  }, [query, index]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function go(slug: string) {
    setOpen(false);
    setQuery("");
    router.push(`/episodes/${slug}`);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (!results.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(results.length - 1, a + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(0, a - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const chosen = results[active];
      if (chosen) go(chosen.slug);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  const listId = `search-list-${variant}`;

  return (
    <div className="header-search" ref={wrapRef}>
      <span className="search-icon" aria-hidden="true">
        <SearchIcon />
      </span>
      <label className="visually-hidden" htmlFor={`search-${variant}`}>
        Search episodes
      </label>
      <input
        id={`search-${variant}`}
        type="search"
        placeholder="Search episodes, myths…"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        role="combobox"
        aria-expanded={open && query.length >= 2}
        aria-controls={listId}
        aria-autocomplete="list"
        autoComplete="off"
      />
      {open && query.trim().length >= 2 && (
        <div className="search-results" id={listId} role="listbox">
          {results.length === 0 ? (
            <div className="search-empty">No episodes match “{query}”.</div>
          ) : (
            results.map((ep, i) => (
              <Link
                key={ep.slug}
                href={`/episodes/${ep.slug}`}
                className={`search-result-item${i === active ? " active" : ""}`}
                role="option"
                aria-selected={i === active}
                onClick={() => {
                  setOpen(false);
                  setQuery("");
                }}
              >
                <span className="sr-num">EP {String(ep.id).padStart(2, "0")}</span>
                <div className="sr-title">{ep.englishTitle}</div>
                <div className="sr-fr">{ep.frenchTitle}</div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="7" cy="7" r="5" />
      <path d="M11 11l4 4" />
    </svg>
  );
}
