"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  NATION_STATS,
  fmtPop,
  fmtGdp,
  fmtArea,
  type NationStat,
} from "@/lib/data/nation-stats";
import type { SocietyDatabase } from "@/lib/data/societies-database";
import {
  federationScore,
  regionOf,
  locationFlag,
} from "@/lib/utils/society-stats";
import { societyNameToSlug } from "@/lib/utils/slug";

const PALETTE_HEX = [
  "#06b6d4",
  "#d946ef",
  "#eab308",
  "#16a34a",
  "#dc2626",
  "#4f46e5",
  "#ea580c",
];

type Kind = "all" | "nation" | "network";
type SortKey = "default" | "gdp" | "population" | "score" | "name";

type Card = {
  kind: "nation" | "network";
  name: string;
  flag: string;
  region: string;
  href: string;
  gradient: string;
  badge: string; // top-right
  badgeColor: string;
  kpis: { label: string; value: string }[];
  sortGdp: number;
  sortPop: number;
  sortScore: number;
};

function gradientFrom(i: number, j: number): string {
  return `linear-gradient(135deg, ${PALETTE_HEX[i % 7]} 0%, ${PALETTE_HEX[j % 7]} 100%)`;
}

function hash(s: string): number {
  let h = 0;
  for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h;
}

function nationCard(n: NationStat): Card {
  return {
    kind: "nation",
    name: n.name,
    flag: n.flag,
    region: n.region,
    href: n.mirrorSlug ? `/world/${n.mirrorSlug}` : "/compare",
    gradient: gradientFrom(n.paletteIndex, n.paletteIndex + 3),
    badge: `#${n.gdpRank}`,
    badgeColor: "#ffffff",
    kpis: [
      { label: "POP", value: fmtPop(n.population) },
      { label: "GDP", value: fmtGdp(n.gdp) },
      { label: "AREA", value: fmtArea(n.area) },
    ],
    sortGdp: n.gdp,
    sortPop: n.population,
    sortScore: 100 - n.gdpRank, // bigger economies score higher for the default sort
  };
}

function networkCard(s: SocietyDatabase): Card {
  const score = federationScore(s);
  const h = hash(s.name);
  const band =
    score == null
      ? "#64748b"
      : score >= 80
        ? "#16a34a"
        : score >= 65
          ? "#eab308"
          : "#ea580c";
  return {
    kind: "network",
    name: s.name,
    flag: locationFlag(s.location),
    region: regionOf(s.location),
    href: `/societies/${societyNameToSlug(s.name)}`,
    gradient: gradientFrom(h % 7, (h >> 3) % 7),
    badge: score == null ? "?" : String(score),
    badgeColor: band,
    kpis: [
      { label: "FED", value: score == null ? "—" : String(score) },
      { label: "EST", value: s.founded || "—" },
      { label: "LOC", value: (s.location || "Global").split(",")[0] },
    ],
    sortGdp: 0,
    sortPop: 0,
    sortScore: score ?? -1,
  };
}

function CardTile({ c }: { c: Card }) {
  const isNation = c.kind === "nation";
  return (
    <Link
      href={c.href}
      className="group relative block border-2 border-border shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all overflow-hidden"
      style={{ aspectRatio: "4 / 3" }}
    >
      {/* "photo" gradient */}
      <div className="absolute inset-0" style={{ background: c.gradient }} />
      {/* legibility overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.78) 100%)",
        }}
      />

      {/* type chip */}
      <div className="absolute top-2 left-2 font-mono text-[9px] tracking-[0.2em] font-bold px-2 py-1 bg-black/40 text-white backdrop-blur-sm">
        {isNation ? "NATION" : "NETWORK"}
      </div>

      {/* score / rank badge */}
      <div
        className="absolute top-2 right-2 font-mono text-xs font-bold px-2 py-1 backdrop-blur-sm"
        style={{
          background: "rgba(0,0,0,0.45)",
          color: c.badgeColor,
        }}
        title={isNation ? "World GDP rank" : "Federation Score"}
      >
        {c.badge}
      </div>

      {/* bottom content */}
      <div className="absolute inset-x-0 bottom-0 p-3 text-white">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl drop-shadow">{c.flag}</span>
          <span className="font-mono font-bold text-base sm:text-lg leading-tight drop-shadow line-clamp-1">
            {c.name}
          </span>
        </div>
        <div className="flex gap-1.5">
          {c.kpis.map((k) => (
            <div
              key={k.label}
              className="flex-1 bg-black/35 backdrop-blur-sm px-1.5 py-1 font-mono text-center"
            >
              <div className="text-[7px] tracking-widest text-white/60">
                {k.label}
              </div>
              <div className="text-[10px] font-bold truncate">{k.value}</div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}

export function ExploreGrid({ societies }: { societies: SocietyDatabase[] }) {
  const [kind, setKind] = useState<Kind>("all");
  const [region, setRegion] = useState<string>("all");
  const [sortKey, setSortKey] = useState<SortKey>("default");
  const [q, setQ] = useState("");

  const allCards: Card[] = useMemo(
    () => [
      ...NATION_STATS.map(nationCard),
      ...societies.map(networkCard),
    ],
    [societies]
  );

  const regions = useMemo(() => {
    const set = new Set<string>();
    allCards.forEach((c) => set.add(c.region.replace(/^[^A-Za-z]+/, "").trim()));
    return Array.from(set).sort();
  }, [allCards]);

  const filtered = useMemo(() => {
    let cards = allCards;
    if (kind !== "all") cards = cards.filter((c) => c.kind === kind);
    if (region !== "all")
      cards = cards.filter((c) =>
        c.region.replace(/^[^A-Za-z]+/, "").trim() === region
      );
    if (q.trim()) {
      const needle = q.toLowerCase();
      cards = cards.filter((c) => c.name.toLowerCase().includes(needle));
    }
    const sorted = [...cards];
    if (sortKey === "gdp") sorted.sort((a, b) => b.sortGdp - a.sortGdp);
    else if (sortKey === "population")
      sorted.sort((a, b) => b.sortPop - a.sortPop);
    else if (sortKey === "score")
      sorted.sort((a, b) => b.sortScore - a.sortScore);
    else if (sortKey === "name")
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    else sorted.sort((a, b) => b.sortScore - a.sortScore);
    return sorted;
  }, [allCards, kind, region, q, sortKey]);

  const nationCount = allCards.filter((c) => c.kind === "nation").length;
  const networkCount = allCards.filter((c) => c.kind === "network").length;

  return (
    <div className="space-y-6">
      {/* Filter bar */}
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {(
            [
              ["all", `ALL · ${nationCount + networkCount}`],
              ["nation", `🏛 NATIONS · ${nationCount}`],
              ["network", `🌐 NETWORKS · ${networkCount}`],
            ] as [Kind, string][]
          ).map(([k, label]) => (
            <button
              key={k}
              onClick={() => setKind(k)}
              className={`font-mono text-xs px-3 py-2 border-2 transition-all ${
                kind === k
                  ? "border-foreground bg-foreground text-background shadow-brutal-sm"
                  : "border-border bg-background hover:bg-muted"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2">
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search nations and network states..."
            className="border-2 border-border bg-background shadow-brutal-sm px-4 py-2 font-mono text-sm focus:outline-none focus:translate-x-[1px] focus:translate-y-[1px] focus:shadow-none transition-all"
          />
          <select
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value as SortKey)}
            className="border-2 border-border bg-background shadow-brutal-sm px-3 py-2 font-mono text-sm cursor-pointer"
          >
            <option value="default">Sort · Rank</option>
            <option value="gdp">Sort · GDP</option>
            <option value="population">Sort · Population</option>
            <option value="score">Sort · Federation Score</option>
            <option value="name">Sort · Name</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-1.5">
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

        <div className="font-mono text-xs text-muted-foreground">
          Showing {filtered.length} of {allCards.length}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((c) => (
          <CardTile key={`${c.kind}-${c.name}`} c={c} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="border-2 border-border bg-background shadow-brutal-sm p-10 text-center font-mono">
          <div className="text-3xl mb-2">🔍</div>
          <div className="text-sm text-muted-foreground">
            Nothing matches. Loosen the filters.
          </div>
        </div>
      )}
    </div>
  );
}
