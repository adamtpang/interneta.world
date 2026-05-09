import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  IMAGINED_STATES,
  getImaginedBySlug,
} from "@/lib/data/imagined-states";
import { locationFlag } from "@/lib/utils/society-stats";

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

export async function generateStaticParams() {
  return IMAGINED_STATES.map((s) => ({ slug: s.slug }));
}

type RouteParams = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getImaginedBySlug(slug);
  if (!s) return { title: "Not found | interneta.world" };
  return {
    title: `${s.stateName} · ${s.founder} | interneta.world`,
    description: `${s.oneCommandment} A speculative member state of Interneta, founded by ${s.founder}. ${s.theme.slice(0, 110)}`,
    alternates: { canonical: `https://interneta.world/imagined/${s.slug}` },
  };
}

function FounderInitial({ name, color }: { name: string; color: string }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div
      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center font-mono font-bold text-2xl sm:text-3xl flex-shrink-0 border-2 border-border"
      style={{ background: color, color: "white" }}
    >
      {initials}
    </div>
  );
}

export default async function ImaginedProfile({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const s = getImaginedBySlug(slug);
  if (!s) notFound();

  const accentVar = PALETTE[s.paletteIndex % PALETTE.length];
  const accentHex = PALETTE_HEX[s.paletteIndex % PALETTE_HEX.length];

  // Sensible defaults for entries that haven't filled in rich fields yet.
  const cityScout =
    s.cityScout ??
    `${s.capital} is the natural anchor for this polity given the founder's existing center of gravity. A citizen campus there with shared housing, a kitchen aligned to the way of life, and the rituals of the community made physical.`;
  const whyNow =
    s.whyNow ??
    `${s.founder} has the social capital, the ideological clarity, and the audience to do this. The polity is the missing institutional form for what they are already living publicly.`;
  const nextSteps =
    s.nextSteps ??
    [
      `Anchor a citizen campus in ${s.capital}`,
      "Open citizenship to the existing community of followers, students, or readers",
      "Charter the polity around the One Commandment as a published constitution",
      "Charter a treasury aligned with the values of the polity",
      "Apply for member-state status with Interneta after 500 ratified citizens",
    ];

  // Cross-link: 3 other imagined states with the closest paletteIndex (cousins).
  const related = IMAGINED_STATES.filter((x) => x.slug !== s.slug)
    .sort(
      (a, b) =>
        Math.abs(a.paletteIndex - s.paletteIndex) -
        Math.abs(b.paletteIndex - s.paletteIndex)
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="border-b-2 border-border"
        style={{
          background: `linear-gradient(135deg, ${accentHex}22 0%, ${accentHex}08 70%, transparent 100%)`,
        }}
      >
        <div className="max-w-5xl mx-auto px-4 py-12 sm:py-20">
          <Link
            href="/imagined"
            className="font-mono text-xs underline text-muted-foreground mb-6 inline-block"
          >
            ← back to the catalog
          </Link>
          <div className="font-mono text-xs tracking-[0.3em] mb-4" style={{ color: accentHex }}>
            ::: IMAGINED MEMBER STATE :::
          </div>
          <div className="flex items-start gap-6 mb-6 flex-wrap">
            <div
              className="text-7xl sm:text-9xl flex-shrink-0"
              aria-hidden
              style={{ filter: "saturate(1.2)" }}
            >
              {s.themeIcon}
            </div>
            <div className="flex-1 min-w-0">
              <h1
                className="font-mono font-bold text-4xl sm:text-7xl leading-[0.9] tracking-tight"
                style={{ color: accentHex }}
              >
                {s.stateName}
              </h1>
              <p className="font-mono text-base sm:text-xl text-foreground/70 mt-3">
                #{String(IMAGINED_STATES.findIndex((x) => x.slug === s.slug) + 1).padStart(3, "0")} · {s.capital} · founded by {s.founder}
              </p>
            </div>
          </div>

          <blockquote
            className="font-mono italic text-2xl sm:text-4xl leading-tight border-l-4 pl-6 mt-8 max-w-3xl"
            style={{ borderColor: accentHex }}
          >
            &ldquo;{s.oneCommandment}&rdquo;
          </blockquote>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16 space-y-16">
        {/* Founder card */}
        <section>
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: FOUNDER :::
          </div>
          <div className="border-2 border-border bg-background shadow-brutal-md p-5 sm:p-6 flex items-start gap-5">
            <FounderInitial name={s.founder} color={accentHex} />
            <div className="flex-1 min-w-0">
              <div className="font-mono font-bold text-xl sm:text-2xl">
                {s.founder}
              </div>
              <div className="font-mono text-sm text-muted-foreground italic mb-2">
                {s.founderRole}
              </div>
              {s.cofounders && s.cofounders.length > 0 && (
                <div className="font-mono text-xs mt-3">
                  <div className="text-muted-foreground tracking-widest text-[10px] mb-1">
                    CO-FOUNDERS
                  </div>
                  {s.cofounders.map((cf) => (
                    <div key={cf.name}>
                      <span className="font-bold">{cf.name}</span>
                      <span className="text-muted-foreground"> · {cf.role}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* The way of life */}
        <section>
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: THE WAY OF LIFE :::
          </div>
          <p className="text-lg sm:text-xl leading-relaxed text-foreground/85">
            {s.theme}
          </p>
        </section>

        {/* Citizens */}
        <section>
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: CITIZENS :::
          </div>
          <p className="text-lg leading-relaxed text-foreground/85">
            {s.citizens}.
          </p>
        </section>

        {/* City scout */}
        <section>
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: SITE SCOUT :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-4 flex items-center gap-3 flex-wrap">
            <span>{locationFlag(s.capital)}</span>
            <span>{s.capital}</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-foreground/85">
            {cityScout}
          </p>
        </section>

        {/* Why now */}
        <section>
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: WHY NOW :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-4">
            The moral case.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-foreground/85">
            {whyNow}
          </p>
        </section>

        {/* Next steps */}
        <section>
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: NEXT STEPS :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-6">
            From idea to polity.
          </h2>
          <ol className="space-y-3">
            {nextSteps.map((step, i) => (
              <li
                key={i}
                className="grid grid-cols-[auto_1fr] gap-4 border-2 border-border bg-background shadow-brutal-sm p-4 font-mono"
              >
                <span
                  className="font-bold tabular-nums text-xl"
                  style={{ color: accentHex }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base text-foreground/90 leading-relaxed">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* Pitch / context */}
        <section className="border-2 border-border bg-background shadow-brutal-md p-6 sm:p-8">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: A NOTE FROM THE FOUNDER OF INTERNETA :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-5">
            Why I sent you this link.
          </h2>
          <p className="font-mono text-base sm:text-lg leading-relaxed text-foreground/85 mb-4">
            I have lived at <a href="https://ns.com" className="underline" target="_blank" rel="noopener noreferrer">Network School</a> for over a year. I have watched the network state thesis go from a book to a real, lived experiment. I have seen Balaji put it to work, and I have seen what is missing.
          </p>
          <p className="font-mono text-base sm:text-lg leading-relaxed text-foreground/85 mb-4">
            The missing piece is a federation. A meta-layer that gives every distinct community a constitutional home, a shared census, an interoperable passport, an anthem, and a way to recognize each other as legitimate.
          </p>
          <p className="font-mono text-base sm:text-lg leading-relaxed text-foreground/85 mb-4">
            That is what Interneta is. The United States of Interneta. The optimistic meta-layer for network states.
          </p>
          <p className="font-mono text-base sm:text-lg leading-relaxed text-foreground/85 mb-4">
            <strong>{s.stateName}</strong> is what I think you would build, if you decided to build one. The One Commandment is what I have inferred from your public work. The site scout, the next steps, the citizenry: all educated guesses. They are wrong wherever you say so.
          </p>
          <p className="font-mono text-base sm:text-lg leading-relaxed text-foreground/85 mb-6">
            If any of this lands, I would love a fifteen-minute conversation. If none of it lands, I would still love your reply telling me where I missed.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://x.com/adamtpang"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-border bg-foreground text-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-5 py-3 font-mono font-bold text-sm"
            >
              [ DM @adamtpang ]
            </a>
            <a
              href="mailto:adamtpang@gmail.com?subject=Re: Interneta and ${encodeURIComponent(s.stateName)}"
              className="border-2 border-border bg-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-5 py-3 font-mono font-bold text-sm"
            >
              [ EMAIL ]
            </a>
            <Link
              href="/constitution"
              className="border-2 border-border bg-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-5 py-3 font-mono font-bold text-sm"
            >
              [ READ THE CONSTITUTION ]
            </Link>
          </div>
        </section>

        {/* Related */}
        <section>
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: NEIGHBORING POLITIES :::
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {related.map((r) => {
              const c = PALETTE_HEX[r.paletteIndex % PALETTE_HEX.length];
              return (
                <Link
                  key={r.slug}
                  href={`/imagined/${r.slug}`}
                  className="border-2 border-border bg-background shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all p-4 font-mono"
                >
                  <div className="text-3xl mb-2">{r.themeIcon}</div>
                  <div className="font-bold text-sm" style={{ color: c }}>
                    {r.stateName}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {r.founder}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Footer palette */}
        <div className="flex gap-1 pt-8" aria-hidden>
          {PALETTE.map((c, i) => (
            <span key={i} className="block h-2 flex-1" style={{ background: c }} />
          ))}
        </div>
      </div>
    </div>
  );
}
