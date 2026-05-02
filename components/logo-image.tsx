"use client";

// Interneta wordmark: each letter cycles through the federation palette,
// the way Olympic rings symbolize the bringing together of nations.
const PALETTE = [
  "var(--iw-cyan)",
  "var(--iw-magenta)",
  "var(--iw-gold)",
  "var(--iw-green)",
  "var(--iw-red)",
  "var(--iw-indigo)",
  "var(--iw-orange)",
];

const LETTERS = "INTERNETA".split("");

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const SIZES: Record<NonNullable<Props["size"]>, string> = {
  sm: "text-xl",
  md: "text-2xl sm:text-3xl",
  lg: "text-4xl sm:text-5xl",
};

export function LogoImage({ className = "", size = "md" }: Props) {
  return (
    <span
      className={`font-mono font-bold tracking-[0.05em] ${SIZES[size]} ${className}`}
      aria-label="Interneta"
    >
      {LETTERS.map((l, i) => (
        <span key={i} style={{ color: PALETTE[i % PALETTE.length] }}>
          {l}
        </span>
      ))}
    </span>
  );
}
