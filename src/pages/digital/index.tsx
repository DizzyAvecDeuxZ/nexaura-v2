import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Smartphone, Zap, Clock, Shield, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

import { GradientText } from "@/components/ui/gradient-text";
import { ShinyText } from "@/components/ui/shiny-text";
import { TiltedCard } from "@/components/ui/tilted-card";
import { GlareHover } from "@/components/ui/glare-hover";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Vortex } from "@/components/ui/vortex";
import { CurrencyToggle } from "@/components/shared/CurrencyToggle";
import { PriceDisplay } from "@/components/shared/PriceDisplay";
import { appTiers, maintenanceTiers } from "@/lib/data/pricing";


const stats = [
  { value: "50+", label: "Projets livrés", icon: Check },
  { value: "7-21j", label: "Délai moyen", icon: Clock },
  { value: "98%", label: "Satisfaction", icon: Shield },
  { value: "24h", label: "Support réactif", icon: Zap }
];

const processSteps = [
  { number: "01", title: "Discovery", desc: "Échange pour comprendre votre besoin" },
  { number: "02", title: "Design", desc: "Maquettes Figma & validation" },
  { number: "03", title: "Dev", desc: "Développement agile & revues" },
  { number: "04", title: "Tests", desc: "QA, optimisations, recette" },
  { number: "05", title: "Launch", desc: "Mise en ligne & formation" }
];

export default function DigitalPage() {
  const [currency, setCurrency] = useState<"eur" | "dzd">("eur");


  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Vortex violet - même effet que page d'accueil */}
      <div className="fixed inset-0 z-0" aria-hidden="true">
        <Vortex
          backgroundColor="black"
          className="w-full h-full"
          particleCount={150}
          baseHue={270}
          baseSpeed={0.5}
          rangeSpeed={0.8}
        />
      </div>

      <Header 
        variant="digital" 
        ctaLabel="Demander un devis"
        onCtaClick={() => window.location.href = "/digital/contact"}
      />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 pt-24 pb-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm mb-6 border border-violet-500/20">
                Applications Mobiles & Maintenance
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Votre application mobile,{" "}
                <GradientText>du concept au store</GradientText>
              </h1>

              <ShinyText className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                iOS & Android. Développement natif et cross-platform.
                Design premium, code moderne, publication garantie.
              </ShinyText>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button variant="cta" size="xl" onClick={() => window.location.href = "/digital/contact"}>
                  Démarrer mon projet
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Voir les tarifs
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Apps Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-black via-violet-950/10 to-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Applications <span className="text-fuchsia-400">Mobiles</span>
              </h2>
              <ShinyText className="text-lg text-gray-400">
                iOS & Android. Du concept à la publication sur les stores.
              </ShinyText>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {appTiers.map((tier, index) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TiltedCard
                    className={`relative h-full bg-white/5 backdrop-blur-xl rounded-2xl p-6 border-2 ${
                      tier.popular ? 'border-fuchsia-500' : 'border-white/10'
                    } hover:border-fuchsia-500/50 transition-all duration-300`}
                  >
                    {tier.badge && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                        {tier.badge}
                      </span>
                    )}

                    <div className={`w-12 h-12 rounded-xl ${tier.popular ? 'bg-fuchsia-500/20' : 'bg-white/10'} flex items-center justify-center mb-4`}>
                      <Smartphone className="w-6 h-6 text-fuchsia-400" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{tier.description}</p>

                    <PriceDisplay 
                      priceEUR={tier.priceEUR} 
                      priceDZD={tier.priceDZD} 
                      currency={currency}
                      className="text-fuchsia-400"
                    />

                    <p className="text-gray-500 text-sm mt-2 mb-4">⏱️ {tier.deliveryTime}</p>

                    <Button 
                      variant={tier.popular ? "cta" : "outline"}
                      className="w-full"
                      onClick={() => window.location.href = "/digital/contact"}
                    >
                      Demander un devis
                    </Button>
                  </TiltedCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-black via-emerald-950/10 to-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Maintenance & <span className="text-emerald-400">Support</span>
              </h2>
              <ShinyText className="text-lg text-gray-400 mb-8">
                Gardez votre application performante avec nos formules tout-inclus
              </ShinyText>
              <CurrencyToggle currency={currency} onChange={setCurrency} variant="digital" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {maintenanceTiers.map((tier, index) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TiltedCard
                    className={`relative h-full bg-white/5 backdrop-blur-xl rounded-2xl p-6 border-2 ${
                      tier.popular ? 'border-emerald-500' : 'border-white/10'
                    } hover:border-emerald-500/50 transition-all duration-300`}
                  >
                    {tier.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                        Recommandé
                      </span>
                    )}

                    <div className={`w-12 h-12 rounded-xl ${tier.popular ? 'bg-emerald-500/20' : 'bg-white/10'} flex items-center justify-center mb-4`}>
                      <Wrench className="w-6 h-6 text-emerald-400" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{tier.description}</p>

                    <div className="mb-4">
                      {tier.priceEURMonthly === 0 ? (
                        <span className="text-2xl font-bold text-emerald-400">Sur devis</span>
                      ) : (
                        <>
                          <span className="text-3xl font-bold text-emerald-400">
                            {new Intl.NumberFormat('fr-FR').format(currency === "eur" ? tier.priceEURMonthly : tier.priceDZDMonthly)}
                            {currency === "eur" ? " €" : " DA"}
                          </span>
                          <span className="text-gray-500 text-sm">/mois</span>
                        </>
                      )}
                    </div>

                    <ul className="space-y-2 mb-6">
                      {tier.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant={tier.popular ? "cta" : "outline"}
                      className="w-full"
                      onClick={() => window.location.href = "/digital/contact"}
                    >
                      {tier.priceEURMonthly === 0 ? "Nous contacter" : "Souscrire"}
                    </Button>
                  </TiltedCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Notre <GradientText>processus</GradientText>
              </h2>
              <ShinyText className="text-lg text-gray-400">
                Une méthodologie éprouvée pour des résultats constants
              </ShinyText>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center"
                >
                  <span className="inline-block w-10 h-10 rounded-full bg-violet-500/20 text-violet-400 font-bold flex items-center justify-center mb-4">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 bg-gradient-to-t from-violet-950/20 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Discutons de votre besoin. Réponse sous 24h, devis gratuit sans engagement.
            </p>
            <Button variant="cta" size="xl" onClick={() => window.location.href = "/digital/contact"}>
              Demander un devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer variant="digital" />
    </div>
  );
}
