"use client";

import { useState } from "react";
import {
  InternetaGlobe,
  type GlobeMarker,
  type GlobeView,
} from "@/components/interneta-globe";

type Props = {
  earthMarkers: GlobeMarker[];
  archipelagoMarkers: GlobeMarker[];
  capitalCount: number;
  networkStateCount: number;
  networkStates: { name: string; location: string; url?: string }[];
};

export function InternetaGlobeClient({
  earthMarkers,
  archipelagoMarkers,
  capitalCount,
  networkStateCount,
  networkStates,
}: Props) {
  const [view, setView] = useState<GlobeView>("earth");
  const markers = view === "earth" ? earthMarkers : archipelagoMarkers;

  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
          ::: PHYSICAL ↔ DIGITAL :::
        </div>
        <h1 className="font-mono font-bold text-4xl sm:text-6xl leading-tight tracking-tight mb-8">
          The Earth, and<br />her internet twin.
        </h1>
        <p className="font-mono text-base sm:text-lg text-foreground/80 leading-relaxed mb-12 max-w-2xl">
          Spin between two views of the same planet. Earth shows the
          {" "}{capitalCount}{" "} nation-state capitals of the legacy world. The Archipelago shows
          {" "}{networkStateCount}{" "} known network states, popup villages, and startup
          societies. Some will join the federation. Some will not. Sovereignty
          stays with the founders.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-8 max-w-md">
          <button
            onClick={() => setView("earth")}
            className={`border-2 border-border px-4 py-3 font-mono font-bold text-sm transition-all ${
              view === "earth"
                ? "bg-foreground text-background shadow-brutal-md-active"
                : "bg-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            }`}
          >
            [ EARTH ]
          </button>
          <button
            onClick={() => setView("archipelago")}
            className={`border-2 border-border px-4 py-3 font-mono font-bold text-sm transition-all ${
              view === "archipelago"
                ? "bg-foreground text-background shadow-brutal-md-active"
                : "bg-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            }`}
          >
            [ ARCHIPELAGO ]
          </button>
        </div>

        <div
          className={`border-2 border-border shadow-brutal-md p-4 sm:p-8 mb-8 transition-colors ${
            view === "archipelago" ? "bg-[#0a0a14]" : "bg-background"
          }`}
        >
          <InternetaGlobe markers={markers} view={view} size={600} />
          <div className={`text-center mt-4 font-mono text-xs tracking-[0.3em] ${view === "archipelago" ? "text-white/60" : "text-muted-foreground"}`}>
            {view === "earth"
              ? "::: NATION-STATES OF THE LEGACY WORLD :::"
              : "::: THE ARCHIPELAGO ::: NETWORK STATES IN THE CLOUD :::"}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12 font-mono text-sm">
          <div className="border-2 border-border bg-background shadow-brutal-sm p-4">
            <div className="text-xl font-bold">195</div>
            <div className="text-[10px] tracking-widest text-muted-foreground mt-1">
              UN NATION-STATES
            </div>
          </div>
          <div className="border-2 border-border bg-background shadow-brutal-sm p-4">
            <div className="text-xl font-bold">{capitalCount}</div>
            <div className="text-[10px] tracking-widest text-muted-foreground mt-1">
              CAPITALS PINNED
            </div>
          </div>
          <div className="border-2 border-border bg-background shadow-brutal-sm p-4">
            <div className="text-xl font-bold">{networkStateCount}</div>
            <div className="text-[10px] tracking-widest text-muted-foreground mt-1">
              NETWORK STATES TRACKED
            </div>
          </div>
          <div className="border-2 border-border bg-background shadow-brutal-sm p-4">
            <div className="text-xl font-bold">0</div>
            <div className="text-[10px] tracking-widest text-muted-foreground mt-1">
              MEMBER STATES
            </div>
          </div>
        </div>

        {view === "archipelago" && (
          <div>
            <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
              ::: ARCHIPELAGO REGISTRY :::
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {networkStates.map((n) => (
                <a
                  key={n.name}
                  href={n.url ?? "#"}
                  target={n.url ? "_blank" : undefined}
                  rel={n.url ? "noopener noreferrer" : undefined}
                  className="border-2 border-border bg-background shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all p-4 font-mono"
                >
                  <div className="font-bold text-sm mb-1">{n.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {n.location}
                  </div>
                </a>
              ))}
            </div>
            <p className="mt-8 font-mono text-xs text-muted-foreground italic max-w-2xl">
              This list is incomplete by design. Submit a network state via the{" "}
              <a href="/contact" className="underline">
                contact page
              </a>
              . Inclusion here does not imply membership in Interneta. Each
              network state remains sovereign over its own One Commandment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
