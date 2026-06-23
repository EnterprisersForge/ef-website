import Link from "next/link";
import { services, whyUs } from "@/lib/data";
import { SectionHeader } from "../ui";

export function ServicesSection({ showCta = false }: { showCta?: boolean }) {
  return (
    <section id="services" className="py-[120px] relative overflow-hidden">
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

        <div className="bento-grid reveal">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className={`${service.bentoClass} glass glass-hover rounded-[20px] p-9 relative overflow-hidden min-h-[280px] ${
                service.gradBorder ? "grad-border" : ""
              }`}
              style={{ border: service.gradBorder ? undefined : `1px solid ${service.borderColor}` }}
            >
              <div
                className="absolute w-[250px] h-[250px] rounded-full blur-[60px] -top-20 -right-20 pointer-events-none"
                style={{ background: `radial-gradient(circle,${service.orbColor},transparent 70%)` }}
              />
              <div
                className="icon-ring mb-6"
                style={{ background: service.iconBg, border: `1px solid ${service.borderColor}` }}
              >
                {service.icon}
              </div>
              <span className={`tag ${service.tagClass} mb-4 inline-block`}>{service.tag}</span>
              <h3 className="font-display text-xl font-bold tracking-tight mb-3">{service.title}</h3>
              <p className="text-[#64748B] leading-relaxed text-sm mb-6 max-w-[480px]">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              {service.number && (
                <div className="absolute bottom-9 right-9 opacity-[0.06] text-[8rem] leading-none font-display font-bold select-none">
                  {service.number}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="reveal mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {showCta && (
          <div className="reveal text-center mt-16">
            <Link href="/contact" className="btn-primary">
              Discuss Your Project →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
