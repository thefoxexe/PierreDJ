/**
 * ============================================================================
 *  CONFIGURATION GLOBALE DU SITE
 * ============================================================================
 *  Ce fichier centralise toutes les informations generales du site.
 *  Pour mettre a jour le site, il suffit de modifier les valeurs ci-dessous :
 *  aucune connaissance technique avancee n'est necessaire.
 *
 *  Les champs marques [PLACEHOLDER] contiennent des contenus temporaires
 *  a remplacer lorsque les elements definitifs seront fournis.
 * ============================================================================
 */

export type SiteConfig = {
  name: string;
  role: string;
  tagline: string;
  url: string;
  contact: {
    phone: string;
    phoneIntl: string;
    email: string;
    whatsapp: string;
    area: string;
    city: string;
    region: string;
    country: string;
  };
  social: {
    instagram: string;
    facebook: string;
    youtube: string;
    tiktok: string;
  };
  nav: { label: string; href: string }[];
};

export const site: SiteConfig = {
  /** Nom affiche partout sur le site */
  name: "Pierre Monnet",
  /** Slogan / metier */
  role: "DJ & Animateur evenementiel",
  /** Phrase d'accroche principale (hero) */
  tagline: "L'energie qui transforme vos evenements en souvenirs inoubliables",

  /** URL de production (a adapter apres mise en ligne, sert au SEO) */
  url: "https://www.pierremonnet-dj.ch",

  /** Coordonnees de contact */
  contact: {
    phone: "079 841 23 18",
    /** Version internationale pour les liens d'appel (Suisse) */
    phoneIntl: "+41798412318",
    /** [PLACEHOLDER] Email a communiquer ulterieurement */
    email: "contact@pierremonnet-dj.ch",
    /** [PLACEHOLDER] Numero WhatsApp (laisser vide pour masquer le bouton) */
    whatsapp: "",
    /** Zone d'intervention principale (SEO local) */
    area: "Suisse romande",
    /** [PLACEHOLDER] Adresse / ville de rattachement (SEO local) */
    city: "Lausanne",
    region: "Vaud",
    country: "CH",
  },

  /** Reseaux sociaux ([PLACEHOLDER] : laisser vide pour masquer l'icone) */
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
    tiktok: "",
  },

  /** Navigation principale (ordre = ordre d'affichage) */
  nav: [
    { label: "Accueil", href: "#accueil" },
    { label: "A propos", href: "#a-propos" },
    { label: "Prestations", href: "#prestations" },
    { label: "Galerie", href: "#galerie" },
    { label: "Avis", href: "#avis" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};

export type Site = SiteConfig;
