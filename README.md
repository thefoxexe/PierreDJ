# Site web — Pierre Monnet, DJ & Animateur événementiel

Site vitrine moderne, rapide et optimisé SEO présentant les prestations de
**Pierre Monnet**, DJ pour mariages, soirées privées, événements d'entreprise
et manifestations publiques en Suisse romande.

## Stack technique

- **[Next.js 14](https://nextjs.org/)** (App Router) — performance, SEO, rendu statique
- **TypeScript** — code robuste et maintenable
- **[Tailwind CSS](https://tailwindcss.com/)** — design system cohérent
- **[Framer Motion](https://www.framer.com/motion/)** — animations fluides et discrètes

Choisie pour être moderne, pérenne, performante et **simple à déployer**
(notamment sur [Vercel](https://vercel.com/), en un clic).

## Démarrage

```bash
npm install      # installer les dépendances
npm run dev      # serveur de développement -> http://localhost:3000
npm run build    # build de production
npm run start    # démarrer le build de production
npm run lint     # vérifier le code
```

## ✏️ Modifier le contenu (sans coder)

**Tout le contenu éditable est centralisé dans le dossier [`/content`](./content).**
Il n'y a (presque) aucun texte codé en dur dans les composants. Pour mettre à
jour le site, modifiez simplement ces fichiers :

| Fichier | Contenu |
| --- | --- |
| `content/site.ts` | Nom, téléphone, email, réseaux sociaux, menu de navigation |
| `content/home.ts` | Accroches de la page d'accueil, image/vidéo du hero |
| `content/about.ts` | Texte « À propos », chiffres clés, valeurs |
| `content/services.ts` | Liste des prestations (titre, description, image, tarif) |
| `content/gallery.ts` | Photos / vidéos / contenus Instagram de la galerie |
| `content/testimonials.ts` | Avis clients et note moyenne |
| `content/faq.ts` | Questions / réponses de la FAQ |

> Les contenus temporaires sont marqués **`[PLACEHOLDER]`** dans les fichiers.
> Recherchez ce mot-clé pour repérer tout ce qui reste à remplacer par les
> éléments définitifs (photos, logo, vidéos, textes, email, etc.).

### Ajouter des photos

1. Déposez vos images dans `public/images/`.
2. Référencez-les depuis `/content` (ex. `content/gallery.ts`,
   `content/services.ts`, `content/home.ts`) avec un chemin du type
   `/images/ma-photo.jpg`.

Les images sont automatiquement optimisées (formats AVIF/WebP, tailles
responsives) par Next.js.

### Hero (image ou vidéo d'ambiance)

Dans `content/home.ts`, renseignez `hero.media.image` **ou** `hero.media.video`.
Tant que les deux sont vides, un fond animé premium de démonstration s'affiche.

## 📩 Formulaire de contact / devis

Le formulaire envoie les demandes vers `POST /api/contact`
(`src/app/api/contact/route.ts`). Par défaut, les demandes sont **validées et
journalisées** dans les logs du serveur (aucun email envoyé).

**Pour activer l'envoi d'email** (quand l'adresse sera connue) :

1. Créez un compte sur un service d'email transactionnel (ex.
   [Resend](https://resend.com)).
2. Ajoutez les variables d'environnement `RESEND_API_KEY` et `CONTACT_EMAIL`.
3. Décommentez la section « ENVOI D'EMAIL » dans
   `src/app/api/contact/route.ts`.

Le formulaire inclut une protection anti-spam (honeypot) et une validation
côté serveur.

## 🚀 Déploiement

Le projet est prêt pour **Vercel** :

1. Importez le dépôt sur [vercel.com](https://vercel.com/new).
2. Vercel détecte Next.js automatiquement — aucun réglage nécessaire.
3. (Optionnel) Ajoutez les variables d'environnement pour l'email.
4. Déployez.

Pensez à mettre à jour `site.url` dans `content/site.ts` avec l'URL finale
(important pour le SEO, le sitemap et les balises Open Graph).

## 🔍 SEO & performance

- Métadonnées complètes + **Open Graph** (image générée dynamiquement)
- **Données structurées** Schema.org (`LocalBusiness` / `MusicGroup` + `FAQPage`)
- `sitemap.xml`, `robots.txt`, `manifest` et **favicon** générés automatiquement
- Hiérarchie de titres H1 → H3 propre, HTML sémantique, attributs ARIA
- Accessibilité : navigation clavier, lien d'évitement, focus visibles,
  respect de `prefers-reduced-motion`
- Mobile-first et entièrement responsive

## Structure du projet

```
content/            → Contenu éditable (textes, prestations, avis, FAQ…)
public/images/      → Photos du site (à fournir)
src/
  app/              → Pages, layout, SEO (sitemap, robots, OG image), API
  components/       → Composants UI (Hero, Services, Galerie, FAQ, Contact…)
```
