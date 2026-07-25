"use client";

import { useMemo, useState } from "react";
import {
  VITALITY,
  REPLACEMENT_TFR,
  quadrantOf,
  QUADRANT_META,
  type Quadrant,
} from "@/lib/data/vitality-index";

type SortKey = "vitality" | "tfr" | "build" | "name";

export function VitalityGrid() {
  const [sort, setSort] = useState<SortKey>("vitality");
  const [quad, setQuad] = useState<Quadrant | "all">("all");

  const rows = useMemo(() => {
    const scored = VITALITY.map((r) => ({
      ...r,
      quadrant: quadrantOf(r),
      // Vitality = can it host the future AND produce a next generation.
      // Fertility is normalized against replacement and capped, so a TFR of
      // 6 does not swamp institutional capacity.
      vitality: Math.round(
        (Math.min(r.tfr / REPLACEMENT_TFR, 1.6) / 1.6) * 50 + (r.build / 100) * 50
      ),
    }));
    const filtered =
      quad === "all" ? scored : scored.filter((r) => r.quadrant === quad);
    return filtered.sort((a, b) => {
      if (sort === "tfr") return b.tfr - a.tfr;
      if (sort === "build") return b.build - a.build;
      if (sort === "name") return a.country.localeCompare(b.country);
      return b.vitality - a.vitality;
    });
  }, [sort, quad]);

  const quads: (Quadrant | "all")[] = [
    "all",
    "Vital Builders",
    "Dying Hosts",
    "Young Frontiers",
    "Double Bind",
  ];

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {quads.map((q) => (
          <button
            key={q}
            onClick={() => setQuad(q)}
            className={`font-mono text-[11px] px-2.5 py-1 border-2 transition-all ${
              quad === q
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-background hover:bg-muted"
            }`}
            style={
              quad === q || q === "all"
                ? {}
                : { color: QUADRANT_META[q as Quadrant].color }
            }
          >
            {q === "all" ? "All countries" : q}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {(
          [
            ["vitality", "Sort · Vitality"],
            ["tfr", "Sort · Births"],
            ["build", "Sort · Build"],
            ["name", "Sort · Name"],
          ] as [SortKey, string][]
        ).map(([k, label]) => (
          <button
            key={k}
            onClick={() => setSort(k)}
            className={`font-mono text-[11px] px-2.5 py-1 border-2 transition-all ${
              sort === k
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-background hover:bg-muted"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="font-mono text-xs text-muted-foreground mb-3">
        Showing {rows.length} of {VITALITY.length}
      </div>

      {/* Table */}
      <div className="border-2 border-border bg-background shadow-brutal-md overflow-x-auto">
        <table className="w-full font-mono text-xs min-w-[640px]">
          <thead>
            <tr className="border-b-2 border-border bg-muted/30">
              <th className="text-left p-2 font-bold">#</th>
              <th className="text-left p-2 font-bold">Country</th>
              <th className="text-right p-2 font-bold">Births</th>
              <th className="text-left p-2 font-bold w-[120px]">vs 2.1</th>
              <th className="text-right p-2 font-bold">Build</th>
              <th className="text-left p-2 font-bold">Quadrant</th>
              <th className="text-right p-2 font-bold">Vitality</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => {
              const meta = QUADRANT_META[r.quadrant];
              const pct = Math.min((r.tfr / 4) * 100, 100);
              const above = r.tfr >= REPLACEMENT_TFR;
              return (
                <tr
                  key={r.country}
                  className="border-b border-border/40 hover:bg-muted/20 align-top"
                  title={r.note}
                >
                  <td className="p-2 text-muted-foreground tabular-nums">
                    {i + 1}
                  </td>
                  <td className="p-2">
                    <span className="mr-1.5">{r.flag}</span>
                    <span className="font-bold">{r.country}</span>
                    <div className="text-[10px] text-muted-foreground">
                      {r.region}
                    </div>
                  </td>
                  <td
                    className="p-2 text-right tabular-nums font-bold"
                    style={{ color: above ? "var(--iw-green)" : "var(--iw-red)" }}
                  >
                    {r.tfr.toFixed(2)}
                  </td>
                  <td className="p-2">
                    <div className="h-2 bg-muted border border-border relative">
                      <div
                        className="h-full"
                        style={{
                          width: `${pct}%`,
                          background: above
                            ? "var(--iw-green)"
                            : "var(--iw-red)",
                        }}
                      />
                      {/* replacement marker at 2.1 of 4.0 */}
                      <div
                        className="absolute top-0 bottom-0 w-px bg-foreground"
                        style={{ left: `${(REPLACEMENT_TFR / 4) * 100}%` }}
                        title="Replacement rate 2.1"
                      />
                    </div>
                  </td>
                  <td className="p-2 text-right tabular-nums font-bold">
                    {r.build}
                  </td>
                  <td className="p-2">
                    <span
                      className="text-[10px] px-1.5 py-0.5 border border-border whitespace-nowrap"
                      style={{ color: meta.color }}
                    >
                      {r.quadrant}
                    </span>
                  </td>
                  <td className="p-2 text-right tabular-nums font-bold text-base">
                    {r.vitality}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="font-mono text-[10px] text-muted-foreground mt-3 leading-relaxed max-w-3xl">
        Vitality blends both axes: fertility normalized against replacement and
        capped at 1.6x (so a TFR of 6 does not swamp institutional capacity),
        plus build score, each worth 50. Hover a row for the note. Births are
        2026 estimates; build scores are editorial, on the same logic as the
        node rubric.
      </p>
    </div>
  );
}
