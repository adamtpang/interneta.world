// The S-tier shortlist: every site across every search, put through a
// conjecture-and-criticism pass. The thesis is the strongest honest bull
// case; the critique is the strongest honest objection; the verdict is what
// would move it up a tier. Tiers answer one question: where should NS point
// resources next?
//
// S = signed and wrapped. Execute.
// A = would be S with a signature. Pursue the signature, cheapest test first.
// B = workable satellite or lab, not a flagship. Park.

export type ShortTier = "S" | "A" | "B";

export type ShortlistEntry = {
  tier: ShortTier;
  countrySlug: string;
  siteSlug: string;
  thesis: string;
  critique: string;
  verdict: string;
};

export const TIER_META: Record<
  ShortTier,
  { label: string; color: string; action: string }
> = {
  S: { label: "S · EXECUTE", color: "#16a34a", action: "Signed and wrapped. Spend on execution, not persuasion." },
  A: { label: "A · PURSUE THE SIGNATURE", color: "#06b6d4", action: "The only failure is the missing signature. Spend on the conversation." },
  B: { label: "B · PARK", color: "#94a3b8", action: "Satellite or lab material. Revisit when the network needs a second lane." },
};

export const SHORTLIST: ShortlistEntry[] = [
  // ── S ──
  {
    tier: "S",
    countrySlug: "kazakhstan",
    siteSlug: "astana",
    thesis:
      "The only candidate that pairs a signed sovereign MOU with a codified English-common-law wrapper. AIFC redomiciliation answers the exact instrument NS lost in Malaysia, and the sponsoring ministry is in the same city.",
    critique:
      "One of the coldest capitals on earth, and the outdoor burn dies for five months a year. Talent is thinner than Almaty, and an MOU with this government is newer and less tested than AIFC's decade of case law.",
    verdict:
      "Execute as the legal seat regardless of where the campus lands. Incorporation here is the floor of the whole strategy.",
  },
  {
    tier: "S",
    countrySlug: "kazakhstan",
    siteSlug: "alatau-city",
    thesis:
      "A Parliament-chartered special regime on greenfield land next to the country's deepest talent pool. The only site that is simultaneously a blank canvas and legally wrapped: the v4 clone-stamp campus with a charter around it.",
    critique:
      "Trunk utilities only start landing in 2026. A campus that opens before the city does inherits construction-nation risk, and the regime is new law with no case history.",
    verdict:
      "Execute as the campus IF power, water, and fiber delivery dates arrive in writing with penalties. Otherwise hold at Astana and lease in Almaty while it builds out.",
  },
  // ── A ──
  {
    tier: "A",
    countrySlug: "uae",
    siteSlug: "ras-al-khaimah",
    thesis:
      "The highest raw score of any unsigned site. The only jurisdiction anywhere that gives a DAO legal personality, inside a purpose-built digital-assets free zone, in a country with near-frictionless founder immigration.",
    critique:
      "No signature, and the UAE courts everyone, which makes goodwill cheap and commitment expensive. Summer kills the outdoor burn, and the emirate itself is quiet: members would orbit Dubai.",
    verdict:
      "One well-aimed conversation with the free-zone authority establishes whether a written campus commitment is available. Highest upside-per-conversation in the set.",
  },
  {
    tier: "A",
    countrySlug: "el-salvador",
    siteSlug: "el-zonte",
    thesis:
      "The only place on earth where the node joins a lived Bitcoin culture instead of importing one. The state sells residency for BTC, runs a Bitcoin Office, and the security turnaround removed the historic objection.",
    critique:
      "The IMF deal shows sovereign priorities can bend: Bitcoin acceptance went voluntary the moment $1.4B required it. Capacity is the hard wall: a 1,024-bed campus in a surf town means building it yourself.",
    verdict:
      "The cheapest signature test available: the state's crypto diplomacy is already staffed. Ask, and El Zonte plus a capital office becomes a flagship candidate or the file closes at zero cost.",
  },
  {
    tier: "A",
    countrySlug: "georgia",
    siteSlug: "tbilisi",
    thesis:
      "The strongest immigration primitive in the comparison: 365 days visa-free for most of the likely membership, plus a 1% entrepreneur tax, at the lowest livable-capital cost anywhere.",
    critique:
      "The March 2026 entry-versus-work split proves the rules move, and they moved against remote workers. EU accession is frozen, the streets are in a protest cycle, and there is no institution equivalent to AIFC to anchor commitments.",
    verdict:
      "Quiet exploratory contact only. If any future government codifies a network-state regime the way it codified the 1% status, Georgia jumps the queue overnight. Do not build ahead of the politics.",
  },
  // ── B ──
  {
    tier: "B",
    countrySlug: "kazakhstan",
    siteSlug: "almaty",
    thesis: "Best place to live in the signed country: talent, mountains, mild climate.",
    critique: "No site wrapper: ordinary municipal law is the Forest City configuration.",
    verdict: "Lease housing here while Alatau builds; never make it the legal seat.",
  },
  {
    tier: "B",
    countrySlug: "uae",
    siteSlug: "abu-dhabi",
    thesis: "Institutional-grade common law and deep capital.",
    critique: "Duplicates what AIFC already gives the network, at several times the cost, without a signature.",
    verdict: "Only relevant if a UAE ministry initiates.",
  },
  {
    tier: "B",
    countrySlug: "uae",
    siteSlug: "dubai",
    thesis: "Densest crypto talent pool in the region; easiest room to fill.",
    critique: "A node here is one of many; no distinct lane, maximal cost.",
    verdict: "Events venue, not a campus.",
  },
  {
    tier: "B",
    countrySlug: "kazakhstan",
    siteSlug: "aktau",
    thesis: "An energy-and-atoms lane the network genuinely lacks.",
    critique: "Thin talent, industrial feel, and the flagship needs people before power.",
    verdict: "Candidate for node three, not node two.",
  },
  {
    tier: "B",
    countrySlug: "georgia",
    siteSlug: "kutaisi",
    thesis: "A real operating tax-free zone at the lowest campus cost in the set.",
    critique: "Industrial zoning, thin amenities, and the same national political risk.",
    verdict: "A lab for the prefab template if Georgia ever signs.",
  },
  {
    tier: "B",
    countrySlug: "el-salvador",
    siteSlug: "bitcoin-city",
    thesis: "On paper, the most NS-shaped canvas in the hemisphere.",
    critique: "Unbuilt since 2021; announcements are not zoning.",
    verdict: "Score it when ground breaks, not before.",
  },
  {
    tier: "B",
    countrySlug: "kazakhstan",
    siteSlug: "karaganda",
    thesis: "Cheapest possible prefab test bed in the signed country.",
    critique: "No wrapper, thin everything.",
    verdict: "Only if the v4 template needs a stress test.",
  },
];
