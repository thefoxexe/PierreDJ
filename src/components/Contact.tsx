"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Icons } from "./icons";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-night/15 bg-bone px-4 py-3 text-sm text-night placeholder:text-night/40 transition-colors focus:border-volt focus:ring-2 focus:ring-volt/30";
const labelClass = "mb-1.5 block text-xs font-bold uppercase tracking-wide text-night/70";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Anti-spam : champ honeypot invisible.
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
    <section id="contact" className="bg-bone text-night">
      <div className="container-page grid gap-12 py-20 sm:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Infos */}
        <div>
          <SectionHeading
            index="06"
            label="Contact"
            title="Parlons de **votre evenement**"
            description="Decrivez votre projet : vous recevrez une proposition personnalisee, gratuite et sans engagement. Reponse rapide garantie."
            dark
          />

          <div className="mt-8 space-y-3">
            <ContactRow href={`tel:${site.contact.phoneIntl}`} icon="phone" label="Telephone" value={site.contact.phone} />
            {site.contact.email && (
              <ContactRow href={`mailto:${site.contact.email}`} icon="mail" label="Email" value={site.contact.email} />
            )}
            {site.contact.whatsapp && (
              <ContactRow
                href={`https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}`}
                icon="whatsapp"
                label="WhatsApp"
                value="Ecrivez-nous"
                external
              />
            )}
            <ContactRow icon="pin" label="Zone d'intervention" value={site.contact.area} />
          </div>
        </div>

        {/* Formulaire */}
        <Reveal delay={0.1}>
          {status === "success" ? (
            <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-night/15 bg-night p-10 text-center text-bone">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-volt to-flare text-white">
                <Icons.check className="h-8 w-8" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-extrabold uppercase">Message envoye !</h3>
              <p className="mt-2 max-w-sm text-bone/70">
                Merci pour votre demande. Nous reviendrons vers vous tres rapidement.
              </p>
              <button type="button" onClick={() => setStatus("idle")} className="btn-outline mt-6">
                Envoyer une autre demande
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-3xl border border-night/15 bg-white p-6 sm:p-8" noValidate>
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
                  <label htmlFor="name" className={labelClass}>Nom complet *</label>
                  <input id="name" name="name" required className={inputClass} placeholder="Votre nom" />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email *</label>
                  <input id="email" name="email" type="email" required className={inputClass} placeholder="vous@email.com" />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Telephone</label>
                  <input id="phone" name="phone" type="tel" className={inputClass} placeholder="079 000 00 00" />
                </div>
                <div>
                  <label htmlFor="date" className={labelClass}>Date de l&apos;evenement</label>
                  <input id="date" name="date" type="date" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="eventType" className={labelClass}>Type d&apos;evenement</label>
                  <select id="eventType" name="eventType" className={inputClass} defaultValue="">
                    <option value="" disabled>Selectionnez...</option>
                    {services.items.map((s) => (
                      <option key={s.slug} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="guests" className={labelClass}>Nombre de personnes</label>
                  <input id="guests" name="guests" type="number" min={1} className={inputClass} placeholder="Ex : 120" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="location" className={labelClass}>Lieu</label>
                  <input id="location" name="location" className={inputClass} placeholder="Ville / salle" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelClass}>Votre message</label>
                  <textarea id="message" name="message" rows={4} className={`${inputClass} resize-y`} placeholder="Parlez-nous de votre projet..." />
                </div>
              </div>

              {status === "error" && (
                <p className="mt-4 rounded-xl bg-flare/10 px-4 py-3 text-sm text-flare">{errorMsg}</p>
              )}

              <button type="submit" disabled={status === "loading"} className="btn-fill mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70">
                {status === "loading" ? "Envoi en cours..." : "Demander un devis"}
                {status !== "loading" && <Icons.arrowRight className="h-4 w-4" />}
              </button>
              <p className="mt-3 text-center text-xs text-night/45">
                * Champs obligatoires. Vos donnees restent confidentielles.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({
  href,
  icon,
  label,
  value,
  external,
}: {
  href?: string;
  icon: string;
  label: string;
  value: string;
  external?: boolean;
}) {
  const inner = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-night text-bone transition-colors group-hover:bg-gradient-to-br group-hover:from-volt group-hover:to-flare">
        <IconByName name={icon} />
      </span>
      <span>
        <span className="block text-xs font-bold uppercase tracking-wide text-night/50">{label}</span>
        <span className="font-display font-bold uppercase tracking-tight text-night">{value}</span>
      </span>
    </>
  );

  const cls = "group flex items-center gap-4 rounded-2xl border border-night/15 bg-bone p-4 transition-colors hover:border-night/40";

  if (!href) return <div className={cls}>{inner}</div>;
  return (
    <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {inner}
    </a>
  );
}

function IconByName({ name }: { name: string }) {
  const map: Record<string, JSX.Element> = {
    phone: <Icons.phone className="h-5 w-5" />,
    mail: <Icons.mail className="h-5 w-5" />,
    whatsapp: <Icons.whatsapp className="h-5 w-5" />,
    pin: <Icons.pin className="h-5 w-5" />,
  };
  return map[name] ?? <Icons.phone className="h-5 w-5" />;
}
