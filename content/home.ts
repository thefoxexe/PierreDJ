/**
 * ============================================================================
 *  TEXTES DE LA PAGE D'ACCUEIL (Hero + CTA final)
 * ============================================================================
 *  Centralise les accroches de la page d'accueil pour une modification simple.
 *  L'image / video d'ambiance du hero se configure via le champ `media`.
 * ============================================================================
 */

export const home = {
  hero: {
    badge: "DJ professionnel - Suisse romande",
    /** Titre principal (H1). Le segment entre ** ** est mis en valeur. */
    title: "Faites danser **vos plus beaux moments**",
    subtitle:
      "Mariages, soirees privees, evenements d'entreprise et fetes de village : Pierre Monnet cree des ambiances sur mesure, elegantes et inoubliables.",
    primaryCta: { label: "Demander un devis", href: "#contact" },
    secondaryCta: { label: "Me contacter", href: "#contact" },

    /**
     * [PLACEHOLDER] Media d'ambiance du hero.
     *  - Laissez `image` et `video` vides pour afficher le fond anime de demo.
     *  - image : chemin d'une photo plein ecran (ex: "/images/hero.jpg")
     *  - video : chemin d'une video mp4 en boucle (ex: "/videos/hero.mp4")
     *  - poster : image d'attente affichee pendant le chargement de la video
     */
    media: {
      image: "",
      video: "",
      poster: "",
    },

    /** Petits arguments de reassurance affiches sous le hero */
    highlights: [
      "Devis gratuit & sans engagement",
      "Materiel pro son & lumiere",
      "Deplacements en Suisse romande",
    ],
  },

  finalCta: {
    eyebrow: "Reservez votre date",
    title: "Pret a faire de votre evenement un moment inoubliable ?",
    subtitle:
      "Parlons de votre projet. Recevez une proposition personnalisee, gratuite et sans engagement.",
    primaryCta: { label: "Demander un devis", href: "#contact" },
    secondaryCta: { label: "Appeler maintenant", href: "tel:" },
  },
} as const;
