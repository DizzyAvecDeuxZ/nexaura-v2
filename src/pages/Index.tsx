import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Vortex } from "@/components/ui/vortex";
import { GradientText } from "@/components/ui/gradient-text";



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
                src="/logo-icon-white.png" 
                alt="Nexaura" 
                className={isMobile ? "w-20 h-auto" : "w-32 h-auto"}
              />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6"
            >
              <GradientText>Nexaura</GradientText>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-400 text-center max-w-3xl mb-16 px-4"
            >
              Nexaura accompagne les entreprises dans leur transformation digitale, 
              de la création de sites web performants à l'intégration de l'IA dans 
              leurs processus métier.
            </motion.p>

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
                className="group relative h-full flex flex-col bg-gradient-to-br from-violet-500/10 via-transparent to-purple-500/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-violet-500/30 hover:border-violet-400 transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]"
              >
                {/* Glow effect violet au hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="absolute inset-0 bg-violet-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex flex-col flex-1">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Nexaura <span className="text-violet-400">Digital</span>
                  </h2>

                  <p className="text-violet-300/80 text-sm font-medium tracking-wide uppercase mb-4">
                    Votre présence digitale, optimisée par la data
                  </p>

                  <p className="text-gray-400 mb-6">
                    Sites web, applications mobiles, e-commerce
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-8">
                    <span className="px-3 py-1 text-xs font-medium bg-violet-500/20 text-violet-300 rounded-full border border-violet-500/30 text-center">
                      100% responsive
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-violet-500/20 text-violet-300 rounded-full border border-violet-500/30 text-center">
                      SEO natif
                    </span>
                    <span className="col-span-2 px-3 py-1 text-xs font-medium bg-violet-500/20 text-violet-300 rounded-full border border-violet-500/30 text-center">
                      Maintenance & support inclus
                    </span>
                  </div>

                  <div className="mt-auto">
                    <Button 
                      variant="outline" 
                      className="w-full bg-violet-500/10 border-violet-500/50 text-violet-300 hover:bg-violet-500/20 group"
                    >
                      Découvrir nos solutions
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.a>

              {/* Consulting Card */}
              <motion.a
                href="/consulting"
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative h-full flex flex-col bg-gradient-to-br from-yellow-500/10 via-transparent to-amber-500/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-yellow-500/30 hover:border-yellow-400 transition-all duration-500 hover:shadow-[0_0_40px_rgba(250,204,21,0.3)]"
              >
                {/* Glow effect jaune au hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-amber-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="absolute inset-0 bg-yellow-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex flex-col flex-1">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Nexaura <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent font-extrabold">Consulting</span>
                  </h2>

                  <p className="text-yellow-300/80 text-sm font-medium tracking-wide uppercase mb-4">
                    L'intelligence artificielle au service de vos décisions
                  </p>

                  <p className="text-gray-400 mb-6">
                    Intelligence artificielle, automatisation, transformation
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-8">
                    <span className="px-3 py-1 text-xs font-medium bg-yellow-500/20 text-yellow-300 rounded-full border border-yellow-500/30 group-hover:bg-yellow-500/30 transition-colors text-center">
                      Automatisation 24/7
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-yellow-500/20 text-yellow-300 rounded-full border border-yellow-500/30 group-hover:bg-yellow-500/30 transition-colors text-center">
                      Prédictions temps réel
                    </span>
                    <span className="col-span-2 px-3 py-1 text-xs font-medium bg-yellow-500/20 text-yellow-300 rounded-full border border-yellow-500/30 group-hover:bg-yellow-500/30 transition-colors text-center">
                      ROI mesurable
                    </span>
                  </div>

                  <div className="mt-auto">
                    <Button 
                      variant="outline" 
                      className="w-full bg-gradient-to-r from-yellow-500/20 to-amber-500/10 border-yellow-500/50 text-yellow-300 hover:bg-yellow-500/30 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] group transition-all duration-300"
                    >
                      Auditer mon projet
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.a>
            </motion.div>

            {/* CTA de secours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 text-center"
            >
              <p className="text-gray-500 mb-4">Votre projet ne rentre dans aucune case ?</p>
              <Button 
                onClick={() => setIsContactOpen(true)}
                className="bg-gradient-to-r from-violet-600 to-amber-500 text-white border-0 hover:from-violet-500 hover:to-amber-400 shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-300"
              >
                Parlons-en
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </section>

          {/* Footer */}
          <footer className="py-8 px-4 border-t border-white/10 bg-black">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm">
                © 2026 Nexaura. Tous droits réservés.
              </p>
              <div className="flex items-center gap-6">
                <a href="/digital" className="text-gray-500 hover:text-violet-400 text-sm transition-colors">
                  Digital
                </a>
                <a href="/consulting" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">
                  Consulting
                </a>
                <a href="/holding/a-propos" className="text-gray-500 hover:text-white text-sm transition-colors">
                  À propos
                </a>
                <div className="w-px h-4 bg-gray-700" />
                <a 
                  href="mailto:services@nexauraholding.com"
                  className="text-gray-500 hover:text-red-500 transition-colors"
                  aria-label="Email"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/alexis-pina-lopez-aa61b517b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#0A66C2] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
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
