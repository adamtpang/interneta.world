import type { Metadata } from "next";
import Link from "next/link";
import { InternetaPassport } from "@/components/interneta-passport";

export const metadata: Metadata = {
  title: "Citizens | interneta.world",
  description:
    "Claim Interneta citizenship. A soulbound passport, a public affirmation, a place in the census. See the passport mockup.",
  alternates: { canonical: "https://interneta.world/citizens" },
};

export default function CitizensPage() {
  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
          ::: CITIZEN REGISTRY :::
        </div>
        <h1 className="font-mono font-bold text-4xl sm:text-6xl leading-tight tracking-tight mb-8">
          Be counted.
        </h1>
        <p className="font-mono text-lg sm:text-xl text-foreground/80 leading-relaxed mb-12">
          Citizenship in Interneta is a public affirmation. You sign with a key
          you control; the federation records your assent on chain. You can
          renounce it at any time. There is no fee, no birthright, no border.
          There is only choice.
        </p>

        {/* Passport mockup */}
        <div className="mb-12">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: YOUR PASSPORT :::
          </div>
          <InternetaPassport />
        </div>

        <div className="border-2 border-border bg-background shadow-brutal-md p-6 sm:p-8 mb-12">
          <div className="font-mono text-xs tracking-widest text-muted-foreground mb-4">
            CITIZEN AFFIRMATION
          </div>
          <p className="font-mono text-base sm:text-lg leading-relaxed mb-6">
            <em>
              I, the undersigned, freely affirm citizenship of the United States
              of Interneta. I uphold its Constitution as a living document. I
              retain dual loyalties. I reserve the right to exit. I will be
              counted.
            </em>
          </p>
          <button
            disabled
            className="border-2 border-border bg-muted text-muted-foreground px-6 py-3 font-mono font-bold text-base shadow-brutal-sm cursor-not-allowed"
          >
            [ SIGN WITH WALLET · COMING SOON ]
          </button>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            Wallet authentication will be wired up in v0.1. Check back, or join
            the waitlist below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {[
            { n: "0", label: "CITIZENS", value: "0" },
            { n: "0", label: "MEMBER STATES", value: "0" },
            { n: "∞", label: "POTENTIAL", value: "∞" },
          ].map((s) => (
            <div
              key={s.label}
              className="border-2 border-border bg-background shadow-brutal-sm p-5 font-mono"
            >
              <div className="text-3xl font-bold mb-1">{s.value}</div>
              <div className="text-xs tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="font-mono text-sm text-muted-foreground space-y-2">
          <p>The census is open. The treasury is on-chain. The keys are yours.</p>
          <p>
            Read the{" "}
            <Link href="/constitution" className="underline hover:text-foreground">
              Constitution
            </Link>{" "}
            first. Then sign, or fork.
          </p>
        </div>
      </div>
    </div>
  );
}
