import { PremiumMotionLayer } from "@/components/animations/premium-motion-layer";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactPageContent } from "@/components/sections/contact-page-content";

export const metadata = {
  title: "Contact | MK Webcraft",
  description: "Get in touch with MK Webcraft for branding, web design, and development support.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader variant="solid-fixed" />
      <main className="relative z-20 w-full overflow-x-hidden bg-white text-[#0c0c0c]">
        <PremiumMotionLayer />
        <ContactPageContent />
      </main>
      <SiteFooter />
    </>
  );
}
