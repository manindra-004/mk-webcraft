"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CtaSection } from "@/components/sections/cta-section";
import { projectFilters, projects } from "@/lib/content/projects";

export function ProjectsPageContent() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="relative z-20 bg-white pt-28 text-[#0c0c0c]">
      <section className="section-light pb-20 pt-10">
        <div className="mk-webcraft-container">
          <div className="grid items-end gap-6 border-b border-black/10 pb-8 lg:grid-cols-[1fr_1fr]">
            <h1 className="text-[clamp(3.1rem,7.6vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.07em]">
              Projects
            </h1>
            <p className="max-w-[34ch] text-base leading-[1.3] tracking-[-0.04em] text-[#0c0c0c]/60 lg:justify-self-end">
              Every project we deliver is a reflection of our commitment to quality,
              strategic thinking, and real-world outcomes.
            </p>
          </div>

          <div className="mt-5 border-b border-black/10 pb-5">
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-black/10 bg-[#f5f5f5] p-1">
              {projectFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`relative rounded-full px-4 py-2 text-sm tracking-[-0.04em] transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-[#0c0c0c] font-semibold text-white shadow-[0_10px_22px_rgba(12,12,12,0.26)]"
                    : "text-[#0c0c0c]/55 hover:bg-white hover:text-[#0c0c0c]"
                }`}
              >
                {activeFilter === filter && (
                  <span
                    aria-hidden
                    className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#39ff14]"
                  />
                )}
                {filter}
              </button>
              ))}
            </div>
          </div>

          <div className="mt-7 grid gap-x-5 gap-y-10 md:grid-cols-2">
            {visibleProjects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="group block">
                <article>
                  <div className="relative aspect-731/445 overflow-hidden bg-[#f1f1f1]">
                    <Image src={project.image} alt={project.title} fill className="zoom-media object-cover" />
                    <span className="corner-accent absolute right-4 top-4" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-[clamp(1.35rem,2vw,1.65rem)] font-semibold leading-[1.1] tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm tracking-[-0.03em] text-[#0c0c0c]/60">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
