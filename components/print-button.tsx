"use client";

export function PrintButton({
  className = "",
  label = "[ DOWNLOAD AS PDF ]",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <button
      onClick={() => window.print()}
      className={`border-2 border-border bg-background shadow-brutal-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-6 py-3 font-mono font-bold text-base ${className}`}
    >
      {label}
    </button>
  );
}
