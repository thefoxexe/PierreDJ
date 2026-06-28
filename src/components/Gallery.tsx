import Image from "next/image";
import { gallery } from "@/content/gallery";
import { RevealGroup, RevealItem } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Icons } from "./icons";

export function Gallery() {
  const hasMedia = gallery.items.length > 0;
  const placeholders = Array.from({ length: gallery.placeholderCount });

  return (
    <section id="galerie" className="bg-bone text-night">
      <div className="container-page py-20 sm:py-28">
        <SectionHeading
          index="03"
          label="Galerie"
          title={gallery.title}
          description={gallery.subtitle}
          dark
        />

        {hasMedia ? (
          <RevealGroup
            className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
            stagger={0.05}
          >
            {gallery.items.map((item, i) => (
              <RevealItem key={i} className={item.large ? "col-span-2 row-span-2" : ""}>
                <figure className="group relative h-full w-full overflow-hidden rounded-2xl bg-night-700">
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <video className="h-full w-full object-cover" src={item.src} muted loop playsInline controls />
                  )}
                </figure>
              </RevealItem>
            ))}
          </RevealGroup>
        ) : (
          <RevealGroup
            className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
            stagger={0.05}
          >
            {placeholders.map((_, i) => (
              <RevealItem key={i} className={i === 0 ? "col-span-2 row-span-2" : ""}>
                <div className="group relative flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-night/15 bg-night-800 text-bone/40 transition-all duration-300 hover:border-transparent hover:shadow-[0_24px_60px_-24px_rgba(255,45,120,0.55)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-volt/15 via-transparent to-flare/15 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                  <Icons.disc className="relative h-8 w-8 animate-spin-slow transition-transform duration-500 group-hover:scale-125" />
                  <span className="relative text-[11px] font-medium uppercase tracking-widest transition-colors group-hover:text-bone/70">
                    Visuel a venir
                  </span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        )}
      </div>
    </section>
  );
}
