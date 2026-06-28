"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { Icons } from "./icons";

/** Met en valeur le segment entoure de ** ** dans le titre du hero. */
function renderTitle(title: string) {
  const parts = title.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-gradient-gold">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const { hero } = home;
  const hasVideo = Boolean(hero.media.video);
  const hasImage = Boolean(hero.media.image);

  return (
    <section
      id="accueil"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink text-cream"
    >
      {/* ---- Media de fond ---- */}
      <div className="absolute inset-0 z-0">
        {hasVideo ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={hero.media.poster || undefined}
          >
            <source src={hero.media.video} type="video/mp4" />
          </video>
        ) : hasImage ? (
          <Image
            src={hero.media.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          // Fond anime de demonstration (effets de lumiere) en l'absence de media
          <AnimatedBackdrop reduce={!!reduce} />
        )}
        {/* Voile assombrissant pour la lisibilite : opaque a gauche (sous le texte),
            transparent a droite pour laisser passer les effets de lumiere. */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
        <div className="absolute inset-0 bg-noise opacity-60" />
      </div>

      <div className="container-page relative z-10 w-full py-28 sm:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-bright backdrop-blur"
          >
            <span className="flex items-end gap-[3px]" aria-hidden>
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="equalizer-bar h-3 w-[3px] rounded-full bg-gold"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </span>
            {hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {renderTitle(hero.title)}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a href={hero.primaryCta.href} className="btn-primary">
              {hero.primaryCta.label}
              <Icons.arrowRight className="h-4 w-4" />
            </a>
            <a href={`tel:${site.contact.phoneIntl}`} className="btn-ghost-dark">
              <Icons.phone className="h-4 w-4" />
              {site.contact.phone}
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream/70"
          >
            {hero.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <Icons.check className="h-4 w-4 text-gold" />
                {h}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Indicateur de defilement */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block">
        <motion.div
          animate={reduce ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/25 p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-white/60" />
        </motion.div>
      </div>
    </section>
  );
}

/** Fond anime premium : halos lumineux colores en mouvement lent. */
function AnimatedBackdrop({ reduce }: { reduce: boolean }) {
  return (
    <div className="absolute inset-0 bg-ink">
      <motion.div
        className="absolute -left-[15%] top-[-10%] h-[55vmax] w-[55vmax] rounded-full bg-accent/55 blur-[120px]"
        animate={reduce ? {} : { x: [0, 80, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[2%] top-[6%] h-[62vmax] w-[62vmax] rounded-full bg-gold/70 blur-[100px]"
        animate={reduce ? {} : { x: [0, -50, 0], y: [0, 55, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-1/4 h-[52vmax] w-[52vmax] rounded-full bg-accent-bright/55 blur-[110px]"
        animate={reduce ? {} : { x: [0, 50, 0], y: [0, -40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
