/**
 * ============================================================================
 *  AVIS CLIENTS
 * ============================================================================
 *  Temoignages affiches dans la section "Avis".
 *  [PLACEHOLDER] : avis fictifs de demonstration, a remplacer par de vrais
 *  temoignages (et eventuellement des avis Google) lorsqu'ils seront fournis.
 *
 *  - rating : note de 1 a 5
 *  - event : type d'evenement (affiche sous le nom)
 * ============================================================================
 */

export type Testimonial = {
  name: string;
  event: string;
  rating: number;
  quote: string;
};

export const testimonials = {
  eyebrow: "Avis clients",
  title: "Ils nous ont fait confiance",
  subtitle:
    "Les retours de nos clients sont notre meilleure carte de visite. (Temoignages de demonstration en attente des avis definitifs.)",

  /** Note moyenne affichee [PLACEHOLDER] */
  averageRating: 5,
  reviewCount: 48,

  items: [
    {
      name: "Camille & Lucas",
      event: "Mariage",
      rating: 5,
      quote:
        "Pierre a su lire l'ambiance toute la soiree. La piste de danse n'a pas desempli ! Un professionnalisme et une gentillesse rares.",
    },
    {
      name: "Sophie M.",
      event: "Anniversaire 40 ans",
      rating: 5,
      quote:
        "Une soiree parfaitement orchestree. Tous nos invites, de 7 a 77 ans, ont danse. Merci pour cette energie incroyable.",
    },
    {
      name: "Entreprise Helvetia Events",
      event: "Soiree de gala",
      rating: 5,
      quote:
        "Tres professionnel, ponctuel et a l'ecoute de nos contraintes. Notre soiree d'entreprise a ete un vrai succes.",
    },
    {
      name: "Commune de Saint-Pierre",
      event: "Fete de village",
      rating: 5,
      quote:
        "Un son impeccable et une animation qui a rassemble toutes les generations. Nous referons appel a lui sans hesiter.",
    },
    {
      name: "Julie & Thomas",
      event: "Mariage",
      rating: 5,
      quote:
        "Du premier rendez-vous au dernier morceau, tout etait fluide et elegant. Exactement la soiree dont nous revions.",
    },
    {
      name: "Marc D.",
      event: "Soiree privee",
      rating: 5,
      quote:
        "Reactif, de bon conseil et un vrai sens de la fete. Mes invites en parlent encore !",
    },
  ] satisfies Testimonial[],
} as const;
