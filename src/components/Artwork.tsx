// Original vector artwork inspired by Greek constellations, spacecraft
// silhouettes, planetary rings and architectural forms. No copyrighted
// screenshots or promotional art are used.

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      role="img"
      aria-label="Ulysses 31 emblem"
    >
      <defs>
        <linearGradient id="bm-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f5d27a" />
          <stop offset="1" stopColor="#a9803f" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="21" fill="none" stroke="url(#bm-g)" strokeWidth="1.5" />
      <ellipse cx="24" cy="24" rx="21" ry="8" fill="none" stroke="#45e0ff" strokeWidth="1" opacity="0.6" transform="rotate(-24 24 24)" />
      {/* stylised helmet / prow */}
      <path
        d="M24 8 L33 24 L24 40 L15 24 Z"
        fill="none"
        stroke="url(#bm-g)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="24" r="3" fill="#45e0ff" />
      <circle cx="10" cy="14" r="1" fill="#f5d27a" />
      <circle cx="38" cy="34" r="1" fill="#f5d27a" />
      <circle cx="37" cy="12" r="1.2" fill="#ffffff" />
    </svg>
  );
}

// Hero visual: the Odyssey spacecraft travelling through a starfield toward a
// stylised cosmic Olympus formed of Greek architectural columns and rings.
export function HeroArt({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 360"
      role="img"
      aria-label="The Odyssey spacecraft travelling through a star field toward a cosmic Olympus of Greek columns and planetary rings."
    >
      <defs>
        <radialGradient id="ha-olympus" cx="50%" cy="40%" r="60%">
          <stop offset="0" stopColor="#8f78e6" stopOpacity="0.9" />
          <stop offset="0.6" stopColor="#6c4bd8" stopOpacity="0.35" />
          <stop offset="1" stopColor="#6c4bd8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ha-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f5d27a" />
          <stop offset="1" stopColor="#a9803f" />
        </linearGradient>
        <linearGradient id="ha-ship" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#45e0ff" />
          <stop offset="1" stopColor="#1f9fd6" />
        </linearGradient>
      </defs>

      {/* cosmic Olympus glow */}
      <circle cx="470" cy="150" r="150" fill="url(#ha-olympus)" />

      {/* planetary rings around Olympus */}
      <ellipse cx="470" cy="150" rx="120" ry="34" fill="none" stroke="#8f78e6" strokeWidth="1.4" opacity="0.55" transform="rotate(-18 470 150)" />
      <ellipse cx="470" cy="150" rx="150" ry="44" fill="none" stroke="#45e0ff" strokeWidth="1" opacity="0.35" transform="rotate(-18 470 150)" />

      {/* Olympus: temple columns on a distant world */}
      <g stroke="url(#ha-gold)" strokeWidth="2" fill="none" opacity="0.9">
        <path d="M410 150 h120" />
        <path d="M414 150 v-42 M434 150 v-42 M454 150 v-42 M474 150 v-42 M494 150 v-42 M514 150 v-42 M526 150 v-42" strokeWidth="3" />
        <path d="M406 108 h128" strokeWidth="3" />
        <path d="M420 108 l50 -22 l50 22" strokeWidth="2.4" />
      </g>

      {/* constellation lines (a stylised Odysseus/hero constellation) */}
      <g stroke="#e6b84f" strokeWidth="0.9" opacity="0.55">
        <path d="M60 60 L110 90 L150 70 L200 110 L170 150" fill="none" />
      </g>
      <g fill="#f5d27a">
        <circle cx="60" cy="60" r="2" />
        <circle cx="110" cy="90" r="2.4" />
        <circle cx="150" cy="70" r="1.8" />
        <circle cx="200" cy="110" r="2.2" />
        <circle cx="170" cy="150" r="1.8" />
      </g>

      {/* scattered stars */}
      <g fill="#ffffff" opacity="0.8">
        <circle cx="90" cy="220" r="1" />
        <circle cx="260" cy="60" r="1.2" />
        <circle cx="330" cy="280" r="1" />
        <circle cx="560" cy="250" r="1.4" />
        <circle cx="600" cy="90" r="1" />
        <circle cx="40" cy="300" r="1.2" />
        <circle cx="300" cy="200" r="1" />
      </g>

      {/* motion trail */}
      <path d="M40 250 Q160 235 250 210" stroke="#45e0ff" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="3 6" />

      {/* the Odyssey spacecraft (original silhouette) */}
      <g transform="translate(210 195) rotate(-14)">
        <path
          d="M0 0 L120 -14 L150 0 L120 14 Z"
          fill="url(#ha-ship)"
          opacity="0.9"
        />
        <path d="M40 -10 L96 -10 L104 0 L96 10 L40 10 Z" fill="#0d1230" opacity="0.7" />
        <path d="M20 -6 L34 0 L20 6 Z" fill="#f5d27a" />
        <path d="M120 -14 L138 -34 L150 -6" fill="none" stroke="#45e0ff" strokeWidth="1.5" opacity="0.7" />
        <path d="M120 14 L138 34 L150 6" fill="none" stroke="#45e0ff" strokeWidth="1.5" opacity="0.7" />
        {/* engine glow */}
        <circle cx="2" cy="0" r="6" fill="#ff6b45" opacity="0.7" />
        <circle cx="-8" cy="0" r="10" fill="#ff6b45" opacity="0.25" />
      </g>
    </svg>
  );
}

// Small icon set used by the translation dictionary cards.
export function DictIcon({ icon }: { icon: string }) {
  const common = {
    className: "dict-icon",
    viewBox: "0 0 48 48",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.6,
    "aria-hidden": true,
  };
  switch (icon) {
    case "sea":
      return (
        <svg {...common}>
          <path d="M4 30c4-4 8-4 12 0s8 4 12 0 8-4 12 0" />
          <path d="M4 38c4-4 8-4 12 0s8 4 12 0 8-4 12 0" />
          <circle cx="34" cy="14" r="6" stroke="#e6b84f" />
        </svg>
      );
    case "ship":
      return (
        <svg {...common}>
          <path d="M6 30h30l-4 8H12z" />
          <path d="M18 30V12l14 8-14 6" />
          <circle cx="6" cy="30" r="3" fill="#ff6b45" stroke="none" />
        </svg>
      );
    case "olympus":
      return (
        <svg {...common}>
          <path d="M8 40V22M16 40V22M24 40V22M32 40V22M40 40V22" />
          <path d="M6 22h36" />
          <path d="M10 22l14-12 14 12" />
        </svg>
      );
    case "underworld":
      return (
        <svg {...common}>
          <path d="M24 6C14 6 8 14 8 24c0 10 8 18 16 18s16-8 16-18c0-10-6-18-16-18z" />
          <path d="M16 22c2-3 6-3 8 0M24 22c2-3 6-3 8 0" />
          <path d="M18 32c3 3 9 3 12 0" />
        </svg>
      );
    case "monster":
      return (
        <svg {...common}>
          <circle cx="16" cy="20" r="4" />
          <circle cx="32" cy="20" r="4" />
          <circle cx="24" cy="30" r="4" />
          <path d="M24 6v6M12 12l3 5M36 12l-3 5" />
        </svg>
      );
    case "fire":
      return (
        <svg {...common}>
          <path d="M24 6c6 8 10 12 10 20a10 10 0 01-20 0c0-4 2-7 4-10 1 3 3 4 4 5 0-6-2-10 2-15z" stroke="#ff6b45" />
        </svg>
      );
    case "atlas":
      return (
        <svg {...common}>
          <circle cx="24" cy="14" r="8" />
          <path d="M24 22v10M16 42c2-6 6-8 8-10 2 2 6 4 8 10" />
          <path d="M14 14h20" opacity="0.5" />
        </svg>
      );
    case "lotus":
      return (
        <svg {...common}>
          <path d="M24 40c-8 0-14-6-14-6s6-4 14-4 14 4 14 4-6 6-14 6z" />
          <path d="M24 30V14M24 30c-4-6-10-8-10-8M24 30c4-6 10-8 10-8" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="16" />
        </svg>
      );
  }
}
