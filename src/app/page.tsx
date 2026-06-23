import { ContactSection } from "@/components/sections/ContactSection";
import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StarterPlanSection } from "@/components/sections/StarterPlanSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustedBy } from "@/components/sections/TrustedBy";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ServicesSection />
      <StarterPlanSection />
      <TechStackSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
