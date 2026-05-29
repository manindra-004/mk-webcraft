import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/content/projects";

export function ProjectDetailPageContent({ project }) {
  const latestProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <div className="relative z-20 bg-white pt-20 text-[#0c0c0c]">
      <section className="section-light">
        <div className="mk-webcraft-container py-6">
          <div className="relative h-[380px] overflow-hidden bg-black sm:h-[480px] lg:h-[560px]">
            <Image src={project.image} alt={project.title} fill className="object-cover opacity-70" priority />
            <div className="absolute inset-x-7 bottom-8 sm:bottom-10">
              <p className="text-xs uppercase tracking-[0.12em] text-white/70">MK Webcraft</p>
              <h1 className="mt-3 text-[clamp(2rem,5vw,3.7rem)] font-semibold leading-[0.96] tracking-tighter text-white">
                {project.title}
              </h1>
            </div>
          </div>

          <div className="grid gap-5 border-b border-[#e8e8e8] py-5 text-sm tracking-[-0.03em] text-[#0c0c0c]/60 sm:grid-cols-3">
            <p>10 Oct, 2024</p>
            <p>{project.category}</p>
            <p className="sm:text-right">UI/UX + Development</p>
          </div>
        </div>
      </section>

      <section className="section-light pb-18 pt-14">
        <div className="mk-webcraft-container grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="space-y-8">
            <p className="text-sm font-medium tracking-[-0.04em] text-[#0c0c0c]/60">Client · MK Webcraft</p>
            <div className="flex items-center gap-4">
              <Image
                src="/images/founder.png"
                alt="John Taylor"
                width={52}
                height={52}
                className="h-[52px] w-[52px] rounded-full object-cover"
              />
              <div>
                <p className="text-base font-medium tracking-[-0.04em]">John Taylor</p>
                <p className="text-sm tracking-[-0.03em] text-[#0c0c0c]/60">Client Success Manager</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <p className="max-w-[46ch] text-[clamp(1.28rem,2.1vw,1.72rem)] leading-[1.3] tracking-[-0.04em]">
              This project started from a simple goal: build an experience that is clear, useful,
              and visually distinct while staying easy to navigate.
            </p>
            <p className="max-w-[54ch] text-[clamp(1.02rem,1.45vw,1.32rem)] leading-[1.35] tracking-[-0.04em] text-[#0c0c0c]/60">
              We approached the brief through strategy, careful information hierarchy,
              and high-end motion behavior to create a digital product that feels modern and confident.
            </p>
          </div>
        </div>
      </section>

      <section className="section-light pb-16">
        <div className="mk-webcraft-container">
          <div className="relative h-[360px] overflow-hidden bg-[#f2f2f2] sm:h-[480px] lg:h-[660px]">
            <Image src="/images/work-5.jpg" alt="Project visual detail" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="section-light pb-16">
        <div className="mk-webcraft-container grid gap-10 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="space-y-6">
            <p className="max-w-[44ch] text-[clamp(1.2rem,1.9vw,1.55rem)] leading-[1.3] tracking-[-0.04em]">
              Designing at this level means balancing visual expression with usability,
              maintaining clarity while introducing a strong editorial direction.
            </p>
            <p className="max-w-[54ch] text-base leading-[1.38] tracking-[-0.03em] text-[#0c0c0c]/60">
              We refined spacing rhythm, type hierarchy, and image treatments to make
              each section flow naturally as users scroll through the story.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[180px] overflow-hidden bg-[#f2f2f2] sm:h-[230px]">
              <Image src="/images/work-2.jpg" alt="Mobile concept one" fill className="object-cover" />
            </div>
            <div className="relative h-[180px] overflow-hidden bg-[#f2f2f2] sm:h-[230px]">
              <Image src="/images/work-3.jpg" alt="Mobile concept two" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-light pb-16">
        <div className="mk-webcraft-container">
          <div className="relative h-[300px] overflow-hidden bg-[#f2f2f2] sm:h-[420px] lg:h-[560px]">
            <Image src="/images/work-1.jpg" alt="Project showcase image" fill className="object-cover" />
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <p className="max-w-[44ch] text-base leading-[1.38] tracking-[-0.03em] text-[#0c0c0c]/60">
              By crafting this experience layer by layer, we created a result that feels
              polished, scalable, and tailored to the brand voice.
            </p>
            <p className="max-w-[44ch] text-base leading-[1.38] tracking-[-0.03em] text-[#0c0c0c]/60 lg:justify-self-end">
              Every decision was made to support performance, readability, and visual impact
              across desktop and mobile contexts.
            </p>
          </div>
        </div>
      </section>

      <section className="section-light pb-16">
        <div className="mk-webcraft-container">
          <div className="relative h-[260px] overflow-hidden bg-black sm:h-[340px] lg:h-[430px]">
            <Image src="/images/figma/contact-eye.jpg" alt="Creative abstract visual" fill className="object-cover opacity-70" />
          </div>
        </div>
      </section>

      <section className="section-light pb-24">
        <div className="mk-webcraft-container">
          <h2 className="text-[clamp(2rem,4.2vw,3.8rem)] font-semibold leading-[0.95] tracking-[-0.06em]">
            Latest projects
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {latestProjects.map((item) => (
              <Link key={item.slug} href={`/projects/${item.slug}`} className="group block">
                <article>
                  <div className="relative aspect-731/445 overflow-hidden bg-[#f3f3f3]">
                    <Image src={item.image} alt={item.title} fill className="zoom-media object-cover" />
                    <span className="corner-accent absolute right-4 top-4" aria-hidden />
                  </div>
                  <h3 className="mt-3 text-[clamp(1.2rem,1.85vw,1.6rem)] font-semibold tracking-tighter">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm tracking-[-0.03em] text-[#0c0c0c]/60">{item.description}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
