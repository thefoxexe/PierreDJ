/**
 * ============================================================================
 *  FAQ
 * ============================================================================
 *  Questions frequentes. Facilement modifiable : ajoutez, retirez ou
 *  reformulez les questions/reponses ci-dessous.
 *  Les reponses [PLACEHOLDER] sont a affiner selon les informations reelles.
 * ============================================================================
 */

export type FaqItem = {
  question: string;
  answer: string;
};

export const faq = {
  eyebrow: "FAQ",
  title: "Vos questions, nos reponses",
  subtitle: "Tout ce qu'il faut savoir avant de reserver votre prestation.",

  items: [
    {
      question: "Combien de temps a l'avance faut-il reserver ?",
      answer:
        "Il est conseille de reserver le plus tot possible, idealement 6 a 12 mois a l'avance pour les mariages et les dates tres demandees. N'hesitez pas a demander un devis : si la date est encore libre, tout reste possible.",
    },
    {
      question: "Quel materiel est fourni ?",
      answer:
        "Sonorisation et eclairage professionnels adaptes a la taille de votre evenement sont inclus. Le materiel precis est defini ensemble en fonction du lieu et du nombre d'invites.",
    },
    {
      question: "Vous deplacez-vous ?",
      answer:
        "Oui, les deplacements sont assures dans toute la Suisse romande, et au-dela sur demande. Les frais eventuels sont indiques clairement dans le devis.",
    },
    {
      question: "Quels sont vos tarifs ?",
      answer:
        "Chaque evenement etant unique, le tarif depend de la duree, du lieu et des besoins techniques. Demandez un devis gratuit et sans engagement pour une proposition personnalisee.",
    },
    {
      question: "Comment se passe l'installation ?",
      answer:
        "L'installation et les tests sont realises en amont de l'evenement afin que tout soit pret bien avant l'arrivee de vos invites. Le demontage est egalement pris en charge.",
    },
    {
      question: "Peut-on choisir la musique ?",
      answer:
        "Absolument. Vos envies et votre playlist sont au coeur de la preparation. Pierre vous conseille et s'adapte en temps reel a l'ambiance de la soiree.",
    },
    {
      question: "Proposez-vous une animation micro ?",
      answer:
        "Oui, l'animation au micro est possible (annonces, transitions, moments cles) avec le ton qui correspond a votre evenement, du plus solennel au plus festif.",
    },
  ] satisfies FaqItem[],
} as const;
