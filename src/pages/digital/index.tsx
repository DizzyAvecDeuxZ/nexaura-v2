import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Smartphone, Zap, Clock, Shield, Wrench, Sparkles, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

import { GradientText } from "@/components/ui/gradient-text";
import { ShinyText } from "@/components/ui/shiny-text";
import { TiltedCard } from "@/components/ui/tilted-card";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Vortex } from "@/components/ui/vortex";
import { CurrencyToggle } from "@/components/shared/CurrencyToggle";
import { PriceDisplay } from "@/components/shared/PriceDisplay";
import { appTiers, maintenanceTiers } from "@/lib/data/pricing";


const stats = [
  { value: "50+", label: "Apps livrées", icon: Check },
  { value: "8-12s", label: "Délai moyen", icon: Clock },
  { value: "99.8%", label: "Uptime garanti", icon: Shield },
  { value: "4.9/5", label: "Satisfaction", icon: Zap }
];

const differentiators = [
  {
    icon: Sparkles,
    title: "Conception accélérée IA",
    desc: "Maquettes Figma en 48h grâce à l'IA générative, réduction des délais de 40%"
  },
  {
    icon: Shield,
    title: "Zero dette technique",
    desc: "Tests automatisés, CI/CD dès le premier jour, code review systématique"
  },
  {
    icon: TrendingUp,
    title: "ROI mesurable",
    desc: "Accompagnement post-lancement, analytics intégrés, optimisation continue"
  },
  {
    icon: Users,
    title: "Équipe senior dédiée",
    desc: "Pas de junior seul sur projet, développeurs expérimentés garantis"
  }
];

const sectors = [
  { name: "Santé & Télémédecine", growth: "+25%", desc: "Téléconsultation, suivi patient, DMP" },
  { name: "FinTech & Paiement", growth: "+20%", desc: "Wallets, DeFi, banque mobile" },
  { name: "E-commerce Mobile", growth: "+14%", desc: "Apps natives, AR shopping, 1-clic pay" },
  { name: "Productivité B2B", growth: "+18%", desc: "CRM mobile, outils terrain, agents IA" },
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
        ctaLabel="Demander un audit gratuit"
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
                Agence de développement mobile
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Votre application mobile,{" "}
                <GradientText>sans dette technique</GradientText>
              </h1>

              <ShinyText className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                iOS & Android. Conception accélérée par IA, architecture scalable, 
                maintenance proactive. Le partenaire technique qui reste après le lancement.
              </ShinyText>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button variant="cta" size="xl" onClick={() => window.location.href = "/digital/contact"}>
                  Audit gratuit de mon projet
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

        {/* Differentiators Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-black via-violet-950/10 to-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Pourquoi <GradientText>Nexaura Digital</GradientText> ?
              </h2>
              <ShinyText className="text-lg text-gray-400">
                Ce qui nous différencie des agences généralistes
              </ShinyText>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-violet-500/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sectors Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Expertise par <GradientText>secteur</GradientText>
              </h2>
              <ShinyText className="text-lg text-gray-400">
                Des apps qui répondent aux enjeux métiers spécifiques
              </ShinyText>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sectors.map((sector, index) => (
                <motion.div
                  key={sector.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-fuchsia-500/30 hover:bg-white/10 transition-all cursor-pointer"
                  onClick={() => window.location.href = "/digital/contact"}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-white">{sector.name}</h3>
                    <span className="text-fuchsia-400 text-sm font-semibold">{sector.growth}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{sector.desc}</p>
                  <div className="mt-4 flex items-center text-violet-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    En savoir plus <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Apps Section */}
        <section id="pricing" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Applications <span className="text-fuchsia-400">Mobiles</span>
              </h2>
              <ShinyText className="text-lg text-gray-400 mb-8">
                Du MVP à l'application scalable. Un partenaire à chaque étape.
              </ShinyText>
              <CurrencyToggle currency={currency} onChange={setCurrency} variant="digital" />
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
                Parce qu'une application se construit aussi après le lancement
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

        {/* Social Proof / Trust Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ils nous font <GradientText>confiance</GradientText>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-violet-400 mb-2">40%</div>
                <p className="text-gray-400 text-sm">Réduction des délais avec notre approche IA-first</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-fuchsia-400 mb-2">0.2%</div>
                <p className="text-gray-400 text-sm">Taux de crash moyen sur nos apps en production</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-emerald-400 mb-2">92%</div>
                <p className="text-gray-400 text-sm">De nos clients renouvellent leur contrat maintenance</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-emerald-500/10 rounded-2xl p-8 border border-white/10">
              <p className="text-xl text-white mb-4">
                "Ce qui nous a convaincus ? La transparence totale sur l'avancement et le fait 
                qu'ils restent vraiment après la livraison."
              </p>
              <p className="text-gray-400">— Directeur Digital, Startup FinTech</p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 px-4 bg-gradient-to-b from-black via-violet-950/10 to-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Notre <GradientText>méthodologie</GradientText>
              </h2>
              <ShinyText className="text-lg text-gray-400">
                Un processus éprouvé pour des résultats constants
              </ShinyText>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {[
                { number: "01", title: "Discovery", desc: "Atelier cadrage (offert), définition du MVP" },
                { number: "02", title: "Design", desc: "Maquettes IA + validation utilisateurs" },
                { number: "03", title: "Dev", desc: "Sprints de 2 semaines, démos régulières" },
                { number: "04", title: "Tests", desc: "QA automatisée, bêta testeurs" },
                { number: "05", title: "Launch", desc: "Publication stores, suivi post-lancement" }
              ].map((step, index) => (
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
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Audit gratuit de 30 minutes : on analyse votre besoin, vous repartez avec une 
              roadmap concrète — même si vous ne travaillez pas avec nous.
            </p>
            <Button variant="cta" size="xl" onClick={() => window.location.href = "/digital/contact"}>
              Réserver mon audit gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-gray-500 text-sm mt-4">
              Réponse sous 24h · Sans engagement
            </p>
          </div>
        </section>
      </main>

      <Footer variant="digital" />
    </div>
  );
}
