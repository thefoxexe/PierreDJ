import Image from "next/image";
import { services } from "@/content/services";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { Icon, Icons } from "./icons";

export function Services() {
  return (
    <section id="prestations" className="relative overflow-hidden bg-ink py-20 text-cream sm:py-28">
      <div className="absolute inset-0 -z-0 bg-noise opacity-50" aria-hidden />
      <div
        className="absolute -right-40 top-0 -z-0 h-96 w-96 rounded-full bg-accent/20 blur-[120px]"
        aria-hidden
      />

      <div className="container-page relative">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-gold-bright">
            <span className="h-px w-8 bg-gold" />
            {services.eyebrow}
          </p>
          <h2 className="section-title text-cream">{services.title}</h2>
          <p className="mt-4 text-cream/70">{services.subtitle}</p>
        </Reveal>

        <RevealGroup
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {services.items.map((s) => (
            <RevealItem key={s.slug}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-gold/40 hover:bg-white/[0.06]">
                {/* Image de la prestation si fournie, sinon icone */}
                {s.image ? (
                  <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold-bright transition-colors group-hover:bg-gold/25">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </div>
                )}

                <h3 className="font-display text-xl font-semibold text-cream">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/65">
                  {s.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  {s.price ? (
                    <span className="text-sm font-semibold text-gold-bright">{s.price}</span>
                  ) : (
                    <span className="text-sm font-medium text-cream/50">Sur devis</span>
                  )}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-bright transition-all group-hover:gap-2.5"
                    aria-label={`Demander un devis pour : ${s.title}`}
                  >
                    Devis
                    <Icons.arrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
