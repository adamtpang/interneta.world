// Helpers to derive nomadlist-style stats and tags from the existing society data.
// The radar dimensions (scalability/autonomy/qol/belonging/purpose/economic) are 0-100.
// We compute an overall "Federation Score" from those, and derive playful tags
// from category/type/location/founded so each card has the same shape.

import type { SocietyDatabase } from "@/lib/data/societies-database";

export const RADAR_KEYS = [
  "scalability",
  "autonomy",
  "qol",
  "belonging",
  "purpose",
  "economic",
] as const satisfies readonly (keyof SocietyDatabase)[];

export type RadarKey = (typeof RADAR_KEYS)[number];

export const RADAR_LABELS: Record<RadarKey, string> = {
  scalability: "Scale",
  autonomy: "Autonomy",
  qol: "Quality of Life",
  belonging: "Belonging",
  purpose: "Purpose",
  economic: "Economic",
};

/** Compute a 0-100 "Federation Score" from available radar dimensions. */
export function federationScore(s: SocietyDatabase): number | null {
  const vals = RADAR_KEYS.map((k) => s[k] as number | undefined).filter(
    (v): v is number => typeof v === "number"
  );
  if (vals.length === 0) return null;
  return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
}

/** Score band used to color the score badge: 0..100. */
export function scoreBand(
  score: number | null
): "great" | "good" | "fair" | "unknown" {
  if (score == null) return "unknown";
  if (score >= 80) return "great";
  if (score >= 65) return "good";
  return "fair";
}

// ── Country flag emoji map (representative subset) ───────────────────────────
const COUNTRY_FLAGS: Record<string, string> = {
  Argentina: "🇦🇷", Australia: "🇦🇺", Austria: "🇦🇹", Brazil: "🇧🇷",
  Bulgaria: "🇧🇬", Canada: "🇨🇦", Chile: "🇨🇱", China: "🇨🇳",
  Colombia: "🇨🇴", "Costa Rica": "🇨🇷", Croatia: "🇭🇷", "Czech Republic": "🇨🇿",
  Denmark: "🇩🇰", Dubai: "🇦🇪", Egypt: "🇪🇬", "El Salvador": "🇸🇻",
  Estonia: "🇪🇪", Finland: "🇫🇮", France: "🇫🇷", Germany: "🇩🇪",
  Ghana: "🇬🇭", Greece: "🇬🇷", "Hong Kong": "🇭🇰", Honduras: "🇭🇳",
  Hungary: "🇭🇺", Iceland: "🇮🇸", India: "🇮🇳", Indonesia: "🇮🇩",
  Ireland: "🇮🇪", Israel: "🇮🇱", Italy: "🇮🇹", Japan: "🇯🇵",
  Kenya: "🇰🇪", Liberland: "🏴", Malaysia: "🇲🇾", Mexico: "🇲🇽",
  Montenegro: "🇲🇪", Morocco: "🇲🇦", Netherlands: "🇳🇱", "New Zealand": "🇳🇿",
  Nigeria: "🇳🇬", Norway: "🇳🇴", Panama: "🇵🇦", Peru: "🇵🇪",
  Philippines: "🇵🇭", Poland: "🇵🇱", Portugal: "🇵🇹", Romania: "🇷🇴",
  Russia: "🇷🇺", "Saudi Arabia": "🇸🇦", Senegal: "🇸🇳", Singapore: "🇸🇬",
  Slovakia: "🇸🇰", Slovenia: "🇸🇮", "South Africa": "🇿🇦", "South Korea": "🇰🇷",
  Spain: "🇪🇸", "Sri Lanka": "🇱🇰", Sweden: "🇸🇪", Switzerland: "🇨🇭",
  Taiwan: "🇹🇼", Thailand: "🇹🇭", Turkey: "🇹🇷", UAE: "🇦🇪",
  UK: "🇬🇧", "United Kingdom": "🇬🇧", USA: "🇺🇸", "United States": "🇺🇸",
  Ukraine: "🇺🇦", Uruguay: "🇺🇾", Vietnam: "🇻🇳",
};

/** Try to extract a country flag emoji from a free-form location string. */
export function locationFlag(location?: string): string {
  if (!location) return "🌐";
  const l = location.toLowerCase();
  if (l.includes("global") || l.includes("worldwide") || l.includes("distributed"))
    return "🌐";
  if (l.includes("online") || l.includes("digital")) return "💾";
  for (const [country, flag] of Object.entries(COUNTRY_FLAGS)) {
    if (l.includes(country.toLowerCase())) return flag;
  }
  return "📍";
}

// ── Continent / region detection ─────────────────────────────────────────────
const REGIONS: Record<string, string[]> = {
  "🌎 Americas": ["argentina","brazil","chile","colombia","costa rica","ecuador","el salvador","honduras","mexico","panama","peru","usa","united states","canada","new york","san francisco","texas","california","wyoming","tegucigalpa","roatan","roatán"],
  "🌍 Europe": ["uk","united kingdom","france","germany","spain","italy","netherlands","belgium","austria","czech","poland","sweden","norway","denmark","finland","portugal","greece","ireland","romania","hungary","montenegro","switzerland","bulgaria","croatia","slovenia","estonia","ukraine","russia","istanbul","tivat","sofia"],
  "🌍 Africa": ["africa","ghana","nigeria","kenya","south africa","egypt","morocco","ethiopia","senegal","accra","lagos","nairobi"],
  "🌏 Asia": ["asia","japan","china","singapore","malaysia","thailand","vietnam","indonesia","philippines","india","pakistan","bangladesh","sri lanka","taiwan","hong kong","south korea","tokyo","seoul","beijing","shanghai","forest city","penang","chiang mai","bali"],
  "🌏 Oceania": ["australia","new zealand","sydney","melbourne","auckland","fiji"],
  "🕌 Middle East": ["uae","dubai","saudi arabia","qatar","israel","jordan","lebanon","turkey","iran","iraq","tel aviv","jerusalem","riyadh"],
};

export function regionOf(location?: string): string {
  if (!location) return "🌐 Global";
  const l = location.toLowerCase();
  if (l.includes("global") || l.includes("worldwide") || l.includes("distributed"))
    return "🌐 Global";
  if (l.includes("online") || l.includes("digital")) return "💾 Online";
  for (const [region, keywords] of Object.entries(REGIONS)) {
    if (keywords.some((k) => l.includes(k))) return region;
  }
  return "🌐 Global";
}

// ── Tag derivation (nomadlist-style) ─────────────────────────────────────────
export function deriveTags(s: SocietyDatabase): string[] {
  const tags: string[] = [];
  const type = (s.type || "").toLowerCase();
  const cat = (s.category || "").toLowerCase();
  const loc = (s.location || "").toLowerCase();
  const founded = parseInt(s.founded || "0", 10);
  const year = new Date().getFullYear();

  // Format
  if (cat.includes("popup") || type.includes("popup")) tags.push("🌆 Popup");
  if (cat.includes("dao") || type.includes("dao")) tags.push("🟪 DAO");
  if (type.includes("online") || type.includes("digital") || cat.includes("decentralized"))
    tags.push("💾 Online");
  if (type.includes("physical") || cat.includes("city") || cat.includes("freedom"))
    tags.push("🏛️ IRL");
  if (cat.includes("software")) tags.push("💻 Software");
  if (cat.includes("startup")) tags.push("🚀 Startup");

  // Era
  if (founded && year - founded <= 2) tags.push("🆕 New");
  else if (founded && year - founded >= 5) tags.push("🏛️ Established");

  // Climate / vibe heuristics
  if (
    loc.includes("thailand") || loc.includes("malaysia") || loc.includes("bali") ||
    loc.includes("honduras") || loc.includes("costa rica") || loc.includes("singapore") ||
    loc.includes("brazil") || loc.includes("vietnam") || loc.includes("philippines") ||
    loc.includes("ghana") || loc.includes("nigeria") || loc.includes("el salvador") ||
    loc.includes("roatan") || loc.includes("roatán")
  ) tags.push("🌴 Tropical");
  if (
    loc.includes("nordic") || loc.includes("sweden") || loc.includes("norway") ||
    loc.includes("finland") || loc.includes("denmark") || loc.includes("iceland") ||
    loc.includes("estonia")
  ) tags.push("❄️ Nordic");
  if (
    loc.includes("bitcoin") || (cat.includes("freedom") && loc.includes("argentina")) ||
    loc.includes("el salvador")
  ) tags.push("₿ Bitcoin");

  // Mission heuristics
  const m = (s.mission || "").toLowerCase();
  if (m.includes("crypto") || m.includes("bitcoin") || m.includes("eth"))
    tags.push("🔗 Crypto-native");
  if (m.includes("kid") || m.includes("famil") || m.includes("school"))
    tags.push("👨‍👩‍👧 Family");
  if (m.includes("longevity") || m.includes("biohack") || m.includes("health"))
    tags.push("🧬 Bio");
  if (m.includes("regenerat") || m.includes("nature") || m.includes("forest"))
    tags.push("🌱 Regen");
  if (m.includes("ai") || m.includes("artificial intelligence"))
    tags.push("🤖 AI");

  // Tier badge
  if (s.tier === 1) tags.push("⭐ Tier 1");

  // Dedup, cap to 5 most informative
  return Array.from(new Set(tags)).slice(0, 5);
}

/** Return all unique tags across a society set, useful for filter chips. */
export function allTags(societies: SocietyDatabase[]): string[] {
  const set = new Set<string>();
  societies.forEach((s) => deriveTags(s).forEach((t) => set.add(t)));
  return Array.from(set).sort();
}

/** Return all unique regions across a society set. */
export function allRegions(societies: SocietyDatabase[]): string[] {
  const set = new Set<string>();
  societies.forEach((s) => set.add(regionOf(s.location)));
  return Array.from(set).sort();
}

/** Initial letter for fallback hero gradient. */
export function initialOf(s: SocietyDatabase): string {
  return (s.name || "?").trim().charAt(0).toUpperCase();
}

/** Pick a federation-palette color deterministically from the name. */
export function paletteAccent(s: SocietyDatabase): string {
  const colors = [
    "var(--iw-cyan)",
    "var(--iw-magenta)",
    "var(--iw-gold)",
    "var(--iw-green)",
    "var(--iw-red)",
    "var(--iw-indigo)",
    "var(--iw-orange)",
  ];
  let h = 0;
  for (const c of s.name) h = (h * 31 + c.charCodeAt(0)) % colors.length;
  return colors[h];
}
