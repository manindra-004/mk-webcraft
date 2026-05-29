"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export function SiteHeader({ variant = "overlay" }) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [showLogoImage, setShowLogoImage] = useState(true);
  const [solidHeader, setSolidHeader] = useState(false);
  const isOverlay = variant === "overlay";

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      const heroSection = document.querySelector("main > section");
      const heroHeight = heroSection?.offsetHeight ?? window.innerHeight;
      const solidThreshold = Math.max(heroHeight - 120, 320);

      if (!open) {
        if (delta > 8 && y > 120) setHidden(true);
        if (delta < -8 || y <= 120) setHidden(false);
      }
      if (isOverlay) {
        setSolidHeader(y > solidThreshold);
      } else {
        setSolidHeader(true);
      }
      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
    update();
  }, [isOverlay, open]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setShowLogoImage((prev) => !prev);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <header
      className={cn(
        "z-50 w-full transition-transform duration-300 ease-out",
        hidden && !open ? "-translate-y-full" : "translate-y-0",
        isOverlay
          ? `fixed inset-x-0 top-0 ${solidHeader ? "bg-[#0c0c0c]" : "bg-transparent"}`
          : "relative bg-[#0c0c0c]"
      )}
    >
      <div className="flex flex-col gap-10 p-[7px]">
        <div className="flex items-center justify-between pr-[0.03px]">
          <Link href="/" className="flex items-start gap-1 text-white">
            {showLogoImage ? (
              <Image
                src="/images/mklogonew.png"
                alt="MK Webcraft"
                width={220}
                height={52}
                className="h-[42px] w-auto"
                priority
              />
            ) : (
              <span className="mt-1 font-bebas text-[44px] leading-[38px] tracking-[-1.4px] text-white">
                MK
              </span>
            )}
            <span className="mt-1 font-bebas text-[44px] leading-[38px] tracking-[-1.4px] text-white">
              Webcraft
            </span>
          </Link>


          <button
            type="button"
            className="flex items-center gap-5 text-white"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Open menu"
          >
            <span className="flex flex-col gap-2" aria-hidden>
              <span className="h-0.5 w-[42px] bg-white" />
              <span className="h-0.5 w-[42px] bg-white" />
            </span>
            <span className="font-bebas text-[50px] leading-[42.5px] tracking-[-2px]">MENU</span>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-x-0 top-0 z-50 h-[56vh] min-h-[320px] bg-[#0c0c0c] px-7 py-6 text-white transition-all duration-300 ease-out md:px-9 md:py-7",
          open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        )}
        aria-hidden={!open}
      >
          <div className="flex h-full flex-col">
            <div className="flex items-start justify-between">
              <Link href="/" className="flex items-start gap-1 text-white" onClick={() => setOpen(false)}>
                {showLogoImage ? (
                  <Image
                    src="/images/mklogonew.png"
                    alt="MK Webcraft"
                    width={220}
                    height={52}
                    className="h-[42px] w-auto"
                  />
                ) : (
                  <span className="font-bebas text-[50px] leading-[42.5px] tracking-[-2px] text-white">
                    MK
                  </span>
                )}
                <span className="mt-1 font-bebas text-[44px] leading-[38px] tracking-[-1.4px] text-white">
                  Webcraft
                </span>
              </Link>
              <button
                type="button"
                className="font-bebas text-[50px] leading-[42.5px] tracking-[-2px] text-white"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                × MENU
              </button>
            </div>

            <div className="mt-auto grid grid-cols-2 items-end gap-6 pb-2">
              <div className="space-y-1 text-white/90">
                <p className="text-[28px] font-semibold leading-tight tracking-[-0.04em] md:text-[50px] md:leading-[0.95]">
                  hello@mkwebcraft.com
                </p>
                <a href="tel:+15108956500" className="text-lg leading-[25.2px] tracking-[-0.04em] text-[#39ff14]">
                  (510) 895-6500
                </a>
              </div>

              <nav className="flex flex-col items-end gap-1 text-right">
                {["Home", "About", "Projects (17)", "Blog", "Contact"].map((label) => (
                  <Link
                    key={label}
                    href="#"
                    className="font-bebas text-[40px] leading-[0.95] tracking-[-2px] text-white transition-colors hover:text-[#39ff14]"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
      </div>
    </header>
  );
}
