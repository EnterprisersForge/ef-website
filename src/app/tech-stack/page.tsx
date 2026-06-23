import type { Metadata } from "next";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Tech Stack — EnterprisersForge",
  description: "Modern stack, enterprise grade. We pick the right tools for each layer.",
};

export default function TechStackPage() {
  return (
    <>
      <PageHero
        eyebrow="⚙ Architecture"
        title={
          <>
            Technology Choices
            <br />
            <span className="grad-text">That Scale</span>
          </>
        }
        subtitle="Every architectural decision is documented, justified, and built for enterprise load."
      />
      <TechStackSection />
    </>
  );
}
