# interneta.world

> The United States of Interneta — a federation of internet city-states. Cloud first, land last. Recruit, not conquer.

The optimistic meta-layer for network states. If America falls, the values don't have to. They just need somewhere new to live.

**Live**: [interneta.world](https://interneta.world) (coming soon)
**Sister project**: [nsnodes.com](https://nsnodes.com) — the operational directory of network states. Interneta is the federation that links them.
**Source thesis**: Balaji Srinivasan's *The Network State*. See `research/thesis.md` for the working synthesis.

## What's here

```
/                     — Manifesto + 4 CTAs (Constitution / Citizens / Globe / Anthem)
/constitution         — v0 Constitution + Bill of Rights of the Citizen
/citizens             — Citizen affirmation + on-chain census (wallet auth: v0.1)
/globe                — Spinning globe: Earth ↔ digital archipelago (v0.1)
/anthem               — Open-submission national anthem
/hub                  — The network-state directory (preserved from nsnodes fork)
```

## Stack

Forked from [nsnodes.com](https://nsnodes.com) — same battle-tested base. Next.js 15 (App Router) · React 19 · TypeScript · Tailwind v4 · shadcn/ui · Supabase · Vercel.

## Run it

```bash
npm install
npm run dev   # → http://localhost:3000
npm run build
npm run lint
```

## Contributing

Everything here is a draft. The Constitution is a draft. The anthem is a draft. The thesis is a draft. Open a PR, fork the repo, propose an amendment.

## Roadmap (loose)

**v0 — manifesto site** (you are here)
- [x] Hero + manifesto homepage
- [x] Constitution v0 + Bill of Rights
- [x] /citizens, /globe, /anthem stubs
- [x] Preserved nsnodes hub at /hub

**v0.1 — wire it up**
- [ ] Wallet-based citizen affirmation (sign-in with Ethereum / Privy)
- [ ] Live citizen / member-state count from Supabase
- [ ] react-globe.gl on /globe with GeoJSON
- [ ] Anthem submissions form

**v1 — federation**
- [ ] 195 nation → network-state mirror pages
- [ ] Member state onboarding (apply to join Interneta)
- [ ] Constitutional amendment process (PR → vote → merge)
- [ ] Treasury (on-chain, transparent)
- [ ] Wire technodemocracy.app as the governance protocol

## License

The Constitution, anthem, and manifesto text: public domain.
The code: MIT.
