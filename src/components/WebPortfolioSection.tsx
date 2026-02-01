import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { ShinyText } from "@/components/ui/shiny-text";

const webProjects = [
  {
    title: "Restaurant Le Gourmet",
    category: "Site Vitrine",
    description: "Site élégant avec système de réservation en ligne et menu digital",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    tags: ["React", "Réservation", "Responsive"],
    link: "https://le-gourmet-experience-13-main.vercel.app",
  },
  {
    title: "Boutique Mode Élégance",
    category: "E-commerce",
    description: "Boutique en ligne complète avec paiement sécurisé et gestion des stocks",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    tags: ["Next.js", "Stripe", "CMS"],
    link: "https://mode-l-gance-showcase.vercel.app",
  },
  {
    title: "Cabinet Avocat Martin",
    category: "Site Professionnel",
    description: "Site institutionnel avec prise de rendez-vous et blog juridique",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
    tags: ["WordPress", "SEO", "RDV"],
    link: "https://martin-law-studio.vercel.app",
  },
  {
    title: "Horizon Experience",
    category: "Experience 3D",
    description: "Voyage immersif à travers les révolutions technologiques avec Three.js",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    tags: ["Three.js", "WebGL", "Immersif"],
    link: "https://horizon-gules-one.vercel.app",
  },
  {
    title: "FitXP",
    category: "Application Mobile",
    description: "App de suivi sportif avec programmes personnalisés et nutrition",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
    tags: ["React", "PWA", "Mobile"],
    link: "/fitxp",
    isInternal: true,
  },
  {
    title: "Coaching Pro App",
    category: "Web Application",
    description: "Plateforme de coaching avec prise de rendez-vous, vidéos et suivi client",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    tags: ["React", "Video", "Dashboard"],
    link: "https://nexaura-zeta.vercel.app",
  },
];

export function WebPortfolioSection() {
  return (
    <section id="portfolio" className="relative py-24 bg-gradient-to-b from-black via-violet-950/10 to-black overflow-hidden">
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm mb-6 border border-violet-500/20">
            Nos réalisations
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Sites web que j'ai <GradientText>créés</GradientText>
          </h2>
          <ShinyText className="text-lg text-gray-400 max-w-2xl mx-auto">
            Des projets variés, du site vitrine à l'e-commerce, tous conçus sur mesure
          </ShinyText>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {webProjects.map((item, index) => (
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
                          Voir le site
                        </Button>
                      </a>
                    )
                  ) : (
                    <Button variant="glass" size="sm" className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-white/20 hover:bg-white/30 text-white border-white/30 cursor-not-allowed opacity-70">
                      Projet confidentiel
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

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "50+", label: "Sites livrés" },
            { value: "98%", label: "Clients satisfaits" },
            { value: "4.8s", label: "Temps de chargement moyen" },
            { value: "100%", label: "Responsive" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="text-2xl md:text-3xl font-bold text-violet-400">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
