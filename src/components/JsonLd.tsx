import {
  aboutContent,
  caseStudies,
  services,
  siteConfig,
  starterPlan,
} from "@/lib/data";
import { absoluteUrl, defaultDescription, siteUrl } from "@/lib/seo";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

function JsonLdScript({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SiteJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.name,
    url: siteUrl,
    email: siteConfig.email,
    description: defaultDescription,
    slogan: siteConfig.tagline,
    logo: absoluteUrl("/icon"),
    sameAs: [],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        availableLanguage: ["English"],
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteConfig.name,
    url: siteUrl,
    description: defaultDescription,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-US",
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#service`,
    name: siteConfig.name,
    url: siteUrl,
    description: defaultDescription,
    email: siteConfig.email,
    areaServed: "Worldwide",
    serviceType: services.map((service) => service.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Enterprise Engineering Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          url: absoluteUrl(`/services#${service.id}`),
        },
      })),
    },
  };

  return <JsonLdScript data={[organization, website, professionalService]} />;
}

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };

  return <JsonLdScript data={data} />;
}

export function ContactPageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${siteConfig.name}`,
    url: absoluteUrl("/contact"),
    description: `Book a free discovery call. We respond within ${siteConfig.responseTime}.`,
    mainEntity: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
    },
  };

  return <JsonLdScript data={data} />;
}

export function AboutPageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${siteConfig.name}`,
    url: absoluteUrl("/about"),
    description: aboutContent.mission,
    mainEntity: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
    },
  };

  return <JsonLdScript data={data} />;
}

export function CaseStudiesJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Case Studies",
    url: absoluteUrl("/case-studies"),
    description: "Enterprise software case studies — ERP integrations, AI automation, and product launches.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: caseStudies.map((study, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: study.title,
          description: study.description,
          about: study.client,
          keywords: study.tags.join(", "),
        },
      })),
    },
  };

  return <JsonLdScript data={data} />;
}

export function StarterPlanJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Business Starter Plan",
    description:
      "Brand identity, website, mobile app, and growth support — everything your business needs to launch in 8–12 weeks.",
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "Offer",
      price: starterPlan.price.replace(/[^0-9.]/g, ""),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/starter-plan"),
      seller: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
      },
    },
  };

  return <JsonLdScript data={data} />;
}
