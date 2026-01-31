import { motion } from "framer-motion";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Vortex } from "@/components/ui/vortex";
import { useIsMobile } from "@/hooks/use-mobile";

export default function NotFoundPage() {
  const isMobile = useIsMobile();

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <Vortex
        backgroundColor="black"
        className="fixed inset-0"
        particleCount={isMobile ? 50 : 150}
        baseHue={0}
        rangeSpeed={0.2}
      />

      <main className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full text-center"
        >
          <div className="text-8xl md:text-9xl font-bold text-white/10 mb-4">404</div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page introuvable
          </h1>
          
          <p className="text-gray-400 text-lg mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" onClick={() => window.location.href = "/"}>
              <Home className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Page précédente
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-gray-500 text-sm mb-4">Vous cherchez peut-être :</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/digital" className="text-violet-400 hover:text-violet-300 text-sm">
                Nexaura Digital
              </a>
              <span className="text-gray-600">•</span>
              <a href="/consulting" className="text-indigo-400 hover:text-indigo-300 text-sm">
                Nexaura Consulting
              </a>
              <span className="text-gray-600">•</span>
              <a href="/holding/a-propos" className="text-gray-400 hover:text-white text-sm">
                À propos
              </a>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
