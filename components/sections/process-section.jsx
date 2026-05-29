import Link from "next/link";
import { processSteps } from "@/lib/content/home";

export function ProcessSection() {
  return (
    <section className="section-light pt-40">
      <div className="mk-webcraft-container">
        <div className="mx-auto grid max-w-[1848px] gap-5 lg:grid-cols-[1fr_1fr]">
          <div className="max-w-[914px]">
            <h2 className="text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.96] tracking-[-0.07em] text-[#0b0b0c]">
              Our process
            </h2>
            <p className="mt-10 max-w-[510px] text-lg font-medium leading-[25.2px] tracking-[-0.04em] text-[rgba(12,12,12,0.6)]">
              Our four-step process keeps you informed and involved at every stage, ensuring
              the final result meets your goals and resonates with your audience.
            </p>
            <Link href="#contact" className="mt-12 inline-flex items-center gap-3 text-[22px] tracking-[-0.05em] text-[#0c0c0c]">
              <span className="text-[#39ff14]">↳</span>
              Schedule a consultation
            </Link>
          </div>

          <div className="space-y-[50px]">
            {processSteps.map((step) => (
              <article key={step.num} className="relative border-t border-[#dedede] pt-10">
                <span className="absolute right-0 top-[30px] corner-accent" aria-hidden />
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#dedede] text-xs font-semibold text-[#0b0b0c]">
                    {step.num}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[26px] font-semibold leading-[33.8px] tracking-[-0.04em] text-[#0c0c0c]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base font-medium leading-[20.8px] tracking-[-0.04em] text-[rgba(12,12,12,0.6)]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
