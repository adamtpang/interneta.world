import type { NodeSearch } from "@/lib/data/node-search";

// Georgia is the immigration-primitive case: the famous 365-day visa-free
// entry is the single most generous presence right on earth, and the 1% small
// business tax is the cleanest personal wrapper. But two things changed the
// math. A March 2026 rule split visa-free ENTRY from the right to WORK,
// leaving remote work for a foreign employer in a gray zone. And the EU
// formally suspended Georgia's accession process in December 2024 amid
// disputed elections and a crackdown on civil society. Great primitive,
// real political risk, no NS signature.
export const GEORGIA: NodeSearch = {
  slug: "georgia",
  country: "Georgia",
  flag: "🇬🇪",
  dateline: "WATCH LIST",
  status: "watch",
  headline: "What Georgia would score",
  subhead: "if the politics held still.",
  situation: [
    "Georgia is not a live Network School search. There is no announced MOU and no named ministry sponsor. It is on the watch list because it holds the strongest raw immigration primitive of any candidate: citizens of roughly 95 countries can enter visa-free and stay up to 365 days, and individual entrepreneurs pay 1% tax on turnover up to a high threshold.",
    "Two developments cut against it. On 1 March 2026 new rules split visa-free entry from the right to work, so being in Georgia legally no longer automatically means working there legally, and remote work for a foreign employer sits in a gray zone. Politically, the ruling party suspended EU accession until 2028, the EU formally froze the process in December 2024, and 2024 to 2026 brought disputed elections, protest crackdowns, and repressive laws targeting civil society. The primitive is world-class; the trajectory is the risk.",
  ],
  structuralLesson:
    "Georgia tests a different failure mode than Malaysia. Forest City failed on facility licensing under a stable state. Georgia's risk is the opposite: friendly rules today, but a political trajectory that can rewrite them. The March 2026 work-rights split is exactly that pattern already happening. A node here needs its commitments codified, not customary.",
  countryGates: [
    {
      key: "govt",
      label: "Government partnership",
      met: false,
      claim:
        "No MOU, no named sponsor, no written commitment to Network School identified. The government is currently inward-turned, suspended from the EU track, and sanctioned by several Western states at official level. Every site below is capped at 49 until something is signed.",
      source: { label: "Al Jazeera, Georgia suspends EU accession talks", url: "https://www.aljazeera.com/news/2024/11/28/georgia-to-suspend-eu-accession-talks-until-2028" },
    },
    {
      key: "immigration",
      label: "Immigration path",
      met: true,
      claim:
        "365-day visa-free entry for citizens of roughly 95 countries remains in force, which covers physical presence generously. The caveat is new: since 1 March 2026, visa-free entry no longer carries an automatic right to work, and remote work for a foreign employer is in a gray zone pending clarification.",
      source: { label: "Shareuhack, Georgia work permit 2026 changes", url: "https://www.shareuhack.com/en/posts/georgia-digital-nomad-work-permit-2026" },
    },
  ],
  sites: [
    {
      slug: "tbilisi",
      city: "Tbilisi",
      flag: "🇬🇪",
      region: "Capital",
      level: "State / city, no site-specific wrapper",
      lane: "The cheap, charming capital with the 1% wrapper",
      note: "The capital and the country's center of gravity: cafe culture, a real startup and crypto scene, dramatic topography, and a cost of living that makes a campus radically cheap to run. The 1% individual-entrepreneur regime is the cleanest personal tax wrapper in the comparison. No site-specific legal regime, and the protests-and-crackdown cycle plays out here first.",
      gates: { govt: false, immigration: true, siteWrapper: false },
      wrapperClaim:
        "No city-specific legal regime. Ordinary Georgian law, plus the national 1% individual-entrepreneur tax status that members can hold personally.",
      scores: { govt: 2, immigration: 4, regulatory: 3, cost: 5, connectivity: 3, livability: 3, talent: 3, neutrality: 2, specialty: 3 },
      evidence: {
        govt: { note: "No commitment identified, and official receptiveness is hard to read while the government is in confrontation with Western institutions. Editorial estimate." },
        immigration: { note: "365-day visa-free presence stands; the March 2026 entry-versus-work split leaves remote work gray. Scored 4, down from what would have been a 5.", source: { label: "Shareuhack, 2026 changes", url: "https://www.shareuhack.com/en/posts/georgia-digital-nomad-work-permit-2026" } },
        regulatory: { note: "Historically crypto-friendly banking and the 1% IE regime; no common-law wrapper. Editorial estimate." },
        cost: { note: "Among the cheapest livable capitals anywhere; a campus here runs at a fraction of UAE or Kazakhstan-capital cost. Editorial estimate." },
        connectivity: { note: "Direct flights across Europe, the Gulf and Central Asia; no long-haul trunk. Editorial estimate." },
        livability: { note: "Beloved by nomads for food, safety at street level, and mountains; scored down for the ongoing protest-and-crackdown cycle. Editorial estimate." },
        talent: { note: "A real but small developer pool; strong informal tech community. Editorial estimate." },
        neutrality: { note: "The binding constraint: EU process frozen, Russia border and influence live, internal instability real.", source: { label: "Crisis Group, Georgia's turn against the EU", url: "https://www.crisisgroup.org/cmt/europe-central-asia/georgia/managing-georgias-turn-against-eu" } },
        specialty: { note: "Charm and cost, but no lane the network lacks. Editorial judgement." },
      },
    },
    {
      slug: "kutaisi",
      city: "Kutaisi (Hualing FIZ)",
      flag: "🇬🇪",
      region: "Imereti / west",
      level: "Region + facility (Free Industrial Zone)",
      lane: "The tax-free zone next to the budget-airline hub",
      note: "Georgia's second city, home to an operating Free Industrial Zone offering 100% tax-free company operations, and to the country's low-cost-airline airport. The FIZ is a real, functioning wrapper, and Kutaisi land is even cheaper than Tbilisi. The trade is a thin amenity layer and a small talent pool.",
      gates: { govt: false, immigration: true, siteWrapper: true },
      wrapperClaim:
        "The Kutaisi Free Industrial Zone (operational since 2015, ~36 hectares) plus the Hualing FIZ offer registered companies 100% tax-free operation inside the zone.",
      wrapperSource: { label: "Kutaisi Free Zone, official", url: "https://kutaisifreezone.ge/" },
      scores: { govt: 2, immigration: 4, regulatory: 3, cost: 5, connectivity: 2, livability: 3, talent: 2, neutrality: 2, specialty: 4 },
      evidence: {
        govt: { note: "Same national picture as Tbilisi: no commitment, hard-to-read receptiveness. Editorial estimate." },
        immigration: { note: "Same national instruments and the same March 2026 work-rights caveat.", source: { label: "Shareuhack, 2026 changes", url: "https://www.shareuhack.com/en/posts/georgia-digital-nomad-work-permit-2026" } },
        regulatory: { note: "FIZ gives corporate tax freedom inside the zone; it is an industrial regime, not a common-law court.", source: { label: "Kutaisi Free Zone", url: "https://kutaisifreezone.ge/" } },
        cost: { note: "Cheapest credible campus economics in the entire comparison set. Editorial estimate." },
        connectivity: { note: "Kutaisi airport is a budget-carrier hub to Europe; little else. Editorial estimate." },
        livability: { note: "Quiet, green, safe; thin amenities. Editorial estimate." },
        talent: { note: "Small pool; over 20,000 people work in the FIZ but mostly in industry.", source: { label: "Kutaisi FIZ overview", url: "https://www.freetradezone.ge/kutaisi-free-industrial-zone-fiz" } },
        neutrality: { note: "Same national risk profile. Editorial estimate." },
        specialty: { note: "A genuinely tax-free campus jurisdiction at rock-bottom cost is a lane, if the politics hold. Editorial judgement." },
      },
    },
    {
      slug: "batumi",
      city: "Batumi",
      flag: "🇬🇪",
      region: "Adjara / Black Sea coast",
      level: "State / city, no confirmed wrapper",
      lane: "The Black Sea lifestyle node",
      note: "Georgia's seaside city: beaches, a casino-and-towers skyline, subtropical climate, and a summer nomad scene. The best pure lifestyle proposition in the country, with the weakest institutional story. No confirmed site wrapper for the kind of campus NS runs.",
      gates: { govt: false, immigration: true, siteWrapper: false },
      wrapperClaim:
        "No confirmed campus-suitable special regime identified. Ordinary Georgian law.",
      scores: { govt: 2, immigration: 4, regulatory: 3, cost: 4, connectivity: 2, livability: 4, talent: 2, neutrality: 2, specialty: 3 },
      evidence: {
        govt: { note: "Same national picture. Editorial estimate." },
        immigration: { note: "Same national instruments and caveat. Editorial estimate." },
        regulatory: { note: "No zone regime confirmed for this use. Editorial estimate." },
        cost: { note: "Cheap by any Western standard, pricier than Kutaisi in season. Editorial estimate." },
        connectivity: { note: "Seasonal routes; most long-haul goes through Tbilisi. Editorial estimate." },
        livability: { note: "Sea, subtropical warmth, walkable core; the best daily-life offer in Georgia. Editorial estimate." },
        talent: { note: "Thin. Editorial estimate." },
        neutrality: { note: "Same national risk, plus proximity to the Abkhazia line further north on the coast. Editorial estimate." },
        specialty: { note: "Lifestyle without a distinct institutional lane. Editorial judgement." },
      },
    },
  ],
  facilitiesLabel: "FACILITY LEVEL ::: NOTES",
  facilitiesIntro:
    "Not researched to facility level, because the country gate fails. The one structural note worth recording now.",
  facilities: [
    {
      name: "Kutaisi FIZ campus conversion",
      kind: "Operating tax-free zone",
      why: "The only Georgian option where a campus entity could sit inside a real, operating special regime from day one.",
      watch: "The FIZ is an industrial regime. Confirm in writing that residential-plus-education use is permitted inside the zone; that mismatch is the Forest City failure mode.",
      source: { label: "Kutaisi Free Zone", url: "https://kutaisifreezone.ge/" },
    },
  ],
  read: [
    "Georgia holds the best single immigration primitive in the comparison: 365 days of visa-free presence for most of the network's likely membership. If the only question were 'can members show up and stay', Georgia wins outright. But the March 2026 entry-versus-work split shows the rules can move, and the EU-accession freeze shows which direction the wind blows.",
    "The resource-allocation read: Georgia is worth a quiet, exploratory conversation, not a campus commitment. If a future government wanted to codify a network-state regime the way it once codified the 1% entrepreneur status, Georgia would jump the queue overnight. Until then it is a watch-list entry with the strongest upside-per-signature in the set.",
  ],
  references: [
    { label: "Shareuhack, Georgia work permit 2026: the entry-versus-work split", url: "https://www.shareuhack.com/en/posts/georgia-digital-nomad-work-permit-2026" },
    { label: "Al Jazeera, Georgia suspends EU accession talks until 2028", url: "https://www.aljazeera.com/news/2024/11/28/georgia-to-suspend-eu-accession-talks-until-2028" },
    { label: "International Crisis Group, Managing Georgia's turn against the EU", url: "https://www.crisisgroup.org/cmt/europe-central-asia/georgia/managing-georgias-turn-against-eu" },
    { label: "Kutaisi Free Industrial Zone, official", url: "https://kutaisifreezone.ge/" },
    { label: "Healy Consultants, guide to Georgia's three Free Industrial Zones", url: "https://www.healyconsultants.com/georgia-company-registration/free-zones/" },
  ],
};
