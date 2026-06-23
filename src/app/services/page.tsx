import type { Metadata } from "next";
import { ServicesDetailContent } from "@/components/sections/ServicesDetailContent";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services — EnterprisersForge",
  description: "End-to-end engineering for complex enterprises. Web, mobile, AI, ERP, and API integrations.",
};

export default function ServicesPage() {
  return (
    <>
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
