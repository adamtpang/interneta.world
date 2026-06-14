import type { Metadata } from "next";
import Link from "next/link";
import { UN_MEMBER_STATES } from "@/lib/data/un-member-states";
import { getSocieties } from "@/lib/actions/societies";
import { societyNameToSlug } from "@/lib/utils/slug";
import { locationFlag } from "@/lib/utils/society-stats";

export const metadata: Metadata = {
  title: "Compare · Nation-states vs network states | interneta.world",
  description:
    "All 195 nation-states of the legacy world, side by side with every network state we track. The UN admitted its last member in 2011. The internet hasn't stopped since.",
  alternates: { canonical: "https://interneta.world/compare" },
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

const DECADES = [
  1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020,
] as const;

function decadeLabel(d: number) {
  return `${d}s`;
}

function Bar({
  value,
  max,
  color,
  label,
}: {
  value: number;
  max: number;
  color: string;
  label: string;
}) {
  const pct = max === 0 ? 0 : Math.min(100, (value / max) * 100);
  return (
    <div className="flex items-center gap-2">
      <div className="h-5 bg-muted border-2 border-border overflow-hidden flex-1">
        <div
          className="h-full transition-all"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      <div className="font-mono text-xs font-bold tabular-nums w-8 text-right">
        {value}
      </div>
      <div className="font-mono text-[9px] tracking-widest text-muted-foreground w-20">
        {label}
      </div>
    </div>
  );
}

export default async function ComparePage() {
  const societies = await getSocieties();

  // Nation-state admissions per decade.
  const nationByDecade = DECADES.map(
    (d) =>
      UN_MEMBER_STATES.filter((s) => !s.observer && s.year >= d && s.year < d + 10)
        .length
  );

  // Network-state foundings per decade (from the founded field where present).
  const nsYears = societies
    .map((s) => parseInt(s.founded || "", 10))
    .filter((y) => Number.isFinite(y) && y >= 1990);
  const nsByDecade = DECADES.map(
    (d) => nsYears.filter((y) => y >= d && y < d + 10).length
  );
  const nsUndated = societies.length - nsYears.length;

  const max = Math.max(...nationByDecade, ...nsByDecade);

  const nsSince2011 = nsYears.filter((y) => y >= 2011).length;

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"] as const;

  const sortedSocieties = [...societies].sort((a, b) => {
    const ya = parseInt(a.founded || "9999", 10);
    const yb = parseInt(b.founded || "9999", 10);
    return ya - yb || a.name.localeCompare(b.name);
  });

  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Hero */}
        <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
          ::: NATION-STATES VS NETWORK STATES :::
        </div>
        <h1 className="font-mono font-bold text-4xl sm:text-6xl leading-tight tracking-tight mb-8">
          195 states,<br />
          <span className="text-muted-foreground">and the ones being born.</span>
        </h1>
        <div className="flex gap-1 mb-10" aria-hidden>
          {PALETTE.map((c, i) => (
            <span key={i} className="block h-2 flex-1" style={{ background: c }} />
          ))}
        </div>

        <p className="font-mono text-base sm:text-lg text-foreground/85 leading-relaxed max-w-3xl mb-12">
          The legacy world has 193 UN member states and 2 permanent observers.
          The internet world has {societies.length} network states, startup
          societies, and popup villages that we track, and the list grows
          monthly. Below: both rosters in full, and the one chart that
          explains the century.
        </p>

        {/* Stat bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16 font-mono">
          <div className="border-2 border-border bg-background shadow-brutal-sm p-4">
            <div className="text-3xl font-bold tabular-nums">195</div>
            <div className="text-[10px] tracking-widest text-muted-foreground mt-1">
              NATION-STATES
            </div>
          </div>
          <div className="border-2 border-border bg-background shadow-brutal-sm p-4">
            <div
              className="text-3xl font-bold tabular-nums"
              style={{ color: "var(--iw-cyan)" }}
            >
              {societies.length}
            </div>
            <div className="text-[10px] tracking-widest text-muted-foreground mt-1">
              NETWORK STATES TRACKED
            </div>
          </div>
          <div className="border-2 border-border bg-background shadow-brutal-sm p-4">
            <div className="text-3xl font-bold tabular-nums">1</div>
            <div className="text-[10px] tracking-widest text-muted-foreground mt-1">
              NEW NATION-STATES SINCE 2011
            </div>
          </div>
          <div className="border-2 border-border bg-background shadow-brutal-sm p-4">
            <div
              className="text-3xl font-bold tabular-nums"
              style={{ color: "var(--iw-cyan)" }}
            >
              {nsSince2011}+
            </div>
            <div className="text-[10px] tracking-widest text-muted-foreground mt-1">
              NETWORK STATES SINCE 2011
            </div>
          </div>
        </div>

        {/* The chart */}
        <section className="mb-20">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: NEW STATES PER DECADE :::
          </div>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl mb-4">
            One line flatlined.
            <br />
            <span style={{ color: "var(--iw-cyan)" }}>One went vertical.</span>
          </h2>
          <p className="font-mono text-sm text-muted-foreground mb-8 max-w-2xl">
            UN admissions per decade (black) against network-state foundings
            per decade (cyan). Decolonization made the 1960s. The Soviet
            breakup made the 1990s. The internet is making the 2020s.
          </p>

          <div className="border-2 border-border bg-background shadow-brutal-md p-5 sm:p-8 space-y-5">
            {DECADES.map((d, i) => (
              <div key={d} className="space-y-1.5">
                <div className="font-mono text-xs font-bold tabular-nums">
                  {decadeLabel(d)}
                </div>
                <Bar
                  value={nationByDecade[i]}
                  max={max}
                  color="var(--foreground)"
                  label="NATION"
                />
                <Bar
                  value={nsByDecade[i]}
                  max={max}
                  color="var(--iw-cyan)"
                  label="NETWORK"
                />
              </div>
            ))}
            <div className="pt-3 border-t-2 border-border font-mono text-[10px] text-muted-foreground">
              Nation-state bars: UN admissions (193 members; founding cohort of
              1945 counted in the 1940s). Network-state bars: founding year of
              the {nsYears.length} societies in our directory that publish one
              ({nsUndated} undated societies excluded). Data: UN, nsnodes.com.
            </div>
          </div>
        </section>

        {/* The callout */}
        <section className="mb-20 border-2 border-border bg-background shadow-brutal-md p-6 sm:p-8">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: THE PUNCHLINE :::
          </div>
          <p className="font-mono text-xl sm:text-2xl font-bold leading-snug mb-4">
            The United Nations admitted its last new member on July 14, 2011:
            South Sudan. 🇸🇸
          </p>
          <p className="font-mono text-base sm:text-lg text-foreground/80 leading-relaxed max-w-3xl">
            In the fifteen years since, the legacy world created zero new
            states, and the internet created {nsSince2011}+ that we know of.
            The frontier didn't close. It moved.
          </p>
        </section>

        {/* Roster A: nation states */}
        <section className="mb-20">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: ROSTER A ::: THE LEGACY WORLD :::
          </div>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl mb-3">
            All 195 nation-states.
          </h2>
          <p className="font-mono text-sm text-muted-foreground mb-8 max-w-2xl">
            193 UN members plus 2 permanent observers, with year of admission.
            Each one is a candidate for an internet mirror in the{" "}
            <Link href="/world" className="underline">
              world catalog
            </Link>
            .
          </p>
          {regions.map((region) => {
            const states = UN_MEMBER_STATES.filter((s) => s.region === region);
            return (
              <div key={region} className="mb-8">
                <h3 className="font-mono font-bold text-lg mb-3">
                  {region}{" "}
                  <span className="text-muted-foreground text-sm tabular-nums">
                    · {states.length}
                  </span>
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {states.map((s) => (
                    <span
                      key={s.name}
                      className="font-mono text-xs px-2 py-1 border border-border bg-background inline-flex items-center gap-1.5"
                      title={s.observer ? "UN permanent observer" : `UN member since ${s.year}`}
                    >
                      <span>{s.flag}</span>
                      <span>{s.name}</span>
                      <span className="text-muted-foreground tabular-nums">
                        {s.observer ? "obs" : `'${String(s.year).slice(2)}`}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* Roster B: network states */}
        <section className="mb-20">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: ROSTER B ::: THE INTERNET WORLD :::
          </div>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl mb-3">
            All {societies.length} network states we track.
          </h2>
          <p className="font-mono text-sm text-muted-foreground mb-8 max-w-2xl">
            Startup societies, popup villages, charter cities, and network
            states, sorted by founding year. Full stat cards in the{" "}
            <Link href="/societies" className="underline">
              directory
            </Link>
            . Data powered by{" "}
            <a
              href="https://nsnodes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              nsnodes.com
            </a>
            .
          </p>
          <div className="flex flex-wrap gap-1.5">
            {sortedSocieties.map((s) => (
              <Link
                key={s.name}
                href={`/societies/${societyNameToSlug(s.name)}`}
                className="font-mono text-xs px-2 py-1 border border-border bg-background hover:bg-muted transition-colors inline-flex items-center gap-1.5"
                style={{ borderLeftWidth: 3, borderLeftColor: "var(--iw-cyan)" }}
                title={s.mission}
              >
                <span>{locationFlag(s.location)}</span>
                <span>{s.name}</span>
                <span className="text-muted-foreground tabular-nums">
                  {s.founded ? `'${String(s.founded).slice(2)}` : "·"}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-2 border-border bg-background shadow-brutal-md p-6 sm:p-8 font-mono">
          <div className="text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: CLOSE THE GAP :::
          </div>
          <h2 className="font-bold text-2xl sm:text-3xl mb-4">
            195 mirrors. 1000 imagined states. One federation.
          </h2>
          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-6 max-w-2xl">
            Every nation-state on Roster A gets an internet version. Every
            community on Roster B gets a constitutional home. That is the
            whole project.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/world"
              className="border-2 border-border bg-foreground text-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-5 py-3 font-bold text-sm"
            >
              [ THE WORLD MIRRORS ]
            </Link>
            <Link
              href="/imagined"
              className="border-2 border-border bg-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-5 py-3 font-bold text-sm"
            >
              [ THE IMAGINED 1000 ]
            </Link>
            <Link
              href="/success"
              className="border-2 border-border bg-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-5 py-3 font-bold text-sm"
            >
              [ THE GDP ARGUMENT ]
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
