import { about } from "@/content/about";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { Icons } from "./icons";

export function About() {
  return (
    <section id="a-propos" className="bg-cream py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Colonne texte */}
        <div>
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-gold-deep" />
              {about.eyebrow}
            </p>
            <h2 className="section-title max-w-md">{about.title}</h2>
          </Reveal>

          <div className="mt-6 space-y-4 text-ink/70 leading-relaxed">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <RevealGroup className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {about.stats.map((s) => (
              <RevealItem key={s.label}>
                <div className="font-display text-3xl font-bold text-gradient-gold">
                  {s.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-ink/55">
                  {s.label}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* Colonne valeurs */}
        <RevealGroup className="grid gap-4 sm:grid-cols-2">
          {about.values.map((v) => (
            <RevealItem key={v.title}>
              <div className="card h-full hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold-deep">
                  <Icons.check className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{v.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
