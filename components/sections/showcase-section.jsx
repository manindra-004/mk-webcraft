export function ShowcaseSection() {
  return (
    <section className="section-light">
      {/* Image + mix-blend headlines */}
      <div className="mk-webcraft-container relative h-[662px] w-full overflow-hidden">
        <div className="absolute left-1/4 right-1/4 top-1/2 aspect-[924/662] -translate-y-1/2 overflow-hidden">
          <video
            className="absolute top-0 left-[-1.99%] h-full w-[103.97%] max-w-none object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/product-bottle.jpg"
            aria-label="Black cosmetic product bottle against a dark background"
          >
            <source src="/videos/product-bottle.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="js-showcase-headline pointer-events-none absolute inset-0 flex flex-col items-center justify-center mix-blend-difference">
          <p className="js-showcase-scale-text whitespace-nowrap text-center text-[clamp(2.5rem,14.2vw,15.5rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white">
            From ordinary
          </p>
          <p className="js-showcase-scale-text -mt-1 whitespace-nowrap text-center text-[clamp(2.5rem,14.2vw,15.5rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white sm:-mt-2">
            to extraordinary
          </p>
        </div>
      </div>

      {/* Caption + logo + scroll arrow */}
      <div className="relative border-y border-[#e4e4e4]">
        <div className="mk-webcraft-container relative flex justify-center py-[110px] pb-[210px]">
          <div className="flex max-w-[290px] flex-col items-center gap-10 text-center">
            <p className="text-lg font-medium leading-[25.2px] tracking-[-0.04em] text-[rgba(12,12,12,0.6)]">
              Design that&apos;s built to last and grow with your business
            </p>
            <div className="flex items-start gap-1 pl-4">
              <span className="font-bebas text-[50px] leading-[42.5px] tracking-[-2px]">MK Webcraft</span>
              <span className="font-bebas text-lg leading-[15.3px] tracking-[-0.04em]">®</span>
            </div>
          </div>

          <a
            href="#stats"
            className="absolute bottom-0 left-1/2 flex h-[84px] w-[84px] -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border border-[#e4e4e4] bg-white p-[9px]"
            aria-label="Scroll down"
          >
            <span className="flex h-[66px] w-[66px] items-center justify-center rounded-full bg-[#0c0c0c]">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                <path
                  d="M11 4v14M5 12l6 6 6-6"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
