import { motion } from "framer-motion";
import { Target, Users, Lightbulb, Globe, ArrowLeft } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import { GradientText } from "@/components/ui/gradient-text";
import { NexauraLogo3DChrome } from "@/components/NexauraLogo3DChrome";
import { useIsMobile } from "@/hooks/use-mobile";

const values = [
  {
    icon: Target,
    title: "Excellence opérationnelle",
    description: "Des livrables de qualité, dans les délais, avec une attention obsessionnelle aux détails."
  },
  {
    icon: Lightbulb,
    title: "Innovation pragmatique",
    description: "Pas de tech pour la tech. Chaque solution répond à un besoin métier concret."
  },
  {
    icon: Users,
    title: "Partenariat de confiance",
    description: "Nous accompagnons nos clients sur le long terme, au-delà du simple projet."
  },
  {
    icon: Globe,
    title: "Perspective internationale",
    description: "Présence en France et en Algérie, avec une compréhension des deux écosystèmes."
  }
];

const AboutPage = () => {
  const isMobile = useIsMobile();

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0" aria-hidden="true">
        <Vortex
          backgroundColor="black"
          className="w-full h-full"
          particleCount={isMobile ? 30 : 80}
          baseHue={260}
          baseSpeed={0.01}
          rangeSpeed={0.3}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <a href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à l'accueil</span>
          </a>
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10 pt-24">
        {/* Hero */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <NexauraLogo3DChrome size={isMobile ? 100 : 150} className="mx-auto mb-8" />
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                À propos de <GradientText>Nexaura Holding</GradientText>
              </h1>

              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Une holding technologique regroupant deux expertises complémentaires : 
                le développement digital opérationnel et le conseil stratégique en intelligence artificielle.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Notre vision</h2>
            <div className="prose prose-invert mx-auto">
              <p className="text-gray-400 text-lg leading-relaxed">
                Nexaura est né d'un constat simple : les entreprises ont besoin d'accompagnement 
                à deux niveaux distincts. D'abord, une exécution technique irréprochable pour leurs 
                projets digitaux (applications métier). Ensuite, une expertise stratégique pour 
                naviguer dans la révolution de l'intelligence artificielle.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mt-4">
                Plutôt que de mélanger ces deux univers sous une même offre confuse, nous avons 
                choisi de créer deux entités clairement distinctes, chacune avec son positionnement, 
                ses méthodes et son expertise spécialisée.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Nos valeurs</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Structure */}
        <section className="py-24 px-4 bg-gradient-to-b from-black via-violet-950/10 to-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Notre structure</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-violet-500/30">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Nexaura <span className="text-violet-400">Digital</span>
                </h3>
                <p className="text-gray-400 mb-4">
                  Agence de développement mobile. Applications iOS/Android sur-mesure. 
                  Livraison rapide, qualité premium.
                </p>
                <a href="/digital" className="text-violet-400 hover:text-violet-300 inline-flex items-center gap-2">
                  Découvrir Digital <ArrowLeft className="w-4 h-4 rotate-180" />
                </a>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-indigo-500/30">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Nexaura <span className="text-indigo-400">Consulting</span>
                </h3>
                <p className="text-gray-400 mb-4">
                  Conseil en intelligence artificielle. Audit, POC, accompagnement 
                  stratégique. Transformation digitale des entreprises.
                </p>
                <a href="/consulting" className="text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-2">
                  Découvrir Consulting <ArrowLeft className="w-4 h-4 rotate-180" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <NexauraLogo3DChrome size={40} />
              <span className="text-white font-bold">Nexaura Holding</span>
            </div>
            <p className="text-gray-600 text-sm">© 2026 Tous droits réservés</p>
            <div className="flex gap-6">
              <a href="/digital" className="text-gray-500 hover:text-violet-400 text-sm">Digital</a>
              <a href="/consulting" className="text-gray-500 hover:text-indigo-400 text-sm">Consulting</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
