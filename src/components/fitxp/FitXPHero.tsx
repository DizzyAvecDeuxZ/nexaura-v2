import { motion } from "framer-motion";
import { Download, Smartphone } from "lucide-react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { GradientText } from "@/components/ui/gradient-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Button } from "@/components/ui/button";

export function FitXPHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-32 pb-16 px-4">
      {/* Shooting stars background */}
      <ShootingStars
        starColor="#a855f7"
        trailColor="#ec4899"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={4000}
      />

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container-wide relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B6B]/10 border border-[#FF6B6B]/30 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF6B6B] animate-pulse" />
            <span className="text-sm text-[#FF6B6B] font-medium">Application Mobile</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <GradientText>FitXP</GradientText>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-4"
          >
            Votre coach fitness personnel
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
          >
            Suivez vos entraînements, votre nutrition et votre progression avec une app moderne et intuitive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <ShimmerButton>
              <Button
                variant="cta"
                size="xl"
                className="group relative overflow-hidden bg-transparent border-0"
                disabled
              >
                <Download className="mr-2 h-5 w-5" />
                <span>Bientôt disponible</span>
              </Button>
            </ShimmerButton>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Découvrir les fonctionnalités
            </Button>
          </motion.div>

          {/* Store badges placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex items-center justify-center lg:justify-start gap-4 mt-8"
          >
            <div className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl border border-white/10 opacity-60">
              <Smartphone className="h-6 w-6 text-gray-400" />
              <div className="text-left">
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">Bientôt disponible</div>
                <div className="text-sm font-medium text-gray-300">App Store</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl border border-white/10 opacity-60">
              <Smartphone className="h-6 w-6 text-gray-400" />
              <div className="text-left">
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">Bientôt disponible</div>
                <div className="text-sm font-medium text-gray-300">Google Play</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center"
        >
          {/* Glow effect behind phone */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-gradient-to-r from-violet-500/30 to-pink-500/30 rounded-full blur-3xl" />
          </div>

          {/* Floating phone animation */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* iPhone frame */}
            <div className="relative w-[280px] h-[580px] bg-[#1a1a1a] rounded-[50px] p-3 shadow-2xl border border-gray-800">
              {/* Dynamic island / notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20" />

              {/* Screen with static image */}
              <div className="w-full h-full bg-[#121212] rounded-[40px] overflow-hidden relative">
                <img
                  src="/screenshots/fitxp/home-dark.png"
                  alt="FitXP Home Screen"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-[#FF6B6B]/20 rounded-full blur-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-violet-500/20 rounded-full blur-xl"
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-[#FF6B6B]/30 flex items-start justify-center p-2 backdrop-blur-sm bg-white/5">
          <motion.div
            className="w-1.5 h-3 bg-gradient-to-b from-[#FF6B6B] to-[#FF8E8E] rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
