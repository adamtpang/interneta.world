"use client";

import { useState } from "react";

export function ShareBar({
  slug,
  country,
  top,
}: {
  slug: string;
  country: string;
  top: string;
}) {
  const [copied, setCopied] = useState<string | null>(null);
  const url = `https://interneta.world/portal/${slug}`;
  const summary = `NS node search · ${country} · top site: ${top}. Ranked on the 9-axis node-fit rubric with hard gates. ${url}`;

  const copy = async (text: string, which: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(which);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied("failed");
      setTimeout(() => setCopied(null), 2000);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 font-mono text-xs">
      <button
        onClick={() => copy(url, "link")}
        className="border-2 border-border bg-background shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all px-3 py-2 font-bold"
      >
        {copied === "link" ? "[ COPIED ]" : "[ COPY LINK ]"}
      </button>
      <button
        onClick={() => copy(summary, "summary")}
        className="border-2 border-border bg-background shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all px-3 py-2 font-bold"
      >
        {copied === "summary" ? "[ COPIED ]" : "[ COPY SUMMARY ]"}
      </button>
      <a
        href={`https://x.com/intent/post?text=${encodeURIComponent(summary)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-border bg-background shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all px-3 py-2 font-bold"
      >
        [ POST ON X ]
      </a>
      {copied === "failed" && (
        <span className="self-center text-muted-foreground">
          clipboard blocked, copy the URL manually
        </span>
      )}
    </div>
  );
}
