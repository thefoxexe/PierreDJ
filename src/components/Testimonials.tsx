import { testimonials } from "@/content/testimonials";
import { RevealGroup, RevealItem } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Icons } from "./icons";

function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label={`Note : ${rating} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icons.star key={i} className={`h-4 w-4 ${i < rating ? "text-lime" : "text-bone/20"}`} />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="avis" className="bg-night py-20 text-bone sm:py-28">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            index="04"
            label="Avis clients"
            title={testimonials.title}
            description={testimonials.subtitle}
          />
          <div className="flex shrink-0 items-center gap-4">
            <div className="font-display text-6xl font-extrabold tracking-tightest text-gradient">
              {testimonials.averageRating.toFixed(1)}
            </div>
            <div>
              <Stars rating={Math.round(testimonials.averageRating)} />
              <p className="mt-1.5 text-xs uppercase tracking-wide text-bone/55">
                {testimonials.reviewCount} avis clients
              </p>
            </div>
          </div>
        </div>

        <RevealGroup className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {testimonials.items.map((t, i) => (
            <RevealItem key={i}>
              <figure className="flex h-full flex-col rounded-2xl border border-bone/12 bg-night-800 p-6 transition-colors duration-300 hover:border-bone/30">
                <div className="flex items-center justify-between">
                  <Stars rating={t.rating} />
                  <Icons.disc className="h-5 w-5 text-bone/20" />
                </div>
                <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-bone/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-bone/10 pt-4">
                  <div className="font-display font-bold uppercase tracking-tight">{t.name}</div>
                  <div className="text-sm text-flare">{t.event}</div>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
