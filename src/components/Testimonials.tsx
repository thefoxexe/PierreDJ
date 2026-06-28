import { testimonials } from "@/content/testimonials";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { Icons } from "./icons";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Note : ${rating} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icons.star
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-gold" : "text-ink/15"}`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="avis" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">
              <span className="h-px w-8 bg-gold-deep" />
              {testimonials.eyebrow}
            </p>
            <h2 className="section-title">{testimonials.title}</h2>
            <p className="mt-4 text-ink/65">{testimonials.subtitle}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-cream px-5 py-4">
              <div className="font-display text-4xl font-bold text-gradient-gold">
                {testimonials.averageRating.toFixed(1)}
              </div>
              <div>
                <Stars rating={Math.round(testimonials.averageRating)} />
                <p className="mt-1 text-xs text-ink/55">
                  {testimonials.reviewCount} avis clients
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <RevealGroup
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {testimonials.items.map((t, i) => (
            <RevealItem key={i}>
              <figure className="flex h-full flex-col rounded-2xl border border-ink/5 bg-cream p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5">
                <Stars rating={t.rating} />
                <blockquote className="mt-4 flex-1 text-ink/75 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-ink/10 pt-4">
                  <div className="font-semibold text-ink">{t.name}</div>
                  <div className="text-sm text-ink/55">{t.event}</div>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
