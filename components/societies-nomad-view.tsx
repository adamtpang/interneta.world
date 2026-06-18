"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { SocietyDatabase } from "@/lib/data/societies-database";
import {
  RADAR_KEYS,
  RADAR_LABELS,
  type RadarKey,
  federationScore,
  scoreBand,
  locationFlag,
  regionOf,
  deriveTags,
  allTags,
  allRegions,
  initialOf,
  paletteAccent,
} from "@/lib/utils/society-stats";
import { societyNameToSlug } from "@/lib/utils/slug";

type SortKey = "federation" | "qol" | "belonging" | "purpose" | "scalability" | "autonomy" | "economic" | "founded" | "name";

const SORTS: { key: SortKey; label: string }[] = [
  { key: "federation", label: "Federation Score" },
  { key: "qol", label: "Quality of Life" },
  { key: "belonging", label: "Belonging" },
  { key: "purpose", label: "Purpose" },
  { key: "scalability", label: "Scale" },
  { key: "autonomy", label: "Autonomy" },
  { key: "economic", label: "Economic" },
  { key: "founded", label: "Newest" },
  { key: "name", label: "Name (A-Z)" },
];

function cardScore(s: SocietyDatabase, key: SortKey): number {
  if (key === "federation") return federationScore(s) ?? -1;
  if (key === "founded") return parseInt(s.founded || "0", 10);
  if (key === "name") return 0;
  const v = s[key as RadarKey] as number | undefined;
  return typeof v === "number" ? v : -1;
}

const PALETTE_HEX = [
  "#06b6d4", "#d946ef", "#eab308", "#16a34a", "#dc2626", "#4f46e5", "#ea580c",
];

function hashName(str: string): number {
  let h = 0;
  for (const c of str) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h;
}

// nomads.com-style photo tile: gradient "cover", score badge, flag + name,
// the society's three strongest dimensions, region + vibe chips.
function SocietyCard({ s }: { s: SocietyDatabase }) {
  const score = federationScore(s);
  const band = scoreBand(score);
  const badgeColor =
    band === "great"
      ? "#16a34a"
      : band === "good"
        ? "#eab308"
        : band === "fair"
          ? "#ea580c"
          : "#94a3b8";
  const tags = deriveTags(s);
  const region = regionOf(s.location);
  const flag = locationFlag(s.location);
  const slug = societyNameToSlug(s.name);
  const h = hashName(s.name);
  const gradient = `linear-gradient(135deg, ${PALETTE_HEX[h % 7]} 0%, ${PALETTE_HEX[(h >> 3) % 7]} 100%)`;
  const topDims = RADAR_KEYS.map((k) => ({ k, v: s[k] as number | undefined }))
    .filter((d): d is { k: RadarKey; v: number } => typeof d.v === "number")
    .sort((a, b) => b.v - a.v)
    .slice(0, 3);

  return (
    <Link
      href={`/societies/${slug}`}
      className="group relative block border-2 border-border shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all overflow-hidden"
      style={{ minHeight: 220 }}
    >
      <div className="absolute inset-0" style={{ background: gradient }} />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.28) 42%, rgba(0,0,0,0.82) 100%)",
        }}
      />

      {/* top: logo + score */}
      <div className="relative flex items-start justify-between p-2.5">
        {s.icon ? (
          <Image
            src={s.icon}
            alt={`${s.name} logo`}
            width={36}
            height={36}
            unoptimized
            className="w-9 h-9 rounded object-contain bg-white/90 border border-white/30 flex-shrink-0"
          />
        ) : (
          <div
            className="w-9 h-9 rounded flex items-center justify-center font-mono font-bold text-sm text-white flex-shrink-0 border border-white/30"
            style={{ background: paletteAccent(s) }}
          >
            {initialOf(s)}
          </div>
        )}
        <div
          className="font-mono text-xs font-bold px-2 py-1 backdrop-blur-sm"
          style={{ background: "rgba(0,0,0,0.45)", color: badgeColor }}
          title="Federation Score"
        >
          {score == null ? "?" : score}
        </div>
      </div>

      {/* bottom */}
      <div className="absolute inset-x-0 bottom-0 p-3 text-white">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl drop-shadow">{flag}</span>
          <span className="font-mono font-bold text-base sm:text-lg leading-tight drop-shadow line-clamp-1">
            {s.name}
          </span>
        </div>
        {topDims.length > 0 ? (
          <div className="flex gap-1.5 mb-2">
            {topDims.map((d) => (
              <div
                key={d.k}
                className="flex-1 bg-black/35 backdrop-blur-sm px-1.5 py-1 text-center"
              >
                <div className="text-[7px] tracking-widest text-white/60 uppercase truncate">
                  {RADAR_LABELS[d.k]}
                </div>
                <div className="text-[10px] font-bold font-mono">{d.v}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mb-2 font-mono text-[9px] text-white/60">
            scores pending
          </div>
        )}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-mono text-[9px] px-1.5 py-0.5 bg-black/35 backdrop-blur-sm text-white/80">
            {region}
          </span>
          {tags.slice(0, 1).map((t) => (
            <span
              key={t}
              className="font-mono text-[9px] px-1.5 py-0.5 bg-black/35 backdrop-blur-sm text-white/80"
            >
              {t}
            </span>
          ))}
          {s.founded && (
            <span className="font-mono text-[9px] px-1.5 py-0.5 bg-black/35 text-white/60">
              &apos;{String(s.founded).slice(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export function SocietiesNomadView({
  societies,
}: {
  societies: SocietyDatabase[];
}) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("federation");
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [activeRegions, setActiveRegions] = useState<Set<string>>(new Set());

  const tagOptions = useMemo(() => allTags(societies), [societies]);
  const regionOptions = useMemo(() => allRegions(societies), [societies]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return societies.filter((s) => {
      if (q) {
        const hay =
          `${s.name} ${s.mission ?? ""} ${s.location ?? ""} ${s.category ?? ""}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (activeTags.size > 0) {
        const t = new Set(deriveTags(s));
        for (const want of activeTags) if (!t.has(want)) return false;
      }
      if (activeRegions.size > 0) {
        if (!activeRegions.has(regionOf(s.location))) return false;
      }
      return true;
    });
  }, [societies, search, activeTags, activeRegions]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    if (sortKey === "name") {
      arr.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      arr.sort((a, b) => cardScore(b, sortKey) - cardScore(a, sortKey));
    }
    return arr;
  }, [filtered, sortKey]);

  const toggle = (
    setter: React.Dispatch<React.SetStateAction<Set<string>>>,
    key: string
  ) =>
    setter((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  const totalScored = societies.filter((s) => federationScore(s) != null).length;
  const top = filtered.length
    ? Math.max(...filtered.map((s) => federationScore(s) ?? 0))
    : 0;

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="space-y-3">
        <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground">
          ::: STARTUP SOCIETIES :::
        </div>
        <h1 className="font-mono font-bold text-3xl sm:text-5xl leading-tight tracking-tight">
          Find your<br />
          <span className="text-muted-foreground">internet city-state.</span>
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/80 max-w-2xl leading-relaxed">
          Every startup society, popup village, and network state we know about,
          scored on six dimensions of community health: scale, autonomy, quality
          of life, belonging, purpose, and economic. Filter, sort, and find the
          one that matches your One Commandment.
        </p>
      </section>

      {/* Stat bar */}
      <section className="grid grid-cols-3 sm:grid-cols-4 gap-3 font-mono">
        <div className="border-2 border-border bg-background shadow-brutal-sm p-3">
          <div className="text-2xl font-bold tabular-nums">{societies.length}</div>
          <div className="text-[10px] tracking-widest text-muted-foreground mt-1">
            SOCIETIES TRACKED
          </div>
        </div>
        <div className="border-2 border-border bg-background shadow-brutal-sm p-3">
          <div className="text-2xl font-bold tabular-nums">{totalScored}</div>
          <div className="text-[10px] tracking-widest text-muted-foreground mt-1">
            WITH SCORES
          </div>
        </div>
        <div className="border-2 border-border bg-background shadow-brutal-sm p-3">
          <div className="text-2xl font-bold tabular-nums">{regionOptions.length}</div>
          <div className="text-[10px] tracking-widest text-muted-foreground mt-1">
            REGIONS
          </div>
        </div>
        <div className="hidden sm:block border-2 border-border bg-background shadow-brutal-sm p-3">
          <div
            className="text-2xl font-bold tabular-nums"
            style={{ color: "var(--iw-green)" }}
          >
            {top || "—"}
          </div>
          <div className="text-[10px] tracking-widest text-muted-foreground mt-1">
            TOP SCORE
          </div>
        </div>
      </section>

      {/* Search + sort */}
      <section className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search societies, missions, locations..."
            className="border-2 border-border bg-background shadow-brutal-sm px-4 py-3 font-mono text-sm focus:outline-none focus:translate-x-[1px] focus:translate-y-[1px] focus:shadow-none transition-all"
          />
          <select
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value as SortKey)}
            className="border-2 border-border bg-background shadow-brutal-sm px-4 py-3 font-mono text-sm cursor-pointer"
          >
            {SORTS.map((s) => (
              <option key={s.key} value={s.key}>
                Sort by · {s.label}
              </option>
            ))}
          </select>
        </div>

        {/* Region chips */}
        <div className="flex flex-wrap gap-2">
          <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground self-center mr-1">
            REGION:
          </span>
          {regionOptions.map((r) => {
            const active = activeRegions.has(r);
            return (
              <button
                key={r}
                onClick={() => toggle(setActiveRegions, r)}
                className={`font-mono text-xs px-3 py-1.5 border-2 transition-all ${
                  active
                    ? "border-foreground bg-foreground text-background shadow-brutal-sm"
                    : "border-border bg-background hover:bg-muted"
                }`}
              >
                {r}
              </button>
            );
          })}
        </div>

        {/* Tag chips */}
        <div className="flex flex-wrap gap-2">
          <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground self-center mr-1">
            VIBE:
          </span>
          {tagOptions.map((t) => {
            const active = activeTags.has(t);
            return (
              <button
                key={t}
                onClick={() => toggle(setActiveTags, t)}
                className={`font-mono text-xs px-3 py-1.5 border-2 transition-all ${
                  active
                    ? "border-foreground bg-foreground text-background shadow-brutal-sm"
                    : "border-border bg-background hover:bg-muted"
                }`}
              >
                {t}
              </button>
            );
          })}
          {(activeTags.size > 0 || activeRegions.size > 0 || search) && (
            <button
              onClick={() => {
                setActiveTags(new Set());
                setActiveRegions(new Set());
                setSearch("");
              }}
              className="font-mono text-xs px-3 py-1.5 border-2 border-border bg-muted hover:bg-foreground hover:text-background transition-colors"
            >
              [ CLEAR ]
            </button>
          )}
        </div>

        {/* Result count */}
        <div className="font-mono text-xs text-muted-foreground">
          Showing {sorted.length} of {societies.length} societies
        </div>
      </section>

      {/* Grid */}
      <section>
        {sorted.length === 0 ? (
          <div className="border-2 border-border bg-background shadow-brutal-sm p-10 text-center font-mono">
            <div className="text-3xl mb-3">🏝️</div>
            <div className="text-base font-bold mb-2">No societies match.</div>
            <div className="text-sm text-muted-foreground">
              Loosen the filters, or be the first to start one.
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {sorted.map((s) => (
              <SocietyCard key={s.name} s={s} />
            ))}
          </div>
        )}
      </section>

      {/* Footer note */}
      <section className="border-t-2 border-border pt-8 font-mono text-xs text-muted-foreground space-y-2 max-w-2xl">
        <p>
          Federation Score is the average of the six community-health
          dimensions: scale, autonomy, quality of life, belonging, purpose, and
          economic. Scored 0-100. Societies without published scores show "?".
        </p>
        <p>
          Inclusion in this directory does not imply membership in Interneta.
          Each society is sovereign over its One Commandment. To list yours,{" "}
          <a href="/contact" className="underline">
            get in touch
          </a>
          .
        </p>
        <p className="font-bold text-foreground/70">
          Society data powered by{" "}
          <a
            href="https://nsnodes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            nsnodes.com
          </a>
          , the Network State Hub. Interneta is a friendly fork of the nsnodes
          open-source codebase.
        </p>
      </section>
    </div>
  );
}
