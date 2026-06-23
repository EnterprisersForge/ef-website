import Link from "next/link";
import { services, whyUs } from "@/lib/data";
import { SectionHeader } from "@/components/ui";

export function ServicesDetailContent() {
  return (
    <section className="pb-[120px] relative overflow-hidden">
      <div className="orb w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(124,58,237,0.15),transparent_65%)] -bottom-[200px] -right-[150px]" />

      <div className="container-main">
        <SectionHeader
          eyebrow="🛠 Core Services"
          title={
            <>
              End-to-End Engineering
              <br />
              <span className="grad-text">for Complex Enterprises</span>
            </>
          }
          subtitle="We don't do generic. Every solution is engineered to your operations, infrastructure, and growth trajectory."
        />

        {/* Quick overview bento grid */}
        <div className="bento-grid reveal mb-20">
          {services.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className={`${service.bentoClass} glass glass-hover rounded-[20px] p-9 relative overflow-hidden min-h-[240px] no-underline block ${
                service.gradBorder ? "grad-border" : ""
              }`}
              style={{ border: service.gradBorder ? undefined : `1px solid ${service.borderColor}` }}
            >
              <div
                className="icon-ring mb-5"
                style={{ background: service.iconBg, border: `1px solid ${service.borderColor}` }}
              >
                {service.icon}
              </div>
              <span className={`tag ${service.tagClass} mb-3 inline-block`}>{service.tag}</span>
              <h3 className="font-display text-lg font-bold tracking-tight mb-2 text-[#F8FAFC]">{service.title}</h3>
              <p className="text-[#64748B] leading-relaxed text-sm">{service.description}</p>
              {service.number && (
                <div className="absolute bottom-7 right-7 opacity-[0.06] text-[6rem] leading-none font-display font-bold select-none">
                  {service.number}
                </div>
              )}
            </a>
          ))}
        </div>

        {/* Detailed service sections */}
        <div className="flex flex-col gap-16">
          {services.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className={`reveal glass rounded-[24px] p-10 md:p-12 relative overflow-hidden scroll-mt-28 ${
                service.gradBorder ? "grad-border" : ""
              }`}
              style={{ border: service.gradBorder ? undefined : `1px solid ${service.borderColor}` }}
            >
              <div
                className="absolute w-[350px] h-[350px] rounded-full blur-[80px] -top-24 -right-24 pointer-events-none"
                style={{ background: `radial-gradient(circle,${service.orbColor},transparent 70%)` }}
              />

              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-10 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="icon-ring"
                      style={{ background: service.iconBg, border: `1px solid ${service.borderColor}` }}
                    >
                      {service.icon}
                    </div>
                    <span className={`tag ${service.tagClass}`}>{service.tag}</span>
                  </div>

                  <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-bold tracking-tight mb-4 leading-tight">
                    {service.title}
                  </h2>

                  <p className="text-[#94A3B8] leading-relaxed mb-6">{service.longDescription}</p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-2xl p-8 border border-[rgba(148,163,184,0.1)]">
                  <div className="font-mono text-xs tracking-widest uppercase text-[#475569] mb-5">
                    What we deliver
                  </div>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="check-item !mb-0">
                        <div className="check-icon">✓</div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[rgba(148,163,184,0.08)] flex flex-wrap items-center justify-between gap-4 relative z-10">
                <p className="text-[#475569] text-sm">
                  {service.description}
                </p>
                <Link href="/contact" className="btn-ghost !py-2.5 !px-6 !text-sm shrink-0">
                  Discuss {service.tag.split("·")[0].trim()} →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Why Us */}
        <div className="reveal mt-20">
          <div className="text-center mb-10">
            <span className="section-eyebrow mb-5 inline-flex">Why EnterprisersForge</span>
            <h2 className="font-display text-2xl font-bold tracking-tight mt-5">
              How we <span className="grad-text">work differently</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="p-7 bg-[rgba(15,22,41,0.5)] border border-[rgba(148,163,184,0.08)] rounded-2xl text-center"
              >
                <div className="text-3xl mb-2.5">{item.icon}</div>
                <div className="font-display font-bold text-base mb-1.5">{item.title}</div>
                <div className="text-[#475569] text-sm">{item.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-16">
          <p className="text-[#64748B] mb-6 max-w-[480px] mx-auto">
            Not sure which service fits your project? Book a free discovery call and we&apos;ll map the right approach.
          </p>
          <Link href="/contact" className="btn-primary">
            Book a Discovery Call →
          </Link>
        </div>
      </div>
    </section>
  );
}
