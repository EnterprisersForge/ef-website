import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { ServicesDetailContent } from "@/components/sections/ServicesDetailContent";
import { createPageMetadata, pageSeo } from "@/lib/seo";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = createPageMetadata(pageSeo.services);

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      <PageHero
        eyebrow="🛠 Our Services"
        title={
          <>
            Engineering Solutions
            <br />
            <span className="grad-text">Built for Scale</span>
          </>
        }
        subtitle="From concept to production, we deliver enterprise-grade systems tailored to your operations and growth trajectory."
      />
      <ServicesDetailContent />
    </>
  );
}
