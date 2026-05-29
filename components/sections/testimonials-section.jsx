import { testimonials } from "@/lib/content/home";

export function TestimonialsSection() {
  return (
    <section className="section-light pt-40">
      <div className="mk-webcraft-container">
        <div className="mx-auto grid max-w-[1848px] gap-5 lg:grid-cols-3">
          <article className="theme-card-light relative flex min-h-[600px] flex-col justify-between px-10 py-10">
            <span className="absolute right-[220px] top-[30px] corner-accent" aria-hidden />
            <div>
              <div className="flex items-start gap-1 text-[#0c0c0c]">
                <span className="font-bebas text-[35px] leading-[29.75px] tracking-[-1.4px]">MK Webcraft</span>
                <span className="font-bebas text-[14px] leading-[11.9px] tracking-[-0.56px]">®</span>
              </div>
              <h2 className="mt-[60px] text-[46px] font-semibold leading-[50.6px] tracking-[-0.07em] text-[#0c0c0c]">
                Success
                <br />
                stories
              </h2>
            </div>
            <p className="max-w-[260px] self-end text-right text-lg font-medium leading-[25.2px] tracking-[-0.04em] text-[rgba(12,12,12,0.6)]">
              Our work speaks for itself, but our clients say it even better.
            </p>
          </article>

          <article className="relative min-h-[600px] overflow-hidden bg-black p-10 text-white">
            <img
              src="/images/figma/testimonial-sarah.jpg"
              alt="Sarah testimonial"
              className="absolute inset-5 h-[calc(100%-40px)] w-[calc(100%-40px)] object-cover opacity-90"
            />
            <div className="absolute inset-5 bg-gradient-to-t from-[#39ff14]/70 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-end">
              <p className="text-[22px] font-medium leading-[28.6px] tracking-[-0.05em]">
                {testimonials[0].quote}
              </p>
              <div className="mt-8 border-t border-white/30 pt-7">
                <p className="text-base font-medium">{testimonials[0].name}</p>
                <p className="text-sm text-white/80">{testimonials[0].role}</p>
              </div>
            </div>
          </article>

          <article className="theme-card-light min-h-[600px] p-10">
            <p className="text-black">★★★★★</p>
            <p className="mt-5 text-[22px] font-medium leading-[28.6px] tracking-[-0.05em] text-[#0c0c0c]">
              {testimonials[2].quote}
            </p>

            <div className="mt-[80px] flex gap-8">
              <div>
                <p
                  className="text-[36px] font-semibold leading-[46.8px] tracking-[-0.04em] text-[#0c0c0c]"
                  data-count-to="11"
                  data-count-prefix="+"
                  data-count-suffix="%"
                >
                  +11%
                </p>
                <p className="text-sm text-[#0c0c0c]/60">Customer retention</p>
              </div>
              <div>
                <p
                  className="text-[36px] font-semibold leading-[46.8px] tracking-[-0.04em] text-[#0c0c0c]"
                  data-count-to="52"
                  data-count-prefix="+"
                  data-count-suffix="%"
                >
                  +52%
                </p>
                <p className="text-sm text-[#0c0c0c]/60">Conversion rate</p>
              </div>
            </div>

            <div className="mt-10 border-t border-black/20 pt-6">
              <div className="flex items-center gap-4">
                <img
                  src="/images/figma/testimonial-andy.jpg"
                  alt="Andy Styles"
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-base font-medium text-[#0c0c0c]">Andy Styles</p>
                  <p className="text-sm text-[#0c0c0c]/60">Founder of a Tech Startup</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
