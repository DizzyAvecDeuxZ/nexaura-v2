import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Shield, Zap, Crown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Vortex } from "@/components/ui/vortex";
import { GradientText } from "@/components/ui/gradient-text";
import { ShinyText } from "@/components/ui/shiny-text";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { CurrencyToggle } from "@/components/shared/CurrencyToggle";
import { PriceDisplay } from "@/components/shared/PriceDisplay";
import { maintenanceTiers } from "@/lib/data/pricing";
import { useIsMobile } from "@/hooks/use-mobile";

const icons = {
  "maint-starter": Shield,
  "maint-growth": Zap,
  "maint-scale": Crown,
  "maint-enterprise": Rocket
};

export default function MaintenancePage() {
  const [currency, setCurrency] = useState<"eur" | "dzd">("eur");
  const [period, setPeriod] = useState<"monthly" | "yearly">("monthly");
  const isMobile = useIsMobile();

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <Vortex
        backgroundColor="black"
        className="fixed inset-0"
        particleCount={isMobile ? 50 : 150}
        baseHue={160}
      />

      <Header 
        variant="digital" 
        ctaLabel="Souscrire"
        onCtaClick={() => window.location.href = "/digital/contact"}
      />

      <main className="relative z-10 pt-24">
        {/* Hero */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Maintenance & <span className="text-emerald-400">Support</span>
            </h1>
            <ShinyText className="text-xl text-gray-400 max-w-2xl mx-auto">
              Gardez votre site ou application performant avec nos formules 
              tout-inclus. Hébergement, mises à jour, support technique.
            </ShinyText>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Toggles */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <CurrencyToggle currency={currency} onChange={setCurrency} variant="digital" />
              
              <div className="bg-white/5 rounded-full p-1 border border-white/10 inline-flex">
                <button
                  onClick={() => setPeriod("monthly")}
                  className={`px-6 py-2 rounded-full text-sm transition-all ${
                    period === "monthly" ? "bg-emerald-500 text-white" : "text-gray-400"
                  }`}
                >
                  Mensuel
                </button>
                <button
                  onClick={() => setPeriod("yearly")}
                  className={`px-6 py-2 rounded-full text-sm transition-all relative ${
                    period === "yearly" ? "bg-emerald-500 text-white" : "text-gray-400"
                  }`}
                >
                  Annuel
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                    -17%
                  </span>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {maintenanceTiers.map((tier, index) => {
                const Icon = icons[tier.id as keyof typeof icons] || Shield;
                const price = period === "monthly" 
                  ? (currency === "eur" ? tier.priceEURMonthly : tier.priceDZDMonthly)
                  : (currency === "eur" ? tier.priceEURYearly : tier.priceDZDYearly);

                return (
                  <motion.div
                    key={tier.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-white/5 backdrop-blur-xl rounded-2xl p-6 border-2 ${
                      tier.popular ? 'border-emerald-500' : 'border-white/10'
                    }`}
                  >
                    {tier.popular && (
                      <span className="inline-block bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        Recommandé
                      </span>
                    )}

                    <div className={`w-12 h-12 rounded-xl ${tier.popular ? 'bg-emerald-500/20' : 'bg-white/10'} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{tier.description}</p>

                    <div className="mb-4">
                      {tier.priceEURMonthly === 0 ? (
                        <span className="text-2xl font-bold text-emerald-400">Sur devis</span>
                      ) : (
                        <>
                          <span className="text-3xl font-bold text-emerald-400">
                            {new Intl.NumberFormat('fr-FR').format(price)}
                            {currency === "eur" ? " €" : " DA"}
                          </span>
                          <span className="text-gray-500 text-sm">/{period === "monthly" ? "mois" : "an"}</span>
                        </>
                      )}
                    </div>

                    <ul className="space-y-2 mb-6">
                      {tier.features.map((feature, i) => (
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
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-gradient-to-b from-black via-emerald-950/10 to-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Questions <GradientText>fréquentes</GradientText>
            </h2>

            <div className="space-y-4">
              {[
                { q: "Puis-je changer d'offre en cours de contrat ?", a: "Oui, vous pouvez upgrader à tout moment. La différence sera calculée au prorata." },
                { q: "Qu'est-ce qu'une 'modification mineure' ?", a: "Une modification de texte, image, couleur, ou ajout d'une page simple. Hors développement complexe." },
                { q: "Le domaine est-il vraiment inclus ?", a: "Oui, les extensions .com, .fr, .dz sont incluses. Les premium domains sont en supplément." },
                { q: "Puis-je résilier à tout moment ?", a: "Oui, avec un préavis de 30 jours. Vos données vous sont restituées." }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Besoin d'un accompagnement sur mesure ?
            </h2>
            <Button variant="cta" size="xl" onClick={() => window.location.href = "/digital/contact"}>
              Discuter de mes besoins
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer variant="digital" />
    </div>
  );
}
