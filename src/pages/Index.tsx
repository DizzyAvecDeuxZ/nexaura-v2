import { useState, lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { WhyNexaura } from "@/components/WhyNexaura";
import { ServicesSection } from "@/components/ServicesSection";
import { OffersSection } from "@/components/OffersSection";
import { MaintenanceSection } from "@/components/MaintenanceSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Vortex } from "@/components/ui/vortex";
import { useIsMobile } from "@/hooks/use-mobile";

// Lazy load ContactModal - only loaded when needed
const ContactModal = lazy(() => import("@/components/ContactModal"));

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const isMobile = useIsMobile();

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  // Adaptive particle count: 50 on mobile (battery), 150 on desktop
  const particleCount = isMobile ? 50 : 150;
  const rangeSpeed = isMobile ? 0.5 : 0.8;

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Skip link for accessibility - keyboard navigation */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      {/* Vortex global en arrière-plan fixe */}
      <div className="fixed inset-0 z-0" aria-hidden="true">
        <Vortex
          backgroundColor="black"
          className="w-full h-full"
          particleCount={particleCount}
          baseHue={270}
          rangeSpeed={rangeSpeed}
        />
      </div>

      {/* Contenu au-dessus du Vortex */}
      <div className="relative z-10">
        <Header onOpenContact={openContact} />
        <main id="main-content">
          <HeroSection onOpenContact={openContact} />
          <WhyNexaura />
          <ServicesSection />
          <OffersSection onOpenContact={openContact} />
          <MaintenanceSection onOpenContact={openContact} />
          <ProcessSection />
          <PortfolioSection />
          <TestimonialsSection />
          <FAQSection />
          <CTASection onOpenContact={openContact} />
          <Footer />
        </main>
        <Suspense fallback={null}>
          <ContactModal isOpen={isContactOpen} onClose={closeContact} />
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
