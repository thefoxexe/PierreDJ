import { site } from "@/content/site";
import { Icons } from "./icons";

const socialIcons: Record<string, keyof typeof Icons> = {
  instagram: "instagram",
  facebook: "facebook",
  youtube: "youtube",
  tiktok: "tiktok",
};

export function Footer() {
  const year = new Date().getFullYear();
  const socials = Object.entries(site.social).filter(([, url]) => Boolean(url));

  return (
    <footer className="bg-ink text-cream/70">
      <div className="container-page py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Marque */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 font-display text-lg font-bold text-cream">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold text-sm font-bold text-ink">
                PM
              </span>
              {site.name}
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              {site.role} en {site.contact.area}. Mariages, soirees privees, evenements
              d&apos;entreprise et manifestations publiques.
            </p>

            {socials.length > 0 && (
              <div className="mt-5 flex gap-2">
                {socials.map(([key, url]) => {
                  const Icon = Icons[socialIcons[key]];
                  return (
                    <a
                      key={key}
                      href={url as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={key}
                      className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav aria-label="Pied de page">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-cream">
              Navigation
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-gold">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-cream">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${site.contact.phoneIntl}`}
                  className="flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <Icons.phone className="h-4 w-4 shrink-0" />
                  {site.contact.phone}
                </a>
              </li>
              {site.contact.email && (
                <li>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="flex items-center gap-2 transition-colors hover:text-gold"
                  >
                    <Icons.mail className="h-4 w-4 shrink-0" />
                    {site.contact.email}
                  </a>
                </li>
              )}
              <li className="flex items-center gap-2">
                <Icons.pin className="h-4 w-4 shrink-0" />
                {site.contact.area}
              </li>
            </ul>
            <a href="#contact" className="btn-primary mt-5 px-5 py-2.5 text-xs">
              Demander un devis
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <p>
            &copy; {year} {site.name}. Tous droits reserves.
          </p>
          <p className="text-cream/50">{site.role}</p>
        </div>
      </div>
    </footer>
  );
}
