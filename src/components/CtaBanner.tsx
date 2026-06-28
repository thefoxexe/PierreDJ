import { home } from "@/content/home";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Marquee } from "./Marquee";
import { Icons } from "./icons";

export function CtaBanner() {
  const { finalCta } = home;
  const marqueeWords = [
    "Demander un devis",
    "Devis gratuit",
    "Sans engagement",
    "Reservez votre date",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-volt via-flare to-volt text-white">
      {/* Marquee haut */}
      <div className="border-b border-white/15 py-4">
        <Marquee
          duration="28s"
          separator={<span className="text-white/60">✦</span>}
          items={marqueeWords.map((w, i) => (
            <span key={i} className="font-display text-xl font-extrabold uppercase tracking-tight">
              {w}
            </span>
          ))}
        />
      </div>

      <div className="container-page py-20 text-center sm:py-28">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">
            {finalCta.eyebrow}
          </p>
          <h2 className="display-xl mx-auto mt-5 max-w-4xl text-4xl sm:text-6xl lg:text-7xl">
            {finalCta.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-white/85">{finalCta.subtitle}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={finalCta.primaryCta.href} className="btn-solid-light">
              {finalCta.primaryCta.label}
              <Icons.arrowRight className="h-4 w-4" />
            </a>
            <a href={`tel:${site.contact.phoneIntl}`} className="btn-outline border-white/40 text-white hover:border-white">
              <Icons.phone className="h-4 w-4" />
              {site.contact.phone}
            </a>
          </div>
        </Reveal>
      </div>

      {/* Marquee bas (inverse) */}
      <div className="border-t border-white/15 py-4">
        <Marquee
          duration="28s"
          reverse
          separator={<span className="text-white/60">✦</span>}
          items={marqueeWords.map((w, i) => (
            <span key={i} className="font-display text-xl font-extrabold uppercase tracking-tight">
              {w}
            </span>
          ))}
        />
      </div>
    </section>
  );
}
