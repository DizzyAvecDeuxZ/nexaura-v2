import { Target, BarChart3, Rocket, Smartphone, Briefcase, Settings, Handshake, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import { ShinyText } from "@/components/ui/shiny-text";
import { TiltedCard } from "@/components/ui/tilted-card";
import { GlareHover } from "@/components/ui/glare-hover";

const websiteOffers = [
  {
    icon: Target,
    name: "Starter",
    description: "One-page, design épuré, mobile",
    delay: "5-7 jours",
    priceFR: "À partir de 590€",
    priceDZ: "À partir de 35 000 DA",
    deposit: "Acompte 30%",
    maintenance: "Maintenance optionnelle",
    popular: false,
    borderColor: "border-violet-500/20",
  },
  {
    icon: BarChart3,
    name: "Pro",
    description: "4-8 pages, e-commerce, SEO",
    delay: "7-12 jours",
    priceFR: "À partir de 1 990€",
    priceDZ: "À partir de 150 000 DA",
    deposit: "Acompte 30%",
    maintenance: "Maintenance incluse",
    popular: true,
    borderColor: "border-violet-500",
  },
  {
    icon: Rocket,
    name: "Elite",
    description: "Sur-mesure, architecture avancée",
    delay: "15+ jours",
    priceFR: "À définir",
    priceDZ: "À définir",
    deposit: "Acompte 30%",
    maintenance: "Maintenance sur devis",
    popular: false,
    borderColor: "border-pink-500/20",
  },
];

const appOffers = [
  {
    icon: Smartphone,
    name: "App Essentielle",
    description: "App vitrine, fonctionnalités de base, iOS ou Android",
    delay: "10-15 jours",
    priceFR: "À partir de 4 500€",
    priceDZ: "À partir de 180 000 DA",
    deposit: "Acompte 30%",
    maintenance: "Maintenance sur devis",
  },
  {
    icon: Briefcase,
    name: "App Business",
    description: "Gestion utilisateurs, paiements, notifications push, iOS + Android",
    delay: "20-30 jours",
    priceFR: "À partir de 22 000€",
    priceDZ: "À partir de 540 000 DA",
    deposit: "Acompte 30%",
    maintenance: "Maintenance sur devis",
  },
  {
    icon: Settings,
    name: "App Sur-Mesure",
    description: "Marketplace, temps réel, multi-rôles, back-office complet",
    delay: "30+ jours",
    priceFR: "À définir",
    priceDZ: "À définir",
    deposit: "Acompte 30%",
    maintenance: "Maintenance sur devis",
  },
];

interface OffersSectionProps {
  onOpenContact: () => void;
}

export function OffersSection({ onOpenContact }: OffersSectionProps) {
  return (
    <section id="offres" className="relative py-32 bg-black overflow-hidden">
      {/* Sparkles background */}
      <SparklesCore
        id="offersSparkles"
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={30}
        className="w-full h-full absolute inset-0"
        particleColor="#a855f7"
      />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
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
            Nos <span className="gradient-text">packages</span>
          </h2>
          <ShinyText className="text-lg text-gray-400 max-w-2xl">
            Des tarifs transparents adaptés à votre projet et votre budget
          </ShinyText>
        </motion.div>

        {/* Website Offers */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            💻 Sites Web
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {websiteOffers.map((offer, index) => (
              <TiltedCard
                key={offer.name}
                className={`relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border-2 ${offer.borderColor} hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 group ${
                  offer.popular ? "shadow-[0_0_20px_rgba(168,85,247,0.2)]" : ""
                }`}
              >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {offer.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-pink-500 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                    Populaire
                  </span>
                )}
                <motion.div
                  className={`w-12 h-12 rounded-xl ${offer.popular ? 'bg-violet-500/20' : 'bg-white/10'} flex items-center justify-center mb-4 transition-all duration-300`}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -10, 10, -10, 0],
                    boxShadow: offer.popular ? "0 0 25px rgba(168, 85, 247, 0.6)" : "0 0 25px rgba(255, 255, 255, 0.3)"
                  }}
                  transition={{
                    rotate: { duration: 0.5 },
                    scale: { duration: 0.3 }
                  }}
                >
                  <offer.icon className={`w-6 h-6 ${offer.popular ? 'text-violet-400' : 'text-gray-400'} group-hover:text-white transition-colors duration-300`} />
                </motion.div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {offer.name}
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  {offer.description}
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Délai</span>
                    <span className="font-medium text-white">{offer.delay}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">France</span>
                    <span className="font-bold text-violet-400 text-lg">{offer.priceFR}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Algérie</span>
                    <span className="font-bold text-violet-400">{offer.priceDZ}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Acompte</span>
                    <span className="text-violet-300 text-xs">{offer.deposit}</span>
                  </div>
                  <div className="flex justify-between text-sm border-t border-white/10 pt-2 mt-2">
                    <span className="text-gray-500 text-xs">Maintenance</span>
                    <span className="text-gray-400 text-xs">{offer.maintenance}</span>
                  </div>
                </div>
                {offer.popular ? (
                  <Button
                    variant="cta"
                    className="w-full"
                    onClick={onOpenContact}
                  >
                    Demander un devis
                  </Button>
                ) : (
                  <GlareHover className="w-full rounded-lg">
                    <Button
                      variant="outline"
                      className="w-full bg-white/5 hover:bg-white/10 text-white border-white/20"
                      onClick={onOpenContact}
                    >
                      Demander un devis
                    </Button>
                  </GlareHover>
                )}
              </motion.div>
              </TiltedCard>
            ))}
          </div>
        </div>

        {/* App Offers */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            📱 Applications Mobiles
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {appOffers.map((offer, index) => (
              <TiltedCard
                key={offer.name}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border-2 border-pink-500/20 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 group"
              >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4 transition-all duration-300"
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -10, 10, -10, 0],
                    boxShadow: "0 0 25px rgba(236, 72, 153, 0.6)"
                  }}
                  transition={{
                    rotate: { duration: 0.5 },
                    scale: { duration: 0.3 }
                  }}
                >
                  <offer.icon className="w-6 h-6 text-pink-400 group-hover:text-white transition-colors duration-300" />
                </motion.div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {offer.name}
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  {offer.description}
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Délai</span>
                    <span className="font-medium text-white">{offer.delay}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">France</span>
                    <span className="font-bold text-pink-400 text-lg">{offer.priceFR}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Algérie</span>
                    <span className="font-bold text-pink-400">{offer.priceDZ}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Acompte</span>
                    <span className="text-pink-300 text-xs">{offer.deposit}</span>
                  </div>
                  <div className="flex justify-between text-sm border-t border-white/10 pt-2 mt-2">
                    <span className="text-gray-500 text-xs">Maintenance</span>
                    <span className="text-gray-400 text-xs">{offer.maintenance}</span>
                  </div>
                </div>
                <GlareHover className="w-full rounded-lg">
                  <Button
                    variant="outlineGreen"
                    className="w-full bg-white/5 hover:bg-white/10 text-white border-white/20"
                    onClick={onOpenContact}
                  >
                    Demander un devis
                  </Button>
                </GlareHover>
              </motion.div>
              </TiltedCard>
            ))}
          </div>
        </div>

        {/* Partnership Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="relative bg-gradient-to-br from-violet-500/10 via-transparent to-pink-500/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl -z-10" />

            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 border border-white/10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Handshake className="w-10 h-10 text-violet-400" />
              </motion.div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ouverts aux{" "}
                  <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                    partenariats stratégiques
                  </span>
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Chez Nexaura, nous croyons en la puissance des collaborations gagnant-gagnant.
                  Selon la nature de votre projet et les synergies potentielles, nous sommes ouverts
                  à explorer des modalités tarifaires adaptées : <span className="text-white font-medium">échange de visibilité</span>,
                  <span className="text-white font-medium"> apport d'affaires</span>,
                  <span className="text-white font-medium"> co-développement</span> ou
                  <span className="text-white font-medium"> equity partnership</span>.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                    <TrendingUp className="w-4 h-4 text-violet-400" />
                    <span className="text-sm text-gray-300">Croissance mutuelle</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                    <Users className="w-4 h-4 text-pink-400" />
                    <span className="text-sm text-gray-300">Réseau partagé</span>
                  </div>
                </div>

                <Button
                  variant="cta"
                  onClick={onOpenContact}
                  className="px-8"
                >
                  Discutons de votre projet
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
