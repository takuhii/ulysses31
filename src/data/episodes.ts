import type { Episode } from "./types";

// The 26 episodes of Ulysses 31 (Ulysse 31), with mythological analysis.
// Synopses and interpretations are written for this reference and paraphrase
// the ancient sources; interpretive claims are flagged with a confidence level.

export const episodes: Episode[] = [
  {
    id: 1,
    slug: "vengeance-of-the-gods",
    englishTitle: "Vengeance of the Gods",
    frenchTitle: "Le Cyclope ou la malédiction des dieux",
    classification: "direct",
    sourceCategories: ["odyssey", "greek"],
    sources: ["homer-odyssey", "warsaw-survey"],
    myths: ["cyclops", "poseidon", "zeus", "troy"],
    characters: ["ulysses", "telemachus", "poseidon", "zeus", "cyclops"],
    summary:
      "Returning from a great war, Ulysses discovers a giant technological Cyclops holding children captive, including his son Telemachus. When Ulysses destroys the monster, the gods of Olympus condemn him: his crew is cast into a coma and his path home is taken from him.",
    ancientStory:
      "In the Odyssey, Odysseus and his men are trapped in the cave of the Cyclops Polyphemus, a one-eyed son of Poseidon. Odysseus blinds the giant to escape, but by boasting of his deed he earns Poseidon's undying wrath, which delays his homecoming for years.",
    adaptation:
      "The series keeps the core of the myth — a hero who defeats a Cyclops and is punished by an offended god — but reframes divine punishment as the engine for the whole show. Instead of a sea voyage delayed, Ulysses is exiled among the stars until he can reach the Kingdom of Hades.",
    motifs: ["hubris", "divine punishment", "the monster in the cave", "the wrath of the sea god"],
    comparisons: [
      { ancient: "Cyclops Polyphemus", scifi: "Giant technological creature that consumes children" },
      { ancient: "Poseidon's wrath", scifi: "The collective judgement of Olympus" },
      { ancient: "Delayed sea voyage", scifi: "Exile across the cosmos" },
      { ancient: "The Mediterranean", scifi: "Deep space" },
    ],
    dna: [
      { myth: "Cyclops", mythSlug: "cyclops", ancientText: "Homer — Odyssey Book 9", sourceSlug: "homer-odyssey" },
      { myth: "Poseidon's wrath", mythSlug: "poseidon", ancientText: "Homer — Odyssey Books 1 & 9", sourceSlug: "homer-odyssey" },
    ],
    confidence: "high",
    keywords: ["cyclops", "polyphemus", "poseidon", "curse", "troy", "telemachus", "olympus"],
  },
  {
    id: 2,
    slug: "the-lost-planet",
    englishTitle: "The Lost Planet",
    frenchTitle: "La planète perdue",
    classification: "hybrid",
    sourceCategories: ["greek"],
    sources: ["homeric-hymn-demeter", "warsaw-survey"],
    myths: ["demeter", "persephone"],
    characters: ["ulysses", "nono"],
    summary:
      "The Odyssey encounters a world torn between eternal life and cold desolation, echoing a story of a lost daughter and a grieving power whose sorrow drains life from an entire world.",
    ancientStory:
      "The Homeric Hymn to Demeter tells how Hades abducts Persephone into the Underworld. Her mother Demeter, goddess of the harvest, grieves so fiercely that the earth grows barren, until a compromise lets Persephone return for part of each year — the origin myth of the seasons.",
    adaptation:
      "The episode borrows the emotional core of the Demeter–Persephone myth — loss, mourning and the cyclical loss and renewal of life — and projects it onto a dying world rather than the failing harvest of ancient Greece.",
    motifs: ["loss and renewal", "the grieving mother", "cycle of the seasons"],
    comparisons: [
      { ancient: "Barren earth", scifi: "A dying, lifeless planet" },
      { ancient: "Persephone taken to the Underworld", scifi: "A world lost to darkness" },
      { ancient: "Return of the harvest", scifi: "The restoration of life" },
    ],
    dna: [
      { myth: "Demeter & Persephone", mythSlug: "demeter", ancientText: "Homeric Hymn to Demeter", sourceSlug: "homeric-hymn-demeter" },
    ],
    confidence: "probable",
    uncertaintyNote:
      "The connection to Demeter and Persephone is thematic rather than a literal retelling; treat it as a probable influence.",
    keywords: ["demeter", "persephone", "seasons", "harvest", "loss", "renewal"],
  },
  {
    id: 3,
    slug: "the-black-sphere",
    englishTitle: "The Black Sphere",
    frenchTitle: "Hératos",
    classification: "direct",
    sourceCategories: ["odyssey", "greek"],
    sources: ["homer-odyssey", "warsaw-survey"],
    myths: ["tiresias", "hades"],
    characters: ["ulysses", "tiresias"],
    summary:
      "Ulysses seeks knowledge from a blind seer within a strange sphere, a figure who can reveal the path forward but demands a price for prophecy.",
    ancientStory:
      "In Odyssey Book 11, Odysseus travels to the edge of the Underworld to consult the ghost of the blind prophet Tiresias, the only spirit able to tell him how to reach home and what trials await.",
    adaptation:
      "The series preserves the archetype of the blind prophet who alone knows the way home. The descent to consult the dead becomes an encounter with a mysterious sphere, translating the Homeric nekyia (consultation of the dead) into a cosmic setting.",
    motifs: ["the blind seer", "prophecy", "the price of knowledge"],
    comparisons: [
      { ancient: "The Underworld's edge", scifi: "A mysterious black sphere in space" },
      { ancient: "Tiresias the blind prophet", scifi: "A seer figure who guides Ulysses" },
      { ancient: "Ritual to summon the dead", scifi: "A journey into the unknown" },
    ],
    dna: [
      { myth: "Tiresias", mythSlug: "tiresias", ancientText: "Homer — Odyssey Book 11", sourceSlug: "homer-odyssey" },
    ],
    confidence: "probable",
    uncertaintyNote:
      "The identification with Tiresias rests on the recurring 'blind prophet' motif rather than named characters.",
    keywords: ["tiresias", "prophet", "seer", "underworld", "prophecy", "heratos"],
  },
  {
    id: 4,
    slug: "guardian-of-the-cosmic-winds",
    englishTitle: "Guardian of the Cosmic Winds",
    frenchTitle: "Éole ou le coffret des vents cosmiques",
    classification: "hybrid",
    sourceCategories: ["odyssey", "greek"],
    sources: ["homer-odyssey", "warsaw-survey"],
    myths: ["aeolus", "theseus", "ariadne"],
    characters: ["ulysses", "aeolus", "theseus", "ariadne"],
    summary:
      "Ulysses meets a keeper of the winds who offers a way forward, while a thread of guidance echoes the tale of a hero who escaped a deadly maze.",
    ancientStory:
      "In Odyssey Book 10, Aeolus, keeper of the winds, gives Odysseus a bag containing all the winds except the one that will carry him home. His crew, believing it holds treasure, opens it and unleashes a storm that blows them back. The Theseus and Ariadne strand recalls the thread that leads a hero out of the labyrinth.",
    adaptation:
      "The winds of Aeolus become 'cosmic winds' sealed in a coffret (casket), while the Theseus–Ariadne thread is woven in as a motif of guidance. The result is a hybrid that blends two Greek stories about finding a safe path.",
    motifs: ["the winds", "the fatal casket", "guidance out of danger", "the thread"],
    comparisons: [
      { ancient: "Bag of the winds", scifi: "Casket of cosmic winds" },
      { ancient: "Aeolus, keeper of winds", scifi: "A guardian of cosmic currents" },
      { ancient: "Ariadne's thread", scifi: "A guiding path through danger" },
    ],
    dna: [
      { myth: "Aeolus", mythSlug: "aeolus", ancientText: "Homer — Odyssey Book 10", sourceSlug: "homer-odyssey" },
      { myth: "Theseus & Ariadne", mythSlug: "theseus", ancientText: "Greek mythology", sourceSlug: "warsaw-survey" },
    ],
    confidence: "probable",
    keywords: ["aeolus", "winds", "casket", "theseus", "ariadne", "thread", "labyrinth"],
  },
  {
    id: 5,
    slug: "the-eternal-punishment",
    englishTitle: "The Eternal Punishment",
    frenchTitle: "Sisyphe ou l'éternel recommencement",
    classification: "hybrid",
    sourceCategories: ["odyssey", "greek"],
    sources: ["homer-odyssey", "warsaw-survey"],
    myths: ["sisyphus", "atlas", "heracles"],
    characters: ["ulysses", "sisyphus", "atlas", "heracles"],
    summary:
      "Ulysses confronts a place of endless, futile toil, where a figure is condemned to repeat the same crushing labour forever.",
    ancientStory:
      "Sisyphus, glimpsed by Odysseus in the Underworld (Book 11), is condemned to roll a boulder uphill only to watch it roll back down for eternity — a symbol of pointless, unending effort. Atlas and Heracles supply parallel images of impossible burdens.",
    adaptation:
      "The series takes the image of eternal, meaningless punishment and dramatises it directly. The boulder of Sisyphus becomes a cosmic ordeal, and the theme of the impossible burden is reinforced by the presence of Atlas.",
    motifs: ["futile labour", "eternal punishment", "the impossible burden"],
    comparisons: [
      { ancient: "Sisyphus' boulder", scifi: "An endless cosmic ordeal" },
      { ancient: "Atlas bearing the heavens", scifi: "A crushing cosmic weight" },
      { ancient: "Punishment in the Underworld", scifi: "A trap of eternal recurrence" },
    ],
    dna: [
      { myth: "Sisyphus", mythSlug: "sisyphus", ancientText: "Homer — Odyssey Book 11", sourceSlug: "homer-odyssey" },
      { myth: "Atlas", mythSlug: "atlas", ancientText: "Greek mythology", sourceSlug: "warsaw-survey" },
    ],
    confidence: "high",
    keywords: ["sisyphus", "boulder", "atlas", "heracles", "punishment", "eternal", "labour"],
  },
  {
    id: 6,
    slug: "flowers-of-fear",
    englishTitle: "Flowers of Fear",
    frenchTitle: "Les fleurs sauvages",
    classification: "hybrid",
    sourceCategories: ["greek"],
    sources: ["warsaw-survey"],
    myths: ["asclepius", "scylla"],
    characters: ["ulysses", "asclepius"],
    summary:
      "A world of alluring but dangerous flora threatens the crew, tied to a figure associated with healing, medicine and the fine line between cure and poison.",
    ancientStory:
      "Asclepius, son of Apollo, is the great healer of Greek myth, so skilled he could raise the dead — until Zeus struck him down for overstepping mortal limits. The Scylla strand recalls a beautiful figure transformed into a devouring monster.",
    adaptation:
      "The episode plays on the double edge of healing and harm associated with Asclepius, dramatised as beautiful flowers that are in fact deadly, blended with the transformation motif of Scylla.",
    motifs: ["cure and poison", "beauty that kills", "transformation"],
    comparisons: [
      { ancient: "Asclepius' medicine", scifi: "Flowers that heal or harm" },
      { ancient: "Scylla's transformation", scifi: "Beauty turned monstrous" },
    ],
    dna: [
      { myth: "Asclepius", mythSlug: "asclepius", ancientText: "Greek mythology", sourceSlug: "warsaw-survey" },
      { myth: "Scylla", mythSlug: "scylla", ancientText: "Greek mythology", sourceSlug: "warsaw-survey" },
    ],
    confidence: "possible",
    uncertaintyNote:
      "These mythological links are interpretive; the episode is best read as a possible blend of the Asclepius and Scylla traditions.",
    keywords: ["asclepius", "healing", "medicine", "scylla", "flowers", "poison"],
  },
  {
    id: 7,
    slug: "mutiny-on-board",
    englishTitle: "Mutiny on Board",
    frenchTitle: "La révolte des compagnons",
    classification: "motif",
    sourceCategories: ["odyssey"],
    sources: ["homer-odyssey", "warsaw-survey"],
    myths: [],
    characters: ["ulysses"],
    summary:
      "Ulysses' companions turn against him, testing the loyalty and discipline that hold the crew together on their exile.",
    ancientStory:
      "Throughout the Odyssey, Odysseus' men repeatedly disobey him — opening the bag of winds, slaughtering the cattle of the Sun — and their disobedience brings disaster. Crew loyalty and mutiny is a recurring Homeric motif rather than a single named episode.",
    adaptation:
      "Rather than adapting one myth, the episode dramatises the general Homeric theme of a crew that endangers itself through disobedience, reframed as a mutiny aboard the Odyssey spacecraft.",
    motifs: ["disobedience", "crew loyalty", "the cost of mutiny"],
    comparisons: [
      { ancient: "Disobedient crew of Odysseus", scifi: "Mutinous companions aboard the Odyssey" },
      { ancient: "Consequences of disobedience", scifi: "Danger to the whole ship" },
    ],
    dna: [
      { myth: "Crew disobedience motif", ancientText: "Homer — Odyssey (recurring)", sourceSlug: "homer-odyssey" },
    ],
    confidence: "probable",
    uncertaintyNote:
      "This episode reflects a general Odyssey motif rather than a specific ancient story.",
    keywords: ["mutiny", "crew", "companions", "loyalty", "revolt", "disobedience"],
  },
  {
    id: 8,
    slug: "secret-of-the-sphinx",
    englishTitle: "Secret of the Sphinx",
    frenchTitle: "Le Sphinx",
    classification: "hybrid",
    sourceCategories: ["greek"],
    sources: ["sophocles-oedipus", "warsaw-survey"],
    myths: ["sphinx", "oedipus", "atalanta"],
    characters: ["ulysses", "sphinx", "oedipus"],
    summary:
      "Ulysses faces a riddling guardian whose question must be answered on pain of death — a test of wit rather than force.",
    ancientStory:
      "In the Oedipus story, the Sphinx terrorises Thebes with a deadly riddle; Oedipus answers correctly and the monster destroys itself. The Atalanta strand adds the motif of a challenge or race that must be won.",
    adaptation:
      "The series keeps the essence of the Sphinx myth — a monstrous guardian defeated by intelligence, not strength — while blending in the challenge motif of Atalanta.",
    motifs: ["the riddle", "wit over force", "the deadly guardian"],
    comparisons: [
      { ancient: "The Sphinx's riddle", scifi: "A cosmic guardian's test" },
      { ancient: "Oedipus answering", scifi: "Ulysses solving the challenge" },
    ],
    dna: [
      { myth: "The Sphinx", mythSlug: "sphinx", ancientText: "Sophocles — Oedipus Rex", sourceSlug: "sophocles-oedipus" },
      { myth: "Oedipus", mythSlug: "oedipus", ancientText: "Sophocles — Oedipus Rex", sourceSlug: "sophocles-oedipus" },
    ],
    confidence: "high",
    keywords: ["sphinx", "riddle", "oedipus", "atalanta", "guardian", "wit"],
  },
  {
    id: 9,
    slug: "cronus-father-of-time",
    englishTitle: "Cronus, Father of Time",
    frenchTitle: "Chronos",
    classification: "hybrid",
    sourceCategories: ["greek", "roman"],
    sources: ["warsaw-survey"],
    myths: ["cronus", "janus"],
    characters: ["ulysses", "cronus"],
    summary:
      "Ulysses encounters a being who commands time itself, able to age, reverse or freeze the flow of moments.",
    ancientStory:
      "Cronus, leader of the Titans, was conflated in later tradition with Chronos, the personification of Time. The Roman god Janus, with faces looking to past and future, adds the theme of thresholds between times.",
    adaptation:
      "The episode fuses Cronus the Titan with Chronos the abstraction of Time and the Roman Janus, producing a master-of-time antagonist — a clear hybrid drawing on both Greek and Roman traditions.",
    motifs: ["mastery of time", "past and future", "the devouring parent"],
    comparisons: [
      { ancient: "Cronus / Chronos", scifi: "A cosmic lord of time" },
      { ancient: "Janus' two faces", scifi: "Command over past and future" },
    ],
    dna: [
      { myth: "Cronus / Chronos", mythSlug: "cronus", ancientText: "Greek mythology", sourceSlug: "warsaw-survey" },
      { myth: "Janus", ancientText: "Roman mythology", sourceSlug: "warsaw-survey" },
    ],
    confidence: "probable",
    keywords: ["cronus", "chronos", "time", "janus", "titan", "roman"],
  },
  {
    id: 10,
    slug: "temple-of-the-lestrigones",
    englishTitle: "Temple of the Lestrigones",
    frenchTitle: "Les Lestrygons",
    classification: "direct",
    sourceCategories: ["odyssey"],
    sources: ["homer-odyssey", "warsaw-survey"],
    myths: ["laestrygonians"],
    characters: ["ulysses"],
    summary:
      "Ulysses lands among giants who lure travellers into a trap and destroy their ships, echoing one of the deadliest stops of the Odyssey.",
    ancientStory:
      "In Odyssey Book 10, Odysseus reaches the land of the Laestrygonians, a race of cannibal giants who hurl boulders to smash his fleet, destroying all but his own ship.",
    adaptation:
      "The series adapts the Laestrygonians directly as monstrous giants who prey on the crew, translating the destruction of the fleet into a peril of the cosmos.",
    motifs: ["the man-eating giants", "the deadly harbour", "the trap"],
    comparisons: [
      { ancient: "Laestrygonian giants", scifi: "Cosmic giants of the temple" },
      { ancient: "Fleet destroyed by boulders", scifi: "The Odyssey imperilled" },
    ],
    dna: [
      { myth: "Laestrygonians", mythSlug: "laestrygonians", ancientText: "Homer — Odyssey Book 10", sourceSlug: "homer-odyssey" },
    ],
    confidence: "high",
    keywords: ["laestrygonians", "lestrigones", "giants", "cannibals", "trap"],
  },
  {
    id: 11,
    slug: "the-seat-of-forgetfulness",
    englishTitle: "The Seat of Forgetfulness",
    frenchTitle: "Le fauteuil de l'oubli",
    classification: "motif",
    sourceCategories: ["odyssey"],
    sources: ["homer-odyssey", "warsaw-survey"],
    myths: ["lotus-eaters"],
    characters: ["ulysses"],
    summary:
      "A device or place erases memory, tempting the crew to abandon their journey and forget home entirely.",
    ancientStory:
      "In Odyssey Book 9, the Lotus-Eaters offer Odysseus' men the lotus fruit, which makes them forget their homeland and lose all desire to return. Odysseus must drag them back to the ships by force.",
    adaptation:
      "The lotus's power of forgetfulness becomes a 'seat of oblivion' — a technological means of memory erasure — keeping the myth's central danger (losing the will to go home) while changing its form.",
    motifs: ["forgetfulness", "the lure to abandon the journey", "memory erased"],
    comparisons: [
      { ancient: "The lotus fruit", scifi: "A seat that erases memory" },
      { ancient: "Forgetting one's homeland", scifi: "Losing the will to return" },
    ],
    dna: [
      { myth: "Lotus-Eaters", mythSlug: "lotus-eaters", ancientText: "Homer — Odyssey Book 9", sourceSlug: "homer-odyssey" },
    ],
    confidence: "probable",
    keywords: ["lotus", "forgetfulness", "memory", "oblivion", "seat"],
  },
  {
    id: 12,
    slug: "trapped-between-fire-and-ice",
    englishTitle: "Trapped Between Fire and Ice",
    frenchTitle: "Charybde et Scylla",
    classification: "direct",
    sourceCategories: ["odyssey"],
    sources: ["homer-odyssey", "warsaw-survey"],
    myths: ["scylla", "charybdis"],
    characters: ["ulysses"],
    summary:
      "Ulysses must pass between two deadly perils, forced to choose the lesser of two catastrophes in a narrow, unavoidable strait.",
    ancientStory:
      "In Odyssey Book 12, Odysseus must sail between Scylla, a six-headed monster on the cliff, and Charybdis, a ship-swallowing whirlpool. He cannot avoid both and chooses to lose a few men to Scylla rather than the whole ship to Charybdis.",
    adaptation:
      "The classic 'between Scylla and Charybdis' dilemma is reimagined as a passage between a world of fire and a world of ice — two opposed cosmic dangers with no safe path between them.",
    motifs: ["the impossible choice", "twin dangers", "the deadly strait"],
    comparisons: [
      { ancient: "Scylla the sea monster", scifi: "A world of ice" },
      { ancient: "Charybdis the whirlpool", scifi: "A world of fire" },
      { ancient: "The narrow strait", scifi: "A cosmic passage with no safe route" },
    ],
    dna: [
      { myth: "Scylla", mythSlug: "scylla", ancientText: "Homer — Odyssey Book 12", sourceSlug: "homer-odyssey" },
      { myth: "Charybdis", mythSlug: "charybdis", ancientText: "Homer — Odyssey Book 12", sourceSlug: "homer-odyssey" },
    ],
    confidence: "high",
    keywords: ["scylla", "charybdis", "fire", "ice", "strait", "dilemma"],
  },
  {
    id: 13,
    slug: "phantoms-from-the-swamp",
    englishTitle: "Phantoms from the Swamp",
    frenchTitle: "Le marais des doubles",
    classification: "original",
    sourceCategories: ["original"],
    sources: ["warsaw-survey"],
    myths: [],
    characters: ["ulysses"],
    summary:
      "The crew confronts uncanny doubles of themselves emerging from a strange marsh, a story with no clearly identified ancient source.",
    ancientStory:
      "No specific ancient myth has been reliably identified as the source of this episode. The 'double' or doppelgänger motif appears across many traditions but not as a single canonical Greek tale here.",
    adaptation:
      "This appears to be an original science-fiction story. While the theme of confronting one's double resonates with mythological ideas of the shade or eidolon, no direct ancient source is established.",
    motifs: ["the double", "illusion", "the uncanny"],
    comparisons: [
      { ancient: "The shade / eidolon (general)", scifi: "Phantom doubles of the crew" },
    ],
    dna: [
      { myth: "No specific source identified", ancientText: "Original science fiction" },
    ],
    confidence: "uncertain",
    uncertaintyNote:
      "No specific ancient source has been identified. This episode is best classified as original.",
    keywords: ["doubles", "phantoms", "swamp", "marsh", "original", "doppelganger"],
  },
  {
    id: 14,
    slug: "song-of-danger",
    englishTitle: "Song of Danger",
    frenchTitle: "Les Sirènes",
    classification: "hybrid",
    sourceCategories: ["odyssey", "greek"],
    sources: ["homer-odyssey", "warsaw-survey"],
    myths: ["sirens", "lotus-eaters", "medusa"],
    characters: ["ulysses"],
    summary:
      "An irresistible song lures the crew toward destruction, blending the deadly music of the Sirens with the numbing lure of the lotus and the petrifying threat of Medusa.",
    ancientStory:
      "In Odyssey Book 12, the Sirens sing so sweetly that sailors steer to their deaths. Odysseus plugs his men's ears with wax and has himself bound to the mast so he can hear the song and survive. The episode also draws on the Lotus-Eaters' forgetfulness and Medusa's petrifying gaze.",
    adaptation:
      "A textbook hybrid: the central Siren myth is fused with the Lotus-Eaters and Medusa to create a single, multi-layered danger of seduction, forgetting and being frozen in place.",
    motifs: ["the deadly song", "seduction", "the lure to destruction", "petrification"],
    comparisons: [
      { ancient: "The Sirens' song", scifi: "A cosmic song of danger" },
      { ancient: "The lotus", scifi: "Numbing forgetfulness" },
      { ancient: "Medusa's gaze", scifi: "Being frozen / immobilised" },
    ],
    dna: [
      { myth: "Sirens", mythSlug: "sirens", ancientText: "Homer — Odyssey Book 12", sourceSlug: "homer-odyssey" },
      { myth: "Lotus-Eaters", mythSlug: "lotus-eaters", ancientText: "Homer — Odyssey Book 9", sourceSlug: "homer-odyssey" },
      { myth: "Medusa", mythSlug: "medusa", ancientText: "Greek mythology", sourceSlug: "warsaw-survey" },
    ],
    confidence: "high",
    keywords: ["sirens", "song", "lotus", "medusa", "seduction", "petrify"],
  },
  {
    id: 15,
    slug: "before-the-flood",
    englishTitle: "Before the Flood",
    frenchTitle: "La deuxième arche",
    classification: "hybrid",
    sourceCategories: ["greek", "other"],
    sources: ["apollonius-argonautica", "warsaw-survey"],
    myths: ["harpies", "flood", "inca"],
    characters: ["ulysses"],
    summary:
      "Facing a cataclysm, survivors prepare an ark to preserve life, while ravenous winged creatures snatch away what they need.",
    ancientStory:
      "Flood myths appear across cultures — the Greek Deucalion, the biblical Noah, and Inca traditions of a great deluge. The Harpies, winged snatchers, torment Phineus in the Argonautica by stealing his food.",
    adaptation:
      "The episode blends universal flood mythology (including Inca tradition) with the Greek Harpies, creating a story about surviving a deluge while beset by winged predators — a striking cross-cultural hybrid.",
    motifs: ["the great flood", "the ark", "winged snatchers", "survival"],
    comparisons: [
      { ancient: "Flood myths (Deucalion / Inca)", scifi: "A cosmic cataclysm" },
      { ancient: "Noah's / Deucalion's ark", scifi: "A second ark in space" },
      { ancient: "The Harpies", scifi: "Winged creatures that steal supplies" },
    ],
    dna: [
      { myth: "Harpies", mythSlug: "harpies", ancientText: "Apollonius — Argonautica", sourceSlug: "apollonius-argonautica" },
      { myth: "Flood mythology", mythSlug: "flood", ancientText: "Cross-cultural flood myths", sourceSlug: "warsaw-survey" },
    ],
    confidence: "probable",
    uncertaintyNote:
      "The Inca and flood connections are cross-cultural and interpretive; treat them as a probable influence.",
    keywords: ["flood", "ark", "harpies", "inca", "deluge", "noah", "deucalion"],
  },
  {
    id: 16,
    slug: "the-magic-spells-of-circe",
    englishTitle: "The Magic Spells of Circe",
    frenchTitle: "Circé la magicienne",
    classification: "direct",
    sourceCategories: ["odyssey"],
    sources: ["homer-odyssey", "warsaw-survey"],
    myths: ["circe"],
    characters: ["ulysses", "circe"],
    summary:
      "A powerful sorceress enchants the crew, transforming them and holding Ulysses in her domain by magic.",
    ancientStory:
      "In Odyssey Book 10, the enchantress Circe turns Odysseus' men into swine with a magic potion. Protected by the herb moly given by Hermes, Odysseus resists and forces her to restore his crew, then remains with her for a year.",
    adaptation:
      "One of the most direct adaptations in the series: Circe is named and dramatised as a sorceress who transforms the crew, translating her enchantments into a cosmic setting with little change to the core story.",
    motifs: ["enchantment", "transformation", "the sorceress", "the herb of protection"],
    comparisons: [
      { ancient: "Circe turns men to swine", scifi: "The crew transformed by magic" },
      { ancient: "The herb moly", scifi: "A means of resisting the spell" },
      { ancient: "Circe's island", scifi: "The sorceress's cosmic domain" },
    ],
    dna: [
      { myth: "Circe", mythSlug: "circe", ancientText: "Homer — Odyssey Book 10", sourceSlug: "homer-odyssey" },
    ],
    confidence: "high",
    keywords: ["circe", "sorceress", "magic", "transformation", "swine", "moly"],
  },
  {
    id: 17,
    slug: "lost-in-the-labyrinth",
    englishTitle: "Lost in the Labyrinth",
    frenchTitle: "Le labyrinthe du Minotaure",
    classification: "direct",
    sourceCategories: ["greek"],
    sources: ["warsaw-survey"],
    myths: ["theseus", "ariadne", "minotaur", "minos"],
    characters: ["ulysses", "theseus", "ariadne", "minotaur", "minos"],
    summary:
      "Ulysses is trapped in a maze guarded by a monstrous beast, and must find his way out with the help of a guiding thread.",
    ancientStory:
      "Theseus enters the Labyrinth built by Daedalus for King Minos of Crete to slay the Minotaur, a half-man half-bull monster. Ariadne gives him a thread to retrace his steps and escape the maze.",
    adaptation:
      "A direct adaptation of the Theseus and the Minotaur myth: the Labyrinth becomes a futuristic maze, the Minotaur a monstrous guardian, and Ariadne's thread a means of navigation.",
    motifs: ["the labyrinth", "the monstrous guardian", "the guiding thread"],
    comparisons: [
      { ancient: "The Cretan Labyrinth", scifi: "A futuristic maze" },
      { ancient: "The Minotaur", scifi: "A monstrous guardian of the maze" },
      { ancient: "Ariadne's thread", scifi: "A means of finding the way out" },
    ],
    dna: [
      { myth: "Theseus & the Minotaur", mythSlug: "minotaur", ancientText: "Greek mythology", sourceSlug: "warsaw-survey" },
      { myth: "Ariadne", mythSlug: "ariadne", ancientText: "Greek mythology", sourceSlug: "warsaw-survey" },
    ],
    confidence: "high",
    keywords: ["labyrinth", "minotaur", "theseus", "ariadne", "minos", "maze", "thread"],
  },
  {
    id: 18,
    slug: "at-the-heart-of-the-universe",
    englishTitle: "At the Heart of the Universe",
    frenchTitle: "Atlas",
    classification: "direct",
    sourceCategories: ["greek"],
    sources: ["warsaw-survey"],
    myths: ["atlas"],
    characters: ["ulysses", "atlas"],
    summary:
      "Ulysses meets a titanic figure who bears an immense burden at the centre of everything, holding the universe in place.",
    ancientStory:
      "Atlas, a Titan punished after the war against the Olympians, is condemned to hold up the sky (or the heavens) at the western edge of the world for eternity.",
    adaptation:
      "The series adapts Atlas directly but enlarges his burden from the sky to the entire universe, making him a cosmic pillar at the heart of creation.",
    motifs: ["the bearer of the heavens", "the impossible burden", "the pillar of the cosmos"],
    comparisons: [
      { ancient: "Atlas holds up the sky", scifi: "Atlas supports the entire universe" },
      { ancient: "The edge of the world", scifi: "The heart of the cosmos" },
    ],
    dna: [
      { myth: "Atlas", mythSlug: "atlas", ancientText: "Greek mythology", sourceSlug: "warsaw-survey" },
    ],
    confidence: "high",
    keywords: ["atlas", "titan", "burden", "heavens", "universe", "pillar"],
  },
  {
    id: 19,
    slug: "the-hidden-truth",
    englishTitle: "The Hidden Truth",
    frenchTitle: "Nérée ou la vérité engloutie",
    classification: "hybrid",
    sourceCategories: ["greek", "roman"],
    sources: ["ovid-metamorphoses", "warsaw-survey"],
    myths: ["galatea", "nereus"],
    characters: ["ulysses", "nereus", "galatea"],
    summary:
      "A truth lies drowned in the depths, guarded by an old sea-figure who knows all things, and touched by a story of love and transformation.",
    ancientStory:
      "Nereus, the truthful 'Old Man of the Sea', knows all things and must be wrestled for answers. Galatea, a sea nymph, features in Ovid's tale of love and jealousy involving the shepherd Acis and the Cyclops Polyphemus.",
    adaptation:
      "The episode fuses Nereus, the sea-god of hidden truth, with the Galatea love myth from Ovid, building a story about a truth 'swallowed' by the sea (here, the cosmos).",
    motifs: ["the truthful sea-god", "hidden truth", "love and transformation"],
    comparisons: [
      { ancient: "Nereus, keeper of truth", scifi: "A cosmic keeper of hidden truth" },
      { ancient: "Galatea's story", scifi: "A submerged tale of love" },
    ],
    dna: [
      { myth: "Nereus", mythSlug: "nereus", ancientText: "Greek mythology", sourceSlug: "warsaw-survey" },
      { myth: "Galatea", mythSlug: "galatea", ancientText: "Ovid — Metamorphoses", sourceSlug: "ovid-metamorphoses" },
    ],
    confidence: "probable",
    keywords: ["nereus", "galatea", "sea", "truth", "ovid", "metamorphoses"],
  },
  {
    id: 20,
    slug: "the-magician-in-black",
    englishTitle: "The Magician in Black",
    frenchTitle: "Le magicien noir",
    classification: "motif",
    sourceCategories: ["odyssey"],
    sources: ["homer-odyssey", "warsaw-survey"],
    myths: [],
    characters: ["ulysses"],
    summary:
      "A dark magician sets snares for Ulysses, echoing the recurring theme of the cunning trap and the deceiver.",
    ancientStory:
      "The Odyssey is full of deceptive figures and traps, and Odysseus himself is 'polytropos' — the man of many turns and tricks. The 'hunting'/trapping motif recurs without a single named source here.",
    adaptation:
      "Rather than adapting a specific myth, the episode uses the general Homeric motif of the deceiver and the trap, personified as a dark magician.",
    motifs: ["the deceiver", "the trap", "cunning versus cunning"],
    comparisons: [
      { ancient: "Deceptive figures of the Odyssey", scifi: "A dark magician who lays traps" },
    ],
    dna: [
      { myth: "Deception / trap motif", ancientText: "Homer — Odyssey (recurring)", sourceSlug: "homer-odyssey" },
    ],
    confidence: "possible",
    uncertaintyNote:
      "This episode reflects a general motif of deception rather than a specific ancient source.",
    keywords: ["magician", "black", "trap", "deception", "cunning"],
  },
  {
    id: 21,
    slug: "rebellion-on-lemnos",
    englishTitle: "Rebellion on Lemnos",
    frenchTitle: "Les révoltées de Lemnos",
    classification: "hybrid",
    sourceCategories: ["greek"],
    sources: ["apollonius-argonautica", "warsaw-survey"],
    myths: ["hypsipyle", "amazons"],
    characters: ["ulysses", "hypsipyle"],
    summary:
      "Ulysses reaches a world ruled entirely by women who have risen against the men, echoing the myth of the women of Lemnos.",
    ancientStory:
      "In the Argonautica, the women of Lemnos, led by Hypsipyle, have killed the island's men and rule alone before the Argonauts arrive. The theme overlaps with the warrior women of the Amazon tradition.",
    adaptation:
      "The episode adapts the Lemnian women's revolt (from the Argonautica) and blends it with Amazon imagery, producing a world of rebel women that Ulysses must navigate.",
    motifs: ["the women's revolt", "a world without men", "warrior women"],
    comparisons: [
      { ancient: "The women of Lemnos", scifi: "A rebel world of women" },
      { ancient: "Hypsipyle's rule", scifi: "A female-led society in space" },
    ],
    dna: [
      { myth: "Hypsipyle & the Lemnian women", mythSlug: "hypsipyle", ancientText: "Apollonius — Argonautica", sourceSlug: "apollonius-argonautica" },
      { myth: "Amazons", mythSlug: "amazons", ancientText: "Greek mythology", sourceSlug: "warsaw-survey" },
    ],
    confidence: "high",
    keywords: ["lemnos", "hypsipyle", "amazons", "women", "rebellion", "argonauts"],
  },
  {
    id: 22,
    slug: "the-city-of-cortex",
    englishTitle: "The City of Cortex",
    frenchTitle: "La cité de Cortex",
    classification: "original",
    sourceCategories: ["original"],
    sources: ["warsaw-survey"],
    myths: [],
    characters: ["ulysses"],
    summary:
      "Ulysses reaches a strange city ruled by a controlling intelligence, a story without a clearly identified ancient source.",
    ancientStory:
      "No specific ancient myth has been reliably identified for this episode. Its themes of a controlling city or machine are largely science-fiction inventions.",
    adaptation:
      "This appears to be an original science-fiction episode with no established ancient source, though it echoes broad ideas about tyranny and control.",
    motifs: ["the controlling intelligence", "the city as trap", "tyranny"],
    comparisons: [
      { ancient: "No specific ancient source", scifi: "A city ruled by a controlling mind" },
    ],
    dna: [
      { myth: "No specific source identified", ancientText: "Original science fiction" },
    ],
    confidence: "uncertain",
    uncertaintyNote:
      "No specific ancient source has been identified. This episode is best classified as original.",
    keywords: ["cortex", "city", "control", "original", "tyranny"],
  },
  {
    id: 23,
    slug: "calypso",
    englishTitle: "Calypso",
    frenchTitle: "Calypso",
    classification: "hybrid",
    sourceCategories: ["odyssey", "greek"],
    sources: ["homer-odyssey", "warsaw-survey"],
    myths: ["calypso", "amazons"],
    characters: ["ulysses", "calypso"],
    summary:
      "A nymph offers Ulysses comfort and a life free of hardship, tempting him to abandon the journey home.",
    ancientStory:
      "In Odyssey Book 5, the nymph Calypso keeps Odysseus on her island of Ogygia for seven years, offering him immortality if he stays. He refuses, longing for home, and the gods finally compel her to release him.",
    adaptation:
      "The Calypso myth of the seductive delay is adapted directly, with Amazon-tradition imagery blended in. Ulysses, like Odysseus, must resist the temptation to abandon his quest for home.",
    motifs: ["the seductive delay", "the offer of comfort", "the pull of home"],
    comparisons: [
      { ancient: "Calypso's island", scifi: "A world of comfort and delay" },
      { ancient: "Offer of immortality", scifi: "The temptation to abandon the journey" },
    ],
    dna: [
      { myth: "Calypso", mythSlug: "calypso", ancientText: "Homer — Odyssey Book 5", sourceSlug: "homer-odyssey" },
    ],
    confidence: "high",
    keywords: ["calypso", "nymph", "delay", "amazons", "ogygia", "temptation"],
  },
  {
    id: 24,
    slug: "strange-meeting",
    englishTitle: "Strange Meeting",
    frenchTitle: "Ulysse rencontre Ulysse",
    classification: "direct",
    sourceCategories: ["odyssey"],
    sources: ["homer-odyssey", "warsaw-survey"],
    myths: [],
    characters: ["ulysses", "penelope", "telemachus"],
    summary:
      "Ulysses confronts a version of himself, echoing the theme of identity, recognition and return that dominates the end of the Odyssey.",
    ancientStory:
      "The later books of the Odyssey (16–24) turn on identity and recognition: Odysseus returns to Ithaca in disguise, is recognised in stages by his son, his old nurse, his dog and finally Penelope, and reclaims his place.",
    adaptation:
      "The episode literalises the Odyssey's theme of identity and self-recognition by having Ulysses meet 'Ulysses', dramatising the question of who the returning hero truly is.",
    motifs: ["identity", "recognition", "the return", "the double"],
    comparisons: [
      { ancient: "Odysseus in disguise", scifi: "Ulysses meeting his own image" },
      { ancient: "Recognition at Ithaca", scifi: "A confrontation with the self" },
    ],
    dna: [
      { myth: "Return & recognition", ancientText: "Homer — Odyssey Books 16–24", sourceSlug: "homer-odyssey" },
    ],
    confidence: "probable",
    keywords: ["identity", "recognition", "return", "ithaca", "double", "penelope"],
  },
  {
    id: 25,
    slug: "the-lotus-eaters",
    englishTitle: "The Lotus Eaters",
    frenchTitle: "Les Lotophages",
    classification: "direct",
    sourceCategories: ["odyssey"],
    sources: ["homer-odyssey", "warsaw-survey"],
    myths: ["lotus-eaters"],
    characters: ["ulysses"],
    summary:
      "The crew tastes a substance that steals their memory and their will to continue, threatening to end the journey home for good.",
    ancientStory:
      "In Odyssey Book 9, Odysseus' scouts eat the lotus among the Lotus-Eaters and lose all desire to return home; Odysseus must drag them back to the ship and bind them to prevent the loss of the whole crew.",
    adaptation:
      "A direct adaptation of the Lotus-Eaters, keeping the central danger — a substance that erases the longing for home — and staging it as a cosmic temptation.",
    motifs: ["forgetfulness", "the lure to stay", "loss of purpose"],
    comparisons: [
      { ancient: "The lotus fruit", scifi: "A memory-stealing substance" },
      { ancient: "Losing the will to return", scifi: "Abandoning the journey home" },
    ],
    dna: [
      { myth: "Lotus-Eaters", mythSlug: "lotus-eaters", ancientText: "Homer — Odyssey Book 9", sourceSlug: "homer-odyssey" },
    ],
    confidence: "high",
    keywords: ["lotus", "lotophages", "forgetfulness", "memory", "temptation"],
  },
  {
    id: 26,
    slug: "the-kingdom-of-hades",
    englishTitle: "The Kingdom of Hades",
    frenchTitle: "Le royaume d'Hadès",
    classification: "hybrid",
    sourceCategories: ["odyssey", "greek"],
    sources: ["homer-odyssey", "ovid-metamorphoses", "virgil-georgics", "warsaw-survey"],
    myths: ["hades", "orpheus", "eurydice", "cerberus"],
    characters: ["ulysses", "hades", "orpheus", "eurydice"],
    summary:
      "The final journey brings Ulysses to the Kingdom of Hades itself, where he must confront the realm of the dead to win back what he has lost and finally reach Earth.",
    ancientStory:
      "Odysseus consults the dead at the edge of the Underworld (Book 11). Hades rules the realm of the dead, guarded by the hound Cerberus. Orpheus descends to reclaim Eurydice by the power of his music but loses her when he looks back — told by Ovid (Metamorphoses) and Virgil (Georgics).",
    adaptation:
      "The climactic episode fuses Odysseus' Underworld journey with the Orpheus and Eurydice myth of descent and loss, creating a cosmic Kingdom of Hades that Ulysses must pass through to end the gods' punishment and return home.",
    motifs: ["descent to the Underworld", "the return of the dead", "the backward glance", "the final trial"],
    comparisons: [
      { ancient: "Hades, realm of the dead", scifi: "A cosmic Kingdom of Hades" },
      { ancient: "Orpheus' descent", scifi: "Ulysses' journey into death" },
      { ancient: "Cerberus, the guardian hound", scifi: "The guardian of the cosmic Underworld" },
      { ancient: "The road home from the dead", scifi: "The path back to Earth" },
    ],
    dna: [
      { myth: "Hades / the Underworld", mythSlug: "hades", ancientText: "Homer — Odyssey Book 11", sourceSlug: "homer-odyssey" },
      { myth: "Orpheus & Eurydice", mythSlug: "orpheus", ancientText: "Ovid — Metamorphoses", sourceSlug: "ovid-metamorphoses" },
      { myth: "Orpheus & Eurydice", mythSlug: "eurydice", ancientText: "Virgil — Georgics", sourceSlug: "virgil-georgics" },
    ],
    confidence: "high",
    keywords: ["hades", "underworld", "orpheus", "eurydice", "cerberus", "return", "earth"],
  },
];
