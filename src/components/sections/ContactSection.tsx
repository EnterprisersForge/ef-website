import { ContactForm } from "../ContactForm";

export function ContactSection({ centered = true }: { centered?: boolean }) {
  return (
    <section id="contact" className="py-[120px] relative overflow-hidden">
      <div className="orb w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(30,64,175,0.2),transparent_60%)] -top-[400px] left-1/2 -translate-x-1/2" />

      <div className={`max-w-[760px] mx-auto container-main relative z-10 ${centered ? "text-center" : ""}`}>
        <div className="reveal">
          <span className="section-eyebrow mb-6 inline-flex">📞 Let&apos;s Build</span>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight leading-[1.05] mt-6 mb-6">
            Ready to forge your
            <br />
            <span className="grad-text">next competitive edge?</span>
          </h2>
          <p className="text-[#64748B] text-lg leading-relaxed mb-12 max-w-[520px] mx-auto">
            Whether you&apos;re scaling an existing platform or starting from zero — we&apos;ll turn your goals into
            shipped software. Discovery call is free, no strings attached.
          </p>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
