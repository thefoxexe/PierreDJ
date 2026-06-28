/**
 * Bibliotheque d'icones SVG (trait fin, style premium).
 * Utilisees notamment par les prestations via le champ `icon`.
 * Toutes heritent de la couleur courante (currentColor) et de la taille via className.
 */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const Icons = {
  heart: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A3.5 3.5 0 0 0 12 6 3.5 3.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
    </svg>
  ),
  cake: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
      <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
      <path d="M2 21h20M7 8v2M12 8v2M17 8v2" />
      <path d="M7 4v.01M12 3v.01M17 4v.01" />
    </svg>
  ),
  sparkle: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 7c.6 2.7 2.3 4.4 5 5-2.7.6-4.4 2.3-5 5-.6-2.7-2.3-4.4-5-5 2.7-.6 4.4-2.3 5-5Z" />
    </svg>
  ),
  briefcase: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
    </svg>
  ),
  flag: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M4 21V4M4 4h13l-2 4 2 4H4" />
    </svg>
  ),
  disc: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 3a9 9 0 0 1 9 9" />
    </svg>
  ),
  music: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  ),
  wand: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="m3 21 12-12M14 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2ZM19 11l.6 1.2 1.2.6-1.2.6L19 15l-.6-1.2L17.2 13l1.2-.6L19 11Z" />
    </svg>
  ),
  phone: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z" />
    </svg>
  ),
  mail: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  ),
  whatsapp: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2.1-5.4A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M8.5 9c0 4 2.5 6.5 6.5 6.5M9.5 8.5c.5-.5 1.5 0 1.7.7M14.8 14c-.7-.2-1.2-1.2-.7-1.7" />
    </svg>
  ),
  pin: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 22s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  ),
  star: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="m12 2 2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2Z" />
    </svg>
  ),
  arrowUp: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  ),
  arrowRight: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  menu: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  close: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  ),
  plus: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  check: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  instagram: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M17 6.5h.01" />
    </svg>
  ),
  facebook: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M14 9V7a2 2 0 0 1 2-2h2V2h-3a5 5 0 0 0-5 5v2H8v3h2v8h3v-8h3l1-3h-4Z" />
    </svg>
  ),
  youtube: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="m10 9 5 3-5 3V9Z" />
    </svg>
  ),
  tiktok: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M16 3c.3 2.3 1.7 3.7 4 4v3c-1.5 0-2.9-.4-4-1.2V15a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3h3Z" />
    </svg>
  ),
} as const;

export type IconName = keyof typeof Icons;

export function Icon({ name, ...props }: { name: string } & IconProps) {
  const Cmp = Icons[name as IconName] ?? Icons.sparkle;
  return <Cmp {...props} />;
}
