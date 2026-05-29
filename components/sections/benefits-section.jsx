export function BenefitsSection() {
  return (
    <section className="section-light pt-[199px] pb-40" id="about">
      <div className="mk-webcraft-container">
        <div className="mx-auto max-w-[1848px]">
          <div className="mx-auto w-full min-w-0 text-center">
            <h2 className="text-[clamp(2.75rem,7vw,7rem)] font-semibold leading-[0.96] tracking-[-0.07em] text-[#0b0b0c]">
              Your goals, our priority
            </h2>
            <p className="mx-auto mt-10 max-w-[510px] text-lg font-medium leading-[25.2px] tracking-[-0.04em] text-[rgba(12,12,12,0.6)]">
              From concept to launch, we&apos;re committed to your success with rapid response
              times and personalized attention to detail.
            </p>
          </div>

          <div className="mt-[90px] grid gap-5 lg:grid-cols-4">
            <article className="theme-card-light overflow-hidden">
              <div className="relative h-[355px] overflow-hidden">
                <img
                  src="/images/figma/benefits-hands.jpg"
                  alt="Two hands in an elegant gesture"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-10 py-10">
                <h3 className="text-[26px] font-semibold leading-[33.8px] tracking-[-0.04em] text-[#0c0c0c]">
                  24/7 priority care
                </h3>
                <p className="mt-3 text-base font-medium leading-[20.8px] tracking-[-0.04em] text-[rgba(12,12,12,0.6)]">
                  Receive priority treatment for urgent tasks, with an average response time of
                  24 hours for high-priority clients.
                </p>
              </div>
            </article>

            <article className="theme-card-light px-10 py-10">
              <h3 className="max-w-[220px] text-[26px] font-semibold leading-[33.8px] tracking-[-0.04em] text-[#0c0c0c]">
                Tailored tweaks for perfection
              </h3>
              <p className="mt-3 text-base font-medium leading-[20.8px] tracking-[-0.04em] text-[rgba(12,12,12,0.6)]">
                Request custom revisions at any time. We provide up to 5 minor revisions
                post-launch to keep things looking fresh.
              </p>
              <div className="mt-5 flex -space-x-2.5">
                <span className="h-8 w-8 rounded-full border border-white bg-[#d8cfc7]" />
                <span className="h-8 w-8 rounded-full border border-white bg-[#d6d6d6]" />
                <span className="h-8 w-8 rounded-full border border-white bg-[#c8d8dc]" />
                <span className="h-8 w-8 rounded-full border border-white bg-[#d5cdd7]" />
              </div>
              <div className="theme-card-light mt-8 rounded-2xl p-5">
                <p className="text-sm font-medium text-[#0c0c0c]">Post-Launch requests</p>
                <ul className="mt-3 space-y-2.5 text-xs text-[#0c0c0c]/60">
                  <li className="flex items-start gap-2">
                    <span className="mt-[3px] h-3.5 w-3.5 rounded-full bg-[#ff574d]" />
                    Align text margins properly
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-[3px] h-3.5 w-3.5 rounded-full bg-[#ff574d]" />
                    Increase mobile menu font size
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-[3px] h-3.5 w-3.5 rounded-full bg-[#ff574d]" />
                    Replace images
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-[3px] h-3.5 w-3.5 rounded-full border border-black/20 bg-white" />
                    Fix button color: #39FF14
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-[3px] h-3.5 w-3.5 rounded-full border border-black/20 bg-white" />
                    Speed up page loading
                  </li>
                </ul>
                <p className="mt-4 border-t border-black/10 pt-3 text-[11px] text-[#0c0c0c]/40">
                  Valid for 3 months after launch
                </p>
              </div>
            </article>

            <article className="theme-card-dark relative overflow-hidden text-white">
              <div className="absolute inset-0 opacity-40 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-size-[40px_40px]" />
              <div className="relative z-10 flex h-full flex-col px-8 py-9">
                <p className="text-center text-[11px] font-medium tracking-[-0.03em] text-white/70">
                  Download brand kit
                </p>
                <div className="mt-4 flex items-center justify-center gap-3 text-xs text-white/70">
                  <span>□</span>
                  <span>◇</span>
                  <span>◌</span>
                  <span>Aa</span>
                  <span>≡</span>
                </div>

                <div className="relative mx-auto mt-14 flex h-[112px] w-[112px] items-center justify-center rounded-full bg-[#39ff14] shadow-[0_0_44px_rgba(57,255,20,0.58),0_0_58px_rgba(0,247,255,0.22)]">
                  <span className="text-2xl">☁</span>
                  <span className="absolute right-1 top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-[10px] font-semibold text-[#39ff14]">
                    6
                  </span>
                </div>

                <h3 className="mt-12 text-center text-[42px] font-semibold leading-[0.95] tracking-tighter">
                  Brand kit at your fingertips
                </h3>
                <p className="mx-auto mt-4 max-w-[260px] text-center text-sm leading-[1.45] tracking-[-0.03em] text-white/70">
                  Receive a full branding toolkit, from logos to color schemes and typography,
                  download all assets or share them with your team.
                </p>
              </div>
            </article>

            <article className="theme-card-dark relative min-h-[640px] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_14%,rgba(120,255,204,0.46)_0%,rgba(52,255,149,0.44)_30%,rgba(0,247,255,0.34)_58%,rgba(84,63,184,0.58)_82%,#0a1020_100%)]" />

              <div className="absolute inset-x-6 bottom-0 top-12 rounded-[36px] border border-black/20 bg-black/12" />

              <div className="absolute inset-x-0 top-[70px] text-center text-[58px] font-semibold leading-none tracking-tighter text-white/92">
                11:11
              </div>

              <div className="absolute inset-x-6 top-[200px] rounded-[20px] bg-white/92 px-6 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.26)]">
                <p className="text-[13px] font-medium text-[#0c0c0c]/88">Designer · Today 09:17</p>
                <p className="mt-1.5 text-[13px] leading-[1.34] text-[#0c0c0c]/72">
                  Logo update complete, ready for your review!
                </p>
              </div>

              <div className="absolute inset-x-0 bottom-[102px] text-center text-white">
                <p className="text-[26px] font-semibold leading-none tracking-tighter">MK Webcraft</p>
                <p className="mt-2 text-[18px] font-medium text-white/82">Real-Time Support</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
