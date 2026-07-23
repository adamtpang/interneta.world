"use client";

import { useMemo, useState } from "react";
import {
  AXES,
  evaluate,
  GATE_CAPS,
  type GateState,
  type Site,
} from "@/lib/data/node-search";

function Dots({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex gap-1 flex-shrink-0">
      {[1, 2, 3, 4, 5].map((i) => (
        <button
          key={i}
          onClick={() => onChange(i === value ? 0 : i)}
          aria-label={`Rate ${i}`}
          className="w-5 h-5 border-2 border-border transition-colors"
          style={{ background: i <= value ? "var(--iw-green)" : "transparent" }}
        />
      ))}
    </div>
  );
}

const GATE_LABELS: {
  key: keyof GateState;
  label: string;
  detail: string;
  cap: number;
}[] = [
  {
    key: "govt",
    label: "Written government commitment",
    detail: "A named sponsor and a signed document, not a handshake.",
    cap: GATE_CAPS.govt,
  },
  {
    key: "immigration",
    label: "Viable long-stay visa path",
    detail: "For the actual member-nationality mix, not the average case.",
    cap: GATE_CAPS.immigration,
  },
  {
    key: "siteWrapper",
    label: "Site-specific legal wrapper",
    detail: "An SEZ, charter, or financial-centre regime around the site itself.",
    cap: GATE_CAPS.siteWrapper,
  },
];

export function NsNodeScorecard({ sites = [] }: { sites?: Site[] }) {
  const [scores, setScores] = useState<Record<string, number>>(() =>
    Object.fromEntries(AXES.map((a) => [a.key, 0]))
  );
  const [gates, setGates] = useState<GateState>({
    govt: true,
    immigration: true,
    siteWrapper: true,
  });
  const [siteName, setSiteName] = useState("");

  const evalResult = useMemo(() => evaluate(scores, gates), [scores, gates]);
  const anyRated = Object.values(scores).some((v) => v > 0);

  const set = (key: string, v: number) =>
    setScores((s) => ({ ...s, [key]: v }));

  const loadPreset = (slug: string) => {
    const s = sites.find((x) => x.slug === slug);
    if (s) {
      setScores({ ...s.scores });
      setGates({ ...s.gates });
      setSiteName(s.city);
    }
  };

  const reset = () => {
    setScores(Object.fromEntries(AXES.map((a) => [a.key, 0])));
    setGates({ govt: true, immigration: true, siteWrapper: true });
    setSiteName("");
  };

  return (
    <div className="border-2 border-border bg-background shadow-brutal-md p-5 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div className="flex-1">
          <label className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
            CANDIDATE SITE
          </label>
          <input
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            placeholder="Name a site..."
            className="w-full border-2 border-border bg-background px-3 py-2 font-mono text-base mt-1 focus:outline-none"
          />
        </div>
        <div className="text-center sm:text-right">
          <div
            className="font-mono font-bold text-5xl tabular-nums leading-none"
            style={{
              color: anyRated ? evalResult.color : "var(--muted-foreground)",
            }}
          >
            {evalResult.final}
          </div>
          <div className="font-mono text-[10px] tracking-widest text-muted-foreground">
            / 100 NODE-FIT
          </div>
          {evalResult.capped && (
            <div
              className="font-mono text-[10px] mt-1"
              style={{ color: "var(--iw-red)" }}
            >
              capped from {evalResult.raw}
            </div>
          )}
        </div>
      </div>

      {anyRated && (
        <div
          className="border-2 border-border p-4 mb-6 font-mono"
          style={{ background: `${evalResult.color}14` }}
        >
          <div
            className="text-sm font-bold tracking-[0.2em]"
            style={{ color: evalResult.color }}
          >
            {evalResult.band}
          </div>
          <div className="text-xs text-foreground/75 mt-1 leading-relaxed">
            {evalResult.note}
          </div>
          {evalResult.capReason && (
            <div
              className="text-xs mt-2 font-bold leading-relaxed"
              style={{ color: "var(--iw-red)" }}
            >
              HARD GATE: {evalResult.capReason}
            </div>
          )}
        </div>
      )}

      <div className="border-2 border-border p-4 mb-6 bg-muted/20">
        <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground mb-3">
          HARD GATES · these cap the score, they are not weighted
        </div>
        <div className="space-y-2">
          {GATE_LABELS.map((g) => (
            <label
              key={g.key}
              className="flex items-start gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={gates[g.key]}
                onChange={(e) =>
                  setGates((s) => ({ ...s, [g.key]: e.target.checked }))
                }
                className="mt-1 w-4 h-4 flex-shrink-0 cursor-pointer"
              />
              <div className="min-w-0">
                <div className="font-mono text-xs font-bold">
                  {g.label}{" "}
                  {!gates[g.key] && (
                    <span style={{ color: "var(--iw-red)" }}>
                      · caps at {g.cap}
                    </span>
                  )}
                </div>
                <div className="font-mono text-[10px] text-muted-foreground">
                  {g.detail}
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {sites.length > 0 && (
        <div className="mb-6">
          <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground mb-2">
            LOAD A CANDIDATE
          </div>
          <div className="flex flex-wrap gap-2">
            {sites.map((s) => (
              <button
                key={s.slug}
                onClick={() => loadPreset(s.slug)}
                className="font-mono text-xs px-2.5 py-1 border-2 border-border bg-background hover:bg-muted transition-colors"
              >
                {s.flag} {s.city}
              </button>
            ))}
            <button
              onClick={reset}
              className="font-mono text-xs px-2.5 py-1 border-2 border-border bg-muted hover:bg-foreground hover:text-background transition-colors"
            >
              CLEAR
            </button>
          </div>
        </div>
      )}

      <div className="space-y-2">
        {AXES.map((a) => (
          <div
            key={a.key}
            className="flex items-center justify-between gap-3 border-b border-border/50 pb-2"
          >
            <div className="font-mono text-xs sm:text-sm flex items-center gap-2 min-w-0">
              <span className="text-muted-foreground tabular-nums flex-shrink-0">
                {a.n}.
              </span>
              <span className="truncate" title={a.five}>
                {a.name}
              </span>
              <span
                className="text-[8px] tracking-widest px-1 border border-border text-muted-foreground flex-shrink-0"
                title={`Weight ${a.weight.toFixed(1)}x`}
              >
                {a.weight.toFixed(1)}x
              </span>
            </div>
            <Dots value={scores[a.key]} onChange={(v) => set(a.key, v)} />
          </div>
        ))}
      </div>

      <p className="font-mono text-[10px] text-muted-foreground mt-5 leading-relaxed">
        Weights come from the Malaysia post-mortem: government partnership
        (3.0x) and immigration (2.5x) outrank cost and lifestyle. The three
        gates above are not scores — untick one and the result is capped
        regardless of everything else, because a licence granted is a licence
        that can be revoked. Decision support, not an oracle.
      </p>
    </div>
  );
}
