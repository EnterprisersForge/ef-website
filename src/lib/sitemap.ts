import { caseStudies, navLinks, services } from "./data";
import { absoluteUrl } from "./seo";

export type SitemapChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export type SitemapEntry = {
  path: string;
  changeFrequency: SitemapChangeFrequency;
  priority: number;
  lastModified?: Date;
};

const staticPages: SitemapEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/starter-plan", changeFrequency: "monthly", priority: 0.9 },
  { path: "/tech-stack", changeFrequency: "monthly", priority: 0.8 },
  { path: "/case-studies", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
];

const sectionAnchors: SitemapEntry[] = [
  ...services.map((service) => ({
    path: `/services#${service.id}`,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  })),
  { path: "/about#careers", changeFrequency: "monthly", priority: 0.5 },
  { path: "/about#blog", changeFrequency: "monthly", priority: 0.5 },
];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatLastMod(date: Date): string {
  return date.toISOString();
}

function formatPriority(priority: number): string {
  return priority.toFixed(1);
}

function dedupeEntries(entries: SitemapEntry[]): SitemapEntry[] {
  const seen = new Set<string>();

  return entries.filter((entry) => {
    if (seen.has(entry.path)) {
      return false;
    }

    seen.add(entry.path);
    return true;
  });
}

export function getSitemapEntries(): SitemapEntry[] {
  const navPaths = navLinks.map((link) => link.href);
  const caseStudyPaths = caseStudies.map((study) => `/case-studies#${study.id}`);

  const navEntries: SitemapEntry[] = navPaths
    .filter((path) => !staticPages.some((page) => page.path === path))
    .map((path) => ({
      path,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  const caseStudyEntries: SitemapEntry[] = caseStudyPaths.map((path) => ({
    path,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return dedupeEntries([...staticPages, ...sectionAnchors, ...navEntries, ...caseStudyEntries]);
}

export function generateSitemapXml(entries: SitemapEntry[] = getSitemapEntries()): string {
  const urlNodes = entries
    .map((entry) => {
      const loc = escapeXml(absoluteUrl(entry.path));
      const lastmod = formatLastMod(entry.lastModified ?? new Date());

      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${entry.changeFrequency}</changefreq>`,
        `    <priority>${formatPriority(entry.priority)}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlNodes,
    "</urlset>",
  ].join("\n");
}

export const sitemapUrl = absoluteUrl("/sitemap.xml");
