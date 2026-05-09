// Internet versions of existing nation-states.
//
// The thesis: just as USDC is the internet version of USD, every nation state
// has a network-state mirror that could exist on top of it. Some of these
// mirrors are already in motion (Próspera in Honduras, Bitcoin City in El
// Salvador, e-Stonia). Most aren't. This file scouts each plausible candidate.
//
// For each country we identify:
//   - the proposed mirror name and One Commandment
//   - why this country is fertile ground (existing SEZs, regulations, culture)
//   - candidate founders, often Balaji-circle, sometimes locals
//   - candidate city sites
//   - existing societies/projects on the ground
//
// Speculation. Not endorsements. Forks welcome.

export type WorldMirror = {
  slug: string;
  countryName: string;
  flag: string;
  internetName: string;
  oneCommandment: string;
  whyFertile: string;
  citySites: { name: string; reason: string }[];
  specialEconomicZones: string[];
  founderCandidates: string[];
  existingSocieties: string[];
  paletteIndex: number;
  lat: number;
  lng: number;
};

export const WORLD_MIRRORS: WorldMirror[] = [
  {
    slug: "honduras",
    countryName: "Honduras",
    flag: "🇭🇳",
    internetName: "Próspera Republic",
    oneCommandment: "Common law, charter cities, opt-in jurisdiction.",
    whyFertile:
      "Honduras already passed the ZEDE framework in 2013, allowing private cities with their own legal systems. Próspera is the live test case. The mirror exists because the substrate exists.",
    citySites: [
      { name: "Roatán", reason: "Próspera's existing campus, English-friendly, tropical, low-cost" },
      { name: "La Ceiba", reason: "Mainland gateway, deep-water port, future expansion zone" },
    ],
    specialEconomicZones: ["ZEDE Próspera (Roatán)", "ZEDE Morazán (Choloma)"],
    founderCandidates: ["Erick Brimen (CEO, Próspera)", "Niklas Anzinger (Infinita)", "Patri Friedman (Pronomos VC)"],
    existingSocieties: ["Próspera", "Vitalia", "Infinita"],
    paletteIndex: 3,
    lat: 16.32,
    lng: -86.55,
  },
  {
    slug: "el-salvador",
    countryName: "El Salvador",
    flag: "🇸🇻",
    internetName: "Bitcoin Beach Republic",
    oneCommandment: "Bitcoin is legal tender. Citizens compound in sats.",
    whyFertile:
      "First country to make Bitcoin legal tender (2021). Bukele's bond-issued Bitcoin City project is on the books. El Zonte's Bitcoin Beach has run as a circular economy for years.",
    citySites: [
      { name: "El Zonte", reason: "The original Bitcoin Beach. Surf, sand, sats, low cost" },
      { name: "Bitcoin City (Conchagua)", reason: "Volcano geothermal mining, Bukele's planned smart city" },
    ],
    specialEconomicZones: ["Bitcoin City (planned)", "ZEDE Conchagua"],
    founderCandidates: ["Nayib Bukele (President)", "Mike Peterson (Bitcoin Beach)", "Stacy Herbert (Bitcoin Office)"],
    existingSocieties: ["Bitcoin Beach", "Bitcoin City"],
    paletteIndex: 2,
    lat: 13.49,
    lng: -89.43,
  },
  {
    slug: "uae",
    countryName: "United Arab Emirates",
    flag: "🇦🇪",
    internetName: "Dubai Internet City State",
    oneCommandment: "Builders welcome, taxes low, ambition high.",
    whyFertile:
      "Free zones with 100% foreign ownership, 0% personal income tax, golden visas for builders. Dubai is already the unofficial capital of crypto. RAK DAO is the only jurisdiction in the world with a DAO-specific licensing regime.",
    citySites: [
      { name: "Dubai (DIFC, JLT)", reason: "VARA-regulated crypto hub, family-friendly, English-default" },
      { name: "Ras Al Khaimah", reason: "RAK DAO licenses, cheaper than Dubai, beach access" },
      { name: "Abu Dhabi (ADGM)", reason: "ADGM's English common-law system, FSRA crypto rules" },
    ],
    specialEconomicZones: ["DIFC", "ADGM", "RAK DAO Free Zone", "Dubai Internet City"],
    founderCandidates: ["Sheikh Saud (RAK DAO)", "Mo Gawdat", "Anndy Lian"],
    existingSocieties: ["RAK DAO", "Crypto Valley UAE"],
    paletteIndex: 2,
    lat: 25.2,
    lng: 55.27,
  },
  {
    slug: "estonia",
    countryName: "Estonia",
    flag: "🇪🇪",
    internetName: "e-Stonia",
    oneCommandment: "All government services are an API call.",
    whyFertile:
      "Estonia invented e-Residency in 2014. Government services are 99% online. The ID system, X-Road data exchange, and digital signatures are all open source. The closest existing nation-state to the network-state ideal.",
    citySites: [
      { name: "Tallinn", reason: "Capital, e-Residency HQ, NATO-protected, English-friendly" },
      { name: "Tartu", reason: "University town, lower cost, more researchers per capita than Tallinn" },
    ],
    specialEconomicZones: ["e-Residency program (digital SEZ)", "Estonia Free Zone Sillamäe"],
    founderCandidates: ["Kaspar Korjus (ex-CEO e-Residency)", "Taavet Hinrikus (Wise)", "Markus Villig (Bolt)"],
    existingSocieties: ["e-Estonia", "e-Residency"],
    paletteIndex: 5,
    lat: 59.44,
    lng: 24.75,
  },
  {
    slug: "singapore",
    countryName: "Singapore",
    flag: "🇸🇬",
    internetName: "The Compounders' Republic",
    oneCommandment: "Calm, compounding, infrastructure that just works.",
    whyFertile:
      "Already a city-state. Already English-speaking. Already low-tax, high-trust, time-zone-friendly to both California and London. The legacy nation-state closest to the network-state ideal.",
    citySites: [
      { name: "Singapore (Bukit Timah)", reason: "Quiet residential, library proximity, well connected" },
      { name: "Sentosa", reason: "Resort island, citizen retreats, family-friendly" },
    ],
    specialEconomicZones: ["Tuas FTZ", "Jurong FTZ"],
    founderCandidates: ["Naval Ravikant", "Balaji Srinivasan", "Lawrence Wong (PM)"],
    existingSocieties: ["Network School (adjacent in Forest City, MY)"],
    paletteIndex: 5,
    lat: 1.35,
    lng: 103.82,
  },
  {
    slug: "malaysia",
    countryName: "Malaysia",
    flag: "🇲🇾",
    internetName: "Forest City Republic",
    oneCommandment: "The classroom is a campus, the campus is a country.",
    whyFertile:
      "Forest City is a 30,000-acre planned development in Iskandar Puteri. Network School operates there. MM2H (Malaysia My Second Home) visa is open to foreigners. SEZ status is partially in place.",
    citySites: [
      { name: "Forest City (Iskandar Puteri)", reason: "Network School campus, pre-built infra, low cost" },
      { name: "Penang", reason: "Multicultural, English-friendly, cheaper still" },
    ],
    specialEconomicZones: ["Iskandar Malaysia", "Special Financial Zone Forest City", "Bayan Lepas FZ"],
    founderCandidates: ["Balaji Srinivasan (Network School)", "Pieter Levels"],
    existingSocieties: ["Network School", "ns.com"],
    paletteIndex: 0,
    lat: 1.42,
    lng: 103.63,
  },
  {
    slug: "switzerland",
    countryName: "Switzerland",
    flag: "🇨🇭",
    internetName: "Crypto Valley Confederation",
    oneCommandment: "Direct democracy. Sound money. Discretion.",
    whyFertile:
      "Crypto Valley in Zug is the world's most regulated, most respected crypto cluster. Ethereum Foundation, Cardano, Tezos, Polkadot all have Swiss foundations. Direct democracy via cantonal referendum is already a network-state-ish model.",
    citySites: [
      { name: "Zug", reason: "Crypto Valley HQ, 6,000+ blockchain companies, low corporate tax" },
      { name: "Geneva", reason: "Banking center, UN proximity, French-speaking diversity" },
    ],
    specialEconomicZones: ["Crypto Valley Zug", "Lugano (Plan B BTC city)"],
    founderCandidates: ["Mathias Ruch (CV Labs)", "Vitalik Buterin (Foundation chair)", "Niklas Nikolajsen (Bitcoin Suisse)"],
    existingSocieties: ["Crypto Valley", "Lugano Plan B"],
    paletteIndex: 5,
    lat: 47.17,
    lng: 8.52,
  },
  {
    slug: "liechtenstein",
    countryName: "Liechtenstein",
    flag: "🇱🇮",
    internetName: "Microcrypto State",
    oneCommandment: "Small enough to upgrade overnight.",
    whyFertile:
      "39,000 citizens. The world's first comprehensive Token Act (TVTG, 2020). Already a constitutional monarchy with referendum-led upgrades. Population fits in a single Network School cohort.",
    citySites: [{ name: "Vaduz", reason: "Capital, banking adjacency, picturesque" }],
    specialEconomicZones: ["Liechtenstein Token Container Model"],
    founderCandidates: ["Hereditary Prince Alois", "Mauro Casellini (BitcoinSuisse LI)"],
    existingSocieties: ["Crypto Country LI"],
    paletteIndex: 6,
    lat: 47.14,
    lng: 9.52,
  },
  {
    slug: "portugal",
    countryName: "Portugal",
    flag: "🇵🇹",
    internetName: "Lisbon Republic",
    oneCommandment: "Geographic arbitrage as a national policy.",
    whyFertile:
      "Golden Visa, NHR tax program for new residents (huge for crypto until 2023, still attractive), Schengen access, English-friendly cities. Lisbon is the unofficial capital of remote work in Europe.",
    citySites: [
      { name: "Lisbon (Alcântara, Príncipe Real)", reason: "Tech hub, Web Summit host, walkable" },
      { name: "Madeira", reason: "Digital Nomad Village, beach, low cost" },
      { name: "Porto", reason: "Cheaper, more authentic, great wifi" },
    ],
    specialEconomicZones: ["Madeira IBC (International Business Center)", "Lisbon Tech Hub"],
    founderCandidates: ["Pieter Levels", "Tim Ferriss", "Brian Armstrong"],
    existingSocieties: ["Madeira Digital Nomad Village", "Lisbon Crypto Beach"],
    paletteIndex: 6,
    lat: 38.72,
    lng: -9.14,
  },
  {
    slug: "argentina",
    countryName: "Argentina",
    flag: "🇦🇷",
    internetName: "BitcoinAires",
    oneCommandment: "Hyperinflation is a feature, not a bug.",
    whyFertile:
      "Argentina has lived through every flavor of monetary collapse. Bitcoin and stablecoin adoption is among the highest per capita globally. Milei is openly pro-Bitcoin. Buenos Aires has a vibrant builder scene with Aleph and Crecimiento.",
    citySites: [
      { name: "Buenos Aires (Palermo)", reason: "Crypto capital of LATAM, Aleph host city" },
      { name: "Bariloche", reason: "Patagonian retreat for citizen cohorts" },
    ],
    specialEconomicZones: ["Tierra del Fuego ZF", "La Plata Free Zone"],
    founderCandidates: ["Mauricio Di Bartolomeo (Ledn)", "Wences Casares (Xapo)", "Marcos Galperin (MercadoLibre)"],
    existingSocieties: ["Aleph", "Crecimiento", "Aleph Citadel"],
    paletteIndex: 4,
    lat: -34.6,
    lng: -58.38,
  },
  {
    slug: "japan",
    countryName: "Japan",
    flag: "🇯🇵",
    internetName: "Nippon Net",
    oneCommandment: "Order, craft, attention to the smallest part.",
    whyFertile:
      "Aging population creates appetite for foreign builder visas. Japan was the second country (after El Salvador) to recognize Bitcoin payments. Web3 White Paper from the LDP is forward-leaning. Prefecture-level autonomy allows for SEZ experiments.",
    citySites: [
      { name: "Tokyo (Shibuya)", reason: "Tech and cultural capital, dense" },
      { name: "Fukuoka", reason: "Startup-friendly mayor, Special Zone for Global Startups" },
      { name: "Niigata", reason: "Snow + Web3 program, lower cost than Tokyo" },
    ],
    specialEconomicZones: ["Fukuoka Special Zone for Global Startups", "Tokyo National Strategic SEZ"],
    founderCandidates: ["Yuki Yokota (Niigata Web3)", "Mona Lisa (Foundation)", "Hiroaki Takeuchi (Tokyo)"],
    existingSocieties: ["Niigata Web3", "Fukuoka Startup Zone"],
    paletteIndex: 1,
    lat: 35.68,
    lng: 139.65,
  },
  {
    slug: "south-korea",
    countryName: "South Korea",
    flag: "🇰🇷",
    internetName: "K-Net",
    oneCommandment: "Cultural export as economic policy.",
    whyFertile:
      "K-pop, K-drama, K-content. Korea exports culture better than any country its size. Crypto trading volumes are among the world's largest per capita. Busan declared itself a 'Blockchain Regulation-Free Zone' in 2019.",
    citySites: [
      { name: "Busan", reason: "Blockchain Regulation-Free Zone, deep-water port" },
      { name: "Seoul (Gangnam)", reason: "Crypto capital of Korea, K-content hub" },
    ],
    specialEconomicZones: ["Busan Blockchain Regulation-Free Zone", "Incheon Free Economic Zone"],
    founderCandidates: ["Do Kwon (post-rehab)", "Henry Cha (Korbit)", "Ki Young Ju (CryptoQuant)"],
    existingSocieties: ["Busan Blockchain Zone"],
    paletteIndex: 5,
    lat: 37.57,
    lng: 126.98,
  },
  {
    slug: "uk",
    countryName: "United Kingdom",
    flag: "🇬🇧",
    internetName: "Albion Online",
    oneCommandment: "Common law as protocol.",
    whyFertile:
      "English common law is the world's most-cited legal source. London's financial expertise. Decline of the legacy state creates the moment for a parallel polity. ARIA, Tony Blair Institute, Reform-flavored politics all hint at appetite for radical re-architecture.",
    citySites: [
      { name: "London (Shoreditch)", reason: "Legacy fintech hub, Crypto AM neighborhood" },
      { name: "Cambridge", reason: "Universities, research, ARIA" },
      { name: "Edinburgh", reason: "Cheaper, devolved, weather forces depth" },
    ],
    specialEconomicZones: ["Investment Zones (Tees Valley, Liverpool)", "Freeports (Felixstowe, Southampton)"],
    founderCandidates: ["Dominic Cummings", "Matt Clifford (Entrepreneur First)", "Tony Blair Institute"],
    existingSocieties: ["Entrepreneur First", "ARIA"],
    paletteIndex: 5,
    lat: 51.51,
    lng: -0.13,
  },
  {
    slug: "canada",
    countryName: "Canada",
    flag: "🇨🇦",
    internetName: "Founders Republic",
    oneCommandment: "Every citizen is a founder of something.",
    whyFertile:
      "Shopify built a network of 4 million merchants from Ottawa, async, English-French, Stripe-friendly. Canada has the talent, the schools (Waterloo), and the values for a different kind of America. Tobi Lütke is the obvious anchor.",
    citySites: [
      { name: "Ottawa", reason: "Shopify HQ, government adjacency, low cost" },
      { name: "Waterloo", reason: "University talent pipeline" },
      { name: "Vancouver", reason: "Pacific Rim adjacency, mild climate" },
    ],
    specialEconomicZones: ["Free Trade Zones (CFTZ-PA)", "Digital Charter"],
    founderCandidates: ["Tobi Lütke (Shopify)", "Patrick Collison (Stripe, Canadian-friendly)", "Vitalik Buterin (Toronto raised)"],
    existingSocieties: ["Founders Republic (imagined)", "Shopify Ecosystem"],
    paletteIndex: 4,
    lat: 45.42,
    lng: -75.7,
  },
  {
    slug: "usa",
    countryName: "United States",
    flag: "🇺🇸",
    internetName: "United States of Interneta",
    oneCommandment: "America was the startup. Interneta is the sequel.",
    whyFertile:
      "America is the proof of concept for an opt-in nation-state. Three million people in 1789. 330 million today. The Constitution is open source. Starbase, Texas just incorporated as a city. Próspera, Vitalia, Cabin DAO, Zuzalu's American descendants are already operating.",
    citySites: [
      { name: "Boca Chica, Texas (Starbase)", reason: "Already a SpaceX-incorporated city" },
      { name: "Healdsburg, CA (Edge Esmeralda)", reason: "Vitalik's American popup" },
      { name: "Hill Country, Texas (Cabin)", reason: "Existing residential network" },
      { name: "Wyoming", reason: "DAO LLC framework, friendly to crypto" },
    ],
    specialEconomicZones: ["Wyoming DAO LLC", "Puerto Rico Act 60", "Free-Trade Zones (300+)"],
    founderCandidates: ["Balaji Srinivasan", "Adam Pangelinan", "Marc Andreessen"],
    existingSocieties: ["Cabin DAO", "Edge Esmeralda", "Starbase", "CityDAO", "Praxis"],
    paletteIndex: 0,
    lat: 38.91,
    lng: -77.04,
  },
  {
    slug: "thailand",
    countryName: "Thailand",
    flag: "🇹🇭",
    internetName: "Chiang Mai Republic",
    oneCommandment: "Slow days, fast wifi, low cost.",
    whyFertile:
      "Chiang Mai is the unofficial capital of Western digital nomads in Asia. Long-Term Resident visa (10 years) is now in place. Thailand has actively courted crypto, then partially walked it back, but appetite remains.",
    citySites: [
      { name: "Chiang Mai", reason: "Existing nomad community, low cost, mountain ringed" },
      { name: "Phuket", reason: "Beach, sandbox visa" },
    ],
    specialEconomicZones: ["Eastern Economic Corridor (EEC)", "Phuket Sandbox"],
    founderCandidates: ["Pieter Levels", "Suvit Maesincee (ex-Minister of Higher Ed)"],
    existingSocieties: ["4seas", "Chiang Mai Nomad Community"],
    paletteIndex: 0,
    lat: 18.79,
    lng: 98.98,
  },
  {
    slug: "indonesia",
    countryName: "Indonesia",
    flag: "🇮🇩",
    internetName: "Bali Republic",
    oneCommandment: "Tropical defaults, global ambitions.",
    whyFertile:
      "Bali is already the world's most popular nomad destination. Five-year B211B visa allows long-term remote work. The new IKN capital city (Nusantara) is being built from scratch and is open to network-state-style proposals.",
    citySites: [
      { name: "Canggu, Bali", reason: "Existing nomad capital, beach, surf, coworks" },
      { name: "Ubud, Bali", reason: "Wellness and longevity scene" },
      { name: "Nusantara (new capital)", reason: "Greenfield, government-backed" },
    ],
    specialEconomicZones: ["Nusa Dua KEK", "Mandalika SEZ"],
    founderCandidates: ["Pieter Levels", "Stefano Tresca (Singularity U Bali)"],
    existingSocieties: ["Canggu Nomad Network", "Hubud (Ubud)"],
    paletteIndex: 3,
    lat: -8.34,
    lng: 115.09,
  },
  {
    slug: "vietnam",
    countryName: "Vietnam",
    flag: "🇻🇳",
    internetName: "Saigon Sprint",
    oneCommandment: "Hustle, in tropical sun, with great coffee.",
    whyFertile:
      "Vietnam has one of the highest crypto adoption rates per capita globally. Ho Chi Minh City is gaining ground as a remote-work alternative to Bangkok. Government is opening to Web3 talent visas.",
    citySites: [
      { name: "Ho Chi Minh City", reason: "Energetic, English-improving, cheap" },
      { name: "Da Nang", reason: "Beach, growing nomad community" },
    ],
    specialEconomicZones: ["Phú Quốc SEZ (proposed)", "Van Don SEZ (proposed)"],
    founderCandidates: ["Hung Tran (Coin68)", "local Web3 community leaders"],
    existingSocieties: ["Saigon Crypto Hub"],
    paletteIndex: 6,
    lat: 10.82,
    lng: 106.63,
  },
  {
    slug: "india",
    countryName: "India",
    flag: "🇮🇳",
    internetName: "Bharat Online",
    oneCommandment: "A billion citizens, a billion small republics.",
    whyFertile:
      "India has Aadhaar, UPI, ONDC, the world's most ambitious digital public infrastructure. Crypto regulation is hostile but workforce is huge. The diaspora is the most successful in the world. Bharat Online is a network-state mirror that runs on the Indian DPI stack with citizens worldwide.",
    citySites: [
      { name: "Bangalore", reason: "Tech capital, English-default" },
      { name: "Mumbai", reason: "Finance and Bollywood, two networks in one" },
      { name: "Goa", reason: "Beach + remote work, Russia-flavored crypto exodus" },
    ],
    specialEconomicZones: ["GIFT City (Gujarat)", "SEEPZ Mumbai"],
    founderCandidates: ["Nandan Nilekani (Aadhaar architect)", "Naval Ravikant", "Balaji Srinivasan"],
    existingSocieties: ["GIFT City", "Bangalore Tech Hub"],
    paletteIndex: 6,
    lat: 12.97,
    lng: 77.59,
  },
  {
    slug: "malta",
    countryName: "Malta",
    flag: "🇲🇹",
    internetName: "Blockchain Island",
    oneCommandment: "First to license, first to host.",
    whyFertile:
      "Malta passed the world's first comprehensive blockchain regulatory framework in 2018 (the 'Blockchain Island' acts). EU passport. English-default. Population of 500k.",
    citySites: [
      { name: "Valletta", reason: "Capital, walkable, government access" },
      { name: "Sliema", reason: "Crypto-company-dense neighborhood" },
    ],
    specialEconomicZones: ["Malta Free Zone", "Blockchain Island Framework"],
    founderCandidates: ["Joseph Muscat (former PM)", "Stephen McCarthy (MDIA)"],
    existingSocieties: ["Blockchain Malta"],
    paletteIndex: 4,
    lat: 35.9,
    lng: 14.51,
  },
  {
    slug: "panama",
    countryName: "Panama",
    flag: "🇵🇦",
    internetName: "Crossroads Republic",
    oneCommandment: "The link between hemispheres.",
    whyFertile:
      "USD as the de facto currency. Friendly residency programs. Panama City is increasingly tech-forward. Panama Pacifico SEZ has been operating successfully for years.",
    citySites: [
      { name: "Panama City", reason: "Capital, USD economy, modern infra" },
      { name: "Bocas del Toro", reason: "Tropical retreat, citizen residencies" },
    ],
    specialEconomicZones: ["Panama Pacifico SEZ", "Colón Free Zone"],
    founderCandidates: ["Mark Salame (PMA)", "Felipe Chapman (econ minister)"],
    existingSocieties: ["Panama Pacifico"],
    paletteIndex: 3,
    lat: 8.98,
    lng: -79.52,
  },
  {
    slug: "georgia",
    countryName: "Georgia (Caucasus)",
    flag: "🇬🇪",
    internetName: "Tbilisi Republic",
    oneCommandment: "Open visa, easy banking, mountain views.",
    whyFertile:
      "Georgia offers 365-day visa-free entry to most nationalities. Banking is open to foreigners. Free Industrial Zones offer 0% corporate tax. Crypto-friendly central bank. Affordability and quality of life are exceptional.",
    citySites: [
      { name: "Tbilisi", reason: "Capital, growing tech scene, café culture" },
      { name: "Batumi", reason: "Black Sea coast, FIZ status" },
    ],
    specialEconomicZones: ["Tbilisi FIZ", "Kutaisi FIZ", "Poti FIZ"],
    founderCandidates: ["Ucha Vekua (Georgia Innovation Authority)", "diaspora founders"],
    existingSocieties: ["Tbilisi Crypto Community"],
    paletteIndex: 5,
    lat: 41.71,
    lng: 44.83,
  },
  {
    slug: "kenya",
    countryName: "Kenya",
    flag: "🇰🇪",
    internetName: "Silicon Savannah",
    oneCommandment: "Mobile money was first. Network statehood is next.",
    whyFertile:
      "M-Pesa pioneered mobile money. Kenya has the most active fintech scene in Africa. Worldcoin onboarding strong. Konza Technopolis is a planned smart city.",
    citySites: [
      { name: "Nairobi", reason: "Tech capital of East Africa, English-default" },
      { name: "Konza Technopolis", reason: "Greenfield smart city near Nairobi" },
    ],
    specialEconomicZones: ["Konza Technopolis", "Nairobi International Financial Centre"],
    founderCandidates: ["Bitange Ndemo (ex-PS ICT)", "Eric Hersman (BRCK)", "Ory Okolloh (Ushahidi)"],
    existingSocieties: ["iHub", "Konza Technopolis"],
    paletteIndex: 3,
    lat: -1.29,
    lng: 36.82,
  },
  {
    slug: "nigeria",
    countryName: "Nigeria",
    flag: "🇳🇬",
    internetName: "Itana",
    oneCommandment: "Africa's first digital free zone.",
    whyFertile:
      "Itana is already a chartered digital free zone in Lagos. Nigeria has the largest English-speaking population in Africa, the most active crypto market on the continent, and a young population. The substrate exists.",
    citySites: [
      { name: "Lagos (Itana / Alaro City)", reason: "Existing digital free zone charter" },
      { name: "Abuja", reason: "Capital, government access" },
    ],
    specialEconomicZones: ["Itana", "Alaro City", "Lekki Free Zone"],
    founderCandidates: ["Iyinoluwa Aboyeji (Itana, Future Africa)", "Olugbenga Agboola (Flutterwave)"],
    existingSocieties: ["Itana", "Alaro City"],
    paletteIndex: 1,
    lat: 6.46,
    lng: 3.38,
  },
  {
    slug: "ghana",
    countryName: "Ghana",
    flag: "🇬🇭",
    internetName: "Afropolitan Republic",
    oneCommandment: "Diaspora returns. Diaspora builds.",
    whyFertile:
      "Year of Return (2019) attracted 1M+ diaspora visitors. Stable democracy. English-default. Afropolitan operates here. Crypto adoption is rising via Akoma Atia Foundation.",
    citySites: [
      { name: "Accra", reason: "Afropolitan HQ, growing tech scene" },
      { name: "Kumasi", reason: "Cultural capital, university town" },
    ],
    specialEconomicZones: ["Tema Free Zone", "Sekondi-Takoradi Free Zone"],
    founderCandidates: ["Eche Emole (Afropolitan)", "Yele Bademosi", "Ndubuisi Ekekwe"],
    existingSocieties: ["Afropolitan", "Akoma Atia Foundation"],
    paletteIndex: 1,
    lat: 5.56,
    lng: -0.2,
  },
  {
    slug: "south-africa",
    countryName: "South Africa",
    flag: "🇿🇦",
    internetName: "Cape Republic",
    oneCommandment: "Two oceans, one mountain, many builders.",
    whyFertile:
      "Cape Town is the most established tech hub on the continent. Quality of life is exceptional. Crypto regulations now include FSCA licensing. Wine, weather, world-class universities.",
    citySites: [
      { name: "Cape Town", reason: "Quality of life, tech ecosystem, English-default" },
      { name: "Johannesburg", reason: "Financial hub, denser network" },
    ],
    specialEconomicZones: ["Coega IDZ", "Atlantis SEZ"],
    founderCandidates: ["Vinny Lingham", "Marius Reitz (Luno)", "Carl Wazen (Yoco)"],
    existingSocieties: ["Cape Town Tech Community"],
    paletteIndex: 0,
    lat: -33.92,
    lng: 18.42,
  },
  {
    slug: "australia",
    countryName: "Australia",
    flag: "🇦🇺",
    internetName: "Down Under DAO",
    oneCommandment: "Sun, surf, sound money, eight time zones from California.",
    whyFertile:
      "Stable politics. Strong common law. Active crypto exchanges. Working Holiday visas open to many nationalities. Land is abundant. Asia-Pacific anchor for the Western Hemisphere.",
    citySites: [
      { name: "Sydney", reason: "Financial capital, beaches" },
      { name: "Melbourne", reason: "Culture and crypto-builder dense" },
      { name: "Byron Bay", reason: "Wellness, surf, longevity" },
    ],
    specialEconomicZones: ["Northern Territory Special Zones", "TIA Zones"],
    founderCandidates: ["Jeremy Liew", "Cyan Banister (Australian-born)", "Alan Crabbe (Pozible)"],
    existingSocieties: ["Sydney Tech Hub"],
    paletteIndex: 0,
    lat: -33.87,
    lng: 151.21,
  },
  {
    slug: "new-zealand",
    countryName: "New Zealand",
    flag: "🇳🇿",
    internetName: "Aotearoa Online",
    oneCommandment: "Quietly weird, uniquely far away.",
    whyFertile:
      "Two Pacific islands. Stable democracy. Strong privacy laws. Used as the bunker scenario by multiple Founders Fund LPs. Maori-led models of decentralized governance offer unique inspiration.",
    citySites: [
      { name: "Auckland", reason: "Largest city, international airport" },
      { name: "Queenstown / Wanaka", reason: "Founders Fund LP territory" },
    ],
    specialEconomicZones: ["Auckland Airport SEZ", "Marsden Point"],
    founderCandidates: ["Peter Thiel (NZ citizen)", "Sam Morgan", "Rod Drury (Xero)"],
    existingSocieties: ["NZ Tech Alliance"],
    paletteIndex: 5,
    lat: -36.85,
    lng: 174.76,
  },
  {
    slug: "israel",
    countryName: "Israel",
    flag: "🇮🇱",
    internetName: "Startup Nation Online",
    oneCommandment: "Defense-grade engineering, applied to civilian life.",
    whyFertile:
      "Israel produces more startups per capita than any other country. Defense-tech, biotech, fintech, agritech. The diaspora is global. Tel Aviv is a 24/7 city.",
    citySites: [
      { name: "Tel Aviv", reason: "Tech capital, English-friendly, beach" },
      { name: "Jerusalem", reason: "History, government, hi-tech corridor" },
    ],
    specialEconomicZones: ["Tel Aviv Stock Exchange Tech Zone", "Eilat Free Zone"],
    founderCandidates: ["Dan Senor (Startup Nation)", "Yossi Vardi", "Adam Neumann (Israeli-born)"],
    existingSocieties: ["Tel Aviv Tech Community"],
    paletteIndex: 5,
    lat: 32.08,
    lng: 34.78,
  },
  {
    slug: "turkey",
    countryName: "Turkey",
    flag: "🇹🇷",
    internetName: "Bosphorus Republic",
    oneCommandment: "Bridge of continents. Bridge of currencies.",
    whyFertile:
      "Lira inflation drives crypto adoption. Istanbul is a cultural and geographic crossroads. Citizenship-by-investment available. ZuConnect (2023) showed appetite for popup polities.",
    citySites: [
      { name: "Istanbul (Beyoğlu)", reason: "ZuConnect host, cosmopolitan, walkable" },
      { name: "Antalya", reason: "Mediterranean coast, lower cost" },
    ],
    specialEconomicZones: ["Istanbul Finance Center", "Mersin Free Zone"],
    founderCandidates: ["Vitalik Buterin (ZuConnect alum)", "Emre Tetik (Turkish crypto community)"],
    existingSocieties: ["ZuConnect", "Istanbul Crypto"],
    paletteIndex: 4,
    lat: 41.01,
    lng: 28.98,
  },
  {
    slug: "montenegro",
    countryName: "Montenegro",
    flag: "🇲🇪",
    internetName: "Adriatic Republic",
    oneCommandment: "Where Zuzalu happened, an Archipelago grows.",
    whyFertile:
      "Zuzalu happened here. The government has flirted with a Crypto Valley framework. EU accession track. Coastline, low cost, English-improving.",
    citySites: [
      { name: "Tivat", reason: "Zuzalu host, Porto Montenegro, marina" },
      { name: "Budva", reason: "Beach, nightlife, growing nomad community" },
    ],
    specialEconomicZones: ["Porto Montenegro Free Zone", "Bar Free Zone"],
    founderCandidates: ["Vitalik Buterin (Zuzalu)", "Janine Yorio (Everyrealm Montenegro)"],
    existingSocieties: ["Zuzalu", "Adriatic Crypto Community"],
    paletteIndex: 5,
    lat: 42.43,
    lng: 18.7,
  },
];

export function getMirrorBySlug(slug: string): WorldMirror | undefined {
  return WORLD_MIRRORS.find((m) => m.slug === slug);
}
