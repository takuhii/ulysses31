import type { Myth } from "./types";

// Mythological figures and concepts referenced across the series.
// Slugs are shared with episode.myths and the interactive map.

export const myths: Myth[] = [
  {
    slug: "cyclops",
    name: "Cyclops (Polyphemus)",
    tradition: "Greek",
    category: "odyssey",
    role: "One-eyed giant, son of Poseidon",
    description:
      "The Cyclopes are one-eyed giants; Polyphemus, son of Poseidon, traps Odysseus and his men in his cave and devours several before Odysseus blinds him to escape.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "Ulysses 31 opens with a giant technological Cyclops that consumes children, whose defeat triggers the wrath of Olympus and the hero's cosmic exile.",
  },
  {
    slug: "poseidon",
    name: "Poseidon",
    tradition: "Greek",
    category: "greek",
    role: "God of the sea, father of the Cyclops",
    description:
      "God of the sea, earthquakes and horses. In the Odyssey his hatred of Odysseus — for blinding his son Polyphemus — drives the hero's long delay in returning home.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "In the series Poseidon's personal vendetta is folded into the collective judgement of the gods of Olympus who condemn Ulysses.",
  },
  {
    slug: "zeus",
    name: "Zeus",
    tradition: "Greek",
    category: "greek",
    role: "King of the gods",
    description:
      "Ruler of Olympus and the sky, arbiter among the gods. In the Odyssey he ultimately permits Odysseus' return.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "The series presents the Olympian gods as a powerful, judging authority that punishes Ulysses' defiance.",
  },
  {
    slug: "troy",
    name: "Troy",
    tradition: "Greek",
    category: "odyssey",
    role: "The war that precedes the journey home",
    description:
      "The Trojan War is the great conflict from which Odysseus is returning at the start of the Odyssey. It is the reason the hero is far from home.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "Ulysses begins his story returning from war, echoing Odysseus setting out from fallen Troy.",
  },
  {
    slug: "demeter",
    name: "Demeter",
    tradition: "Greek",
    category: "greek",
    role: "Goddess of the harvest, grieving mother",
    description:
      "Goddess of grain and the harvest. Her grief at losing her daughter Persephone to the Underworld makes the earth barren, giving rise to the myth of the seasons.",
    sources: ["homeric-hymn-demeter"],
    reinterpretation:
      "The grief-and-renewal core of her myth is projected onto a dying world in 'The Lost Planet'.",
  },
  {
    slug: "persephone",
    name: "Persephone",
    tradition: "Greek",
    category: "greek",
    role: "The daughter taken to the Underworld",
    description:
      "Daughter of Demeter, abducted by Hades to be queen of the Underworld. Her seasonal return to the surface renews the earth.",
    sources: ["homeric-hymn-demeter"],
    reinterpretation:
      "Her loss and return underlie the cycle of desolation and life in 'The Lost Planet'.",
  },
  {
    slug: "tiresias",
    name: "Tiresias",
    tradition: "Greek",
    category: "odyssey",
    role: "The blind prophet",
    description:
      "A blind seer whose prophecies are unfailing. In Odyssey Book 11 Odysseus journeys to the edge of the Underworld to learn from him the way home.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "The 'blind prophet who alone knows the way' is echoed in the seer of 'The Black Sphere'.",
  },
  {
    slug: "aeolus",
    name: "Aeolus",
    tradition: "Greek",
    category: "odyssey",
    role: "Keeper of the winds",
    description:
      "Master of the winds, who gives Odysseus a bag holding all winds but the one to carry him home. His crew's greed unleashes them and blows the ship off course.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "The winds become 'cosmic winds' sealed in a casket in 'Guardian of the Cosmic Winds'.",
  },
  {
    slug: "sisyphus",
    name: "Sisyphus",
    tradition: "Greek",
    category: "odyssey",
    role: "Condemned to eternal, futile labour",
    description:
      "A trickster king condemned in the Underworld to roll a boulder uphill forever, only for it to roll back down each time — the emblem of pointless, unending toil.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "His endless punishment becomes a cosmic ordeal of eternal recurrence in 'The Eternal Punishment'.",
  },
  {
    slug: "atlas",
    name: "Atlas",
    tradition: "Greek",
    category: "greek",
    role: "Titan who bears the heavens",
    description:
      "A Titan condemned after the war with the Olympians to hold up the sky at the western edge of the world for eternity.",
    sources: ["warsaw-survey"],
    reinterpretation:
      "The series enlarges his burden from the sky to the entire universe in 'At the Heart of the Universe'.",
  },
  {
    slug: "heracles",
    name: "Heracles",
    tradition: "Greek",
    category: "greek",
    role: "Hero of impossible labours",
    description:
      "The greatest of Greek heroes, famed for his Twelve Labours, including briefly bearing the heavens in place of Atlas.",
    sources: ["warsaw-survey"],
    reinterpretation:
      "His association with impossible burdens reinforces the theme of 'The Eternal Punishment'.",
  },
  {
    slug: "asclepius",
    name: "Asclepius",
    tradition: "Greek",
    category: "greek",
    role: "God of healing and medicine",
    description:
      "Son of Apollo and the great healer, so skilled he could raise the dead — until Zeus struck him down for defying the limits of mortality.",
    sources: ["warsaw-survey"],
    reinterpretation:
      "The double edge of cure and poison underlies the deadly flora of 'Flowers of Fear'.",
  },
  {
    slug: "sphinx",
    name: "The Sphinx",
    tradition: "Greek",
    category: "greek",
    role: "Riddling monster",
    description:
      "A winged monster with a lion's body and a woman's head who kills those who cannot answer her riddle, until Oedipus solves it and she destroys herself.",
    sources: ["sophocles-oedipus"],
    reinterpretation:
      "A riddling guardian defeated by wit appears in 'Secret of the Sphinx'.",
  },
  {
    slug: "oedipus",
    name: "Oedipus",
    tradition: "Greek",
    category: "greek",
    role: "Solver of the Sphinx's riddle",
    description:
      "The Theban hero who answers the Sphinx's riddle and becomes king, only to fulfil a prophecy that he would kill his father and marry his mother.",
    sources: ["sophocles-oedipus"],
    reinterpretation:
      "His triumph of intelligence over the monster informs 'Secret of the Sphinx'.",
  },
  {
    slug: "atalanta",
    name: "Atalanta",
    tradition: "Greek",
    category: "greek",
    role: "The swift-footed challenger",
    description:
      "A fierce huntress who challenged suitors to a footrace, defeating all until she was outwitted by golden apples — a myth of the deadly challenge.",
    sources: ["warsaw-survey"],
    reinterpretation:
      "The challenge-or-die motif is blended into 'Secret of the Sphinx'.",
  },
  {
    slug: "cronus",
    name: "Cronus / Chronos",
    tradition: "Greek",
    category: "greek",
    role: "Titan of time",
    description:
      "Leader of the Titans who devoured his children, later conflated with Chronos, the personification of Time itself.",
    sources: ["warsaw-survey"],
    reinterpretation:
      "Fused with Time and the Roman Janus into a lord-of-time antagonist in 'Cronus, Father of Time'.",
  },
  {
    slug: "janus",
    name: "Janus",
    tradition: "Roman",
    category: "roman",
    role: "Two-faced god of thresholds",
    description:
      "The Roman god of gates, beginnings and transitions, depicted with two faces looking to the past and the future.",
    sources: ["warsaw-survey"],
    reinterpretation:
      "His twin-facing view of past and future colours the time-god of 'Cronus, Father of Time'.",
  },
  {
    slug: "laestrygonians",
    name: "Laestrygonians",
    tradition: "Greek",
    category: "odyssey",
    role: "Cannibal giants",
    description:
      "A race of giant cannibals who destroy most of Odysseus' fleet by hurling boulders, in one of the deadliest episodes of the voyage.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "Adapted directly as monstrous giants in 'Temple of the Lestrigones'.",
  },
  {
    slug: "lotus-eaters",
    name: "Lotus-Eaters",
    tradition: "Greek",
    category: "odyssey",
    role: "People of the forgetful lotus",
    description:
      "A people whose lotus fruit makes those who eat it forget their home and lose all desire to leave.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "The lotus's forgetfulness recurs across 'The Seat of Forgetfulness', 'Song of Danger' and 'The Lotus Eaters'.",
  },
  {
    slug: "scylla",
    name: "Scylla",
    tradition: "Greek",
    category: "odyssey",
    role: "Six-headed cliff monster",
    description:
      "A monster with six heads who snatches sailors from passing ships in the narrow strait opposite Charybdis.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "Becomes a world of ice in 'Trapped Between Fire and Ice'.",
  },
  {
    slug: "charybdis",
    name: "Charybdis",
    tradition: "Greek",
    category: "odyssey",
    role: "Ship-swallowing whirlpool",
    description:
      "A monstrous whirlpool that swallows and belches out the sea three times a day, opposite Scylla in the deadly strait.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "Becomes a world of fire in 'Trapped Between Fire and Ice'.",
  },
  {
    slug: "sirens",
    name: "Sirens",
    tradition: "Greek",
    category: "odyssey",
    role: "Singers who lure sailors to death",
    description:
      "Creatures whose irresistible song lures sailors to wreck on their shores. Odysseus survives by being bound to the mast while his crew's ears are stopped with wax.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "The deadly song is the core of 'Song of Danger'.",
  },
  {
    slug: "medusa",
    name: "Medusa",
    tradition: "Greek",
    category: "greek",
    role: "Gorgon whose gaze turns victims to stone",
    description:
      "The mortal Gorgon whose gaze petrifies; slain by Perseus. A figure of danger frozen in a single glance.",
    sources: ["warsaw-survey"],
    reinterpretation:
      "Her petrifying threat is woven into the multi-layered danger of 'Song of Danger'.",
  },
  {
    slug: "harpies",
    name: "Harpies",
    tradition: "Greek",
    category: "greek",
    role: "Winged snatchers",
    description:
      "Winged spirits who snatch away food and people. In the Argonautica they torment the blind seer Phineus by stealing his meals.",
    sources: ["apollonius-argonautica"],
    reinterpretation:
      "Winged creatures that steal supplies appear in 'Before the Flood'.",
  },
  {
    slug: "circe",
    name: "Circe",
    tradition: "Greek",
    category: "odyssey",
    role: "Enchantress who transforms men",
    description:
      "A powerful sorceress who turns Odysseus' men into swine with a potion. Odysseus resists with the herb moly and compels her to restore them.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "Adapted directly as a sorceress who transforms the crew in 'The Magic Spells of Circe'.",
  },
  {
    slug: "theseus",
    name: "Theseus",
    tradition: "Greek",
    category: "greek",
    role: "Slayer of the Minotaur",
    description:
      "The Athenian hero who enters the Cretan Labyrinth to kill the Minotaur and escapes using Ariadne's thread.",
    sources: ["warsaw-survey"],
    reinterpretation:
      "His maze-and-monster story anchors 'Lost in the Labyrinth' and the guidance motif of 'Guardian of the Cosmic Winds'.",
  },
  {
    slug: "ariadne",
    name: "Ariadne",
    tradition: "Greek",
    category: "greek",
    role: "Giver of the guiding thread",
    description:
      "Daughter of King Minos who gives Theseus a thread to find his way out of the Labyrinth after slaying the Minotaur.",
    sources: ["warsaw-survey"],
    reinterpretation:
      "The guiding thread recurs in 'Lost in the Labyrinth' and 'Guardian of the Cosmic Winds'.",
  },
  {
    slug: "minotaur",
    name: "Minotaur",
    tradition: "Greek",
    category: "greek",
    role: "Half-man, half-bull monster of the maze",
    description:
      "A monster with the body of a man and the head of a bull, kept in the Labyrinth of Crete and fed on human tribute.",
    sources: ["warsaw-survey"],
    reinterpretation:
      "Becomes the monstrous guardian of the futuristic maze in 'Lost in the Labyrinth'.",
  },
  {
    slug: "minos",
    name: "Minos",
    tradition: "Greek",
    category: "greek",
    role: "King of Crete",
    description:
      "King of Crete who commissions the Labyrinth to contain the Minotaur and demands tribute from Athens.",
    sources: ["warsaw-survey"],
    reinterpretation:
      "The ruler behind the maze in 'Lost in the Labyrinth'.",
  },
  {
    slug: "nereus",
    name: "Nereus",
    tradition: "Greek",
    category: "greek",
    role: "The truthful Old Man of the Sea",
    description:
      "A gentle, truthful old sea-god who knows all things and must be held fast through his shape-shifting to yield answers.",
    sources: ["warsaw-survey"],
    reinterpretation:
      "The keeper of hidden truth in 'The Hidden Truth'.",
  },
  {
    slug: "galatea",
    name: "Galatea",
    tradition: "Greek / Roman",
    category: "roman",
    role: "Sea nymph of a love tragedy",
    description:
      "A sea nymph in Ovid's tale of love and jealousy involving the shepherd Acis and the Cyclops Polyphemus.",
    sources: ["ovid-metamorphoses"],
    reinterpretation:
      "Her story of love and transformation surfaces in 'The Hidden Truth'.",
  },
  {
    slug: "hypsipyle",
    name: "Hypsipyle",
    tradition: "Greek",
    category: "greek",
    role: "Queen of the women of Lemnos",
    description:
      "Queen of Lemnos, where the women have killed the island's men and rule alone before the arrival of the Argonauts.",
    sources: ["apollonius-argonautica"],
    reinterpretation:
      "Her rebel society inspires the female-led world of 'Rebellion on Lemnos'.",
  },
  {
    slug: "amazons",
    name: "Amazons",
    tradition: "Greek",
    category: "greek",
    role: "Nation of warrior women",
    description:
      "A legendary nation of warrior women, formidable in battle and living independently of men.",
    sources: ["warsaw-survey"],
    reinterpretation:
      "Their warrior-women imagery colours 'Rebellion on Lemnos' and 'Calypso'.",
  },
  {
    slug: "calypso",
    name: "Calypso",
    tradition: "Greek",
    category: "odyssey",
    role: "Nymph who delays the hero",
    description:
      "A nymph who keeps Odysseus on her island for seven years, offering immortality if he stays; he refuses out of longing for home.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "The seductive delay is adapted in the episode 'Calypso'.",
  },
  {
    slug: "orpheus",
    name: "Orpheus",
    tradition: "Greek / Roman",
    category: "greek",
    role: "Musician who descends to the Underworld",
    description:
      "A musician whose song can move even the powers of death. He descends to reclaim his wife Eurydice but loses her by looking back too soon.",
    sources: ["ovid-metamorphoses", "virgil-georgics"],
    reinterpretation:
      "His descent and loss shape the climactic 'Kingdom of Hades'.",
  },
  {
    slug: "eurydice",
    name: "Eurydice",
    tradition: "Greek / Roman",
    category: "greek",
    role: "The wife lost twice",
    description:
      "Wife of Orpheus who dies and is nearly rescued from the Underworld, only to be lost forever when Orpheus glances back.",
    sources: ["ovid-metamorphoses", "virgil-georgics"],
    reinterpretation:
      "The loss-and-return theme threads through 'The Kingdom of Hades'.",
  },
  {
    slug: "hades",
    name: "Hades",
    tradition: "Greek",
    category: "greek",
    role: "Lord of the Underworld",
    description:
      "God of the dead and ruler of the Underworld, the realm to which all mortals descend and from which few return.",
    sources: ["homer-odyssey"],
    reinterpretation:
      "The realm of Hades becomes the cosmic Kingdom Ulysses must pass through to return home.",
  },
  {
    slug: "cerberus",
    name: "Cerberus",
    tradition: "Greek",
    category: "greek",
    role: "The guardian hound of the Underworld",
    description:
      "The multi-headed hound who guards the gates of the Underworld, letting the dead in but never out.",
    sources: ["warsaw-survey"],
    reinterpretation:
      "The guardian of the cosmic Underworld in 'The Kingdom of Hades'.",
  },
  {
    slug: "flood",
    name: "The Great Flood",
    tradition: "Cross-cultural",
    category: "other",
    role: "The world-ending deluge",
    description:
      "Flood myths recur across cultures — the Greek Deucalion, the biblical Noah, and Andean/Inca traditions — telling of a deluge that ends and renews the world, with survivors preserved in an ark or refuge.",
    sources: ["warsaw-survey"],
    reinterpretation:
      "Cross-cultural flood and ark mythology drives 'Before the Flood'.",
  },
  {
    slug: "inca",
    name: "Inca / Andean tradition",
    tradition: "Inca",
    category: "other",
    role: "Non-Greek mythological thread",
    description:
      "Andean and Inca traditions include their own accounts of a great flood and world renewal, one of the non-Greek strands the series draws upon.",
    sources: ["warsaw-survey"],
    reinterpretation:
      "Contributes a cross-cultural layer to 'Before the Flood'.",
  },
];
