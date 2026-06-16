// The Interneta founder playbook data. Frameworks for assessing founders,
// choosing nodes, deciding when to expand, and measuring a network state.
// Sourced from Balaji's The Network State (research/tns.txt) plus operating
// lessons from the popup-city wave (Zuzalu, Edge Esmeralda, Network School).

export type FounderPiece = {
  key: string;
  icon: string;
  name: string;
  question: string;
  detail: string;
};

// The six puzzle pieces a founding team must cover. A solo founder rarely has
// all six; most need cofounders. Score each 0-3 when assessing a candidate.
export const FOUNDER_PIECES: FounderPiece[] = [
  {
    key: "why",
    icon: "🔥",
    name: "A Strong Why",
    question: "Is there a moral innovation worth migrating for?",
    detail:
      "The One Commandment. A single inverted assumption that defines the way of life. Without it you have a co-living company, not a polity. The why is the load-bearing wall; everything else is scaffolding. Bryan Johnson's why is 'don't die.' Adam Neumann's is 'live the life of your life.' If the why fits on a hat, it is strong enough.",
  },
  {
    key: "distribution",
    icon: "📣",
    name: "Distribution",
    question: "Can the founder summon a crowd on command?",
    detail:
      "An audience is the cheapest path to a population. A founder with a million followers can fill a node from a single post. This is why creators, podcasters, and thought leaders make natural network-state founders: they already have the reverse-diaspora's attention. No audience means buying growth, which is slow and expensive.",
  },
  {
    key: "capital",
    icon: "💰",
    name: "Capital",
    question: "Is there money to crowdfund the first nodes?",
    detail:
      "Land costs money. Even crowdfunded, someone underwrites the first lease. The founder either has capital, can raise it, or has a community that will pre-commit. Andreessen's $350M into Flow is the extreme version. Most start with a single building and a waitlist.",
  },
  {
    key: "engineering",
    icon: "⚙️",
    name: "Engineering",
    question: "Can the team build the digital substrate?",
    detail:
      "The census, the passport, the treasury, the smart-contract governance. A network state runs on software. Someone on the founding team must be able to ship it, or buy it off the shelf (this is where technodemocracy.app and the Interneta stack come in: governance and identity as a service).",
  },
  {
    key: "resources",
    icon: "🏗️",
    name: "Resources & Ops",
    question: "Who runs the physical world day to day?",
    detail:
      "Buildings need management. Events need logistics. Visas need paperwork. A network state has the operating overhead of a small hospitality company. The founding team needs an operator, not just a visionary. This is the most-underrated piece and the most common point of failure.",
  },
  {
    key: "social",
    icon: "🤝",
    name: "Social Capital",
    question: "Is the founder trusted enough to be followed?",
    detail:
      "Balaji's term is 'recognized founder.' Legitimacy comes from whether people opt to follow. Trust is the difference between a community that survives its first crisis and one that forks in anger. Social capital is earned over years and spent in months; a founder needs a deep reserve.",
  },
];

export type NodeCriterion = {
  icon: string;
  name: string;
  detail: string;
};

// How to choose your next node. Site-selection criteria, each scoreable 0-3.
export const NODE_CRITERIA: NodeCriterion[] = [
  {
    icon: "📜",
    name: "Legal scaffold",
    detail:
      "Is there a special economic zone, a charter-city framework, a long-stay visa, or a crypto-friendly regime already in place? Próspera's ZEDE, Estonia's e-Residency, RAK DAO's licensing. Building on an existing scaffold saves years.",
  },
  {
    icon: "💵",
    name: "Cost of living",
    detail:
      "Can a citizen live well on a remote-work income? Geographic arbitrage is the engine of early growth. Lisbon, Chiang Mai, Buenos Aires, Tbilisi all clear this bar; San Francisco and Singapore do not, but trade cost for density.",
  },
  {
    icon: "🌐",
    name: "Existing community",
    detail:
      "Is there already a cluster of aligned people? A node grows fastest where the reverse-diaspora has already gathered. Network School chose Forest City partly because the crypto-nomad flow through Southeast Asia was already there.",
  },
  {
    icon: "🛂",
    name: "Entry & exit friendliness",
    detail:
      "How hard is it to get in and stay? Visa-free entry, easy banking, friendly residency. The right to exit is constitutional; the ease of entry is operational. Georgia's 365-day visa-free policy is the gold standard.",
  },
  {
    icon: "🕐",
    name: "Time-zone fit",
    detail:
      "Can citizens work with the networks that matter (usually California and London)? A node eight hours off from its economic center forces a nocturnal life. This quietly kills more nodes than visas do.",
  },
  {
    icon: "🗣️",
    name: "Language & openness",
    detail:
      "Is English (or the network's working language) usable day to day? Is the local government curious rather than hostile? A government that wants you is worth more than a tax rate.",
  },
];

export type ReadinessSignal = {
  n: string;
  title: string;
  detail: string;
};

// When to launch a second node. The archipelago question, generalized from
// the Network School / Chance debate.
export const READINESS_SIGNALS: ReadinessSignal[] = [
  {
    n: "01",
    title: "A documented node playbook",
    detail:
      "Can you hand someone a binder that tells them how to run the node? The operating system: how admissions work, what the daily rhythm is, how events are run, how the culture is enforced. If node 1 still lives in the founder's head, a second node will dilute, not multiply.",
  },
  {
    n: "02",
    title: "A node-2 leader who graduated from node 1",
    detail:
      "The single best predictor of a second node's success is whether its leader already lived the first. Zuzalu spun off ZuConnect, Edge Esmeralda, and Aleph because aligned leaders walked out of Tivat ready to run their own. You cannot hire this; it has to grow.",
  },
  {
    n: "03",
    title: "Pull from a specific geography",
    detail:
      "Is there a concrete cohort that wants a node somewhere specific and will pre-commit? Demand pull beats supply push. A waitlist of 50 people who all want a Gulf node, or a LatAm node, is a green light. A vague sense that 'we should expand' is not.",
  },
];

// Balaji's census triad: how you measure a network state, and therefore how
// you map the internet's shifting landscape.
export type Kpi = {
  icon: string;
  name: string;
  unit: string;
  detail: string;
};

export const CENSUS_KPIS: Kpi[] = [
  {
    icon: "👥",
    name: "Population",
    unit: "citizens",
    detail:
      "The headcount of aligned, opted-in citizens. Continuous growth is a continuous plebiscite: a successful network state attracts aligned immigrants, an unsuccessful one loses them. This is the primary number.",
  },
  {
    icon: "💸",
    name: "Income",
    unit: "annual USD",
    detail:
      "Aggregate citizen income plus treasury. The internet's GDP equivalent. This is what lets a network state negotiate from strength: a polity with billions in citizen income is harder for a legacy state to ignore.",
  },
  {
    icon: "📐",
    name: "Real-estate footprint",
    unit: "square meters",
    detail:
      "The total physical territory of the archipelago, summed across every apartment, house, and town. Not contiguous. The square-meter count is the proof that the cloud has materialized into land.",
  },
];

// The seven steps, operationalized.
export type Step = {
  n: number;
  title: string;
  action: string;
};

export const SEVEN_STEPS: Step[] = [
  { n: 1, title: "Found a startup society", action: "Start an online community around a stated purpose. Publish the One Commandment. Open a Discord, a Telegram, or a Substack. The founder's legitimacy is whether people follow." },
  { n: 2, title: "Organize for collective action", action: "Turn the audience into a network union. Run a first collective act: a group buy, a crowdfund, a coordinated move. Prove the community can do something together, not just talk." },
  { n: 3, title: "Build trust offline + a cryptoeconomy online", action: "Hold in-person meetups of growing scale and duration. Stand up an internal token or treasury. The handshake and the wallet, together." },
  { n: 4, title: "Crowdfund physical nodes", action: "Lease or buy the first apartments, houses, or a town. One building is enough to start. Issue access via a cryptopassport." },
  { n: 5, title: "Connect nodes into an archipelago", action: "Link the physical nodes into one network. Citizens migrate between them on a single passport. This is the moment a co-living company becomes a network state." },
  { n: 6, title: "Run an on-chain census", action: "Publish the cryptographically auditable count of population, income, and footprint. Make it public, queryable, append-only. The census is the only honest source of authority." },
  { n: 7, title: "Gain diplomatic recognition", action: "Negotiate recognition from one sympathetic government, then more, then the UN. Recognition is the last step, not the first. Bitcoin got there by working; so does a network state." },
];
