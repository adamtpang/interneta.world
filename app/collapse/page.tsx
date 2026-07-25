import type { Metadata } from "next";
import Link from "next/link";
import {
  COLLAPSE_THEORIES,
  COLLAPSE_CONVERGENCE,
  COLLAPSE_OBJECTIONS,
} from "@/lib/data/collapse";

export const metadata: Metadata = {
  title: "Why civilizations collapse | interneta.world",
  description:
    "Dalio, Tainter, Turchin, Ibn Khaldun, Diamond, Toynbee. Eight frameworks for how societies end, what they agree on, and what it means for building new ones.",
  alternates: { canonical: "https://interneta.world/collapse" },
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
const PALETTE_HEX = [
  "#06b6d4",
  "#d946ef",
  "#eab308",
  "#16a34a",
  "#dc2626",
  "#4f46e5",
  "#ea580c",
];

export default function CollapsePage() {
  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
          ::: THE STUDY :::
        </div>
        <h1 className="font-mono font-bold text-4xl sm:text-6xl leading-tight tracking-tight mb-6">
          Why civilizations
          <br />
          <span className="text-muted-foreground">collapse.</span>
        </h1>
        <div className="flex gap-1 mb-8" aria-hidden>
          {PALETTE.map((c, i) => (
            <span key={i} className="block h-2 flex-1" style={{ background: c }} />
          ))}
        </div>

        <section className="mb-14">
          <p className="font-mono text-base sm:text-lg text-foreground/85 leading-relaxed max-w-3xl mb-4">
            Interneta is a bet that new polities are worth founding. That bet is
            only serious if it takes seriously why old ones end. Eight
            frameworks, summarized honestly, including where they disagree and
            where they cut against the case for network states.
          </p>
          <p className="font-mono text-sm text-muted-foreground max-w-3xl">
            These are summaries in our words, written to be read together. Every
            one of the originals is better than the summary. Go read them.
          </p>
        </section>

        {/* Theories */}
        <section className="mb-16 space-y-5">
          {COLLAPSE_THEORIES.map((t) => {
            const accent = PALETTE_HEX[t.paletteIndex % PALETTE_HEX.length];
            return (
              <article
                key={t.thinker}
                className="border-2 border-border bg-background shadow-brutal-md p-5 sm:p-6"
                style={{ borderLeftWidth: 6, borderLeftColor: accent }}
              >
                <div className="flex items-baseline justify-between gap-3 flex-wrap mb-1">
                  <h2 className="font-mono font-bold text-xl sm:text-2xl">
                    {t.thinker}
                  </h2>
                  <span
                    className="font-mono text-[10px] tracking-[0.2em] px-2 py-0.5 border border-border"
                    style={{ color: accent }}
                  >
                    {t.mechanism}
                  </span>
                </div>
                <div className="font-mono text-xs text-muted-foreground italic mb-4">
                  {t.work} · {t.year}
                </div>

                <p className="text-base text-foreground/85 leading-relaxed mb-4">
                  {t.thesis}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-[12px]">
                  <div>
                    <div
                      className="text-[9px] tracking-[0.2em] mb-1"
                      style={{ color: "var(--iw-red)" }}
                    >
                      THE TELL
                    </div>
                    <p className="text-foreground/80 leading-relaxed">{t.tell}</p>
                  </div>
                  <div>
                    <div
                      className="text-[9px] tracking-[0.2em] mb-1"
                      style={{ color: "var(--iw-green)" }}
                    >
                      FOR NETWORK STATES
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      {t.forUs}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* Convergence */}
        <section className="mb-16">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: WHAT THEY AGREE ON :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-6">
            Five points of convergence.
          </h2>
          <ol className="space-y-4">
            {COLLAPSE_CONVERGENCE.map((c, i) => (
              <li
                key={i}
                className="grid grid-cols-[auto_1fr] gap-4 text-base text-foreground/85 leading-relaxed"
              >
                <span
                  className="font-mono font-bold text-2xl tabular-nums"
                  style={{ color: PALETTE_HEX[i % PALETTE_HEX.length] }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{c}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Objections */}
        <section className="mb-16">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: THE CASE AGAINST :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-3">
            Where this argument is weakest.
          </h2>
          <p className="font-mono text-sm text-muted-foreground mb-6 max-w-2xl">
            A page arguing that old things fall apart should state the case
            against its own conclusion.
          </p>
          <div className="space-y-3">
            {COLLAPSE_OBJECTIONS.map((o, i) => (
              <div
                key={i}
                className="border-2 border-border bg-background shadow-brutal-sm p-4"
              >
                <div className="font-mono font-bold text-sm mb-2">
                  <span style={{ color: "var(--iw-red)" }}>OBJECTION · </span>
                  {o.claim}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {o.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* The synthesis */}
        <section className="mb-14 border-2 border-border bg-background shadow-brutal-md p-6 sm:p-8">
          <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-3">
            ::: THE SYNTHESIS :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-5">
            Cohesion is the variable.
          </h2>
          <div className="space-y-4 text-base text-foreground/85 leading-relaxed">
            <p>
              Strip the eight frameworks down and they are mostly describing one
              thing from different angles. Ibn Khaldun calls it asabiyyah and
              says comfort dissolves it. Turchin measures its breakdown as
              elites turning on each other. Toynbee describes the moment
              leadership stops persuading and starts ruling. Tainter shows what
              it costs to hold a society together once the shared purpose is
              gone: you buy it with complexity, and the price keeps rising.
            </p>
            <p>
              Nation-states inherit their members. You are born into one, and
              cohesion has to be manufactured afterward through schooling,
              service, and story. A network state inverts that. Every member
              chose it, and can leave tomorrow. That is asabiyyah as a
              subscription rather than an inheritance, and it has to be renewed
              constantly or the polity simply empties out.
            </p>
            <p>
              That is either the answer to Ibn Khaldun or a very elaborate way
              of restating his problem. A polity nobody is born into cannot
              coast on inherited cohesion for four generations. It also cannot
              survive a single generation of being unpleasant to belong to. The
              honest version of the network-state thesis is not that it escapes
              the cycle. It is that it runs the cycle faster, cheaper, and with
              an exit, so that failure costs a lease instead of a country.
            </p>
            <p className="font-bold">
              And underneath all of it sits the demographic fact. The capable
              world is not replacing itself, and no state has reversed that. In
              a shrinking world, the only polities that grow are the ones people
              choose. That is the entire business model of a network state, and
              it is why this is a strange and specific moment for one to work.
            </p>
          </div>
        </section>

        {/* Reading */}
        <section className="mb-14">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: THE READING LIST :::
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-sm">
            {COLLAPSE_THEORIES.map((t) => (
              <div
                key={t.thinker}
                className="border-2 border-border bg-background shadow-brutal-sm p-3"
              >
                <div className="font-bold">{t.work}</div>
                <div className="text-xs text-muted-foreground">
                  {t.thinker} · {t.year}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cross-links */}
        <section className="border-2 border-border bg-background shadow-brutal-md p-5 font-mono">
          <div className="text-[10px] tracking-[0.3em] text-muted-foreground mb-3">
            ::: KEEP READING :::
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/vitality"
              className="border-2 border-border bg-background shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all p-3"
            >
              <div className="font-bold text-sm mb-1">The Vitality Index →</div>
              <div className="text-xs text-foreground/70">
                Births against build capacity, for every nation-state.
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
            <Link
              href="/constitution"
              className="border-2 border-border bg-background shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all p-3"
            >
              <div className="font-bold text-sm mb-1">The Constitution →</div>
              <div className="text-xs text-foreground/70">
                What we are proposing to build instead.
              </div>
            </Link>
          </div>
        </section>

        <div className="mt-8 flex gap-1" aria-hidden>
          {PALETTE.map((c, i) => (
            <span key={i} className="block h-2 flex-1" style={{ background: c }} />
          ))}
        </div>
      </div>
    </div>
  );
}
