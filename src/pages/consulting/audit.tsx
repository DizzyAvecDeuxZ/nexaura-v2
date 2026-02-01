import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, FileText, Search, BarChart3, Users, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Vortex } from "@/components/ui/vortex";
import { GradientText } from "@/components/ui/gradient-text";
import { ShinyText } from "@/components/ui/shiny-text";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { CurrencyToggle } from "@/components/shared/CurrencyToggle";
import { PriceDisplay } from "@/components/shared/PriceDisplay";
import { consultingOffers } from "@/lib/data/pricing";
import { useIsMobile } from "@/hooks/use-mobile";

const auditSteps = [
  { icon: Search, title: "Analyse terrain", desc: "Entretiens avec vos équipes clés" },
  { icon: FileText, title: "Cartographie", desc: "Identification des processus automatisables" },
  { icon: BarChart3, title: "Benchmark", desc: "Comparaison avec les leaders du secteur" },
  { icon: Users, title: "Recommandations", desc: "Roadmap priorisée avec ROI estimé" }
];

export default function AuditPage() {
  const [currency, setCurrency] = useState<"eur" | "dzd">("eur");
  const [showCalendly, setShowCalendly] = useState(false);
  const isMobile = useIsMobile();

  const expressOffer = consultingOffers.find(o => o.id === "audit-express");
  const strategicOffer = consultingOffers.find(o => o.id === "audit-strategique");

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <Vortex
        backgroundColor="black"
        className="fixed inset-0"
        particleCount={isMobile ? 50 : 150}
        baseHue={240}
      />

      <Header 
        variant="consulting" 
        ctaLabel="Réserver un audit"
        onCtaClick={() => setShowCalendly(true)}
      />

      <main className="relative z-10 pt-24">
        {/* Hero */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Audit <GradientText>Intelligence Artificielle</GradientText>
            </h1>
            <ShinyText className="text-xl text-gray-400 max-w-2xl mx-auto">
              Identifiez les opportunités concrètes de l'IA dans votre organisation.
              Diagnostic rapide ou étude approfondie selon vos besoins.
            </ShinyText>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-4 bg-gradient-to-b from-black via-indigo-950/10 to-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Comment se déroule un <span className="text-indigo-400">audit</span> ?
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {auditSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center"
                >
                  <step.icon className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-12">
              <CurrencyToggle currency={currency} onChange={setCurrency} variant="consulting" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {expressOffer && (
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-2">{expressOffer.name}</h3>
                  <p className="text-gray-400 mb-6">{expressOffer.description}</p>

                  <PriceDisplay 
                    priceEUR={expressOffer.priceEUR} 
                    priceDZD={expressOffer.priceDZD} 
                    currency={currency}
                    className="text-indigo-400 text-4xl mb-2"
                  />
                  <p className="text-gray-500 mb-6">⏱️ {expressOffer.duration}</p>

                  <ul className="space-y-3 mb-8">
                    {expressOffer.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setShowCalendly(true)}
                  >
                    Réserver un appel
                  </Button>
                </div>
              )}

              {strategicOffer && (
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border-2 border-indigo-500">
                  <span className="inline-block bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    Recommandé
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{strategicOffer.name}</h3>
                  <p className="text-gray-400 mb-6">{strategicOffer.description}</p>

                  <PriceDisplay 
                    priceEUR={strategicOffer.priceEUR} 
                    priceDZD={strategicOffer.priceDZD} 
                    currency={currency}
                    className="text-indigo-400 text-4xl mb-2"
                  />
                  <p className="text-gray-500 mb-6">⏱️ {strategicOffer.duration}</p>

                  <ul className="space-y-3 mb-8">
                    {strategicOffer.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full bg-indigo-500 hover:bg-indigo-600"
                    onClick={() => setShowCalendly(true)}
                  >
                    Prendre RDV stratégique
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Commençons par un échange
            </h2>
            <Button 
              variant="cta" 
              size="xl" 
              className="bg-indigo-500 hover:bg-indigo-600"
              onClick={() => setShowCalendly(true)}
            >
              Réserver un appel découverte
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
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
                href="mailto:alexis.pinalopez@nexauraholding.com?subject=Demande%20de%20rendez-vous%20-%20Audit%20IA&body=Bonjour,%0A%0AJe%20souhaite%20prendre%20rendez-vous%20pour%20un%20Audit%20IA.%0A%0AMes%20disponibilités%20:%0A-%0A-%0A-%0A%0ACordialement,"
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
