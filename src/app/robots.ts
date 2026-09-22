import type { MetadataRoute } from "next";

const BASE = "https://takuhii.github.io/ulysses31";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
