import { motion } from "framer-motion";
import { Bell, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Button } from "@/components/ui/button";

export function FitXPCTA() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-t from-violet-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B6B]/5 via-transparent to-transparent" />

        {/* Animated orbs */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 mb-8"
          >
            <Bell className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-violet-300">Lancement bientôt</span>
          </motion.div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Prêt à transformer{" "}
            <span className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] bg-clip-text text-transparent">
              votre routine ?
            </span>
          </h2>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            FitXP sera bientôt disponible sur App Store et Google Play.
            Soyez les premiers informés du lancement.
          </p>

          {/* Store buttons (disabled) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            {/* App Store button */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
              <button
                disabled
                className="relative flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 opacity-70 cursor-not-allowed"
              >
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Bientôt sur</div>
                  <div className="text-lg font-semibold text-white">App Store</div>
                </div>
              </button>
            </div>

            {/* Google Play button */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
              <button
                disabled
                className="relative flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 opacity-70 cursor-not-allowed"
              >
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Bientôt sur</div>
                  <div className="text-lg font-semibold text-white">Google Play</div>
                </div>
              </button>
            </div>
          </motion.div>

          {/* Back to Nexaura */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/">
              <Button variant="ghost" className="text-gray-400 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à Nexaura
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats or social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "50+", label: "Exercices" },
            { value: "200+", label: "Aliments" },
            { value: "15+", label: "Programmes" },
            { value: "2", label: "Thèmes" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
