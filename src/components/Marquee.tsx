import type { ReactNode } from "react";

/**
 * Bandeau defilant (marquee) en CSS pur — donne l'energie "evenementiel".
 * Le contenu est duplique pour une boucle continue et sans couture.
 */
export function Marquee({
  items,
  reverse = false,
  duration = "32s",
  className = "",
  separator,
}: {
  items: ReactNode[];
  reverse?: boolean;
  duration?: string;
  className?: string;
  separator?: ReactNode;
}) {
  const sep = separator ?? (
    <span className="text-flare" aria-hidden>
      ✦
    </span>
  );

  const Sequence = () => (
    <div className="flex shrink-0 items-center" aria-hidden>
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6">{item}</span>
          {sep}
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee-mask flex overflow-hidden ${className}`}>
      <div
        className={`flex w-max ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}
        style={{ ["--marquee-duration" as string]: duration }}
      >
        <Sequence />
        <Sequence />
      </div>
    </div>
  );
}
