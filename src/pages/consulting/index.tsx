import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Brain, LineChart, Users, Lightbulb, Check, Calendar, Sparkles, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Vortex } from "@/components/ui/vortex";
import { ShinyText } from "@/components/ui/shiny-text";
import { TiltedCard } from "@/components/ui/tilted-card";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { FloatingParticles, AnimatedLines } from "@/components/FloatingParticles";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { CurrencyToggle } from "@/components/shared/CurrencyToggle";
import { PriceDisplay } from "@/components/shared/PriceDisplay";
import { consultingOffers, aiUseCases } from "@/lib/data/pricing";
import { useIsMobile } from "@/hooks/use-mobile";

const methodology = [
  { step: "01", title: "Diagnostic", desc: "Audit complet de vos processus" },
  { step: "02", title: "Stratégie", desc: "Roadmap priorisée & business case" },
  { step: "03", title: "POC", desc: "Prototype validant l'approche" },
  { step: "04", title: "Déploiement", desc: "Industrialisation & formation" },
  { step: "05", title: "Scale", desc: "Extension & optimisation" }
];

export default function ConsultingPage() {
  const [currency, setCurrency] = useState<"eur" | "dzd">("eur");
  const [showCalendly, setShowCalendly] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Vortex - fond animé fixe */}
      <Vortex
        backgroundColor="black"
        className="fixed inset-0"
        particleCount={isMobile ? 50 : 150}
        baseHue={45}
        baseSpeed={0.008}
        rangeSpeed={0.2}
      />
      
      {/* Particules et faisceaux jaunes - répartis sur toute la hauteur de la page */}
      <FloatingParticles count={8} colors={["yellow", "amber"]} layers={4} />
      <AnimatedLines variant="amber" className="fixed inset-0" />
      <BackgroundBeams color="amber" className="fixed inset-0" />

      <Header 
        variant="consulting" 
        ctaLabel="RDV Stratégique"
        onCtaClick={() => setShowCalendly(true)}
      />

      <main className="relative z-10">
        {/* Hero */}
        <section className="min-h-screen flex items-center justify-center px-4 pt-24 pb-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 text-sm mb-6 border border-indigo-500/20">
                Intelligence Artificielle & Transformation Digitale
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Transformez votre entreprise{" "}
                <span className="text-indigo-400">avec l'IA</span>
              </h1>

              <ShinyText className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                Audit, POC, accompagnement stratégique. De la vision à 
                l'implémentation concrète avec ROI mesurable.
              </ShinyText>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="cta" 
                  size="xl" 
                  className="bg-indigo-500 hover:bg-indigo-600"
                  onClick={() => setShowCalendly(true)}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Prendre RDV stratégique
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  onClick={() => document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Découvrir nos offres
                </Button>
              </div>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-20 pt-10 border-t border-white/10"
            >
              <p className="text-gray-500 text-sm mb-6">Ils nous font confiance</p>
              <div className="flex flex-wrap justify-center gap-8 text-gray-400">
                {["PME leaders", "ETI industrielles", "Startups scale-up", "Groupes internationaux"].map((client, i) => (
                  <span key={i} className="font-medium">{client}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Offers */}
        <section id="offers" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Nos <span className="text-indigo-400">prestations</span>
              </h2>
              <ShinyText className="text-lg text-gray-400 mb-8">
                Des solutions adaptées à votre maturité et vos enjeux
              </ShinyText>
              <CurrencyToggle currency={currency} onChange={setCurrency} variant="consulting" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {consultingOffers.map((offer, index) => (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TiltedCard
                    className={`relative h-full bg-white/5 backdrop-blur-xl rounded-2xl p-6 border-2 ${
                      offer.popular ? 'border-indigo-500' : 'border-white/10'
                    } hover:border-indigo-500/50 transition-all duration-300`}
                  >
                    {offer.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-amber-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                        Recommandé
                      </span>
                    )}

                    <div className={`w-12 h-12 rounded-xl ${offer.popular ? 'bg-indigo-500/20' : 'bg-white/10'} flex items-center justify-center mb-4`}>
                      {offer.id === "audit-express" && <Lightbulb className="w-6 h-6 text-indigo-400" />}
                      {offer.id === "audit-strategique" && <Brain className="w-6 h-6 text-indigo-400" />}
                      {offer.id === "poc-custom" && <LineChart className="w-6 h-6 text-indigo-400" />}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{offer.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{offer.description}</p>

                    <PriceDisplay 
                      priceEUR={offer.priceEUR} 
                      priceDZD={offer.priceDZD} 
                      currency={currency}
                      className="text-indigo-400 mb-2"
                    />

                    <p className="text-gray-500 text-sm mb-2">⏱️ {offer.duration}</p>
                    <p className="text-amber-400/80 text-sm mb-4">👤 {offer.targetAudience}</p>

                    <ul className="space-y-2 mb-6">
                      {offer.deliverables.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <Check className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant={offer.popular ? "cta" : "outline"}
                      className={`w-full ${offer.popular ? 'bg-indigo-500 hover:bg-indigo-600' : ''}`}
                      onClick={() => setShowCalendly(true)}
                    >
                      {offer.cta}
                    </Button>
                  </TiltedCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section id="cases" className="py-24 px-4 bg-gradient-to-b from-black via-indigo-950/10 to-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Cas d'<span className="text-amber-400">usage</span>
              </h2>
              <ShinyText className="text-lg text-gray-400">
                Implémentations concrètes avec ROI mesurable
              </ShinyText>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {aiUseCases.map((useCase, index) => (
                <motion.div
                  key={useCase.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-amber-500/30 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{useCase.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{useCase.desc}</p>
                      <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs">
                        {useCase.metrics}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Notre <span className="text-indigo-400">méthodologie</span>
              </h2>
              <ShinyText className="text-lg text-gray-400">
                Un processus éprouvé de la stratégie à l'échelle
              </ShinyText>
            </div>

            <div className="grid lg:grid-cols-5 gap-4">
              {methodology.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center"
                >
                  <span className="inline-block w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center mb-4">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 bg-gradient-to-t from-indigo-950/20 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Prêt à explorer le potentiel de l'IA ?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Réservez un appel stratégique de 30 minutes. Nous discuterons de vos 
              enjeux et des opportunités concrètes pour votre organisation.
            </p>
            <Button 
              variant="cta" 
              size="xl" 
              className="bg-indigo-500 hover:bg-indigo-600"
              onClick={() => setShowCalendly(true)}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Réserver mon RDV stratégique
            </Button>
            <p className="text-gray-500 text-sm mt-4">Sans engagement • Réponse sous 24h</p>
          </div>
        </section>
      </main>

      <Footer variant="consulting" />

      {/* Google Calendar Modal */}
      {showCalendly && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl w-full max-w-md relative p-8">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 text-2xl"
            >
              ×
            </button>
            <div className="text-center">
              <Calendar className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Prendre rendez-vous</h3>
              <p className="text-gray-400 mb-6">
                Envoyez-nous un email avec vos disponibilités. Nous vous proposerons un créneau sous 24h.
              </p>
              <a
                href="mailto:alexis.pinalopez@nexauraholding.com?subject=Demande%20de%20rendez-vous%20-%20Nexaura%20Consulting&body=Bonjour,%0A%0AJe%20souhaite%20prendre%20rendez-vous%20pour%20discuter%20de%20mon%20projet.%0A%0AMes%20disponibilités%20:%0A-%0A-%0A-%0A%0ACordialement,"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Envoyer une demande de RDV
              </a>
              <p className="text-gray-500 text-sm mt-4">
                alexis.pinalopez@nexauraholding.com
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
