// Why civilizations collapse: the major frameworks, summarized and
// attributed. These are descriptions of each thinker's thesis in our own
// words, written to be read against the Vitality Index and the network-state
// question. Read the originals; they are all better than the summary.

export type CollapseTheory = {
  thinker: string;
  work: string;
  year: string;
  mechanism: string;
  thesis: string;
  tell: string; // the observable warning sign it predicts
  forUs: string; // what it implies for network states
  paletteIndex: number;
};

export const COLLAPSE_THEORIES: CollapseTheory[] = [
  {
    thinker: "Ray Dalio",
    work: "Principles for Dealing with the Changing World Order",
    year: "2021",
    mechanism: "The Big Cycle",
    thesis:
      "Empires rise and fall on a repeating ~250-year arc measured across eight strengths: education, innovation, competitiveness, output, share of world trade, military, financial-centre status, and reserve-currency status. They rise when those climb together, peak as the reserve-currency issuer, and decline as debt accumulates, wealth gaps widen, internal conflict intensifies, and a rival ascends. Reserve-currency status is the last thing to go, which is why decline feels survivable until suddenly it is not.",
    tell: "Debt rising faster than income, widening wealth and values gaps, populist leaders on both wings, and a rising rival power. Dalio's own reading is that the United States is late in this cycle.",
    forUs:
      "The eight measures are portable. A network state that publishes its own scorecard on those axes is speaking the same language as the states it wants recognition from.",
    paletteIndex: 5,
  },
  {
    thinker: "Joseph Tainter",
    work: "The Collapse of Complex Societies",
    year: "1988",
    mechanism: "Declining marginal returns on complexity",
    thesis:
      "Societies solve problems by adding complexity: more bureaucracy, more specialists, more infrastructure. Each layer costs energy and produces less benefit than the last. Eventually the cost of maintaining complexity exceeds what it returns, and collapse is the rational, sometimes voluntary, simplification back to a sustainable level. Collapse in this reading is not a catastrophe imposed from outside; it is a society declining to keep paying for its own overhead.",
    tell: "More rules, more agencies, more cost per unit of problem solved, and elites who feel the system is working while everyone else pays for it.",
    forUs:
      "The strongest argument for small polities that exist. A network state is complexity reset: start at the sustainable layer, add only what pays for itself, and let the right to exit discipline the overhead.",
    paletteIndex: 6,
  },
  {
    thinker: "Peter Turchin",
    work: "Secular Cycles; End Times",
    year: "2009, 2023",
    mechanism: "Elite overproduction and popular immiseration",
    thesis:
      "Instability is driven by two measurable pressures. First, more elite aspirants are produced than there are elite positions, so credentialed, ambitious people turn on the system that will not seat them. Second, real wages stagnate relative to elite incomes, immiserating the base. When both curves peak together, the state loses legitimacy and conflict follows on a roughly two-generation rhythm.",
    tell: "Credential inflation, a glut of qualified people fighting over fixed slots, stagnant median wages, and rising political violence.",
    forUs:
      "Network states are a pressure valve for exactly this. Elite overproduction resolves either through conflict over existing seats or through the creation of new seats. Founding new polities is the second path.",
    paletteIndex: 4,
  },
  {
    thinker: "Ibn Khaldun",
    work: "Muqaddimah",
    year: "1377",
    mechanism: "Asabiyyah decay",
    thesis:
      "The oldest and possibly best theory. Groups rise on asabiyyah, a fierce internal solidarity forged by hardship and shared struggle. That cohesion wins them power. Power brings comfort, comfort dissolves the cohesion that produced it, and by roughly the fourth generation the descendants inherit the institutions without the bond that built them. A hungrier, more cohesive group then replaces them, and the cycle restarts.",
    tell: "Founders replaced by administrators, shared sacrifice replaced by private consumption, and a ruling class that no longer believes its own story.",
    forUs:
      "The central design problem for any new polity. A network state is pure asabiyyah at founding, chosen rather than inherited. The open question is whether opt-in cohesion decays on the same four-generation clock, or whether the right to exit and the need to re-recruit every member keeps it renewed.",
    paletteIndex: 2,
  },
  {
    thinker: "Jared Diamond",
    work: "Collapse",
    year: "2005",
    mechanism: "Five-point failure framework",
    thesis:
      "Societies fail through some combination of environmental damage, climate change, hostile neighbours, loss of friendly trading partners, and, decisively, their own response to those pressures. The fifth factor is the one that matters: the same shocks hit societies that survive and societies that do not. What separates them is whether they can perceive the problem and change course, which is hardest when the practice destroying them is the one their identity is built on.",
    tell: "A society whose core identity is fused to a practice that has stopped working, and which treats questioning it as betrayal.",
    forUs:
      "A network state's One Commandment is a strength and a risk. Fusing identity to a single moral claim is what creates cohesion; it is also exactly the condition Diamond warns makes course-correction impossible.",
    paletteIndex: 3,
  },
  {
    thinker: "Arnold Toynbee",
    work: "A Study of History",
    year: "1934-1961",
    mechanism: "Challenge and response; the creative minority",
    thesis:
      "Civilizations grow when a creative minority answers successive challenges well enough that the majority follows them voluntarily. They break down when that creative minority becomes a dominant minority: no longer solving new problems, holding position through control rather than merit, and imitated out of obligation instead of admiration. Breakdown is a failure of creativity before it is a failure of arms.",
    tell: "Leadership that rules rather than persuades; a mimicry of past successes instead of answers to present challenges.",
    forUs:
      "Balaji's recognized-founder criterion is Toynbee's creative minority, made explicit. Legitimacy comes from people choosing to follow. A founder who has to enforce rather than attract has already crossed the line Toynbee describes.",
    paletteIndex: 1,
  },
  {
    thinker: "Strauss and Howe",
    work: "The Fourth Turning",
    year: "1997",
    mechanism: "Generational cycles",
    thesis:
      "History moves in roughly 80-to-100-year cycles of four generational turnings, ending in a Crisis era in which the old civic order is torn down and replaced. The theory is contested as prediction and useful as a lens: institutions are rebuilt by the generation that experienced the last rebuilding as children, on a rhythm set by human lifespan rather than by policy.",
    tell: "Institutional distrust, a sense that the postwar settlement no longer describes reality, and appetite for wholesale reconstruction.",
    forUs:
      "If the framing holds, this is a period when new institutional forms are unusually likely to stick. Balaji leans on this explicitly.",
    paletteIndex: 0,
  },
  {
    thinker: "Darrell Bricker and John Ibbitson",
    work: "Empty Planet",
    year: "2019",
    mechanism: "Demographic inversion",
    thesis:
      "The dominant twenty-first-century risk is not overpopulation but depopulation. Urbanization and female education drive fertility down everywhere they arrive, and the decline is faster and stickier than official projections assume. No society has yet reversed a sustained fall below replacement. The result is an inverted pyramid: fewer workers supporting more retirees, in economies whose every institution assumed growth.",
    tell: "Sub-replacement fertility that keeps falling after pro-natal policy, and growth that depends entirely on immigration.",
    forUs:
      "This is the mechanism the Vitality Index measures. It also makes the strongest possible case for the network-state model: when the pyramid inverts, the states that survive will be the ones that can attract aligned people, and attraction is the only recruitment method a network state has.",
    paletteIndex: 5,
  },
];

// The synthesis: what the frameworks agree on.
export const COLLAPSE_CONVERGENCE: string[] = [
  "Collapse is almost never a single event. It is a slow loss of the ability to solve new problems, followed by a fast loss of legitimacy once people notice.",
  "Every framework points at cohesion. Ibn Khaldun names it directly, Turchin measures its breakdown as elite conflict, Toynbee describes its inversion into coercion, and Tainter shows what it costs to maintain without it.",
  "External shocks are rarely decisive. Diamond's fifth factor is the response, and societies facing identical shocks diverge entirely on whether they can change the practice their identity depends on.",
  "Demography is the slowest and most reliable variable. It is the one input that cannot be reversed inside a single political cycle, which is why it is the one most consistently ignored.",
  "Complexity is a cost, not an achievement. Tainter's argument is that mature states keep buying complexity long past the point it pays, because the people who benefit from each layer are the ones who decide.",
];

// The honest counter-case. A page arguing that old things fall apart should
// state the case against its own conclusion.
export const COLLAPSE_OBJECTIONS: { claim: string; answer: string }[] = [
  {
    claim: "Decline has been predicted continuously for a century and has not arrived.",
    answer:
      "True, and the base rate for collapse predictions is terrible. Dalio's own framing is probabilistic, not prophetic. The honest position: these frameworks describe pressures, not schedules, and a pressure can persist for generations without resolving.",
  },
  {
    claim: "Technology breaks the cycle. Growth is not fixed the way it was for agrarian empires.",
    answer:
      "The strongest objection. Turchin's and Ibn Khaldun's models come from Malthusian societies; AI and energy abundance could genuinely change the arithmetic. But note that the productivity gains are landing in exactly the countries whose populations are shrinking fastest.",
  },
  {
    claim: "Small new polities are more fragile than big old ones, not less.",
    answer:
      "Also true. Most new societies fail, quickly and unremarkably. The network-state bet is not that a given one survives; it is that a thousand attempts with a low cost of failure and a right to exit produce better institutions than one attempt that cannot be abandoned.",
  },
  {
    claim: "Fertility is a values problem, and no institution has solved it.",
    answer:
      "Correct, and it is the hardest fact in this entire index. Pro-natal spending has not reversed a sustained decline anywhere. The only high-income exception is Israel, and the reasons are cultural and religious rather than policy-driven, which makes them very difficult to copy.",
  },
];
