export function CtaSection() {
  return (
    <section className="section-dark relative overflow-hidden pb-40 pt-[159px]" id="contact">
      <div className="mk-webcraft-container">
        <div className="relative mx-auto max-w-[1848px]">
          <div className="absolute right-0 top-0 flex items-center gap-2.5">
            <span className="corner-accent" aria-hidden />
            <span className="text-[13px] font-semibold uppercase tracking-[-0.04em] text-white">Contact us</span>
          </div>

          <h2 className="text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.96] tracking-[-0.07em] text-white">
            Let&apos;s bring your vision to life
          </h2>

          <div className="mt-[100px] grid gap-5 lg:grid-cols-[1fr_1.2fr]">
            <div className="max-w-[762px]">
              <p className="max-w-[560px] text-lg font-medium leading-[25.2px] tracking-[-0.04em] text-white/60">
                John is here to ensure your experience with us is smooth and successful. Reach
                out anytime — he&apos;s here to make sure you feel confident and supported
                throughout your journey with us.
              </p>
              <div className="mt-[50px] flex items-center gap-5">
                <img
                  src="/images/figma/contact-john.jpg"
                  alt="John Taylor"
                  className="h-[60px] w-[60px] rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-medium leading-[25.2px] tracking-[-0.04em] text-white">
                    John Taylor
                  </p>
                  <p className="text-base font-medium leading-[20.8px] tracking-[-0.04em] text-white/60">
                    Client Success Manager
                  </p>
                </div>
              </div>
            </div>

            <form className="max-w-[1066px]" action="#" method="post">
              <label className="block border-b border-white/30 pb-[18px] pt-[2px] text-[20px] tracking-[-0.04em] text-white/50">
                Name *
              </label>
              <label className="mt-[34px] block border-b border-white/30 pb-[18px] pt-[2px] text-[20px] tracking-[-0.04em] text-white/50">
                E-mail *
              </label>
              <label className="mt-[34px] block border-b border-white/30 pb-[18px] text-[20px] tracking-[-0.04em] text-white/50">
                Message (Tell us about your project)
              </label>
              <button
                type="submit"
                className="btn-sweep mt-20 inline-flex items-center gap-3 text-[22px] tracking-[-0.05em] text-white"
              >
                <span className="text-[#39ff14]">↳</span>
                Get in touch
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
