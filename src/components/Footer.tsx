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
    <footer className="bg-night text-bone">
      {/* Bandeau "appel a l'action" geant */}
      <div className="container-page border-b border-bone/10 py-16 sm:py-20">
        <a href="#contact" className="group block">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-flare">
            On en parle ?
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
            <h2 className="display-xl text-5xl sm:text-7xl lg:text-8xl">
              Reservez<span className="text-gradient"> votre date</span>
            </h2>
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-gradient-to-br from-volt to-flare text-white transition-transform duration-300 group-hover:scale-110">
              <Icons.arrowRight className="h-7 w-7 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
            </span>
          </div>
        </a>
      </div>

      <div className="container-page py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-volt to-flare text-sm font-extrabold text-white">
                PM
              </span>
              <span className="font-display text-lg font-extrabold uppercase">{site.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-bone/60">
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
                      className="grid h-10 w-10 place-items-center rounded-full border border-bone/15 transition-colors hover:border-transparent hover:bg-gradient-to-br hover:from-volt hover:to-flare hover:text-white"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <nav aria-label="Pied de page">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-bone/50">Navigation</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="link-underline text-bone/75 hover:text-bone">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-bone/50">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`tel:${site.contact.phoneIntl}`} className="flex items-center gap-2 text-bone/75 hover:text-bone">
                  <Icons.phone className="h-4 w-4 shrink-0 text-flare" />
                  {site.contact.phone}
                </a>
              </li>
              {site.contact.email && (
                <li>
                  <a href={`mailto:${site.contact.email}`} className="flex items-center gap-2 text-bone/75 hover:text-bone">
                    <Icons.mail className="h-4 w-4 shrink-0 text-flare" />
                    {site.contact.email}
                  </a>
                </li>
              )}
              <li className="flex items-center gap-2 text-bone/75">
                <Icons.pin className="h-4 w-4 shrink-0 text-flare" />
                {site.contact.area}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-bone/10 pt-6 text-xs text-bone/45 sm:flex-row">
          <p>&copy; {year} {site.name}. Tous droits reserves.</p>
          <p className="uppercase tracking-wide">{site.role}</p>
        </div>
      </div>
    </footer>
  );
}
