// Parallel journeys: Homer's Odysseus and the crew of the Odyssey.
// Each stage links to the relevant episode and myth where one exists.

export interface JourneyStage {
  id: string;
  homer: { title: string; note: string };
  ulysses: { title: string; note: string; episodeSlug?: string };
  mythSlug?: string;
}

export const journey: JourneyStage[] = [
  {
    id: "start",
    homer: { title: "Troy", note: "Odysseus sets sail from the fallen city, bound for Ithaca." },
    ulysses: {
      title: "Vengeance of the Gods",
      note: "Ulysses destroys the Cyclops and is condemned by Olympus to wander the cosmos.",
      episodeSlug: "vengeance-of-the-gods",
    },
    mythSlug: "cyclops",
  },
  {
    id: "cyclops",
    homer: { title: "The Cyclops", note: "Trapped by Polyphemus; the blinding earns Poseidon's wrath." },
    ulysses: {
      title: "The Lotus Eaters",
      note: "A substance steals the crew's memory and their will to go on.",
      episodeSlug: "the-lotus-eaters",
    },
    mythSlug: "lotus-eaters",
  },
  {
    id: "aeolus",
    homer: { title: "Aeolus", note: "The keeper of the winds gives a bag of winds that the crew fatally opens." },
    ulysses: {
      title: "Guardian of the Cosmic Winds",
      note: "A keeper of cosmic winds seals the currents in a casket.",
      episodeSlug: "guardian-of-the-cosmic-winds",
    },
    mythSlug: "aeolus",
  },
  {
    id: "laestrygonians",
    homer: { title: "The Laestrygonians", note: "Cannibal giants destroy most of the fleet." },
    ulysses: {
      title: "Temple of the Lestrigones",
      note: "Monstrous giants prey on the crew.",
      episodeSlug: "temple-of-the-lestrigones",
    },
    mythSlug: "laestrygonians",
  },
  {
    id: "circe",
    homer: { title: "Circe", note: "The enchantress turns the crew into swine." },
    ulysses: {
      title: "The Magic Spells of Circe",
      note: "A sorceress enchants and transforms the crew.",
      episodeSlug: "the-magic-spells-of-circe",
    },
    mythSlug: "circe",
  },
  {
    id: "sirens",
    homer: { title: "The Sirens", note: "A deadly song lures sailors to their doom." },
    ulysses: {
      title: "Song of Danger",
      note: "An irresistible song threatens the crew.",
      episodeSlug: "song-of-danger",
    },
    mythSlug: "sirens",
  },
  {
    id: "scylla",
    homer: { title: "Scylla & Charybdis", note: "An impossible choice between monster and whirlpool." },
    ulysses: {
      title: "Trapped Between Fire and Ice",
      note: "A passage between a world of fire and a world of ice.",
      episodeSlug: "trapped-between-fire-and-ice",
    },
    mythSlug: "scylla",
  },
  {
    id: "calypso",
    homer: { title: "Calypso", note: "The nymph offers immortality if the hero will stay." },
    ulysses: {
      title: "Calypso",
      note: "A nymph tempts Ulysses to abandon the journey home.",
      episodeSlug: "calypso",
    },
    mythSlug: "calypso",
  },
  {
    id: "underworld",
    homer: { title: "The Underworld", note: "Odysseus consults the dead, including Tiresias and Sisyphus." },
    ulysses: {
      title: "The Kingdom of Hades",
      note: "Ulysses passes through the realm of the dead to end the exile.",
      episodeSlug: "the-kingdom-of-hades",
    },
    mythSlug: "hades",
  },
  {
    id: "home",
    homer: { title: "Ithaca", note: "The hero returns home, is recognised, and reclaims his place." },
    ulysses: {
      title: "Earth",
      note: "The journey ends: Ulysses steers the Odyssey home to Earth.",
    },
  },
];
