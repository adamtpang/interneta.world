import type { Metadata } from "next";
import Link from "next/link";
import { IMAGINED_STATES } from "@/lib/data/imagined-states";
import { locationFlag } from "@/lib/utils/society-stats";

export const metadata: Metadata = {
  title: "Imagined · 1000 Network States | interneta.world",
  description:
    "What if every public figure with a clearly stated worldview founded a network state? A speculative catalog of 1000 imagined member states. Today: 36.",
  alternates: { canonical: "https://interneta.world/imagined" },
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

const TARGET = 1000;

export default function ImaginedPage() {
  const count = IMAGINED_STATES.length;
  const remaining = TARGET - count;

  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero */}
        <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
          ::: IMAGINED MEMBER STATES :::
        </div>
        <h1 className="font-mono font-bold text-4xl sm:text-6xl leading-tight tracking-tight mb-8">
          A thousand<br />
          <span className="text-muted-foreground">internet city-states.</span>
        </h1>

        <div className="flex gap-1 mb-10" aria-hidden>
          {PALETTE.map((c, i) => (
            <span key={i} className="block h-2 flex-1" style={{ background: c }} />
          ))}
        </div>

        <p className="font-mono text-base sm:text-lg text-foreground/80 leading-relaxed max-w-3xl mb-6">
          Balaji says every network state founds itself on a One Commandment, a
          single moral inversion that defines its way of life. So what would
          today's most distinctive public figures build, if they built one?
        </p>
        <p className="font-mono text-base text-foreground/70 leading-relaxed max-w-3xl mb-6">
          This is a thought experiment. None of these people have endorsed
          anything. Each entry projects what a member state might look like if
          its named founder ran the constitutional convention. Some you would
          want to live in. Some you definitely would not. That is the point of
          a federation.
        </p>
        <p className="font-mono text-sm text-muted-foreground italic mb-12 max-w-3xl">
          The first batch is a starting list. Send us yours via{" "}
          <a href="/contact" className="underline">
            contact
          </a>{" "}
          or open a PR on{" "}
          <a
            href="https://github.com/adamtpang/interneta.world"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>

        {/* Stat bar */}
        <div className="grid grid-cols-3 gap-3 mb-12 font-mono">
          <div className="border-2 border-border bg-background shadow-brutal-sm p-4">
            <div className="text-3xl font-bold tabular-nums">{count}</div>
            <div className="text-[10px] tracking-widest text-muted-foreground mt-1">
              IMAGINED
            </div>
          </div>
          <div className="border-2 border-border bg-background shadow-brutal-sm p-4">
            <div className="text-3xl font-bold tabular-nums text-muted-foreground">
              {remaining.toLocaleString()}
            </div>
            <div className="text-[10px] tracking-widest text-muted-foreground mt-1">
              TO GO
            </div>
          </div>
          <div className="border-2 border-border bg-background shadow-brutal-sm p-4">
            <div className="text-3xl font-bold tabular-nums">
              {TARGET.toLocaleString()}
            </div>
            <div className="text-[10px] tracking-widest text-muted-foreground mt-1">
              TARGET
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {IMAGINED_STATES.map((s, i) => {
            const accent = PALETTE[s.paletteIndex % PALETTE.length];
            return (
              <article
                key={`${s.founder}-${s.stateName}`}
                className="border-2 border-border bg-background shadow-brutal-md p-5 sm:p-6 flex flex-col gap-4"
              >
                <div
                  className="font-mono text-[10px] tracking-[0.3em] uppercase pb-2 border-b-2"
                  style={{ borderColor: accent, color: accent }}
                >
                  #{String(i + 1).padStart(3, "0")} · {s.stateName}
                </div>

                <h2
                  className="font-mono font-bold text-3xl sm:text-4xl leading-[0.95] tracking-tight"
                  style={{ color: accent }}
                >
                  {s.stateName}
                </h2>

                <div className="font-mono text-xs">
                  <div className="text-muted-foreground">Founder</div>
                  <div className="font-bold">{s.founder}</div>
                  <div className="text-muted-foreground italic">
                    {s.founderRole}
                  </div>
                </div>

                <blockquote
                  className="font-mono italic text-sm border-l-4 pl-4"
                  style={{ borderColor: accent }}
                >
                  &ldquo;{s.oneCommandment}&rdquo;
                </blockquote>

                <p className="text-sm text-foreground/80 leading-relaxed">
                  {s.theme}
                </p>

                <div className="font-mono text-xs space-y-2 mt-auto pt-3 border-t-2 border-border">
                  <div>
                    <span className="text-muted-foreground">Citizens · </span>
                    {s.citizens}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>{locationFlag(s.capital)}</span>
                    <span className="text-muted-foreground">Capital ·</span>
                    <span className="font-bold">{s.capital}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 border-2 border-border bg-background shadow-brutal-md p-6 sm:p-8 font-mono">
          <div className="text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: HELP US REACH 1000 :::
          </div>
          <h2 className="font-bold text-2xl sm:text-3xl mb-4">
            Who would you found a state with?
          </h2>
          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-6 max-w-2xl">
            Suggest a founder. Suggest a One Commandment. Suggest a citizenry.
            We will add it to the catalog. The federation grows by what its
            citizens imagine.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/adamtpang/interneta.world/blob/main/lib/data/imagined-states.ts"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-border bg-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-5 py-3 font-bold text-sm"
            >
              [ EDIT ON GITHUB ]
            </a>
            <Link
              href="/contact"
              className="border-2 border-border bg-foreground text-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-5 py-3 font-bold text-sm"
            >
              [ SUBMIT ONE ]
            </Link>
          </div>
        </div>

        <div className="mt-10 flex gap-1" aria-hidden>
          {PALETTE.map((c, i) => (
            <span key={i} className="block h-2 flex-1" style={{ background: c }} />
          ))}
        </div>
      </div>
    </div>
  );
}
