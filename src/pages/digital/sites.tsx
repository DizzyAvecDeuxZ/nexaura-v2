import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Monitor, ShoppingCart, Briefcase, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Vortex } from "@/components/ui/vortex";
import { GradientText } from "@/components/ui/gradient-text";
import { ShinyText } from "@/components/ui/shiny-text";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { CurrencyToggle } from "@/components/shared/CurrencyToggle";
import { PriceDisplay } from "@/components/shared/PriceDisplay";
import { WebPortfolioSection } from "@/components/WebPortfolioSection";
import { websiteTiers } from "@/lib/data/pricing";
import { useIsMobile } from "@/hooks/use-mobile";

const features = [
  {
    icon: Monitor,
    title: "Responsive Design",
    desc: "Sites parfaits sur tous les écrans : mobile, tablette, desktop"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Complet",
    desc: "Paiement sécurisé, gestion stocks, comptes clients"
  },
  {
    icon: Briefcase,
    title: "SEO Optimisé",
    desc: "Référencement naturel, vitesse de chargement, analytics"
  },
  {
    icon: Sparkles,
    title: "Design Sur-mesure",
    desc: "Interfaces uniques reflétant votre identité de marque"
  }
];

export default function SitesPage() {
  const [currency, setCurrency] = useState<"eur" | "dzd">("eur");
  const isMobile = useIsMobile();

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <Vortex
        backgroundColor="black"
        className="fixed inset-0"
        particleCount={isMobile ? 50 : 150}
        baseHue={270}
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
              Création de <GradientText>Sites Web</GradientText>
            </h1>
            <ShinyText className="text-xl text-gray-400 max-w-2xl mx-auto">
              Vitrines, e-commerce, applications web. Des sites modernes, 
              rapides et optimisés pour convertir vos visiteurs.
            </ShinyText>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center mb-12">
              <CurrencyToggle currency={currency} onChange={setCurrency} variant="digital" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {websiteTiers.map((tier, index) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white/5 backdrop-blur-xl rounded-2xl p-6 border-2 ${
                    tier.popular ? 'border-violet-500' : 'border-white/10'
                  }`}
                >
                  {tier.badge && (
                    <span className="inline-block bg-violet-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      {tier.badge}
                    </span>
                  )}

                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{tier.description}</p>

                  <PriceDisplay 
                    priceEUR={tier.priceEUR} 
                    priceDZD={tier.priceDZD} 
                    currency={currency}
                    className="text-violet-400 mb-2"
                  />

                  <p className="text-gray-500 text-sm mb-6">⏱️ {tier.deliveryTime}</p>

                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
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

        {/* Features */}
        <section className="py-20 px-4 bg-gradient-to-b from-black via-violet-950/10 to-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Ce qui fait <GradientText>la différence</GradientText>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                >
                  <feature.icon className="w-10 h-10 text-violet-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <WebPortfolioSection />

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Un projet web en tête ?
            </h2>
            <Button variant="cta" size="xl" onClick={() => window.location.href = "/digital/contact"}>
              Discutons-en
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer variant="digital" />
    </div>
  );
}
