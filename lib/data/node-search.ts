// Node search ENGINE, country-agnostic.
//
// This file holds only the universal rubric: the nine weighted axes, the hard
// gates, the scoring maths, the scouting hierarchy, and the guardrails.
// Country data lives in lib/data/node-searches/*.ts and is registered in
// lib/data/node-searches/index.ts. Adding a country is a data change, never a
// code change, this is the v4 "clone-stamp anywhere" logic applied to the
// scouting layer itself.
//
// THE STRUCTURAL LESSON the rubric encodes: Forest City did not fail at the
// country level. Malaysia welcomed NS. It failed at the FACILITY level, a
// premises-use licence on specific units. So gates are checked at every level.

export type Source = { label: string; url: string };

/** NS scouting hierarchy, in their stated priority order. */
export type Level = "country" | "region" | "state" | "facility";

export const LEVELS: {
  key: Level;
  n: number;
  label: string;
  question: string;
  forestCity: string;
}[] = [
  { key: "country", n: 1, label: "Country", question: "Is there a written, named commitment from the sovereign?", forestCity: "Malaysia was never the problem. The country welcomed NS." },
  { key: "region", n: 2, label: "Region", question: "Does the region or economic zone have its own legal regime?", forestCity: "Johor state ultimately backed the revocation." },
  { key: "state", n: 3, label: "State / city", question: "Is the municipal authority aligned, and who issues the licences?", forestCity: "Iskandar Puteri City Council issued the revocation. This was the level that bit." },
  { key: "facility", n: 4, label: "Facility", question: "Does this exact building have the correct permitted use on its licence?", forestCity: "The fatal detail: units combined into a coworking space where the permitted use did not match." },
];

export type Axis = {
  key: string;
  n: number;
  name: string;
  weight: number;
  five: string;
};

// Weighted from the Malaysia post-mortem: governance and immigration dominate.
export const AXES: Axis[] = [
  { key: "govt", n: 1, name: "Government partnership", weight: 3.0, five: "Signed MOU / legal recognition, a named ministry sponsor, written commitments." },
  { key: "immigration", n: 2, name: "Immigration & redomiciliation", weight: 2.5, five: "Fast digital-nomad visa, easy entity redomicile, low friction for 70+ nationalities." },
  { key: "regulatory", n: 3, name: "Regulatory / crypto", weight: 2.0, five: "Clear crypto framework, English-law wrapper, precedent deals." },
  { key: "cost", n: 4, name: "Cost & real estate", weight: 1.5, five: "Cheap land + build cost, prefab-friendly permitting, room for 1,024+." },
  { key: "connectivity", n: 5, name: "Connectivity", weight: 1.5, five: "International airport, direct flights to a hub, strong fiber + power." },
  { key: "livability", n: 6, name: "Livability & safety", weight: 1.5, five: "Climate viable for the 'burn', low crime, real healthcare." },
  { key: "talent", n: 7, name: "Talent pull", weight: 1.0, five: "Government actively recruiting talent, local tech / university base." },
  { key: "neutrality", n: 8, name: "Geopolitical neutrality", weight: 1.0, five: "Few flashpoints of the kind that sank Malaysia; broad passport acceptance." },
  { key: "specialty", n: 9, name: "Node specialty fit", weight: 1.0, five: "A distinct lane the network doesn't already have; not a duplicate node." },
];

export const MAX_WEIGHTED = AXES.reduce((a, x) => a + x.weight * 5, 0); // 75

// ── HARD GATES ───────────────────────────────────────────────────────────
// Not soft scores. Fail one and the site is capped regardless of how good
// its cost or lifestyle numbers are.
export type GateState = {
  govt: boolean;
  immigration: boolean;
  siteWrapper: boolean;
};

export const GATE_CAPS = {
  govt: 49,
  immigration: 49,
  siteWrapper: 79,
} as const;

export type Evaluation = {
  raw: number;
  final: number;
  capped: boolean;
  capReason: string | null;
  band: string;
  color: string;
  note: string;
};

export function rawScore(scores: Record<string, number>): number {
  const total = AXES.reduce((a, x) => a + (scores[x.key] ?? 0) * x.weight, 0);
  return Math.round((total / MAX_WEIGHTED) * 100);
}

function bandFor(pct: number): { band: string; color: string; note: string } {
  if (pct >= 80)
    return { band: "PLANT THE NODE", color: "#16a34a", note: "Governance, immigration, and the legal wrapper align. This is the profile that fixes what broke in Malaysia." };
  if (pct >= 65)
    return { band: "STRONG CANDIDATE", color: "#eab308", note: "A serious contender. Shortlist and pressure-test the weak axes before committing." };
  if (pct >= 50)
    return { band: "WORKABLE, WITH EFFORT", color: "#ea580c", note: "Possible, but you will spend energy compensating. Better as a satellite than the flagship." };
  return { band: "KEEP LOOKING", color: "#dc2626", note: "Too much friction for a flagship node. The thesis is hard enough without fighting the location too." };
}

export function evaluate(
  scores: Record<string, number>,
  gates: GateState
): Evaluation {
  const raw = rawScore(scores);
  let final = raw;
  let capReason: string | null = null;

  if (!gates.govt && final > GATE_CAPS.govt) {
    final = GATE_CAPS.govt;
    capReason = "No written, named government commitment. Hard gate.";
  }
  if (!gates.immigration && final > GATE_CAPS.immigration) {
    final = GATE_CAPS.immigration;
    capReason = "No viable long-stay visa path for the member mix. Hard gate.";
  }
  if (!gates.siteWrapper && final > GATE_CAPS.siteWrapper) {
    final = GATE_CAPS.siteWrapper;
    capReason =
      "No site-specific legal wrapper. Cannot reach the top tier on cost or lifestyle alone.";
  }

  return { raw, final, capped: final !== raw, capReason, ...bandFor(final) };
}

// Balaji's public v1-v5 node model.
export const NODE_STAGES: { v: string; title: string; detail: string }[] = [
  { v: "v1", title: "90-day popup", detail: "A startup-society popup. Proof of concept." },
  { v: "v2", title: "Society-as-a-service", detail: "A year-long membership program. The current model." },
  { v: "v3", title: "Permanent campus", detail: "A purpose-built campus for 1,000+ people." },
  { v: "v4", title: "Clone-stamp template", detail: "A prefab, open-source campus blueprint you can stamp anywhere." },
  { v: "v5", title: "Networked archipelago", detail: "Alumni spin up their own societies. Network State Plus." },
];

export const GUARDRAILS: string[] = [
  "Government partnership is a hard gate, not a score. A site with no written, named commitment is capped below the top tier no matter how cheap or pleasant it is.",
  "Immigration is a hard gate. Model visa status for the actual member-nationality mix, not the average case.",
  "Verify permitted use at the facility level, in writing, per unit. Malaysia was fine. Johor was fine. A premises-use licence on two adjoining units is what actually closed the campus.",
  "Keep 'earned recognition' and 'political goodwill' distinct. Goodwill from a ministry can reverse; codified law is stickier.",
  "Every non-obvious number is either sourced or explicitly labeled an editorial estimate. Do not launder estimates into facts when this reaches decision-makers.",
];

// ── THE REAL NS SEARCH (distilled from ns.com/search, July 2026) ─────────
// NS is running a public second-site search with a finder's fee. The form is
// their revealed preference set: what they actually ask is what they actually
// weigh. Distilled here, not mirrored verbatim; the live form is login-gated.

export const NS_BOUNTY = {
  url: "https://ns.com/search",
  note: "Multiple submissions allowed; judged spam earns nothing.",
  tiers: [
    { rank: "Top 1000", prize: "$100" },
    { rank: "Top 100", prize: "$1,000" },
    { rank: "Top 10", prize: "$10,000" },
    { rank: "Final site selected", prize: "$100,000" },
  ],
};

export const NS_FORM: {
  group: string;
  maps: string;
  asks: string[];
}[] = [
  {
    group: "About you",
    maps: "Sourcing quality, not the site",
    asks: [
      "Socials plus at least two links, biggest business run or exited",
      "Could you operate or invest in this node yourself?",
      "Are you native to the country you are proposing?",
    ],
  },
  {
    group: "Country",
    maps: "Axes 1, 2, 7 · government, immigration, talent",
    asks: [
      "Every available digital-nomad visa: name, length in months, income floor, renewability",
      "Have you personally applied and gotten one? Exact dates, how long, screenshots",
      "The top three champions of tech in the country, with links",
      "Can you introduce us to any of them?",
    ],
  },
  {
    group: "City",
    maps: "Axes 5, 6 · connectivity, livability",
    asks: [
      "Closest major city and closest international airport, by code",
      "Air quality index",
    ],
  },
  {
    group: "Site",
    maps: "Axes 4, 9 and the facility gate",
    asks: [
      "Exact address with a maps link, ownership type, your relationship to it",
      "Property type, year built, building m², lot m², unit count, bed count, average unit size",
      "Zoning: what the property can LEGALLY be used for",
      "Inside a special economic zone?",
      "Gym? Move-in ready? Rent, sale, or both? Room for expansion nearby?",
      "Facilities within a 30 minute drive: grocery, hospital, restaurants, transit, beach, sports, school",
      "At least 5 photos, a video walkthrough, wifi speed in Mbps",
    ],
  },
];

/**
 * What the form reveals about NS weighting, read against our rubric.
 * The order of the form IS the hierarchy: Country, then City, then Site.
 */
export const NS_FORM_INSIGHTS: string[] = [
  "Visas are interrogated hardest: program name, months, income floor, renewability, and proof you personally got one. That confirms immigration as a top-weight axis, and it demands receipts, not vibes.",
  "Three named tech champions with warm-intro paths: the government-partnership axis starts as a people problem. A signature begins with someone who can walk you into the room.",
  "Zoning is asked as 'what can this property LEGALLY be used for'. That is the exact question Forest City failed. The form learned the same lesson the rubric did.",
  "Beds, units, move-in readiness, expansion room: speed to 1,024 residents is a first-class criterion. A gorgeous site that needs two years of construction loses to a move-in-ready one.",
  "Air quality index is a named field. Our rubric folded it into livability; NS asks for the number itself.",
  "The bounty shape ($100 to $100,000) says NS expects thousands of submissions and needs exactly one to be right. Precision beats volume; a judged-spam submission earns zero.",
];

/**
 * The facility-level checklist, merged from the Forest City post-mortem and
 * the fields the real form asks for. Verify each IN WRITING before signing.
 */
export const FACILITY_CHECKLIST: string[] = [
  "Zoning: the permitted use covers residence plus coworking plus education, per unit, in writing",
  "Special economic zone status of the parcel itself, not the district around it",
  "Move-in readiness: occupancy possible without construction, or a dated, penalized delivery schedule",
  "Capacity: units and beds against the 1,024-resident target, with the expansion parcel identified",
  "The burn: gym on site, and outdoor training viable in the local climate most of the year",
  "Thirty-minute circle: grocery, hospital, restaurants, transit, and ideally a beach or mountains",
  "Wifi speed measured on site in Mbps, plus the airport code and drive time",
  "Air quality index for the site, not the country average",
];

// ── COUNTRY DATA SHAPE ───────────────────────────────────────────────────

export type AxisEvidence = { note: string; source?: Source };

export type CountryGate = {
  key: keyof GateState;
  label: string;
  met: boolean;
  claim: string;
  source?: Source;
};

export type Site = {
  slug: string;
  city: string;
  flag: string;
  region: string;
  level: string;
  lane: string;
  note: string;
  gates: GateState;
  wrapperClaim: string;
  wrapperSource?: Source;
  scores: Record<string, number>;
  evidence: Record<string, AxisEvidence>;
};

export type Facility = {
  name: string;
  kind: string;
  why: string;
  watch: string;
  source?: Source;
};

/** One country's node search. Pure data, add a file, register it, done. */
export type NodeSearch = {
  slug: string;
  country: string;
  flag: string;
  dateline: string;
  status: "active" | "watch";
  headline: string;
  subhead: string;
  situation: string[];
  structuralLesson: string;
  countryGates: CountryGate[];
  sites: Site[];
  facilitiesLabel: string;
  facilitiesIntro: string;
  facilities: Facility[];
  read: string[];
  references: Source[];
};

/** Rank a search's sites, gate-capped, best first. */
export function rankSites(search: NodeSearch) {
  return search.sites
    .map((s) => ({ ...s, ev: evaluate(s.scores, s.gates) }))
    .sort((a, b) => b.ev.final - a.ev.final);
}
