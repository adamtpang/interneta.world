import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | interneta.world",
  description:
    "What Interneta is, why now, and a brief history of the network-state movement. References to The Network State by Balaji Srinivasan.",
  alternates: { canonical: "https://interneta.world/about" },
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

const TIMELINE: { year: string; event: string; detail: string }[] = [
  {
    year: "1789",
    event: "The United States ratifies its Constitution",
    detail:
      "Three million people on a coastal strip. A constitution drafted by ~55 founders in a single Philadelphia summer. The first widely successful opt-in nation-state.",
  },
  {
    year: "1944",
    event: "Bretton Woods makes the dollar the global reserve",
    detail:
      "America becomes the issuer of the world's unit of account. The closest analogue to what stablecoins and BTC are doing now.",
  },
  {
    year: "1969",
    event: "ARPANET sends its first packet",
    detail:
      "America builds the substrate Interneta will eventually run on. The internet begins.",
  },
  {
    year: "2008",
    event: "Satoshi publishes the Bitcoin whitepaper",
    detail:
      "Money goes peer-to-peer, censorship-resistant. The first piece of the network-state stack falls into place.",
  },
  {
    year: "2008",
    event: "The Seasteading Institute is founded",
    detail:
      "Patri Friedman and Peter Thiel propose floating cities in international waters. The first modern push to start a new country outside the legacy nation-state system.",
  },
  {
    year: "2013",
    event: "Vitalik Buterin proposes Ethereum",
    detail:
      "Programmable money. Smart contracts. The substrate for the on-chain treasury, the social contract, the constitution.",
  },
  {
    year: "2017",
    event: "Próspera ZEDE framework signed in Honduras",
    detail:
      "A legal framework for opt-in private cities. The first network-state-adjacent jurisdiction to gain real-world recognition from a sovereign nation-state.",
  },
  {
    year: "2020",
    event: "COVID accelerates remote work",
    detail:
      "Hundreds of millions of knowledge workers untether from physical office. The cloud-first, land-last hypothesis becomes lived experience for an entire generation.",
  },
  {
    year: "2022",
    event: "Balaji Srinivasan publishes The Network State",
    detail:
      "thenetworkstate.com. The book that names and operationalizes the movement. Cloud first, land last. Recruit, not conquer. The seven-step path.",
  },
  {
    year: "2023",
    event: "Zuzalu, Vitalik's popup city in Montenegro",
    detail:
      "Two months in Tivat. Two hundred residents. Proof that an opt-in community can materialize, govern itself, and dissolve, all within a calendar quarter.",
  },
  {
    year: "2024",
    event: "Network School opens in Forest City, Malaysia",
    detail:
      "Balaji's pop-up campus at ns.com. A three-month residency program for builders of network states. The most concrete bet yet on the thesis.",
  },
  {
    year: "2024",
    event: "Edge Esmeralda, Vitalia, Cabin, Aleph, Crecimiento",
    detail:
      "A wave of popup villages across California, Roatán, Texas, Buenos Aires. Each running its own One Commandment experiment.",
  },
  {
    year: "2025",
    event: "Starbase incorporates as a Texas city",
    detail:
      "SpaceX-built town in Boca Chica votes to incorporate. Proof that the opposite path (land-first, recognition-next) also works.",
  },
  {
    year: "2026",
    event: "Interneta launches",
    detail:
      "The federation layer over them all. The optimistic meta-layer for network states. From America to Interneta. The values keep going.",
  },
];

const READING: { title: string; author: string; url?: string; note: string }[] = [
  {
    title: "The Network State",
    author: "Balaji Srinivasan",
    url: "https://thenetworkstate.com",
    note: "The thesis. Read this first. Free online. The seven-step path that Articles VIII through XIV of our Constitution adapt directly.",
  },
  {
    title: "The Sovereign Individual",
    author: "James Dale Davidson and William Rees-Mogg",
    note: "1997 prediction of the post-nation-state world. Half wrong, half eerily prescient. Worth wrestling with.",
  },
  {
    title: "Principles for Dealing with the Changing World Order",
    author: "Ray Dalio",
    note: "The empire Big Cycle. Why we are at the inflection point. Eight measurable axes: education, innovation, competitiveness, military, trade, output, financial center, reserve currency.",
  },
  {
    title: "The Fourth Turning",
    author: "William Strauss and Neil Howe",
    note: "Generational cycles. We are in the climax. Network states are one of the things being born.",
  },
  {
    title: "Seasteading",
    author: "Joe Quirk and Patri Friedman",
    note: "The water version of Balaji's land version. Both rhyme. Both are paths into the same place.",
  },
  {
    title: "How to Start a New Country (essay)",
    author: "Balaji Srinivasan",
    url: "https://1729.com/nations",
    note: "The condensed thesis. If you only have an hour, read this and watch a Balaji talk.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
          ::: ABOUT :::
        </div>
        <h1 className="font-mono font-bold text-4xl sm:text-6xl leading-tight tracking-tight mb-8">
          What is<br />
          <span className="text-muted-foreground">Interneta?</span>
        </h1>

        <div className="flex gap-1 mb-12" aria-hidden>
          {PALETTE.map((c, i) => (
            <span key={i} className="block h-2 flex-1" style={{ background: c }} />
          ))}
        </div>

        {/* The thesis */}
        <section className="mb-16">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: THE THESIS :::
          </div>
          <p className="text-lg sm:text-xl leading-relaxed text-foreground/90 mb-5">
            Interneta is a voluntary federation of internet city-states. The
            United States of Interneta. A constitution, a citizenry, a census,
            and a flag, for the people who live and build on the cloud.
          </p>
          <p className="text-lg leading-relaxed text-foreground/85 mb-5">
            The pitch in one line: Interneta is to network states what USDC is
            to the dollar. A transition technology. USDC didn't replace USD; it
            gave it a new substrate. Interneta is the federated meta-layer that
            lets nation-state citizens migrate to network-state citizenship
            without renouncing what they came from.
          </p>
          <p className="text-lg leading-relaxed text-foreground/85">
            From America to Interneta. The values keep going.
          </p>
        </section>

        {/* The Network State */}
        <section className="mb-16">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: THE NETWORK STATE :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-5">
            Built on the work of Balaji Srinivasan.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-foreground/85 mb-4">
            In 2022, Balaji Srinivasan published{" "}
            <a
              href="https://thenetworkstate.com"
              className="underline font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>The Network State</em>
            </a>
            . It is the book that named the movement. The free online edition
            lives at <span className="font-mono">thenetworkstate.com</span>. We
            recommend you start there.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-foreground/85 mb-4">
            Balaji's one-line definition: a network state is a highly aligned
            online community with a capacity for collective action that
            crowdfunds territory around the world and eventually gains
            diplomatic recognition from pre-existing states.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-foreground/85 mb-4">
            His seven-step path goes: found a startup society, organize it as a
            network union, build trust offline and a cryptoeconomy online,
            crowdfund physical nodes, connect them into a network archipelago,
            run an on-chain census, gain diplomatic recognition.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-foreground/85">
            The Articles VIII through XIV of the{" "}
            <Link href="/constitution" className="underline font-bold">
              Interneta Constitution
            </Link>{" "}
            adapt this seven-step path directly into constitutional law for
            our member states. We do not claim to have invented this. We claim
            to have federated it.
          </p>
        </section>

        {/* Why now */}
        <section className="mb-16">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: WHY NOW :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-5">
            Empires move on cycles. We are late in one.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-foreground/85 mb-4">
            Ray Dalio's framework in{" "}
            <em>Principles for Dealing with the Changing World Order</em>{" "}
            describes empires as moving through a Big Cycle on eight measurable
            axes: education, innovation, competitiveness, military, trade,
            output, financial center, reserve currency status. Empires rise
            when these climb together and decline when they peel apart.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-foreground/85 mb-4">
            America is exhibiting all five late-stage signs: rising debt to
            GDP, deepening internal political polarization, declining military
            reach relative to its rival, gradual erosion of reserve-currency
            dominance, and populist-authoritarian pull from both wings. This is
            not a death sentence. It is a window.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-foreground/85">
            History suggests that when an old empire wobbles, the next
            substrate gets built before the old one collapses. Interneta is
            our bet on what that substrate looks like.
          </p>
        </section>

        {/* Movement timeline */}
        <section className="mb-16">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: HISTORY OF THE MOVEMENT :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-8">
            A timeline of what got us here.
          </h2>
          <ol className="space-y-6">
            {TIMELINE.map((t, i) => {
              const accent = PALETTE[i % PALETTE.length];
              return (
                <li
                  key={t.year + t.event}
                  className="grid grid-cols-[80px_1fr] sm:grid-cols-[110px_1fr] gap-4 sm:gap-6 border-l-4 pl-5 py-1"
                  style={{ borderColor: accent }}
                >
                  <div className="font-mono font-bold text-base sm:text-lg tabular-nums">
                    {t.year}
                  </div>
                  <div>
                    <div className="font-mono font-bold text-base sm:text-lg mb-1">
                      {t.event}
                    </div>
                    <div className="text-foreground/75 text-sm sm:text-base leading-relaxed">
                      {t.detail}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        {/* Reading list */}
        <section className="mb-16">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: RECOMMENDED READING :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-8">
            Where to read further.
          </h2>
          <ul className="space-y-6">
            {READING.map((r) => (
              <li
                key={r.title}
                className="border-2 border-border bg-background shadow-brutal-sm p-5"
              >
                <div className="font-mono font-bold text-lg mb-1">
                  {r.url ? (
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      {r.title}
                    </a>
                  ) : (
                    r.title
                  )}
                </div>
                <div className="font-mono text-xs text-muted-foreground mb-3">
                  {r.author}
                </div>
                <div className="text-foreground/80 text-base leading-relaxed">
                  {r.note}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Sister projects */}
        <section className="mb-16">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: SISTER PROJECTS :::
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://nsnodes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-border bg-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all p-5 block"
            >
              <div className="font-mono font-bold text-lg mb-1">nsnodes.com</div>
              <div className="text-sm text-foreground/75">
                The operational encyclopedia. Every network state, society,
                event, popup, and treasury ally on one page. The directory.
              </div>
            </a>
            <a
              href="https://technodemocracy.app"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-border bg-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all p-5 block"
            >
              <div className="font-mono font-bold text-lg mb-1">
                technodemocracy.app
              </div>
              <div className="text-sm text-foreground/75">
                The governance protocol. Voting, deliberation, dispute
                resolution. The OS Interneta will run on.
              </div>
            </a>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-3">
            ::: WHAT TO DO NEXT :::
          </div>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl mb-6">
            Read. Sign. Or fork.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/constitution"
              className="border-2 border-border bg-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-5 py-4 font-mono font-bold text-center"
            >
              [ READ ]
            </Link>
            <Link
              href="/citizens"
              className="border-2 border-border bg-foreground text-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-5 py-4 font-mono font-bold text-center"
            >
              [ SIGN ]
            </Link>
            <a
              href="https://github.com/adamtpang/interneta.world"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-border bg-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-5 py-4 font-mono font-bold text-center"
            >
              [ FORK ]
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
