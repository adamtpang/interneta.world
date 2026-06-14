import type { Metadata } from "next";

/**
 * Generates page metadata with the format: H1 text | interneta.world
 * @param h1Text - The H1 text from the page (e.g., "CONTACT", "JOBS")
 * @param description - Optional description for the page
 * @returns Metadata object for Next.js
 */
export function generatePageMetadata(
  h1Text: string,
  description?: string
): Metadata {
  const cleanH1Text = h1Text.replace(/^\[|\]$/g, "").trim();
  const title = `${cleanH1Text} | interneta.world`;

  return {
    title,
    description:
      description ||
      `${cleanH1Text} on interneta.world, the United States of Interneta. A federation of internet city-states.`,
    openGraph: {
      title,
      description:
        description ||
        `${cleanH1Text} on interneta.world, the United States of Interneta.`,
      url: "https://interneta.world",
      siteName: "Interneta",
      locale: "en_US",
      type: "website",
    },
    // No explicit images: Next.js falls back to app/opengraph-image.tsx,
    // the dynamic Interneta-branded card. Never reference featured-image.png.
    twitter: {
      card: "summary_large_image",
      title,
      description:
        description ||
        `${cleanH1Text} on interneta.world, the United States of Interneta.`,
    },
  };
}
