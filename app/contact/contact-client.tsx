"use client";

import { SOCIAL_LINKS } from "@/lib/config/social-links";

export default function ContactPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-8 max-w-md mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono">
          [ CONTACT ]
        </h1>
        <p className="text-sm font-mono text-muted-foreground">
          Interneta is operated by Adam Pangelinan and built in public with the
          contributors credited below. Use these channels for community,
          correction, or privacy requests. Do not post sensitive personal data
          in a public channel.
        </p>

        {/* Social Links - Vertical */}
        <div className="flex flex-col gap-3">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border-2 border-border px-6 py-4 bg-card shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all font-mono font-bold"
            >
              <link.icon className="h-5 w-5" />
              [ {link.label.toUpperCase()} ]
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-muted-foreground">
          The site&apos;s data practices and deletion path are described in the{" "}
          <a href="/privacy" className="underline underline-offset-2">
            privacy policy
          </a>
          .
        </p>

        {/* Credits */}
        <div className="font-mono text-xs opacity-60 pt-4">
          Made with ❤️ by{" "}
          <a href="https://x.com/wagmiteth" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-100 transition-opacity">wagmit</a>,{" "}
          <a href="https://github.com/webel/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-100 transition-opacity">cookie</a>,{" "}
          <a href="https://paragraph.xyz/@ericmiki.eth" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-100 transition-opacity">Eric</a>,{" "}
          & <a href="https://www.parallelcitizen.xyz/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-100 transition-opacity">Michael (Parallel Citizen)</a>
        </div>
      </section>
    </div>
  );
}
