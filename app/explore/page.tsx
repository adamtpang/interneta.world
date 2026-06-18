import type { Metadata } from "next";
import Link from "next/link";
import { getSocieties } from "@/lib/actions/societies";
import { ExploreGrid } from "@/components/explore-grid";

export const metadata: Metadata = {
  title: "Explore · Nations and network states, ranked | interneta.world",
  description:
    "Every nation-state and every network state in one grid, ranked and filterable like a nomad directory. Find where to live, or start your own.",
  alternates: { canonical: "https://interneta.world/explore" },
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

const GUIDES = [
  {
    href: "/playbook",
    tag: "THE HOW",
    title: "How to win the network state game",
    blurb:
      "Who should found one, where to put your next node, when to expand, how to measure it. The full founder playbook.",
  },
  {
    href: "/world",
    tag: "SCOUT",
    title: "Pick your country",
    blurb:
      "30 nation-states scored on their legal scaffolds, special economic zones, and city sites. Where the substrate already exists.",
  },
  {
    href: "/imagined",
    tag: "EXAMPLES",
    title: "36 founders, 36 states",
    blurb:
      "What Bryan Johnson, Tobi Lutke, Naval, and 33 others would build. Each a worked example with a One Commandment and next steps.",
  },
  {
    href: "/constitution",
    tag: "THE RULES",
    title: "The Constitution",
    blurb:
      "14 articles and a Bill of Rights. The social smart contract every member state inherits. Forkable, amendable, yours.",
  },
  {
    href: "/success",
    tag: "THE CASE",
    title: "How to measure a state",
    blurb:
      "If the internet were a country it would be third in the world. The GDP argument, and Dalio's eight measures ported.",
  },
  {
    href: "/about",
    tag: "THE WHY",
    title: "Why now",
    blurb:
      "The thesis, the network-state movement timeline, and the reading list. Built on Balaji's The Network State.",
  },
];

export default async function ExplorePage() {
  const societies = await getSocieties();

  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero */}
        <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
          ::: THE DIRECTORY :::
        </div>
        <h1 className="font-mono font-bold text-4xl sm:text-6xl leading-tight tracking-tight mb-6">
          Where will you<br />
          <span className="text-muted-foreground">live next?</span>
        </h1>
        <div className="flex gap-1 mb-8" aria-hidden>
          {PALETTE.map((c, i) => (
            <span key={i} className="block h-2 flex-1" style={{ background: c }} />
          ))}
        </div>
        <p className="font-mono text-base sm:text-lg text-foreground/85 leading-relaxed max-w-3xl mb-5">
          Every nation-state and every network state, in one grid, measured the
          same way: population, GDP, and square meters. Filter by region, sort
          by what you value, and find the place that fits. Or, if none of them
          do, start your own.
        </p>
        <p className="font-mono text-sm mb-10">
          <Link href="/atlas" className="underline font-bold">
            Want a pick tailored to you and your passport? Open the Atlas →
          </Link>
        </p>

        {/* Start your own CTA band */}
        <div
          className="border-2 border-border shadow-brutal-md p-6 sm:p-8 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
          style={{
            background:
              "linear-gradient(135deg, #06b6d418 0%, #d946ef18 50%, #ea580c18 100%)",
          }}
        >
          <div>
            <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-2">
              ::: DON'T SEE YOUR PLACE :::
            </div>
            <h2 className="font-mono font-bold text-2xl sm:text-3xl">
              Start your own network state.
            </h2>
            <p className="font-mono text-sm text-foreground/75 mt-2 max-w-xl">
              The frontier is open. The playbook is written. The federation will
              give you a passport, a census, and a constitutional home.
            </p>
          </div>
          <Link
            href="/playbook"
            className="border-2 border-border bg-foreground text-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-6 py-4 font-mono font-bold text-base whitespace-nowrap flex-shrink-0"
          >
            [ START YOUR OWN → ]
          </Link>
        </div>

        {/* The grid */}
        <ExploreGrid societies={societies} />

        {/* Legend + secondary views */}
        <div className="mt-6 max-w-3xl space-y-3">
          <p className="font-mono text-xs text-muted-foreground italic">
            Nation badges show world GDP rank. Network badges show Federation
            Score (0-100). Nation figures are approximate 2024 nominal values
            (IMF, World Bank); network data powered by{" "}
            <a
              href="https://nsnodes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              nsnodes.com
            </a>
            . Click any nation with a mirror to see its internet version.
          </p>
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            <Link
              href="/societies"
              className="border-2 border-border bg-background px-3 py-1.5 hover:bg-muted transition-colors"
            >
              [ NETWORK STATES AS STAT CARDS → ]
            </Link>
            <Link
              href="/compare"
              className="border-2 border-border bg-background px-3 py-1.5 hover:bg-muted transition-colors"
            >
              [ THE FULL 195 VS NETWORK CHART → ]
            </Link>
          </div>
        </div>

        {/* Guides */}
        <section className="mt-20">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: GUIDES :::
          </div>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl mb-3">
            How to start one.
          </h2>
          <p className="font-mono text-sm text-muted-foreground mb-8 max-w-2xl">
            Everything you need to go from idea to polity, in order.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GUIDES.map((g, i) => {
              const accent = PALETTE[i % PALETTE.length];
              return (
                <Link
                  key={g.href}
                  href={g.href}
                  className="group border-2 border-border bg-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all p-5 flex flex-col"
                >
                  <div
                    className="font-mono text-[10px] tracking-[0.3em] mb-2"
                    style={{ color: accent }}
                  >
                    {g.tag}
                  </div>
                  <h3 className="font-mono font-bold text-lg mb-2 leading-tight">
                    {g.title}
                  </h3>
                  <p className="text-sm text-foreground/75 leading-relaxed flex-1">
                    {g.blurb}
                  </p>
                  <div
                    className="font-mono text-[10px] tracking-[0.2em] mt-3 group-hover:underline"
                    style={{ color: accent }}
                  >
                    [ READ → ]
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <div className="mt-12 flex gap-1" aria-hidden>
          {PALETTE.map((c, i) => (
            <span key={i} className="block h-2 flex-1" style={{ background: c }} />
          ))}
        </div>
      </div>
    </div>
  );
}
