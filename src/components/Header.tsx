"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/content/site";
import { Icons } from "./icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Empeche le defilement de l'arriere-plan quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // En-tete transparente posee sur le hero sombre -> texte clair.
  // Une fois defilee (fond creme) ou menu mobile ouvert -> texte fonce.
  const dark = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-ink/10 bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="container-page flex h-16 items-center justify-between sm:h-20"
        aria-label="Navigation principale"
      >
        <a
          href="#accueil"
          className={`flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-bold tracking-tight transition-colors ${
            dark ? "text-cream" : "text-ink"
          }`}
        >
          <span
            className={`grid h-9 w-9 place-items-center rounded-lg text-sm font-bold ${
              dark ? "bg-gold text-ink" : "bg-ink text-gold"
            }`}
          >
            PM
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        {/* Navigation bureau */}
        <ul className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  dark
                    ? "text-cream/80 hover:bg-white/10 hover:text-cream"
                    : "text-ink/70 hover:bg-ink/5 hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.contact.phoneIntl}`}
            className={`hidden items-center gap-2 whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition-colors xl:inline-flex ${
              dark ? "text-cream hover:text-gold-bright" : "text-ink hover:text-gold-deep"
            }`}
          >
            <Icons.phone className="h-4 w-4" />
            {site.contact.phone}
          </a>
          <a
            href="#contact"
            className="btn-primary hidden whitespace-nowrap px-5 py-2.5 md:inline-flex"
          >
            Demander un devis
          </a>

          {/* Bouton menu mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`grid h-10 w-10 place-items-center rounded-full transition-colors lg:hidden ${
              dark ? "text-cream hover:bg-white/10" : "text-ink hover:bg-ink/5"
            }`}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <Icons.close className="h-6 w-6" /> : <Icons.menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ink/10 bg-cream/95 backdrop-blur-md lg:hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-4">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-ink/80 transition-colors hover:bg-ink/5 hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex flex-col gap-2">
                <a
                  href={`tel:${site.contact.phoneIntl}`}
                  onClick={() => setOpen(false)}
                  className="btn-ghost w-full"
                >
                  <Icons.phone className="h-4 w-4" />
                  {site.contact.phone}
                </a>
                <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Demander un devis
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
