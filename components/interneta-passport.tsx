// A visual mockup of the Interneta passport. Pure SVG/CSS, no data.
// The soulbound credential every citizen holds. Identity layer powered by
// technodemocracy.app; the passport is what it looks like in the hand.

const PALETTE = [
  "#06b6d4",
  "#d946ef",
  "#eab308",
  "#16a34a",
  "#dc2626",
  "#4f46e5",
  "#ea580c",
];

export function InternetaPassport() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className="border-2 border-border shadow-brutal-md overflow-hidden"
        style={{ background: "#0a0a14", aspectRatio: "1.4 / 1" }}
      >
        {/* top palette band */}
        <div className="flex h-2.5">
          {PALETTE.map((c) => (
            <div key={c} style={{ background: c, flex: 1 }} />
          ))}
        </div>

        <div className="p-5 sm:p-6 text-white font-mono h-full flex flex-col">
          {/* header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-[9px] tracking-[0.3em] text-white/50">
                THE UNITED STATES OF
              </div>
              <div className="text-xl sm:text-2xl font-bold tracking-tight">
                {"INTERNETA".split("").map((l, i) => (
                  <span key={i} style={{ color: PALETTE[i % PALETTE.length] }}>
                    {l}
                  </span>
                ))}
              </div>
              <div className="text-[9px] tracking-[0.3em] text-white/50 mt-0.5">
                CITIZEN PASSPORT
              </div>
            </div>
            <div className="text-3xl" aria-hidden>
              🌐
            </div>
          </div>

          {/* body */}
          <div className="flex gap-4 flex-1">
            {/* portrait placeholder */}
            <div
              className="w-20 h-24 sm:w-24 sm:h-28 border border-white/20 flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, #06b6d433, #4f46e533)",
              }}
            >
              <span className="text-3xl text-white/40">☺</span>
            </div>
            {/* fields */}
            <div className="flex-1 min-w-0 space-y-2 text-[10px] sm:text-xs">
              <Field label="CITIZEN NO." value="IW-000001" />
              <Field label="NAME" value="YOUR NAME HERE" />
              <Field label="MEMBER STATE" value="UNAFFILIATED" />
              <Field label="ISSUED" value="ON SIGNATURE" />
              <Field label="KEY" value="0x····your·wallet" />
            </div>
          </div>

          {/* machine-readable zone */}
          <div className="mt-4 pt-3 border-t border-white/15">
            <div className="text-[8px] sm:text-[9px] text-white/40 break-all leading-relaxed">
              IW&lt;&lt;INTERNETA&lt;&lt;CITIZEN&lt;&lt;CHOICE&lt;NOT&lt;BIRTH&lt;&lt;
              <br />
              0x00000000&lt;&lt;SOULBOUND&lt;&lt;EXIT&lt;GUARANTEED&lt;&lt;FORKABLE
            </div>
          </div>
        </div>
      </div>

      <p className="font-mono text-[10px] text-center text-muted-foreground mt-3">
        Mockup. The passport is a soulbound credential. Identity and governance
        layer powered by{" "}
        <a
          href="https://technodemocracy.app"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          technodemocracy.app
        </a>
        .
      </p>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[8px] sm:text-[9px] tracking-[0.2em] text-white/40">
        {label}
      </div>
      <div className="font-bold text-white/90 truncate">{value}</div>
    </div>
  );
}
