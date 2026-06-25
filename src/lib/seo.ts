import type { Metadata } from "next";
import {
  aboutContent,
  caseStudies,
  services,
  siteConfig,
  starterPlan,
  techStack,
  trustedClients,
} from "./data";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://enterprisersforge.com";

export const defaultDescription =
  "From AI-powered workflows and deep ERP integrations to mobile apps and e-commerce — EnterprisersForge engineers the full stack of your business growth.";

const serviceKeywords = services.flatMap((service) => [
  service.title,
  ...service.tags,
]);

const techKeywords = techStack.flatMap((layer) => [layer.title, ...layer.tags]);

const industryKeywords = [
  ...new Set([
    ...caseStudies.map((study) => study.industry),
    ...trustedClients.map((client) => client.tag),
  ]),
];

export const defaultKeywords = [
  siteConfig.name,
  siteConfig.tagline,
  "enterprise software development",
  "B2B e-commerce development",
  "ERP integration",
  "NetSuite integration",
  "Infor CloudSuite",
  "SAP integration",
  "AI automation",
  "custom LLM pipelines",
  "API integrations",
  "cross-platform mobile apps",
  "Next.js development",
  ...serviceKeywords,
  ...techKeywords,
  ...industryKeywords,
];

export const siteRoutes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/starter-plan", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/tech-stack", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/case-studies", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
];

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  ogType?: "website" | "article";
  noIndex?: boolean;
};

export function absoluteUrl(path: string = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogType = "website",
  noIndex = false,
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = `${title} — ${siteConfig.name}`;
  const mergedKeywords = [...new Set([...keywords, ...defaultKeywords])];

  return {
    title,
    description,
    keywords: mergedKeywords,
    authors: [{ name: siteConfig.name, url: siteUrl }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: ogType,
      locale: "en_US",
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

export const rootMetadata: Metadata = {
  ...createPageMetadata({
    title: siteConfig.tagline,
    description: defaultDescription,
    path: "/",
    keywords: [
      "enterprise technology partner",
      "full-stack engineering",
      "business growth technology",
    ],
  }),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  applicationName: siteConfig.name,
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const pageSeo = {
  home: {
    title: siteConfig.tagline,
    description: defaultDescription,
    path: "/",
    keywords: ["enterprise technology partner", "full-stack engineering"],
  },
  services: {
    title: "Services",
    description:
      "End-to-end engineering for complex enterprises — web and mobile apps, AI automation, B2B e-commerce, ERP integrations with NetSuite, Infor CloudSuite, and SAP, plus advanced API integrations.",
    path: "/services",
    keywords: services.flatMap((service) => [service.title, service.id]),
  },
  starterPlan: {
    title: "Business Starter Plan",
    description: `Everything your business needs to launch, grow, and compete — brand identity, professional website, cross-platform mobile app, and 3-month growth support from ${starterPlan.price}.`,
    path: "/starter-plan",
    keywords: [
      "business starter package",
      "startup launch package",
      ...starterPlan.deliverables.map((item) => item.title),
    ],
  },
  techStack: {
    title: "Tech Stack",
    description:
      "Modern stack, enterprise grade. React, Next.js, Flutter, Node.js, Python, AWS, and deep ERP expertise — every architectural decision documented and built for scale.",
    path: "/tech-stack",
    keywords: techKeywords,
  },
  caseStudies: {
    title: "Case Studies",
    description:
      "Built for impact. Proven in production — B2B portal and ERP integrations, AI invoice automation, and full business launches with measurable results.",
    path: "/case-studies",
    keywords: caseStudies.flatMap((study) => [
      study.title,
      study.client,
      study.industry,
      ...study.tags,
    ]),
  },
  about: {
    title: "About Us",
    description: aboutContent.mission,
    path: "/about",
    keywords: aboutContent.values.map((value) => value.title),
  },
  contact: {
    title: "Contact",
    description: `Book a free discovery call with EnterprisersForge. Email ${siteConfig.email} — we respond within ${siteConfig.responseTime}.`,
    path: "/contact",
    keywords: ["discovery call", "project consultation", "enterprise software quote"],
  },
} as const;
