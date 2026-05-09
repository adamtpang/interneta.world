import type { Metadata } from "next";
import Link from "next/link";
import { WORLD_MIRRORS } from "@/lib/data/world-mirrors";

export const metadata: Metadata = {
  title: "World · Internet versions of nation-states | interneta.world",
  description:
    "Just as USDC is the internet version of USD, every nation-state has a network-state mirror. Browse the catalog: Honduras, El Salvador, UAE, Estonia, Singapore, Canada, and more.",
  alternates: { canonical: "https://interneta.world/world" },
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

const TARGET = 195;

export default function WorldPage() {
  const count = WORLD_MIRRORS.length;
  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
          ::: WORLD MIRRORS :::
        </div>
        <h1 className="font-mono font-bold text-4xl sm:text-6xl leading-tight tracking-tight mb-8">
          The internet version<br />
          <span className="text-muted-foreground">of every country.</span>
        </h1>

        <div className="flex gap-1 mb-10" aria-hidden>
          {PALETTE.map((c, i) => (
            <span key={i} className="block h-2 flex-1" style={{ background: c }} />
          ))}
        </div>

        <p className="font-mono text-base sm:text-lg text-foreground/80 leading-relaxed max-w-3xl mb-6">
          USDC is the internet version of the dollar. The dollar didn't go
          away; it gained a new substrate. Every nation-state has the same
          option. A network-state mirror that lives on top of it, that does
          not replace it, that recruits its citizens by choice instead of by
          birth.
        </p>
        <p className="font-mono text-base text-foreground/70 leading-relaxed max-w-3xl mb-12">
          For each country, we identify the existing special economic zones,
          the candidate founders, the city sites, and the moral reason a
          mirror is plausible right now. {count} of {TARGET} mapped. The list
          is open.
        </p>

        <div className="grid grid-cols-3 gap-3 mb-12 font-mono">
          <div className="border-2 border-border bg-background shadow-brutal-sm p-4">
            <div className="text-3xl font-bold tabular-nums">{count}</div>
            <div className="text-[10px] tracking-widest text-muted-foreground mt-1">
              MIRRORS MAPPED
            </div>
          </div>
          <div className="border-2 border-border bg-background shadow-brutal-sm p-4">
            <div className="text-3xl font-bold tabular-nums text-muted-foreground">
              {TARGET - count}
            </div>
            <div className="text-[10px] tracking-widest text-muted-foreground mt-1">
              TO GO
            </div>
          </div>
          <div className="border-2 border-border bg-background shadow-brutal-sm p-4">
            <div className="text-3xl font-bold tabular-nums">{TARGET}</div>
            <div className="text-[10px] tracking-widest text-muted-foreground mt-1">
              UN NATION-STATES
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WORLD_MIRRORS.map((m) => {
            const accent = PALETTE[m.paletteIndex % PALETTE.length];
            return (
              <Link
                key={m.slug}
                href={`/world/${m.slug}`}
                className="group border-2 border-border bg-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all p-5 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="text-5xl" aria-hidden>
                    {m.flag}
                  </div>
                  <div
                    className="font-mono text-[10px] tracking-[0.2em] uppercase"
                    style={{ color: accent }}
                  >
                    {m.countryName}
                  </div>
                </div>

                <h2
                  className="font-mono font-bold text-2xl sm:text-3xl leading-[0.95]"
                  style={{ color: accent }}
                >
                  {m.internetName}
                </h2>

                <blockquote
                  className="font-mono italic text-xs border-l-4 pl-3"
                  style={{ borderColor: accent }}
                >
                  &ldquo;{m.oneCommandment}&rdquo;
                </blockquote>

                <div className="font-mono text-[10px] text-muted-foreground space-y-1 mt-auto pt-3 border-t-2 border-border">
                  <div>
                    <span className="tracking-widest">SEZ:</span>{" "}
                    {m.specialEconomicZones[0]}
                  </div>
                  <div>
                    <span className="tracking-widest">FOUNDER:</span>{" "}
                    {m.founderCandidates[0]}
                  </div>
                  <div
                    className="text-[10px] tracking-[0.2em] mt-2 group-hover:underline"
                    style={{ color: accent }}
                  >
                    [ READ PROFILE → ]
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 border-2 border-border bg-background shadow-brutal-md p-6 sm:p-8 font-mono">
          <div className="text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: MAP THE REST :::
          </div>
          <h2 className="font-bold text-2xl sm:text-3xl mb-4">
            {TARGET - count} countries to go.
          </h2>
          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-6 max-w-2xl">
            Know a country? Know its special economic zones? Know who would
            run its internet mirror? Open a pull request.
          </p>
          <a
            href="https://github.com/adamtpang/interneta.world/blob/main/lib/data/world-mirrors.ts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-border bg-foreground text-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-5 py-3 font-bold text-sm"
          >
            [ EDIT ON GITHUB ]
          </a>
        </div>
      </div>
    </div>
  );
}
