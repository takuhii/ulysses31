"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Episode } from "@/data/types";
import { BrandMark } from "./Artwork";
import { HeaderSearch } from "./HeaderSearch";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/episodes", label: "Episodes" },
  { href: "/myths", label: "Myths" },
  { href: "/odyssey", label: "Odyssey" },
  { href: "/sources", label: "Sources" },
  { href: "/translation", label: "Myth → Sci-Fi" },
  { href: "/map", label: "Universe" },
  { href: "/about", label: "About" },
];

interface SearchRecord {
  episode: Episode;
  haystack: string;
}

export function Header({ searchIndex }: { searchIndex: SearchRecord[] }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function isCurrent(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Ulysses 31 Mythology Companion — home">
          <BrandMark className="brand-mark" />
          <span className="brand-text">
            <span className="brand-title">ULYSSES 31</span>
            <span className="brand-sub">Mythology Companion</span>
          </span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              aria-current={isCurrent(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <HeaderSearch index={searchIndex} variant="desktop" />
        </nav>

        <button
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
            {menuOpen ? (
              <path d="M4 4l12 12M16 4L4 16" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" />
            )}
          </svg>
        </button>
      </div>

      <div className="container">
        <nav
          id="mobile-nav"
          className={`nav-mobile${menuOpen ? " open" : ""}`}
          aria-label="Mobile"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              aria-current={isCurrent(item.href) ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <HeaderSearch index={searchIndex} variant="mobile" />
        </nav>
      </div>
    </header>
  );
}
