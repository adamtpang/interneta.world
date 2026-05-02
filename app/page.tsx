import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "interneta.world | The United States of Interneta",
  description:
    "A federation of internet city-states. Cloud first, land last. Recruit, not conquer. The optimistic meta-layer for network states.",
  alternates: { canonical: "https://interneta.world" },
};

const ctas = [
  { href: "/constitution", label: "Read the Constitution", kbd: "[ I ]" },
  { href: "/citizens", label: "Claim Citizenship", kbd: "[ II ]" },
  { href: "/globe", label: "Spin the Globe", kbd: "[ III ]" },
  { href: "/anthem", label: "Hear the Anthem", kbd: "[ IV ]" },
];

const manifesto = [
  {
    n: "I",
    title: "America was the world's greatest startup.",
    body: "Three million people on a coastal strip in 1789. A constitution drafted by ~55 people in a single Philadelphia summer, ratified by nine of thirteen states. Two centuries later: a continental superpower. The choice was the moat. People came because they could.",
  },
  {
    n: "II",
    title: "The frontier moved online in 1995.",
    body: "We've been homesteading there for thirty years. Crypto gave us property rights. Remote work gave us mobility. AI is giving us productivity. The substrate is built. The only thing missing is the constitution.",
  },
  {
    n: "III",
    title: "Cloud first, land last.",
    body: "We don't conquer territory. We crowdfund it. A network state begins as a startup society, becomes a network union, materializes as a global archipelago of physical nodes, proves itself with an on-chain census, and earns recognition the same way Bitcoin did, by working.",
  },
  {
    n: "IV",
    title: "One thousand commandments.",
    body: "Every network state founds itself on a single moral inversion: a One Commandment. Interneta has none of its own. We are the federation that hosts them all. Keto Kosher and Bitcoin City and the post-FDA Society and the thousand others not yet named. Each one a member, each one sovereign, each one bringing its own ten words to the union.",
  },
  {
    n: "V",
    title: "Interneta is to network states what USDC is to the dollar.",
    body: "A transition technology. USDC didn't replace USD. It gave it a new substrate. Interneta is the federated meta-layer that lets nation-state citizens migrate to network-state citizenship without renouncing what they came from. From America to Interneta. The values keep going.",
  },
  {
    n: "VI",
    title: "We are the optimists.",
    body: "If America falls, the values don't have to. They just need a new place to live. Interneta is that place. Open source. Opt in. Recruited, not conquered. The next chapter, written by the people building it.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b-2 border-border py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-6">
            ::: THE UNITED STATES OF INTERNETA :::
          </div>
          <h1 className="font-mono font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
            America was<br />the startup.
            <br />
            <span className="text-muted-foreground">Interneta is</span>
            <br />
            <span className="text-muted-foreground">the sequel.</span>
          </h1>
          <p className="mt-10 font-mono text-base sm:text-lg max-w-2xl text-foreground/80 leading-relaxed">
            A federation of internet city-states.
            <br />
            Cloud first, land last. Recruit, not conquer.
            <br />
            The optimistic meta-layer for network states.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
            {ctas.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group border-2 border-border bg-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-5 py-4 flex items-center justify-between font-mono"
              >
                <span className="text-base font-bold">{c.label}</span>
                <span className="text-xs text-muted-foreground group-hover:text-foreground">
                  {c.kbd}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-16 sm:py-24 border-b-2 border-border">
        <div className="max-w-4xl mx-auto px-4">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-12">
            ::: PREAMBLE :::
          </div>
          <div className="space-y-12">
            {manifesto.map((m) => (
              <article
                key={m.n}
                className="grid grid-cols-[auto_1fr] gap-6 sm:gap-10"
              >
                <div className="font-mono text-2xl sm:text-3xl font-bold text-muted-foreground tabular-nums">
                  {m.n}.
                </div>
                <div>
                  <h2 className="font-mono text-xl sm:text-2xl font-bold leading-tight mb-3">
                    {m.title}
                  </h2>
                  <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
                    {m.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Path */}
      <section className="py-16 sm:py-24 border-b-2 border-border">
        <div className="max-w-4xl mx-auto px-4">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-8">
            ::: THE PATH :::
          </div>
          <h2 className="font-mono font-bold text-3xl sm:text-5xl mb-12">
            From nation states to network states.
          </h2>
          <ol className="space-y-4 font-mono">
            {[
              "Found a startup society.",
              "Organize it for collective action.",
              "Build trust offline; build a cryptoeconomy online.",
              "Crowdfund physical nodes, anywhere on Earth.",
              "Connect them into a network archipelago.",
              "Run an on-chain census.",
              "Earn diplomatic recognition.",
            ].map((step, i) => (
              <li
                key={i}
                className="border-2 border-border bg-background px-5 py-4 flex items-start gap-5 shadow-brutal-sm"
              >
                <span className="font-bold text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-foreground/90">{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 font-mono text-sm text-muted-foreground italic">
            Adapted from Balaji Srinivasan, <em>The Network State</em>.
          </p>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-6">
            ::: ENLIST :::
          </p>
          <h2 className="font-mono font-bold text-3xl sm:text-5xl mb-8">
            From America to Interneta.
          </h2>
          <p className="font-mono text-base sm:text-lg max-w-xl mx-auto text-foreground/80 leading-relaxed mb-10">
            The values don't fall when the empire does. They just need somewhere
            new to live. Interneta is that place.
          </p>
          <Link
            href="/citizens"
            className="inline-block border-2 border-border bg-foreground text-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-8 py-5 font-mono font-bold text-lg"
          >
            [ CLAIM CITIZENSHIP &rarr; ]
          </Link>
        </div>
      </section>
    </div>
  );
}
