import type { Metadata } from "next";
import { StarterPlanSection } from "@/components/sections/StarterPlanSection";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Business Starter Plan — EnterprisersForge",
  description: "Everything your business needs to launch, grow, and compete — in one cohesive package.",
};

export default function StarterPlanPage() {
  return (
    <>
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
