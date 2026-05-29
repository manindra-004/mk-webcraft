import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PremiumMotionLayer } from "@/components/animations/premium-motion-layer";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { BlogSection } from "@/components/sections/blog-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ProcessSection } from "@/components/sections/process-section";
import { QuoteSection, ServicesSection } from "@/components/sections/services-section";
import { ShowcaseSection } from "@/components/sections/showcase-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TeamSection } from "@/components/sections/team-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WorkSection } from "@/components/sections/work-section";

export default function Home() {
  return (
    <>
      <SiteHeader variant="overlay" />
      <main className="relative z-20 w-full overflow-x-hidden bg-white text-[#0c0c0c]">
        <PremiumMotionLayer />
        <HeroSection />
        <div className="relative z-20">
          <StatsSection />
          <ShowcaseSection />
          <BenefitsSection />
          <WorkSection />
          <ServicesSection />
          <QuoteSection />
          <TeamSection />
          {/* <PricingSection /> */}
          <ProcessSection />
          <TestimonialsSection />
          <FaqSection />
          <BlogSection />
          <CtaSection />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
