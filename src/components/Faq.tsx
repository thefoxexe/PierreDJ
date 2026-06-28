"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faq } from "@/content/faq";
import { Reveal } from "./Reveal";
import { Icons } from "./icons";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-gold-deep" />
            {faq.eyebrow}
          </p>
          <h2 className="section-title">{faq.title}</h2>
          <p className="mt-4 text-ink/65">{faq.subtitle}</p>
          <a href="#contact" className="btn-ghost mt-8 hidden lg:inline-flex">
            Une autre question ? Contactez-moi
            <Icons.arrowRight className="h-4 w-4" />
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {faq.items.map((item, i) => {
              const open = openIndex === i;
              return (
                <li key={i}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? null : i)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                      aria-expanded={open}
                    >
                      <span className="font-display text-lg font-medium text-ink">
                        {item.question}
                      </span>
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/15 text-ink transition-transform duration-300 ${
                          open ? "rotate-45 bg-gold border-gold text-ink" : ""
                        }`}
                      >
                        <Icons.plus className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-12 text-ink/65 leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
