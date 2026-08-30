import type { MetadataRoute } from "next";

const SITE_URL = "https://interneta.world";

const ROUTES = [
  "",
  "/about",
  "/contact",
  "/privacy",
  "/constitution",
  "/citizens",
  "/globe",
  "/anthem",
  "/societies",
  "/events",
  "/jobs",
  "/content",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
