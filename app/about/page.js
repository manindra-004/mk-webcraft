import { PremiumMotionLayer } from "@/components/animations/premium-motion-layer";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutPageContent } from "@/components/sections/about-page-content";

export const metadata = {
  title: "About | MK Webcraft",
  description:
    "Meet the MK Webcraft team, our approach, achievements, and how we build clear, high-performing digital experiences.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader variant="solid-fixed" />
      <main className="relative z-20 w-full overflow-x-hidden bg-white text-[#0c0c0c]">
        <PremiumMotionLayer />
        <AboutPageContent />
      </main>
      <SiteFooter />
    </>
  );
}
