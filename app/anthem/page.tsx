import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anthem | interneta.world",
  description:
    "The national anthem of Interneta. Open submission, citizen vote.",
  alternates: { canonical: "https://interneta.world/anthem" },
};

export default function AnthemPage() {
  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
          ::: NATIONAL ANTHEM :::
        </div>
        <h1 className="font-mono font-bold text-4xl sm:text-6xl leading-tight tracking-tight mb-8">
          The song of<br />a federation.
        </h1>

        <p className="font-mono text-lg text-foreground/80 leading-relaxed mb-10 max-w-2xl">
          America has the Star-Spangled Banner. France has the Marseillaise.
          Interneta will have its anthem too, and it will be written by its
          citizens. Open submission. Citizen vote. Public domain when chosen.
        </p>

        <div className="border-2 border-border bg-background shadow-brutal-md p-6 sm:p-8 mb-12">
          <div className="font-mono text-xs tracking-widest text-muted-foreground mb-4">
            DRAFT 0x0000 · A STARTING VERSE
          </div>
          <pre className="font-mono text-base sm:text-lg leading-loose whitespace-pre-wrap text-foreground/90">
{`Cloud first, land last,
keys in every hand.
We came from every country
and we made this our land.

The frontier moved online,
we homesteaded the wire.
From America to Interneta,
we kept the founder's fire.`}
          </pre>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <div className="border-2 border-border bg-background shadow-brutal-sm p-5 font-mono">
            <div className="text-xs tracking-widest text-muted-foreground mb-2">
              SUBMISSIONS
            </div>
            <div className="text-3xl font-bold">0</div>
          </div>
          <div className="border-2 border-border bg-background shadow-brutal-sm p-5 font-mono">
            <div className="text-xs tracking-widest text-muted-foreground mb-2">
              CITIZEN VOTES
            </div>
            <div className="text-3xl font-bold">0</div>
          </div>
        </div>

        <button
          disabled
          className="border-2 border-border bg-muted text-muted-foreground px-6 py-3 font-mono font-bold text-base shadow-brutal-sm cursor-not-allowed"
        >
          [ SUBMIT A VERSE · COMING SOON ]
        </button>

        <p className="mt-6 font-mono text-sm text-muted-foreground">
          Lyrics, melody, MIDI, .mp3, all formats accepted at launch. The
          winning anthem is released into the public domain.
        </p>
      </div>
    </div>
  );
}
