import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import { FitXPHero } from "@/components/fitxp/FitXPHero";
import { FitXPFeatures } from "@/components/fitxp/FitXPFeatures";
import { FitXPShowcase } from "@/components/fitxp/FitXPShowcase";
import { FitXPCTA } from "@/components/fitxp/FitXPCTA";

export default function FitXP() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      {/* Vortex background - same as main Nexaura site */}
      <div className="fixed inset-0 z-0">
        <Vortex
          backgroundColor="transparent"
          rangeY={800}
          particleCount={300}
          baseHue={270}
          baseSpeed={0.02}
          rangeSpeed={0.8}
          baseRadius={0.5}
          rangeRadius={1.5}
          containerClassName="w-full h-full opacity-30"
        />
      </div>

      {/* Back to Nexaura - Fixed header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="container-wide">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Nexaura</span>
          </Link>
        </div>
      </motion.header>

      {/* Main content */}
      <main className="relative z-10">
        <FitXPHero />
        <FitXPFeatures />
        <FitXPShowcase />
        <FitXPCTA />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 bg-black border-t border-white/10">
        <div className="container-wide text-center">
          <p className="text-gray-500 text-sm">
            FitXP - Développé par{" "}
            <Link to="/" className="text-violet-400 hover:text-violet-300">
              Nexaura
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
