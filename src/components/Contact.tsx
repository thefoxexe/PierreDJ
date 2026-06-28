"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { Reveal } from "./Reveal";
import { Icons } from "./icons";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30";
const labelClass = "mb-1.5 block text-sm font-medium text-ink/80";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Anti-spam : champ honeypot invisible. S'il est rempli, on ignore.
    if (data.company) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Une erreur est survenue.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  }

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Colonne infos */}
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-gold-deep" />
            Contact
          </p>
          <h2 className="section-title">Demandez votre devis gratuit</h2>
          <p className="mt-4 text-ink/65">
            Decrivez-nous votre evenement : vous recevrez une proposition personnalisee,
            sans engagement. Reponse rapide garantie.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`tel:${site.contact.phoneIntl}`}
              className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-cream p-4 transition-colors hover:border-gold/40"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold-deep">
                <Icons.phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-medium uppercase tracking-wide text-ink/50">
                  Telephone
                </span>
                <span className="font-semibold text-ink">{site.contact.phone}</span>
              </span>
            </a>

            {site.contact.email && (
              <a
                href={`mailto:${site.contact.email}`}
                className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-cream p-4 transition-colors hover:border-gold/40"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold-deep">
                  <Icons.mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wide text-ink/50">
                    Email
                  </span>
                  <span className="font-semibold text-ink">{site.contact.email}</span>
                </span>
              </a>
            )}

            {site.contact.whatsapp && (
              <a
                href={`https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-cream p-4 transition-colors hover:border-gold/40"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold-deep">
                  <Icons.whatsapp className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wide text-ink/50">
                    WhatsApp
                  </span>
                  <span className="font-semibold text-ink">Ecrivez-nous</span>
                </span>
              </a>
            )}

            <div className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-cream p-4">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold-deep">
                <Icons.pin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-medium uppercase tracking-wide text-ink/50">
                  Zone d&apos;intervention
                </span>
                <span className="font-semibold text-ink">{site.contact.area}</span>
              </span>
            </div>
          </div>
        </Reveal>

        {/* Formulaire */}
        <Reveal delay={0.1}>
          {status === "success" ? (
            <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-gold/30 bg-cream p-10 text-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-gold/20 text-gold-deep">
                <Icons.check className="h-8 w-8" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold">Message envoye !</h3>
              <p className="mt-2 max-w-sm text-ink/65">
                Merci pour votre demande. Nous reviendrons vers vous tres rapidement pour
                discuter de votre evenement.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="btn-ghost mt-6"
              >
                Envoyer une autre demande
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-ink/10 bg-cream p-6 sm:p-8"
              noValidate
            >
              {/* Honeypot anti-spam (cache) */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
                aria-hidden
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Nom complet *
                  </label>
                  <input id="name" name="name" required className={inputClass} placeholder="Votre nom" />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={inputClass}
                    placeholder="vous@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Telephone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={inputClass}
                    placeholder="079 000 00 00"
                  />
                </div>
                <div>
                  <label htmlFor="date" className={labelClass}>
                    Date de l&apos;evenement
                  </label>
                  <input id="date" name="date" type="date" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="eventType" className={labelClass}>
                    Type d&apos;evenement
                  </label>
                  <select id="eventType" name="eventType" className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Selectionnez...
                    </option>
                    {services.items.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="guests" className={labelClass}>
                    Nombre de personnes
                  </label>
                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    min={1}
                    className={inputClass}
                    placeholder="Ex : 120"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="location" className={labelClass}>
                    Lieu
                  </label>
                  <input
                    id="location"
                    name="location"
                    className={inputClass}
                    placeholder="Ville / salle"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelClass}>
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`${inputClass} resize-y`}
                    placeholder="Parlez-nous de votre projet..."
                  />
                </div>
              </div>

              {status === "error" && (
                <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? "Envoi en cours..." : "Demander un devis"}
                {status !== "loading" && <Icons.arrowRight className="h-4 w-4" />}
              </button>
              <p className="mt-3 text-center text-xs text-ink/45">
                * Champs obligatoires. Vos donnees restent confidentielles.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
