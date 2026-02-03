import { Monitor, Smartphone, Check } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { ShinyText } from "@/components/ui/shiny-text";

const services = [
  {
    icon: Monitor,
    title: "Sites Web",
    description:
      "Qu'il s'agisse d'une simple vitrine ou d'un site e-commerce, nous créons des sites modernes, rapides et optimisés.",
    items: [
      "One-page / Vitrine ultra simple",
      "Vitrine multi-pages",
      "E-commerce",
      "Site sur-mesure",
    ],
    gradient: "from-violet-500 to-violet-700",
    borderColor: "border-violet-500/20",
    iconBg: "bg-violet-500/10",
    glowColor: "shadow-violet-500/50",
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description:
      "Apps natives ou cross-platform pour iOS/Android. Du concept à la publication.",
    items: [
      "App vitrine / catalogue",
      "App de réservation / prise de RDV",
      "App business (interne ou client-facing)",
      "App sur-mesure complexe",
    ],
    gradient: "from-pink-500 to-pink-700",
    borderColor: "border-pink-500/20",
    iconBg: "bg-pink-500/10",
    glowColor: "shadow-pink-500/50",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-32 bg-black overflow-hidden">
      {/* Sparkles Background */}
      <div className="absolute inset-0">
        <SparklesCore
          id="servicesSparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#a855f7"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="container-wide relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nos{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              expertises
            </span>
          </h2>
          <ShinyText className="text-xl text-gray-400 max-w-2xl">
            Des solutions digitales sur-mesure pour booster votre activité
          </ShinyText>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border ${service.borderColor} hover:border-${index === 0 ? 'violet' : 'pink'}-500/50 transition-all duration-500 overflow-hidden group hover:-translate-y-2 hover:scale-[1.02] animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br ${service.gradient} blur-2xl -z-10`} />

              {/* Sparkles on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500">
                <SparklesCore
                  id={`service-${index}`}
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={30}
                  className="w-full h-full"
                  particleColor={index === 0 ? "#a855f7" : "#ec4899"}
                />
              </div>

              <div className="relative z-10">
                <motion.div
                  className={`w-20 h-20 rounded-2xl ${service.iconBg} backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border ${service.borderColor}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className={`w-10 h-10 ${index === 0 ? 'text-violet-400' : 'text-pink-400'}`} />
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">{service.description}</p>

                <ul className="space-y-4">
                  {service.items.map((item, idx) => (
                    <li 
                      key={item} 
                      className="flex items-center gap-3"
                    >
                      <div className={`w-6 h-6 rounded-full ${index === 0 ? 'bg-violet-500/20' : 'bg-pink-500/20'} flex items-center justify-center flex-shrink-0 border ${service.borderColor}`}>
                        <Check className={`w-4 h-4 ${index === 0 ? 'text-violet-400' : 'text-pink-400'}`} />
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
