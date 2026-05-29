import { notFound } from "next/navigation";
import { PremiumMotionLayer } from "@/components/animations/premium-motion-layer";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CtaSection } from "@/components/sections/cta-section";
import { ProjectDetailPageContent } from "@/components/sections/project-detail-page-content";
import { getProjectBySlug, projects } from "@/lib/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    return {
      title: "Project | MK Webcraft",
    };
  }

  return {
    title: `${project.title} | MK Webcraft`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);
  if (!project) notFound();

  return (
    <>
      <SiteHeader variant="solid-fixed" />
      <main className="relative z-20 w-full overflow-x-hidden bg-white text-[#0c0c0c]">
        <PremiumMotionLayer />
        <ProjectDetailPageContent project={project} />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
