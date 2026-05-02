import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Constitution | interneta.world",
  description:
    "The Constitution of the United States of Interneta. v0 working draft, adapted from the US Constitution and the framework of The Network State.",
  alternates: { canonical: "https://interneta.world/constitution" },
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

type Article = {
  n: string;
  name: string;
  sections: string[];
};

const PREAMBLE =
  "We the Citizens of the Internet, in order to form a more perfect federation, establish justice across borders, ensure the free movement of minds, provide for the common infrastructure, promote the general welfare of network and nation alike, and secure the blessings of liberty in the cloud and on the land, do ordain and establish this Constitution for the United States of Interneta.";

const FOUNDATION_ARTICLES: Article[] = [
  {
    n: "I",
    name: "Of the Polity",
    sections: [
      "Interneta is a voluntary federation of internet city-states. Membership is opt-in, freely renounceable, and proven on chain. No member is bound to Interneta by birth, geography, or coercion.",
      "The federation exists to coordinate, not to govern. It maintains shared infrastructure, runs the on-chain census, hosts this Constitution, and provides diplomatic services. It does not impose moral, economic, or political doctrine.",
      "Interneta itself has no One Commandment. That is the prerogative of each member state. The federation is plural by design. It hosts one thousand commandments and adjudicates between none.",
    ],
  },
  {
    n: "II",
    name: "Of Citizenship",
    sections: [
      "Any human person may become a citizen of Interneta by signing the Citizen Affirmation with a cryptographic key they control. The signature is the membership.",
      "Citizenship is a soulbound credential, non-transferable. It is voluntarily renounceable at any time by signed declaration.",
      "Dual citizenship is encouraged. A citizen of Interneta retains all citizenships of nation-states, network-states, and other federations. Interneta does not require renunciation of any prior allegiance.",
      "Every citizen is equal before the federation. There is no nobility, no class, no inherited office. The vote of one citizen weighs the same as the vote of another.",
    ],
  },
  {
    n: "III",
    name: "Of the Constitution Itself",
    sections: [
      "This Constitution is a living document, versioned in public. Its canonical text lives on a public repository, and its current version is hashed on chain.",
      "Amendments are proposed as pull requests. Any citizen may open one. Discussion is public.",
      "An amendment is ratified when it is either (a) signed by two-thirds of active citizens within a thirty-day window, or (b) ratified by a quorum of member states equivalent to three-fourths of the federation.",
      "No amendment shall abolish the right to exit, the right to fork, or the right to renounce. These are inviolate.",
    ],
  },
  {
    n: "IV",
    name: "Of Member States",
    sections: [
      "Any network state, network union, startup society, or self-governing internet community may petition to join Interneta as a member state.",
      "Admission requires: (i) its own One Commandment, (ii) a recognized founder, (iii) a published charter, (iv) proof of at least one in-person gathering, and (v) ratification by simple majority of existing member states.",
      "Member states retain full sovereignty over internal affairs. Interneta does not adjudicate between commandments. It hosts them.",
      "A member state may secede at any time by signed declaration of its founder, subject to a ninety-day notice period. The federation does not contest secession.",
    ],
  },
  {
    n: "V",
    name: "Of the Census",
    sections: [
      "Interneta shall maintain a continuous, cryptographically auditable census of its citizens, member states, and aggregate footprint.",
      "The census shall record total citizens, total member states, aggregate annual income, aggregate physical real-estate footprint, and aggregate digital footprint. Income and real-estate figures are self-reported and attestable.",
      "The census is the federation's only formal source of authority. It shall be public, queryable, and append-only.",
      "The census is the basis for diplomatic recognition. When the federation reaches one million citizens, it shall publish its first State of the Federation address and seek recognition from the United Nations and from one or more nation-states of its choosing.",
    ],
  },
  {
    n: "VI",
    name: "Of Common Defense and Common Good",
    sections: [
      "Interneta shall not maintain a standing military. Defense is the prerogative of member states and of the nation-states in which citizens reside.",
      "The federation may, by simple-majority citizen vote, fund mutual aid for citizens in distress, common digital infrastructure, dispute resolution, diplomatic missions, and the preservation of records, art, and values across member states.",
      "The treasury is on chain and transparent. Every disbursement is public.",
      "No taxation is imposed on citizens. Funding is voluntary, by donation, member-state contribution, or treasury yield.",
    ],
  },
  {
    n: "VII",
    name: "Of Ratification",
    sections: [
      "This Constitution takes effect when it is signed by ten thousand citizens or one full member state, whichever comes first.",
      "Until ratification, this document is a draft. It is open to forks, pull requests, and refinement.",
      "Upon ratification, the date and signatories shall be inscribed on chain, and a copy of the ratified text shall be archived in perpetuity.",
    ],
  },
];

const NETWORK_STATE_ARTICLES: Article[] = [
  {
    n: "VIII",
    name: "Of the Founding",
    sections: [
      "A startup society is the embryonic form of a network state. It is an online community organized around a stated purpose.",
      "Any citizen of Interneta may found a startup society. The federation shall provide tools for registration, charter publication, member roll, and discoverability.",
      "A startup society becomes eligible for member-state status when it has at least one hundred citizens, a published One Commandment, a charter, and one in-person gathering.",
    ],
  },
  {
    n: "IX",
    name: "Of the Network Union",
    sections: [
      "A network union is a startup society organized for collective action.",
      "Network unions may engage in crowdfunding, bulk purchasing, collective bargaining, mutual aid, and political coordination.",
      "The federation recognizes the network union as a legitimate intermediate form between startup society and network state.",
    ],
  },
  {
    n: "X",
    name: "Of the Cryptoeconomy",
    sections: [
      "Member states are encouraged but not required to operate an internal cryptocurrency or treasury.",
      "The federation maintains no single currency. Citizens may transact in any unit of account they choose.",
      "The federation treasury, when it accepts contributions, shall accept Bitcoin, Ether, USDC, and any unit subsequently approved by citizen vote.",
    ],
  },
  {
    n: "XI",
    name: "Of the Archipelago",
    sections: [
      "Member states are encouraged to crowdfund physical territory: apartments, houses, neighborhoods, towns. This territory need not be contiguous.",
      "The interconnected physical nodes of a member state form a network archipelago. The archipelago has its capital in the cloud.",
      "The federation maintains a public registry of all archipelagic nodes of all member states, queryable by location, member-state affiliation, and citizen access.",
    ],
  },
  {
    n: "XII",
    name: "Of Crowdfunded Territory",
    sections: [
      "Property within an archipelagic node is owned by its purchasers. The federation claims no eminent domain.",
      "Access to physical territory is governed by smart contract. A citizen presents a cryptopassport, and the contract grants or denies access.",
      "Disputes over property are resolved first by the member state, then by federation arbitration if appealed.",
    ],
  },
  {
    n: "XIII",
    name: "Of Diplomatic Recognition",
    sections: [
      "The federation shall pursue diplomatic recognition incrementally: first by member states recognizing each other, then by sympathetic nation-states recognizing the federation, then by the United Nations.",
      "The federation shall pursue a federation passport (recognized by at least one nation-state), a federation seat at international forums, and a federation presence at the World Bank, IMF, and UN bodies as appropriate.",
      "No member state shall be forced to participate in federation diplomacy. Each member state may pursue its own recognition path, in parallel.",
    ],
  },
  {
    n: "XIV",
    name: "Of the One Thousand Commandments",
    sections: [
      "Each member state of Interneta brings its own One Commandment, a single moral inversion that defines its way of life.",
      "Some commandments will conflict. This is by design. The federation does not rank, harmonize, or resolve them.",
      "The federation guarantees that no commandment of any member state may be enforced upon any citizen of Interneta who has not voluntarily joined that member state.",
      "The federation, taken as a whole, has no commandment of its own. Its only doctrine is plurality. Its only enforcement is the right to exit.",
    ],
  },
];

const AMENDMENTS: { n: string; name: string; text: string }[] = [
  {
    n: "I",
    name: "Free Speech and Free Press",
    text: "The federation shall make no law abridging the freedom of speech, of the press, or of cryptographic publication, across the entire federation. Member states may restrict speech within their own jurisdictions; the federation shall not.",
  },
  {
    n: "II",
    name: "The Right to Exit",
    text: "Every citizen has the inviolate right to renounce citizenship and migrate to another polity at any time. No federation law, no member-state charter, and no smart contract may abridge this right.",
  },
  {
    n: "III",
    name: "The Right to Fork",
    text: "Any citizen may copy this Constitution and start a parallel Interneta. The federation does not claim a monopoly on its name or its founding ideas. The market for federations is open.",
  },
  {
    n: "IV",
    name: "Data Sovereignty",
    text: "Citizens own their data. The federation shall not sell, license, or share citizen data with any third party without explicit citizen consent. Citizens may request and receive a complete export of their data on demand.",
  },
  {
    n: "V",
    name: "Private Association and Cryptography",
    text: "Every citizen has the right to private association, to private speech, and to the use of cryptography. The federation shall not weaken, escrow, or backdoor any cryptographic system.",
  },
  {
    n: "VI",
    name: "Peaceful Assembly",
    text: "Every citizen has the right to peaceful assembly, online and in person. The federation shall not require permits, registrations, or fees for any assembly of citizens.",
  },
  {
    n: "VII",
    name: "Due Process",
    text: "In any federation-level dispute, every citizen has the right to notice of the charge, access to the evidence, a fair hearing before an impartial arbiter, appeal, and on-chain record of the proceeding.",
  },
  {
    n: "VIII",
    name: "The Right to Bear Keys",
    text: "Every citizen has the right to generate, hold, and use cryptographic keys. The federation shall not seize, escrow, or compel the disclosure of any citizen's private key.",
  },
  {
    n: "IX",
    name: "The Right to Be Forgotten",
    text: "Every citizen may revoke their affirmation, expunge their record from the active census, and depart from the federation. Records may be retained in a sealed archive for purposes of dispute resolution, but shall not be public.",
  },
  {
    n: "X",
    name: "Reservation of Rights",
    text: "The enumeration of these rights shall not deny or disparage others retained by the citizens. Any right not delegated to the federation by this Constitution is reserved to the citizens, to the member states, or to the people.",
  },
];

function PaletteStripe() {
  return (
    <div className="flex gap-1" aria-hidden>
      {PALETTE.map((c, i) => (
        <span
          key={i}
          className="block h-2 flex-1"
          style={{ background: c }}
        />
      ))}
    </div>
  );
}

function ArticleCard({
  article,
  index,
}: {
  article: Article;
  index: number;
}) {
  const accent = PALETTE[index % PALETTE.length];
  return (
    <article
      className="border-l-4 pl-6 py-1"
      style={{ borderColor: accent }}
    >
      <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-2">
        ARTICLE {article.n}
      </div>
      <h3 className="font-mono font-bold text-2xl sm:text-3xl mb-5">
        {article.name}
      </h3>
      <ol className="space-y-4">
        {article.sections.map((s, i) => (
          <li
            key={i}
            className="grid grid-cols-[auto_1fr] gap-4 text-foreground/85 leading-relaxed"
          >
            <span className="font-mono font-bold text-sm tabular-nums text-muted-foreground pt-1">
              §{i + 1}
            </span>
            <span className="text-base sm:text-lg">{s}</span>
          </li>
        ))}
      </ol>
    </article>
  );
}

export default function ConstitutionPage() {
  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4">
        {/* Hero */}
        <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
          ::: DRAFT v0 ::: COMMIT 0x000001 :::
        </div>
        <h1 className="font-mono font-bold text-4xl sm:text-6xl leading-tight tracking-tight mb-6">
          The Constitution
          <br />
          <span className="text-muted-foreground">of the United States</span>
          <br />
          <span className="text-muted-foreground">of Interneta.</span>
        </h1>

        <div className="my-8">
          <PaletteStripe />
        </div>

        <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-12 max-w-2xl">
          A working constitution for a federation of internet city-states.
          Adapted from the Constitution of the United States of America (1789)
          and from the framework laid out in <em>The Network State</em> (Balaji
          Srinivasan, 2022). Open to forks, pull requests, and ratification.
        </p>

        {/* Preamble */}
        <div className="border-2 border-border bg-background shadow-brutal-md p-6 sm:p-8 mb-16 font-mono">
          <div className="text-xs tracking-[0.3em] text-muted-foreground mb-4">
            PREAMBLE
          </div>
          <p className="text-base sm:text-lg leading-relaxed">{PREAMBLE}</p>
        </div>

        {/* Foundation Articles I to VII */}
        <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-8">
          ::: ARTICLES I to VII ::: FOUNDATION :::
        </div>
        <div className="space-y-12 mb-20">
          {FOUNDATION_ARTICLES.map((a, i) => (
            <ArticleCard key={a.n} article={a} index={i} />
          ))}
        </div>

        {/* Network State Provisions VIII to XIV */}
        <div className="border-t-2 border-border pt-10 mb-8">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: ARTICLES VIII to XIV ::: NETWORK STATE PROVISIONS :::
          </div>
          <p className="font-mono text-sm text-muted-foreground italic max-w-2xl mb-10">
            The following articles adapt the seven-step path from{" "}
            <em>The Network State</em> into constitutional law for Interneta and
            its members.
          </p>
        </div>
        <div className="space-y-12 mb-20">
          {NETWORK_STATE_ARTICLES.map((a, i) => (
            <ArticleCard
              key={a.n}
              article={a}
              index={i + FOUNDATION_ARTICLES.length}
            />
          ))}
        </div>

        {/* Bill of Rights */}
        <div className="border-t-2 border-border pt-10 mb-10">
          <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: AMENDMENTS I to X ::: BILL OF RIGHTS OF THE CITIZEN :::
          </div>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl mb-2">
            The Bill of Rights of the Citizen.
          </h2>
          <p className="font-mono text-sm text-muted-foreground italic max-w-2xl">
            The first ten amendments to this Constitution, ratified at founding.
          </p>
        </div>
        <ol className="space-y-8 mb-20">
          {AMENDMENTS.map((a, i) => {
            const accent = PALETTE[i % PALETTE.length];
            return (
              <li
                key={a.n}
                className="border-l-4 pl-6"
                style={{ borderColor: accent }}
              >
                <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-2">
                  AMENDMENT {a.n}
                </div>
                <h3 className="font-mono font-bold text-xl sm:text-2xl mb-3">
                  {a.name}
                </h3>
                <p className="text-foreground/85 leading-relaxed text-base sm:text-lg">
                  {a.text}
                </p>
              </li>
            );
          })}
        </ol>

        {/* Signing slot */}
        <div className="border-2 border-border bg-background shadow-brutal-md p-6 sm:p-8 font-mono">
          <div className="text-xs tracking-[0.3em] text-muted-foreground mb-4">
            ::: SIGNED AND SEALED :::
          </div>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            This Constitution was drafted in the open in the early days of the
            network-state era. It awaits ratification by ten thousand citizens,
            or by one full member state.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            If you are a citizen of the internet, you may sign. If you are not
            yet a citizen, you may become one. If you do not wish to sign, you
            may fork.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-8 font-bold">
            The federation is open.
          </p>

          <div className="text-xs text-muted-foreground space-y-1 mb-6">
            <div>
              ratification threshold: <span className="font-bold">10,000 signed citizens</span>
            </div>
            <div>
              current signatures:{" "}
              <span className="font-bold text-foreground">0.</span>{" "}
              be the first.
            </div>
          </div>

          <Link
            href="/citizens"
            className="inline-block border-2 border-border bg-foreground text-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-6 py-3 font-mono font-bold text-base"
          >
            [ SIGN THE CONSTITUTION &rarr; ]
          </Link>
        </div>

        <div className="mt-16">
          <PaletteStripe />
        </div>

        <div className="mt-8 font-mono text-xs text-muted-foreground space-y-1">
          <p>
            Drafted by adamtpang, founder, at{" "}
            <a href="https://interneta.world" className="underline">
              interneta.world
            </a>
            .
          </p>
          <p>
            Built on the work of Balaji Srinivasan, the framers of the United
            States Constitution, and the practitioners of the network-state
            movement worldwide.
          </p>
          <p>
            Source text:{" "}
            <a
              href="https://github.com/adamtpang/interneta.world"
              className="underline"
            >
              github.com/adamtpang/interneta.world
            </a>
            . Open a pull request to amend.
          </p>
        </div>
      </div>
    </div>
  );
}
