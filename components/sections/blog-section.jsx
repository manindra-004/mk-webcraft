import Link from "next/link";
import { blogPosts } from "@/lib/content/home";

export function BlogSection() {
  return (
    <section className="section-light pb-[60px] pt-40" id="blog">
      <div className="mk-webcraft-container">
        <div className="mx-auto max-w-[1848px]">
          <div className="grid gap-5 lg:grid-cols-[1fr_1fr] lg:items-end">
            <h2 className="text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.96] tracking-[-0.07em] text-[#0b0b0c]">
              Latest Insights
            </h2>
            <div className="grid gap-5 sm:grid-cols-[290px_1fr]">
              <p className="max-w-[290px] text-lg font-medium leading-[25.2px] tracking-[-0.04em] text-[rgba(12,12,12,0.6)]">
                Explore industry news and creative strategies to keep your website ahead of the
                curve.
              </p>
              <Link
                href="#blog"
                className="hover-underline inline-flex items-start gap-3 text-[22px] tracking-[-0.05em] text-[#0c0c0c]"
              >
                <span className="text-[#39ff14]">↳</span>
                Check out more
              </Link>
            </div>
          </div>

          <div className="mt-20 grid gap-5 lg:grid-cols-2">
            <article className="group">
              <div className="relative">
                <img
                  src="/images/figma/blog-main.jpg"
                  alt="Blog post main"
                  className="zoom-media h-[528px] w-full object-cover"
                />
                <span className="absolute right-5 top-5 corner-accent" aria-hidden />
              </div>
              <p className="mt-6 text-sm text-[#0c0c0c]/60">{blogPosts[0].date}</p>
              <h3 className="mt-2 text-[42px] font-semibold leading-[46px] tracking-[-0.07em] text-[#0c0c0c]">
                {blogPosts[0].title}
              </h3>
              <span className="mt-6 inline-flex rounded-full border border-[#d9d9d9] px-3 py-1 text-[11px] font-semibold uppercase">
                Read more
              </span>
            </article>

            <div className="grid gap-5 sm:grid-cols-2">
              {[blogPosts[1], blogPosts[2]].map((post, idx) => (
                <article key={post.title} className="group">
                  <div className="relative">
                    <img
                      src={idx === 0 ? "/images/figma/blog-2.jpg" : "/images/figma/blog-3.jpg"}
                      alt={post.title}
                      className="zoom-media h-[323px] w-full object-cover"
                    />
                    <span className="absolute right-5 top-5 corner-accent" aria-hidden />
                  </div>
                  <p className="mt-6 text-sm text-[#0c0c0c]/60">{post.date}</p>
                  <h3 className="mt-2 text-[26px] font-semibold leading-[33.8px] tracking-[-0.04em] text-[#0c0c0c]">
                    {post.title}
                  </h3>
                  <span className="mt-5 inline-flex rounded-full border border-[#d9d9d9] px-3 py-1 text-[11px] font-semibold uppercase">
                    Read more
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
