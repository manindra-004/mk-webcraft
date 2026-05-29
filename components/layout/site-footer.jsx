import Link from "next/link";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#work" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const social = ["Twitter", "Behance", "Instagram", "Dribbble"];

export function SiteFooter() {
  return (
    <div className="relative h-[100svh] min-h-[860px] w-full">
      <footer className="section-light fixed inset-x-0 bottom-0 z-10 h-[100svh] min-h-[860px] overflow-hidden bg-white py-9">
        <div className="mk-webcraft-container h-full">
          <div className="mx-auto max-w-[1848px] bg-[#f5f5f5] px-10 pb-[60px] pt-20">
            <div className="grid gap-5 lg:grid-cols-[716px_1fr]">
              <div>
                <div className="flex items-start">
                  <span className="font-bebas text-[clamp(5rem,22vw,21rem)] leading-[0.82] tracking-[-0.04em] text-[#0b0b0c]">
                    MK Webcraft
                  </span>
                  <span className="ml-2 mt-1 text-[30px] text-[#0c0c0c]">®</span>
                </div>
              </div>

              <div className="grid gap-5 lg:grid-cols-[340px_1fr]">
                <div className="grid gap-5 sm:grid-cols-2">
                  <nav aria-label="Footer">
                    <ul className="space-y-1">
                      {footerLinks.map((link) => (
                        <li key={link.label}>
                          <Link href={link.href} className="hover-underline text-lg leading-[25.2px] tracking-[-0.04em] text-[#0c0c0c]">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div>
                    <ul className="space-y-1">
                      {social.map((name) => (
                        <li key={name}>
                          <a
                            href="#"
                            className="hover-underline inline-block text-lg leading-[25.2px] tracking-[-0.04em] text-[#0c0c0c] transition duration-300 hover:scale-[1.04] hover:text-[#39ff14]"
                          >
                            {name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[110px] grid gap-5 lg:grid-cols-[716px_1fr]">
              <div>
                <p className="text-lg leading-[25.2px] tracking-[-0.04em] text-[#0c0c0c]">(510) 895-6500</p>
                <p className="mt-2 text-[clamp(2rem,4vw,2.9rem)] font-semibold leading-[1] tracking-[-0.07em] text-[#0c0c0c]">
                  hello@mkwebcraft.com
                </p>
              </div>

              <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
                <p className="max-w-[525px] text-base font-medium leading-[20.8px] tracking-[-0.04em] text-[#0c0c0c]/60">
                  With MK Webcraft, your company gets more than just a website. We design experiences that
                  resonate with your customers and drive meaningful engagement.
                </p>
                <div className="inline-flex items-center gap-2 text-[13px] text-[#0c0c0c]/60">
                  <span>Created by</span>
                  <img
                    src="/images/figma/footer-creator.jpg"
                    alt="Creator avatar"
                    className="h-7 w-7 rounded-full object-cover"
                  />
                  <span>Anatolii Dmitrienko</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section className="pointer-events-none h-[100svh] min-h-[860px]" aria-hidden>
        <div className="h-full w-full" />
      </section>
    </div>
  );
}
