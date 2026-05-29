"use client";

import { useState } from "react";
import { faqs } from "@/lib/content/home";
import { cn } from "@/lib/cn";

export function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-light pt-40" id="faq">
      <div className="mk-webcraft-container">
        <div className="mx-auto grid max-w-[1848px] gap-5 lg:grid-cols-[457px_1fr]">
          <div className="pt-2">
            <h2 className="text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.96] tracking-[-0.07em] text-[#0b0b0c]">
              FAQ
            </h2>
            <p className="mt-10 max-w-[350px] text-lg font-medium leading-[25.2px] tracking-[-0.04em] text-[rgba(12,12,12,0.6)]">
              We&apos;ve heard it all. Here&apos;s everything you need to know before working
              with us.
            </p>
            <button
              type="button"
              className="mt-12 inline-flex items-center gap-3 text-[22px] tracking-[-0.05em] text-[#0c0c0c]"
            >
              <span className="text-[#39ff14]">↳</span>
              Ask a question
            </button>
          </div>

          <div className="divide-y divide-[#e0e0e0] border-y border-[#e0e0e0]">
            {faqs.map((item, i) => (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 py-[34px] text-left"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  <span className="text-[18px] font-medium leading-[25.2px] tracking-[-0.04em] text-[#0c0c0c]">
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      "relative mt-1 block h-5 w-5 shrink-0 text-[#39ff14] transition-transform duration-[350ms] ease-in-out",
                      open === i ? "rotate-45" : "rotate-0"
                    )}
                    aria-hidden
                  >
                    <span className="absolute left-1/2 top-1/2 h-[1.5px] w-4 -translate-x-1/2 -translate-y-1/2 bg-current" />
                    <span className="absolute left-1/2 top-1/2 h-4 w-[1.5px] -translate-x-1/2 -translate-y-1/2 bg-current" />
                  </span>
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-[350ms] ease-in-out",
                    open === i ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="max-w-[900px] pb-3 text-base font-medium leading-[20.8px] tracking-[-0.04em] text-[rgba(12,12,12,0.6)]">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
