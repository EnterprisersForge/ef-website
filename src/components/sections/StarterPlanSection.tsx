import Link from "next/link";
import { starterPlan } from "@/lib/data";
import { SectionHeader } from "../ui";

export function StarterPlanSection({ compact = false }: { compact?: boolean }) {
  return (
    <section id="starter" className="py-[120px] relative overflow-hidden">
      <div className="orb w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(30,64,175,0.2),transparent_65%)] -top-[200px] -left-[300px]" />

      <div className="container-main">
        <SectionHeader
          eyebrow="🚀 Featured Package"
          title="The Business Starter Plan"
          subtitle="Everything your business needs to launch, grow, and compete — in one cohesive package."
        />

        <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="pricing-card">
            <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
              <div>
                <span className="tag tag-violet mb-3 inline-block">Business in a Box</span>
                <h3 className="font-display text-3xl font-bold tracking-tight leading-tight">Complete Launch Suite</h3>
              </div>
              <div className="text-right">
                <div className="text-[#475569] text-xs mb-0.5">Starting from</div>
                <div className="font-display grad-text text-[2.8rem] font-bold leading-none">{starterPlan.price}</div>
                <div className="text-[#475569] text-xs">one-time investment</div>
              </div>
            </div>

            <div className="mb-8">
              <div className="font-mono text-xs tracking-widest uppercase text-[#475569] mb-4">What&apos;s included</div>
              {starterPlan.deliverables.map((item) => (
                <div key={item.title} className="check-item">
                  <div className="check-icon">✓</div>
                  <div>
                    <strong className="text-[#F8FAFC]">{item.title}</strong> — {item.detail}
                  </div>
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn-primary w-full justify-center !py-4 !text-base">
              Claim Your Launch Package →
            </Link>
            <p className="text-center text-[#475569] text-xs mt-3">
              Delivery in 8–12 weeks · NDA included · Fixed-price guarantee
            </p>
          </div>

          {!compact && (
            <div className="flex flex-col gap-5">
              <div className="glass rounded-2xl p-8 border border-[rgba(148,163,184,0.1)]">
                <div className="font-mono text-xs tracking-widest uppercase text-[#475569] mb-5">
                  Expected outcomes at 90 days
                </div>
                {starterPlan.outcomes.map((outcome) => (
                  <div key={outcome.label} className="mb-4 last:mb-0">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-[#CBD5E1]">{outcome.label}</span>
                      <span className="font-mono text-sm text-[#06B6D4]">{outcome.value}</span>
                    </div>
                    <div className="prog-bar-bg">
                      <div className="prog-bar-fill" style={{ width: outcome.width }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass rounded-2xl p-8 border border-[rgba(148,163,184,0.1)]">
                <div className="font-mono text-xs tracking-widest uppercase text-[#475569] mb-5">Delivery timeline</div>
                <div className="relative pl-6 border-l border-[rgba(148,163,184,0.12)]">
                  {starterPlan.timeline.map((step) => (
                    <div key={step.week} className="relative mb-5 last:mb-0">
                      <div
                        className="absolute -left-[29px] top-[3px] w-2.5 h-2.5 rounded-full"
                        style={{ background: step.color, boxShadow: `0 0 10px ${step.color}` }}
                      />
                      <div className="font-display text-sm font-semibold">{step.week}</div>
                      <div className="text-[#475569] text-sm mt-0.5">{step.detail}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-[rgba(16,185,129,0.06)] border border-[rgba(16,185,129,0.2)] rounded-xl flex items-center gap-3.5">
                <div className="text-2xl">🛡</div>
                <div>
                  <div className="font-display font-semibold text-sm mb-0.5">Satisfaction Guarantee</div>
                  <div className="text-[#475569] text-xs">
                    Free revisions until you&apos;re proud of it. No surprises on the invoice.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
