"use client";

import { useEffect, useRef, useState } from "react";
import { services } from "@/lib/content/home";

export function HeroSection() {
  const marqueeServices = [...services, ...services];
  const bottomMarqueeServices = Array.from({ length: 10 }, () => services).flat();
  const currentYearShort = new Date().getFullYear().toString().slice(-2);
  const rootRef = useRef(null);
  const [showFixedHero, setShowFixedHero] = useState(true);

  useEffect(() => {
    const update = () => {
      const heroHeight = rootRef.current?.offsetHeight ?? window.innerHeight;
      setShowFixedHero(window.scrollY < heroHeight - 2);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative h-[100svh] min-h-[640px] w-full" data-hero-scroll-root>
      <section
        className={`section-dark fixed inset-x-0 top-0 z-0 flex h-[100svh] min-h-[640px] w-full flex-col justify-end overflow-hidden bg-black transition-opacity duration-500 ${
          showFixedHero ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-portrait.png"
            alt="Artistic portrait with red and blue lighting"
            className="js-hero-parallax absolute left-[-2.07%] top-0 h-full w-[104.15%] max-w-none object-cover will-change-transform [transform:translateZ(0)] [backface-visibility:hidden]"
          />
          <div className="noise-overlay absolute inset-0 h-full w-full" aria-hidden />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex h-9 items-center bg-black">
          <div className="marquee-wrap w-full px-5 sm:px-8">
            <div className="marquee-track">
              {bottomMarqueeServices.map((item, idx) => (
                <span
                  key={`bottom-${item}-${idx}`}
                  className="text-[11px] font-semibold uppercase leading-none tracking-[-0.03em] text-white/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mk-webcraft-container relative z-10 flex flex-col pb-14">
          <p className="font-bebas text-[60px] leading-[72px] tracking-[-2.4px] text-white">
            ©25-{currentYearShort}
          </p>

          <div className="mt-6 flex w-full flex-col">
            <div className="flex w-full items-start">
              <div className="relative -ml-2 sm:-ml-4 md:-ml-8 w-[58%] min-w-0 shrink-0">
                <p className="text-display-massive max-w-full text-white">
                  Digital
                </p>
              </div>

              {/* <div className="flex min-w-0 flex-1 items-start justify-end pt-[7px]">
                <div className="hidden w-[30%] shrink-0 sm:block" aria-hidden />
                <div className="marquee-wrap w-full max-w-[560px]">
                  <div className="marquee-track">
                    {marqueeServices.map((item, idx) => (
                      <span
                        key={`${item}-${idx}`}
                        className="text-lg font-semibold leading-[28.8px] tracking-[-0.05em] text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div> */}
            </div>

            <div className="mt-4 flex w-full flex-col items-end justify-between gap-6 lg:mt-0 lg:flex-row">
              <p className="w-full max-w-[400px] shrink-0 text-base font-medium leading-[20.8px] tracking-[-0.04em] text-white/90 lg:mt-auto">
                We create digital designs that help brands move faster and convert better. Your
                business deserves more than just a website. It needs results.
              </p>

              <div className="relative w-full lg:flex-1">
                <p className="text-display-studio max-w-full whitespace-normal text-right text-white">
                  Design Studio
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pointer-events-none h-[100svh] min-h-[640px]" aria-hidden>
        <div className="h-full w-full" />
      </section>
    </div>
  );
}
