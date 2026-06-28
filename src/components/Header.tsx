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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Transparente sur le hero sombre -> texte clair. Defilee/menu -> fond sombre.
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "border-b border-bone/10 bg-night/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav
        className="container-page flex h-16 items-center justify-between sm:h-20"
        aria-label="Navigation principale"
      >
        <a
          href="#accueil"
          className="group flex items-center gap-3 whitespace-nowrap text-bone"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-volt to-flare text-sm font-extrabold text-white">
            PM
          </span>
          <span className="font-display text-lg font-extrabold uppercase tracking-tight">
            {site.name}
          </span>
        </a>

        {/* Navigation bureau */}
        <ul className="hidden items-center gap-7 lg:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="link-underline text-sm font-medium text-bone/75 transition-colors hover:text-bone"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.contact.phoneIntl}`}
            className="link-underline hidden whitespace-nowrap text-sm font-semibold text-bone xl:inline-flex"
          >
            {site.contact.phone}
          </a>
          <a href="#contact" className="btn-fill hidden px-5 py-2.5 text-xs md:inline-flex">
            Devis
            <Icons.arrowRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full text-bone transition-colors hover:bg-white/10 lg:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <Icons.close className="h-6 w-6" /> : <Icons.menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-bone/10 bg-night lg:hidden"
          >
            <ul className="container-page flex flex-col py-3">
              {site.nav.map((item, i) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-4 border-b border-bone/5 py-4 font-display text-xl font-bold uppercase text-bone/85 transition-colors hover:text-bone"
                  >
                    <span className="text-xs font-bold text-flare">
                      0{i + 1}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-4 flex flex-col gap-2 pb-2">
                <a href={`tel:${site.contact.phoneIntl}`} onClick={() => setOpen(false)} className="btn-outline w-full">
                  <Icons.phone className="h-4 w-4" />
                  {site.contact.phone}
                </a>
                <a href="#contact" onClick={() => setOpen(false)} className="btn-fill w-full">
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
