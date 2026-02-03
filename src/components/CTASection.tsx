import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import { ShinyText } from "@/components/ui/shiny-text";
import { GlareCard } from "@/components/ui/glare-card";
import { GlareHover } from "@/components/ui/glare-hover";

interface CTASectionProps {
  onOpenContact: () => void;
}

export function CTASection({ onOpenContact }: CTASectionProps) {
  return (
    <section id="contact" className="relative py-32 bg-gradient-to-br from-black via-violet-950/20 to-black overflow-hidden">
      {/* Sparkles background - densité réduite */}
      <SparklesCore
        id="ctaSparkles"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={30}
        className="w-full h-full absolute inset-0"
        particleColor="#a855f7"
      />

      {/* Background decoration - animations CSS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Prêt à créer quelque chose{" "}
            <span className="gradient-text">d'extraordinaire</span> ?
          </h2>
          <ShinyText className="text-lg text-gray-400 mb-10 max-w-xl">
            Parlons de votre projet. Appel gratuit de 20 minutes, aucun engagement.
          </ShinyText>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <GlareCard>
              <Button
                variant="cta"
                size="xl"
                className="group"
                onClick={onOpenContact}
              >
                <Phone className="mr-2" />
                Réserver mon appel
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
            </GlareCard>
            <GlareHover className="rounded-lg">
              <Button
                variant="outlineGreen"
                size="lg"
                className="bg-white/5 hover:bg-white/10 text-white border-white/20"
                onClick={() => document.getElementById('offres')?.scrollIntoView({ behavior: 'smooth' })}
              >
                En savoir plus
              </Button>
            </GlareHover>
          </div>
        </div>
      </div>
    </section>
  );
}
