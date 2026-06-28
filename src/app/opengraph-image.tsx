import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// Image Open Graph (partages sur reseaux sociaux) generee dynamiquement.
// Remplacez par une vraie image (1200x630) lorsque le visuel sera fourni.
export const alt = `${site.name} - ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0A0A0C 0%, #1a1230 55%, #3a1840 100%)",
          color: "#F4F1E9",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#FF5C97",
            fontWeight: 600,
          }}
        >
          DJ &amp; Animateur evenementiel
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            marginTop: 24,
            lineHeight: 1.05,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            marginTop: 28,
            maxWidth: 820,
            color: "rgba(250,248,244,0.75)",
            lineHeight: 1.3,
          }}
        >
          {site.tagline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 30,
            fontWeight: 600,
            color: "#8B6BFF",
          }}
        >
          {site.contact.phone}
        </div>
      </div>
    ),
    { ...size },
  );
}
