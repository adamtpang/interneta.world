"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  SCOUT_SITES,
  SCOUT_TIER_META,
  type ScoutTier,
} from "@/lib/data/global-scout";

const PALETTE_HEX = [
  "#06b6d4",
  "#d946ef",
  "#eab308",
  "#16a34a",
  "#dc2626",
  "#4f46e5",
  "#ea580c",
];

function hash(s: string): number {
  let h = 0;
  for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h;
}

export function ScoutGrid() {
  const [tier, setTier] = useState<ScoutTier | "all">("all");
  const [region, setRegion] = useState<string>("all");

  const regions = useMemo(
    () => Array.from(new Set(SCOUT_SITES.map((s) => s.region))).sort(),
    []
  );

  const shown = useMemo(
    () =>
      SCOUT_SITES.filter(
        (s) =>
          (tier === "all" || s.tier === tier) &&
          (region === "all" || s.region === region)
      ),
    [tier, region]
  );

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        <button
          onClick={() => setTier("all")}
          className={`font-mono text-[11px] px-2.5 py-1 border-2 transition-all ${
            tier === "all"
              ? "border-foreground bg-foreground text-background"
              : "border-border bg-background hover:bg-muted"
          }`}
        >
          All tiers
        </button>
        {(["S", "A", "B", "C"] as ScoutTier[]).map((t) => (
          <button
            key={t}
            onClick={() => setTier(t)}
            className={`font-mono text-[11px] px-2.5 py-1 border-2 transition-all ${
              tier === t
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-background hover:bg-muted"
            }`}
            style={tier === t ? {} : { color: SCOUT_TIER_META[t].color }}
          >
            {SCOUT_TIER_META[t].label}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5 mb-5">
        <button
          onClick={() => setRegion("all")}
          className={`font-mono text-[11px] px-2.5 py-1 border-2 transition-all ${
            region === "all"
              ? "border-foreground bg-foreground text-background"
              : "border-border bg-background hover:bg-muted"
          }`}
        >
          All regions
        </button>
        {regions.map((r) => (
          <button
            key={r}
            onClick={() => setRegion(r)}
            className={`font-mono text-[11px] px-2.5 py-1 border-2 transition-all ${
              region === r
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-background hover:bg-muted"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      <div className="font-mono text-xs text-muted-foreground mb-4">
        Showing {shown.length} of {SCOUT_SITES.length} sites
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {shown.map((s) => {
          const h = hash(s.slug);
          const gradient = `linear-gradient(135deg, ${PALETTE_HEX[h % 7]} 0%, ${PALETTE_HEX[(h >> 3) % 7]} 100%)`;
          const meta = SCOUT_TIER_META[s.tier];
          return (
            <div
              key={s.slug}
              className="border-2 border-border bg-background shadow-brutal-md flex flex-col overflow-hidden"
            >
              {/* Cover band */}
              <div className="relative" style={{ background: gradient, height: 86 }}>
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 100%)",
                  }}
                />
                <div className="absolute top-2 left-2 font-mono text-[9px] font-bold px-1.5 py-0.5 bg-black/45 text-white backdrop-blur-sm">
                  {s.region.toUpperCase()}
                </div>
                <div
                  className="absolute top-2 right-2 font-mono text-[10px] font-bold px-1.5 py-0.5 backdrop-blur-sm"
                  style={{ background: "rgba(0,0,0,0.5)", color: meta.color }}
                >
                  {meta.label}
                </div>
                <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between gap-2">
                  <div className="min-w-0">
                    <div className="font-mono font-bold text-white text-base leading-tight drop-shadow truncate">
                      {s.flag} {s.site}
                    </div>
                    <div className="font-mono text-[10px] text-white/75 truncate">
                      {s.country}
                    </div>
                  </div>
                  <div
                    className="font-mono font-bold text-2xl tabular-nums text-white drop-shadow flex-shrink-0"
                    title="Quick-scan score, raw before gate caps, editorial"
                  >
                    {s.quickScore}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-3 flex flex-col gap-2 flex-1">
                <div className="font-mono text-[11px] font-bold" title={s.lane}>
                  {s.lane}
                </div>
                <div className="space-y-1 font-mono text-[10px] leading-snug">
                  <div>
                    <span className="text-muted-foreground">WRAPPER · </span>
                    <span className="text-foreground/85">{s.wrapper}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">VISA · </span>
                    <span className="text-foreground/85">{s.visa}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">BEDS · </span>
                    <span className="text-foreground/85">{s.capacity}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">CHAMPIONS · </span>
                    <span className="text-foreground/85">{s.champions}</span>
                  </div>
                </div>
                <p className="text-[11px] text-foreground/75 leading-snug flex-1">
                  {s.note}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {s.deepDive && (
                    <Link
                      href={s.deepDive}
                      className="font-mono text-[10px] font-bold px-2 py-1 border-2 border-border bg-background hover:bg-muted transition-colors"
                    >
                      [ FULL BREAKDOWN → ]
                    </Link>
                  )}
                  {s.source && (
                    <a
                      href={s.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] px-2 py-1 border-2 border-border bg-background hover:bg-muted transition-colors text-muted-foreground"
                    >
                      {s.source.label} →
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
