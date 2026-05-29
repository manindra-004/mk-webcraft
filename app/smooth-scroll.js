"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotionQuery.matches) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.09,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.05,
      syncTouch: true,
      smoothWheel: true,
      autoRaf: false,
    });

    let rafId = 0;

    const raf = (time) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);

    const onLenisScroll = (event) => {
      window.dispatchEvent(
        new CustomEvent("lenis:scroll", {
          detail: {
            velocity: event.velocity ?? 0,
            progress: event.progress ?? 0,
            scroll: event.scroll ?? window.scrollY,
          },
        })
      );
    };

    const onAnchorClick = (event) => {
      const anchor = event.target.closest?.('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, {
        duration: 1.2,
        offset: -16,
      });
    };

    lenis.on("scroll", onLenisScroll);
    document.addEventListener("click", onAnchorClick);

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.off("scroll", onLenisScroll);
      lenis.destroy();
      document.removeEventListener("click", onAnchorClick);
    };
  }, []);

  return null;
}
