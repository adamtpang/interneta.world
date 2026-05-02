import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Constitution | interneta.world",
  description:
    "The Constitution of the United States of Interneta — v0. A working draft of a social smart contract for the network state era.",
  alternates: { canonical: "https://interneta.world/constitution" },
};

const articles = [
  {
    n: "I",
    name: "Of the Polity",
    body: "Interneta is a voluntary federation of internet city-states. Membership is opt-in, freely renounceable, and proven on-chain. No member is bound to Interneta by birth, geography, or coercion. The federation exists to coordinate — not to govern. Interneta itself has no One Commandment; that is the prerogative of each member state. The federation is plural by design.",
  },
  {
    n: "II",
    name: "Of Citizenship",
    body: "Any human person may become a citizen of Interneta by signing the Citizen Affirmation with a cryptographic key they control. Citizenship is a soulbound credential. It may be voluntarily renounced at any time. Dual citizenship with nation-states and other network states is encouraged.",
  },
  {
    n: "III",
    name: "Of the Constitution Itself",
    body: "This Constitution is a living document, versioned in public. Amendments are proposed as pull requests against a public repository. An amendment is ratified when (a) it is signed by two-thirds of active citizens within a 30-day window, or (b) it is ratified by a quorum of member states equivalent to three-fourths of the federation.",
  },
  {
    n: "IV",
    name: "Of Member States",
    body: "Any network state, network union, startup society, or self-governing internet community may petition to join Interneta as a member state. Admission requires its own One Commandment, a recognized founder, a published charter, and proof of at least one in-person gathering. Member states retain full sovereignty over internal affairs. Interneta does not adjudicate between commandments; it hosts them.",
  },
  {
    n: "V",
    name: "Of the Census",
    body: "Interneta shall maintain a continuous, cryptographically-auditable census of its citizens, member states, and aggregate footprint (population, income, real-estate). The census is the federation's only formal source of authority and shall be public, queryable, and append-only.",
  },
  {
    n: "VI",
    name: "Of Common Defense and Common Good",
    body: "Interneta shall not maintain a standing military. The federation may, by citizen vote, fund mutual aid, common infrastructure, dispute resolution, diplomatic missions, and the preservation of values across member states. The treasury is on-chain and transparent.",
  },
  {
    n: "VII",
    name: "Of Ratification",
    body: "This Constitution takes effect when it is signed by 10,000 citizens or one full member state, whichever comes first. Until ratification, this is a draft — to be debated, forked, improved.",
  },
];

const billOfRights = [
  "The right of free speech and free press across the entire federation.",
  "The right to exit — to renounce citizenship and migrate to another polity at any time.",
  "The right to fork — any citizen may copy this Constitution and start a parallel Interneta.",
  "The right to data sovereignty — citizens own their data; the federation never sells it.",
  "The right to private association and private cryptography.",
  "The right to peaceful assembly, online and in person.",
  "The right to due process in any federation-level dispute, with on-chain evidence.",
  "The right of every citizen to bear keys.",
  "The right to be forgotten — to have one's affirmation revoked from the active census.",
  "The enumeration of these rights shall not deny others retained by the citizens.",
];

export default function ConstitutionPage() {
  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
          ::: DRAFT v0 ::: COMMIT 0x000001 :::
        </div>
        <h1 className="font-mono font-bold text-4xl sm:text-6xl leading-tight tracking-tight mb-8">
          The Constitution
          <br />
          <span className="text-muted-foreground">of the United States</span>
          <br />
          <span className="text-muted-foreground">of Interneta.</span>
        </h1>

        <div className="border-2 border-border bg-background shadow-brutal-md p-6 sm:p-8 mb-12 font-mono">
          <div className="text-xs tracking-widest text-muted-foreground mb-3">
            PREAMBLE
          </div>
          <p className="text-base sm:text-lg leading-relaxed">
            We the Citizens of the Internet, in order to form a more perfect
            federation, establish justice across borders, ensure the free
            movement of minds, provide for the common infrastructure, promote
            the general welfare of network and nation alike, and secure the
            blessings of liberty in the cloud and on the land — do ordain and
            establish this Constitution for the United States of Interneta.
          </p>
        </div>

        <section className="space-y-10">
          {articles.map((a) => (
            <article key={a.n} className="border-l-4 border-border pl-6">
              <h2 className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-2">
                ARTICLE {a.n}
              </h2>
              <h3 className="font-mono font-bold text-2xl mb-3">{a.name}</h3>
              <p className="text-foreground/85 leading-relaxed text-lg">
                {a.body}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-20">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: AMENDMENT I-X :::
          </div>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl mb-8">
            Bill of Rights of the Citizen.
          </h2>
          <ol className="space-y-4">
            {billOfRights.map((r, i) => (
              <li
                key={i}
                className="grid grid-cols-[auto_1fr] gap-5 font-mono text-base sm:text-lg"
              >
                <span className="text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span className="text-foreground/90 leading-relaxed">{r}</span>
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-20 border-t-2 border-border pt-8 font-mono text-sm text-muted-foreground">
          <p>
            This document is a draft. It is open to forks, pull requests, and
            ratification. It is dated and amendable.
          </p>
          <p className="mt-3">
            ratification threshold: 10,000 signed citizens
            <br />
            current signatures: 0 — be the first.
          </p>
        </div>
      </div>
    </div>
  );
}
