import type { MetadataRoute } from "next";
import { episodes, sources, allMythEntitySlugs } from "@/lib/data";

const BASE = "https://takuhii.github.io/ulysses31";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/episodes",
    "/myths",
    "/sources",
    "/odyssey",
    "/translation",
    "/map",
    "/about",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const episodeRoutes = episodes.map((e) => ({
    url: `${BASE}/episodes/${e.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  const mythRoutes = allMythEntitySlugs().map((slug) => ({
    url: `${BASE}/myths/${slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  const sourceRoutes = sources.map((s) => ({
    url: `${BASE}/sources/${s.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...episodeRoutes, ...mythRoutes, ...sourceRoutes];
}
