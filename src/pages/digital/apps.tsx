import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Smartphone, Apple, Play, Zap, Shield, Clock, Code, Sparkles } from "lucide-react";
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
  { name: "Flutter", desc: "Notre technologie principale", highlight: true },
  { name: "React Native", desc: "Cross-platform performant" },
  { name: "Swift", desc: "iOS natif premium" },
  { name: "Kotlin", desc: "Android moderne" }
];

const guarantees = [
  {
    icon: Clock,
    title: "Livraison dans les délais",
    desc: "Ou on vous rembourse 20% du projet"
  },
  {
    icon: Shield,
    title: "Code garanti sans bug",
    desc: "Tests automatisés + 3 mois de garantie"
  },
  {
    icon: Code,
    title: "Code source propre",
    desc: "Documentation complète, architecture scalable"
  },
  {
    icon: Zap,
    title: "Performance optimale",
    desc: "60 FPS, temps de chargement < 2s"
  }
];

const processSteps = [
  { 
    number: "1", 
    title: "Audit gratuit", 
    desc: "30 min pour comprendre votre besoin et vous donner une roadmap" 
  },
  { 
    number: "2", 
    title: "Conception IA", 
    desc: "Maquettes Figma en 48h avec validation utilisateurs" 
  },
  { 
    number: "3", 
    title: "Développement", 
    desc: "Sprints de 2 semaines avec démos régulières" 
  },
  { 
    number: "4", 
    title: "Publication", 
    desc: "Accompagnement App Store & Play Store inclus" 
  }
];

export default function AppsPage() {
  const [currency, setCurrency] = useState<"eur" | "dzd">("eur");
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <Vortex
        backgroundColor="black"
        className="fixed inset-0"
        particleCount={isMobile ? 30 : 80}
        baseHue={300}
      />

      <Header 
        variant="digital" 
        ctaLabel="Audit gratuit"
        onCtaClick={() => navigate("/digital/contact")}
      />

      <main className="relative z-10 pt-24">
        {/* Hero */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-fuchsia-500/10 text-fuchsia-400 text-sm mb-6 border border-fuchsia-500/20">
                Conception accélérée par IA
              </span>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Votre application mobile,{" "}
                <span className="text-fuchsia-400">du concept au store</span>
              </h1>
              
              <ShinyText className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Flutter, React Native, iOS natif. Architecture scalable, zero dette technique, 
                maintenance proactive. Le partenaire qui reste après le lancement.
              </ShinyText>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button variant="cta" size="xl" onClick={() => navigate("/digital/contact")}>
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

              <div className="flex justify-center gap-8">
                <div className="flex items-center gap-2 text-gray-400">
                  <Apple className="w-6 h-6" />
                  <span>iOS</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Play className="w-6 h-6" />
                  <span>Android</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Sparkles className="w-6 h-6" />
                  <span>IA intégrée</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="py-16 px-4 bg-gradient-to-b from-black via-fuchsia-950/10 to-black">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {guarantees.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                >
                  <div className="w-10 h-10 rounded-xl bg-fuchsia-500/20 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-fuchsia-400" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Nos <span className="text-fuchsia-400">offres</span>
              </h2>
              <ShinyText className="text-lg text-gray-400 mb-8">
                Du MVP rapide à l'application enterprise
              </ShinyText>
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
                    onClick={() => navigate("/digital/contact")}
                  >
                    {tier.priceEUR === 0 ? "Nous contacter" : "Demander un devis"}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Notre <GradientText>processus</GradientText>
              </h2>
              <ShinyText className="text-lg text-gray-400">
                De l'idée à l'app en production en 4 étapes
              </ShinyText>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center"
                >
                  <span className="inline-block w-10 h-10 rounded-full bg-fuchsia-500/20 text-fuchsia-400 font-bold flex items-center justify-center mb-4">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 px-4 bg-gradient-to-b from-black via-fuchsia-950/10 to-black">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Technologies <GradientText>maîtrisées</GradientText>
              </h2>
              <ShinyText className="text-lg text-gray-400">
                Nous choisissons la stack adaptée à votre projet
              </ShinyText>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white/5 backdrop-blur-xl rounded-2xl p-6 border text-center ${
                    tech.highlight ? 'border-fuchsia-500/50 bg-fuchsia-500/5' : 'border-white/10'
                  }`}
                >
                  {tech.highlight && (
                    <span className="inline-block text-fuchsia-400 text-xs font-medium mb-2">
                      Technologie privilégiée
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-white mb-1">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-fuchsia-500/10 via-violet-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-white/10">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">40%</div>
                  <p className="text-gray-400 text-sm">Réduction des délais avec notre approche IA-first</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">0.2%</div>
                  <p className="text-gray-400 text-sm">Taux de crash moyen en production</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">92%</div>
                  <p className="text-gray-400 text-sm">De nos clients renouvellent leur contrat</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Prêt à transformer votre idée en application ?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Audit gratuit de 30 minutes : on analyse votre besoin, vous repartez avec une 
              estimation précise et une roadmap — même si vous ne travaillez pas avec nous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" onClick={() => navigate("/digital/contact")}>
                Réserver mon audit gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              Réponse sous 24h · Sans engagement · 100% confidentiel
            </p>
          </div>
        </section>
      </main>

      <Footer variant="digital" />
    </div>
  );
}
