import type { MetadataRoute } from "next";
import { CHARACTERS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/characters`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/buy`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const characterRoutes: MetadataRoute.Sitemap = CHARACTERS.map((character) => ({
    url: `${siteUrl}/characters/${character.id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...characterRoutes];
}
