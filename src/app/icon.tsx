import { ImageResponse } from "next/og";

// Favicon genere dynamiquement (initiales "PM" sur fond sombre + or).
// Remplacez ce fichier par un favicon.ico / icon.png si un logo est fourni.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #6E4BFF 0%, #FF2D78 100%)",
          color: "#ffffff",
          fontSize: 34,
          fontWeight: 700,
          fontFamily: "sans-serif",
          borderRadius: 14,
          letterSpacing: -1,
        }}
      >
        PM
      </div>
    ),
    { ...size },
  );
}
