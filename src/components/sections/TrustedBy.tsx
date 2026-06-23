import { trustedClients } from "@/lib/data";

export function TrustedBy() {
  const items = [...trustedClients, ...trustedClients];

  return (
    <section className="py-8 border-y border-[rgba(148,163,184,0.08)] overflow-hidden">
      <div className="container-main pb-4">
        <p className="text-center text-[#475569] text-xs font-mono tracking-widest uppercase mb-7">
          Trusted by enterprises across industries
        </p>
      </div>
      <div className="ticker-wrap">
        <div className="ticker-track">
          {items.map((client, i) => (
            <div key={`${client.name}-${i}`} className="flex items-center gap-2 opacity-45 shrink-0">
              <span className="font-display font-semibold text-lg text-[#F8FAFC]">{client.name}</span>
              <span className="tag">{client.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
