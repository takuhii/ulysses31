# Site Improvements — Ulysses 31 Mythology Companion

A running backlog of ideas to deepen and polish the archive. Grouped by theme
and roughly ordered by impact-to-effort within each group. Nothing here is
required for the site to work — it all builds on what's already in place.

---

## Content & research

- [ ] **Expand episode synopses** — the summaries currently lead with one strong
      sentence; flesh out the full `summary` / `ancientStory` for episodes that
      feel thin (e.g. `phantoms-from-the-swamp`, `the-city-of-cortex`).
- [ ] **Add a dedicated `/characters` index** — `characters.ts` exists and detail
      pages resolve via `/myths/[slug]`, but there's no character-first landing
      page. Add one grouped by role (crew, gods, monsters, mortals).
- [ ] **Per-source "further reading"** — add curated modern-scholarship links to
      each `Source` (beyond the Perseus primary texts), clearly labelled as
      secondary interpretation vs. ancient text.
- [ ] **Cite specific line references** where known (e.g. "Odyssey 12.184–191"
      for the Sirens) rather than just book numbers.
- [ ] **Confidence review pass** — audit every `confidence` / `uncertaintyNote`
      with the Warsaw survey open, so "probable/possible" labels are consistent.
- [ ] **Glossary** of recurring terms (nekyia, xenia, hubris, eidolon) linked
      inline from episode/myth prose.

## Features

- [ ] **Related episodes** on each episode page — surface others sharing a myth,
      source or character (the cross-link helpers in `lib/data.ts` already make
      this trivial).
- [ ] **URL-synced filters** on `/episodes` — reflect active source/adaptation/
      character/search state in query params so filtered views are shareable and
      survive refresh/back-button.
- [ ] **Global search** (not just episodes) — extend the header combobox to also
      match myths, characters and sources, grouped by type.
- [ ] **"Random episode" / "Surprise me"** entry point for casual browsing.
- [ ] **Myth relationship links** — let a myth reference related myths
      (Scylla ↔ Charybdis, Theseus ↔ Ariadne ↔ Minotaur) and render them.
- [ ] **Deep-linkable map nodes** — support `/map?focus=<slug>` to open the
      universe map with a node pre-selected/highlighted.
- [ ] **Filter the map** by tradition, and add zoom/pan for small screens.

## Design & visual polish

- [ ] **Per-classification episode card accents** — a subtle left border or
      corner glyph tuned to direct/hybrid/motif/original (still not colour-only).
- [ ] **Distinct hero artwork per section** — small original SVG headers for
      `/myths`, `/sources`, `/odyssey` so each landing page has its own identity.
- [ ] **Constellation motifs** — render each major character as a small original
      "constellation" mark reused on cards and detail headers.
- [ ] **Light/parchment reading mode** toggle for the long-form prose pages,
      persisted in `localStorage`.
- [ ] **Refine mobile typography scale** — tighten heading clamps and spacing
      below ~380px.

## Accessibility

- [ ] **Audit colour contrast** of `--c-text-faint` on panels; nudge lighter if
      it fails WCAG AA for small text.
- [ ] **Map keyboard model** — add roving tabindex / arrow-key traversal between
      nodes rather than tabbing through all 26 individually.
- [ ] **Announce filter results** more richly (e.g. "12 episodes, filtered by
      Homer's Odyssey and Direct").
- [ ] **Full manual pass** with a screen reader (VoiceOver) and keyboard-only,
      documenting findings here. (Note: full WCAG conformance requires manual
      testing with assistive tech and expert review.)
- [ ] **Focus management** on route change for the mobile menu.

## SEO & metadata

- [x] **JSON-LD structured data** — `WebSite` + `Organization` sitewide,
      `TVEpisode` + `BreadcrumbList` on episodes, `Book`/`Person` on sources,
      `DefinedTerm` on myths. (`src/lib/seo.ts`, `src/components/JsonLd.tsx`)
- [x] **Open Graph image** — static `public/og.svg` referenced from metadata
      (basePath-aware; a per-page `opengraph-image.tsx` route was tried but does
      not emit static files under `output: "export"` on a subpath host).
- [x] **Set the real production domain** — `takuhii.github.io/ulysses31` set in
      `layout.tsx`, `sitemap.ts`, `robots.ts` and `seo.ts`.
- [ ] **Per-episode OG images** — would need a build-time PNG generator script
      (Satori/`@vercel/og` invoked outside Next), or a switch to a host that
      supports dynamic routes. Nice-to-have, not required.
- [ ] **PNG fallback for og.svg** — some older social scrapers don't render SVG
      OG images; add a rasterised PNG if link-preview coverage matters.

## Engineering & quality

- [ ] **Data validation** — add a Zod schema (or a small build-time script) that
      checks every `myths`/`sources`/`characters` slug referenced by an episode
      actually exists, so cross-links can't silently break.
- [ ] **Tests** — unit-test the `lib/data.ts` helpers (stats, cross-links,
      search index) and add a smoke test that every generated route renders.
- [ ] **Self-host fonts** via `next/font` to drop the render-blocking Google
      Fonts `<link>` and remove the lint suppression in `layout.tsx`.
- [ ] **Extract shared page-header component** — the eyebrow + title + lead block
      is repeated across most pages; DRY it into one component.
- [ ] **CI** — GitHub Action running `next build` + `next lint` on PRs.

## Nice-to-have / stretch

- [ ] **Timeline scrubber** on `/odyssey` with keyboard arrows to step stages.
- [ ] **"Compare two episodes"** view for their myth/source overlap.
- [ ] **Printable episode fact sheets** (print stylesheet).
- [ ] **i18n** — the series is French-Japanese; a French locale would fit the
      subject matter well.
