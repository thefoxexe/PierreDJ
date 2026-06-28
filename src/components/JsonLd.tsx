import { site } from "@/content/site";
import { faq } from "@/content/faq";
import { services } from "@/content/services";

/**
 * Donnees structurees Schema.org (SEO).
 * - LocalBusiness (type DJ / service evenementiel)
 * - FAQPage (rich results pour la FAQ)
 * Injecte dans le <head> via un script JSON-LD.
 */
export function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MusicGroup"],
    "@id": `${site.url}/#business`,
    name: site.name,
    description: `${site.role} - ${site.tagline}`,
    url: site.url,
    telephone: site.contact.phoneIntl,
    email: site.contact.email,
    image: `${site.url}/opengraph-image`,
    priceRange: "$$",
    areaServed: { "@type": "Place", name: site.contact.area },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.contact.city,
      addressRegion: site.contact.region,
      addressCountry: site.contact.country,
    },
    sameAs: Object.values(site.social).filter(Boolean),
    makesOffer: services.items.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.description },
    })),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
