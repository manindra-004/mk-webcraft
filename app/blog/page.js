import { PremiumMotionLayer } from "@/components/animations/premium-motion-layer";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { BlogPageContent } from "@/components/sections/blog-page-content";

export const metadata = {
  title: "Blog | MK Webcraft",
  description: "Industry insights, design trends, and practical guidance from MK Webcraft.",
};

export default function BlogPage() {
  return (
    <>
      <SiteHeader variant="solid-fixed" />
      <main className="relative z-20 w-full overflow-x-hidden bg-white text-[#0c0c0c]">
        <PremiumMotionLayer />
        <BlogPageContent />
      </main>
      <SiteFooter />
    </>
  );
}
