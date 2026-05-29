import Link from "next/link";
import { teamStats } from "@/lib/content/home";

export function TeamSection() {
  return (
    <section className="section-dark relative overflow-hidden pb-[60px]">
      <div className="absolute inset-0">
        <img
          src="/images/figma/team-hero.jpg"
          alt="Team collaboration background"
          className="h-full w-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 mk-webcraft-container pt-7">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-1 text-white">
            <span className="font-bebas text-[50px] leading-[42.5px] tracking-[-2px]">MK Webcraft</span>
            <span className="font-bebas text-[18px] leading-[15.3px] tracking-[-0.72px]">®</span>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <span className="flex -space-x-4">
              <span className="h-[54px] w-[54px] rounded-full border-2 border-white/90 bg-white/20" />
              <span className="h-[54px] w-[54px] rounded-full border-2 border-white/90 bg-white/30" />
              <span className="h-[54px] w-[54px] rounded-full border-2 border-white/90 bg-white/40" />
              <span className="h-[54px] w-[54px] rounded-full border-2 border-white/90 bg-white/50" />
            </span>
            <span className="h-[54px] w-[54px] rounded-full bg-[#0c0c0c] text-center text-[15px] leading-[54px] text-white">
              20+
            </span>
          </div>
        </div>

        <div className="mt-[320px]">
          <h2 className="text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.96] tracking-[-0.07em] text-white">
            Meet our team
          </h2>
          <p className="mt-6 max-w-[520px] text-lg font-medium leading-[25.2px] tracking-[-0.04em] text-white/70">
            A diverse group of creators, strategists, and developers driven by a shared passion
            for crafting impactful digital experiences.
          </p>
        </div>

        <div className="mt-[170px] grid gap-5 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end">
          {teamStats.map((item) => (
            <div key={item.value} className="relative border-b border-white/25 pb-5 pt-5">
              <span className="absolute right-0 top-0 corner-accent" aria-hidden />
              <div className="flex items-center gap-5">
                <p
                  className="text-[54px] font-medium leading-[62.1px] tracking-[-0.07em] text-white"
                  data-count-to={item.value}
                >
                  {item.value}
                </p>
                <div>
                  <p className="text-base font-medium leading-[20.8px] tracking-[-0.04em] text-white">
                    {item.label}
                  </p>
                  <p className="text-base font-medium leading-[20.8px] tracking-[-0.04em] text-white/60">
                    {item.sub}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <Link href="#about" className="inline-flex items-center gap-3 whitespace-nowrap text-[22px] tracking-[-0.05em] text-white">
            <span className="text-[#39ff14]">↳</span>
            Meet our team
          </Link>
        </div>
      </div>
    </section>
  );
}
