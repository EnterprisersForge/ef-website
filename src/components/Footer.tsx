import Link from "next/link";
import { footerLinks, siteConfig } from "@/lib/data";
import { Logo } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(148,163,184,0.08)] py-16 pb-10">
      <div className="container-main">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-14">
          <div>
            <Logo size="sm" />
            <p className="text-[#334155] text-sm leading-relaxed max-w-[260px] mt-4 mb-5">
              Engineering the systems that power enterprise growth. From code to cloud, we build what scales.
            </p>
            <div className="flex gap-3">
              {["in", "𝕏", "gh"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-[34px] h-[34px] rounded-lg bg-[rgba(148,163,184,0.06)] border border-[rgba(148,163,184,0.12)] flex items-center justify-center text-[#64748B] no-underline text-sm hover:border-[rgba(6,182,212,0.4)] hover:text-[#06B6D4] transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-display font-semibold text-sm mb-4 text-[#F8FAFC]">Services</div>
            <div className="flex flex-col gap-2.5">
              {footerLinks.services.map((link) => (
                <Link key={link.label} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="font-display font-semibold text-sm mb-4 text-[#F8FAFC]">Company</div>
            <div className="flex flex-col gap-2.5">
              {footerLinks.company.map((link) => (
                <Link key={link.label} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="font-display font-semibold text-sm mb-4 text-[#F8FAFC]">Contact</div>
            <div className="flex flex-col gap-2.5">
              <a href={`mailto:${siteConfig.email}`} className="footer-link">
                {siteConfig.email}
              </a>
              <Link href="/contact" className="footer-link">
                Book a Call
              </Link>
              <Link href="/contact" className="footer-link">
                Support Portal
              </Link>
              <div className="mt-1">
                <div className="text-[#334155] text-xs">Response within</div>
                <div className="text-[#06B6D4] font-mono text-sm font-medium">{siteConfig.responseTime}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(148,163,184,0.06)] pt-7 flex items-center justify-between flex-wrap gap-3">
          <div className="text-[#1E293B] text-sm">© 2025 {siteConfig.name}. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
            <a href="#" className="footer-link">
              Terms of Service
            </a>
            <a href="#" className="footer-link">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
