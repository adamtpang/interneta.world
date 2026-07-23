// Network School node search — Kazakhstan.
//
// Site-selection layer for the first NS campus outside Forest City, after
// Malaysia's Iskandar Puteri City Council revoked NSO Malaysia's business
// licence (effective 22 Jul 2026) and Balaji announced an MOU with Kazakhstan.
//
// THE STRUCTURAL LESSON: Forest City did not fail at the country level.
// Malaysia the country was fine. It failed at the FACILITY level — a
// premises-use licence on specific units. That is why NS scouts in the order
// Country > Region > State > Facility, and why the gates below are evaluated
// at EVERY level. Passing at country level tells you nothing about facility.
//
// Site scores (0-5 per axis) are editorial estimates from public sources.
// Every non-obvious claim carries a source. Unsourced values are labeled.

export type Source = { label: string; url: string };

/** NS scouting hierarchy, in their stated priority order. */
export type Level = "country" | "region" | "state" | "facility";

export const LEVELS: { key: Level; n: number; label: string; question: string; forestCity: string }[] = [
  { key: "country", n: 1, label: "Country", question: "Is there a written, named commitment from the sovereign?", forestCity: "Malaysia was never the problem. The country welcomed NS." },
  { key: "region", n: 2, label: "Region", question: "Does the region or economic zone have its own legal regime?", forestCity: "Johor state ultimately backed the revocation." },
  { key: "state", n: 3, label: "State / city", question: "Is the municipal authority aligned, and who issues the licences?", forestCity: "Iskandar Puteri City Council issued the revocation. This was the level that bit." },
  { key: "facility", n: 4, label: "Facility", question: "Does this exact building have the correct permitted use on its licence?", forestCity: "The fatal detail: units combined into a coworking space where the permitted use did not match. One unit licensed, the adjoining one not." },
];

export type Axis = {
  key: string;
  n: number;
  name: string;
  weight: number;
  five: string;
};

// Weighted so a node cannot be revoked the way Forest City was.
export const AXES: Axis[] = [
  { key: "govt", n: 1, name: "Government partnership", weight: 3.0, five: "Signed MOU / legal recognition, a named ministry sponsor, written commitments." },
  { key: "immigration", n: 2, name: "Immigration & redomiciliation", weight: 2.5, five: "Fast digital-nomad visa, easy entity redomicile, low friction for 70+ nationalities." },
  { key: "regulatory", n: 3, name: "Regulatory / crypto", weight: 2.0, five: "Clear crypto framework, English-law wrapper, precedent deals (e.g. Solana)." },
  { key: "cost", n: 4, name: "Cost & real estate", weight: 1.5, five: "Cheap land + build cost, prefab-friendly permitting, room for 1,024+." },
  { key: "connectivity", n: 5, name: "Connectivity", weight: 1.5, five: "International airport, direct flights to a hub, strong fiber + power." },
  { key: "livability", n: 6, name: "Livability & safety", weight: 1.5, five: "Climate viable for the 'burn', low crime, real healthcare." },
  { key: "talent", n: 7, name: "Talent pull", weight: 1.0, five: "Government actively recruiting talent, local tech / university base." },
  { key: "neutrality", n: 8, name: "Geopolitical neutrality", weight: 1.0, five: "Few flashpoints of the kind that sank Malaysia; broad passport acceptance." },
  { key: "specialty", n: 9, name: "Node specialty fit", weight: 1.0, five: "A distinct lane the network doesn't already have; not a duplicate node." },
];

export const MAX_WEIGHTED = AXES.reduce((a, x) => a + x.weight * 5, 0); // 75

// ── HARD GATES ───────────────────────────────────────────────────────────
// Not soft scores. A site that fails a gate is capped, regardless of how
// good its cost or lifestyle numbers are.
export type GateState = {
  /** Written, named commitment from a government. */
  govt: boolean;
  /** A real long-stay visa path for the member nationality mix. */
  immigration: boolean;
  /** A site-specific legal wrapper (SEZ, charter, financial-centre regime). */
  siteWrapper: boolean;
};

export const GATE_CAPS = {
  /** No written government commitment: cannot exceed this. */
  govt: 49,
  /** No viable long-stay visa path: cannot exceed this. */
  immigration: 49,
  /** No site-specific legal wrapper: cannot reach the top tier. */
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

  const capped = final !== raw;
  const v = bandFor(final);
  return { raw, final, capped, capReason, ...v };
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

// The v1-v5 node framework (Balaji's public model).
export const NODE_STAGES: { v: string; title: string; detail: string }[] = [
  { v: "v1", title: "90-day popup", detail: "A startup-society popup. Proof of concept." },
  { v: "v2", title: "Society-as-a-service", detail: "A year-long membership program. The current model." },
  { v: "v3", title: "Permanent campus", detail: "A purpose-built campus for 1,000+ people." },
  { v: "v4", title: "Clone-stamp template", detail: "A prefab, open-source campus blueprint you can stamp anywhere." },
  { v: "v5", title: "Networked archipelago", detail: "Alumni spin up their own societies. Network State Plus." },
];

/** Country-level gate evidence, shared by every Kazakhstan site. */
export const COUNTRY_GATES: {
  key: keyof GateState;
  label: string;
  met: boolean;
  claim: string;
  source: Source;
}[] = [
  {
    key: "govt",
    label: "Government partnership",
    met: true,
    claim:
      "MOU between the Republic of Kazakhstan and Network School, signed with a named minister (Zhaslan Madiyev, Digital Development, Innovation and Aerospace Industry). Written and named, which is the standard the rubric requires.",
    source: { label: "Cointelegraph — Kazakhstan deal", url: "https://cointelegraph.com/news/balajis-network-school-turns-to-kazakhstan-amid-malaysia-setback" },
  },
  {
    key: "immigration",
    label: "Immigration path",
    met: true,
    claim:
      "Two live instruments: the Neo Nomad visa (B12-1), one year renewable three times for remote workers earning $3,000+/month for a foreign employer; and Digital Nomad Residency (B9-1) for IT professionals with no income floor and a path to 10-year residence.",
    source: { label: "Fragomen — Kazakhstan digital nomad visa", url: "https://www.fragomen.com/insights/kazakhstan-digital-nomad-visa-introduced.html" },
  },
];

export type AxisEvidence = { note: string; source?: Source };

export type Site = {
  slug: string;
  city: string;
  flag: string;
  region: string;
  level: string; // where it sits in the hierarchy
  lane: string;
  note: string;
  gates: GateState;
  wrapperClaim: string;
  wrapperSource?: Source;
  scores: Record<string, number>;
  evidence: Record<string, AxisEvidence>;
};

export const SITES: Site[] = [
  {
    slug: "astana",
    city: "Astana (AIFC)",
    flag: "🇰🇿",
    region: "Akmola / capital",
    level: "State + facility wrapper (AIFC)",
    lane: "Sovereignty & the redomiciliation wrapper",
    note: "The capital, seat of the sponsoring ministry, and home of the Astana International Financial Centre: English common law, an independent court, and its own financial regulator. It is the single thing NS most lacks right now — codified legal recognition rather than goodwill. Harsh continental winters are the tradeoff.",
    gates: { govt: true, immigration: true, siteWrapper: true },
    wrapperClaim:
      "AIFC operates a separate legal regime based on English common law with its own independent court and regulator (AFSA), plus a defined route for foreign companies to redomicile.",
    wrapperSource: { label: "AIFC — official", url: "https://aifc.kz/" },
    scores: { govt: 5, immigration: 5, regulatory: 5, cost: 4, connectivity: 4, livability: 3, talent: 3, neutrality: 4, specialty: 5 },
    evidence: {
      govt: { note: "Capital city and seat of the ministry that signed the MOU. Shortest path from campus to sponsor.", source: { label: "Balaji — MOU announcement", url: "https://x.com/balajis/status/2079602220878712972" } },
      immigration: { note: "National Neo Nomad / B9-1 instruments apply, and AIFC adds its own entity-migration route on top.", source: { label: "Fragomen", url: "https://www.fragomen.com/insights/kazakhstan-digital-nomad-visa-introduced.html" } },
      regulatory: { note: "AIFC's English-common-law regime with an independent court and the AFSA fintech/crypto framework.", source: { label: "AIFC — official", url: "https://aifc.kz/" } },
      cost: { note: "Cheaper build and lease than any comparable common-law jurisdiction, though pricier than greenfield Kazakhstan. Editorial estimate." },
      connectivity: { note: "Astana international airport; fewer direct long-haul routes than Almaty. Editorial estimate." },
      livability: { note: "Safe and modern, but one of the coldest capitals on earth. Winter is the binding constraint on the outdoor 'burn'. Editorial estimate." },
      talent: { note: "Government actively recruiting; smaller organic tech base than Almaty. Editorial estimate." },
      neutrality: { note: "Kazakhstan runs a multi-vector foreign policy; Russia proximity is the main risk to price in. Editorial estimate." },
      specialty: { note: "Owns the lane NS needs most: the legal wrapper. No other node in the network offers common-law redomiciliation." },
    },
  },
  {
    slug: "alatau-city",
    city: "Alatau City",
    flag: "🇰🇿",
    region: "Almaty region",
    level: "Region + facility (SEZ, special legal regime)",
    lane: "The purpose-built canvas with a legal wrapper",
    note: "A new technology city beside Almaty with its own special legal regime — Parliament adopted a 'territory of accelerated development' status, and the SEZ was expanded to roughly 99,000 hectares in late 2025. Its master plan includes a Business Park for IT and a 'Golden District' for education and science. Active territorial development begins 2026, which is both the opportunity and the risk: it is the v4 clone-stamp canvas, but the trunk utilities are still going in.",
    gates: { govt: true, immigration: true, siteWrapper: true },
    wrapperClaim:
      "Parliament adopted a special legal regime for Alatau ('territory of accelerated development') with its own economic, administrative and legal rules; the SEZ footprint was expanded and re-zoned in Nov 2025.",
    wrapperSource: { label: "Novastan — Alatau gains special status", url: "https://novastan.org/en/kazakhstan/kazakhstan-futuristic-city-alatau-special-status/" },
    scores: { govt: 5, immigration: 4, regulatory: 4, cost: 5, connectivity: 3, livability: 3, talent: 5, neutrality: 4, specialty: 5 },
    evidence: {
      govt: { note: "Special legal regime adopted by Parliament, plus a governance architecture explicitly designed to be predictable for investors from 2026.", source: { label: "Alatau City — 2025 year in review", url: "https://alatau.city/news/alatau-city-in-2025-year-in-review" } },
      immigration: { note: "National Neo Nomad / B9-1 instruments apply. No Alatau-specific immigration channel confirmed yet — treat as national baseline.", source: { label: "Fragomen", url: "https://www.fragomen.com/insights/kazakhstan-digital-nomad-visa-introduced.html" } },
      regulatory: { note: "SEZ plus accelerated-development legal regime. Not common law like AIFC, so weaker for entity redomiciliation.", source: { label: "Novastan", url: "https://novastan.org/en/kazakhstan/kazakhstan-futuristic-city-alatau-special-status/" } },
      cost: { note: "Greenfield land inside an SEZ with investment incentives — the cheapest credible build in the set.", source: { label: "Invest in Almaty — SEZ", url: "https://almaty.invest.gov.kz/doing-business-here/special-economic-zone/" } },
      connectivity: { note: "Almaty international airport is adjacent, but trunk utility networks are only being launched in 2026. Infrastructure risk is real.", source: { label: "Alatau City — 2025 year in review", url: "https://alatau.city/news/alatau-city-in-2025-year-in-review" } },
      livability: { note: "Inherits Almaty's climate and mountains, but as a new-build city the amenity layer is thin today. Editorial estimate." },
      talent: { note: "Almaty's talent pool is next door — the deepest in the country — and the master plan includes an education and science district.", source: { label: "Alatau City", url: "https://alatau.city/" } },
      neutrality: { note: "Same national profile as Astana. Editorial estimate." },
      specialty: { note: "The only candidate that is simultaneously a blank canvas AND legally wrapped: the v4 clone-stamp campus with a charter around it." },
    },
  },
  {
    slug: "almaty",
    city: "Almaty (city proper)",
    flag: "🇰🇿",
    region: "Almaty / southeast",
    level: "State / city — no site-specific wrapper",
    lane: "Livability & talent (the 'burn' node)",
    note: "The cultural and tech capital: the deepest talent pool, universities, a real startup scene, mountains for the outdoor 'burn', and a milder climate than the north. The catch is structural — redomiciliation runs through AIFC in Astana, and the city proper offers no site-specific legal regime. Best place to live, weakest place to incorporate.",
    gates: { govt: true, immigration: true, siteWrapper: false },
    wrapperClaim:
      "No city-specific legal regime. Operates under ordinary Kazakh municipal law, which is precisely the configuration that failed in Iskandar Puteri.",
    scores: { govt: 4, immigration: 3, regulatory: 3, cost: 4, connectivity: 4, livability: 5, talent: 5, neutrality: 4, specialty: 3 },
    evidence: {
      govt: { note: "Covered by the national MOU, but no Almaty-specific written commitment identified. This is the gap to close before committing.", source: { label: "Cointelegraph", url: "https://cointelegraph.com/news/balajis-network-school-turns-to-kazakhstan-amid-malaysia-setback" } },
      immigration: { note: "National instruments only. Editorial estimate.", source: { label: "Fragomen", url: "https://www.fragomen.com/insights/kazakhstan-digital-nomad-visa-introduced.html" } },
      regulatory: { note: "No local crypto or common-law wrapper; AIFC's regime is in Astana. Editorial estimate." },
      cost: { note: "Affordable by OECD standards with real inventory, though the priciest Kazakh city. Editorial estimate." },
      connectivity: { note: "The country's largest airport and most international routes. Editorial estimate." },
      livability: { note: "Mountains, milder climate, the strongest amenity layer in Kazakhstan. The best 'burn' of any candidate. Editorial estimate." },
      talent: { note: "Largest concentration of universities, engineers and startups in the country. Editorial estimate." },
      neutrality: { note: "Same national profile. Editorial estimate." },
      specialty: { note: "A great lifestyle node, but it does not own a lane the network lacks. Editorial judgement." },
    },
  },
  {
    slug: "aktau",
    city: "Aktau",
    flag: "🇰🇿",
    region: "Mangystau / Caspian coast",
    level: "Region (SEZ)",
    lane: "Energy & frontier logistics (atoms, not bits)",
    note: "Caspian port, a special economic zone, energy-adjacent and warmer than the interior. Cheap power for compute and mining plus an aerospace/frontier edge — the sponsoring ministry literally covers aerospace. A distinct atoms-and-energy lane, but a thin talent base and a remote, industrial feel.",
    gates: { govt: true, immigration: true, siteWrapper: true },
    wrapperClaim:
      "Operates within a designated special economic zone with its own investment regime, though without a common-law wrapper.",
    scores: { govt: 4, immigration: 3, regulatory: 3, cost: 4, connectivity: 3, livability: 3, talent: 2, neutrality: 3, specialty: 4 },
    evidence: {
      govt: { note: "National MOU plus SEZ administration. No site-specific written commitment identified. Editorial estimate." },
      immigration: { note: "National instruments only. Editorial estimate." },
      regulatory: { note: "SEZ incentives without a common-law regime. Editorial estimate." },
      cost: { note: "Cheap land and power. Editorial estimate." },
      connectivity: { note: "Airport and Caspian port, but far fewer international routes. Editorial estimate." },
      livability: { note: "Warmer and coastal, but remote and industrial. Editorial estimate." },
      talent: { note: "Small local technical base. Editorial estimate." },
      neutrality: { note: "Caspian energy geopolitics add complexity. Editorial estimate." },
      specialty: { note: "Owns an energy-and-atoms lane the network genuinely lacks. Editorial judgement." },
    },
  },
  {
    slug: "karaganda",
    city: "Karaganda (greenfield)",
    flag: "🇰🇿",
    region: "Karaganda / central",
    level: "State — greenfield, no wrapper",
    lane: "The cheapest v4 prefab test bed",
    note: "Low cost and greenfield land: the cleanest canvas to test the prefab, open-source clone-stamp campus with no legacy constraints. Thin infrastructure and a small talent base make it a lab, not a flagship.",
    gates: { govt: true, immigration: true, siteWrapper: false },
    wrapperClaim:
      "No special economic zone or charter regime identified. Ordinary municipal law.",
    scores: { govt: 3, immigration: 3, regulatory: 2, cost: 5, connectivity: 2, livability: 3, talent: 2, neutrality: 3, specialty: 3 },
    evidence: {
      govt: { note: "National MOU only; no regional or municipal commitment identified. Editorial estimate." },
      immigration: { note: "National instruments only. Editorial estimate." },
      regulatory: { note: "No special regime identified. Editorial estimate." },
      cost: { note: "The cheapest land and build cost in the set. Editorial estimate." },
      connectivity: { note: "Regional airport, thin international access. Editorial estimate." },
      livability: { note: "Continental climate, limited amenity layer. Editorial estimate." },
      talent: { note: "Small technical base. Editorial estimate." },
      neutrality: { note: "Same national profile. Editorial estimate." },
      specialty: { note: "Useful as a prefab test bed, not as a flagship. Editorial judgement." },
    },
  },
];

/** Facility-level shortlist for the Almaty area — the level that killed Forest City. */
export const ALMATY_FACILITIES: {
  name: string;
  kind: string;
  why: string;
  watch: string;
  source?: Source;
}[] = [
  {
    name: "Alatau City — Business Park / IT district",
    kind: "SEZ greenfield, purpose-built",
    why: "Inside the special legal regime, zoned for IT and business, with an education and science district in the master plan. The only Almaty-area option where the campus and the legal wrapper are the same jurisdiction.",
    watch: "Trunk utilities only launching in 2026. Confirm power, water and fiber delivery dates in writing before committing a cohort.",
    source: { label: "Alatau City", url: "https://alatau.city/" },
  },
  {
    name: "Alatau Innovation Technology Park SEZ",
    kind: "Existing SEZ, operating",
    why: "An operating SEZ the Prime Minister has personally inspected for high-tech manufacturing. Real, occupied infrastructure rather than a rendering.",
    watch: "Zoned around manufacturing. Confirm that a residential-plus-coworking campus is a permitted use — this is exactly the mismatch that revoked Forest City.",
    source: { label: "PM of Kazakhstan — Alatau ITP SEZ inspection", url: "https://primeminister.kz/en/news/olzhas-bektenov-inspected-the-implementation-of-the-presidents-instructions-on-the-development-of-high-tech-manufacturing-at-the-alatau-innovation-technology-park-sez-in-almaty-30966" },
  },
  {
    name: "Almaty central business district",
    kind: "Existing commercial towers",
    why: "Fastest possible occupancy: fit-out and move in. Maximum amenity, maximum talent proximity, zero construction risk.",
    watch: "No special legal regime, and mixing office with residential/coworking use in a commercial tower is the Forest City failure mode. Verify permitted use per unit, in writing, per floor.",
  },
  {
    name: "Medeu / Shymbulak mountain corridor",
    kind: "Resort and retreat property",
    why: "The strongest 'burn' setting in Kazakhstan: altitude, trails, ski access, a genuinely distinctive campus identity.",
    watch: "Seasonal access, limited capacity, and resort zoning that rarely permits long-stay residential-plus-work use.",
  },
];

export const GUARDRAILS: string[] = [
  "Government partnership is a hard gate, not a score. A site with no written, named commitment is capped below the top tier no matter how cheap or pleasant it is.",
  "Immigration is a hard gate. Model visa status for the actual member-nationality mix, not the average case.",
  "Verify permitted use at the facility level, in writing, per unit. Malaysia was fine. Johor was fine. A premises-use licence on two adjoining units is what actually closed the campus.",
  "Keep 'earned recognition' and 'political goodwill' distinct. Goodwill from a ministry can reverse; codified law (AIFC, or Alatau's accelerated-development regime) is stickier.",
  "Every non-obvious number here is either sourced or explicitly labeled an editorial estimate. Do not launder estimates into facts when this reaches NS decision-makers.",
];

export const REFERENCES: Source[] = [
  { label: "Balaji — Kazakhstan MOU announcement (X)", url: "https://x.com/balajis/status/2079602220878712972" },
  { label: "Cointelegraph — Kazakhstan deal + Malaysia revocation", url: "https://cointelegraph.com/news/balajis-network-school-turns-to-kazakhstan-amid-malaysia-setback" },
  { label: "The Star — Johor revokes Network School's business licences", url: "https://www.thestar.com.my/news/nation/2026/07/21/johor-authorities-revoke-network-school039s-business-licences" },
  { label: "Malay Mail — MDEC to revoke NSO Malaysia's Digital status", url: "https://www.malaymail.com/news/malaysia/2026/07/22/mdec-to-revoke-digital-status-of-forest-city-school-operator-nso-malaysia/228499" },
  { label: "Fragomen — Kazakhstan digital nomad visa introduced", url: "https://www.fragomen.com/insights/kazakhstan-digital-nomad-visa-introduced.html" },
  { label: "Novastan — Alatau gains special status", url: "https://novastan.org/en/kazakhstan/kazakhstan-futuristic-city-alatau-special-status/" },
  { label: "Alatau City — official", url: "https://alatau.city/" },
  { label: "Invest in Almaty — SEZ and industrial zones", url: "https://almaty.invest.gov.kz/doing-business-here/special-economic-zone/" },
  { label: "Balaji — Network School node framework (v1-v5)", url: "https://balajis.com/p/network-school-2025" },
];
