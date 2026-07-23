import type { Metadata } from "next";
import Link from "next/link";
import { NsNodeScorecard } from "@/components/ns-node-scorecard";
import {
  AXES,
  SITES,
  LEVELS,
  NODE_STAGES,
  COUNTRY_GATES,
  ALMATY_FACILITIES,
  GUARDRAILS,
  REFERENCES,
  evaluate,
} from "@/lib/data/ns-node-search";

export const metadata: Metadata = {
  title: "NS Node Search · Kazakhstan | interneta.world",
  description:
    "Malaysia revoked Network School's licence. Kazakhstan signed an MOU. Five candidate sites ranked on a 9-axis rubric with hard gates, scored country to facility.",
  alternates: { canonical: "https://interneta.world/portal/kazakhstan" },
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

export default function KazakhstanNodeSearchPage() {
  const ranked = SITES.map((s) => ({ ...s, ev: evaluate(s.scores, s.gates) })).sort(
    (a, b) => b.ev.final - a.ev.final
  );
  const top = ranked[0];
  const runnerUp = ranked[1];

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
          ::: NODE SEARCH ::: 22 JUL 2026 :::
        </div>
        <h1 className="font-mono font-bold text-4xl sm:text-6xl leading-tight tracking-tight mb-6">
          Where does Network School<br />
          <span className="text-muted-foreground">land in Kazakhstan?</span>
        </h1>
        <div className="flex gap-1 mb-8" aria-hidden>
          {PALETTE.map((c, i) => (
            <span key={i} className="block h-2 flex-1" style={{ background: c }} />
          ))}
        </div>

        {/* Situation */}
        <section className="mb-14">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: THE SITUATION :::
          </div>
          <div className="space-y-4 text-base sm:text-lg text-foreground/85 leading-relaxed">
            <p>
              On 21 July 2026 the Iskandar Puteri City Council revoked the
              business licence of NSO Malaysia Sdn Bhd, the operator of Network
              School, and ordered its Forest City premises to cease operating
              from 22 July, citing licensing and premises-use breaches. MDEC
              moved to revoke the company&apos;s Malaysia Digital status, and the
              Johor state government backed the decision.
            </p>
            <p>
              Within hours, Balaji Srinivasan announced a memorandum of
              understanding between the Republic of Kazakhstan and Network
              School for a new campus, signed with Minister of Digital
              Development, Innovation and Aerospace Industry Zhaslan Madiyev.
              The stated terms: expedited visas, streamlined redomiciliation,
              and active recruitment of talent. The country is decided. The site
              is not.
            </p>
          </div>

          <div className="border-2 border-border bg-background shadow-brutal-md p-5 sm:p-6 mt-6 font-mono">
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground mb-2">
              THE STRUCTURAL LESSON
            </div>
            <p className="text-base sm:text-lg leading-relaxed">
              Forest City did not fail at the country level. Malaysia welcomed
              NS. It failed at the <strong>facility level</strong>: a
              premises-use licence on two adjoining units, where the activity
              did not match the permitted use. That is why the gates below are
              checked at <strong>every</strong> level. Passing at country level
              tells you nothing about the building.
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
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-3">
            Kazakhstan clears both. Sourced.
          </h2>
          <p className="font-mono text-sm text-muted-foreground mb-6 max-w-2xl">
            These are hard gates, not weighted scores. Fail one and a site is
            capped no matter how cheap or pleasant it is.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {COUNTRY_GATES.map((g) => (
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
                <a
                  href={g.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] underline text-muted-foreground"
                >
                  {g.source.label} →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Ranked sites */}
        <section className="mb-14">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: THE RANKING :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-3">
            Five candidates, scored.
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

                {/* Gate chips */}
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
                      {s.gates[k] ? "✓" : "✕"} {label}
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

                {/* Expandable axis breakdown with sources */}
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

          <div className="border-2 border-border bg-background shadow-brutal-md p-5 mt-6 font-mono">
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground mb-2">
              THE READ
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85 mb-3">
              <strong>{top.city}</strong> leads at {top.ev.final}/100 because it
              answers the exact failure mode: the AIFC gives a codified
              English-common-law wrapper, an independent court, and a real
              redomiciliation path, next to the ministry that signed the MOU.{" "}
              <strong>{runnerUp.city}</strong> is the close second and the more
              interesting bet: a purpose-built tech city that already has its own
              special legal regime, sitting next to the deepest talent pool in
              the country.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
              The honest recommendation is not either/or.{" "}
              <strong>
                Incorporate in Astana under AIFC, put the campus in the Almaty
                region.
              </strong>{" "}
              Legal wrapper where the law is; people where the people want to
              be. That split is exactly what Forest City lacked.
            </p>
          </div>
        </section>

        {/* Almaty facility shortlist */}
        <section className="mb-14">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: FACILITY LEVEL ::: ALMATY :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-3">
            The level that actually bites.
          </h2>
          <p className="font-mono text-sm text-muted-foreground mb-6 max-w-2xl">
            Four facility options in the Almaty area, each with the specific
            thing to verify in writing before signing. This is where Forest City
            was lost.
          </p>
          <div className="space-y-3">
            {ALMATY_FACILITIES.map((f, i) => (
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
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-4">
            The v1 to v5 ladder.
          </h2>
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
            Rate a candidate 0-5 on each axis, or load a Kazakhstan site and
            adjust. Untick a hard gate to watch the score get capped.
          </p>
          <NsNodeScorecard />
        </section>

        {/* Guardrails */}
        <section className="mb-14">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: GUARDRAILS :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-5">
            So a node doesn&apos;t get revoked twice.
          </h2>
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

        {/* References */}
        <section className="mb-12">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: SOURCES :::
          </div>
          <ul className="space-y-1.5 font-mono text-xs">
            {REFERENCES.map((r) => (
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
            estimates in the breakdown. The ns.com/search page is login-gated —
            merge its content here when available.
          </p>
        </section>

        {/* Cross-links */}
        <section className="border-2 border-border bg-background shadow-brutal-md p-5 sm:p-6">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: RELATED :::
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono">
            <Link
              href="/portal"
              className="border-2 border-border bg-background shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all p-4"
            >
              <div className="font-bold text-sm mb-1">Portal →</div>
              <div className="text-xs text-foreground/70">
                The general node-siting rubric, plus what Balaji optimized for at
                Forest City.
              </div>
            </Link>
            <Link
              href="/playbook"
              className="border-2 border-border bg-background shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all p-4"
            >
              <div className="font-bold text-sm mb-1">Playbook →</div>
              <div className="text-xs text-foreground/70">
                When to launch a second node, and the founder readiness test.
              </div>
            </Link>
            <Link
              href="/world/malaysia"
              className="border-2 border-border bg-background shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all p-4"
            >
              <div className="font-bold text-sm mb-1">Malaysia →</div>
              <div className="text-xs text-foreground/70">
                The mirror profile: Forest City, the SEZs, and what the node was
                built on.
              </div>
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
