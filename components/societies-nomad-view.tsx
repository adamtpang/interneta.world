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

function ScorePill({ score }: { score: number | null }) {
  const band = scoreBand(score);
  const color =
    band === "great"
      ? "var(--iw-green)"
      : band === "good"
        ? "var(--iw-gold)"
        : band === "fair"
          ? "var(--iw-orange)"
          : "var(--muted)";
  return (
    <div
      className="border-2 border-border shadow-brutal-sm bg-background flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0"
      title="Federation Score (avg of 6 community dimensions)"
    >
      <div
        className="font-mono font-bold text-xl sm:text-2xl tabular-nums"
        style={{ color: score == null ? "var(--muted-foreground)" : color }}
      >
        {score == null ? "?" : score}
      </div>
      <div className="font-mono text-[8px] sm:text-[9px] tracking-widest uppercase text-muted-foreground">
        Federation
      </div>
    </div>
  );
}

function MiniBar({ value, label }: { value?: number; label: string }) {
  const v = typeof value === "number" ? value : null;
  return (
    <div>
      <div className="flex items-center justify-between font-mono text-[10px] mb-0.5">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-bold tabular-nums">{v == null ? "—" : v}</span>
      </div>
      <div className="h-1 bg-muted overflow-hidden">
        <div
          className="h-full transition-all"
          style={{
            width: `${v ?? 0}%`,
            background:
              v == null
                ? "var(--muted)"
                : v >= 80
                  ? "var(--iw-green)"
                  : v >= 65
                    ? "var(--iw-gold)"
                    : "var(--iw-orange)",
          }}
        />
      </div>
    </div>
  );
}

function SocietyCard({ s }: { s: SocietyDatabase }) {
  const score = federationScore(s);
  const tags = deriveTags(s);
  const region = regionOf(s.location);
  const flag = locationFlag(s.location);
  const accent = paletteAccent(s);
  const slug = societyNameToSlug(s.name);

  return (
    <Link
      href={`/societies/${slug}`}
      className="group border-2 border-border bg-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all p-4 sm:p-5 flex flex-col gap-4"
    >
      {/* Header: logo or initial + name + score */}
      <div className="flex items-start gap-3">
        {s.icon ? (
          <Image
            src={s.icon}
            alt={`${s.name} logo`}
            width={56}
            height={56}
            unoptimized
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded border-2 border-border bg-background flex-shrink-0"
          />
        ) : (
          <div
            className="w-14 h-14 sm:w-16 sm:h-16 border-2 border-border flex-shrink-0 flex items-center justify-center font-mono font-bold text-xl sm:text-2xl"
            style={{ background: accent, color: "white" }}
          >
            {initialOf(s)}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-mono font-bold text-base sm:text-lg leading-tight line-clamp-2">
            {s.name}
          </h3>
          <div className="font-mono text-xs text-muted-foreground mt-1 flex items-center gap-1.5 flex-wrap">
            <span>{flag}</span>
            <span className="line-clamp-1">{s.location || "Global"}</span>
          </div>
          {s.founded && (
            <div className="font-mono text-[10px] text-muted-foreground mt-0.5">
              founded {s.founded}
            </div>
          )}
        </div>
        <ScorePill score={score} />
      </div>

      {/* Mission line */}
      {s.mission && (
        <p className="font-mono text-xs text-foreground/70 line-clamp-2 leading-relaxed">
          {s.mission}
        </p>
      )}

      {/* Stat bars */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        {RADAR_KEYS.map((k) => (
          <MiniBar
            key={k}
            label={RADAR_LABELS[k]}
            value={s[k] as number | undefined}
          />
        ))}
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] px-2 py-0.5 border border-border bg-muted/40"
            >
              {t}
            </span>
          ))}
          <span className="font-mono text-[10px] px-2 py-0.5 border border-border bg-muted/40">
            {region}
          </span>
        </div>
      )}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
      </section>
    </div>
  );
}
