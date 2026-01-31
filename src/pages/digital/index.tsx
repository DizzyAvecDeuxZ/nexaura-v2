import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Globe, Smartphone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Vortex } from "@/components/ui/vortex";
import { GradientText } from "@/components/ui/gradient-text";
import { ShinyText } from "@/components/ui/shiny-text";
import { TiltedCard } from "@/components/ui/tilted-card";
import { GlareHover } from "@/components/ui/glare-hover";
import { NexauraLogo3DChrome } from "@/components/NexauraLogo3DChrome";
import { useIsMobile } from "@/hooks/use-mobile";

const ContactModal = lazy(() => import("@/components/ContactModal"));

// Website offers - CORRECTED PRICES (single currency display)
const websiteOffers = [
  {
    icon: Globe,
    name: "One Page",
    description: "Landing page, portfolio, vitrine simple",
    price: "990 €",
    priceDZ: "145 000 DA",
    delay: "5-7 jours",
    features: [
      "Design sur-mesure",
      "Responsive mobile",
      "Formulaire de contact",
      "Optimisation SEO de base",
      "Hébergement 1 an offert"
    ],
    popular: false,
    color: "violet"
  },
  {
    icon: Sparkles,
    name: "Business",
    description: "Site 5-10 pages, blog, SEO avancé",
    price: "2 490 €",
    priceDZ: "365 000 DA",
    delay: "10-14 jours",
    features: [
      "Tout l'offre One Page",
      "5 à 10 pages",
      "Blog / actualités",
      "SEO avancé",
      "Analytics & rapports",
      "Support 6 mois inclus"
    ],
    popular: true,
    color: "violet"
  },
  {
    icon: Globe,
    name: "E-commerce",
    description: "Boutique en ligne complète",
    price: "4 900 €",
    priceDZ: "720 000 DA",
    delay: "3-4 semaines",
    features: [
      "Jusqu'à 100 produits",
      "Paiement sécurisé",
      "Gestion stocks",
      "Comptes clients",
      "Formation admin",
      "Support 12 mois inclus"
    ],
    popular: false,
    color: "violet"
  },
  {
    icon: Sparkles,
    name: "Sur-mesure",
    description: "Architecture complexe, API, intranet",
    price: "Sur devis",
    priceDZ: "Sur devis",
    delay: "6+ semaines",
    features: [
      "Architecture personnalisée",
      "Intégrations API",
      "Back-office sur-mesure",
      "Multi-utilisateurs",
      "Sécurité renforcée",
      "Maintenance dédiée"
    ],
    popular: false,
    color: "purple"
  }
];

// App offers - CORRECTED PRICES
const appOffers = [
  {
    icon: Smartphone,
    name: "App Vitrine",
    description: "iOS ou Android, fonctionnalités de base",
    price: "8 900 €",
    priceDZ: "1 300 000 DA",
    delay: "3-4 semaines",
    features: [
      "iOS ou Android",
      "Design natif",
      "3-5 écrans",
      "Publication store",
      "Code source livré"
    ],
    popular: false,
    color: "fuchsia"
  },
  {
    icon: Smartphone,
    name: "App Business",
    description: "iOS + Android, authentification, API",
    price: "18 500 €",
    priceDZ: "2 700 000 DA",
    delay: "6-8 semaines",
    features: [
      "iOS + Android",
      "Authentification utilisateurs",
      "API & backend",
      "Notifications push",
      "Analytics intégré",
      "Support 6 mois"
    ],
    popular: true,
    color: "fuchsia"
  },
  {
    icon: Smartphone,
    name: "App Premium",
    description: "Marketplace, temps réel, sur-mesure",
    price: "Sur devis",
    priceDZ: "Sur devis",
    delay: "10+ semaines",
    features: [
      "Architecture scalable",
      "Temps réel (WebSocket)",
      "Marketplace multi-vendeurs",
      "Back-office complet",
      "Tests automatisés",
      "Support 12 mois"
    ],
    popular: false,
    color: "pink"
  }
];

// Process steps
const processSteps = [
  { number: "01", title: "Discovery", desc: "Échange 30-45 min pour comprendre votre besoin" },
  { number: "02", title: "Design", desc: "Maquettes Figma, validation, ajustements" },
  { number: "03", title: "Développement", desc: "Code moderne, revues régulières" },
  { number: "04", title: "Tests", desc: "QA, optimisations, recette" },
  { number: "05", title: "Lancement", desc: "Mise en ligne, formation, documentation" }
];

const DigitalPage = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currency, setCurrency] = useState<"eur" | "dzd">("eur");
  const isMobile = useIsMobile();

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0" aria-hidden="true">
        <Vortex
          backgroundColor="black"
          className="w-full h-full"
          particleCount={isMobile ? 50 : 150}
          baseHue={270}
          baseSpeed={0.01}
          rangeSpeed={0.3}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <NexauraLogo3DChrome size={50} />
            <div>
              <span className="text-white font-bold text-lg">Nexaura</span>
              <span className="text-violet-400 font-bold text-lg ml-1">Digital</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#sites" className="text-gray-400 hover:text-white transition-colors">Sites Web</a>
            <a href="#apps" className="text-gray-400 hover:text-white transition-colors">Applications</a>
            <a href="#process" className="text-gray-400 hover:text-white transition-colors">Process</a>
            <a href="#maintenance" className="text-gray-400 hover:text-white transition-colors">Maintenance</a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Currency Toggle */}
            <div className="hidden sm:flex bg-white/5 rounded-full p-1 border border-white/10">
              <button
                onClick={() => setCurrency("eur")}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  currency === "eur" ? "bg-violet-500 text-white" : "text-gray-400"
                }`}
              >
                EUR
              </button>
              <button
                onClick={() => setCurrency("dzd")}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  currency === "dzd" ? "bg-violet-500 text-white" : "text-gray-400"
                }`}
              >
                DZD
              </button>
            </div>

            <Button variant="cta" size="sm" onClick={() => setIsContactOpen(true)}>
              Demander un devis
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
              <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm mb-6 border border-violet-500/20">
                Développement Web & Mobile
              </span>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Votre site ou application,{" "}
                <GradientText>livré en 4 semaines</GradientText>
              </h1>

              <ShinyText className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                Sites vitrines, e-commerce, apps iOS/Android. Design premium, 
                code moderne, livraison rapide.
              </ShinyText>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="xl" onClick={() => setIsContactOpen(true)}>
                  Démarrer un projet
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  onClick={() => document.getElementById('sites')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Voir les offres
                </Button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
            >
              {[
                { value: "50+", label: "Projets livrés" },
                { value: "7-21j", label: "Délai moyen" },
                { value: "98%", label: "Satisfaction" },
                { value: "24h", label: "Support réactif" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Website Offers */}
        <section id="sites" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Sites <GradientText>Web</GradientText>
              </h2>
              <ShinyText className="text-lg text-gray-400">
                Des solutions adaptées à chaque étape de votre croissance
              </ShinyText>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {websiteOffers.map((offer, index) => (
                <motion.div
                  key={offer.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TiltedCard
                    className={`relative h-full bg-white/5 backdrop-blur-xl rounded-2xl p-6 border-2 ${
                      offer.popular ? 'border-violet-500' : 'border-white/10'
                    } hover:border-violet-500/50 transition-all duration-300`}
                  >
                    {offer.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                        Populaire
                      </span>
                    )}

                    <div className={`w-12 h-12 rounded-xl ${offer.popular ? 'bg-violet-500/20' : 'bg-white/10'} flex items-center justify-center mb-4`}>
                      <offer.icon className="w-6 h-6 text-violet-400" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{offer.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{offer.description}</p>

                    <div className="mb-4">
                      <span className="text-3xl font-bold text-violet-400">
                        {currency === "eur" ? offer.price : offer.priceDZ}
                      </span>
                      {offer.price !== "Sur devis" && (
                        <span className="text-gray-500 text-sm ml-1">HT</span>
                      )}
                    </div>

                    <p className="text-gray-500 text-sm mb-4">⏱️ {offer.delay}</p>

                    <ul className="space-y-2 mb-6">
                      {offer.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <Check className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {offer.popular ? (
                      <Button variant="cta" className="w-full" onClick={() => setIsContactOpen(true)}>
                        Demander un devis
                      </Button>
                    ) : (
                      <GlareHover className="w-full rounded-lg">
                        <Button 
                          variant="outline" 
                          className="w-full bg-white/5 hover:bg-white/10 text-white border-white/20"
                          onClick={() => setIsContactOpen(true)}
                        >
                          Demander un devis
                        </Button>
                      </GlareHover>
                    )}
                  </TiltedCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* App Offers */}
        <section id="apps" className="py-24 px-4 bg-gradient-to-b from-black via-violet-950/10 to-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Applications <span className="text-fuchsia-400">Mobiles</span>
              </h2>
              <ShinyText className="text-lg text-gray-400">
                iOS & Android. Du concept à la publication sur les stores.
              </ShinyText>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {appOffers.map((offer, index) => (
                <motion.div
                  key={offer.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TiltedCard
                    className={`relative h-full bg-white/5 backdrop-blur-xl rounded-2xl p-6 border-2 ${
                      offer.popular ? 'border-fuchsia-500' : 'border-white/10'
                    } hover:border-fuchsia-500/50 transition-all duration-300`}
                  >
                    {offer.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                        Recommandé
                      </span>
                    )}

                    <div className={`w-12 h-12 rounded-xl ${offer.popular ? 'bg-fuchsia-500/20' : 'bg-white/10'} flex items-center justify-center mb-4`}>
                      <offer.icon className="w-6 h-6 text-fuchsia-400" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{offer.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{offer.description}</p>

                    <div className="mb-4">
                      <span className="text-3xl font-bold text-fuchsia-400">
                        {currency === "eur" ? offer.price : offer.priceDZ}
                      </span>
                      {offer.price !== "Sur devis" && (
                        <span className="text-gray-500 text-sm ml-1">HT</span>
                      )}
                    </div>

                    <p className="text-gray-500 text-sm mb-4">⏱️ {offer.delay}</p>

                    <ul className="space-y-2 mb-6">
                      {offer.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <Check className="w-4 h-4 text-fuchsia-400 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant={offer.popular ? "cta" : "outline"}
                      className="w-full"
                      onClick={() => setIsContactOpen(true)}
                    >
                      Demander un devis
                    </Button>
                  </TiltedCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-24 px-4">
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
                  className="relative"
                >
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 h-full">
                    <span className="text-4xl font-bold text-violet-500/30">{step.number}</span>
                    <h3 className="text-lg font-bold text-white mt-2 mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-violet-500/50 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 px-4 bg-gradient-to-t from-violet-950/20 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Discutons de votre besoin. Réponse sous 24h, devis gratuit sans engagement.
            </p>
            <Button variant="cta" size="xl" onClick={() => setIsContactOpen(true)}>
              Demander un devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <NexauraLogo3DChrome size={40} />
              <span className="text-white font-bold">Nexaura <span className="text-violet-400">Digital</span></span>
            </div>
            <p className="text-gray-600 text-sm">
              Une marque de <a href="/" className="text-gray-400 hover:text-white">Nexaura Holding</a>
            </p>
            <div className="flex gap-6">
              <a href="/consulting" className="text-gray-500 hover:text-indigo-400 text-sm">Consulting</a>
              <a href="/holding/a-propos" className="text-gray-500 hover:text-white text-sm">À propos</a>
            </div>
          </div>
        </footer>
      </div>

      <Suspense fallback={null}>
        <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </Suspense>
    </div>
  );
};

export default DigitalPage;
