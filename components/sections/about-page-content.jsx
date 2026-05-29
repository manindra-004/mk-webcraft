"use client";

import Link from "next/link";
import Image from "next/image";

const teamMembers = [
  {
    name: "Lucas Johnson",
    role: "Full Stack Developer",
    image: "/images/work-1.jpg",
    offset: "lg:mt-0",
  },
  {
    name: "Sophia Reyes",
    role: "Creative Director",
    image: "/images/work-2.jpg",
    offset: "lg:mt-16",
  },
  {
    name: "Ethan Clarke",
    role: "UX/UI Designer",
    image: "/images/work-3.jpg",
    offset: "lg:mt-32",
  },
];

const awards = [
  {
    title: "Webby Awards Nominee",
    desc: "Recognized for excellence in web design and functionality.",
    year: "2024",
  },
  {
    title: "Awwwards Honorable Mention",
    desc: "Acknowledged for pushing creative boundaries in website development.",
    year: "2024",
  },
  {
    title: "CSS Design Awards Winner",
    desc: "Celebrated for outstanding user experience and interface design.",
    year: "2023",
  },
];

const partnerMarks = ["sTax", "haNV", "C3Z", "Studio", "Digital Sphere", "Lyniq Labs"];

export function AboutPageContent() {
  return (
    <div className="relative z-20 bg-white pt-28 text-[#0c0c0c]">
      <section className="section-light pb-24 pt-12">
        <div className="mk-webcraft-container">
          <h1 className="text-[clamp(3.6rem,9.2vw,7.2rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
            About us
          </h1>
          <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1fr_1.8fr]">
            <p className="text-base font-medium tracking-[-0.04em] text-[#0c0c0c]/60">Meet the Team</p>
            <div className="space-y-8">
              <p className="max-w-[36ch] text-base leading-[1.45] tracking-[-0.04em] text-[#0c0c0c]/60">
                We aimed to bring modern brands into a seamless digital space through smart design,
                clear messaging, and high-performing user experiences.
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/founder.png"
                  alt="John Taylor"
                  width={50}
                  height={50}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-medium tracking-[-0.04em]">John Taylor</p>
                  <p className="text-sm tracking-[-0.03em] text-[#0c0c0c]/60">Member of the team</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="max-w-[52ch] text-[clamp(1.4rem,2.1vw,1.9rem)] leading-[1.3] tracking-[-0.04em]">
                We do not believe in overcomplicating. We use the tools and strategies that make the
                most sense for your goals, combining strong creative direction with practical execution.
              </p>
              <p className="max-w-[56ch] text-[clamp(1.1rem,1.45vw,1.35rem)] leading-[1.35] tracking-[-0.04em] text-[#0c0c0c]/60">
                Every project starts with the same questions: what does it need to do, who is it for,
                and how can we make it as clear and effective as possible?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light pb-20">
        <div className="mk-webcraft-container">
          <div className="grid gap-10 border border-black/15 p-8 lg:grid-cols-[0.95fr_2fr] lg:p-10">
            <div className="flex flex-col justify-between gap-8">
              <div>
                <p className="font-bebas text-4xl tracking-[-0.04em] text-[#0c0c0c]">MK Webcraft</p>
                <h2 className="mt-8 text-[clamp(2.2rem,4vw,3.2rem)] font-semibold leading-[0.95] tracking-[-0.06em]">
                  Join us
                </h2>
                <p className="mt-4 max-w-[28ch] text-lg leading-[1.35] tracking-[-0.04em] text-[#0c0c0c]/60">
                  If you are ready to shape future-facing digital products, your journey can start here.
                </p>
              </div>
              <Link href="/#contact" className="hover-underline inline-flex items-center gap-2 text-xl font-medium tracking-[-0.04em]">
                <span className="text-[#39ff14]">↳</span>
                Let&apos;s talk
              </Link>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <article key={member.name} className={`lift-card ${member.offset}`}>
                  <div className="relative aspect-4/5 overflow-hidden bg-[#f2f2f2]">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <p className="mt-4 text-[22px] font-medium tracking-tighter">{member.name}</p>
                  <p className="text-sm tracking-[-0.03em] text-[#0c0c0c]/60">{member.role}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-light border-y border-black/10 py-8">
        <div className="mk-webcraft-container">
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {partnerMarks.map((mark) => (
              <div key={mark} className="flex h-20 items-center justify-center border border-black/10 text-xl font-semibold tracking-[-0.04em] text-[#0c0c0c]/70">
                {mark}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light pb-24 pt-28">
        <div className="mk-webcraft-container">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_2.2fr]">
            <p className="text-base font-medium tracking-[-0.04em] text-[#0c0c0c]/60">Achievements</p>
            <div>
              <h2 className="text-[clamp(3rem,8vw,6.7rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
                Awards
              </h2>
              <div className="mt-10 border-t border-[#dedede]">
                <div className="grid grid-cols-[1.5fr_1.8fr_auto] gap-5 border-b border-[#dedede] py-5 text-[13px] font-medium uppercase tracking-[-0.04em] text-[#0c0c0c]/60">
                  <p>Name of the award</p>
                  <p>Description</p>
                  <p className="text-right">Year</p>
                </div>
                {awards.map((award) => (
                  <div
                    key={award.title}
                    className="grid grid-cols-[1.5fr_1.8fr_auto] gap-5 border-b border-[#dedede] py-7"
                  >
                    <p className="text-[22px] font-medium leading-tight tracking-[-0.04em]">{award.title}</p>
                    <p className="text-base leading-[1.4] tracking-[-0.03em] text-[#0c0c0c]/60">{award.desc}</p>
                    <p className="text-right text-base leading-[1.4] tracking-[-0.03em]">{award.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light pb-24">
        <div className="mk-webcraft-container">
          <div className="relative h-[min(840px,62vh)] min-h-[420px] overflow-hidden bg-black">
            <Image
              src="/images/figma/team-hero.jpg"
              alt="Team relaxing outdoors"
              fill
              className="object-cover opacity-75"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-bebas text-[clamp(4rem,9vw,8rem)] tracking-[-0.06em] text-white">MK Webcraft</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 border-b border-[#dedede] py-6 text-sm tracking-[-0.03em] text-[#0c0c0c]/70 sm:grid-cols-3">
            <p>October, 2024</p>
            <p>First game after launching our biggest project</p>
            <p className="sm:text-right">Copenhagen</p>
          </div>
        </div>
      </section>

      <section className="section-light pb-20">
        <div className="mk-webcraft-container grid gap-10 lg:grid-cols-[0.85fr_2.2fr]">
          <p className="text-base font-medium tracking-[-0.04em] text-[#0c0c0c]/60">What Drives Us</p>
          <div className="space-y-6">
            <p className="max-w-[48ch] text-[clamp(1.35rem,2.15vw,1.9rem)] leading-[1.3] tracking-[-0.04em]">
              Every project is an opportunity to learn, grow, and create impact. We are passionate
              about solving complex challenges and turning ideas into meaningful digital products.
            </p>
            <p className="max-w-[52ch] text-[clamp(1.05rem,1.5vw,1.35rem)] leading-[1.35] tracking-[-0.04em] text-[#0c0c0c]/60">
              We are more than a team. From studio sessions to team outings, we value the relationships
              that strengthen our collaboration and creativity.
            </p>
          </div>
        </div>
      </section>

      <section className="section-light pb-24">
        <div className="mk-webcraft-container grid gap-5 lg:grid-cols-2">
          <div className="relative h-[360px] overflow-hidden lg:h-[710px]">
            <Image
              src="/images/work-4.jpg"
              alt="Team reviewing ideas on a wall"
              fill
              className="object-cover grayscale"
            />
          </div>
          <div className="relative h-[360px] overflow-hidden lg:h-[710px]">
            <Image
              src="/images/work-5.jpg"
              alt="Team in collaborative workspace"
              fill
              className="object-cover grayscale"
            />
          </div>
        </div>
      </section>

      <section className="section-dark relative overflow-hidden pb-28 pt-24">
        <div className="absolute inset-0 opacity-15">
          <Image src="/images/figma/contact-eye.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="mk-webcraft-container relative z-10">
          <h2 className="max-w-[16ch] text-[clamp(2.8rem,7.4vw,6.7rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-white">
            Let&apos;s bring your vision to life
          </h2>
          <div className="mt-16 grid gap-12 lg:grid-cols-[0.95fr_1.35fr]">
            <div className="space-y-8">
              <p className="max-w-[34ch] text-lg leading-[1.4] tracking-[-0.04em] text-white/70">
                John is here to make sure your journey with us is smooth and successful.
                Reach out anytime and we will help you move fast with confidence.
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/founder.png"
                  alt="John Taylor"
                  width={60}
                  height={60}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-medium tracking-[-0.04em] text-white">John Taylor</p>
                  <p className="text-base tracking-[-0.03em] text-white/60">Client Success Manager</p>
                </div>
              </div>
            </div>
            <form className="space-y-7" id="contact-form" onSubmit={(event) => event.preventDefault()}>
              <label className="block border-b border-white/30 pb-3 text-xl tracking-[-0.04em] text-white/60">
                Name *
                <input
                  type="text"
                  className="mt-2 block w-full bg-transparent text-base text-white outline-none placeholder:text-white/40"
                  placeholder="Your name"
                />
              </label>
              <label className="block border-b border-white/30 pb-3 text-xl tracking-[-0.04em] text-white/60">
                E-mail *
                <input
                  type="email"
                  className="mt-2 block w-full bg-transparent text-base text-white outline-none placeholder:text-white/40"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block border-b border-white/30 pb-3 text-xl tracking-[-0.04em] text-white/60">
                Message
                <textarea
                  rows={3}
                  className="mt-2 block w-full resize-none bg-transparent text-base text-white outline-none placeholder:text-white/40"
                  placeholder="Tell us about your project"
                />
              </label>
              <button
                type="submit"
                className="hover-underline inline-flex items-center gap-2 text-[22px] font-medium tracking-[-0.04em] text-white"
              >
                <span className="text-[#39ff14]">↳</span>
                Get in touch
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
