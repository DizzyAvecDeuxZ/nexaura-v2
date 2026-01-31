import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Smartphone, Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Vortex } from "@/components/ui/vortex";
import { GradientText } from "@/components/ui/gradient-text";
import { ShinyText } from "@/components/ui/shiny-text";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { CurrencyToggle } from "@/components/shared/CurrencyToggle";
import { PriceDisplay } from "@/components/shared/PriceDisplay";
import { appTiers } from "@/lib/data/pricing";
import { useIsMobile } from "@/hooks/use-mobile";

const techStack = [
  { name: "React Native", desc: "Cross-platform performant" },
  { name: "Flutter", desc: "UI native sur mesure" },
  { name: "Swift", desc: "iOS natif premium" },
  { name: "Kotlin", desc: "Android moderne" }
];

export default function AppsPage() {
  const [currency, setCurrency] = useState<"eur" | "dzd">("eur");
  const isMobile = useIsMobile();

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <Vortex
        backgroundColor="black"
        className="fixed inset-0"
        particleCount={isMobile ? 50 : 150}
        baseHue={300}
      />

      <Header 
        variant="digital" 
        ctaLabel="Demander un devis"
        onCtaClick={() => window.location.href = "/digital/contact"}
      />

      <main className="relative z-10 pt-24">
        {/* Hero */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Applications <span className="text-fuchsia-400">Mobiles</span>
            </h1>
            <ShinyText className="text-xl text-gray-400 max-w-2xl mx-auto">
              iOS & Android. Du concept à la publication sur les stores.
              Apps natives, performantes et scalables.
            </ShinyText>

            <div className="flex justify-center gap-8 mt-8">
              <div className="flex items-center gap-2 text-gray-400">
                <Apple className="w-6 h-6" />
                <span>iOS</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Play className="w-6 h-6" />
                <span>Android</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-12">
              <CurrencyToggle currency={currency} onChange={setCurrency} variant="digital" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {appTiers.map((tier, index) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white/5 backdrop-blur-xl rounded-2xl p-6 border-2 ${
                    tier.popular ? 'border-fuchsia-500' : 'border-white/10'
                  }`}
                >
                  {tier.badge && (
                    <span className="inline-block bg-fuchsia-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      {tier.badge}
                    </span>
                  )}

                  <div className="w-12 h-12 rounded-xl bg-fuchsia-500/20 flex items-center justify-center mb-4">
                    <Smartphone className="w-6 h-6 text-fuchsia-400" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{tier.description}</p>

                  <PriceDisplay 
                    priceEUR={tier.priceEUR} 
                    priceDZD={tier.priceDZD} 
                    currency={currency}
                    className="text-fuchsia-400 mb-2"
                  />

                  <p className="text-gray-500 text-sm mb-6">⏱️ {tier.deliveryTime}</p>

                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-fuchsia-400 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={tier.popular ? "cta" : "outline"}
                    className="w-full"
                    onClick={() => window.location.href = "/digital/contact"}
                  >
                    Choisir cette offre
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 px-4 bg-gradient-to-b from-black via-fuchsia-950/10 to-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Technologies <GradientText>maîtrisées</GradientText>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center"
                >
                  <h3 className="text-lg font-bold text-white mb-1">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Une idée d'app mobile ?
            </h2>
            <Button variant="cta" size="xl" onClick={() => window.location.href = "/digital/contact"}>
              Démarrer le projet
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer variant="digital" />
    </div>
  );
}
