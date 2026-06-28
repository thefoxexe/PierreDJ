import { NextResponse } from "next/server";

/**
 * ============================================================================
 *  ENDPOINT DE CONTACT (formulaire de devis)
 * ============================================================================
 *  Recoit les demandes de devis du formulaire de contact.
 *
 *  PAR DEFAUT : valide les donnees et journalise la demande dans la console
 *  serveur (visible dans les logs de l'hebergeur). AUCUN email n'est encore
 *  envoye.
 *
 *  POUR ACTIVER L'ENVOI D'EMAIL (quand l'adresse sera connue) :
 *   1. Choisissez un service (ex: Resend, https://resend.com).
 *   2. Ajoutez la variable d'environnement RESEND_API_KEY et CONTACT_EMAIL.
 *   3. Decommentez/completez la section "envoi d'email" ci-dessous.
 * ============================================================================
 */

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  eventType?: string;
  guests?: string;
  location?: string;
  message?: string;
  company?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Requete invalide." }, { status: 400 });
  }

  // Anti-spam : si le honeypot est rempli, on simule un succes sans rien faire.
  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  // Validation cote serveur
  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const message = (data.message || "").trim();

  if (name.length < 2) {
    return NextResponse.json({ error: "Merci d'indiquer votre nom." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: "Message trop long." }, { status: 400 });
  }

  const submission = {
    name,
    email,
    phone: (data.phone || "").trim(),
    date: (data.date || "").trim(),
    eventType: (data.eventType || "").trim(),
    guests: (data.guests || "").trim(),
    location: (data.location || "").trim(),
    message,
    receivedAt: new Date().toISOString(),
  };

  // Journalisation (visible dans les logs serveur de l'hebergeur)
  console.log("[Nouvelle demande de devis]", submission);

  // --- ENVOI D'EMAIL (a activer ulterieurement) -----------------------------
  // const apiKey = process.env.RESEND_API_KEY;
  // const to = process.env.CONTACT_EMAIL;
  // if (apiKey && to) {
  //   await fetch("https://api.resend.com/emails", {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${apiKey}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       from: "Site Pierre Monnet <devis@pierremonnet-dj.ch>",
  //       to,
  //       reply_to: email,
  //       subject: `Demande de devis - ${name} (${submission.eventType || "evenement"})`,
  //       text: Object.entries(submission)
  //         .map(([k, v]) => `${k}: ${v}`)
  //         .join("\n"),
  //     }),
  //   });
  // }
  // --------------------------------------------------------------------------

  return NextResponse.json({ ok: true });
}
