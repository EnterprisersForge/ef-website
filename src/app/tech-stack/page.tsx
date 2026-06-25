import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { createPageMetadata, pageSeo } from "@/lib/seo";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = createPageMetadata(pageSeo.techStack);

export default function TechStackPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Tech Stack", path: "/tech-stack" },
        ]}
      />
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
