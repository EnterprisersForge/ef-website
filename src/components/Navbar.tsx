"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import { Logo } from "./ui";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const showNavBackground = scrolled || menuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] px-6 py-4 transition-all duration-300 ${
        showNavBackground
          ? "bg-[rgba(10,15,30,0.95)] backdrop-blur-[20px] shadow-[0_1px_0_rgba(148,163,184,0.08)]"
          : ""
      }`}
    >
      <div className="container-main flex items-center justify-between !px-0 min-h-[44px]">
        <Logo />

        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "text-white" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact" className="btn-primary !py-2.5 !px-[22px] !text-sm">
            Book a Discovery Call →
          </Link>
        </div>

        <button
          className="lg:hidden flex flex-col gap-[5px] cursor-pointer p-1.5 bg-transparent border-none z-[200]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-[22px] h-0.5 bg-[#F8FAFC] rounded-sm transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-0.5 bg-[#F8FAFC] rounded-sm transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-0.5 bg-[#F8FAFC] rounded-sm transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`lg:hidden grid transition-[grid-template-rows] duration-300 ease-in-out ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`flex flex-col gap-3 pt-6 pb-5 mt-5 border-t border-[rgba(148,163,184,0.12)] container-main !px-0 transition-opacity duration-300 ease-out ${
              menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3.5 px-4 rounded-xl no-underline font-display text-base transition-colors ${
                  menuOpen ? "mobile-menu-link-enter" : ""
                } ${
                  pathname === link.href
                    ? "bg-[rgba(6,182,212,0.12)] text-white border border-[rgba(6,182,212,0.3)]"
                    : "bg-[rgba(15,22,41,0.9)] text-[#E2E8F0] border border-[rgba(148,163,184,0.12)] hover:text-white hover:border-[rgba(148,163,184,0.25)]"
                }`}
                style={menuOpen ? { animationDelay: `${80 + index * 55}ms` } : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`btn-primary text-center justify-center mt-2 ${menuOpen ? "mobile-menu-link-enter" : ""}`}
              style={menuOpen ? { animationDelay: `${80 + navLinks.length * 55}ms` } : undefined}
            >
              Book a Discovery Call →
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
