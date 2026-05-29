"use client";

import { useState } from "react";
import { pricingPlans } from "@/lib/content/home";
import { cn } from "@/lib/cn";

export function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="section-light pt-[169px]" id="pricing">
      <div className="mk-webcraft-container">
        <h2 className="text-center text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.96] tracking-[-0.07em]">
          Flexible pricing
        </h2>
        <p className="mx-auto mt-8 max-w-[510px] text-center text-lg font-medium leading-[25.2px] tracking-[-0.04em] text-[rgba(12,12,12,0.6)]">
          Choose the plan that best fits your needs. From a solid foundation to a fully
          optimized solution
        </p>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3">
            <span className={`text-sm ${annual ? "text-[#0c0c0c]/60" : "text-[#0c0c0c]"}`}>Monthly</span>
            <button
              type="button"
              className="relative h-11 w-[78px] rounded-full bg-[#39ff14] p-[5px]"
              onClick={() => setAnnual(!annual)}
              aria-label="Toggle annual pricing"
            >
              <span
                className={cn(
                  "block h-[34px] w-[34px] rounded-full bg-white transition-transform",
                  annual ? "translate-x-[34px]" : "translate-x-0"
                )}
              />
            </button>
            <span className={`text-sm ${annual ? "text-[#0c0c0c]" : "text-[#0c0c0c]/60"}`}>Annual</span>
            <span className="rounded-full bg-[#39ff14]/10 px-[10px] py-[5px] text-xs font-semibold text-[#39ff14]">
              Save 30%
            </span>
          </div>
        </div>

        <div className="theme-card-light mt-12 p-[50px]">
          <div className="grid gap-5 lg:grid-cols-3">
            {pricingPlans.map((plan) => {
              const price = annual ? Math.round(plan.price * 0.8) : plan.price;
              return (
                <article
                  key={plan.name}
                  className={cn(
                    "lift-card theme-card-light flex flex-col p-[50px]",
                    plan.popular ? "ring-1 ring-[#39ff14]/35" : ""
                  )}
                >
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-medium">{plan.name}</h3>
                    {plan.popular && (
                      <span className="rounded-full bg-[#39ff14]/10 px-2 py-1 text-[10px] font-semibold text-[#39ff14]">
                        Most popular
                      </span>
                    )}
                    {plan.premium && (
                      <span className="rounded-full bg-black px-2 py-1 text-[10px] font-semibold text-white">
                        Premium
                      </span>
                    )}
                  </div>

                  <p className="mt-6 flex items-baseline gap-2">
                    {plan.originalPrice && (
                      <span className="text-[34px] font-semibold leading-none tracking-[-0.04em] text-[#0c0c0c]/35 line-through">
                        ${plan.originalPrice}
                      </span>
                    )}
                    <span
                      key={`${plan.name}-${price}`}
                      className="price-flip text-[42px] font-semibold leading-[46.2px] tracking-[-0.07em]"
                    >
                      ${price}
                    </span>
                    <span className="text-[22px] tracking-[-0.05em] text-[#0c0c0c]/60">/month</span>
                  </p>

                  <p className="mt-4 text-sm font-medium leading-[19.6px] tracking-[-0.04em] text-[#0c0c0c]/60">
                    {plan.desc}
                  </p>

                  <button
                    type="button"
                    className={cn(
                      "btn-sweep mt-6 inline-flex items-center justify-center gap-2 rounded-full py-4 text-[20px] font-semibold tracking-[-0.05em]",
                      plan.popular ? "bg-[#39ff14] text-white" : "bg-white text-[#0c0c0c]"
                    )}
                  >
                    <span className="text-[#39ff14]">↳</span>
                    Choose this plan
                  </button>

                  <p className="mt-8 text-xs font-semibold text-[#0c0c0c]">What&apos;s Included:</p>
                  <ul className="mt-3 space-y-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[#0c0c0c]/70">
                        <span className="mt-1 text-[#39ff14]">⌟</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
