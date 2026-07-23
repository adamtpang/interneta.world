import type { Metadata } from "next";
import Link from "next/link";
import { ScoutGrid } from "@/components/scout-grid";
import { PRIORITY_CRITERIA, SCOUT_SITES } from "@/lib/data/global-scout";

export const metadata: Metadata = {
  title: "Global Node Scout · Earth, crawled | interneta.world",
  description:
    "The world built 6,000+ special economic zones for a customer that barely existed. Network schools are that customer. Twenty candidate sites across Earth, tiered S to C.",
  alternates: { canonical: "https://interneta.world/portal/scout" },
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

export default function ScoutPage() {
  const counts = { S: 0, A: 0, B: 0, C: 0 } as Record<string, number>;
  SCOUT_SITES.forEach((s) => counts[s.tier]++);

  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <Link
          href="/portal"
          className="font-mono text-xs underline text-muted-foreground mb-6 inline-block"
        >
          ← back to Portal
        </Link>

        {/* Hero */}
        <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
          ::: GLOBAL NODE SCOUT :::
        </div>
        <h1 className="font-mono font-bold text-4xl sm:text-6xl leading-tight tracking-tight mb-6">
          Six thousand zones.
          <br />
          <span className="text-muted-foreground">One customer.</span>
        </h1>
        <div className="flex gap-1 mb-8" aria-hidden>
          {PALETTE.map((c, i) => (
            <span key={i} className="block h-2 flex-1" style={{ background: c }} />
          ))}
        </div>

        {/* ICP framing */}
        <section className="mb-12">
          <p className="font-mono text-base sm:text-lg text-foreground/85 leading-relaxed max-w-3xl mb-4">
            The world has built somewhere between 5,400 and 6,200+ special
            economic zones across ~180 countries, and most sit under-filled.
            Every one was built for a customer that barely existed: a portable
            population of high-earning builders who can land anywhere,
            incorporate anywhere, and leave anywhere.
          </p>
          <p className="font-mono text-base sm:text-lg text-foreground/85 leading-relaxed max-w-3xl mb-4">
            That customer exists now. A network school is the ideal customer
            profile of the entire SEZ industry: a thousand vetted, high-income,
            law-abiding residents who arrive as a bloc, spend as a bloc, and
            leave a campus behind. The zones are the supply side. NS is the
            demand side. This page is the matchmaking.
          </p>
          <p className="font-mono text-xs text-muted-foreground max-w-3xl">
            Zone counts:{" "}
            <a
              href="https://unctad.org/system/files/official-document/WIR2019_CH4.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              UNCTAD (~5,400)
            </a>{" "}
            ·{" "}
            <a
              href="https://sezexplorer.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              SEZ Explorer (6,200+)
            </a>{" "}
            · mapped beautifully by the{" "}
            <a
              href="https://www.openzonemap.com/map"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Open Zone Map
            </a>{" "}
            (Adrianople Group).
          </p>
        </section>

        {/* Priority criteria */}
        <section className="mb-12">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: THE PRIORITY CRITERIA :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-3">
            What NS actually optimizes for, ranked.
          </h2>
          <p className="font-mono text-sm text-muted-foreground mb-6 max-w-2xl">
            Distilled from the live ns.com/search intake, the Forest City
            post-mortem, and the Kazakhstan MOU terms. P0 outranks everything
            below it.
          </p>
          <div className="space-y-3">
            {PRIORITY_CRITERIA.map((c, i) => (
              <div
                key={c.p}
                className="border-l-4 pl-4 py-1.5"
                style={{ borderColor: PALETTE[i % PALETTE.length] }}
              >
                <div className="font-mono font-bold text-base flex items-center gap-2">
                  <span
                    className="text-xs tabular-nums px-1.5 py-0.5 border border-border"
                    style={{ color: PALETTE[i % PALETTE.length] }}
                  >
                    {c.p}
                  </span>
                  <span>{c.name}</span>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mt-1">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* The grid */}
        <section className="mb-12">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: EARTH, CRAWLED :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-3">
            {SCOUT_SITES.length} candidate sites, tiered.
          </h2>
          <p className="font-mono text-sm text-muted-foreground mb-6 max-w-2xl">
            S executes ({counts.S}), A pursues the signature ({counts.A}), B
            tracks ({counts.B}), C watches ({counts.C}). Quick-scan scores are
            raw against the 9-axis rubric before gate caps; entries with a full
            breakdown link to their country search.
          </p>
          <ScoutGrid />
        </section>

        {/* Submission pipeline */}
        <section className="border-2 border-border bg-background shadow-brutal-md p-5 sm:p-6 font-mono">
          <div className="text-[10px] tracking-[0.3em] text-muted-foreground mb-3">
            ::: FROM SCOUT TO SUBMISSION :::
          </div>
          <p className="text-sm sm:text-base text-foreground/85 leading-relaxed mb-4 max-w-3xl">
            The ns.com/search intake pays $100 to $100,000 for winning site
            proposals. The pipeline: validate an S or A tier site here, then
            fill their intake to spec: every visa with receipts, three named
            champions with intro paths, zoning verified in writing, beds
            counted, AQI measured, photos taken. Precision beats volume.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/portal"
              className="border-2 border-border bg-foreground text-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-5 py-3 font-bold text-sm"
            >
              [ THE SHORTLIST ]
            </Link>
            <a
              href="https://ns.com/search"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-border bg-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-5 py-3 font-bold text-sm"
            >
              [ NS.COM/SEARCH → ]
            </a>
          </div>
        </section>

        <div className="mt-10 flex gap-1" aria-hidden>
          {PALETTE.map((c, i) => (
            <span key={i} className="block h-2 flex-1" style={{ background: c }} />
          ))}
        </div>
      </div>
    </div>
  );
}
