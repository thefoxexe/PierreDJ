/**
 * ============================================================================
 *  GALERIE
 * ============================================================================
 *  Galerie administrable de photos / videos / contenus Instagram.
 *
 *  Pour ajouter un media :
 *   1. Placez l'image dans le dossier /public/images (ex: /public/images/01.jpg)
 *   2. Ajoutez une entree ci-dessous avec son chemin et un texte alternatif.
 *
 *  Types supportes :
 *   - type: "image"  -> src = chemin de l'image
 *   - type: "video"  -> src = chemin/URL de la video (mp4 ou embed)
 *   - type: "instagram" -> src = URL du post/reel Instagram
 *
 *  TANT QU'AUCUNE PHOTO N'EST FOURNIE, la galerie affiche des emplacements
 *  visuels "placeholder" generes automatiquement (voir le composant Gallery).
 *  Laissez le tableau `items` vide pour afficher ces emplacements de demo.
 * ============================================================================
 */

export type GalleryItem = {
  type: "image" | "video" | "instagram";
  src: string;
  alt: string;
  /** Mise en avant (occupe une plus grande tuile dans la grille) */
  large?: boolean;
};

export const gallery: {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: GalleryItem[];
  placeholderCount: number;
} = {
  eyebrow: "Galerie",
  title: "Des soirees qui marquent les esprits",
  subtitle:
    "Quelques instants captures lors des evenements. (Photos et videos definitives a venir.)",

  /**
   * [PLACEHOLDER] Laissez ce tableau vide pour afficher des emplacements de
   * demonstration. Remplissez-le des que les medias seront disponibles.
   *
   * Exemple :
   * { type: "image", src: "/images/mariage-01.jpg", alt: "Premiere danse", large: true },
   */
  items: [],

  /** Nombre d'emplacements de demonstration affiches quand items est vide */
  placeholderCount: 6,
};
