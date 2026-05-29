import { PremiumMotionLayer } from "@/components/animations/premium-motion-layer";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ProjectsPageContent } from "@/components/sections/projects-page-content";

export const metadata = {
  title: "Projects | MK Webcraft",
  description:
    "Explore featured MK Webcraft projects across branding, web design, and development.",
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader variant="solid-fixed" />
      <main className="relative z-20 w-full overflow-x-hidden bg-white text-[#0c0c0c]">
        <PremiumMotionLayer />
        <ProjectsPageContent />
      </main>
      <SiteFooter />
    </>
  );
}
