import Image from "next/image";
import Link from "next/link";
import { stats } from "@/lib/content/home";

export function StatsSection() {
  return (
    <section id="stats" className="section-light relative z-30 pt-40 pb-[220px]">
      <div className="mk-webcraft-container w-full">
        {/* Figma: Let's talk (left) + heading (flex-1, max 840px) — full row width */}
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:gap-[min(22vw,350px)]">
          <Link
            href="#contact"
            className="inline-flex shrink-0 items-center gap-3 text-[22px] font-medium tracking-[-0.05em] text-[#0c0c0c]"
          >
            <span className="text-[#39ff14]">↳</span>
            Let&apos;s talk
          </Link>

          <h2 className="min-w-0 flex-1 max-w-[840px] text-[46px] font-semibold leading-[50.6px] tracking-[-0.07em] text-[#0c0c0c]">
            Our work speaks through numbers.
            <br />
            Here&apos;s what we&apos;ve achieved so far.
          </h2>
        </div>

        {/* Figma: 4 equal columns, 20px gap, full container width */}
        <div className="mt-[100px] grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.title} className="flex min-w-0 flex-col gap-[30px]">
              <p
                data-count-to={stat.value}
                data-count-suffix={stat.suffix}
                className="text-[clamp(3.5rem,6vw,5.625rem)] font-semibold leading-none tracking-[-0.07em] text-[#0c0c0c]"
              >
                0{stat.suffix}
              </p>
              <div className="relative border-t border-[#d6d6d6] pt-10">
                <h3 className="text-[26px] font-semibold leading-[33.8px] tracking-[-0.04em]">
                  {stat.title}
                </h3>
                <p className="mt-2 text-base font-medium leading-[20.8px] tracking-[-0.04em] text-[rgba(12,12,12,0.6)]">
                  {stat.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
