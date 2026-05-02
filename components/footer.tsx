"use client";

import { SOCIAL_LINKS } from "@/lib/config/social-links";

const PALETTE = [
  "var(--iw-cyan)",
  "var(--iw-magenta)",
  "var(--iw-gold)",
  "var(--iw-green)",
  "var(--iw-red)",
  "var(--iw-indigo)",
  "var(--iw-orange)",
];

export function Footer() {
  return (
    <footer className="border-t-2 border-border py-6 sm:py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-1 mb-6">
          {PALETTE.map((c, i) => (
            <span
              key={i}
              className="block h-2 w-12 sm:w-16"
              style={{ background: c }}
              aria-hidden
            />
          ))}
        </div>
        <div className="text-center space-y-4">
          <div className="font-mono text-xs tracking-[0.3em] opacity-70">
            ::: THE UNITED STATES OF INTERNETA :::
          </div>
          <div className="flex items-center justify-center gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="border-2 border-border p-2.5 bg-card shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all block"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <div className="font-mono text-xs opacity-60 max-w-xl mx-auto leading-relaxed">
            For the citizens of the internet. Built in the open. Forkable, opt-in,
            opt-out. The federation does not claim a monopoly on its name.
          </div>
          <div className="font-mono text-xs opacity-50">
            Built by{" "}
            <a
              href="https://adampang.com"
              className="underline hover:opacity-100"
            >
              Adam Pangelinan
            </a>
            {" · "}
            <a
              href="https://nsnodes.com"
              className="underline hover:opacity-100"
            >
              nsnodes
            </a>
            {" · "}
            <a
              href="https://technodemocracy.app"
              className="underline hover:opacity-100"
            >
              technodemocracy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
