import { ImageResponse } from "next/og";

// Dynamic favicon: the Interneta "I" on the federation cyan.
// Replaces the inherited nsnodes-icon.png.
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
          background: "#06b6d4",
          color: "#ffffff",
          fontSize: 46,
          fontWeight: 800,
          fontFamily: "monospace",
          borderRadius: 8,
        }}
      >
        I
      </div>
    ),
    { ...size }
  );
}
