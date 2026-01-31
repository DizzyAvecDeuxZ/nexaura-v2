import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Brain, LineChart, Users, Lightbulb, Check, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Vortex } from "@/components/ui/vortex";
import { ShinyText } from "@/components/ui/shiny-text";
import { TiltedCard } from "@/components/ui/tilted-card";
import { NexauraLogo3DChrome } from "@/components/NexauraLogo3DChrome";
import { useIsMobile } from "@/hooks/use-mobile";

// Consulting offers - PREMIUM PRICING
const consultingOffers = [
  {
    icon: Lightbulb,
    name: "Audit IA Express",
    description: "Diagnostic rapide des opportunités IA dans votre entreprise",
    price: "2 900 €",
    priceDZ: "420 000 DA",
    duration: "2-3 jours",
    deliverables: [
      "Entretien avec vos équipes clés",
      "Analyse de 3 processus prioritaires",
      "Rapport 20 pages avec recommandations",
      "Roadmap d'implémentation 12 mois"
    ],
    target: "PME & Startups",
    popular: false,
    cta: "Réserver un appel"
  },
  {
    icon: Brain,
    name: "Audit IA Stratégique",
    description: "Étude approfondie pour grandes organisations",
    price: "8 500 €",
    priceDZ: "1 200 000 DA",
    duration: "1 semaine",
    deliverables: [
      "Atelier de co-conception (1 journée)",
      "Analyse complète de la valeur chaine",
      "Benchmark concurrentiel IA",
      "Plan de transformation détaillé",
      "Business case avec ROI estimé"
    ],
    target: "ETI & Grands groupes",
    popular: true,
    cta: "Prendre RDV stratégique"
  },
  {
    icon: LineChart,
    name: "POC sur-mesure",
    description: "Développement d'un prototype IA fonctionnel",
    price: "15 000 €",
    priceDZ: "2 200 000 DA",
    duration: "4-6 semaines",
    deliverables: [
      "Cadrage précis du use case",
      "Développement POC fonctionnel",
      "Tests avec données réelles",
      "Documentation technique",
      "Plan de déploiement à l'échelle"
    ],
    target: "Entreprises engagées",
    popular: false,
    cta: "Discuter de mon POC"
  }
];

// Retainer offers
const retainerOffers = [
  {
    name: "Conseil Mensuel",
    price: "3 500 €/mois",
    priceDZ: "500 000 DA/mois",
    description: "Accompagnement continu de votre transformation",
    features: [
      "2 jours de conseil sur site",
      "Suivi hebdomadaire des initiatives",
      "Hotline technique (réponse 24h)",
      "Veille technologique mensuelle",
      "Accès privilégié aux partenaires"
    ]
  },
  {
    name: "Transformation IA",
    price: "Sur devis",
    description: "Projet complet de transformation sur 3-6 mois",
    features: [
      "Équipe dédiée (2-4 consultants)",
      "Audit + POC + Déploiement",
      "Formation des équipes",
      "Change management",
      "Suivi ROI sur 12 mois"
    ]
  }
];

// Use cases
const useCases = [
  {
    title: "Automatisation Documents",
    desc: "Extraction, classification et traitement automatique de vos documents",
    impact: "-70% temps de traitement"
  },
  {
    title: "Chatbot Enterprise",
    desc: "Assistant IA pour support client ou collaborateur interne",
    impact: "24/7 disponibilité, -40% tickets"
  },
  {
    title: "Prédiction & BI",
    desc: "Tableaux de bord intelligents avec prévisions automatiques",
    impact: "+25% précision prévisions"
  },
  {
    title: "Agents IA Internes",
    desc: "Automatisation des workflows métier répétitifs",
    impact: "-50% tâches manuelles"
  }
];

// Methodology steps
const methodology = [
  { step: "01", title: "Diagnostic", desc: "Compréhension de vos enjeux, audit des opportunités" },
  { step: "02", title: "Stratégie", desc: "Roadmap priorisée, business case, choix technologiques" },
  { step: "03", title: "POC", desc: "Développement rapide d'un prototype validant l'approche" },
  { step: "04", title: "Déploiement", desc: "Industrialisation, formation, changement managé" },
  { step: "05", title: "Scale", desc: "Extension à d'autres use cases, optimisation continue" }
];

const ConsultingPage = () => {
  const [currency, setCurrency] = useState<"eur" | "dzd">("eur");
  const [showCalendly, setShowCalendly] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Background - Indigo hue for consulting */}
      <div className="fixed inset-0 z-0" aria-hidden="true">
        <Vortex
          backgroundColor="black"
          className="w-full h-full"
          particleCount={isMobile ? 50 : 150}
          baseHue={240}
          baseSpeed={0.008}
          rangeSpeed={0.2}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <NexauraLogo3DChrome size={50} />
            <div>
              <span className="text-white font-bold text-lg">Nexaura</span>
              <span className="text-indigo-400 font-bold text-lg ml-1">Consulting</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#offers" className="text-gray-400 hover:text-white transition-colors">Offres</a>
            <a href="#cases" className="text-gray-400 hover:text-white transition-colors">Cas d'usage</a>
            <a href="#method" className="text-gray-400 hover:text-white transition-colors">Méthode</a>
            <a href="#retainer" className="text-gray-400 hover:text-white transition-colors">Accompagnement</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex bg-white/5 rounded-full p-1 border border-white/10">
              <button
                onClick={() => setCurrency("eur")}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  currency === "eur" ? "bg-indigo-500 text-white" : "text-gray-400"
                }`}
              >
                EUR
              </button>
              <button
                onClick={() => setCurrency("dzd")}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  currency === "dzd" ? "bg-indigo-500 text-white" : "text-gray-400"
                }`}
              >
                DZD
              </button>
            </div>

            <Button 
              variant="cta" 
              size="sm" 
              className="bg-indigo-500 hover:bg-indigo-600"
              onClick={() => setShowCalendly(true)}
            >
              <Calendar className="w-4 h-4 mr-2" />
              RDV Stratégique
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 pt-24">
        {/* Hero */}
        <section className="min-h-[80vh] flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
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
                Audit, POC, accompagnement stratégique. 
                De la vision à l'implémentation concrète.
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

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-20 pt-10 border-t border-white/10"
            >
              <p className="text-gray-500 text-sm mb-6">Ils nous font confiance pour leur transformation</p>
              <div className="flex flex-wrap justify-center gap-8 opacity-50">
                {["PME leaders", "ETI industrielles", "Startups scale-up", "Groupes internationaux"].map((client, i) => (
                  <span key={i} className="text-gray-400 font-medium">{client}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Offers */}
        <section id="offers" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Nos <span className="text-indigo-400">prestations</span>
              </h2>
              <ShinyText className="text-lg text-gray-400">
                De l'audit exploratoire au POC fonctionnel, des solutions adaptées à votre maturité
              </ShinyText>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {consultingOffers.map((offer, index) => (
                <motion.div
                  key={offer.name}
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
                      <offer.icon className="w-6 h-6 text-indigo-400" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{offer.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{offer.description}</p>

                    <div className="mb-4">
                      <span className="text-3xl font-bold text-indigo-400">
                        {currency === "eur" ? offer.price : offer.priceDZ}
                      </span>
                    </div>

                    <p className="text-gray-500 text-sm mb-2">⏱️ {offer.duration}</p>
                    <p className="text-amber-400/80 text-sm mb-4">👤 {offer.target}</p>

                    <ul className="space-y-2 mb-6">
                      {offer.deliverables.map((item, i) => (
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
                Des implémentations concrètes avec ROI mesurable
              </ShinyText>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
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
                        {useCase.impact}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section id="method" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Notre <span className="text-indigo-400">méthodologie</span>
              </h2>
              <ShinyText className="text-lg text-gray-400">
                Un processus éprouvé de la stratégie à l'échelle
              </ShinyText>
            </div>

            <div className="relative">
              {/* Connecting line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500/20 via-amber-500/20 to-indigo-500/20" />

              <div className="grid lg:grid-cols-5 gap-6">
                {methodology.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center"
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
          </div>
        </section>

        {/* Retainer Section */}
        <section id="retainer" className="py-24 px-4 bg-gradient-to-b from-black via-indigo-950/10 to-black">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Accompagnement <span className="text-indigo-400">continu</span>
              </h2>
              <ShinyText className="text-lg text-gray-400">
                Pour les entreprises engagées dans une transformation de long terme
              </ShinyText>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {retainerOffers.map((offer, index) => (
                <motion.div
                  key={offer.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-indigo-400" />
                    <h3 className="text-xl font-bold text-white">{offer.name}</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{offer.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-indigo-400">
                      {currency === "eur" ? offer.price : 
                        offer.price === "Sur devis" ? "Sur devis" : "500 000 DA/mois"}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {offer.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-indigo-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setShowCalendly(true)}
                  >
                    Discuter de cet accompagnement
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 px-4 bg-gradient-to-t from-indigo-950/20 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Prêt à explorer le potentiel de l'IA pour votre entreprise ?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Réservez un appel stratégique de 30 minutes. Nous discuterons de vos enjeux 
              et des opportunités concrètes pour votre organisation.
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

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <NexauraLogo3DChrome size={40} />
              <span className="text-white font-bold">Nexaura <span className="text-indigo-400">Consulting</span></span>
            </div>
            <p className="text-gray-600 text-sm">
              Une marque de <a href="/" className="text-gray-400 hover:text-white">Nexaura Holding</a>
            </p>
            <div className="flex gap-6">
              <a href="/digital" className="text-gray-500 hover:text-violet-400 text-sm">Digital</a>
              <a href="/holding/a-propos" className="text-gray-500 hover:text-white text-sm">À propos</a>
            </div>
          </div>
        </footer>
      </div>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl w-full max-w-4xl h-[80vh] relative">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
            >
              ✕
            </button>
            <div className="h-full flex items-center justify-center text-gray-400">
              <div className="text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-indigo-400" />
                <p className="text-lg mb-2">Calendly à intégrer ici</p>
                <p className="text-sm">Remplacez ce bloc par le widget Calendly</p>
                <Button 
                  className="mt-4 bg-indigo-500 hover:bg-indigo-600"
                  onClick={() => window.open('https://calendly.com', '_blank')}
                >
                  Ouvrir Calendly
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultingPage;
