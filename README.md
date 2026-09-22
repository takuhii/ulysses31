# Ulysses 31 — The Mythology Companion

A polished, responsive, retro-futuristic reference archive exploring the ancient
myths behind the 1981 animated series *Ulysses 31* (*Ulysse 31*).

> What if Homer's *Odyssey* happened in the 31st century?

The site traces all **26 episodes** back to the ancient stories that inspired
them — Homer's *Odyssey*, Greek and Roman mythology, and cross-cultural flood
traditions — and shows exactly what the writers kept and what they transformed.

It is an **educational, archival reference**. It uses no copyrighted screenshots
or promotional artwork; every graphic is an original vector work inspired by
Greek pottery, astronomical charts, ancient architecture and 1980s sci-fi.

## Tech stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- Hand-authored responsive CSS design system (no UI framework)
- Fully **static** — all content comes from structured data files, no backend
- Client-side search & filtering

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (prerenders 90 static pages)
npm run start    # serve the production build
npm run lint
```

## Deployment (GitHub Pages)

The site deploys automatically to **GitHub Pages** on every push to `main` via
`.github/workflows/deploy.yml`.

Live URL: **https://takuhii.github.io/ulysses31/**

Because it's a project repo (served from the `/ulysses31` subpath), the build
sets `basePath`/`assetPrefix` to `/ulysses31`. This only happens when the env
var `PAGES_BUILD=true` is set (the CI workflow does this), so `npm run dev`
still runs at the root locally.

One-time setup in the GitHub repo:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. Push to `main` (or run the workflow manually from the **Actions** tab).

To reproduce the exact production build locally:

```bash
PAGES_BUILD=true npm run build   # emits ./out with /ulysses31 asset prefixes
```

Notes:
- `output: "export"` produces a fully static `./out` folder.
- The workflow adds a `.nojekyll` file so GitHub Pages serves the `_next/`
  directory (Jekyll would otherwise ignore underscore-prefixed paths).
- `trailingSlash: true` keeps clean `/route/` URLs that resolve to
  `route/index.html` on a static host.

## Project structure

```
src/
├─ app/                     # routes (App Router)
│  ├─ page.tsx              # homepage (hero, dynamic stats)
│  ├─ episodes/             # explorer + [slug] detail pages
│  ├─ myths/                # index + [slug] (resolves myth OR character)
│  ├─ sources/              # ancient texts + [slug]
│  ├─ odyssey/              # parallel interactive timeline
│  ├─ translation/          # Myth → Sci-Fi visual dictionary
│  ├─ map/                  # interactive Mythological Universe graph
│  ├─ about/                # about + methodology
│  ├─ sitemap.ts, robots.ts
│  └─ globals.css           # design system
├─ components/              # reusable UI (cards, badges, diagrams, map…)
├─ data/                    # structured content — the single source of truth
│  ├─ episodes.ts  myths.ts  sources.ts  characters.ts
│  ├─ translations.ts  odyssey.ts  types.ts
└─ lib/data.ts              # lookups, cross-links, derived stats, search index
```

## Data architecture

No lore is hard-coded into UI components. Each episode is a typed record:

```ts
{
  id, slug, englishTitle, frenchTitle,
  classification,          // direct | hybrid | motif | original
  sourceCategories, sources, myths, characters,
  summary, ancientStory, adaptation,
  motifs, comparisons, dna, confidence, uncertaintyNote?, keywords
}
```

Everything (stats, filters, search, cross-links, the interactive map and the
sitemap) is derived from this data, so new research can be added by editing the
data files alone.

## Interconnected knowledge graph

Episode ↔ Myth ↔ Character ↔ Ancient text ↔ Science-fiction interpretation.
From *The Magic Spells of Circe* you can jump to **Circe**, then to **Homer,
Odyssey Book 10**, and from there to every other episode that draws on it.

## Editorial approach

Some mythological connections are well established; others are scholarly
interpretations or probable influences. Confidence is labelled explicitly and
classification is never communicated by colour alone (each badge carries a label
and a symbol). The primary scholarly reference is the
[Our Mythical Childhood](https://www.omc.obta.al.uw.edu.pl/) survey
(University of Warsaw).

## Accessibility

Semantic HTML, keyboard navigation, visible focus states, a skip link, live
regions for search/filter results, an accessible text alternative for the
interactive map, sufficient colour contrast, and `prefers-reduced-motion`
support that disables the starfield and animated map routes.

---

*This is a fan-made educational reference and is not affiliated with or endorsed
by the rights holders of Ulysses 31.*
