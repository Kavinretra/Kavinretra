import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: profile.siteUrl,
      lastModified: "2026-11-25",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${profile.siteUrl}/resume`,
      lastModified: "2026-11-25",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
