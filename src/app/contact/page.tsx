import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { siteConfig } from "@/lib/data";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact — EnterprisersForge",
  description: "Book a free discovery call. We respond within 4 business hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="📞 Get in Touch"
        title={
          <>
            Let&apos;s Start
            <br />
            <span className="grad-text">Building Together</span>
          </>
        }
        subtitle="Tell us about your project and we'll schedule a free discovery call to explore how we can help."
      />

      <section className="pb-16">
        <div className="container-main">
          <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-2xl mb-2">📧</div>
              <div className="font-display font-semibold text-sm mb-1">Email</div>
              <a href={`mailto:${siteConfig.email}`} className="text-[#06B6D4] text-sm no-underline">
                {siteConfig.email}
              </a>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-2xl mb-2">⏱</div>
              <div className="font-display font-semibold text-sm mb-1">Response Time</div>
              <div className="text-[#94A3B8] text-sm">{siteConfig.responseTime}</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-2xl mb-2">🌍</div>
              <div className="font-display font-semibold text-sm mb-1">Availability</div>
              <div className="text-[#94A3B8] text-sm">Mon–Fri, Global Timezones</div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
