import type { Source } from "./types";

export const sources: Source[] = [
  {
    slug: "homer-odyssey",
    author: "Homer",
    work: "The Odyssey",
    category: "odyssey",
    tradition: "Ancient Greek epic",
    description:
      "The foundational epic behind Ulysses 31. It recounts the ten-year homeward voyage of Odysseus after the Trojan War, through encounters with monsters, gods and enchantments. The series reimagines this sea journey as a voyage through space.",
    books: [
      { label: "Book 5", detail: "Calypso keeps Odysseus on Ogygia" },
      { label: "Book 9", detail: "The Cyclops Polyphemus and the Lotus-Eaters" },
      { label: "Book 10", detail: "Aeolus, the Laestrygonians and Circe" },
      { label: "Book 11", detail: "The Underworld, Tiresias and Sisyphus" },
      { label: "Book 12", detail: "The Sirens, Scylla and Charybdis" },
      { label: "Books 16–24", detail: "Ithaca, recognition and the return" },
    ],
    externalUrl: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0136",
  },
  {
    slug: "homeric-hymn-demeter",
    author: "Anonymous (Homeric Hymns)",
    work: "Homeric Hymn to Demeter",
    category: "greek",
    tradition: "Ancient Greek hymn",
    description:
      "An early hymn recounting the abduction of Persephone by Hades and the grief of her mother Demeter, whose mourning renders the earth barren — the founding myth of the seasons.",
    externalUrl: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0138",
  },
  {
    slug: "sophocles-oedipus",
    author: "Sophocles",
    work: "Oedipus Rex",
    category: "greek",
    tradition: "Ancient Greek tragedy",
    description:
      "Sophocles' tragedy of Oedipus, who answers the riddle of the Sphinx to save Thebes only to fulfil a terrible prophecy. The Sphinx's deadly riddle is the key motif drawn on by the series.",
    externalUrl: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0191",
  },
  {
    slug: "apollonius-argonautica",
    author: "Apollonius of Rhodes",
    work: "Argonautica",
    category: "greek",
    tradition: "Hellenistic Greek epic",
    description:
      "The epic of Jason and the Argonauts. It supplies the Harpies who torment Phineus, and the women of Lemnos led by Hypsipyle who have risen against the island's men.",
    externalUrl: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0227",
  },
  {
    slug: "ovid-metamorphoses",
    author: "Ovid",
    work: "Metamorphoses",
    category: "roman",
    tradition: "Roman poetry",
    description:
      "Ovid's great poem of transformations. It provides the tale of Galatea (with Acis and Polyphemus) and one of the two classical versions of Orpheus and Eurydice.",
    externalUrl: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.02.0028",
  },
  {
    slug: "virgil-georgics",
    author: "Virgil",
    work: "Georgics",
    category: "roman",
    tradition: "Roman poetry",
    description:
      "Virgil's poem on farming and rural life closes with the story of Orpheus and Eurydice — the singer's descent into the Underworld and the fatal backward glance that loses his wife forever.",
    externalUrl: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.02.0059",
  },
  {
    slug: "warsaw-survey",
    author: "Our Mythical Childhood",
    work: "Survey — University of Warsaw",
    category: "greek",
    tradition: "Modern scholarship",
    description:
      "The primary scholarly reference for this site. The Our Mythical Childhood project at the University of Warsaw catalogues how classical antiquity is received in children's and young-adult culture, including Ulysses 31. Where an interpretation comes from modern scholarship rather than the ancient text itself, it is flagged as such.",
    externalUrl: "https://www.omc.obta.al.uw.edu.pl/",
  },
];
