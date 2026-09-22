import type { TranslationEntry } from "./types";

// The recurring "myth -> science fiction" transformation system used by the show.
export const translations: TranslationEntry[] = [
  {
    slug: "the-sea",
    concept: "The sea",
    ancient: "The Mediterranean Sea",
    scifi: "Outer space",
    note: "The single most important transformation: a voyage across water becomes a voyage across the cosmos.",
    icon: "sea",
  },
  {
    slug: "the-ship",
    concept: "The ship",
    ancient: "Odysseus' wooden ship",
    scifi: "The Odyssey spacecraft",
    note: "The vessel that carries the hero and crew becomes an interstellar ship of the same name.",
    icon: "ship",
  },
  {
    slug: "olympus",
    concept: "Olympus",
    ancient: "Home of the gods",
    scifi: "A cosmic realm of the gods",
    note: "The mountain seat of the Olympians is relocated to a powerful cosmic domain.",
    icon: "olympus",
  },
  {
    slug: "the-underworld",
    concept: "The Underworld",
    ancient: "Hades, realm of the dead",
    scifi: "A cosmic Kingdom of Hades",
    note: "The land of the dead becomes a distant cosmic realm that must be reached to end the exile.",
    icon: "underworld",
  },
  {
    slug: "scylla",
    concept: "Scylla",
    ancient: "Six-headed sea monster",
    scifi: "A world of ice",
    note: "A monster of the strait becomes an entire hostile planet.",
    icon: "monster",
  },
  {
    slug: "charybdis",
    concept: "Charybdis",
    ancient: "A ship-swallowing whirlpool",
    scifi: "A world of fire",
    note: "The opposing peril becomes a second hostile world, preserving the impossible-choice dilemma.",
    icon: "fire",
  },
  {
    slug: "atlas",
    concept: "Atlas",
    ancient: "Carries the heavens on his shoulders",
    scifi: "Supports the entire universe",
    note: "The scale of the burden expands from the sky to the whole cosmos.",
    icon: "atlas",
  },
  {
    slug: "the-lotus",
    concept: "The lotus",
    ancient: "A fruit that causes forgetfulness",
    scifi: "A memory-erasing phenomenon",
    note: "The plant that makes sailors forget home becomes a technological loss of memory.",
    icon: "lotus",
  },
];
