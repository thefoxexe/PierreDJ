import { home } from "@/content/home";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Icons } from "./icons";

export function CtaBanner() {
  const { finalCta } = home;
  return (
    <section className="bg-cream py-12 sm:py-20">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-14 text-center text-cream sm:px-12 sm:py-20">
            <div className="absolute inset-0 bg-noise opacity-50" aria-hidden />
            <div
              className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent/25 blur-[100px] animate-pulse-glow"
              aria-hidden
            />
            <div
              className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-gold/25 blur-[100px] animate-pulse-glow"
              aria-hidden
            />

            <div className="relative mx-auto max-w-2xl">
              <p className="eyebrow justify-center text-gold-bright">{finalCta.eyebrow}</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                {finalCta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-cream/75">{finalCta.subtitle}</p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href={finalCta.primaryCta.href} className="btn-primary">
                  {finalCta.primaryCta.label}
                  <Icons.arrowRight className="h-4 w-4" />
                </a>
                <a href={`tel:${site.contact.phoneIntl}`} className="btn-ghost-dark">
                  <Icons.phone className="h-4 w-4" />
                  {finalCta.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
