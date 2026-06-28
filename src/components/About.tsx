import { about } from "@/content/about";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Icons } from "./icons";

export function About() {
  return (
    <section id="a-propos" className="bg-bone text-night">
      <div className="container-page py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Texte */}
          <div className="lg:col-span-7">
            <SectionHeading index="01" label="A propos" title={about.title} dark />
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-night/70">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            {/* Valeurs : liste numerotee qui se remplit au survol */}
            <RevealGroup className="mt-10 border-t border-night/15">
              {about.values.map((v, i) => (
                <RevealItem key={v.title}>
                  <div className="group flex gap-5 border-b border-night/15 py-5 transition-colors hover:bg-night hover:px-5">
                    <span className="font-display text-sm font-bold text-flare">
                      0{i + 1}
                    </span>
                    <div className="transition-colors group-hover:text-bone">
                      <h3 className="font-display text-xl font-bold uppercase tracking-tight">
                        {v.title}
                      </h3>
                      <p className="mt-1 max-w-md text-sm text-night/60 transition-colors group-hover:text-bone/70">
                        {v.description}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* Visuel + stats */}
          <div className="lg:col-span-5">
            <Reveal>
              {/* Placeholder portrait (a remplacer par une vraie photo) */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-night/15 bg-night-700">
                <div className="absolute inset-0 bg-gradient-to-br from-volt/20 via-transparent to-flare/20" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center text-bone/40">
                    <Icons.disc className="mx-auto h-10 w-10 animate-spin-slow" />
                    <p className="mt-3 text-xs font-medium uppercase tracking-widest">
                      Portrait a venir
                    </p>
                  </div>
                </div>
                {/* Sticker coin */}
                <div className="absolute right-4 top-4 rounded-full bg-lime px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-night">
                  Since {new Date().getFullYear() - 10}
                </div>
              </div>
            </Reveal>

            {/* Stats */}
            <RevealGroup className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-night/15 bg-night/15">
              {about.stats.map((s) => (
                <RevealItem key={s.label}>
                  <div className="bg-bone p-5">
                    <div className="font-display text-4xl font-extrabold tracking-tightest sm:text-5xl">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wide text-night/55">
                      {s.label}
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
