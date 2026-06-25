import type { Metadata } from "next";
import { BreadcrumbJsonLd, StarterPlanJsonLd } from "@/components/JsonLd";
import { StarterPlanSection } from "@/components/sections/StarterPlanSection";
import { createPageMetadata, pageSeo } from "@/lib/seo";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = createPageMetadata(pageSeo.starterPlan);

export default function StarterPlanPage() {
  return (
    <>
      <StarterPlanJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Business Starter Plan", path: "/starter-plan" },
        ]}
      />
      <PageHero
        eyebrow="🚀 Featured Package"
        title={
          <>
            Launch Your Business
            <br />
            <span className="grad-text">in 8–12 Weeks</span>
          </>
        }
        subtitle="Brand identity, website, mobile app, and growth support — all in one fixed-price package."
      />
      <StarterPlanSection />
    </>
  );
}
