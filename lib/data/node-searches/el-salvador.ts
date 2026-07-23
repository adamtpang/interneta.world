import type { NodeSearch } from "@/lib/data/node-search";

// El Salvador is the culture-fit case: the only country whose national story
// is already a Bitcoin story, with a security turnaround that transformed
// livability, and a president who has personally courted the crypto world.
// The honest complications: under the December 2024 IMF agreement the
// Bitcoin Law was amended (Jan 2025) so private acceptance is voluntary and
// BTC is no longer usable for taxes; Bitcoin City remains unbuilt; and there
// is no written Network School commitment, so every site caps at 49.
export const EL_SALVADOR: NodeSearch = {
  slug: "el-salvador",
  country: "El Salvador",
  flag: "🇸🇻",
  dateline: "WATCH LIST",
  status: "watch",
  headline: "What El Salvador would score",
  subhead: "if goodwill became a signature.",
  situation: [
    "El Salvador is not a live Network School search. There is no announced MOU and no named sponsor. It is on the watch list because it is the closest thing on earth to a culture-fit lock: the state has held Bitcoin on its balance sheet since 2021 and kept buying (holdings approached 7,680 BTC by mid-2026), El Zonte's Bitcoin Beach is the original circular crypto economy, and the Freedom Visa offers a citizenship-track residency for a $1M BTC or USDT contribution, capped at 1,000 per year.",
    "The complications are equally real. Under the December 2024 IMF agreement for $1.4B, the legislature amended the Bitcoin Law in January 2025: private-sector acceptance is now voluntary and taxes can no longer be paid in BTC. Bitcoin City at Conchagua, announced in 2021 with volcano bonds, remains unbuilt with no confirmed 2026 status. And presidential goodwill toward crypto, however genuine, is not a written commitment to NS. Goodwill can reverse; the rubric prices that.",
  ],
  structuralLesson:
    "El Salvador inverts the Kazakhstan picture. Kazakhstan has the signature and needs the culture to form. El Salvador has the culture fully formed, at street level, in Spanish and in sats, and lacks the signature. The rubric says the signature is the scarcer asset, which is why a country that feels this aligned still caps at 49.",
  countryGates: [
    {
      key: "govt",
      label: "Government partnership",
      met: false,
      claim:
        "No MOU, no named sponsor, no written commitment to Network School identified. The government's crypto orientation is well documented and its Bitcoin Office is a real institution, but institutional friendliness to Bitcoin is not a commitment to a specific campus. Every site below is capped at 49 until something is signed.",
    },
    {
      key: "immigration",
      label: "Immigration path",
      met: true,
      claim:
        "Multiple live routes: standard residency programs, a digital-nomad pathway, and the Freedom Visa, which offers citizenship-track residency for a $1M contribution in BTC or USDT, capped at 1,000 per year. Expensive at the top end, but the pathways exist and the state processes them with intent.",
      source: { label: "Private.law, El Salvador Bitcoin and Freedom Visa", url: "https://wiki.private.law/en/el-salvador-bitcoin" },
    },
  ],
  sites: [
    {
      slug: "el-zonte",
      city: "El Zonte (Bitcoin Beach)",
      flag: "🇸🇻",
      region: "La Libertad / Pacific coast",
      level: "Community, no site-specific wrapper",
      lane: "The original Bitcoin circular economy",
      note: "The beach town where the Bitcoin Beach project bootstrapped a real circular sats economy years before the national law. Surf, warmth, and a community that already lives the way a Bitcoin-aligned node would want to live. The institutional layer is thin: ordinary municipal law, small-town infrastructure, and capacity that would need building rather than leasing.",
      gates: { govt: false, immigration: true, siteWrapper: false },
      wrapperClaim:
        "No special regime. Ordinary Salvadoran law; the town's distinction is cultural, not legal.",
      scores: { govt: 3, immigration: 3, regulatory: 4, cost: 4, connectivity: 3, livability: 4, talent: 2, neutrality: 3, specialty: 5 },
      evidence: {
        govt: { note: "High national goodwill toward Bitcoin projects, nothing written for NS. Scored on receptiveness only." },
        immigration: { note: "National routes apply; the Freedom Visa's $1M tier is real but priced for founders, not members.", source: { label: "Private.law, Freedom Visa", url: "https://wiki.private.law/en/el-salvador-bitcoin" } },
        regulatory: { note: "Bitcoin retains official recognition though acceptance is voluntary since the January 2025 amendment; the Digital Assets framework and Bitcoin Office remain active.", source: { label: "Decrypt, Bitcoin Law amendment for IMF terms", url: "https://decrypt.co/303626/el-salvador-bitcoin-law-amendment-imf-loan" } },
        cost: { note: "Coastal land and living costs remain low by hemisphere standards. Editorial estimate." },
        connectivity: { note: "About an hour from San Salvador's international airport; local infrastructure is small-town. Editorial estimate." },
        livability: { note: "Surf-town warmth plus the national security turnaround; the homicide collapse transformed daily-life risk, with real human-rights criticism of how it was achieved. Editorial estimate." },
        talent: { note: "Small local technical base; the scene imports talent seasonally. Editorial estimate." },
        neutrality: { note: "No great-power flashpoint; reputational polarization around the security model is the main exposure. Editorial estimate." },
        specialty: { note: "The one place on earth where a Bitcoin-native node would be joining a lived culture rather than importing one. No other candidate owns this lane." },
      },
    },
    {
      slug: "san-salvador",
      city: "San Salvador",
      flag: "🇸🇻",
      region: "Capital",
      level: "State / city, no site-specific wrapper",
      lane: "The capital with the Bitcoin Office down the street",
      note: "The capital: the airport, the ministries, the Bitcoin Office, the universities, and the country's deepest talent pool. The pragmatic choice if the goal is proximity to the institutions that would sign and service an MOU. Ordinary law, no special regime, and city livability rather than beach livability.",
      gates: { govt: false, immigration: true, siteWrapper: false },
      wrapperClaim:
        "No special regime. Ordinary Salvadoran law in the capital.",
      scores: { govt: 3, immigration: 3, regulatory: 4, cost: 4, connectivity: 4, livability: 3, talent: 3, neutrality: 3, specialty: 2 },
      evidence: {
        govt: { note: "Closest seat to the institutions that could sign; still nothing written. Scored on receptiveness only." },
        immigration: { note: "Same national routes. Editorial estimate." },
        regulatory: { note: "Same national framework as El Zonte.", source: { label: "Decrypt, Bitcoin Law amendment", url: "https://decrypt.co/303626/el-salvador-bitcoin-law-amendment-imf-loan" } },
        cost: { note: "Affordable capital by regional standards. Editorial estimate." },
        connectivity: { note: "The international airport and the country's route network. Editorial estimate." },
        livability: { note: "Transformed security picture; tropical city living. Editorial estimate." },
        talent: { note: "The country's main university and engineering pool, small in absolute terms. Editorial estimate." },
        neutrality: { note: "Same national profile. Editorial estimate." },
        specialty: { note: "Proximity to power, but no distinct lane of its own. Editorial judgement." },
      },
    },
    {
      slug: "bitcoin-city",
      city: "Bitcoin City (Conchagua)",
      flag: "🇸🇻",
      region: "La Unión / southeast",
      level: "Greenfield, announced regime, unbuilt",
      lane: "The announced-but-unbuilt volcano city",
      note: "The 2021 announcement: a purpose-built city at the Conchagua volcano, funded by volcano bonds, powered by geothermal, with radical tax promises. As of 2026 it remains unbuilt, the bonds repeatedly delayed, and no confirmed construction status. It stays on the sheet because if it were ever executed it would be the most NS-shaped canvas in the hemisphere, and because the nearby Pacific airport project would change the connectivity math.",
      gates: { govt: false, immigration: true, siteWrapper: false },
      wrapperClaim:
        "Announced special regime, not enacted into an operating zone. Scored as ordinary law until something is built or codified.",
      scores: { govt: 3, immigration: 3, regulatory: 4, cost: 5, connectivity: 2, livability: 2, talent: 1, neutrality: 3, specialty: 5 },
      evidence: {
        govt: { note: "A presidential flagship on paper, which cuts both ways: maximal announced ambition, minimal delivered substance. Editorial estimate." },
        immigration: { note: "Same national routes. Editorial estimate." },
        regulatory: { note: "The announced regime would be generous; none of it is operative. Scored on the national framework.", source: { label: "KuCoin, where El Salvador stands in 2026", url: "https://www.kucoin.com/blog/en-the-world-s-first-bitcoin-nation-where-does-el-salvador-stand-in-2026" } },
        cost: { note: "Greenfield land at the cheapest end of the set. Editorial estimate." },
        connectivity: { note: "Remote today; contingent on the airport project. Editorial estimate." },
        livability: { note: "Nothing there yet. Editorial estimate." },
        talent: { note: "None resident; everything would be imported. Editorial estimate." },
        neutrality: { note: "Same national profile. Editorial estimate." },
        specialty: { note: "If ever built, a from-scratch Bitcoin city is a lane nothing else touches. The 'if' is the entire score. Editorial judgement." },
      },
    },
  ],
  facilitiesLabel: "FACILITY LEVEL ::: NOTES",
  facilitiesIntro:
    "Not researched to facility level, because the country gate fails. Two structural notes worth recording now.",
  facilities: [
    {
      name: "El Zonte capacity reality",
      kind: "Small-town coastal build",
      why: "The culture is here, but a 1,024-person campus is not: El Zonte is a small town, and NS-scale capacity means building, not leasing.",
      watch: "Model beds and units honestly against the NS form's capacity questions before any commitment; a node that has to construct its own housing inherits construction risk in a jurisdiction with thin large-project depth.",
    },
    {
      name: "Bitcoin City execution risk",
      kind: "Announced greenfield",
      why: "The most NS-shaped canvas in the hemisphere on paper.",
      watch: "Treat announcements as zero until legislation is operative and ground is broken. The volcano bonds have been delayed since 2022; the rubric's rule about goodwill versus codified law applies doubly here.",
    },
  ],
  read: [
    "El Salvador is the culture-fit outlier: the only candidate where the node would join an existing Bitcoin-native way of life rather than trying to grow one. El Zonte's raw score leads the unsigned Latin American set on exactly that basis, and the security turnaround removed the objection that used to end the conversation.",
    "The resource-allocation read: this is the cheapest possible signature to test. The state already runs a Bitcoin Office, already courts crypto builders, and already sells residency for BTC. One conversation establishes whether presidential goodwill extends to a written campus commitment. If yes, El Zonte plus a capital liaison office becomes a serious flagship candidate; if no, the watch-list placement is correct and nothing was spent finding out.",
  ],
  references: [
    { label: "Decrypt, El Salvador amends Bitcoin Law to comply with IMF terms", url: "https://decrypt.co/303626/el-salvador-bitcoin-law-amendment-imf-loan" },
    { label: "Digital Watch, Bitcoin no longer full legal tender", url: "https://dig.watch/updates/bitcoin-is-no-longer-legal-tender-in-el-salvador" },
    { label: "FinanceFeeds, El Salvador's BTC treasury near 7,680 BTC", url: "https://financefeeds.com/el-salvador-bitcoin-holdings/" },
    { label: "Private.law, the Freedom Visa ($1M BTC/USDT, 1,000/yr cap)", url: "https://wiki.private.law/en/el-salvador-bitcoin" },
    { label: "KuCoin, where El Salvador stands in 2026", url: "https://www.kucoin.com/blog/en-the-world-s-first-bitcoin-nation-where-does-el-salvador-stand-in-2026" },
  ],
};
