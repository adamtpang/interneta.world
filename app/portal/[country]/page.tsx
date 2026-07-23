import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NsNodeScorecard } from "@/components/ns-node-scorecard";
import { ShareBar } from "@/components/share-bar";
import {
  AXES,
  LEVELS,
  NODE_STAGES,
  GUARDRAILS,
  NS_BOUNTY,
  NS_FORM,
  NS_FORM_INSIGHTS,
  FACILITY_CHECKLIST,
  rankSites,
} from "@/lib/data/node-search";
import { NODE_SEARCHES, getNodeSearch } from "@/lib/data/node-searches";

const PALETTE = [
  "var(--iw-cyan)",
  "var(--iw-magenta)",
  "var(--iw-gold)",
  "var(--iw-green)",
  "var(--iw-red)",
  "var(--iw-indigo)",
  "var(--iw-orange)",
];

export async function generateStaticParams() {
  return NODE_SEARCHES.map((s) => ({ country: s.slug }));
}

type RouteParams = { country: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { country } = await params;
  const s = getNodeSearch(country);
  if (!s) return { title: "Node search not found | interneta.world" };
  const ranked = rankSites(s);
  const top = ranked[0];
  return {
    title: `NS Node Search · ${s.country} | interneta.world`,
    description: `${s.sites.length} candidate sites in ${s.country} ranked on the 9-axis node-fit rubric with hard gates. Top: ${top.city} at ${top.ev.final}/100.`,
    alternates: { canonical: `https://interneta.world/portal/${s.slug}` },
  };
}

export default async function NodeSearchPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { country } = await params;
  const search = getNodeSearch(country);
  if (!search) notFound();

  const ranked = rankSites(search);
  const others = NODE_SEARCHES.filter((s) => s.slug !== search.slug);

  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          href="/portal"
          className="font-mono text-xs underline text-muted-foreground mb-6 inline-block"
        >
          ← back to Portal
        </Link>

        {/* Hero */}
        <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
          ::: NODE SEARCH ::: {search.dateline} :::
        </div>
        <h1 className="font-mono font-bold text-4xl sm:text-6xl leading-tight tracking-tight mb-6">
          {search.headline}
          <br />
          <span className="text-muted-foreground">{search.subhead}</span>
        </h1>
        <div className="flex gap-1 mb-6" aria-hidden>
          {PALETTE.map((c, i) => (
            <span key={i} className="block h-2 flex-1" style={{ background: c }} />
          ))}
        </div>

        {search.status === "watch" && (
          <div
            className="border-2 border-border p-4 mb-8 font-mono text-sm"
            style={{ background: "var(--iw-orange)14" }}
          >
            <span className="font-bold" style={{ color: "var(--iw-orange)" }}>
              WATCH LIST ·
            </span>{" "}
            Not a live search. Included as a control case for the rubric.
          </div>
        )}

        <ShareBar
          slug={search.slug}
          country={search.country}
          top={`${ranked[0].city} ${ranked[0].ev.final}/100`}
        />

        {/* Situation */}
        <section className="mb-14 mt-10">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: THE SITUATION :::
          </div>
          <div className="space-y-4 text-base sm:text-lg text-foreground/85 leading-relaxed">
            {search.situation.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="border-2 border-border bg-background shadow-brutal-md p-5 sm:p-6 mt-6 font-mono">
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground mb-2">
              THE STRUCTURAL LESSON
            </div>
            <p className="text-base sm:text-lg leading-relaxed">
              {search.structuralLesson}
            </p>
          </div>
        </section>

        {/* Hierarchy */}
        <section className="mb-14">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: THE SCOUTING HIERARCHY :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-3">
            Country, region, state, facility.
          </h2>
          <p className="font-mono text-sm text-muted-foreground mb-6 max-w-2xl">
            NS scouts in this order. Each level has its own gate, and the level
            that killed Forest City was the last one.
          </p>
          <div className="space-y-3">
            {LEVELS.map((l, i) => (
              <div
                key={l.key}
                className="border-l-4 pl-4 py-2"
                style={{ borderColor: PALETTE[i % PALETTE.length] }}
              >
                <div className="font-mono font-bold text-base flex items-center gap-2 flex-wrap">
                  <span
                    className="text-xs tabular-nums"
                    style={{ color: PALETTE[i % PALETTE.length] }}
                  >
                    {l.n}
                  </span>
                  <span>{l.label}</span>
                </div>
                <div className="font-mono text-xs text-foreground/80 mt-0.5">
                  {l.question}
                </div>
                <div className="font-mono text-[11px] text-muted-foreground italic mt-1">
                  Forest City: {l.forestCity}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Country gates */}
        <section className="mb-14">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: COUNTRY-LEVEL GATES :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-6">
            {search.countryGates.every((g) => g.met)
              ? `${search.country} clears both. Sourced.`
              : `${search.country} fails a gate.`}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {search.countryGates.map((g) => (
              <div
                key={g.key}
                className="border-2 border-border bg-background shadow-brutal-sm p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="font-mono text-[10px] font-bold px-1.5 py-0.5 border-2 border-border"
                    style={{
                      color: g.met ? "var(--iw-green)" : "var(--iw-red)",
                    }}
                  >
                    {g.met ? "PASS" : "FAIL"}
                  </span>
                  <span className="font-mono font-bold text-sm">{g.label}</span>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-2">
                  {g.claim}
                </p>
                {g.source && (
                  <a
                    href={g.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] underline text-muted-foreground"
                  >
                    {g.source.label} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Ranking */}
        <section className="mb-14">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: THE RANKING :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-3">
            {search.sites.length} candidates, scored.
          </h2>
          <p className="font-mono text-sm text-muted-foreground mb-6 max-w-2xl">
            Each scored 0-5 on nine weighted axes, normalized to 100, then
            gate-capped. Expand any site for the axis-by-axis breakdown with
            sources.
          </p>

          <div className="space-y-4">
            {ranked.map((s, i) => (
              <div
                key={s.slug}
                className="border-2 border-border bg-background shadow-brutal-md p-5"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs text-muted-foreground tabular-nums">
                        #{i + 1}
                      </span>
                      <span className="text-2xl">{s.flag}</span>
                      <h3 className="font-mono font-bold text-xl sm:text-2xl">
                        {s.city}
                      </h3>
                    </div>
                    <div className="font-mono text-[11px] text-muted-foreground mt-1">
                      {s.region} · {s.level}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div
                      className="font-mono font-bold text-3xl tabular-nums leading-none"
                      style={{ color: s.ev.color }}
                    >
                      {s.ev.final}
                    </div>
                    <div
                      className="font-mono text-[9px] tracking-widest mt-1"
                      style={{ color: s.ev.color }}
                    >
                      {s.ev.band}
                    </div>
                    {s.ev.capped && (
                      <div
                        className="font-mono text-[9px] mt-0.5"
                        style={{ color: "var(--iw-red)" }}
                      >
                        capped from {s.ev.raw}
                      </div>
                    )}
                  </div>
                </div>

                <div className="h-2 bg-muted border border-border mb-3 overflow-hidden">
                  <div
                    className="h-full"
                    style={{ width: `${s.ev.final}%`, background: s.ev.color }}
                  />
                </div>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {(
                    [
                      ["govt", "GOVT COMMITMENT"],
                      ["immigration", "VISA PATH"],
                      ["siteWrapper", "LEGAL WRAPPER"],
                    ] as const
                  ).map(([k, label]) => (
                    <span
                      key={k}
                      className="font-mono text-[9px] px-1.5 py-0.5 border-2 border-border"
                      style={{
                        color: s.gates[k] ? "var(--iw-green)" : "var(--iw-red)",
                      }}
                    >
                      {s.gates[k] ? "PASS" : "FAIL"} {label}
                    </span>
                  ))}
                </div>

                {s.ev.capReason && (
                  <div
                    className="font-mono text-[11px] mb-3 leading-relaxed"
                    style={{ color: "var(--iw-red)" }}
                  >
                    HARD GATE: {s.ev.capReason}
                  </div>
                )}

                <div className="font-mono text-xs mb-2">
                  <span className="text-muted-foreground">LANE · </span>
                  <span className="font-bold">{s.lane}</span>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-3">
                  {s.note}
                </p>

                <details className="border-2 border-border bg-muted/10">
                  <summary className="cursor-pointer font-mono text-xs font-bold px-3 py-2 select-none">
                    Axis breakdown + sources
                  </summary>
                  <div className="px-3 pb-3 pt-1 space-y-2.5">
                    <div className="font-mono text-[10px] text-muted-foreground leading-relaxed border-b border-border/50 pb-2">
                      <span className="font-bold">LEGAL WRAPPER · </span>
                      {s.wrapperClaim}
                      {s.wrapperSource && (
                        <>
                          {" "}
                          <a
                            href={s.wrapperSource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                          >
                            {s.wrapperSource.label} →
                          </a>
                        </>
                      )}
                    </div>
                    {AXES.map((a) => {
                      const e = s.evidence[a.key];
                      return (
                        <div
                          key={a.key}
                          className="grid grid-cols-[auto_1fr] gap-3 items-start"
                        >
                          <div className="font-mono text-xs font-bold tabular-nums w-6 text-center border border-border">
                            {s.scores[a.key]}
                          </div>
                          <div className="min-w-0">
                            <div className="font-mono text-[11px] font-bold">
                              {a.name}{" "}
                              <span className="text-muted-foreground font-normal">
                                {a.weight.toFixed(1)}x
                              </span>
                            </div>
                            <div className="text-[11px] text-foreground/75 leading-snug">
                              {e?.note ?? "No note recorded."}
                            </div>
                            {e?.source && (
                              <a
                                href={e.source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-[10px] underline text-muted-foreground"
                              >
                                {e.source.label} →
                              </a>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </details>
              </div>
            ))}
          </div>

          <div className="border-2 border-border bg-background shadow-brutal-md p-5 mt-6 font-mono space-y-3">
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground">
              THE READ
            </div>
            {search.read.map((p, i) => (
              <p
                key={i}
                className="text-sm sm:text-base leading-relaxed text-foreground/85"
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Facilities */}
        <section className="mb-14">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: {search.facilitiesLabel} :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-3">
            The level that actually bites.
          </h2>
          <p className="font-mono text-sm text-muted-foreground mb-6 max-w-2xl">
            {search.facilitiesIntro}
          </p>
          <div className="space-y-3">
            {search.facilities.map((f, i) => (
              <div
                key={f.name}
                className="border-2 border-border bg-background shadow-brutal-sm p-4"
              >
                <div className="flex items-baseline gap-2 flex-wrap mb-1">
                  <h3
                    className="font-mono font-bold text-base"
                    style={{ color: PALETTE[i % PALETTE.length] }}
                  >
                    {f.name}
                  </h3>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {f.kind}
                  </span>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-2">
                  {f.why}
                </p>
                <p
                  className="font-mono text-[11px] leading-relaxed"
                  style={{ color: "var(--iw-orange)" }}
                >
                  VERIFY: {f.watch}
                </p>
                {f.source && (
                  <a
                    href={f.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] underline text-muted-foreground mt-1 inline-block"
                  >
                    {f.source.label} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Node stages */}
        <section className="mb-14">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: WHAT A NODE IS :::
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
            {NODE_STAGES.map((s, i) => (
              <div
                key={s.v}
                className="border-2 border-border bg-background shadow-brutal-sm p-3"
              >
                <div
                  className="font-mono font-bold text-lg"
                  style={{ color: PALETTE[i % PALETTE.length] }}
                >
                  {s.v}
                </div>
                <div className="font-mono text-xs font-bold mb-1">{s.title}</div>
                <div className="text-[11px] text-foreground/70 leading-snug">
                  {s.detail}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Scorecard */}
        <section className="mb-14">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: SCORE YOUR OWN SITE :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-4">
            The rubric, live.
          </h2>
          <p className="font-mono text-sm text-muted-foreground mb-6 max-w-2xl">
            Rate a candidate 0-5 on each axis, or load a site and adjust. Untick
            a hard gate to watch the score get capped.
          </p>
          <NsNodeScorecard sites={search.sites} />
        </section>

        {/* Guardrails */}
        <section className="mb-14">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: GUARDRAILS :::
          </div>
          <ol className="space-y-3">
            {GUARDRAILS.map((g, i) => (
              <li
                key={i}
                className="border-l-4 pl-4 py-1 text-sm sm:text-base text-foreground/85 leading-relaxed"
                style={{ borderColor: PALETTE[i % PALETTE.length] }}
              >
                {g}
              </li>
            ))}
          </ol>
        </section>

        {/* What NS actually asks */}
        <section className="mb-14">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: WHAT NS ACTUALLY ASKS :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-3">
            The form is the rubric.
          </h2>
          <p className="font-mono text-sm text-muted-foreground mb-6 max-w-2xl">
            NS runs a public second-site search with a finder&apos;s fee at{" "}
            <a
              href={NS_BOUNTY.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              ns.com/search
            </a>
            . What the form asks is what NS weighs. Distilled below, grouped by
            their own hierarchy.
          </p>

          {/* Bounty */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
            {NS_BOUNTY.tiers.map((t) => (
              <div
                key={t.rank}
                className="border-2 border-border bg-background shadow-brutal-sm p-3 text-center"
              >
                <div
                  className="font-mono font-bold text-xl"
                  style={{ color: "var(--iw-gold)" }}
                >
                  {t.prize}
                </div>
                <div className="font-mono text-[9px] tracking-widest text-muted-foreground mt-1">
                  {t.rank.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
          <p className="font-mono text-[10px] text-muted-foreground mb-6">
            {NS_BOUNTY.note}
          </p>

          {/* Groups */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {NS_FORM.map((g, i) => (
              <div
                key={g.group}
                className="border-2 border-border bg-background shadow-brutal-sm p-4"
              >
                <div
                  className="font-mono font-bold text-base mb-0.5"
                  style={{ color: PALETTE[i % PALETTE.length] }}
                >
                  {g.group}
                </div>
                <div className="font-mono text-[10px] text-muted-foreground mb-2">
                  {g.maps}
                </div>
                <ul className="space-y-1.5">
                  {g.asks.map((a) => (
                    <li
                      key={a}
                      className="text-[12px] text-foreground/80 leading-snug pl-3 border-l-2 border-border"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Insights */}
          <div className="border-2 border-border bg-background shadow-brutal-md p-5 mb-6">
            <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-3">
              WHAT THE FORM REVEALS
            </div>
            <ol className="space-y-2.5">
              {NS_FORM_INSIGHTS.map((ins, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[auto_1fr] gap-3 text-sm text-foreground/85 leading-relaxed"
                >
                  <span
                    className="font-mono font-bold tabular-nums"
                    style={{ color: PALETTE[i % PALETTE.length] }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{ins}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Facility checklist */}
          <div className="border-2 border-border bg-background shadow-brutal-sm p-5">
            <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-3">
              THE FACILITY CHECKLIST · VERIFY IN WRITING
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {FACILITY_CHECKLIST.map((c) => (
                <li
                  key={c}
                  className="font-mono text-[11px] text-foreground/80 leading-snug flex gap-2"
                >
                  <span style={{ color: "var(--iw-green)" }}>▢</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Other searches */}
        {others.length > 0 && (
          <section className="mb-14">
            <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
              ::: OTHER SEARCHES :::
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {others.map((o) => {
                const r = rankSites(o)[0];
                return (
                  <Link
                    key={o.slug}
                    href={`/portal/${o.slug}`}
                    className="border-2 border-border bg-background shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all p-4 font-mono"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{o.flag}</span>
                      <span className="font-bold text-sm">{o.country}</span>
                      <span className="text-[9px] text-muted-foreground tracking-widest">
                        {o.status === "active" ? "ACTIVE" : "WATCH"}
                      </span>
                    </div>
                    <div className="text-xs text-foreground/70">
                      Top: {r.city} · {r.ev.final}/100
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* References */}
        <section className="mb-12">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: SOURCES :::
          </div>
          <ul className="space-y-1.5 font-mono text-xs">
            {search.references.map((r) => (
              <li key={r.url}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground text-muted-foreground"
                >
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="font-mono text-[10px] text-muted-foreground italic mt-4 max-w-2xl leading-relaxed">
            Axis scores are editorial estimates by Interneta from public
            sources, not an official Network School ranking. Every non-obvious
            claim carries a source; values without one are labeled editorial
            estimates in the breakdown.
          </p>
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
