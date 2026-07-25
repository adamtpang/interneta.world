import type { Metadata } from "next";
import Link from "next/link";
import { VitalityGrid } from "@/components/vitality-grid";
import {
  VITALITY,
  REPLACEMENT_TFR,
  WORLD_TFR_2026,
  quadrantOf,
  QUADRANT_META,
  type Quadrant,
} from "@/lib/data/vitality-index";

export const metadata: Metadata = {
  title: "Vitality Index · Births and builders | interneta.world",
  description:
    "Every nation-state on two axes that never share a chart: birth rate and friendliness to portable tech projects. They are anti-correlated, and that is the whole story.",
  alternates: { canonical: "https://interneta.world/vitality" },
};

const PALETTE = [
  "var(--iw-cyan)",
  "var(--iw-magenta)",
  "var(--iw-gold)",
  "var(--iw-green)",
  "var(--iw-red)",
  "var(--iw-indigo)",
  "var(--iw-orange)",
];

export default function VitalityPage() {
  const counts: Record<Quadrant, number> = {
    "Vital Builders": 0,
    "Dying Hosts": 0,
    "Young Frontiers": 0,
    "Double Bind": 0,
  };
  VITALITY.forEach((r) => counts[quadrantOf(r)]++);

  const vitalBuilders = VITALITY.filter(
    (r) => quadrantOf(r) === "Vital Builders"
  ).sort((a, b) => b.build - a.build);

  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
          ::: THE VITALITY INDEX :::
        </div>
        <h1 className="font-mono font-bold text-4xl sm:text-6xl leading-tight tracking-tight mb-6">
          The places that can host
          <br />
          <span className="text-muted-foreground">
            have stopped having children.
          </span>
        </h1>
        <div className="flex gap-1 mb-8" aria-hidden>
          {PALETTE.map((c, i) => (
            <span key={i} className="block h-2 flex-1" style={{ background: c }} />
          ))}
        </div>

        <section className="mb-12">
          <p className="font-mono text-base sm:text-lg text-foreground/85 leading-relaxed max-w-3xl mb-4">
            Two axes that almost never appear on the same chart. Births: total
            fertility rate, children per woman. Build: how welcoming a country
            is to a portable tech project like a network school, scored on
            wrappers, visas, regulatory clarity, working language, and state
            receptiveness.
          </p>
          <p className="font-mono text-base sm:text-lg text-foreground/85 leading-relaxed max-w-3xl mb-4">
            Plot them together and the correlation runs the wrong way. Singapore
            is the best-run state on the index at 0.97 children per woman, less
            than half of replacement. South Korea pairs a world-class tech state
            with the lowest fertility on Earth. Niger has 6.6 children per woman
            and almost no institutional capacity to host anything.
          </p>
          <p className="font-mono text-base sm:text-lg text-foreground/85 leading-relaxed max-w-3xl">
            World fertility is {WORLD_TFR_2026} and falling; replacement is{" "}
            {REPLACEMENT_TFR}. The capable world is below it almost without
            exception.
          </p>
        </section>

        {/* Quadrants */}
        <section className="mb-12">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: FOUR QUADRANTS :::
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(Object.keys(QUADRANT_META) as Quadrant[]).map((q) => {
              const meta = QUADRANT_META[q];
              return (
                <div
                  key={q}
                  className="border-2 border-border bg-background shadow-brutal-sm p-4"
                  style={{ borderLeftWidth: 6, borderLeftColor: meta.color }}
                >
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <span
                      className="font-mono font-bold text-base"
                      style={{ color: meta.color }}
                    >
                      {q}
                    </span>
                    <span className="font-mono font-bold tabular-nums text-lg">
                      {counts[q]}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {meta.blurb}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* The finding */}
        <section className="mb-12 border-2 border-border bg-background shadow-brutal-md p-5 sm:p-6">
          <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-3">
            THE RARE QUADRANT
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-4">
            Only {counts["Vital Builders"]} countries are good at both.
          </h2>
          <div className="space-y-2 mb-4">
            {vitalBuilders.map((r) => (
              <div
                key={r.country}
                className="grid grid-cols-[auto_1fr_auto] gap-3 items-baseline font-mono text-sm border-b border-border/40 pb-2"
              >
                <span className="text-xl">{r.flag}</span>
                <div className="min-w-0">
                  <span className="font-bold">{r.country}</span>
                  <div className="text-[11px] text-foreground/70 leading-snug">
                    {r.note}
                  </div>
                </div>
                <span className="tabular-nums whitespace-nowrap">
                  <span style={{ color: "var(--iw-green)" }}>{r.tfr}</span>
                  <span className="text-muted-foreground"> · {r.build}</span>
                </span>
              </div>
            ))}
          </div>
          <p className="font-mono text-sm text-foreground/85 leading-relaxed">
            Two things stand out. <strong>Israel</strong> is the only wealthy
            democracy meaningfully above replacement, and nobody in the
            developed world has copied whatever it is doing. And{" "}
            <strong>Kazakhstan</strong> pairs a signed NS memorandum and AIFC
            common law with a fertility rate a third above replacement, which
            means the network found the rare quadrant on its first move after
            Malaysia. <strong>Uzbekistan</strong> is the most under-priced entry
            on the board: 3.3 children per woman and an IT Park that charges no
            corporate tax.
          </p>
        </section>

        {/* Table */}
        <section className="mb-12">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: THE INDEX :::
          </div>
          <VitalityGrid />
        </section>

        {/* Implication */}
        <section className="mb-12">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: WHAT IT MEANS :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-4">
            Recruitment becomes the only growth strategy.
          </h2>
          <div className="space-y-4 text-base text-foreground/85 leading-relaxed max-w-3xl">
            <p>
              No country has reversed a sustained fall below replacement. Not
              with cash, not with housing, not with childcare. If that holds,
              then for the capable world every increment of growth has to come
              from attracting people who already exist.
            </p>
            <p>
              That is precisely what a network state is built to do. It has no
              birthright citizens, no territory it inherited, and no way to
              compel anyone to stay. Its only growth mechanism is being
              somewhere people choose to go. In a world of shrinking
              populations, the polities that can attract are the ones that
              survive, and attraction is the network state's only skill.
            </p>
            <p>
              Which turns the index into a strategy. Put the legal wrapper where
              the institutions are, and the campus where the young people are.
              Kazakhstan happens to be both at once, which is the luckiest thing
              about the current search.
            </p>
          </div>
        </section>

        {/* Cross-links */}
        <section className="border-2 border-border bg-background shadow-brutal-md p-5 font-mono">
          <div className="text-[10px] tracking-[0.3em] text-muted-foreground mb-3">
            ::: KEEP READING :::
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/collapse"
              className="border-2 border-border bg-background shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all p-3"
            >
              <div className="font-bold text-sm mb-1">Why civilizations collapse →</div>
              <div className="text-xs text-foreground/70">
                Dalio, Tainter, Turchin, Ibn Khaldun, and what they agree on.
              </div>
            </Link>
            <Link
              href="/portal/scout"
              className="border-2 border-border bg-background shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all p-3"
            >
              <div className="font-bold text-sm mb-1">The global scout →</div>
              <div className="text-xs text-foreground/70">
                Twenty candidate sites, tiered, with the priority criteria.
              </div>
            </Link>
            <Link
              href="/success"
              className="border-2 border-border bg-background shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all p-3"
            >
              <div className="font-bold text-sm mb-1">How to measure a state →</div>
              <div className="text-xs text-foreground/70">
                Dalio&apos;s eight measures, ported to the internet.
              </div>
            </Link>
          </div>
        </section>

        <p className="font-mono text-[10px] text-muted-foreground mt-6 max-w-3xl leading-relaxed">
          Fertility figures are 2026 estimates drawn from UN-derived
          aggregators (
          <a
            href="https://statisticstimes.com/demographics/countries-by-fertility-rate.php"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            StatisticsTimes
          </a>
          ,{" "}
          <a
            href="https://database.earth/population/fertility-rate/2026"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            database.earth
          </a>
          ) and vary by a tenth or so between sources; treat them as directional
          rather than precise. Build scores are editorial judgements by
          Interneta on the same logic as the node rubric, not an official index.
        </p>

        <div className="mt-8 flex gap-1" aria-hidden>
          {PALETTE.map((c, i) => (
            <span key={i} className="block h-2 flex-1" style={{ background: c }} />
          ))}
        </div>
      </div>
    </div>
  );
}
