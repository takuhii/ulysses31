import type { Metadata } from "next";
import "./globals.css";
import { CosmicBackground } from "@/components/CosmicBackground";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { buildEpisodeSearchIndex } from "@/lib/data";

const SITE_NAME = "Ulysses 31 — The Mythology Companion";
const SITE_DESC =
  "Explore the ancient myths hidden inside Ulysses 31 — from Homer's Odyssey and the Cyclops to Sisyphus, Circe, the Minotaur, Atlas, Orpheus and the Kingdom of Hades.";
const SITE_URL = "https://takuhii.github.io/ulysses31";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESC,
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
