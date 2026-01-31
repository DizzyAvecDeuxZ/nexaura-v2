import { motion } from "framer-motion";
import { Dumbbell, Apple, BarChart3, Target, Trophy, Moon } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Entraînements",
    description: "Programmes personnalisés par niveau avec suivi en temps réel",
    color: "#FF6B6B",
  },
  {
    icon: Apple,
    title: "Nutrition",
    description: "Suivi des macros, calories et hydratation au quotidien",
    color: "#FF7043",
  },
  {
    icon: BarChart3,
    title: "Statistiques",
    description: "Graphiques de progression et records personnels",
    color: "#FFAB91",
  },
  {
    icon: Target,
    title: "Body Tracking",
    description: "Mesures corporelles et photos de progression",
    color: "#FF6B6B",
  },
  {
    icon: Trophy,
    title: "Achievements",
    description: "Badges, défis et système de récompenses",
    color: "#FF7043",
  },
  {
    icon: Moon,
    title: "Dark Mode",
    description: "Interface adaptative jour/nuit automatique",
    color: "#FFAB91",
  },
];

export function FitXPFeatures() {
  return (
    <section id="features" className="relative py-32 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#FF6B6B]/10 rounded-full blur-[80px]"
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-[#FF6B6B]/10 border border-[#FF6B6B]/30 text-[#FF6B6B] text-sm font-medium mb-6"
          >
            Fonctionnalités
          </motion.span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Tout ce dont vous avez{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">besoin</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Une app complète pour atteindre vos objectifs fitness
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-violet-500/50 transition-all duration-300"
            >
              {/* Hover glow effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${feature.color}15, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                    border: `1px solid ${feature.color}30`,
                  }}
                >
                  <feature.icon
                    className="w-7 h-7"
                    style={{ color: feature.color }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
