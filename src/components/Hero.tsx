"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { Icons } from "./icons";
import { Marquee } from "./Marquee";

function renderTitle(title: string) {
  return title.split(/\*\*(.*?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-gradient">
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
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-night text-bone"
    >
      {/* ---- Fond ---- */}
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
          <Image src={hero.media.image} alt="" fill priority sizes="100vw" className="object-cover" />
        ) : (
          <Backdrop reduce={!!reduce} />
        )}
        {/* Voile pour la lisibilite */}
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-night/70" />
      </div>

      {/* ---- Contenu ---- */}
      <div className="container-page relative z-10 flex flex-1 flex-col justify-center pt-28 pb-10 sm:pt-32">
        <div className="grid items-end gap-y-10 lg:grid-cols-12 lg:gap-x-10">
          {/* Titre */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-bone/70"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
              </span>
              {hero.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="display-xl mt-6 text-[3.25rem] leading-[0.9] sm:text-7xl lg:text-8xl xl:text-[8.5rem]"
            >
              {renderTitle(hero.title)}
            </motion.h1>
          </div>

          {/* Colonne droite : sous-titre + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 lg:pb-3"
          >
            <p className="max-w-md text-base leading-relaxed text-bone/75">{hero.subtitle}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={hero.primaryCta.href} className="btn-fill">
                {hero.primaryCta.label}
                <Icons.arrowRight className="h-4 w-4" />
              </a>
              <a href={`tel:${site.contact.phoneIntl}`} className="btn-outline">
                <Icons.phone className="h-4 w-4" />
                {site.contact.phone}
              </a>
            </div>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-wide text-bone/55">
              {hero.highlights.map((h) => (
                <li key={h} className="flex items-center gap-1.5">
                  <span className="text-lime">/</span>
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* ---- Marquee bas ---- */}
      <div className="relative z-10 border-y border-bone/10 bg-night/40 py-4 backdrop-blur-sm">
        <Marquee
          duration="40s"
          items={services.items.map((s) => (
            <span key={s.slug} className="font-display text-lg font-bold uppercase tracking-wide">
              {s.title}
            </span>
          ))}
        />
      </div>

      {/* Badge circulaire rotatif */}
      <RotatingBadge reduce={!!reduce} />
    </section>
  );
}

/* Fond : faisceaux de lumiere (scene) + halos colores anime. */
function Backdrop({ reduce }: { reduce: boolean }) {
  return (
    <div className="absolute inset-0 bg-night">
      {/* Faisceaux depuis le haut */}
      <div className="absolute inset-x-0 top-0 h-[70%] overflow-hidden">
        <div
          className="absolute left-[15%] top-[-20%] h-[120%] w-[18vw] rotate-[18deg] bg-gradient-to-b from-volt/40 to-transparent blur-2xl"
          style={{ animation: reduce ? undefined : "beam 7s ease-in-out infinite" }}
        />
        <div
          className="absolute left-[45%] top-[-25%] h-[120%] w-[14vw] rotate-[-10deg] bg-gradient-to-b from-flare/35 to-transparent blur-2xl"
          style={{ animation: reduce ? undefined : "beam 9s ease-in-out infinite 1s" }}
        />
        <div
          className="absolute right-[12%] top-[-20%] h-[120%] w-[16vw] rotate-[12deg] bg-gradient-to-b from-volt-bright/35 to-transparent blur-2xl"
          style={{ animation: reduce ? undefined : "beam 8s ease-in-out infinite 0.5s" }}
        />
      </div>
      {/* Halos */}
      <motion.div
        className="absolute -left-[10%] top-[10%] h-[55vmax] w-[55vmax] rounded-full bg-volt/30 blur-[130px]"
        animate={reduce ? {} : { x: [0, 70, 0], y: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[8%] bottom-[5%] h-[55vmax] w-[55vmax] rounded-full bg-flare/30 blur-[130px]"
        animate={reduce ? {} : { x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* Badge circulaire avec texte tournant + bouton lecture central. */
function RotatingBadge({ reduce }: { reduce: boolean }) {
  return (
    <div className="pointer-events-none absolute bottom-28 right-6 z-10 hidden lg:block">
      <div className="relative h-28 w-28">
        <svg
          viewBox="0 0 120 120"
          className={`h-full w-full ${reduce ? "" : "animate-spin-slow"}`}
        >
          <defs>
            <path id="circlePath" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
          </defs>
          <text className="fill-bone/70 text-[11px] font-semibold uppercase tracking-[0.25em]">
            <textPath href="#circlePath" startOffset="0%">
              Reservez votre date • Devis gratuit •
            </textPath>
          </text>
        </svg>
        <span className="absolute inset-0 m-auto grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-volt to-flare text-white">
          <Icons.arrowRight className="h-5 w-5 -rotate-45" />
        </span>
      </div>
    </div>
  );
}
