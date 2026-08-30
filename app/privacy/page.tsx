import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy | interneta.world",
  description:
    "How Interneta uses local preferences, analytics, Supabase records, submissions, and external community services.",
  alternates: { canonical: "https://interneta.world/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
          ::: PRIVACY :::
        </div>
        <h1 className="font-mono font-bold text-4xl sm:text-6xl leading-tight tracking-tight mb-3">
          Privacy policy
        </h1>
        <p className="font-mono text-xs text-muted-foreground mb-10">
          Last updated August 30, 2026
        </p>

        <div className="space-y-10 text-foreground/85 leading-relaxed">
          <section>
            <h2 className="font-mono font-bold text-2xl mb-4">Who operates Interneta</h2>
            <p>
              Interneta is operated by Adam Pangelinan as an open-source beta.
              The public site presents a draft constitution, directories,
              research, community links, and experimental tools for network
              states. The current beta does not accept membership payments or
              wallet signatures.
            </p>
          </section>

          <section>
            <h2 className="font-mono font-bold text-2xl mb-4">Browsing and preferences</h2>
            <p>
              Interneta stores the selected light or dark theme in your
              browser&apos;s local storage. Vercel hosts the site and necessarily
              processes request data such as IP address, browser information,
              requested route, and request timing to deliver and protect the
              service. The application does not use the theme preference to
              identify you.
            </p>
          </section>

          <section>
            <h2 className="font-mono font-bold text-2xl mb-4">Analytics</h2>
            <p>
              Production deployments can enable Google Analytics through a
              configured site identifier. When enabled, Google receives page
              paths, query parameters, referrer and device information, and
              network information used to produce aggregate traffic reports.
              Google may use analytics cookies or similar identifiers. Interneta
              does not use this data for targeted advertising.
            </p>
          </section>

          <section>
            <h2 className="font-mono font-bold text-2xl mb-4">Submissions and Supabase</h2>
            <p>
              Some directory pages read records from a Supabase-hosted
              PostgreSQL database. The NS Kids stay form writes the dates of a
              planned stay, optional child ages, and one or two parent Discord
              usernames to Supabase. These fields are submitted voluntarily to
              coordinate overlapping family stays. Do not submit a child&apos;s
              name, contact details, or other information the form does not ask
              for.
            </p>
          </section>

          <section>
            <h2 className="font-mono font-bold text-2xl mb-4">External services</h2>
            <p>
              Links to GitHub, X, Discord, Telegram, Google Calendar, application
              forms, and other network-state sites leave Interneta. Those
              services receive information under their own policies when you
              visit or interact with them. Interneta does not control their
              accounts, cookies, retention, or security practices.
            </p>
          </section>

          <section>
            <h2 className="font-mono font-bold text-2xl mb-4">Access and deletion</h2>
            <p>
              The current code does not sell submitted personal data. To ask
              what Interneta has stored, correct a record, or request deletion,
              use the <Link href="/contact" className="underline font-bold">contact page</Link>.
              Include enough detail to locate the record, such as the Discord
              username used for a stay submission, but do not post sensitive
              information in a public channel. Records are kept only while they
              support the feature, an operational need, or a legal obligation.
            </p>
          </section>

          <section>
            <h2 className="font-mono font-bold text-2xl mb-4">Policy changes</h2>
            <p>
              Interneta is an evolving beta. This page will be updated when the
              site activates wallet signatures, changes analytics, adds payment
              processing, or materially changes the information it collects.
              The date above identifies the version currently published.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
