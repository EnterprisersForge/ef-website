import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/data";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Case Studies — EnterprisersForge",
  description: "Built for impact. Proven in production.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="📊 Case Studies"
        title={
          <>
            Real Results for
            <br />
            <span className="grad-text">Real Enterprises</span>
          </>
        }
        subtitle="Explore how we've helped companies transform operations, automate workflows, and launch products at scale."
      />

      <section className="pb-[120px]">
        <div className="container-main">
          <div className="reveal grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <article
                key={study.id}
                className="glass glass-hover rounded-[20px] p-8 border border-[rgba(148,163,184,0.1)] flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="tag tag-cyan">{study.industry}</span>
                  <span className="tag">{study.duration}</span>
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight mb-2">{study.title}</h3>
                <p className="text-[#06B6D4] font-mono text-sm mb-4">{study.result}</p>
                <p className="text-[#64748B] text-sm leading-relaxed mb-6 flex-grow">{study.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-[#475569] text-sm">
                  Client: <span className="text-[#CBD5E1]">{study.client}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="reveal text-center mt-16">
            <p className="text-[#64748B] mb-6">Ready to write your success story?</p>
            <Link href="/contact" className="btn-primary">
              Start a Project →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
