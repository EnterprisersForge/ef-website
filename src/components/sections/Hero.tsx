import Link from "next/link";
import { heroStats } from "@/lib/data";
import { HeroCanvas } from "@/components/HeroCanvas";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="orb w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(30,64,175,0.3),transparent_65%)] -top-[200px] -left-[200px]" />
      <div className="orb w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(124,58,237,0.25),transparent_65%)] top-[100px] -right-[150px]" />
      <div className="orb w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(6,182,212,0.12),transparent_65%)] -bottom-[100px] left-[30%]" />

      <HeroCanvas />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,0.03) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-main relative z-10 w-full py-20">
        <div className="anim-1 mb-7">
          <span className="section-eyebrow">⚡ Enterprise Technology Partner</span>
        </div>

        <h1 className="font-display anim-2 text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[1.06] tracking-tight max-w-[900px] mb-7">
          We Build the Systems
          <br />
          That <span className="grad-text text-glow">Scale Enterprises</span>
          <br />
          Beyond Limits.
        </h1>

        <p className="anim-3 text-[clamp(1rem,2vw,1.2rem)] text-[#94A3B8] max-w-[620px] mb-11 leading-relaxed">
          From AI-powered workflows and deep ERP integrations to mobile apps and e-commerce — EnterprisersForge
          engineers the full stack of your business growth.
        </p>

        <div className="anim-4 flex flex-wrap gap-3.5 mb-16">
          <Link href="/contact" className="btn-primary">
            Start Your Build →
          </Link>
          <Link href="/services" className="btn-ghost">
            Explore Services
          </Link>
        </div>

        <div className="anim-5 glass inline-grid grid-cols-3 w-full max-w-[640px] rounded-2xl overflow-hidden">
          {heroStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`p-6 ${i < heroStats.length - 1 ? "border-r border-[rgba(148,163,184,0.12)]" : ""}`}
            >
              <div className="font-display grad-text text-[2rem] font-bold leading-none">{stat.value}</div>
              <div className="text-[#64748B] text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="scroll-bounce absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#94A3B8]" />
          <div className="w-[5px] h-[5px] rounded-full bg-[#94A3B8]" />
        </div>
      </div>
    </section>
  );
}
