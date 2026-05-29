"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { faqs } from "@/lib/content/home";

export function ContactPageContent() {
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <div className="relative z-20 bg-white pt-28 text-[#0c0c0c]">
      <section className="section-light pb-16 pt-12">
        <div className="mk-webcraft-container">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_2fr]">
            <div className="pt-16">
              <p className="max-w-[24ch] text-sm leading-[1.35] tracking-[-0.03em] text-[#0c0c0c]/60">
                Whether it&apos;s a new project or a quick question, we&apos;re here to connect.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <Image
                  src="/images/figma/contact-john.jpg"
                  alt="John Taylor"
                  width={50}
                  height={50}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-base font-medium tracking-[-0.04em]">John Taylor</p>
                  <p className="text-sm tracking-[-0.03em] text-[#0c0c0c]/60">Member of the team</p>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.92] tracking-[-0.07em]">
                Let&apos;s talk
              </h1>
              <div className="mt-5 grid gap-8 bg-[#f5f5f5] p-8 lg:grid-cols-[1fr_1.1fr]">
                <div>
                  <p className="text-sm tracking-[-0.03em]">(510) 895-6500</p>
                  <p className="mt-1 text-[clamp(1.9rem,3.3vw,2.8rem)] font-semibold leading-[1.02] tracking-tighter">
                    hello@mkwebcraft.com
                  </p>

                  <div className="mt-8 space-y-5 text-sm leading-[1.4] tracking-[-0.03em] text-[#0c0c0c]/70">
                    <div>
                      <p className="font-medium text-[#0c0c0c]">Address</p>
                      <p>123 Creative Lane, Washington, D.C., 20001</p>
                    </div>
                    <div>
                      <p className="font-medium text-[#0c0c0c]">Office Hours</p>
                      <p>Monday to Friday: 9:00 AM - 6:00 PM</p>
                    </div>
                    <div className="space-y-1.5">
                      {["Twitter", "LinkedIn", "Instagram"].map((item) => (
                        <p key={item} className="inline-flex items-center gap-2">
                          <span className="text-[#39ff14]">↳</span>
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <form className="space-y-7" onSubmit={(event) => event.preventDefault()}>
                  <label className="block border-b border-black/18 pb-3 text-base tracking-[-0.03em] text-[#0c0c0c]/50">
                    Name *
                    <input
                      type="text"
                      className="mt-2 block w-full bg-transparent text-sm text-[#0c0c0c] outline-none placeholder:text-[#0c0c0c]/35"
                      placeholder="Your full name"
                    />
                  </label>
                  <label className="block border-b border-black/18 pb-3 text-base tracking-[-0.03em] text-[#0c0c0c]/50">
                    E-mail *
                    <input
                      type="email"
                      className="mt-2 block w-full bg-transparent text-sm text-[#0c0c0c] outline-none placeholder:text-[#0c0c0c]/35"
                      placeholder="you@example.com"
                    />
                  </label>
                  <label className="block border-b border-black/18 pb-3 text-base tracking-[-0.03em] text-[#0c0c0c]/50">
                    Phone
                    <input
                      type="tel"
                      className="mt-2 block w-full bg-transparent text-sm text-[#0c0c0c] outline-none placeholder:text-[#0c0c0c]/35"
                      placeholder="+1 (555) 000-0000"
                    />
                  </label>
                  <label className="block border-b border-black/18 pb-3 text-base tracking-[-0.03em] text-[#0c0c0c]/50">
                    Message (Tell us about your project)
                    <textarea
                      rows={2}
                      className="mt-2 block w-full resize-none bg-transparent text-sm text-[#0c0c0c] outline-none placeholder:text-[#0c0c0c]/35"
                      placeholder="Project details..."
                    />
                  </label>
                  <button type="submit" className="hover-underline inline-flex items-center gap-2 text-base font-medium tracking-[-0.03em] text-[#0c0c0c]">
                    <span className="text-[#39ff14]">↳</span>
                    Get in touch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light pb-20">
        <div className="mk-webcraft-container">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_2fr]">
            <p className="text-sm tracking-[-0.03em] text-[#0c0c0c]/60">Get in Touch</p>
            <div>
              <p className="max-w-[50ch] text-[clamp(1.45rem,2.5vw,2rem)] font-medium leading-[1.28] tracking-[-0.04em]">
                We&apos;d love to hear from you. Whether you&apos;re starting a new project, need help refining
                an idea, or just want to say hello, we&apos;re here to help.
              </p>
              <p className="mt-5 max-w-[62ch] text-base leading-[1.35] tracking-[-0.03em] text-[#0c0c0c]/60">
                Fill out the form below or reach out via email — we&apos;ll get back to you as soon as possible.
                Let&apos;s create something great together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light pb-24">
        <div className="mk-webcraft-container">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_2fr]">
            <div className="pt-1">
              <h2 className="text-[clamp(2.9rem,7vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.07em]">
                FAQ
              </h2>
              <p className="mt-8 max-w-[26ch] text-base leading-[1.35] tracking-[-0.03em] text-[#0c0c0c]/60">
                We&apos;ve heard it all. Here&apos;s everything you need to know before working with us.
              </p>
              <button type="button" className="mt-10 inline-flex items-center gap-2 text-[22px] tracking-[-0.04em]">
                <span className="text-[#39ff14]">↳</span>
                Ask a question
              </button>
            </div>

            <div className="divide-y divide-[#e0e0e0] border-y border-[#e0e0e0]">
              {faqs.map((item, index) => (
                <div key={item.q}>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 py-8 text-left"
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    aria-expanded={openFaq === index}
                  >
                    <span className="text-lg font-medium leading-[1.35] tracking-[-0.04em]">{item.q}</span>
                    <span
                      className={cn(
                        "relative mt-1 block h-5 w-5 shrink-0 text-[#39ff14] transition-transform duration-300",
                        openFaq === index ? "rotate-45" : "rotate-0"
                      )}
                      aria-hidden
                    >
                      <span className="absolute left-1/2 top-1/2 h-[1.5px] w-4 -translate-x-1/2 -translate-y-1/2 bg-current" />
                      <span className="absolute left-1/2 top-1/2 h-4 w-[1.5px] -translate-x-1/2 -translate-y-1/2 bg-current" />
                    </span>
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      openFaq === index ? "max-h-80 pb-5 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <p className="max-w-[84ch] text-base leading-[1.35] tracking-[-0.03em] text-[#0c0c0c]/60">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
