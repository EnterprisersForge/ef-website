"use client";

import { useEffect } from "react";

export function RevealOnScroll() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    reveals.forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return null;
}
