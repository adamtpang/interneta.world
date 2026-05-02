import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Globe | interneta.world",
  description:
    "The Earth, and her internet twin. 195 nation-states, their network-state mirrors, and the archipelago between them.",
  alternates: { canonical: "https://interneta.world/globe" },
};

export default function GlobePage() {
  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
          ::: PHYSICAL ↔ DIGITAL :::
        </div>
        <h1 className="font-mono font-bold text-4xl sm:text-6xl leading-tight tracking-tight mb-8">
          The Earth, and<br />her internet twin.
        </h1>
        <p className="font-mono text-lg text-foreground/80 leading-relaxed mb-12 max-w-2xl">
          Every nation-state on the map gets an Interneta counterpart. A
          network-state mirror, claimable by anyone willing to found one. Toggle
          the globe between physical Earth and the digital archipelago.
        </p>

        <div className="border-2 border-border bg-background shadow-brutal-md aspect-square sm:aspect-video flex items-center justify-center mb-8">
          <div className="text-center font-mono p-8">
            <div className="text-6xl mb-4">🌐</div>
            <div className="text-xs tracking-[0.3em] text-muted-foreground mb-2">
              GLOBE RENDERER
            </div>
            <div className="text-base text-foreground/70">
              react-globe.gl + GeoJSON · coming in v0.1
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-sm">
          {[
            { k: "NATION-STATES", v: "195" },
            { k: "NETWORK-STATE MIRRORS", v: "0 / 195" },
            { k: "PHYSICAL NODES", v: "0" },
            { k: "POPUP CITIES", v: "see /hub" },
          ].map((s) => (
            <div
              key={s.k}
              className="border-2 border-border bg-background shadow-brutal-sm p-4"
            >
              <div className="text-xl font-bold">{s.v}</div>
              <div className="text-[10px] tracking-widest text-muted-foreground mt-1">
                {s.k}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
