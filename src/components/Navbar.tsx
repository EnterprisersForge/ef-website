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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] px-6 py-4 transition-all duration-300 ${
        scrolled ? "bg-[rgba(10,15,30,0.92)] backdrop-blur-[20px] shadow-[0_1px_0_rgba(148,163,184,0.08)]" : ""
      }`}
    >
      <div className="container-main flex items-center justify-between !px-0">
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

      {menuOpen && (
        <div className="lg:hidden flex flex-col gap-0 pt-2 pb-4 border-t border-[rgba(148,163,184,0.1)] mt-3 container-main !px-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3.5 px-1.5 text-[#CBD5E1] no-underline font-display text-base border-b border-[rgba(148,163,184,0.06)]"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-center justify-center mt-2">
            Book a Discovery Call →
          </Link>
        </div>
      )}
    </nav>
  );
}
