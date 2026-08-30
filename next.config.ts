import type { NextConfig } from "next";
import { buildSecurityHeaders } from "./lib/config/security";

const isStagingEnv =
  process.env.INTERNETA_ENV === "staging" ||
  process.env.VERCEL_ENV === "preview" ||
  process.env.NEXT_PUBLIC_SITE_ENV === "staging";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qdzjcvbsfmznakbmfwfc.supabase.co',
      },
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
      // Keep Airtable for backwards compatibility during transition
      {
        protocol: 'https',
        hostname: 'dl.airtable.com',
      },
      {
        protocol: 'https',
        hostname: '*.airtableusercontent.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          ...buildSecurityHeaders({ development: process.env.NODE_ENV !== "production" }),
          ...(isStagingEnv
            ? [
                {
                  key: "X-Robots-Tag",
                  value: "noindex, nofollow, noarchive, nosnippet",
                },
              ]
            : []),
        ],
      },
    ];
  },
};

export default nextConfig;
