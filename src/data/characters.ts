import type { Character } from "./types";

// Characters that appear in the series' cast (as opposed to abstract myths).
// Many overlap with myths.ts; this file focuses on named agents in the story.

export const characters: Character[] = [
  {
    slug: "ulysses",
    name: "Ulysses",
    tradition: "Greek (Odysseus)",
    category: "odyssey",
    role: "The exiled hero seeking home",
    description:
      "The Roman name for Odysseus, hero of Homer's Odyssey. Cunning and enduring, he strives to bring his crew and family home against the will of the gods.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "In the series he is a 31st-century commander exiled across the cosmos by Olympus until he can reach the Kingdom of Hades and return to Earth.",
  },
  {
    slug: "telemachus",
    name: "Telemachus",
    tradition: "Greek",
    category: "odyssey",
    role: "The hero's son",
    description:
      "Son of Odysseus and Penelope. In the Odyssey he comes of age searching for news of his lost father.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "Ulysses' son travels with him through space, his fate bound to his father's quest.",
  },
  {
    slug: "penelope",
    name: "Penelope",
    tradition: "Greek",
    category: "odyssey",
    role: "The faithful wife who waits",
    description:
      "Wife of Odysseus, famed for her faithfulness and cunning as she holds off suitors for years while awaiting his return.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "The longed-for home and family that Ulysses journeys to reach.",
  },
  {
    slug: "zeus",
    name: "Zeus",
    tradition: "Greek",
    category: "greek",
    role: "King of the gods",
    description:
      "Ruler of Olympus and the sky. The supreme divine authority who sits in judgement over mortals.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "Leader of the Olympian gods who condemn Ulysses to his cosmic exile.",
  },
  {
    slug: "poseidon",
    name: "Poseidon",
    tradition: "Greek",
    category: "greek",
    role: "God of the sea",
    description:
      "God of the sea and father of the Cyclops Polyphemus, whose wrath pursues Odysseus throughout the Odyssey.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "His grievance against the hero is folded into Olympus' collective punishment of Ulysses.",
  },
  {
    slug: "cyclops",
    name: "Cyclops",
    tradition: "Greek",
    category: "odyssey",
    role: "One-eyed giant",
    description:
      "Polyphemus, the man-eating one-eyed giant whose blinding earns Poseidon's wrath.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "A giant technological creature in the opening episode, whose defeat triggers the whole saga.",
  },
  {
    slug: "circe",
    name: "Circe",
    tradition: "Greek",
    category: "odyssey",
    role: "Enchantress",
    description:
      "A sorceress who transforms Odysseus' men into swine before being compelled to restore them.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "A named sorceress who enchants the crew in 'The Magic Spells of Circe'.",
  },
  {
    slug: "calypso",
    name: "Calypso",
    tradition: "Greek",
    category: "odyssey",
    role: "Nymph who delays the hero",
    description:
      "A nymph who keeps Odysseus on her island, offering immortality if he will stay.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "The seductive delay of the episode 'Calypso'.",
  },
  {
    slug: "aeolus",
    name: "Aeolus",
    tradition: "Greek",
    category: "odyssey",
    role: "Keeper of the winds",
    description:
      "Master of the winds who gives Odysseus a sealed bag of winds to guide him home.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "Guardian of the cosmic winds sealed in a casket.",
  },
  {
    slug: "sisyphus",
    name: "Sisyphus",
    tradition: "Greek",
    category: "greek",
    role: "The eternally punished",
    description:
      "Condemned to roll a boulder uphill forever in the Underworld.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "The figure of eternal, futile punishment in 'The Eternal Punishment'.",
  },
  {
    slug: "atlas",
    name: "Atlas",
    tradition: "Greek",
    category: "greek",
    role: "Bearer of the heavens",
    description:
      "A Titan condemned to hold up the sky at the edge of the world.",
    sources: ["warsaw-survey"],
    reinterpretation:
      "Enlarged to support the entire universe in 'At the Heart of the Universe'.",
  },
  {
    slug: "heracles",
    name: "Heracles",
    tradition: "Greek",
    category: "greek",
    role: "Hero of impossible labours",
    description:
      "The strongest of Greek heroes, associated with impossible feats and burdens.",
    sources: ["warsaw-survey"],
    reinterpretation:
      "Reinforces the burden theme of 'The Eternal Punishment'.",
  },
  {
    slug: "asclepius",
    name: "Asclepius",
    tradition: "Greek",
    category: "greek",
    role: "God of healing",
    description:
      "The healer who could raise the dead, struck down by Zeus for defying mortality.",
    sources: ["warsaw-survey"],
    reinterpretation:
      "The cure-and-poison theme of 'Flowers of Fear'.",
  },
  {
    slug: "tiresias",
    name: "Tiresias",
    tradition: "Greek",
    category: "odyssey",
    role: "Blind prophet",
    description:
      "The blind seer who tells Odysseus the way home from the edge of the Underworld.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "The guiding seer of 'The Black Sphere'.",
  },
  {
    slug: "sphinx",
    name: "The Sphinx",
    tradition: "Greek",
    category: "greek",
    role: "Riddling monster",
    description:
      "A winged monster who kills those who cannot answer her riddle.",
    sources: ["sophocles-oedipus"],
    reinterpretation:
      "A riddling cosmic guardian in 'Secret of the Sphinx'.",
  },
  {
    slug: "oedipus",
    name: "Oedipus",
    tradition: "Greek",
    category: "greek",
    role: "Solver of the riddle",
    description:
      "The hero who answers the Sphinx's riddle to save Thebes.",
    sources: ["sophocles-oedipus"],
    reinterpretation:
      "The triumph of wit over the monster in 'Secret of the Sphinx'.",
  },
  {
    slug: "cronus",
    name: "Cronus",
    tradition: "Greek",
    category: "greek",
    role: "Titan of time",
    description:
      "Leader of the Titans, later merged with Chronos, the personification of Time.",
    sources: ["warsaw-survey"],
    reinterpretation:
      "The lord-of-time antagonist of 'Cronus, Father of Time'.",
  },
  {
    slug: "theseus",
    name: "Theseus",
    tradition: "Greek",
    category: "greek",
    role: "Slayer of the Minotaur",
    description:
      "The Athenian hero who kills the Minotaur and escapes the Labyrinth by Ariadne's thread.",
    sources: ["warsaw-survey"],
    reinterpretation:
      "The maze-and-monster hero echoed in 'Lost in the Labyrinth'.",
  },
  {
    slug: "ariadne",
    name: "Ariadne",
    tradition: "Greek",
    category: "greek",
    role: "Giver of the thread",
    description:
      "Daughter of Minos who provides the thread that leads Theseus out of the Labyrinth.",
    sources: ["warsaw-survey"],
    reinterpretation:
      "The guiding-thread motif in 'Lost in the Labyrinth' and 'Guardian of the Cosmic Winds'.",
  },
  {
    slug: "minotaur",
    name: "Minotaur",
    tradition: "Greek",
    category: "greek",
    role: "Monster of the maze",
    description:
      "The half-man, half-bull monster imprisoned in the Cretan Labyrinth.",
    sources: ["warsaw-survey"],
    reinterpretation:
      "The monstrous guardian of the futuristic maze in 'Lost in the Labyrinth'.",
  },
  {
    slug: "minos",
    name: "Minos",
    tradition: "Greek",
    category: "greek",
    role: "King of Crete",
    description:
      "The king who builds the Labyrinth to contain the Minotaur.",
    sources: ["warsaw-survey"],
    reinterpretation:
      "The ruler behind the maze in 'Lost in the Labyrinth'.",
  },
  {
    slug: "nereus",
    name: "Nereus",
    tradition: "Greek",
    category: "greek",
    role: "Old Man of the Sea",
    description:
      "A truthful old sea-god who knows all things.",
    sources: ["warsaw-survey"],
    reinterpretation:
      "The keeper of hidden truth in 'The Hidden Truth'.",
  },
  {
    slug: "galatea",
    name: "Galatea",
    tradition: "Greek / Roman",
    category: "roman",
    role: "Sea nymph",
    description:
      "A sea nymph in Ovid's tale of love and jealousy.",
    sources: ["ovid-metamorphoses"],
    reinterpretation:
      "Her story surfaces in 'The Hidden Truth'.",
  },
  {
    slug: "hypsipyle",
    name: "Hypsipyle",
    tradition: "Greek",
    category: "greek",
    role: "Queen of Lemnos",
    description:
      "Queen of the women of Lemnos who have risen against the island's men.",
    sources: ["apollonius-argonautica"],
    reinterpretation:
      "Inspires the rebel women's world of 'Rebellion on Lemnos'.",
  },
  {
    slug: "orpheus",
    name: "Orpheus",
    tradition: "Greek / Roman",
    category: "greek",
    role: "Musician of the Underworld",
    description:
      "The singer who descends to the Underworld to reclaim Eurydice.",
    sources: ["ovid-metamorphoses", "virgil-georgics"],
    reinterpretation:
      "His descent and loss shape 'The Kingdom of Hades'.",
  },
  {
    slug: "eurydice",
    name: "Eurydice",
    tradition: "Greek / Roman",
    category: "greek",
    role: "The wife lost twice",
    description:
      "Wife of Orpheus, lost forever when he looks back on the way out of the Underworld.",
    sources: ["ovid-metamorphoses", "virgil-georgics"],
    reinterpretation:
      "The loss-and-return theme of 'The Kingdom of Hades'.",
  },
  {
    slug: "hades",
    name: "Hades",
    tradition: "Greek",
    category: "greek",
    role: "Lord of the Underworld",
    description:
      "God of the dead and ruler of the realm below.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "Ruler of the cosmic Kingdom Ulysses must pass through to reach Earth.",
  },
  {
    slug: "nono",
    name: "Nono",
    tradition: "Original (companion)",
    category: "original",
    role: "The hero's small robotic companion",
    description:
      "An original science-fiction character with no direct ancient counterpart — a small robot companion aboard the Odyssey. Included here as part of the story's cast.",
    sources: [],
    reinterpretation:
      "A purely science-fiction invention that has no ancient mythological source.",
  },
];
