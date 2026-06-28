/**
 * ============================================================================
 *  PRESTATIONS
 * ============================================================================
 *  Liste des prestations proposees. Pour ajouter, modifier ou retirer une
 *  prestation, il suffit d'editer ce tableau.
 *
 *  Chaque prestation peut recevoir ulterieurement : image, tarif, details.
 *  - icon : nom d'icone (voir src/components/icons.tsx pour la liste)
 *  - image : [PLACEHOLDER] chemin vers une photo (ex: "/images/mariage.jpg")
 *  - price : [PLACEHOLDER] texte libre (ex: "Des CHF 800") ou vide
 * ============================================================================
 */

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  price?: string;
  featured?: boolean;
};

export const services = {
  eyebrow: "Prestations",
  title: "Des animations pour chaque occasion",
  subtitle:
    "Du mariage le plus elegant a la fete la plus endiablee, une prestation adaptee a votre evenement.",

  items: [
    {
      slug: "mariages",
      title: "Mariages",
      description:
        "De la ceremonie au bout de la nuit : ambiance cocktail, premiere danse et piste de danse enflammee, dans le respect de votre histoire.",
      icon: "heart",
      image: "",
      price: "",
      featured: true,
    },
    {
      slug: "anniversaires",
      title: "Anniversaires",
      description:
        "Une soiree a votre image pour celebrer toutes les generations, avec la bande-son qui fera danser vos invites.",
      icon: "cake",
      image: "",
      price: "",
    },
    {
      slug: "soirees-privees",
      title: "Soirees privees",
      description:
        "Une ambiance intime ou festive, parfaitement calibree pour vos invites et votre lieu.",
      icon: "sparkle",
      image: "",
      price: "",
    },
    {
      slug: "entreprises",
      title: "Evenements d'entreprise",
      description:
        "Soirees de gala, team building, lancements de produits : une image professionnelle et une ambiance maitrisee.",
      icon: "briefcase",
      image: "",
      price: "",
      featured: true,
    },
    {
      slug: "manifestations-publiques",
      title: "Manifestations publiques",
      description:
        "Fetes de village, galas et manifestations communales : un son puissant et une animation federatrice.",
      icon: "flag",
      image: "",
      price: "",
    },
    {
      slug: "bars-clubs",
      title: "Bars & Clubs",
      description:
        "Des sets energiques pour faire vibrer les pistes et fideliser votre clientele nocturne.",
      icon: "disc",
      image: "",
      price: "",
    },
    {
      slug: "festivals",
      title: "Festivals",
      description:
        "Une presence scenique et une lecture du public pour des prestations a la hauteur des grands rendez-vous.",
      icon: "music",
      image: "",
      price: "",
    },
    {
      slug: "sur-mesure",
      title: "Evenements sur mesure",
      description:
        "Un projet particulier ? Parlons-en : chaque demande recoit une proposition personnalisee.",
      icon: "wand",
      image: "",
      price: "",
      featured: true,
    },
  ] satisfies Service[],
} as const;
