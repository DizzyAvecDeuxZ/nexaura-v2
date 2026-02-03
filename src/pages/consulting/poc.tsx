import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, FlaskConical, Code2, TestTube, Rocket, Calendar, Mail } from "lucide-react";
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

const pocSteps = [
  { icon: FlaskConical, title: "Cadrage", desc: "Définition précise du use case et des KPIs" },
  { icon: Code2, title: "Développement", desc: "Construction du prototype en 4-6 semaines" },
  { icon: TestTube, title: "Tests", desc: "Validation avec données réelles" },
  { icon: Rocket, title: "Industrialisation", desc: "Plan de déploiement à l'échelle" }
];

export default function PocPage() {
  const [currency, setCurrency] = useState<"eur" | "dzd">("eur");
  const [showCalendly, setShowCalendly] = useState(false);
  const isMobile = useIsMobile();

  const pocOffer = consultingOffers.find(o => o.id === "poc-custom");

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <Vortex
        backgroundColor="black"
        className="fixed inset-0"
        particleCount={isMobile ? 30 : 80}
        baseHue={45}
      />

      <Header 
        variant="consulting" 
        ctaLabel="Lancer mon POC"
        onCtaClick={() => setShowCalendly(true)}
      />

      <main className="relative z-10 pt-24">
        {/* Hero */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Proof of Concept <GradientText>sur-mesure</GradientText>
            </h1>
            <ShinyText className="text-xl text-gray-400 max-w-2xl mx-auto">
              Validez votre idée IA avec un prototype fonctionnel en 4-6 semaines.
              Testez le ROI avant d'investir dans l'industrialisation.
            </ShinyText>
          </div>
        </section>

        {/* Why POC */}
        <section className="py-16 px-4 bg-gradient-to-b from-black via-amber-950/10 to-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Pourquoi faire un <span className="text-yellow-400">POC</span> ?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Valider la faisabilité", desc: "Testez techniquement votre use case avant de vous engager" },
                { title: "Mesurer le ROI", desc: "Chiffrez concrètement les gains potentiels sur un périmètre restreint" },
                { title: "Convaincre", desc: "Démontrez la valeur à vos parties prenantes avec un démonstrateur concret" }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Notre <span className="text-yellow-400">processus</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-4">
              {pocSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        {pocOffer && (
          <section className="py-16 px-4 bg-gradient-to-b from-black via-amber-950/10 to-black">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <CurrencyToggle currency={currency} onChange={setCurrency} variant="consulting" />
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border-2 border-yellow-500 shadow-[0_0_30px_rgba(250,204,21,0.2)]">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{pocOffer.name}</h3>
                  <p className="text-gray-400">{pocOffer.description}</p>
                </div>

                <div className="flex justify-center mb-8">
                  <PriceDisplay 
                    priceEUR={pocOffer.priceEUR} 
                    priceDZD={pocOffer.priceDZD} 
                    currency={currency}
                    className="text-yellow-400 text-5xl"
                  />
                </div>

                <p className="text-center text-gray-500 mb-8">⏱️ {pocOffer.duration}</p>

                <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
                  {pocOffer.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Button 
                    size="xl"
                    className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-black font-semibold shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:shadow-[0_0_50px_rgba(250,204,21,0.6)] transition-all duration-300"
                    onClick={() => setShowCalendly(true)}
                  >
                    Discuter de mon POC
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Questions <span className="text-yellow-400">fréquentes</span>
            </h2>

            <div className="space-y-4">
              {[
                { q: "Quelle est la différence entre POC et MVP ?", a: "Le POC valide la faisabilité technique et le ROI sur un périmètre restreint. Le MVP est un produit minimal mais fonctionnel pour du vrai usage en production." },
                { q: "Que se passe-t-il après le POC ?", a: "Si le POC est concluant, nous vous proposons un plan d'industrialisation avec un budget et des délais précis. Vous gardez la propriété du code." },
                { q: "Mes données sont-elles sécurisées ?", a: "Absolument. Nous signons des NDAs, utilisons des données anonymisées quand possible, et respectons le RGPD à chaque étape." }
              ].map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
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
              <Calendar className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Prendre rendez-vous</h3>
              <p className="text-gray-400 mb-6">
                Envoyez-nous un email avec vos disponibilités. Nous vous proposerons un créneau sous 24h.
              </p>
              <a
                href="mailto:alexis.pinalopez@nexauraholding.com?subject=Demande%20de%20rendez-vous%20-%20POC%20IA&body=Bonjour,%0A%0AJe%20souhaite%20prendre%20rendez-vous%20pour%20discuter%20d'un%20POC%20IA.%0A%0AMes%20disponibilités%20:%0A-%0A-%0A-%0A%0ACordialement,"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-xl transition-colors"
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
