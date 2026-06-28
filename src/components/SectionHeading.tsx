import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/**
 * En-tete de section "editorial" : index numerote + label + grand titre.
 * Le titre accepte le format **segment** pour mettre un mot en degrade.
 */
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

export function SectionHeading({
  index,
  label,
  title,
  description,
  dark = false,
  align = "left",
  children,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  const muted = dark ? "text-night/55" : "text-bone/55";
  const line = dark ? "bg-night/25" : "bg-bone/25";

  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`section-index ${align === "center" ? "justify-center" : ""}`}>
        <span className="text-flare">({index})</span>
        <span className={`h-px w-8 ${line}`} />
        <span>{label}</span>
      </p>
      <h2 className="display-xl mt-5 text-4xl sm:text-5xl md:text-6xl">
        {renderTitle(title)}
      </h2>
      {description && <p className={`mt-5 max-w-xl text-base ${muted} ${align === "center" ? "mx-auto" : ""}`}>{description}</p>}
      {children}
    </Reveal>
  );
}
