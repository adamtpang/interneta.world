import type { Metadata } from "next";
import Link from "next/link";
import {
  FOUNDER_PIECES,
  NODE_CRITERIA,
  READINESS_SIGNALS,
  CENSUS_KPIS,
  SEVEN_STEPS,
} from "@/lib/data/playbook";

export const metadata: Metadata = {
  title: "Playbook · How to win the network state game | interneta.world",
  description:
    "Who should found a network state? How do you choose your next node? When do you expand? How do you measure success? The Interneta founder playbook.",
  alternates: { canonical: "https://interneta.world/playbook" },
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

// Worked example: Don't Die scored on the six founder pieces (0-3).
const DONT_DIE_SCORES: Record<string, { score: number; note: string }> = {
  why: { score: 3, note: "'Don't die' is the strongest why in the catalog. Solve death." },
  distribution: { score: 3, note: "Millions of followers, a Netflix documentary, a daily-content machine." },
  capital: { score: 3, note: "Self-funded from a $800M PayPal-era exit. No raise needed." },
  engineering: { score: 2, note: "Blueprint already runs measurement software; needs a census + passport layer." },
  resources: { score: 2, note: "Venice ops exist; a multi-node operator is the open hire." },
  social: { score: 3, note: "Polarizing but deeply trusted by the longevity community he leads." },
};

function ScoreDots({ score }: { score: number }) {
  return (
    <div className="flex gap-1" aria-label={`${score} of 3`}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="block w-2.5 h-2.5 border border-border"
          style={{ background: i < score ? "var(--iw-green)" : "transparent" }}
        />
      ))}
    </div>
  );
}

export default function PlaybookPage() {
  const dontDieTotal = Object.values(DONT_DIE_SCORES).reduce(
    (a, b) => a + b.score,
    0
  );

  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero */}
        <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
          ::: THE FOUNDER PLAYBOOK :::
        </div>
        <h1 className="font-mono font-bold text-4xl sm:text-6xl leading-tight tracking-tight mb-8">
          How to win<br />
          <span className="text-muted-foreground">the network state game.</span>
        </h1>
        <div className="flex gap-1 mb-10" aria-hidden>
          {PALETTE.map((c, i) => (
            <span key={i} className="block h-2 flex-1" style={{ background: c }} />
          ))}
        </div>
        <p className="font-mono text-base sm:text-lg text-foreground/85 leading-relaxed max-w-3xl mb-6">
          Before you crowdfund a single apartment, get the puzzle pieces in
          place. This is the homework: who should found one, where to put the
          next node, when to expand, and how to measure whether it is working.
        </p>
        <p className="font-mono text-sm text-muted-foreground mb-12 max-w-3xl">
          Adapted from Balaji Srinivasan's <em>The Network State</em> and the
          operating lessons of the popup-city wave: Zuzalu, Edge Esmeralda,
          Network School, Próspera.
        </p>

        {/* Jump nav */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-20 font-mono text-xs">
          {[
            { href: "#founder", label: "1 · FOUNDER TEST" },
            { href: "#node", label: "2 · NODE SELECT" },
            { href: "#expand", label: "3 · WHEN TO EXPAND" },
            { href: "#measure", label: "4 · HOW TO MEASURE" },
            { href: "#steps", label: "5 · THE 7 STEPS" },
          ].map((j) => (
            <a
              key={j.href}
              href={j.href}
              className="border-2 border-border bg-background shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all px-3 py-2 text-center"
            >
              {j.label}
            </a>
          ))}
        </div>

        {/* 1. Founder test */}
        <section id="founder" className="mb-24 scroll-mt-24">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: PART ONE :::
          </div>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl mb-4">
            Who should found a network state?
          </h2>
          <p className="font-mono text-base text-foreground/80 leading-relaxed max-w-3xl mb-8">
            A founding team must cover six puzzle pieces. A solo founder rarely
            holds all six, which is why most network states, like most
            companies, are started by cofounders. Score a candidate 0-3 on each
            axis. Below 12 of 18, find a cofounder before you find a building.
          </p>

          <div className="space-y-4 mb-12">
            {FOUNDER_PIECES.map((p, i) => {
              const accent = PALETTE_HEX[i % PALETTE_HEX.length];
              return (
                <div
                  key={p.key}
                  className="border-2 border-border bg-background shadow-brutal-sm p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0" aria-hidden>
                      {p.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="font-mono font-bold text-lg"
                        style={{ color: accent }}
                      >
                        {p.name}
                      </h3>
                      <p className="font-mono text-sm font-bold text-foreground/70 mb-2">
                        {p.question}
                      </p>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {p.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Worked example */}
          <div className="border-2 border-border bg-background shadow-brutal-md p-6">
            <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-2">
              ::: WORKED EXAMPLE :::
            </div>
            <div className="flex items-baseline justify-between flex-wrap gap-2 mb-5">
              <h3 className="font-mono font-bold text-2xl">
                🧬 Don&apos;t Die · Bryan Johnson
              </h3>
              <div className="font-mono text-sm">
                <span
                  className="font-bold text-2xl tabular-nums"
                  style={{ color: "var(--iw-green)" }}
                >
                  {dontDieTotal}
                </span>
                <span className="text-muted-foreground"> / 18</span>
              </div>
            </div>
            <div className="space-y-3">
              {FOUNDER_PIECES.map((p) => {
                const s = DONT_DIE_SCORES[p.key];
                return (
                  <div
                    key={p.key}
                    className="grid grid-cols-[110px_auto_1fr] gap-3 items-center font-mono text-xs"
                  >
                    <div className="font-bold flex items-center gap-1.5">
                      <span>{p.icon}</span>
                      <span className="hidden sm:inline">{p.name}</span>
                    </div>
                    <ScoreDots score={s.score} />
                    <div className="text-foreground/70 leading-snug">
                      {s.note}
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="font-mono text-xs text-muted-foreground italic mt-5">
              Read the full pitch at{" "}
              <Link href="/imagined/dont-die" className="underline">
                /imagined/dont-die
              </Link>
              . The open piece, Resources, is the cofounder Bryan should recruit:
              a multi-node operator.
            </p>
          </div>
        </section>

        {/* 2. Node selection */}
        <section id="node" className="mb-24 scroll-mt-24">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: PART TWO :::
          </div>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl mb-4">
            How to choose your next node.
          </h2>
          <p className="font-mono text-base text-foreground/80 leading-relaxed max-w-3xl mb-8">
            A node is a place, and not all places are equal. Score candidate
            cities on these six criteria. The best first node is rarely the
            cheapest or the most exotic; it is the one where the legal scaffold
            and the existing community already overlap.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {NODE_CRITERIA.map((c, i) => {
              const accent = PALETTE_HEX[i % PALETTE_HEX.length];
              return (
                <div
                  key={c.name}
                  className="border-l-4 pl-4 py-2"
                  style={{ borderColor: accent }}
                >
                  <h3 className="font-mono font-bold text-base mb-1 flex items-center gap-2">
                    <span>{c.icon}</span>
                    <span>{c.name}</span>
                  </h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">
                    {c.detail}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="font-mono text-sm text-muted-foreground mt-6">
            See the{" "}
            <Link href="/world" className="underline">
              world catalog
            </Link>{" "}
            for 30 countries already scored on their legal scaffolds and city
            sites.
          </p>
        </section>

        {/* 3. When to expand */}
        <section id="expand" className="mb-24 scroll-mt-24">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: PART THREE :::
          </div>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl mb-4">
            When do you launch a second node?
          </h2>
          <p className="font-mono text-base text-foreground/80 leading-relaxed max-w-3xl mb-4">
            The network state IS an archipelago. A single node, held forever, is
            a co-living company, not a network state. So the question is not
            whether to expand, but when.
          </p>
          <p className="font-mono text-base text-foreground/80 leading-relaxed max-w-3xl mb-8">
            The wrong trigger is a headcount. &ldquo;Wait until node 1 hits
            1,000 people&rdquo; is a vanity metric: the first node may cap below
            1,000 for reasons that have nothing to do with demand (visa limits,
            geography, local friction). Gate the second node on readiness, not
            population. Here are the three signals that actually matter.
          </p>
          <div className="space-y-4 mb-8">
            {READINESS_SIGNALS.map((r, i) => {
              const accent = PALETTE_HEX[i % PALETTE_HEX.length];
              return (
                <div
                  key={r.n}
                  className="border-2 border-border bg-background shadow-brutal-sm p-5 grid grid-cols-[auto_1fr] gap-4"
                >
                  <div
                    className="font-mono font-bold text-2xl tabular-nums"
                    style={{ color: accent }}
                  >
                    {r.n}
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-lg mb-2">
                      {r.title}
                    </h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {r.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="border-2 border-border bg-background shadow-brutal-md p-6 font-mono">
            <div className="text-xs tracking-[0.3em] text-muted-foreground mb-3">
              ::: THE RULE :::
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-foreground/90">
              Launch the second node the moment all three signals are true,
              whether that happens at 300 citizens or 1,500. And make node 2
              deliberately different from node 1: a different continent, visa
              regime, and climate. That is how you learn whether the culture
              travels, or whether it was just the first city. De-risk node 3
              through 1,000 by stress-testing portability on node 2.
            </p>
          </div>
        </section>

        {/* 4. How to measure */}
        <section id="measure" className="mb-24 scroll-mt-24">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: PART FOUR :::
          </div>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl mb-4">
            How do you measure a network state?
          </h2>
          <p className="font-mono text-base text-foreground/80 leading-relaxed max-w-3xl mb-4">
            The internet is a shifting landscape with no fixed borders, so you
            cannot map it the way you map land. You map it the way you measure a
            census. Balaji&apos;s triad is the answer: three numbers that
            together describe any network state, and let you compare one against
            another, or against a nation-state.
          </p>
          <p className="font-mono text-base text-foreground/80 leading-relaxed max-w-3xl mb-8">
            Population. Income. Square meters. The same three axes a nation-state
            reports, made continuous and cryptographically auditable.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {CENSUS_KPIS.map((k, i) => {
              const accent = PALETTE_HEX[i % PALETTE_HEX.length];
              return (
                <div
                  key={k.name}
                  className="border-2 border-border bg-background shadow-brutal-md p-5"
                >
                  <div className="text-4xl mb-3" aria-hidden>
                    {k.icon}
                  </div>
                  <h3
                    className="font-mono font-bold text-xl"
                    style={{ color: accent }}
                  >
                    {k.name}
                  </h3>
                  <div className="font-mono text-[10px] tracking-widest text-muted-foreground mb-3">
                    {k.unit.toUpperCase()}
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {k.detail}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="font-mono text-sm text-muted-foreground">
            These three KPIs are what the{" "}
            <Link href="/globe" className="underline">
              archipelago globe
            </Link>{" "}
            and the{" "}
            <Link href="/success" className="underline">
              GDP comparison
            </Link>{" "}
            visualize. Map the internet by its census, not its coastline.
          </p>
        </section>

        {/* 5. The seven steps */}
        <section id="steps" className="mb-20 scroll-mt-24">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: PART FIVE :::
          </div>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl mb-4">
            The seven steps, operationalized.
          </h2>
          <p className="font-mono text-base text-foreground/80 leading-relaxed max-w-3xl mb-8">
            Balaji&apos;s path from cloud to country, with the concrete action
            for each step.
          </p>
          <ol className="space-y-3">
            {SEVEN_STEPS.map((s, i) => {
              const accent = PALETTE_HEX[i % PALETTE_HEX.length];
              return (
                <li
                  key={s.n}
                  className="border-2 border-border bg-background shadow-brutal-sm p-5 grid grid-cols-[auto_1fr] gap-4"
                >
                  <div
                    className="font-mono font-bold text-2xl tabular-nums"
                    style={{ color: accent }}
                  >
                    {String(s.n).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-lg mb-1">
                      {s.title}
                    </h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {s.action}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        {/* CTA */}
        <section className="border-2 border-border bg-background shadow-brutal-md p-6 sm:p-8 font-mono">
          <div className="text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: YOUR MOVE :::
          </div>
          <h2 className="font-bold text-2xl sm:text-3xl mb-4">
            Score yourself. Then start.
          </h2>
          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-6 max-w-2xl">
            If you cover the six pieces, pick a node and a One Commandment, and
            read the Constitution. If you are missing a piece, find the
            cofounder who holds it. Either way, the federation is here to give
            you a passport, a census, and a constitutional home.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/imagined"
              className="border-2 border-border bg-foreground text-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-5 py-3 font-bold text-sm"
            >
              [ SEE 36 WORKED EXAMPLES ]
            </Link>
            <Link
              href="/world"
              className="border-2 border-border bg-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-5 py-3 font-bold text-sm"
            >
              [ SCOUT A NODE ]
            </Link>
            <Link
              href="/constitution"
              className="border-2 border-border bg-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-5 py-3 font-bold text-sm"
            >
              [ READ THE CONSTITUTION ]
            </Link>
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
