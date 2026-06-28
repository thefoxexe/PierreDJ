import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base sombre profonde + bone (blanc casse) : contraste editorial fort.
        night: {
          DEFAULT: "#0A0A0C",
          800: "#101014",
          700: "#16161C",
          600: "#1F1F27",
        },
        bone: {
          DEFAULT: "#F4F1E9",
          200: "#EAE6DB",
        },
        // Accent electrique evenementiel : violet -> magenta (lumieres de scene).
        volt: {
          DEFAULT: "#6E4BFF",
          bright: "#8B6BFF",
        },
        flare: {
          DEFAULT: "#FF2D78",
          bright: "#FF5C97",
        },
        // Micro-accent acidule pour les details (points, labels).
        lime: "#D6FF3D",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        content: "1320px",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.8" },
        },
        beam: {
          "0%, 100%": { opacity: "0.25", transform: "translateY(0) scaleY(1)" },
          "50%": { opacity: "0.6", transform: "translateY(-2%) scaleY(1.06)" },
        },
      },
      animation: {
        marquee: "marquee var(--marquee-duration, 30s) linear infinite",
        "marquee-rev": "marquee-rev var(--marquee-duration, 30s) linear infinite",
        "spin-slow": "spin-slow 26s linear infinite",
        "pulse-glow": "pulse-glow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
