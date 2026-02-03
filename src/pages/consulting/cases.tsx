import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Vortex } from "@/components/ui/vortex";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { useIsMobile } from "@/hooks/use-mobile";

const detailedCases = [
  {
    id: "doc-automation",
    icon: "FileText",
    title: "Automatisation Documents",
    subtitle: "Traitement intelligent des documents entrants",
    challenge: "Un cabinet comptable traitait 500+ documents par jour manuellement. Temps de traitement : 15 min/doc. Erreurs humaines fréquentes.",
    solution: "Implémentation d'un pipeline IA : OCR + NLP pour extraction automatique des données + classification intelligente.",
    results: [
      { metric: "-70%", label: "Temps de traitement", icon: Clock },
      { metric: "-95%", label: "Erreurs de saisie", icon: TrendingUp },
      { metric: "+40%", label: "Productivité opérationnelle", icon: Users }
    ],
    technologies: ["Google Document AI", "Python", "API REST", "Dashboard React"],
    duration: "6 semaines",
    roi: "8 mois"
  },
  {
    id: "chatbot-enterprise",
    icon: "MessageSquare",
    title: "Chatbot Enterprise",
    subtitle: "Support client automatisé 24/7",
    challenge: "Une PME E-commerce recevait 2000+ tickets/mois. Temps de réponse moyen : 4h. Coût support croissant.",
    solution: "Chatbot RAG intégré à la base de connaissances + base produits. Escalade intelligente vers humains si nécessaire.",
    results: [
      { metric: "-40%", label: "Tickets support", icon: TrendingUp },
      { metric: "24/7", label: "Disponibilité", icon: Clock },
      { metric: "+25pts", label: "Satisfaction client", icon: Users }
    ],
    technologies: ["OpenAI GPT-4", "Pinecone Vector DB", "Node.js", "WebSocket"],
    duration: "4 semaines",
    roi: "4 mois"
  },
  {
    id: "bi-prediction",
    icon: "BarChart3",
    title: "BI + Prédiction",
    subtitle: "Anticipation des ventes et stocks",
    challenge: "Une entreprise de distribution subissait des ruptures de stock et surstocks. Prévisions manuelles imprécises.",
    solution: "Modèle ML de prédiction de demande intégré au SI. Tableaux de bord temps réel avec alertes proactives.",
    results: [
      { metric: "+25%", label: "Précision prévisions", icon: TrendingUp },
      { metric: "-30%", label: "Ruptures de stock", icon: TrendingUp },
      { metric: "-20%", label: "Coûts stockage", icon: DollarSign }
    ],
    technologies: ["Python Scikit-learn", "TensorFlow", "Power BI", "Azure ML"],
    duration: "8 semaines",
    roi: "6 mois"
  },
  {
    id: "ai-agents",
    icon: "Bot",
    title: "Agents IA Internes",
    subtitle: "Automatisation workflows métier",
    challenge: "Le service RH passait 60% de son temps sur des tâches administratives répétitives. Turnover élevé.",
    solution: "3 agents IA autonomes : tri CV, génération offres, onboarding documents. Intégration Slack + ATS.",
    results: [
      { metric: "-50%", label: "Tâches manuelles", icon: Clock },
      { metric: "+3h/j", label: "Temps gagné/RH", icon: Clock },
      { metric: "-25%", label: "Turnover", icon: TrendingUp }
    ],
    technologies: ["LangChain", "CrewAI", "OpenAI", "Slack API"],
    duration: "10 semaines",
    roi: "10 mois"
  }
];

export default function CasesPage() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

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
        ctaLabel="Discuter de mon cas"
        onCtaClick={() => navigate("/consulting/contact")}
      />

      <main className="relative z-10 pt-24">
        {/* Hero */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cas d'<span className="text-yellow-400">usage</span> concrets
            </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Des implémentations réelles avec ROI mesurable. 
              Découvrez comment l'IA transforme concrètement nos clients.
            </p>
          </div>
        </section>

        {/* Cases */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {detailedCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left: Content */}
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{caseStudy.title}</h2>
                    <p className="text-yellow-400 mb-6">{caseStudy.subtitle}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase mb-1">Le défi</h4>
                        <p className="text-gray-300">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase mb-1">Notre solution</h4>
                        <p className="text-gray-300">{caseStudy.solution}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {caseStudy.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-6 text-sm text-gray-400">
                      <span>⏱️ {caseStudy.duration}</span>
                      <span>💰 ROI {caseStudy.roi}</span>
                    </div>
                  </div>

                  {/* Right: Results */}
                  <div className="bg-black/30 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-white mb-6">Résultats obtenus</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {caseStudy.results.map((result, i) => (
                        <div key={i} className="text-center">
                          <result.icon className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-white">{result.metric}</div>
                          <div className="text-xs text-gray-500">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-t from-yellow-950/20 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Votre cas ressemble à l'un de ces exemples ?
            </h2>
            <Button 
              variant="cta" 
              size="xl" 
              className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-black font-semibold shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:shadow-[0_0_50px_rgba(250,204,21,0.6)] transition-all duration-300"
              onClick={() => navigate("/consulting/contact")}
            >
              Discutons de votre projet
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer variant="consulting" />
    </div>
  );
}
