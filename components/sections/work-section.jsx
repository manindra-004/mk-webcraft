import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content/home";

export function WorkSection() {
  return (
    <section className="section-light pb-40 pt-0" id="work" data-work-section>
      <div className="mk-webcraft-container flex flex-col gap-[110px]">
        <div
          className="z-10 flex flex-col items-center gap-[76px] bg-white/95 py-8 backdrop-blur-[2px]"
          data-work-heading
        >
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2.5">
              <span className="corner-accent" aria-hidden />
              <span className="text-[13px] font-semibold uppercase tracking-[-0.04em]">
                Selected work
              </span>
            </div>
            <h2 className="text-center text-[clamp(2.5rem,8vw,7rem)] font-semibold leading-[0.96] tracking-[-0.07em]">
              Proven results,
              <br />
              stunning designs
            </h2>
          </div>
          <p className="font-bebas text-[50px] leading-none tracking-[-2px]">2K25</p>
        </div>

        <div className="relative z-40 flex flex-col gap-2.5" data-work-projects>
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white via-20% to-white"
            aria-hidden
          />

          <div className="relative z-40 flex flex-col gap-4 pt-10">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`group lift-card relative mx-auto w-full ${
                  project.large ? "max-w-[1200px]" : "max-w-[731px]"
                } ${index % 2 === 1 && !project.large ? "lg:ml-auto lg:mr-0" : ""} ${
                  index % 2 === 0 && !project.large ? "lg:mr-auto lg:ml-0" : ""
                }`}
              >
                <div className="relative aspect-[731/445] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="zoom-media object-cover"
                    sizes="(max-width: 1200px) 100vw, 731px"
                  />
                  <span className="absolute right-6 top-6">
                    <span className="corner-accent block h-[7px] w-[7px]" />
                  </span>
                </div>
                <div className="mt-7 flex flex-col gap-6">
                  <div>
                    <h3 className="text-[20.8px] font-semibold leading-[27px] tracking-[-0.04em]">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-[14.4px] font-medium leading-[20px] tracking-[-0.04em] text-[rgba(12,12,12,0.6)]">
                      {project.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.href || "#work"}
                    className="hover-underline inline-flex items-center gap-2 text-sm font-semibold tracking-[-0.04em] text-[#0c0c0c]"
                  >
                    <span className="text-[#39ff14]">↳</span>
                    View project
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <Link
            href="#work"
            className="hover-underline inline-flex items-baseline gap-1 text-base font-semibold tracking-[-0.04em]"
          >
            All cases
            <sup className="text-[11px] font-semibold text-[#39ff14]">(17)</sup>
          </Link>
        </div>
      </div>
    </section>
  );
}
