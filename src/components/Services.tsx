import Image from "next/image";
import { services } from "@/content/services";
import { RevealGroup, RevealItem } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Icon, Icons } from "./icons";

export function Services() {
  return (
    <section id="prestations" className="relative overflow-hidden bg-night py-20 text-bone sm:py-28">
      <div className="container-page relative">
        <SectionHeading
          index="02"
          label="Prestations"
          title={services.title}
          description={services.subtitle}
        />

        <RevealGroup
          className="mt-14 grid auto-rows-[minmax(180px,auto)] grid-cols-2 gap-3 lg:grid-cols-4"
          stagger={0.05}
        >
          {services.items.map((s, i) => {
            // Bento : la 1re prestation phare occupe une grande tuile,
            // les autres mises en avant occupent 2 colonnes.
            const big = i === 0;
            const wide = !big && s.featured;
            const span = big
              ? "col-span-2 row-span-2"
              : wide
                ? "col-span-2"
                : "col-span-1";

            return (
              <RevealItem key={s.slug} className={span}>
                <article
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 ${
                    s.featured
                      ? "bg-gradient-to-br from-volt to-flare text-white hover:shadow-[0_24px_60px_-18px_rgba(255,45,120,0.65)]"
                      : "border border-bone/12 bg-night-800 hover:border-bone/30 hover:shadow-[0_24px_60px_-22px_rgba(110,75,255,0.5)]"
                  }`}
                >
                  {/* Image optionnelle */}
                  {s.image && (
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width:768px) 50vw, 33vw"
                      className="absolute inset-0 -z-0 object-cover opacity-40 transition-transform duration-500 group-hover:scale-105"
                    />
                  )}

                  <div className="relative z-10 flex items-start justify-between">
                    <span
                      className={`font-display text-xs font-bold ${
                        s.featured ? "text-white/70" : "text-flare"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <Icon
                      name={s.icon}
                      className={`h-6 w-6 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-125 ${
                        s.featured ? "text-white/80" : "text-bone/40 group-hover:text-flare"
                      }`}
                    />
                  </div>

                  <div className="relative z-10 mt-6">
                    <h3
                      className={`font-display font-extrabold uppercase leading-none tracking-tight ${
                        big ? "text-3xl sm:text-5xl" : "text-2xl"
                      }`}
                    >
                      {s.title}
                    </h3>
                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        s.featured ? "text-white/80" : "text-bone/55"
                      } ${big ? "max-w-md" : ""}`}
                    >
                      {s.description}
                    </p>
                    <span
                      className={`mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide transition-all group-hover:gap-3 ${
                        s.featured ? "text-white" : "text-bone"
                      }`}
                    >
                      {s.price || "Sur devis"}
                      <Icons.arrowRight className="h-4 w-4" />
                    </span>
                  </div>

                  {/* Lien couvrant pour l'accessibilite/clic */}
                  <a
                    href="#contact"
                    className="absolute inset-0 z-20"
                    aria-label={`Demander un devis : ${s.title}`}
                  />
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
