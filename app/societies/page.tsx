import { getSocieties } from "@/lib/actions/societies";
import { SocietiesNomadView } from "@/components/societies-nomad-view";
import { generatePageMetadata } from "@/lib/utils/metadata";

export const metadata = generatePageMetadata(
  "Societies · Find your internet city-state",
  "Every startup society, popup village, and network state we track. Scored on six dimensions. Filter by region, vibe, and Federation Score."
);

export default async function SocietiesPage() {
  const societies = await getSocieties();
  return <SocietiesNomadView societies={societies} />;
}
