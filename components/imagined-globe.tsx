"use client";

import { useMemo, useState } from "react";
import { InternetaGlobe } from "@/components/interneta-globe";

export type GlobePoint = {
  slug: string;
  name: string;
  icon: string;
  capital: string;
  archetype: string;
  lat: number;
  lng: number;
};

/**
 * A thousand internet city-states across planet Earth. Today it is a few
 * dozen pins, and the point of the globe is to make the gap feel like an
 * invitation rather than a shortfall.
 */
export function ImaginedGlobe({
  points,
  target,
}: {
  points: GlobePoint[];
  target: number;
}) {
  const [archetype, setArchetype] = useState<string>("all");

  const archetypes = useMemo(
    () => Array.from(new Set(points.map((p) => p.archetype))).sort(),
    [points]
  );

  const shown = useMemo(
    () =>
      archetype === "all"
        ? points
        : points.filter((p) => p.archetype === archetype),
    [points, archetype]
  );

  const markers = useMemo(
    () =>
      shown
        .filter((p) => p.lat !== 0 || p.lng !== 0)
        .map((p) => ({
          location: [p.lat, p.lng] as [number, number],
          size: 0.06,
        })),
    [shown]
  );

  const pct = ((points.length / target) * 100).toFixed(1);

  return (
    <div>
      <div className="flex flex-wrap gap-1.5 mb-4">
        <button
          onClick={() => setArchetype("all")}
          className={`font-mono text-[11px] px-2.5 py-1 border-2 transition-all ${
            archetype === "all"
              ? "border-foreground bg-foreground text-background"
              : "border-border bg-background hover:bg-muted"
          }`}
        >
          All {points.length}
        </button>
        {archetypes.map((a) => (
          <button
            key={a}
            onClick={() => setArchetype(a)}
            className={`font-mono text-[11px] px-2.5 py-1 border-2 transition-all ${
              archetype === a
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-background hover:bg-muted"
            }`}
          >
            {a}
          </button>
        ))}
      </div>

      <div
        className="border-2 border-border shadow-brutal-md p-4 sm:p-8"
        style={{ background: "#0a0a14" }}
      >
        <InternetaGlobe markers={markers} view="archipelago" size={560} />
        <div className="text-center mt-4 font-mono text-xs tracking-[0.3em] text-white/60">
          ::: {shown.length} OF {target.toLocaleString()} IMAGINED · {pct}% :::
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
        {shown.slice(0, 8).map((p) => (
          <a
            key={p.slug}
            href={`/imagined/${p.slug}`}
            className="border-2 border-border bg-background shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all p-2 font-mono"
          >
            <div className="text-lg">{p.icon}</div>
            <div className="text-[11px] font-bold truncate">{p.name}</div>
            <div className="text-[9px] text-muted-foreground truncate">
              {p.capital}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
