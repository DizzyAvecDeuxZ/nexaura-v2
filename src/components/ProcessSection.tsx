import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Palette, Code, CheckCircle, Rocket } from "lucide-react";
import { ShinyText } from "@/components/ui/shiny-text";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Découverte",
    description: "Échange 30-45 min",
    color: "primary",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design",
    description: "Maquettes & validation",
    color: "secondary",
  },
  {
    icon: Code,
    number: "03",
    title: "Développement",
    description: "Code moderne & tests",
    color: "primary",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Optimisation",
    description: "Performance & SEO",
    color: "secondary",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Lancement",
    description: "Mise en ligne & support",
    color: "primary",
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apropos" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Notre <span className="gradient-text">méthodologie</span>
          </h2>
          <ShinyText className="text-lg text-gray-400 max-w-2xl">
            Un processus éprouvé et transparent pour concrétiser votre vision
          </ShinyText>
        </motion.div>

        {/* Desktop Timeline */}
        <div ref={ref} className="hidden lg:block relative">
          {/* Animated connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2">
            <motion.div
              className="h-full bg-gradient-to-r from-violet-500 via-pink-500 to-violet-500 rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <div className="flex justify-between relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                className="flex flex-col items-center w-1/5 group"
              >
                <div className={`relative w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-xl border-2 ${step.color === 'primary' ? 'border-violet-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]' : 'border-pink-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]'} flex items-center justify-center mb-4 z-10 transition-all duration-300 group-hover:scale-110`}>
                  <step.icon className={`w-8 h-8 ${step.color === 'primary' ? 'text-violet-400' : 'text-pink-400'}`} />
                  <span className={`absolute -top-2 -right-2 w-7 h-7 rounded-full ${step.color === 'primary' ? 'bg-violet-500' : 'bg-pink-500'} text-white text-xs font-bold flex items-center justify-center`}>
                    {step.number}
                  </span>
                </div>
                <h3 className={`text-lg font-bold mb-2 text-center text-white group-hover:${step.color === 'primary' ? 'text-violet-400' : 'text-pink-400'} transition-colors`}>
                  {step.title}
                </h3>
                <ShinyText className="text-sm text-gray-400 text-center max-w-[140px]">
                  {step.description}
                </ShinyText>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl ${step.color === 'primary' ? 'bg-violet-500' : 'bg-pink-500'} flex items-center justify-center flex-shrink-0`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-0.5 flex-1 ${step.color === 'primary' ? 'bg-violet-500/30' : 'bg-pink-500/30'} mt-2`} />
                )}
              </div>
              <div className="pb-8">
                <span className={`text-xs font-bold ${step.color === 'primary' ? 'text-violet-400' : 'text-pink-400'}`}>
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-white mb-1">
                  {step.title}
                </h3>
                <ShinyText className="text-gray-400">{step.description}</ShinyText>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
