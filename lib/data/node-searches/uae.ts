import type { NodeSearch } from "@/lib/data/node-search";

// The UAE is the control case for the rubric. It has arguably the best legal
// wrappers on earth for this kind of entity — and it still cannot reach the
// top tier, because there is no written Network School commitment. That is the
// hard gate doing its job: infrastructure does not substitute for a signature.
export const UAE: NodeSearch = {
  slug: "uae",
  country: "United Arab Emirates",
  flag: "🇦🇪",
  dateline: "WATCH LIST",
  status: "watch",
  headline: "What the UAE would score",
  subhead: "if there were a signature.",
  situation: [
    "The UAE is not a live Network School search. There is no announced MOU and no named ministry sponsor. It is included here as the control case for the rubric, because it isolates one variable cleanly: the UAE has world-class legal wrappers, near-frictionless immigration for skilled founders, and zero personal income tax, and it still cannot reach the top tier.",
    "That is the hard gate working as designed. Every axis below is scored on the merits, and every site is then capped at 49 because no written, named government commitment to NS exists. Infrastructure does not substitute for a signature. If an MOU were signed tomorrow, these same numbers would jump into contention immediately.",
  ],
  structuralLesson:
    "Read this page against Kazakhstan. Kazakhstan has a weaker regulatory stack and better raw livability trade-offs, but it has the signature. The UAE has the stack and no signature. The rubric says the signature wins, and the Forest City post-mortem is why.",
  countryGates: [
    {
      key: "govt",
      label: "Government partnership",
      met: false,
      claim:
        "No announced MOU, no named ministry sponsor, no written commitment to Network School identified. Free-zone authorities court businesses generally, which is not the same as a sovereign commitment to a specific institution. This gate fails, and every UAE site below is capped at 49 as a result.",
    },
    {
      key: "immigration",
      label: "Immigration path",
      met: true,
      claim:
        "Fast-track residency pathways including the 10-year Golden Visa for founders, investors and highly skilled professionals, plus remote-work permits. Among the most frictionless entry regimes available to a distributed team.",
      source: { label: "Neo Legal — VARA vs ADGM vs RAK DAO", url: "https://neolegal.ae/compare/vara-vs-adgm-vs-rak-dao" },
    },
  ],
  sites: [
    {
      slug: "ras-al-khaimah",
      city: "Ras Al Khaimah (RAK DAO)",
      flag: "🇦🇪",
      region: "RAK / northern emirates",
      level: "Region + facility (free zone, DAO regime)",
      lane: "The only jurisdiction that recognises a DAO as a legal person",
      note: "RAK Digital Assets Oasis is a free zone built specifically for Web3, and its DAO Associations Regime lets a DAO register as an association with legal personality — something no other jurisdiction in the set offers. It also accepts virtual-office arrangements, which suits a remote-first, distributed membership. The cheapest and fastest UAE setup, though the emirate itself is quieter than Dubai.",
      gates: { govt: false, immigration: true, siteWrapper: true },
      wrapperClaim:
        "A dedicated digital-assets free zone operating a DAO Associations Regime (DARe), under which a DAO may be registered as an association with legal personality.",
      wrapperSource: { label: "Neo Legal — VARA vs ADGM vs RAK DAO", url: "https://neolegal.ae/compare/vara-vs-adgm-vs-rak-dao" },
      scores: { govt: 3, immigration: 5, regulatory: 5, cost: 4, connectivity: 4, livability: 4, talent: 3, neutrality: 4, specialty: 5 },
      evidence: {
        govt: { note: "Free-zone authority actively courts Web3 businesses, but no NS-specific written commitment exists. Scored on general receptiveness only." },
        immigration: { note: "Golden Visa and remote-work permits; the free zone accepts virtual-office arrangements suited to distributed teams.", source: { label: "Neo Legal", url: "https://neolegal.ae/compare/vara-vs-adgm-vs-rak-dao" } },
        regulatory: { note: "The DAO Associations Regime gives a DAO legal personality — genuinely unique among the candidates.", source: { label: "Neo Legal", url: "https://neolegal.ae/compare/vara-vs-adgm-vs-rak-dao" } },
        cost: { note: "The lowest-cost and fastest-to-incorporate UAE free zone in the comparison. Editorial estimate." },
        connectivity: { note: "About an hour from Dubai International; strong power and fiber. Editorial estimate." },
        livability: { note: "Safe and modern with coast and mountains, but summer heat is severe and the social scene is thinner than Dubai. Editorial estimate." },
        talent: { note: "Smaller local pool; most talent commutes from or lives in Dubai. Editorial estimate." },
        neutrality: { note: "Broad passport acceptance and a non-aligned posture, though regional geopolitics are live. Editorial estimate." },
        specialty: { note: "Legal personality for a DAO is a lane no other candidate can claim. Editorial judgement." },
      },
    },
    {
      slug: "abu-dhabi",
      city: "Abu Dhabi (ADGM)",
      flag: "🇦🇪",
      region: "Abu Dhabi / capital",
      level: "State + facility wrapper (ADGM)",
      lane: "Institutional-grade common law",
      note: "Abu Dhabi Global Market is a free zone running a common-law legal environment under FSRA regulation, with a mature licensing system for exchanges, custodians and investment firms. The most institutionally credible wrapper in the UAE, and the closest analogue to what AIFC offers in Kazakhstan — with far deeper capital behind it.",
      gates: { govt: false, immigration: true, siteWrapper: true },
      wrapperClaim:
        "A free zone operating a common-law legal environment with English-language proceedings under FSRA regulation, with an established virtual-asset licensing framework.",
      wrapperSource: { label: "Neo Legal — VARA vs ADGM vs RAK DAO", url: "https://neolegal.ae/compare/vara-vs-adgm-vs-rak-dao" },
      scores: { govt: 3, immigration: 5, regulatory: 5, cost: 2, connectivity: 5, livability: 4, talent: 4, neutrality: 4, specialty: 4 },
      evidence: {
        govt: { note: "No NS-specific commitment. ADGM courts financial institutions broadly. Scored on general receptiveness only." },
        immigration: { note: "Golden Visa and skilled-professional routes.", source: { label: "Neo Legal", url: "https://neolegal.ae/compare/vara-vs-adgm-vs-rak-dao" } },
        regulatory: { note: "Common-law environment with English-language proceedings and a mature virtual-asset licensing system.", source: { label: "Neo Legal", url: "https://neolegal.ae/compare/vara-vs-adgm-vs-rak-dao" } },
        cost: { note: "Among the most expensive options in the whole comparison set. Editorial estimate." },
        connectivity: { note: "Major international hub with direct long-haul routes to every relevant market. Editorial estimate." },
        livability: { note: "Very safe, excellent healthcare, but extreme summer heat constrains the outdoor 'burn'. Editorial estimate." },
        talent: { note: "Deep finance and increasingly deep AI talent, heavily expat. Editorial estimate." },
        neutrality: { note: "Broad passport acceptance; regional geopolitics are live. Editorial estimate." },
        specialty: { note: "Institutional credibility, but overlaps with what AIFC already gives the network. Editorial judgement." },
      },
    },
    {
      slug: "dubai",
      city: "Dubai (DIFC / VARA)",
      flag: "🇦🇪",
      region: "Dubai",
      level: "State + facility wrapper (DIFC)",
      lane: "Density, capital, and a dedicated virtual-asset regulator",
      note: "DIFC offers a common-law jurisdiction, and Dubai additionally operates VARA, a regulator dedicated specifically to virtual assets. The densest concentration of crypto capital and founders in the region, and the easiest place to fill a room. It is also the most expensive, and the least distinctive: a Dubai node would be one of many.",
      gates: { govt: false, immigration: true, siteWrapper: true },
      wrapperClaim:
        "DIFC provides a common-law jurisdiction with English-language proceedings; Dubai separately operates VARA as a dedicated virtual-asset regulator.",
      wrapperSource: { label: "Neo Legal — VARA vs ADGM vs RAK DAO", url: "https://neolegal.ae/compare/vara-vs-adgm-vs-rak-dao" },
      scores: { govt: 3, immigration: 5, regulatory: 5, cost: 2, connectivity: 5, livability: 4, talent: 5, neutrality: 4, specialty: 3 },
      evidence: {
        govt: { note: "No NS-specific commitment identified. Scored on general receptiveness only." },
        immigration: { note: "Golden Visa, remote-work visa, and the region's most established expat infrastructure.", source: { label: "Neo Legal", url: "https://neolegal.ae/compare/vara-vs-adgm-vs-rak-dao" } },
        regulatory: { note: "DIFC common law plus VARA, a regulator dedicated specifically to virtual assets.", source: { label: "Neo Legal", url: "https://neolegal.ae/compare/vara-vs-adgm-vs-rak-dao" } },
        cost: { note: "The most expensive site in the entire comparison. Editorial estimate." },
        connectivity: { note: "One of the best-connected airports on the planet. Editorial estimate." },
        livability: { note: "Safe and highly serviced, but extreme summer heat and a car-dependent layout. Editorial estimate." },
        talent: { note: "The densest crypto and founder population in the region. Editorial estimate." },
        neutrality: { note: "Broad passport acceptance. Editorial estimate." },
        specialty: { note: "Hard to own a distinct lane here; a Dubai node would be one among many. Editorial judgement." },
      },
    },
  ],
  facilitiesLabel: "FACILITY LEVEL ::: NOTES",
  facilitiesIntro:
    "Not researched to facility level, because the country gate fails. Listed only so the shape of the work is visible if a signature ever materialises.",
  facilities: [
    {
      name: "Free-zone office + residential split",
      kind: "Standard UAE pattern",
      why: "The conventional structure: incorporate in the free zone, house members in ordinary residential towers nearby.",
      watch: "This is precisely the Forest City split — entity in one regime, people in another, with permitted-use rules differing between them. Verify residential and coworking permitted use per unit before any commitment.",
    },
  ],
  read: [
    "The UAE outscores Kazakhstan on regulatory, immigration and connectivity, and it still cannot reach the top tier. Every site here caps at 49 for one reason: no written, named commitment to Network School. That is the rubric refusing to let infrastructure substitute for a signature.",
    "The practical read: if NS ever wanted a second node with institutional-grade common law, RAK DAO is the most distinctive option in the country, because it is the only jurisdiction in the whole comparison that will recognise a DAO as a legal person. But it is a watch-list entry, not a candidate, until somebody signs something.",
  ],
  references: [
    { label: "Neo Legal — VARA vs ADGM vs RAK DAO comparison", url: "https://neolegal.ae/compare/vara-vs-adgm-vs-rak-dao" },
    { label: "Chambers — Blockchain & Crypto-Assets 2026, UAE", url: "https://practiceguides.chambers.com/practice-guides/blockchain-crypto-assets-2026/uae/trends-and-developments/O26041" },
    { label: "Balaji — Network School node framework (v1-v5)", url: "https://balajis.com/p/network-school-2025" },
  ],
};
