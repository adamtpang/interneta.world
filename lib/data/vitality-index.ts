// The Vitality Index: every nation-state on two axes that almost never
// appear on the same chart.
//
//   BIRTHS  = total fertility rate, children per woman (2026 estimates)
//   BUILD   = friendliness to portable tech projects like a network school
//             (SEZ/charter wrappers, nomad visas, crypto regime, English
//             working language, state receptiveness to foreign builders)
//
// THE FINDING: the two axes are strongly anti-correlated. The places most
// able to host the future have stopped producing people. The places
// producing people are least able to host institutions. Almost nowhere is
// good at both, and the handful that are constitute the most interesting
// list in this entire project.
//
// TFR figures are 2026 estimates (UN WPP-derived aggregators; see sources on
// the page). BUILD scores are editorial, 0-100, scored on the same logic as
// the node rubric. Replacement rate is 2.1.

export type Quadrant =
  | "Vital Builders" // high births, high build: the synthesis
  | "Dying Hosts" // low births, high build: rich, capable, shrinking
  | "Young Frontiers" // high births, low build: people without wrappers
  | "Double Bind"; // low births, low build: the hard corner

export type VitalityRow = {
  country: string;
  flag: string;
  region: string;
  tfr: number;
  build: number;
  note: string;
};

export const REPLACEMENT_TFR = 2.1;
export const WORLD_TFR_2026 = 2.23;

export function quadrantOf(r: { tfr: number; build: number }): Quadrant {
  const fertile = r.tfr >= REPLACEMENT_TFR;
  const capable = r.build >= 60;
  if (fertile && capable) return "Vital Builders";
  if (!fertile && capable) return "Dying Hosts";
  if (fertile && !capable) return "Young Frontiers";
  return "Double Bind";
}

export const QUADRANT_META: Record<
  Quadrant,
  { color: string; blurb: string }
> = {
  "Vital Builders": {
    color: "#16a34a",
    blurb:
      "Above replacement AND institutionally capable. The rarest and most valuable quadrant on Earth. If a network state wants a century, it starts here.",
  },
  "Dying Hosts": {
    color: "#06b6d4",
    blurb:
      "World-class wrappers, world-class infrastructure, and a population curve pointing down. They can host you brilliantly. They cannot replace themselves.",
  },
  "Young Frontiers": {
    color: "#eab308",
    blurb:
      "The people are there. The institutions are not. Everything depends on whether wrappers can be built faster than the demographic window closes.",
  },
  "Double Bind": {
    color: "#dc2626",
    blurb:
      "Below replacement and institutionally difficult. The hardest corner: shrinking without the tools to compensate.",
  },
};

// Curated across every region and every band of both axes. TFR ~2026;
// BUILD editorial. Sorted at render time, not here.
export const VITALITY: VitalityRow[] = [
  // ── The high-build, low-birth world ──
  { country: "South Korea", flag: "🇰🇷", region: "East Asia", tfr: 0.75, build: 82, note: "The world's lowest national fertility and one of its best tech states. The starkest single data point in the index." },
  { country: "Hong Kong", flag: "🇭🇰", region: "East Asia", tfr: 0.75, build: 84, note: "Common law, deep capital, near-zero births." },
  { country: "Singapore", flag: "🇸🇬", region: "SE Asia", tfr: 0.97, build: 94, note: "The best-run state on the index and less than half of replacement. Imports people because it must." },
  { country: "Taiwan", flag: "🇹🇼", region: "East Asia", tfr: 0.87, build: 80, note: "Semiconductor spine of the planet; demographic floor beneath it." },
  { country: "Japan", flag: "🇯🇵", region: "East Asia", tfr: 1.2, build: 76, note: "Fifty years ahead of everyone on aging. Watch what it does; that is the future's dress rehearsal." },
  { country: "Italy", flag: "🇮🇹", region: "Europe", tfr: 1.2, build: 62, note: "Southern Europe's demographic inversion, with EU institutions on top." },
  { country: "Spain", flag: "🇪🇸", region: "Europe", tfr: 1.2, build: 72, note: "Nomad visa, Beckham Law, ZEC in the Canaries, and a birth rate near the bottom of Europe." },
  { country: "Poland", flag: "🇵🇱", region: "Europe", tfr: 1.16, build: 68, note: "Europe's best growth story of the last thirty years, with one of its lowest fertility rates." },
  { country: "China", flag: "🇨🇳", region: "East Asia", tfr: 1.0, build: 55, note: "Capacity to build anything, closing demographic window, and a wrapper regime foreign projects cannot rely on." },
  { country: "Thailand", flag: "🇹🇭", region: "SE Asia", tfr: 1.2, build: 66, note: "The first middle-income country to get old before it got rich. LTR and DTV visas are the compensation strategy." },
  { country: "Portugal", flag: "🇵🇹", region: "Europe", tfr: 1.4, build: 78, note: "D8 visa, Madeira IBC, EU access. Europe's most successful talent magnet, and it still cannot make its own." },
  { country: "Estonia", flag: "🇪🇪", region: "Europe", tfr: 1.3, build: 84, note: "e-Residency and the most digital state on Earth, running on 1.3 children per woman." },
  { country: "Canada", flag: "🇨🇦", region: "Americas", tfr: 1.26, build: 76, note: "Record-low fertility, offset entirely by immigration policy. The purest example of the import model." },
  { country: "Germany", flag: "🇩🇪", region: "Europe", tfr: 1.35, build: 70, note: "Europe's industrial core; freelance visa; sub-replacement for fifty straight years." },
  { country: "United Kingdom", flag: "🇬🇧", region: "Europe", tfr: 1.44, build: 74, note: "English common law, the world's most-cited legal system, and a shrinking native cohort." },
  { country: "United States", flag: "🇺🇸", region: "Americas", tfr: 1.6, build: 80, note: "Still the deepest capital and talent market anywhere. Below replacement since 1971 with only brief exceptions." },
  { country: "Australia", flag: "🇦🇺", region: "Oceania", tfr: 1.5, build: 74, note: "Stable, safe, common law, and dependent on migration for every increment of growth." },
  { country: "Chile", flag: "🇨🇱", region: "LatAm", tfr: 1.16, build: 62, note: "Latin America's most institutionally solid state and its fastest fertility collapse." },
  { country: "Brazil", flag: "🇧🇷", region: "LatAm", tfr: 1.6, build: 58, note: "Continental scale, a real nomad visa, and a birth rate that crossed below replacement faster than forecast." },
  { country: "Turkey", flag: "🇹🇷", region: "Middle East", tfr: 1.48, build: 60, note: "Fell below replacement while still a young country on paper. Istanbul remains a genuine crossroads." },
  { country: "Malaysia", flag: "🇲🇾", region: "SE Asia", tfr: 1.6, build: 68, note: "MM2H and DE Rantau, an SEZ tradition, and the Forest City lesson about facility-level law." },
  { country: "UAE", flag: "🇦🇪", region: "Middle East", tfr: 1.2, build: 92, note: "The best wrappers on Earth (ADGM, DIFC, RAK DAO) attached to a citizen base that is not reproducing and a workforce that is 88% foreign." },
  { country: "Georgia", flag: "🇬🇪", region: "Caucasus", tfr: 1.8, build: 64, note: "365-day presence and a 1% tax regime, discounted by the 2026 work-rights split and frozen EU accession." },
  { country: "Uruguay", flag: "🇺🇾", region: "LatAm", tfr: 1.45, build: 62, note: "The quietly well-run corner of South America. Small, stable, shrinking." },

  // ── The genuinely rare quadrant ──
  { country: "Israel", flag: "🇮🇱", region: "Middle East", tfr: 2.83, build: 84, note: "The single most important data point in this index: the only wealthy, high-capability democracy well ABOVE replacement. Startup Nation and a growing population at once. Whatever it is doing, nobody else in the developed world has replicated." },
  { country: "Kazakhstan", flag: "🇰🇿", region: "Central Asia", tfr: 2.9, build: 72, note: "AIFC common law, a signed NS MOU, and a fertility rate a third higher than replacement. The rarest combination on the board, and NS found it first." },
  { country: "Panama", flag: "🇵🇦", region: "LatAm", tfr: 2.1, build: 70, note: "Right at replacement, dollarized, with immigration written into the Law 41 zone statute." },
  { country: "Mongolia", flag: "🇲🇳", region: "Central Asia", tfr: 2.6, build: 52, note: "Young, above replacement, digitally ambitious, institutionally thin. The frontier case worth watching." },
  { country: "Uzbekistan", flag: "🇺🇿", region: "Central Asia", tfr: 3.3, build: 66, note: "IT Park with 0% tax and a dedicated IT visa, on top of one of the youngest populations outside Africa. The most under-priced entry in this index." },
  { country: "Philippines", flag: "🇵🇭", region: "SE Asia", tfr: 2.7, build: 62, note: "English-native, above replacement, PEZA ecozones everywhere, and an ex-US-base campus at Clark." },

  // ── Young frontiers ──
  { country: "Niger", flag: "🇳🇪", region: "Africa", tfr: 6.6, build: 14, note: "The world's highest fertility. Also among its most institutionally constrained. The extreme end of the anti-correlation." },
  { country: "Chad", flag: "🇹🇩", region: "Africa", tfr: 5.84, build: 12, note: "Second-highest fertility on Earth." },
  { country: "Somalia", flag: "🇸🇴", region: "Africa", tfr: 5.81, build: 10, note: "Third-highest fertility; state capacity near the floor of the index." },
  { country: "DR Congo", flag: "🇨🇩", region: "Africa", tfr: 6.1, build: 18, note: "Enormous population growth over enormous mineral wealth, with the weakest wrappers." },
  { country: "Nigeria", flag: "🇳🇬", region: "Africa", tfr: 4.5, build: 44, note: "Africa's largest economy and population, plus Itana, the continent's first digital free zone. The most consequential Young Frontier." },
  { country: "Tanzania", flag: "🇹🇿", region: "Africa", tfr: 4.6, build: 34, note: "Fast growth, improving stability, thin institutional depth for foreign projects." },
  { country: "Ethiopia", flag: "🇪🇹", region: "Africa", tfr: 3.9, build: 30, note: "Africa's second-largest population; industrial parks exist; conflict risk is the binding constraint." },
  { country: "Pakistan", flag: "🇵🇰", region: "South Asia", tfr: 3.5, build: 28, note: "Enormous young cohort; visa and security friction are the walls." },
  { country: "Egypt", flag: "🇪🇬", region: "Middle East", tfr: 2.7, build: 42, note: "Above replacement, with new-capital ambitions and heavy state involvement in everything." },
  { country: "Kenya", flag: "🇰🇪", region: "Africa", tfr: 3.2, build: 50, note: "Silicon Savannah, M-Pesa's homeland, Konza Technopolis. The strongest institutional story among high-fertility African states." },
  { country: "Rwanda", flag: "🇷🇼", region: "Africa", tfr: 3.8, build: 58, note: "Africa's most visa-open country and its best execution culture, above replacement. Close to breaking into the rare quadrant." },
  { country: "Ghana", flag: "🇬🇭", region: "Africa", tfr: 3.4, build: 48, note: "Stable democracy, English-native, Year of Return diaspora pull, real free zones." },
  { country: "Indonesia", flag: "🇮🇩", region: "SE Asia", tfr: 2.1, build: 64, note: "Exactly at replacement, with Nongsa Digital Park and a new capital under construction." },
  { country: "India", flag: "🇮🇳", region: "South Asia", tfr: 1.96, build: 58, note: "Just below replacement, with the largest young workforce on Earth, GIFT City, and hard inbound visas." },
  { country: "Vietnam", flag: "🇻🇳", region: "SE Asia", tfr: 1.9, build: 58, note: "Manufacturing engine, crypto-adopting population, sub-replacement fertility already." },
  { country: "Saudi Arabia", flag: "🇸🇦", region: "Middle East", tfr: 2.3, build: 56, note: "Above replacement with unlimited capital and unpredictable execution." },
  { country: "Honduras", flag: "🇭🇳", region: "LatAm", tfr: 2.3, build: 30, note: "Above replacement; the ZEDE repeal and the $11B arbitration are the wrapper cautionary tale." },
  { country: "El Salvador", flag: "🇸🇻", region: "LatAm", tfr: 1.8, build: 56, note: "Bitcoin-native culture, transformed security, and fertility that has already crossed below replacement." },
  { country: "Sri Lanka", flag: "🇱🇰", region: "South Asia", tfr: 1.9, build: 58, note: "Port City Colombo's own commission and five-day visas; sub-replacement fertility." },
  { country: "Mexico", flag: "🇲🇽", region: "LatAm", tfr: 1.8, build: 58, note: "Enormous nomad inflows, easy residency, fertility already below replacement." },
  { country: "Colombia", flag: "🇨🇴", region: "LatAm", tfr: 1.7, build: 58, note: "Medellín's rise as a nomad hub, against one of Latin America's steeper fertility declines." },
  { country: "South Africa", flag: "🇿🇦", region: "Africa", tfr: 2.2, build: 56, note: "Above replacement, common-law roots, a 2024 nomad visa, and hard safety and reliability constraints." },
  { country: "Switzerland", flag: "🇨🇭", region: "Europe", tfr: 1.29, build: 82, note: "Crypto Valley, direct democracy, and a sub-1.3 birth rate." },
  { country: "New Zealand", flag: "🇳🇿", region: "Oceania", tfr: 1.56, build: 72, note: "The bunker jurisdiction. Stable, remote, shrinking." },
  { country: "Argentina", flag: "🇦🇷", region: "LatAm", tfr: 1.4, build: 60, note: "The steepest fertility collapse in the Americas, alongside the region's densest crypto builder scene." },
];
