import { motion } from "framer-motion";
import { Zap, Palette, Rocket, Globe } from "lucide-react";
import { ShinyText } from "@/components/ui/shiny-text";

const advantages = [
  {
    icon: Zap,
    title: "Rapide & Moderne",
    description: "Délais de livraison optimisés pour un time-to-market accéléré",
    iconColor: "text-violet-400",
  },
  {
    icon: Palette,
    title: "Design Soigné",
    description: "Interfaces haut de gamme pour une expérience utilisateur premium",
    iconColor: "text-pink-400",
  },
  {
    icon: Rocket,
    title: "Innovation Continue",
    description: "Code évolutif, performance maximale, SEO intégré",
    iconColor: "text-violet-400",
  },
  {
    icon: Globe,
    title: "Vision Globale",
    description: "Présence internationale : France, Algérie et marchés émergents",
    iconColor: "text-pink-400",
  },
];

export function WhyNexaura() {
  return (
    <section className="relative py-32 bg-transparent overflow-hidden">
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Notre <span className="gradient-text">approche</span>
          </h2>
          <ShinyText className="text-lg text-gray-400 max-w-2xl">
            Une agence qui comprend vos besoins et livre des résultats concrets
          </ShinyText>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 hover:-translate-y-1"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <item.icon className={`w-7 h-7 ${item.iconColor}`} />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
