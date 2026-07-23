// Node search registry. Adding a country is a data change: write a file next
// to this one, import it, add it to the array. No code changes required.
import type { NodeSearch } from "@/lib/data/node-search";
import { KAZAKHSTAN } from "./kazakhstan";
import { UAE } from "./uae";
import { GEORGIA } from "./georgia";
import { EL_SALVADOR } from "./el-salvador";

export const NODE_SEARCHES: NodeSearch[] = [
  KAZAKHSTAN,
  UAE,
  GEORGIA,
  EL_SALVADOR,
];

export function getNodeSearch(slug: string): NodeSearch | undefined {
  return NODE_SEARCHES.find((s) => s.slug === slug);
}
