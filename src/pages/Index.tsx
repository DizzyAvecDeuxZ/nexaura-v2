import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Monitor, Brain, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Vortex } from "@/components/ui/vortex";
import { GradientText } from "@/components/ui/gradient-text";
import { ShinyText } from "@/components/ui/shiny-text";


import { BackgroundBeams } from "@/components/ui/background-beams";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { useIsMobile } from "@/hooks/use-mobile";

const ContactModal = lazy(() => import("@/components/ContactModal"));

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const isMobile = useIsMobile();

  const particleCount = isMobile ? 50 : 150;
  const rangeSpeed = isMobile ? 0.5 : 0.8;

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      {/* Vortex MIX - violet + jaune mélangés dans un seul canvas */}
      <div className="fixed inset-0 z-0" aria-hidden="true">
        <Vortex
          backgroundColor="black"
          className="w-full h-full"
          particleCount={particleCount}
          mixed={true}
          baseSpeed={0.0}
          rangeSpeed={rangeSpeed}
        />
      </div>



      {/* Content */}
      <div className="relative z-10">
        <main id="main-content" className="min-h-screen flex flex-col">
          {/* Hero Section - The Chooser */}
          <section className="flex-1 flex flex-col items-center justify-center px-4 py-20 md:py-32">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <img 
                src="/logo-nexaura-white.webp" 
                alt="Nexaura" 
                className={isMobile ? "w-32 h-auto" : "w-48 h-auto"}
              />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-4"
            >
              <GradientText>Nexaura Holding</GradientText>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-400 text-center mb-4"
            >
              Une holding. Deux expertises.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ShinyText className="text-lg text-gray-500 text-center max-w-xl mb-16">
                Technologie opérationnelle & conseil stratégique pour votre transformation digitale
              </ShinyText>
            </motion.div>

            {/* Split Cards - Digital vs Consulting */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid md:grid-cols-2 gap-6 max-w-5xl w-full px-4"
            >
              {/* Digital Card */}
              <motion.a
                href="/digital"
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative bg-gradient-to-br from-violet-500/10 via-transparent to-purple-500/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-violet-500/30 hover:border-violet-500 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-violet-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-violet-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Monitor className="w-8 h-8 text-violet-400" />
                  </div>

                  <h2 className="text-3xl font-bold text-white mb-2">
                    Nexaura <span className="text-violet-400">Digital</span>
                  </h2>

                  <p className="text-gray-400 mb-6">
                    Sites web, applications mobiles, e-commerce
                  </p>

                  <ul className="space-y-2 mb-8">
                    {[
                      "Livraison en 1-4 semaines",
                      "Maintenance & support inclus",
                      "À partir de 990 €"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline" 
                    className="w-full bg-violet-500/10 border-violet-500/50 text-violet-300 hover:bg-violet-500/20 group"
                  >
                    Explorer Digital
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.a>

              {/* Consulting Card */}
              <motion.a
                href="/consulting"
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative bg-gradient-to-br from-indigo-500/10 via-transparent to-amber-500/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-indigo-500/30 hover:border-indigo-500 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-indigo-400" />
                  </div>

                  <h2 className="text-3xl font-bold text-white mb-2">
                    Nexaura <span className="text-indigo-400">Consulting</span>
                  </h2>

                  <p className="text-gray-400 mb-6">
                    Intelligence artificielle, automatisation, transformation
                  </p>

                  <ul className="space-y-2 mb-8">
                    {[
                      "Audit & POC sur-mesure",
                      "Accompagnement stratégique",
                      "ROI mesurable et concret"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline" 
                    className="w-full bg-indigo-500/10 border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/20 group"
                  >
                    Explorer Consulting
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-16 flex flex-wrap justify-center gap-8 text-gray-500 text-sm"
            >
              <span>50+ projets livrés</span>
              <span className="hidden md:block">•</span>
              <span>98% clients satisfaits</span>
              <span className="hidden md:block">•</span>
              <span>Présence France & Algérie</span>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ 
                opacity: { delay: 1.2 },
                y: { duration: 2, repeat: Infinity }
              }}
              className="mt-12"
            >
              <ChevronDown className="w-6 h-6 text-gray-600" />
            </motion.div>
          </section>

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* About Section */}
          <section className="py-24 px-4 bg-gradient-to-b from-transparent via-black/50 to-black/80">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pourquoi séparer <span className="gradient-text">Digital</span> et <span className="text-indigo-400">Consulting</span> ?
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Parce qu'un site vitrine à 2 000 € et une transformation IA à 50 000 € 
                ne s'adressent pas aux mêmes équipes, aux mêmes budgets, aux mêmes enjeux.
              </p>
              <p className="text-gray-500">
                Nexaura regroupe deux expertises complémentaires sous une même holding.
                Vous choisissez votre porte d'entrée, nous vous accompagnons avec la même exigence.
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 px-4 border-t border-white/10 bg-black">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm">
                © 2026 Nexaura Holding. Tous droits réservés.
              </p>
              <div className="flex gap-6">
                <a href="/digital" className="text-gray-500 hover:text-violet-400 text-sm transition-colors">
                  Digital
                </a>
                <a href="/consulting" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors">
                  Consulting
                </a>
                <a href="/holding/a-propos" className="text-gray-500 hover:text-white text-sm transition-colors">
                  À propos
                </a>
              </div>
            </div>
          </footer>
        </main>

        <Suspense fallback={null}>
          <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
