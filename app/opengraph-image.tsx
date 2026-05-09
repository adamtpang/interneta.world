import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Interneta · The United States of Interneta";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PALETTE = [
  "#06b6d4", // cyan
  "#d946ef", // magenta
  "#eab308", // gold
  "#16a34a", // green
  "#dc2626", // red
  "#4f46e5", // indigo
  "#ea580c", // orange
];

const LETTERS = "INTERNETA".split("");

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#fff",
          color: "#000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 8,
            color: "#888",
            textTransform: "uppercase",
          }}
        >
          ::: THE UNITED STATES OF INTERNETA :::
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 200, fontWeight: 800, letterSpacing: 4 }}>
            {LETTERS.map((l, i) => (
              <span key={i} style={{ color: PALETTE[i % PALETTE.length] }}>
                {l}
              </span>
            ))}
          </div>

          <div
            style={{
              fontSize: 40,
              fontWeight: 700,
              lineHeight: 1.2,
              maxWidth: 1000,
            }}
          >
            America was the startup. Interneta is the sequel.
          </div>

          <div
            style={{
              fontSize: 26,
              color: "#555",
              maxWidth: 1000,
              lineHeight: 1.4,
            }}
          >
            A federation of internet city-states. Cloud first, land last. Recruit, not conquer.
          </div>
        </div>

        <div style={{ display: "flex", gap: 4, height: 18 }}>
          {PALETTE.map((c) => (
            <div key={c} style={{ flex: 1, background: c }} />
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
