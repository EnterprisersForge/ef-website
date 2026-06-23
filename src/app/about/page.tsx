import type { Metadata } from "next";
import Link from "next/link";
import { aboutContent } from "@/lib/data";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us — EnterprisersForge",
  description: "Engineering the systems that power enterprise growth.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="🏢 Our Story"
        title={
          <>
            Building Systems That
            <br />
            <span className="grad-text">Power Growth</span>
          </>
        }
        subtitle={aboutContent.mission}
      />

      <section className="pb-[120px]">
        <div className="container-main">
          <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {aboutContent.values.map((value) => (
              <div key={value.title} className="glass rounded-2xl p-8 glass-hover">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="font-display font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          {/* <div className="reveal mb-20">
            <span className="section-eyebrow mb-5 inline-flex">👥 Leadership</span>
            <h2 className="font-display text-3xl font-bold tracking-tight mt-5 mb-10">
              Meet the <span className="grad-text">Team</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aboutContent.team.map((member) => (
                <div key={member.name} className="glass rounded-2xl p-8 border border-[rgba(148,163,184,0.1)]">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0891B2] to-[#6D28D9] flex items-center justify-center font-display font-bold text-xl mb-4">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-display font-bold text-lg">{member.name}</h3>
                  <div className="text-[#06B6D4] text-sm font-mono mb-3">{member.role}</div>
                  <p className="text-[#64748B] text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div> */}

          <div id="careers" className="reveal mb-20">
            <div className="glass rounded-2xl p-10 border border-[rgba(148,163,184,0.1)]">
              <h3 className="font-display text-2xl font-bold mb-3">Careers</h3>
              <p className="text-[#64748B] mb-6 max-w-[600px]">
                We&apos;re always looking for exceptional engineers, designers, and strategists who thrive in
                fast-paced enterprise environments.
              </p>
              <Link href="/contact" className="btn-primary">
                Join Our Team →
              </Link>
            </div>
          </div>

          <div id="blog" className="reveal mb-20">
            <div className="glass rounded-2xl p-10 border border-[rgba(148,163,184,0.1)]">
              <h3 className="font-display text-2xl font-bold mb-3">Blog & Insights</h3>
              <p className="text-[#64748B] mb-6 max-w-[600px]">
                Deep dives on ERP integrations, AI automation patterns, and enterprise architecture — coming soon.
              </p>
            </div>
          </div>

          {/* <div id="partners" className="reveal">
            <div className="glass rounded-2xl p-10 border border-[rgba(148,163,184,0.1)]">
              <h3 className="font-display text-2xl font-bold mb-3">Partners</h3>
              <p className="text-[#64748B] mb-6 max-w-[600px]">
                We partner with NetSuite, AWS, and leading technology providers to deliver best-in-class solutions.
              </p>
              <Link href="/contact" className="btn-ghost">
                Become a Partner →
              </Link>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
