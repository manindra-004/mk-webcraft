import Link from "next/link";
import Image from "next/image";
import { CtaSection } from "@/components/sections/cta-section";
import { blogPosts } from "@/lib/content/home";

const featuredPosts = [
  {
    slug: "why-your-websites-user-experience-is-its-greatest-asset",
    date: "Nov 18, 2024",
    title: "Why your website's user experience is its greatest asset",
    image: "/images/figma/blog-main.jpg",
  },
  {
    slug: "why-mobile-first-design-is-crucial-for-modern-websites",
    date: "Nov 12, 2024",
    title: "Why Mobile-First Design is Crucial for Modern Websites",
    image: "/images/figma/blog-2.jpg",
  },
  {
    slug: "how-to-create-a-website-that-truly-connects-with-your-audience",
    date: "Nov 9, 2024",
    title: "How to create a website that truly connects with your audience",
    image: "/images/figma/blog-3.jpg",
  },
  {
    slug: "top-web-design-trends-to-watch-in-2024",
    date: "Nov 5, 2024",
    title: "Top Web Design Trends to Watch in 2024",
    image: "/images/product-bottle.jpg",
  },
];

const articleRows = [
  ...blogPosts,
  { date: "Oct 22, 2024", title: "Building trust with the transparent face of technology" },
];

export function BlogPageContent() {
  return (
    <div className="relative z-20 bg-white pt-28 text-[#0c0c0c]">
      <section className="section-light pb-20 pt-10">
        <div className="mk-webcraft-container">
          <div className="grid gap-8 border-b border-black/10 pb-6 lg:grid-cols-[1fr_1fr]">
            <h1 className="text-[clamp(3rem,7vw,5.6rem)] font-semibold leading-[0.92] tracking-[-0.07em]">
              Latest Insights
            </h1>
            <p className="max-w-[37ch] text-base leading-[1.32] tracking-[-0.04em] text-[#0c0c0c]/60 lg:justify-self-end">
              Explore industry trends, expert advice, and creative strategies to keep your website ahead of the curve.
            </p>
          </div>

          <div className="mt-8 grid gap-x-5 gap-y-10 md:grid-cols-2">
            {featuredPosts.map((post) => (
              <article key={post.slug} className="group">
                <div className="relative aspect-731/445 overflow-hidden bg-[#f3f3f3]">
                  <Image src={post.image} alt={post.title} fill className="zoom-media object-cover" />
                  <span className="corner-accent absolute right-4 top-4" aria-hidden />
                </div>
                <p className="mt-3 text-[11px] tracking-[-0.03em] text-[#0c0c0c]/45">{post.date}</p>
                <h3 className="mt-1 text-[clamp(1.2rem,1.9vw,1.62rem)] font-semibold leading-[1.2] tracking-tighter">
                  {post.title}
                </h3>
                <span className="tag-pill mt-3 inline-flex">INSIGHT</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light pb-24">
        <div className="mk-webcraft-container">
          <div className="grid gap-8 lg:grid-cols-[1fr_2.1fr]">
            <p className="max-w-[26ch] text-sm leading-[1.35] tracking-[-0.03em] text-[#0c0c0c]/45">
              Explore our full library of insights, stories, and practical resources.
            </p>
            <div>
              <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.06em]">
                More articles
              </h2>
              <div className="mt-6 border-t border-[#dedede]">
                {articleRows.map((row) => (
                  <Link
                    key={`${row.date}-${row.title}`}
                    href="/blog"
                    className="grid grid-cols-[130px_1fr] gap-3 border-b border-[#dedede] py-4 transition-colors hover:bg-[#f8f8f8]"
                  >
                    <p className="text-[12px] tracking-[-0.03em] text-[#0c0c0c]/45">{row.date}</p>
                    <p className="text-sm tracking-[-0.03em] text-[#0c0c0c]">{row.title}</p>
                  </Link>
                ))}
              </div>
              <button type="button" className="hover-underline mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-[-0.03em]">
                <span className="text-[#39ff14]">↳</span>
                Load more
              </button>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
