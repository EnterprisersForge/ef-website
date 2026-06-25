import type { MetadataRoute } from "next";
import { sitemapUrl } from "@/lib/sitemap";
import { siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: sitemapUrl,
    host: siteUrl,
  };
}
