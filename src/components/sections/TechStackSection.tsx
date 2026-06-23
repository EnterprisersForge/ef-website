import { architecturePhilosophy, techStack } from "@/lib/data";
import { SectionHeader } from "../ui";

export function TechStackSection() {
  return (
    <section id="stack" className="py-[120px] relative overflow-hidden border-t border-[rgba(148,163,184,0.06)]">
      <div className="orb w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(6,182,212,0.1),transparent_65%)] -top-[200px] -right-[200px]" />

      <div className="container-main">
        <SectionHeader
          eyebrow="⚙ Architecture"
          title={
            <>
              Modern Stack,
              <br />
              <span className="grad-text">Enterprise Grade</span>
            </>
          }
          subtitle="We pick the right tools for each layer — not just the trending ones. Every decision is documented and justified."
        />

        <div className="reveal grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-12">
          {techStack.map((layer) => (
            <div
              key={layer.title}
              className="glass rounded-[18px] p-7"
              style={{ border: `1px solid ${layer.borderColor}` }}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-xl">{layer.icon}</span>
                <span className="font-display font-bold">{layer.title}</span>
                <span className={`tag ${layer.layerClass} ml-auto`}>{layer.layer}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {layer.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-5">
          {architecturePhilosophy.map((item) => (
            <div
              key={item.title}
              className="p-9 bg-gradient-to-br from-[rgba(6,182,212,0.06)] to-[rgba(124,58,237,0.06)] border border-[rgba(148,163,184,0.1)] rounded-[18px]"
            >
              <div className="font-display text-lg font-bold mb-3">
                {item.icon} {item.title}
              </div>
              <p className="text-[#475569] text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
