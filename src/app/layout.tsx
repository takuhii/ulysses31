import type { Metadata } from "next";
import "./globals.css";
import { CosmicBackground } from "@/components/CosmicBackground";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { buildEpisodeSearchIndex } from "@/lib/data";
import { siteLd } from "@/lib/seo";

const SITE_NAME = "Ulysses 31 — The Mythology Companion";
const SITE_DESC =
  "Explore the ancient myths hidden inside Ulysses 31 — from Homer's Odyssey and the Cyclops to Sisyphus, Circe, the Minotaur, Atlas, Orpheus and the Kingdom of Hades.";
const SITE_URL = "https://takuhii.github.io/ulysses31";
// public/ assets are served under the basePath on GitHub Pages.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const OG_IMAGE = `${BASE_PATH}/og.svg`;

export const metadata: Metadata = {
  // Use the origin only; image/URL paths below already include the basePath,
  // so this avoids doubling the "/ulysses31" segment.
  metadataBase: new URL("https://takuhii.github.io"),
  title: {
    default: SITE_NAME,
    template: "%s — Ulysses 31 Mythology Companion",
  },
  description: SITE_DESC,
  keywords: [
    "Ulysses 31",
    "Ulysse 31",
    "Greek mythology",
    "Homer",
    "Odyssey",
    "Odysseus",
    "mythology companion",
    "cyclops",
    "Circe",
    "Hades",
  ],
  authors: [{ name: "Ulysses 31 Mythology Companion" }],
  openGraph: {
    type: "website",
    title: SITE_NAME,
    description: SITE_DESC,
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME, type: "image/svg+xml" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESC,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchIndex = buildEpisodeSearchIndex();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Spectral:ital,wght@0,400;0,500;1,400&family=Chakra+Petch:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={siteLd()} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <CosmicBackground />
        <Header searchIndex={searchIndex} />
        <main id="main" className="site-main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
