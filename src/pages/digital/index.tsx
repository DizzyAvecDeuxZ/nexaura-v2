import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Building2, Zap, Clock, Shield, Wrench, Sparkles, TrendingUp, Users, Truck, HardHat, Factory, Plane, Briefcase, FileText, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

import { GradientText } from "@/components/ui/gradient-text";
import { ShinyText } from "@/components/ui/shiny-text";
import { TiltedCard } from "@/components/ui/tilted-card";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Vortex } from "@/components/ui/vortex";
import { enterpriseTiers, maintenanceEnterpriseTiers } from "@/lib/data/pricing";

const stats = [
  { value: "2", label: "Apps métier en production", icon: Building2 },
  { value: "340%", label: "ROI moyen constaté", icon: TrendingUp },
  { value: "99.9%", label: "Uptime garanti", icon: Shield },
  { value: "4-6s", label: "Délai POC", icon: Clock }
];

const differentiators = [
  {
    icon: Sparkles,
    title: "IA Opérationnelle Intégrée",
    desc: "Pas de bullshit. Nos solutions utilisent réellement l'IA pour automatiser vos processus métier."
  },
  {
    icon: Shield,
    title: "Preuve par l'Exemple",
    desc: "sixtTrack gère déjà les opérations d'un sous-traitant aéroportuaire. On ne vend pas du vent."
  },
  {
    icon: TrendingUp,
    title: "ROI Mesurable dès 3 Mois",
    desc: "Nos clients constatent une réduction de 70-90% du temps de saisie et des erreurs."
  },
  {
    icon: Users,
    title: "Accompagnement Transformation",
    desc: "On ne livre pas juste du code. On accompagne vos équipes dans l'adoption des nouveaux outils."
  }
];

const sectors = [
  { name: "Transport & Logistique", growth: "+18%", desc: "Gestion de flotte, suivi livraisons, preuves de livraison digitales", icon: Truck },
  { name: "BTP & Construction", growth: "+22%", desc: "Suivi de chantier, rapports terrain, conformité sécurité", icon: HardHat },
  { name: "Industrie & Manufacture", growth: "+15%", desc: "Contrôle qualité, maintenance, traçabilité production", icon: Factory },
  { name: "Aéroportuaire", growth: "+12%", desc: "Gestion opérationnelle, suivi véhicules, conformité réglementaire", icon: Plane },
  { name: "Facility Management", growth: "+16%", desc: "Interventions terrain, gestion des OT, reporting client", icon: Building2 },
];

const caseStudies = [
  {
    id: "sixttrack",
    title: "sixtTrack",
    subtitle: "Sous-traitant aéroportuaire",
    industry: "Transport / Aéroportuaire",
    description: "Application de gestion opérationnelle pour le suivi des mouvements de véhicules et la gestion des équipes sur l'aéroport CDG.",
    metrics: [
      { label: "Temps de saisie", value: "-87%", detail: "De 8 min à 1 min par opération" },
      { label: "Erreurs de saisie", value: "-88%", detail: "Grâce à la validation automatique" },
      { label: "Visibilité temps réel", value: "100%", detail: "Dashboard manager live" },
      { label: "ROI", value: "340%", detail: "En 12 mois" }
    ],
    features: ["Mode offline avec sync", "Dashboard KPI temps réel", "Export CSV", "Règles métier intégrées", "Multi-utilisateurs"],
    demoUrl: "https://app.testpage.fr/",
    demoCreds: "Emp001 / 123456",
    color: "blue"
  },
  {
    id: "ia-ao",
    title: "IA Appels d'Offres",
    subtitle: "Automatisation B2B",
    industry: "Services / BTP",
    description: "Application métier d'automatisation qui analyse les cahiers des charges et génère des réponses structurées aux appels d'offres. Solution technique concrète, pas de l'IA générique.",
    metrics: [
      { label: "Temps de réponse", value: "-70%", detail: "De 3 jours à 4 heures" },
      { label: "Taux de réussite", value: "+50%", detail: "Meilleure qualité des réponses" },
      { label: "AO analysés/mois", value: "50+", detail: "Capacité de traitement" },
      { label: "ROI", value: "1 150%", detail: "Sur 6 mois" }
    ],
    features: ["Parsing PDF automatique", "Génération réponses structurées", "Base de connaissances", "Apprentissage continu", "Intégration CRM"],
    demoUrl: null,
    demoCreds: null,
    color: "violet"
  }
];

const solutions = [
  {
    icon: Building2,
    title: "Applications Métiers Sur-mesure",
    desc: "Digitalisation de vos processus opérationnels spécifiques. Mode offline, sync temps réel, règles métier.",
    price: "À partir de 35 000 €",
    target: "ETI & Grands comptes"
  },
  {
    icon: FileText,
    title: "IA pour Appels d'Offres",
    desc: "Automatisez la réponse aux marchés publics et privés. Gagnez du temps, augmentez votre taux de réussite.",
    price: "8 500 € + 450 €/mois",
    target: "BTP, Services, Consulting"
  },
  {
    icon: BarChart3,
    title: "Dashboards & Analytics",
    desc: "Visualisez vos KPIs en temps réel. Prenez des décisions basées sur les données, pas sur l'intuition.",
    price: "À partir de 15 000 €",
    target: "Tous secteurs"
  },
  {
    icon: Zap,
    title: "Validation Technique & POC",
    desc: "Validation technique de votre projet en 4-6 semaines. Architecture, faisabilité et POC concret avant investissement. Preuve technique, pas de slides.",
    price: "15 000 € - 25 000 €",
    target: "Premier projet digital"
  }
];

export default function DigitalPage() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Vortex violet */}
      <div className="fixed inset-0 z-0" aria-hidden="true">
        <Vortex
          backgroundColor="black"
          className="w-full h-full"
          particleCount={80}
          baseHue={270}
          baseSpeed={0.5}
          rangeSpeed={0.8}
        />
      </div>

      <Header 
        variant="digital" 
        ctaLabel="Demander un audit gratuit"
        onCtaClick={() => navigate("/digital/contact")}
      />

      <main className="relative z-10">
        {/* Hero Section - B2B Enterprise */}
        <section className="min-h-screen flex items-center justify-center px-4 pt-24 pb-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm mb-6 border border-violet-500/20">
                Solutions digitales B2B pour entreprises
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Digitalisez vos opérations,{" "}
                <GradientText>mesurez les résultats</GradientText>
              </h1>

              <ShinyText className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
                Applications métiers sur-mesure et IA opérationnelle pour ETI et grands comptes. 
                Preuve par l'exemple : sixtTrack gère déjà les opérations d'un sous-traitant aéroportuaire.
              </ShinyText>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button variant="cta" size="xl" onClick={() => navigate("/digital/contact")}>
                  Audit gratuit de mon projet
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Voir nos réalisations
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

        {/* Case Studies Section */}
        <section id="case-studies" className="py-24 px-4 bg-gradient-to-b from-black via-violet-950/10 to-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Nos <GradientText>réalisations</GradientText>
              </h2>
              <ShinyText className="text-lg text-gray-400">
                Des applications métier en production, pas des maquettes
              </ShinyText>
            </div>

            {/* Case Study Selector */}
            <div className="flex justify-center gap-4 mb-12">
              {caseStudies.map((cs, index) => (
                <button
                  key={cs.id}
                  onClick={() => setActiveCaseStudy(index)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeCaseStudy === index 
                      ? 'bg-violet-500 text-white' 
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {cs.title}
                </button>
              ))}
            </div>

            {/* Active Case Study */}
            <motion.div
              key={activeCaseStudy}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10"
            >
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-violet-500/20 text-violet-400 text-sm mb-4">
                    {caseStudies[activeCaseStudy].industry}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {caseStudies[activeCaseStudy].title}
                  </h3>
                  <p className="text-xl text-gray-400 mb-6">
                    {caseStudies[activeCaseStudy].subtitle}
                  </p>
                  <p className="text-gray-300 mb-8">
                    {caseStudies[activeCaseStudy].description}
                  </p>

                  {caseStudies[activeCaseStudy].demoUrl && (
                    <div className="bg-violet-500/10 rounded-xl p-4 mb-8 border border-violet-500/20">
                      <p className="text-violet-400 font-semibold mb-2">🚀 Démo en ligne disponible</p>
                      <p className="text-gray-400 text-sm mb-3">
                        Testez l'application avec les identifiants ci-dessous
                      </p>
                      <div className="flex gap-4 text-sm">
                        <code className="bg-black/50 px-3 py-1 rounded text-gray-300">
                          URL: {caseStudies[activeCaseStudy].demoUrl}
                        </code>
                        <code className="bg-black/50 px-3 py-1 rounded text-gray-300">
                          {caseStudies[activeCaseStudy].demoCreds}
                        </code>
                      </div>
                    </div>
                  )}

                  <div className="space-y-3">
                    {caseStudies[activeCaseStudy].features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-6">Résultats mesurés</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {caseStudies[activeCaseStudy].metrics.map((metric, i) => (
                      <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                        <div className="text-3xl font-bold text-emerald-400 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-white font-medium mb-1">{metric.label}</div>
                        <div className="text-gray-500 text-sm">{metric.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Nos <GradientText>solutions</GradientText>
              </h2>
              <ShinyText className="text-lg text-gray-400">
                Des offres packagées pour des résultats rapides et mesurables
              </ShinyText>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-violet-500/30 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-violet-500/20 flex items-center justify-center mb-6">
                    <solution.icon className="w-7 h-7 text-violet-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-400 mb-6">{solution.desc}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div>
                      <p className="text-violet-400 font-semibold">{solution.price}</p>
                      <p className="text-gray-500 text-sm">{solution.target}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-violet-400 transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-black via-violet-950/10 to-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Pourquoi les entreprises choisissent <GradientText>Nexaura</GradientText> ?
              </h2>
              <ShinyText className="text-lg text-gray-400">
                Ce qui nous différencie des intégrateurs classiques
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
                Secteurs d'<GradientText>expertise</GradientText>
              </h2>
              <ShinyText className="text-lg text-gray-400">
                Nous comprenons vos enjeux métier spécifiques
              </ShinyText>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((sector, index) => (
                <motion.div
                  key={sector.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-fuchsia-500/30 hover:bg-white/10 transition-all cursor-pointer"
                  onClick={() => navigate("/digital/contact")}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-fuchsia-500/20 flex items-center justify-center flex-shrink-0">
                      <sector.icon className="w-6 h-6 text-fuchsia-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{sector.name}</h3>
                      <span className="text-fuchsia-400 text-sm font-semibold">{sector.growth}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{sector.desc}</p>
                  <div className="mt-4 flex items-center text-violet-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Discuter de mon projet <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 px-4 bg-gradient-to-b from-black via-emerald-950/10 to-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Investissement & <span className="text-emerald-400">ROI</span>
              </h2>
              <ShinyText className="text-lg text-gray-400 mb-8">
                Des budgets adaptés à la taille de votre entreprise et à la complexité de votre projet
              </ShinyText>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {enterpriseTiers.map((tier, index) => (
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
                    {tier.badge && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                        {tier.badge}
                      </span>
                    )}

                    <div className={`w-12 h-12 rounded-xl ${tier.popular ? 'bg-emerald-500/20' : 'bg-white/10'} flex items-center justify-center mb-4`}>
                      <tier.icon className="w-6 h-6 text-emerald-400" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{tier.description}</p>

                    <div className="mb-4">
                      <span className="text-3xl font-bold text-emerald-400">{tier.price}</span>
                    </div>

                    <p className="text-gray-500 text-sm mt-2 mb-4">⏱️ {tier.deliveryTime}</p>

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
                      onClick={() => navigate("/digital/contact")}
                    >
                      {tier.cta}
                    </Button>
                  </TiltedCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Accompagnement <span className="text-violet-400">Continu</span>
              </h2>
              <ShinyText className="text-lg text-gray-400 mb-8">
                Parce qu'une solution digitale se construit aussi après le lancement
              </ShinyText>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {maintenanceEnterpriseTiers.map((tier, index) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-violet-500/30 transition-all"
                >
                  {tier.popular && (
                    <span className="inline-block bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      Recommandé
                    </span>
                  )}

                  <h3 className="text-lg font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{tier.description}</p>

                  <div className="mb-4">
                    <span className="text-2xl font-bold text-violet-400">{tier.price}</span>
                    {tier.period && <span className="text-gray-500 text-sm">{tier.period}</span>}
                  </div>

                  <ul className="space-y-2">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-black via-violet-950/10 to-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Notre <GradientText>méthodologie</GradientText>
              </h2>
              <ShinyText className="text-lg text-gray-400">
                Un processus éprouvé pour des résultats mesurables
              </ShinyText>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {[
                { number: "01", title: "Discovery", desc: "Atelier cadrage offert, audit processus existants" },
                { number: "02", title: " POC", desc: "Preuve de concept 4-6 semaines, validation ROI" },
                { number: "03", title: "Développement", desc: "Sprints de 2 semaines, démos régulières" },
                { number: "04", title: "Déploiement", desc: "Formation équipes, accompagnement changement" },
                { number: "05", title: "Optimisation", desc: "Monitoring, améliorations continues, support" }
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

        {/* Trust Section - Stats uniquement */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ils nous font <GradientText>confiance</GradientText>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-violet-400 mb-2">340%</div>
                <p className="text-gray-400 text-sm">ROI moyen constaté chez nos clients ETI</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-fuchsia-400 mb-2">-87%</div>
                <p className="text-gray-400 text-sm">Temps de saisie réduit (cas sixtTrack)</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-emerald-400 mb-2">4-6s</div>
                <p className="text-gray-400 text-sm">Délai moyen pour un POC validant</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Prêt à digitaliser vos opérations ?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Audit gratuit de 45 minutes : on analyse vos processus, identifie les gains potentiels, 
              et vous repartez avec une roadmap concrète — même si vous ne travaillez pas avec nous.
            </p>
            <Button variant="cta" size="xl" onClick={() => navigate("/digital/contact")}>
              Demander mon audit gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-gray-500 text-sm mt-4">
              Réponse sous 24h · Sans engagement · Démo sixtTrack disponible
            </p>
          </div>
        </section>
      </main>

      <Footer variant="digital" />
    </div>
  );
}
