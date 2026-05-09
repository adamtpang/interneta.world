import type { Metadata } from "next";
import { Suspense } from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Script from "next/script";
import { Agentation } from "agentation";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AsciiNav } from "@/components/ascii-nav";
import { BlurOverlay } from "@/components/blur-overlay";
import { Footer } from "@/components/footer";
import GAListener from "@/components/ga-listener";

const isStaging =
  process.env.INTERNETA_ENV === "staging" ||
  process.env.VERCEL_ENV === "preview" ||
  process.env.NEXT_PUBLIC_SITE_ENV === "staging";

export const metadata: Metadata = {
  title: "interneta.world | The United States of Interneta",
  description:
    "A federation of internet city-states. Cloud first, land last. Recruit, not conquer. The optimistic meta-layer for network states.",
  metadataBase: new URL("https://interneta.world"),
  openGraph: {
    title: "interneta.world · The United States of Interneta",
    description:
      "A federation of internet city-states. The optimistic meta-layer for network states. From America to Interneta.",
    url: "https://interneta.world",
    siteName: "Interneta",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "interneta.world | The United States of Interneta",
    description:
      "A federation of internet city-states. Cloud first, land last. Recruit, not conquer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        {isStaging && (
          <>
            <meta
              name="robots"
              content="noindex,nofollow,noarchive,nosnippet"
            />
            <meta
              name="googlebot"
              content="noindex,nofollow,noarchive,nosnippet"
            />
          </>
        )}
        <meta name="x-deploy-check" content="2026-04-21-prod" />
        {/* Light mode is the default for Interneta */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'light';
                document.documentElement.classList.remove('light', 'dark');
                document.documentElement.classList.add(theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased min-h-screen overflow-x-hidden flex flex-col`}
        suppressHydrationWarning
      >
        <ThemeProvider defaultTheme="light">
          <div className="relative z-50">
            <AsciiNav />
          </div>
          <BlurOverlay />
          <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 overflow-x-hidden flex-1 w-full">{children}</main>
          <Footer />
        </ThemeProvider>
        {!isStaging && process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
            <Suspense fallback={null}>
              <GAListener />
            </Suspense>
          </>
        )}
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
