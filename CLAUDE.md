# CLAUDE.md

Guidance for Claude Code working in this repository.

## What this is

**interneta.world** — "The United States of Interneta." A federation of internet city-states. The optimistic meta-layer for network states. Forked from [nsnodes.com](https://nsnodes.com) (same maintainer) and re-aimed: nsnodes is the operational *encyclopedia* of network states; Interneta is the *constitutional* / federation layer over them.

The thesis: **Interneta is to network states what USDC is to USD — a transition technology.** It lets nation-state citizens migrate to network-state citizenship without renouncing what they came from.

## Source material

- `research/thesis.md` — the working synthesis (TNS + America's empire arc + Dalio + Balaji + Starbase + the build plan). Start here when context is needed.
- `research/tns.txt` — full text of Balaji's *The Network State* (262 pages).
- `research/constitution.txt` — full text of the US Constitution (19 pages).

When asked about thesis / positioning / "what's interneta," read `research/thesis.md` first.

## Tech stack (inherited from nsnodes)

- Next.js 15.5 (App Router, Turbopack)
- React 19, TypeScript, Tailwind v4
- shadcn/ui (New York style), lucide-react icons
- Supabase for events + societies + (eventually) citizens/treasury
- Geist Sans + Geist Mono fonts

See `app/`, `components/`, `lib/` — the layout follows nsnodes conventions. When in doubt, look at how a nsnodes feature was built and copy the pattern.

## Routing layout

| Route            | Purpose                                                          |
|------------------|------------------------------------------------------------------|
| `/`              | Manifesto homepage. Hero + preamble + 7-step path + CTA strip.   |
| `/constitution`  | v0 Constitution + Bill of Rights. Pure server component.         |
| `/citizens`      | Citizen affirmation + census. Wallet auth coming v0.1.           |
| `/globe`         | Spinning globe (placeholder). react-globe.gl coming v0.1.        |
| `/anthem`        | Anthem submissions + voting. Form wiring v0.1.                   |
| `/hub`           | The OLD nsnodes home — preserved as the network-state directory. |
| `/societies`, `/events`, `/jobs`, `/funding`, `/contact`, etc. | All inherited from nsnodes. Still functional. May be re-skinned to Interneta vocabulary. |

## Brand voice

- **Optimistic.** Not edgy, not doomer. We are the optimists.
- **Civic.** Constitution, citizen, federation, archipelago. Not "users," not "members" — *citizens*.
- **Concrete.** "3 million people in 1789," not "vague vibes about freedom."
- **Reverent of America without being nostalgic.** America was the world's greatest startup. Interneta is the sequel — a successor substrate, not a replacement.

## Visual language

- Brutalist. Heavy borders (`border-2 border-border`), brutal shadows (`shadow-brutal-md`, `shadow-brutal-sm`), monospace (`font-mono`) for hero/UI/headers.
- Section markers: `::: PREAMBLE :::`, `::: ENLIST :::` — uppercase, letter-spaced, muted.
- Article numbering in roman numerals (I–VII).
- Dark mode is default. Light mode supported.

## Conventions to keep

From nsnodes' CLAUDE.md (still apply here):

- **Page metadata**: title format `[Page Name] | interneta.world`. Homepage starts with `interneta.world`. Descriptions 150–160 chars.
- **Memoize lookups** when iterating societies × events/jobs (see `societies-page-client.tsx`).
- **Supabase data is cached 1h** in `lib/actions/societies.ts`. Restart dev server to clear.
- **JSON-LD** structured data on detail pages.
- **shadcn**: add components via `npx shadcn@latest add <name>`.

## What changed from nsnodes

- `package.json` name → `interneta`
- `app/layout.tsx` metadata → Interneta brand, `INTERNETA_ENV` (was `NSNODES_ENV`)
- `components/ascii-nav.tsx` nav items → Constitution / Citizens / Globe / States / Anthem
- `app/page.tsx` → new manifesto homepage. Old dashboard preserved at `/hub`.
- New pages: `/constitution`, `/citizens`, `/globe`, `/anthem`.
- Logo image (`/nsnodes-icon.png`) and `LogoImage` component still reference nsnodes assets — TODO replace with Interneta marks.
- Footer copy still says nsnodes — TODO update.

## Roadmap (terse)

- v0 (now): manifesto site, constitution draft, route stubs.
- v0.1: wallet-auth citizen registry; react-globe.gl; anthem submissions.
- v1: 195 country-mirror pages; member-state onboarding; on-chain treasury; technodemocracy.app wired in as governance protocol.

## When the user asks for

- "the thesis" / "the manifesto" → `research/thesis.md` is the source.
- "the constitution" → `app/constitution/page.tsx`.
- "what nsnodes had" → `app/hub/page.tsx` and `app/societies/`, `app/events/`, etc.
- "rebrand X" → check if it's nsnodes-named, swap to Interneta. Don't change underlying logic.
