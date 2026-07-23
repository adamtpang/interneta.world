import { ImageResponse } from "next/og";
import { rankSites } from "@/lib/data/node-search";
import { NODE_SEARCHES, getNodeSearch } from "@/lib/data/node-searches";

export const alt = "Interneta · NS node search";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return NODE_SEARCHES.map((s) => ({ country: s.slug }));
}

// Satori requires an explicit display value on every element that has more
// than one child, so this stays deliberately flat: one flex column, and each
// row is a single pre-composed string.
const row = (text: string, color: string, weight: number) => (
  <div
    key={text}
    style={{
      display: "flex",
      fontSize: 30,
      fontWeight: weight,
      color,
      marginTop: 10,
    }}
  >
    {text}
  </div>
);

export default async function OG({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const search = getNodeSearch(country);

  if (!search) {
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            background: "#ffffff",
            fontSize: 48,
          }}
        >
          Node search not found
        </div>
      ),
      { ...size }
    );
  }

  const ranked = rankSites(search).slice(0, 4);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "#ffffff",
          color: "#000000",
          padding: "60px 68px",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 20,
            letterSpacing: 6,
            color: "#888888",
          }}
        >
          {`::: NS NODE SEARCH ::: ${search.dateline} :::`}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            marginTop: 18,
          }}
        >
          {`${search.flag} ${search.country}`}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 30,
          }}
        >
          {ranked.map((s, i) =>
            row(
              `${i + 1}. ${s.city} · ${s.ev.final}/100 · ${s.ev.band}`,
              s.ev.color,
              i === 0 ? 800 : 500
            )
          )}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#555555",
            marginTop: 34,
          }}
        >
          9-axis node-fit rubric · hard gates · sourced
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 700,
            marginTop: 8,
          }}
        >
          interneta.world
        </div>
      </div>
    ),
    { ...size }
  );
}
