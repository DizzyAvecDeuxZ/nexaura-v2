import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { GradientText } from "@/components/ui/gradient-text";
import { GlareCard } from "@/components/ui/glare-card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { StatCard } from "@/components/ui/stat-card";
import { ShinyText } from "@/components/ui/shiny-text";

interface HeroSectionProps {
  onOpenContact: () => void;
}

export function HeroSection({ onOpenContact }: HeroSectionProps) {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-36 md:pt-40 lg:pt-32 pb-16 px-4"
    >
      <ShootingStars
        starColor="#a855f7"
        trailColor="#ec4899"
        minSpeed={15}
        maxSpeed={35}
        minDelay={800}
        maxDelay={3000}
      />

      {/* Decorative SVG shapes - hidden from screen readers */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <svg className="absolute top-10 right-4 w-32 h-32 md:top-20 md:right-20 md:w-64 md:h-64 opacity-10" viewBox="0 0 200 200">
          <motion.polygon
            points="100,10 190,60 190,140 100,190 10,140 10,60"
            fill="none"
            stroke="hsl(262, 83%, 66%)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </svg>
        <svg className="absolute bottom-10 left-4 w-24 h-24 md:bottom-20 md:left-20 md:w-48 md:h-48 opacity-10" viewBox="0 0 200 200">
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="hsl(330, 81%, 60%)"
            strokeWidth="1"
            strokeDasharray="10,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1, rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      <div className="relative z-10 container-wide px-4 md:px-8 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <GradientText>
              Créer l'expérience web de demain
            </GradientText>
          </h1>

          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <ShinyText className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Nous créons des sites et applications qui impressionnent. Design futuriste, technologie moderne, livraison rapide.
            </ShinyText>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <ShimmerButton>
              <Button
                variant="cta"
                size="xl"
                className="group relative overflow-hidden bg-transparent border-0 focus-visible-ring"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10">Voir nos projets</span>
                <ArrowRight className="transition-transform group-hover:translate-x-1 relative z-10" aria-hidden="true" />
              </Button>
            </ShimmerButton>
            <GlareCard>
              <Button
                variant="heroOutline"
                size="xl"
                onClick={onOpenContact}
                className="backdrop-blur-sm focus-visible-ring"
              >
                <Phone className="mr-2" aria-hidden="true" />
                Réserver un appel
              </Button>
            </GlareCard>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}
          {[
            { value: "50+", label: "Projets livrés" },
            { value: "7-15j", label: "Délai moyen" },
            { value: "98%", label: "Clients satisfaits" },
            { value: "24h", label: "Réponse garantie" },
          ].map((stat, i) => (
            <StatCard
              key={i}
              value={stat.value}
              label={stat.label}
              delay={2.1 + i * 0.1}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator - decorative */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:block animate-bounce-slow"
        aria-hidden="true"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2 backdrop-blur-sm bg-white/5">
          <div className="w-1.5 h-3 bg-gradient-to-b from-primary to-secondary rounded-full animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
}
