import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  WORLD_MIRRORS,
  getMirrorBySlug,
} from "@/lib/data/world-mirrors";

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
  return WORLD_MIRRORS.map((m) => ({ slug: m.slug }));
}

type RouteParams = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = getMirrorBySlug(slug);
  if (!m) return { title: "Not found | interneta.world" };
  return {
    title: `${m.countryName} · ${m.internetName} | interneta.world`,
    description: `${m.oneCommandment} The internet version of ${m.countryName}. ${m.whyFertile.slice(0, 110)}`,
    alternates: { canonical: `https://interneta.world/world/${m.slug}` },
  };
}

export default async function WorldProfile({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const m = getMirrorBySlug(slug);
  if (!m) notFound();

  const accent = PALETTE_HEX[m.paletteIndex % PALETTE_HEX.length];

  // Cross-link: 3 nearby mirrors (same paletteIndex band).
  const related = WORLD_MIRRORS.filter((x) => x.slug !== m.slug)
    .sort(
      (a, b) =>
        Math.abs(a.paletteIndex - m.paletteIndex) -
        Math.abs(b.paletteIndex - m.paletteIndex)
    )
    .slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="border-b-2 border-border"
        style={{
          background: `linear-gradient(135deg, ${accent}22 0%, ${accent}08 70%, transparent 100%)`,
        }}
      >
        <div className="max-w-5xl mx-auto px-4 py-12 sm:py-20">
          <Link
            href="/world"
            className="font-mono text-xs underline text-muted-foreground mb-6 inline-block"
          >
            ← back to the world catalog
          </Link>
          <div
            className="font-mono text-xs tracking-[0.3em] mb-4"
            style={{ color: accent }}
          >
            ::: INTERNET VERSION OF {m.countryName.toUpperCase()} :::
          </div>
          <div className="flex items-start gap-6 mb-6 flex-wrap">
            <div className="text-7xl sm:text-9xl flex-shrink-0" aria-hidden>
              {m.flag}
            </div>
            <div className="flex-1 min-w-0">
              <h1
                className="font-mono font-bold text-4xl sm:text-7xl leading-[0.9] tracking-tight"
                style={{ color: accent }}
              >
                {m.internetName}
              </h1>
              <p className="font-mono text-base sm:text-xl text-foreground/70 mt-3">
                The {m.countryName} mirror
              </p>
            </div>
          </div>
          <blockquote
            className="font-mono italic text-2xl sm:text-3xl leading-tight border-l-4 pl-6 mt-8 max-w-3xl"
            style={{ borderColor: accent }}
          >
            &ldquo;{m.oneCommandment}&rdquo;
          </blockquote>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16 space-y-16">
        {/* Why Fertile */}
        <section>
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: WHY THIS COUNTRY :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-4">
            The substrate is already here.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-foreground/85">
            {m.whyFertile}
          </p>
        </section>

        {/* SEZs */}
        <section>
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: SPECIAL ECONOMIC ZONES :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-4">
            Pre-existing legal scaffolds.
          </h2>
          <ul className="space-y-2 font-mono">
            {m.specialEconomicZones.map((sez, i) => (
              <li
                key={sez}
                className="border-2 border-border bg-background shadow-brutal-sm p-3 flex items-center gap-3"
              >
                <span
                  className="text-xs tabular-nums font-bold"
                  style={{ color: accent }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm">{sez}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* City sites */}
        <section>
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: CITY SITES :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-4">
            Where the polity could anchor.
          </h2>
          <div className="space-y-3">
            {m.citySites.map((c) => (
              <div
                key={c.name}
                className="border-l-4 pl-4 py-2"
                style={{ borderColor: accent }}
              >
                <div className="font-mono font-bold text-lg">{c.name}</div>
                <div className="text-sm text-foreground/75 leading-relaxed">
                  {c.reason}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Founders */}
        <section>
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: CANDIDATE FOUNDERS :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-4">
            Who could run this.
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {m.founderCandidates.map((f) => (
              <li
                key={f}
                className="border-2 border-border bg-background shadow-brutal-sm p-4 font-mono"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 border-border mb-2"
                  style={{ background: accent, color: "white" }}
                >
                  {f
                    .split(" ")
                    .map((p) => p[0])
                    .filter(Boolean)
                    .slice(0, 2)
                    .join("")}
                </div>
                <div className="text-sm">{f}</div>
              </li>
            ))}
          </ul>
        </section>

        {/* Existing societies */}
        {m.existingSocieties.length > 0 && (
          <section>
            <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
              ::: ALREADY ON THE GROUND :::
            </div>
            <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-4">
              Existing societies in this country.
            </h2>
            <div className="flex flex-wrap gap-2">
              {m.existingSocieties.map((soc) => (
                <span
                  key={soc}
                  className="font-mono text-sm px-3 py-1.5 border-2 border-border bg-background"
                >
                  {soc}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="border-2 border-border bg-background shadow-brutal-md p-6 sm:p-8">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: BUILD THIS MIRROR :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-5">
            Be the founder of {m.internetName}.
          </h2>
          <p className="font-mono text-base leading-relaxed text-foreground/85 mb-6">
            If you live in {m.countryName}, run a project there, or are
            connected to one of the candidate founders above, this is your
            invitation. The substrate is in place. The legal scaffolds exist.
            What is missing is the polity.
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
            <Link
              href="/imagined"
              className="border-2 border-border bg-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-5 py-3 font-mono font-bold text-sm"
            >
              [ SEE IMAGINED FOUNDERS ]
            </Link>
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
            ::: NEIGHBORING MIRRORS :::
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/world/${r.slug}`}
                className="border-2 border-border bg-background shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all p-3 font-mono"
              >
                <div className="text-3xl mb-1">{r.flag}</div>
                <div
                  className="font-bold text-xs"
                  style={{ color: PALETTE_HEX[r.paletteIndex % PALETTE_HEX.length] }}
                >
                  {r.internetName}
                </div>
                <div className="text-[10px] text-muted-foreground mt-0.5">
                  {r.countryName}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Palette stripe */}
        <div className="flex gap-1 pt-8" aria-hidden>
          {PALETTE.map((c, i) => (
            <span key={i} className="block h-2 flex-1" style={{ background: c }} />
          ))}
        </div>
      </div>
    </div>
  );
}
