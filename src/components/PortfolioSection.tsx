import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import { ShinyText } from "@/components/ui/shiny-text";

const portfolioItems = [
  {
    title: "Restaurant Le Gourmet",
    category: "Site Vitrine",
    description: "Site élégant avec système de réservation en ligne",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    tags: ["Restaurant", "Réservation"],
    link: "https://le-gourmet-experience-13-main.vercel.app",
  },
  {
    title: "Boutique Mode Élégance",
    category: "E-commerce",
    description: "Boutique en ligne complète avec paiement sécurisé",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    tags: ["E-commerce", "Mode"],
    link: "https://mode-l-gance-showcase.vercel.app",
  },
  {
    title: "FitXP",
    category: "Application Mobile",
    description: "App de suivi sportif avec programmes personnalisés",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
    tags: ["Mobile", "Fitness"],
    link: "/fitxp",
    isInternal: true,
  },
  {
    title: "Cabinet Avocat Martin",
    category: "Site Vitrine",
    description: "Site professionnel avec prise de rendez-vous",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
    tags: ["Juridique", "RDV"],
    link: "https://martin-law-studio.vercel.app",
  },
  {
    title: "Startup Tech",
    category: "Web App",
    description: "Dashboard analytics moderne et responsive",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["SaaS", "Dashboard"],
  },
  {
    title: "Horizon",
    category: "Experience 3D",
    description: "Voyage immersif a travers les revolutions technologiques",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    tags: ["3D", "Immersif", "Three.js"],
    link: "https://horizon-gules-one.vercel.app",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Sparkles background */}
      <SparklesCore
        id="portfolioSparkles"
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={40}
        className="w-full h-full absolute inset-0"
        particleColor="#ec4899"
      />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Notre <span className="gradient-text">univers créatif</span>
          </h2>
          <ShinyText className="text-lg text-gray-400 max-w-2xl">
            Découvrez quelques-unes de nos réalisations récentes
          </ShinyText>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-violet-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-violet-600/80 via-violet-500/40 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm flex items-center justify-center">
                  {item.link ? (
                    item.isInternal ? (
                      <Link to={item.link}>
                        <Button variant="glass" size="sm" className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-white/20 hover:bg-white/30 text-white border-white/30">
                          <ArrowRight className="w-4 h-4 mr-2" />
                          Découvrir
                        </Button>
                      </Link>
                    ) : (
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <Button variant="glass" size="sm" className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-white/20 hover:bg-white/30 text-white border-white/30">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Voir le projet
                        </Button>
                      </a>
                    )
                  ) : (
                    <Button variant="glass" size="sm" className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-white/20 hover:bg-white/30 text-white border-white/30 cursor-not-allowed opacity-70">
                      Bientôt disponible
                    </Button>
                  )}
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-violet-500/10 text-violet-300 rounded-full border border-violet-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
