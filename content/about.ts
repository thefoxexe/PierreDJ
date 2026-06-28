/**
 * ============================================================================
 *  SECTION "A PROPOS"
 * ============================================================================
 *  Presentation de Pierre Monnet : experience, vision, valeurs.
 *  Textes [PLACEHOLDER] a remplacer par les contenus definitifs.
 * ============================================================================
 */

export const about = {
  eyebrow: "A propos",
  title: "Pierre Monnet, votre DJ pour des moments d'exception",

  /** Paragraphes de presentation [PLACEHOLDER] */
  paragraphs: [
    "Passionne de musique depuis toujours, Pierre Monnet accompagne particuliers, entreprises et collectivites dans la reussite de leurs evenements. De l'intimite d'un mariage a l'energie d'une fete de village, il cree des ambiances sur mesure qui rassemblent et font vibrer chaque public.",
    "Son approche : ecouter, comprendre vos envies, puis composer une soiree qui vous ressemble. Materiel professionnel, lecture de la piste de danse et sens du detail garantissent une experience fluide, elegante et memorable, du premier au dernier morceau.",
  ],

  /** Chiffres cles [PLACEHOLDER] : adapter aux valeurs reelles */
  stats: [
    { value: "10+", label: "Annees d'experience" },
    { value: "500+", label: "Evenements animes" },
    { value: "100%", label: "Sur mesure" },
    { value: "5/5", label: "Satisfaction clients" },
  ],

  /** Valeurs / raisons de le choisir */
  values: [
    {
      title: "Sur mesure",
      description:
        "Chaque evenement est unique. La programmation musicale et l'animation sont adaptees a votre public et a vos envies.",
    },
    {
      title: "Materiel professionnel",
      description:
        "Sonorisation et eclairage haut de gamme pour un rendu impeccable, quelle que soit la taille du lieu.",
    },
    {
      title: "Fiabilite",
      description:
        "Ponctualite, preparation rigoureuse et presence rassurante, du brief initial jusqu'au dernier morceau.",
    },
    {
      title: "Energie & elegance",
      description:
        "L'art de faire danser tout en gardant une ambiance raffinee, a l'image de votre evenement.",
    },
  ],
} as const;

export type About = typeof about;
