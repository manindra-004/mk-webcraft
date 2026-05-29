"use client";

import { useState } from "react";
import Link from "next/link";
import { serviceItems } from "@/lib/content/home";
import { cn } from "@/lib/cn";

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const current = serviceItems[active] ?? serviceItems[0];

  return (
    <section className="section-dark pb-[180px] pt-9">
      <div className="mk-webcraft-container">
        <div className="mx-auto max-w-[1848px]">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-1 text-white">
              <span className="font-bebas text-[50px] leading-[42.5px] tracking-[-2px]">MK Webcraft</span>
              <span className="font-bebas text-[18px] leading-[15.3px] tracking-[-0.72px]">®</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="corner-accent" aria-hidden />
              <span className="text-[13px] font-semibold uppercase tracking-[-0.04em] text-white">
                Services
              </span>
            </div>
          </div>

          <div className="mt-[150px] grid gap-5 lg:grid-cols-[304px_1fr]">
            <aside>
              <img
                key={current.num}
                src={current.image}
                alt={`${current.title} service`}
                className="animate-in-fade h-[220px] w-full object-cover"
              />
              <p className="mt-4 text-base font-medium tracking-[-0.04em] text-white/60">
                {current.title}
              </p>
              <p className="mt-2 text-[22px] font-medium leading-[28.6px] tracking-[-0.05em] text-white">
                {current.desc}
              </p>
            </aside>

            <div className="space-y-0">
              {serviceItems.map((item, i) => (
                <div
                  key={item.num}
                  className={`border-b border-[#323232] transition-colors duration-300 ${
                    i === 0 ? "border-t border-[#323232] pl-4" : ""
                  }`}
                >
                  <button
                    type="button"
                    className={cn(
                      "group flex w-full items-start justify-between gap-4 pb-5 pt-2 text-left",
                      active === i ? "bg-white/[0.02]" : "hover:bg-white/[0.03]"
                    )}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    aria-expanded={active === i}
                  >
                    <h3
                      className={`text-[clamp(3rem,6vw,6.375rem)] leading-[1.1] tracking-[-0.07em] transition-colors duration-300 ${
                        active === i ? "font-medium text-white" : "font-medium text-white/15"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <span className="mt-2 text-base font-bold tracking-[-0.05em]">
                      <span className={active === i ? "text-[#39ff14]" : "text-white/20"}>{"{"}</span>
                      <span className={active === i ? "text-white" : "text-white/40"}>{item.num}</span>
                      <span className={active === i ? "text-[#39ff14]" : "text-white/20"}>{"}"}</span>
                    </span>
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden pr-14 text-base tracking-[-0.04em] text-white/70 transition-all duration-[350ms] ease-in-out",
                      active === i ? "max-h-28 pb-5 opacity-100" : "max-h-0 pb-0 opacity-0"
                    )}
                  >
                    <p className="max-w-[720px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-[110px] flex justify-center">
            <Link href="#pricing" className="inline-flex items-center gap-3 text-[22px] tracking-[-0.05em] text-white">
              <span className="text-[#39ff14]">↳</span>
              See pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function QuoteSection() {
  return (
    <section className="section-light py-40">
      <div className="mk-webcraft-container">
        <div className="mx-auto grid max-w-[1848px] gap-12 lg:grid-cols-[452px_1fr]">
          <div className="relative h-[612px] overflow-hidden">
            <img
              src="/images/founder.png"
              alt="Black and white portrait of a smiling person with curly hair"
              className="h-full w-full object-cover"
            />
            <span className="absolute right-6 top-6 h-[9px] w-[9px] border border-[#0c0c0c]" aria-hidden />
          </div>

          <div className="flex flex-col justify-center">
            <blockquote className="text-[clamp(2rem,4.5vw,4rem)] font-medium leading-[1.08] tracking-[-0.05em]">
              <span className="text-[#0c0c0c]">MK Webcraft helps companies create stunning</span>{" "}
              <span className="text-[#0c0c0c]/65">
                and strategically sound experiences that engage audiences. Our experts work
                closely with you to ensure that every detail is aligned with your goals.
              </span>
            </blockquote>
            <p className="mt-10 max-w-[740px] text-lg font-medium leading-[25.2px] tracking-[-0.04em] text-[rgba(12,12,12,0.6)]">
              From concept to launch, we craft digital solutions that not only look exceptional
              but also drive results, building connections that last.
            </p>
            <footer className="mt-12 border-t border-[#e4e4e4] pt-8">
              <p className="text-lg font-semibold">MK</p>
              <p className="text-sm font-medium text-[rgba(12,12,12,0.6)]">
                Founder and CEO
              </p>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
