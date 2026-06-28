"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faq } from "@/content/faq";
import { SectionHeading } from "./SectionHeading";
import { Icons } from "./icons";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-bone text-night">
      <div className="container-page grid gap-12 py-20 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading index="05" label="FAQ" title={faq.title} description={faq.subtitle} dark />
          <a href="#contact" className="btn-outline-dark mt-8 hidden lg:inline-flex">
            Une autre question ?
            <Icons.arrowRight className="h-4 w-4" />
          </a>
        </div>

        <ul className="border-t border-night/15">
          {faq.items.map((item, i) => {
            const open = openIndex === i;
            return (
              <li key={i} className="border-b border-night/15">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="group flex w-full items-center gap-5 py-5 text-left"
                    aria-expanded={open}
                  >
                    <span className="font-display text-sm font-bold text-flare">0{i + 1}</span>
                    <span className="flex-1 font-display text-lg font-bold uppercase tracking-tight transition-transform duration-300 group-hover:translate-x-1.5 sm:text-xl">
                      {item.question}
                    </span>
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        open
                          ? "rotate-45 border-transparent bg-gradient-to-br from-volt to-flare text-white"
                          : "border-night/25 text-night group-hover:border-flare group-hover:text-flare"
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
                      <p className="pb-6 pl-10 pr-12 text-night/65 leading-relaxed">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
