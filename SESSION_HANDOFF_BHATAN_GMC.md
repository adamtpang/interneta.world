# Session handoff — Bhatan/Gelephu Mindfulness City on /imagined

Context export from a Claude Code session (2026-07-10) for merging into another session.
Read this top to bottom before touching the related files; everything below is verified
unless marked otherwise.

## What the user asked for

1. Adam said **"bhatan is the new ns node. i will likely go august"** — confirmed via
   AskUserQuestion that *Bhatan = Bhutan's Gelephu Mindfulness City (GMC)*, the SEZ that
   Edge City named a permanent node. **Adam plans to visit ~August 2026.**
2. He chose to add it as a **speculative `/imagined` profile** (not a `/societies` entry),
   but **with founder AND nomads.com-style criteria** — i.e. the six-dimension scoring
   that `/societies` uses (scalability, autonomy, qol, belonging, purpose, economic).

## What was shipped (4 tracked files, all verified working)

### 1. `lib/data/imagined-states.ts`
- `ImaginedState` type extended with six **optional** score fields:
  `scalability?, autonomy?, qol?, belonging?, purpose?, economic?` (0–100, editorial
  projection; comment says "set all six or none").
- New entry appended (last in array, entry #38): slug **`gelephu-mindfulness-city`**.
  - founder: King Jigme Khesar Namgyel Wangchuck (Chairman, GMC board)
  - cofounders: Bjarke Ingels (BIG masterplan), Dasho Dr. Lotay Tshering (Governor,
    ex-PM of Bhutan), Joi Ito (board member; chairman GIDC)
  - stateName: "Gelephu Mindfulness City", themeIcon 🪷, paletteIndex 3
  - oneCommandment: "Happiness is the purpose of capitalism." (paraphrase of PM Tshering
    Tobgay's framing)
  - capital: Gelephu, Bhutan · lat 26.87056 / lng 90.48556
  - scores: scalability 82, autonomy 95, qol 88, belonging 72, purpose 93, economic 80
    → Federation Score 85. Autonomy deliberately highest of any entry — it's a genuinely
    sovereign-chartered SAR.

### 2. `components/society/society-radar.tsx`
- `RadarChart` and `MetricsDisplay` are now **exported** (were module-private).
- `MetricsDisplay` gained a `scoreLabel` prop, default `'Community Score'` — so
  `/societies` renders exactly as before; `/imagined` passes `"Federation Score"`.

### 3. `app/imagined/[slug]/page.tsx`
- Imports `RadarChart, MetricsDisplay` from the society radar.
- Computes `federationScores` array in **RADAR_CATEGORIES order**
  (scalability, autonomy, qol, belonging, purpose, economic) — only when
  `s.scalability != null`, else section hidden.
- New section `::: FEDERATION READOUT :::` between the founder card and
  "The way of life": radar (2 cols) + metrics panel (1 col), with an honesty caption —
  "editorial projection by Interneta — not community-sourced" — because the
  `/societies` radar's wrapper copy claims Telegram-community sourcing, which would be
  dishonest here. That's why the inner components were exported instead of reusing
  `SocietyRadar` wholesale.

### 4. `app/imagined/page.tsx`
- Metadata description count fixed: "Today: 36" → **"Today: 38"** (it was already stale
  at 37 before this session; GMC makes 38). The on-page stat bar computes from
  `IMAGINED_STATES.length` automatically.

## Verification done (don't redo)

- `npx tsc --noEmit` → exit 0.
- Dev server (`npm run dev`, port 3000): `/imagined/gelephu-mindfulness-city` returns
  **200**; SSR HTML verified to contain the readout, all six scores, Federation Score 85,
  6 radar polygons, all cofounders, the disclaimer. `/imagined` list shows the 🪷 card,
  link, and 38/962 stat. No browser console errors.
- Pre-existing warnings, NOT from this work: `app/twitter-image.tsx` re-exported
  `runtime` field warning; duplicate-lockfile/workspace-root warning (there's a
  `package-lock.json` in the parent `Aether\` dir — beware, `npm install` from the wrong
  cwd installs into the parent and reports the wrong exit code through pipes).

## The verified GMC fact sheet (expensive research — reuse, don't re-derive)

From an 11-agent research→adversarial-verify→synthesize workflow, ~526k tokens:

- **Official name:** Gelephu Mindfulness City (GMC); also Gelephu Special Administrative
  Region (GeSAR). Announced 17 Dec 2023 by the King during his 116th National Day address.
- **Location:** Gelephu town, Sarpang District, southern Bhutan, on the Assam (India)
  border. Coordinates 26.87056, 90.48556.
- **Governance:** SAR under GMC Royal Charter No. 1 of 2024 (13 Feb 2024), "two systems,
  one country." Application of Laws Act 2024 (effective 26 Dec 2024) imports ~18
  Singapore statutes + Singapore common law (incl. equity) + ADGM financial rulebooks.
  Zero-tax treatment on dividends/capital gains. GNH (Gross National Happiness) is the
  state philosophy; masterplan maps civic landmarks to the nine GNH domains.
- **Leadership:** King (chairman) · Governor Dasho Dr. Lotay Tshering (appointed
  3 Oct 2024; ex-PM) · Co-CEOs Lee Seow Hiang (ex-Changi Airport Group) & Pang Yee Ean
  (ex-AIIB), appointed 5 Nov 2025 · Bjarke Ingels (masterplan) · Joi Ito (board, GIDC
  chairman). First CEO Liew Mun Leong stepped down 2025 (eye condition).
- **Masterplan (BIG + Arup + Cistri):** ~2,500 km² (~3× Singapore; official site says
  "over 2,600 km²" — figures conflict, treat as ~2,500), 11 neighborhoods on Mandala
  principles structured by 35 rivers; Sankosh Temple-Dam ("21st-century Tiger's Nest");
  mass-timber international airport with Forest Spine, 3,000 m runway.
- **Status mid-2026:** airport broke ground 8 Jul 2025, main construction slated
  Apr 2026, inauguration target Dec 2029; Phase 1 ~2035; first residents early 2030s.
  Population: ~100k initial phase → design capacity ~1M (~2065 horizon; NOT an official
  near-term target). Finance stack live: Matrixport license, DK Bank, TER gold token on
  Solana (11 Dec 2025), Bitcoin Development Pledge up to 10,000 BTC (17 Dec 2025).
  Bhutan–Singapore DTA signed 12 May 2026. SATO Technologies LOI (Jun 2026) for
  hydro-powered sovereign AI compute (~100 MW → ~500 MW). Adani: 5,000 MW hydro MoU,
  570 MW Wangchhu commenced.
- **Deliberately EXCLUDED as unverified/disputed — do not add without new sourcing:**
  the ~$100B total project figure (journalistic estimate, not official); the literal
  count of "inhabited bridges" (BIG's own materials are ambiguous); large Indian
  investment figures are pledges/MoUs, not executed contracts; BTC pledge fulfillment is
  disputed (tracked wallets fell ~13,000 → ~3,100 BTC by May 2026, DHI denies selling).
- Key sources: gmc.bt, gmc.bt/people, Wikipedia (Gelephu Mindfulness City; Gelephu),
  big.dk projects 16791 & 20769, basnetl.com GMC legal analyses.

## Open threads (not done)

1. **Outreach CTA mismatch:** every `/imagined/[slug]` profile ends with the personal
   template "Why I sent you this link… DM @adamtpang… 15-minute conversation" — aimed at
   a reigning monarch it reads odd. Proposed swapping a GMC-specific closing (framed at
   the GMC/GIDC team, or as an open federation invitation). **Adam has not answered yet.**
2. Adam's August trip: no site changes made for it; possible follow-ups (a "visiting in
   person" note on the profile, itinerary research, contact with GMC/Edge City) were not
   requested.
3. `heroImageUrl`/`founderImageUrl` left empty like other entries.

## Environment notes for the next session

- `npm install` had never been run in this checkout; it has now (400 packages).
  `node_modules` + `.claude/launch.json` (dev server config, port 3000) exist locally,
  both untracked/gitignored.
- Run installs/builds via PowerShell in the project dir; the Bash tool's cwd can reset
  to the parent `Aether\` dir where a stray `package-lock.json` lives.
- Nothing committed yet — the 4 modified files above are uncommitted in the working
  tree, alongside pre-existing untracked `AGENTS.md` and `CODEX_CONTINUE_FROM_CLAUDE.md`.
