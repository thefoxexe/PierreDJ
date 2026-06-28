import Image from "next/image";
import { gallery } from "@/content/gallery";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { Icons } from "./icons";

export function Gallery() {
  const hasMedia = gallery.items.length > 0;
  const placeholders = Array.from({ length: gallery.placeholderCount });

  return (
    <section id="galerie" className="bg-cream py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-gold-deep" />
            {gallery.eyebrow}
          </p>
          <h2 className="section-title">{gallery.title}</h2>
          <p className="mt-4 text-ink/65">{gallery.subtitle}</p>
        </Reveal>

        {hasMedia ? (
          <RevealGroup
            className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
            stagger={0.05}
          >
            {gallery.items.map((item, i) => (
              <RevealItem
                key={i}
                className={item.large ? "col-span-2 row-span-2" : ""}
              >
                <figure className="group relative h-full w-full overflow-hidden rounded-2xl bg-ink/5">
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <video
                      className="h-full w-full object-cover"
                      src={item.src}
                      muted
                      loop
                      playsInline
                      controls
                    />
                  )}
                </figure>
              </RevealItem>
            ))}
          </RevealGroup>
        ) : (
          // Emplacements de demonstration tant qu'aucun media n'est fourni
          <RevealGroup
            className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
            stagger={0.05}
          >
            {placeholders.map((_, i) => (
              <RevealItem
                key={i}
                className={i === 0 ? "col-span-2 row-span-2" : ""}
              >
                <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-dashed border-ink/15 bg-gradient-to-br from-ink/[0.03] to-ink/[0.07]">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-ink/5 text-ink/40">
                    <Icons.disc className="h-5 w-5 animate-spin-slow" />
                  </div>
                  <span className="text-xs font-medium text-ink/40">Photo a venir</span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        )}
      </div>
    </section>
  );
}
