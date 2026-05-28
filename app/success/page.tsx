import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Success · How do you measure a state? | interneta.world",
  description:
    "If the internet were a country, it would be the third-largest economy in the world. The infrastructure is already there. The constitution isn't.",
  alternates: { canonical: "https://interneta.world/success" },
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

// Approximate 2024-2025 nominal GDP figures (trillions USD).
// Sources: IMF World Economic Outlook, World Bank. Updated periodically.
type EconRow = {
  rank: number;
  name: string;
  flag: string;
  gdpT: number;
  isFederation?: boolean;
  note?: string;
};

const ECONOMIES: EconRow[] = [
  { rank: 1, name: "United States", flag: "🇺🇸", gdpT: 29.2 },
  { rank: 2, name: "China", flag: "🇨🇳", gdpT: 18.7 },
  {
    rank: 3,
    name: "Interneta (the internet economy)",
    flag: "🌐",
    gdpT: 15.5,
    isFederation: true,
    note: "Estimated digital-economy GDP, currently un-federated.",
  },
  { rank: 4, name: "Germany", flag: "🇩🇪", gdpT: 4.7 },
  { rank: 5, name: "Japan", flag: "🇯🇵", gdpT: 4.1 },
  { rank: 6, name: "India", flag: "🇮🇳", gdpT: 4.0 },
  { rank: 7, name: "United Kingdom", flag: "🇬🇧", gdpT: 3.6 },
  { rank: 8, name: "France", flag: "🇫🇷", gdpT: 3.1 },
  { rank: 9, name: "Italy", flag: "🇮🇹", gdpT: 2.4 },
  { rank: 10, name: "Canada", flag: "🇨🇦", gdpT: 2.2 },
  { rank: 11, name: "Brazil", flag: "🇧🇷", gdpT: 2.2 },
];

type Measure = {
  letter: string;
  name: string;
  legacyMetric: string;
  internetMetric: string;
  why: string;
};

const MEASURES: Measure[] = [
  {
    letter: "I",
    name: "Output",
    legacyMetric: "Nominal GDP, the headline number for nation-states",
    internetMetric: "Aggregate citizen income + on-chain treasury size, attestable",
    why: "Money measures what people are willing to trade their hours for. A federation that can't measure its output can't grow against legacy states.",
  },
  {
    letter: "II",
    name: "Education",
    legacyMetric: "Years of schooling, PISA scores, share of population with degrees",
    internetMetric: "Hours of high-leverage learning per citizen, ratified credentials",
    why: "Empires rise on knowledge. The internet is the largest classroom ever built. A federation that ranks its citizens' learning compounds faster than one that ranks their birth certificates.",
  },
  {
    letter: "III",
    name: "Innovation",
    legacyMetric: "Patents filed, R&D spend as percent of GDP",
    internetMetric: "Open-source contributions, retroactive public goods, ships per citizen",
    why: "The thing being built is the only honest measure of a polity's seriousness. Patents are the legacy proxy. Github commits are closer.",
  },
  {
    letter: "IV",
    name: "Competitiveness",
    legacyMetric: "Exports, productivity, ease of doing business",
    internetMetric: "Time from idea to shipped product, percent of citizens who run a business",
    why: "A network state with a thousand founders is more competitive than a nation-state with a thousand bureaucrats.",
  },
  {
    letter: "V",
    name: "Military",
    legacyMetric: "Defense spending, force projection, alliance treaties",
    internetMetric: "Cryptographic resilience, exit guarantees, federation mutual aid",
    why: "We do not maintain a standing military (Article VI of the Constitution). The federation's force is the right to exit and the freedom to fork.",
  },
  {
    letter: "VI",
    name: "Trade",
    legacyMetric: "Imports + exports as share of GDP",
    internetMetric: "Cross-member-state commerce, citizen mobility, archipelagic flows",
    why: "Citizens of network states already move more than citizens of nation-states. Trade just needs a passport.",
  },
  {
    letter: "VII",
    name: "Financial Center",
    legacyMetric: "Banking assets, IPO volume, regulatory clarity",
    internetMetric: "On-chain TVL, stablecoin issuance, treasury yield",
    why: "Whoever issues the unit of account wins. The legacy version is the New York Fed. The internet version is USDC, USDT, and the open-source contracts they run on.",
  },
  {
    letter: "VIII",
    name: "Reserve Currency",
    legacyMetric: "Share of global FX reserves",
    internetMetric: "Stablecoin daily volume + BTC market cap as percent of M2",
    why: "The dollar is the reserve currency of the legacy world. The Bitcoin + USDC + USDT triumvirate is the de facto reserve currency of the internet. The federation does not pick one; it accepts all.",
  },
];

function Bar({ value, max, color }: { value: number; max: number; color: string }) {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div className="h-6 bg-muted border-2 border-border overflow-hidden">
      <div
        className="h-full flex items-center justify-end px-2 font-mono text-xs font-bold tabular-nums transition-all"
        style={{ width: `${pct}%`, background: color, color: "white" }}
      >
        ${value.toFixed(1)}T
      </div>
    </div>
  );
}

export default function SuccessPage() {
  const max = Math.max(...ECONOMIES.map((e) => e.gdpT));

  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Hero */}
        <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
          ::: HOW DO YOU MEASURE SUCCESS :::
        </div>
        <h1 className="font-mono font-bold text-4xl sm:text-6xl leading-tight tracking-tight mb-8">
          How do you<br />
          <span className="text-muted-foreground">measure a state?</span>
        </h1>
        <div className="flex gap-1 mb-10" aria-hidden>
          {PALETTE.map((c, i) => (
            <span key={i} className="block h-2 flex-1" style={{ background: c }} />
          ))}
        </div>

        <p className="font-mono text-base sm:text-xl text-foreground/85 leading-relaxed max-w-3xl mb-6">
          Ray Dalio's framework says empires rise and fall on eight measurable
          axes. Nation-states have spent four hundred years optimizing for
          those numbers. The internet has been quietly out-scoring them for
          two decades, without a constitution to call its own.
        </p>
        <p className="font-mono text-base text-foreground/75 leading-relaxed max-w-3xl mb-12">
          If you measure the internet by the same rules you measure nation
          states, here is where it lands.
        </p>

        {/* GDP comparison */}
        <section className="mb-20">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: GDP, 2024-2025 NOMINAL :::
          </div>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl mb-4">
            If the internet were a country,
            <br />
            <span style={{ color: "var(--iw-cyan)" }}>it would already be third.</span>
          </h2>
          <p className="font-mono text-sm text-muted-foreground mb-8 max-w-2xl">
            The digital economy generated an estimated $15.5 trillion in 2024,
            more than every G7 country except the United States. It has more
            output than India, the UK, Germany, and Japan. It does not have a
            constitution, a flag, an anthem, or a census. That is the entire
            opportunity.
          </p>

          <div className="space-y-2 mb-6">
            {ECONOMIES.map((e) => {
              const color = e.isFederation ? "var(--iw-cyan)" : "var(--foreground)";
              const labelColor = e.isFederation ? "var(--iw-cyan)" : undefined;
              return (
                <div
                  key={e.name}
                  className={`grid grid-cols-[40px_28px_1fr_auto] gap-3 items-center py-2 ${e.isFederation ? "border-2 border-[var(--iw-cyan)] bg-[var(--iw-cyan)]/5 p-3 -mx-1 shadow-brutal-sm" : ""}`}
                  style={e.isFederation ? { borderColor: "var(--iw-cyan)" } : undefined}
                >
                  <div className="font-mono text-sm font-bold tabular-nums text-muted-foreground">
                    #{e.rank}
                  </div>
                  <div className="text-2xl" aria-hidden>
                    {e.flag}
                  </div>
                  <div>
                    <div
                      className="font-mono font-bold text-sm"
                      style={{ color: labelColor }}
                    >
                      {e.name}
                    </div>
                    {e.note && (
                      <div className="font-mono text-[10px] text-muted-foreground italic mt-0.5">
                        {e.note}
                      </div>
                    )}
                  </div>
                  <div className="w-40 sm:w-64">
                    <Bar value={e.gdpT} max={max} color={color === "var(--iw-cyan)" ? "#06b6d4" : "#222"} />
                  </div>
                </div>
              );
            })}
          </div>

          <p className="font-mono text-xs text-muted-foreground italic">
            GDP figures rounded to $0.1T. Sources: IMF World Economic Outlook,
            World Bank, plus aggregated digital-economy estimates from BEA,
            UNCTAD, and Bain. Internet GDP estimate is conservative; some
            analysts place it as high as $25T when including AI, semiconductor
            output, and the long tail of digital services. Full table on{" "}
            <a
              href="https://worldpopulationreview.com/countries/by-gdp"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              worldpopulationreview.com
            </a>
            .
          </p>
        </section>

        {/* The thesis */}
        <section className="mb-20">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: THE THESIS :::
          </div>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl mb-6">
            The economy is here. The polity isn't.
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-foreground/85 leading-relaxed max-w-3xl">
            <p>
              The internet already has the economy, the workforce, the trade
              flows, and the cultural exports of a top-three nation-state. It
              does not have the constitutional layer. It does not have a
              recognized citizenry. It does not have a treasury. It does not
              have a flag.
            </p>
            <p>
              Citizens are double-counted by their accident-of-birth
              nation-states, even though their working hours, their friends,
              their income, and their identity all live online. The legacy
              state taxes them, and offers in return: a passport (queues), a
              currency (depreciating), defense (against shadows), and a vote
              (every four years, on people they don't choose).
            </p>
            <p className="font-bold">
              Interneta is the federation that finally counts the third-largest
              economy in the world as what it is.
            </p>
          </div>
        </section>

        {/* 8 measures */}
        <section className="mb-20">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: EIGHT MEASURES :::
          </div>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl mb-3">
            Dalio's framework, ported to the internet.
          </h2>
          <p className="font-mono text-sm text-muted-foreground italic mb-10 max-w-2xl">
            From{" "}
            <em>Principles for Dealing with the Changing World Order</em>. Each
            axis has a legacy metric (how nation-states score themselves) and
            an internet metric (how Interneta will score itself).
          </p>

          <div className="space-y-6">
            {MEASURES.map((m, i) => {
              const accent = PALETTE_HEX[i % PALETTE_HEX.length];
              return (
                <article
                  key={m.letter}
                  className="border-l-4 pl-6"
                  style={{ borderColor: accent }}
                >
                  <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-1">
                    {m.letter}
                  </div>
                  <h3 className="font-mono font-bold text-xl sm:text-2xl mb-3">
                    {m.name}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground mb-1">
                        LEGACY METRIC
                      </div>
                      <div className="font-mono text-sm text-foreground/80">
                        {m.legacyMetric}
                      </div>
                    </div>
                    <div>
                      <div
                        className="font-mono text-[10px] tracking-[0.2em] mb-1"
                        style={{ color: accent }}
                      >
                        INTERNETA METRIC
                      </div>
                      <div className="font-mono text-sm text-foreground/80">
                        {m.internetMetric}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed italic">
                    {m.why}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* What's missing */}
        <section className="mb-20">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: WHAT'S MISSING :::
          </div>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl mb-6">
            The infrastructure is built. The constitution isn't.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { has: "TCP/IP", needs: "A Bill of Rights" },
              { has: "HTTPS", needs: "Due process" },
              { has: "Stripe / USDC", needs: "A treasury" },
              { has: "GitHub", needs: "An amendment process" },
              { has: "Discord / X", needs: "A public square with civic rules" },
              { has: "Stripe Atlas / Wyoming DAO LLC", needs: "Recognition by other states" },
              { has: "Zoom + remote work", needs: "An archipelago and a passport" },
              { has: "Vercel / Cloudflare", needs: "Common infrastructure as a public good" },
            ].map((row) => (
              <div
                key={row.has}
                className="border-2 border-border bg-background shadow-brutal-sm p-4 font-mono"
              >
                <div className="text-[10px] tracking-[0.2em] text-muted-foreground mb-1">
                  HAS
                </div>
                <div className="font-bold text-sm mb-2">{row.has}</div>
                <div className="text-[10px] tracking-[0.2em] text-muted-foreground mb-1">
                  NEEDS
                </div>
                <div
                  className="font-bold text-sm"
                  style={{ color: "var(--iw-cyan)" }}
                >
                  {row.needs}
                </div>
              </div>
            ))}
          </div>
          <p className="font-mono text-base text-foreground/80 leading-relaxed max-w-3xl">
            Interneta is what these eight rows look like once they have a
            constitution.
          </p>
        </section>

        {/* Federation Census preview */}
        <section className="mb-20">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: THE FEDERATION CENSUS :::
          </div>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl mb-6">
            We will publish our own dashboard.
          </h2>
          <p className="font-mono text-base text-foreground/85 leading-relaxed mb-8 max-w-3xl">
            Per{" "}
            <Link href="/constitution" className="underline">
              Article V
            </Link>
            , the federation maintains a continuous, cryptographically
            auditable census of its citizens, member states, and aggregate
            footprint. When the federation reaches one million citizens it
            publishes its first{" "}
            <em>State of the Federation</em> address.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
            {[
              { v: "0", k: "CITIZENS" },
              { v: "0", k: "MEMBER STATES" },
              { v: "$0", k: "TREASURY (USD)" },
              { v: "0 sq m", k: "ARCHIPELAGIC FOOTPRINT" },
            ].map((s) => (
              <div
                key={s.k}
                className="border-2 border-border bg-background shadow-brutal-sm p-4"
              >
                <div className="text-2xl font-bold tabular-nums">{s.v}</div>
                <div className="text-[10px] tracking-widest text-muted-foreground mt-1">
                  {s.k}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-xs text-muted-foreground italic">
            Census starts the moment a wallet signs the affirmation. Until
            then, the numbers are zero. Be the first to make them otherwise.
          </p>
        </section>

        {/* CTA */}
        <section className="border-2 border-border bg-background shadow-brutal-md p-6 sm:p-8 font-mono">
          <div className="text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: SIGN ON :::
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl mb-5">
            Be Citizen 1.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-foreground/85 mb-8 max-w-2xl">
            The economy is third in the world. The constitution is draft v0.
            The treasury is zero. The flag is seven colors. What is missing is
            the first signature.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/citizens"
              className="border-2 border-border bg-foreground text-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-6 py-3 font-bold text-base"
            >
              [ CLAIM CITIZENSHIP → ]
            </Link>
            <Link
              href="/constitution"
              className="border-2 border-border bg-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-6 py-3 font-bold text-base"
            >
              [ READ THE CONSTITUTION ]
            </Link>
            <Link
              href="/imagined"
              className="border-2 border-border bg-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-6 py-3 font-bold text-base"
            >
              [ SEE THE FOUNDERS ]
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
