import { testimonials } from "@/lib/data";
import { SectionHeader } from "../ui";

export function TestimonialsSection() {
  return (
    <section className="py-[100px] overflow-hidden border-t border-[rgba(148,163,184,0.06)]">
      <div className="container-main">
        <SectionHeader
          eyebrow="💬 Client Results"
          title={
            <>
              Built for impact. <span className="grad-text">Proven in production.</span>
            </>
          }
        />

        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass glass-hover rounded-[18px] p-8 border border-[rgba(148,163,184,0.1)]"
            >
              <div className="text-[#F59E0B] mb-4">★★★★★</div>
              <p className="text-[#CBD5E1] leading-relaxed text-sm mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center font-bold font-display`}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="font-display font-semibold text-sm">{t.name}</div>
                  <div className="text-[#475569] text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
