import Link from "next/link";
import { siteConfig } from "@/lib/data";

export function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const iconSize = size === "sm" ? "w-8 h-8 text-sm rounded-[9px]" : "w-9 h-9 text-base rounded-[10px]";
  const textSize = size === "sm" ? "text-base" : "text-[1.15rem]";

  return (
    <Link href="/" className="flex items-center gap-2.5 no-underline">
      <div
        className={`${iconSize} bg-gradient-to-br from-[#0891B2] to-[#6D28D9] flex items-center justify-center`}
      >
        ⚡
      </div>
      <span className={`font-display ${textSize} font-bold tracking-tight text-[#F8FAFC]`}>
        Enterprisers<span className="grad-text">Forge</span>
      </span>
    </Link>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`reveal mb-16 ${centered ? "text-center" : ""}`}>
      <span className="section-eyebrow mb-5 inline-flex">{eyebrow}</span>
      <h2
        className={`font-display text-[clamp(2rem,4vw,3.4rem)] font-bold tracking-tight mt-5 leading-[1.1] ${centered ? "" : ""}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[#64748B] max-w-[520px] mt-5 leading-relaxed ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="page-hero">
      <div className="orb w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(30,64,175,0.25),transparent_65%)] -top-[200px] -left-[200px]" />
      <div className="orb w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(124,58,237,0.2),transparent_65%)] top-[50px] -right-[100px]" />
      <div className="container-main relative z-10">
        <span className="section-eyebrow mb-6 inline-flex anim-1">{eyebrow}</span>
        <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold tracking-tight leading-[1.08] max-w-[800px] anim-2">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[#94A3B8] text-lg max-w-[600px] mt-6 leading-relaxed anim-3">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
