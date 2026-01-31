import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Crown, Rocket, Check, Globe, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import { ShinyText } from "@/components/ui/shiny-text";
import { TiltedCard } from "@/components/ui/tilted-card";
import { GlareHover } from "@/components/ui/glare-hover";

const maintenanceOffers = {
  website: {
    monthly: {
      eur: [
        {
          icon: Shield,
          name: "Essentiel",
          description: "Maintenance de base",
          price: "49",
          features: [
            "Hébergement web sécurisé (SSL inclus)",
            "Nom de domaine inclus (.com, .fr ou .dz)",
            "Sauvegardes hebdomadaires automatiques",
            "Mises à jour de sécurité",
            "Support par email (réponse sous 48h)",
            "2 modifications mineures/mois"
          ],
          popular: false,
          borderColor: "border-violet-500/20"
        },
        {
          icon: Zap,
          name: "Pro",
          description: "Performance optimale",
          price: "129",
          features: [
            "Tout l'offre Essentiel",
            "Sauvegardes quotidiennes",
            "Support prioritaire (réponse sous 24h)",
            "5 modifications mineures/mois",
            "Monitoring 24/7",
            "Optimisation SEO mensuelle",
            "Rapport de performance mensuel"
          ],
          popular: true,
          borderColor: "border-violet-500"
        },
        {
          icon: Crown,
          name: "Business",
          description: "Solution premium",
          price: "249",
          features: [
            "Tout l'offre Pro",
            "Support prioritaire (réponse sous 12h)",
            "Modifications illimitées",
            "CDN mondial inclus",
            "Optimisation continue",
            "A/B testing mensuel",
            "Consultant dédié"
          ],
          popular: false,
          borderColor: "border-pink-500/20"
        },
        {
          icon: Rocket,
          name: "Enterprise",
          description: "Sur-mesure",
          price: "Sur devis",
          features: [
            "Tout l'offre Business",
            "Support 24/7",
            "SLA garanti 99.9%",
            "Équipe dédiée",
            "Infrastructure personnalisée",
            "Sécurité avancée",
            "Audit trimestriel"
          ],
          popular: false,
          borderColor: "border-emerald-500/20"
        }
      ],
      dzd: [
        {
          icon: Shield,
          name: "Essentiel",
          description: "Maintenance de base",
          price: "5 900",
          features: [
            "Hébergement web sécurisé (SSL inclus)",
            "Nom de domaine inclus (.com, .fr ou .dz)",
            "Sauvegardes hebdomadaires automatiques",
            "Mises à jour de sécurité",
            "Support par email (réponse sous 48h)",
            "2 modifications mineures/mois"
          ],
          popular: false,
          borderColor: "border-violet-500/20"
        },
        {
          icon: Zap,
          name: "Pro",
          description: "Performance optimale",
          price: "15 500",
          features: [
            "Tout l'offre Essentiel",
            "Sauvegardes quotidiennes",
            "Support prioritaire (réponse sous 24h)",
            "5 modifications mineures/mois",
            "Monitoring 24/7",
            "Optimisation SEO mensuelle",
            "Rapport de performance mensuel"
          ],
          popular: true,
          borderColor: "border-violet-500"
        },
        {
          icon: Crown,
          name: "Business",
          description: "Solution premium",
          price: "29 900",
          features: [
            "Tout l'offre Pro",
            "Support prioritaire (réponse sous 12h)",
            "Modifications illimitées",
            "CDN mondial inclus",
            "Optimisation continue",
            "A/B testing mensuel",
            "Consultant dédié"
          ],
          popular: false,
          borderColor: "border-pink-500/20"
        },
        {
          icon: Rocket,
          name: "Enterprise",
          description: "Sur-mesure",
          price: "Sur devis",
          features: [
            "Tout l'offre Business",
            "Support 24/7",
            "SLA garanti 99.9%",
            "Équipe dédiée",
            "Infrastructure personnalisée",
            "Sécurité avancée",
            "Audit trimestriel"
          ],
          popular: false,
          borderColor: "border-emerald-500/20"
        }
      ]
    },
    annual: {
      eur: [
        {
          icon: Shield,
          name: "Essentiel",
          description: "Maintenance de base",
          price: "489",
          features: [
            "Hébergement web sécurisé (SSL inclus)",
            "Nom de domaine inclus (.com, .fr ou .dz)",
            "Sauvegardes hebdomadaires automatiques",
            "Mises à jour de sécurité",
            "Support par email (réponse sous 48h)",
            "2 modifications mineures/mois"
          ],
          popular: false,
          borderColor: "border-violet-500/20"
        },
        {
          icon: Zap,
          name: "Pro",
          description: "Performance optimale",
          price: "1 285",
          features: [
            "Tout l'offre Essentiel",
            "Sauvegardes quotidiennes",
            "Support prioritaire (réponse sous 24h)",
            "5 modifications mineures/mois",
            "Monitoring 24/7",
            "Optimisation SEO mensuelle",
            "Rapport de performance mensuel"
          ],
          popular: true,
          borderColor: "border-violet-500"
        },
        {
          icon: Crown,
          name: "Business",
          description: "Solution premium",
          price: "2 480",
          features: [
            "Tout l'offre Pro",
            "Support prioritaire (réponse sous 12h)",
            "Modifications illimitées",
            "CDN mondial inclus",
            "Optimisation continue",
            "A/B testing mensuel",
            "Consultant dédié"
          ],
          popular: false,
          borderColor: "border-pink-500/20"
        },
        {
          icon: Rocket,
          name: "Enterprise",
          description: "Sur-mesure",
          price: "Sur devis",
          features: [
            "Tout l'offre Business",
            "Support 24/7",
            "SLA garanti 99.9%",
            "Équipe dédiée",
            "Infrastructure personnalisée",
            "Sécurité avancée",
            "Audit trimestriel"
          ],
          popular: false,
          borderColor: "border-emerald-500/20"
        }
      ],
      dzd: [
        {
          icon: Shield,
          name: "Essentiel",
          description: "Maintenance de base",
          price: "58 800",
          features: [
            "Hébergement web sécurisé (SSL inclus)",
            "Nom de domaine inclus (.com, .fr ou .dz)",
            "Sauvegardes hebdomadaires automatiques",
            "Mises à jour de sécurité",
            "Support par email (réponse sous 48h)",
            "2 modifications mineures/mois"
          ],
          popular: false,
          borderColor: "border-violet-500/20"
        },
        {
          icon: Zap,
          name: "Pro",
          description: "Performance optimale",
          price: "154 300",
          features: [
            "Tout l'offre Essentiel",
            "Sauvegardes quotidiennes",
            "Support prioritaire (réponse sous 24h)",
            "5 modifications mineures/mois",
            "Monitoring 24/7",
            "Optimisation SEO mensuelle",
            "Rapport de performance mensuel"
          ],
          popular: true,
          borderColor: "border-violet-500"
        },
        {
          icon: Crown,
          name: "Business",
          description: "Solution premium",
          price: "297 900",
          features: [
            "Tout l'offre Pro",
            "Support prioritaire (réponse sous 12h)",
            "Modifications illimitées",
            "CDN mondial inclus",
            "Optimisation continue",
            "A/B testing mensuel",
            "Consultant dédié"
          ],
          popular: false,
          borderColor: "border-pink-500/20"
        },
        {
          icon: Rocket,
          name: "Enterprise",
          description: "Sur-mesure",
          price: "Sur devis",
          features: [
            "Tout l'offre Business",
            "Support 24/7",
            "SLA garanti 99.9%",
            "Équipe dédiée",
            "Infrastructure personnalisée",
            "Sécurité avancée",
            "Audit trimestriel"
          ],
          popular: false,
          borderColor: "border-emerald-500/20"
        }
      ]
    }
  },
  app: {
    monthly: {
      eur: [
        {
          icon: Shield,
          name: "Essentiel",
          description: "Maintenance de base",
          price: "149",
          features: [
            "Hébergement backend sécurisé",
            "Monitoring des crashes",
            "Mises à jour de sécurité",
            "Support par email (réponse sous 48h)",
            "1 mise à jour mineure/mois",
            "Sauvegarde quotidienne"
          ],
          popular: false,
          borderColor: "border-violet-500/20"
        },
        {
          icon: Zap,
          name: "Pro",
          description: "Performance optimale",
          price: "349",
          features: [
            "Tout l'offre Essentiel",
            "Monitoring avancé (performances)",
            "Support prioritaire (24h)",
            "3 mises à jour/mois",
            "Analytics intégré",
            "Optimisation performances",
            "Tests de régression"
          ],
          popular: true,
          borderColor: "border-violet-500"
        },
        {
          icon: Crown,
          name: "Business",
          description: "Solution premium",
          price: "649",
          features: [
            "Tout l'offre Pro",
            "Support prioritaire (12h)",
            "Mises à jour illimitées",
            "Infrastructure scalable",
            "A/B testing",
            "Notifications push incluses",
            "Consultant dédié"
          ],
          popular: false,
          borderColor: "border-pink-500/20"
        },
        {
          icon: Rocket,
          name: "Enterprise",
          description: "Sur-mesure",
          price: "Sur devis",
          features: [
            "Tout l'offre Business",
            "Support 24/7",
            "SLA garanti 99.9%",
            "Équipe dédiée",
            "Infrastructure dédiée",
            "DevOps inclus",
            "Audit trimestriel"
          ],
          popular: false,
          borderColor: "border-emerald-500/20"
        }
      ],
      dzd: [
        {
          icon: Shield,
          name: "Essentiel",
          description: "Maintenance de base",
          price: "17 900",
          features: [
            "Hébergement backend sécurisé",
            "Monitoring des crashes",
            "Mises à jour de sécurité",
            "Support par email (réponse sous 48h)",
            "1 mise à jour mineure/mois",
            "Sauvegarde quotidienne"
          ],
          popular: false,
          borderColor: "border-violet-500/20"
        },
        {
          icon: Zap,
          name: "Pro",
          description: "Performance optimale",
          price: "41 900",
          features: [
            "Tout l'offre Essentiel",
            "Monitoring avancé (performances)",
            "Support prioritaire (24h)",
            "3 mises à jour/mois",
            "Analytics intégré",
            "Optimisation performances",
            "Tests de régression"
          ],
          popular: true,
          borderColor: "border-violet-500"
        },
        {
          icon: Crown,
          name: "Business",
          description: "Solution premium",
          price: "77 900",
          features: [
            "Tout l'offre Pro",
            "Support prioritaire (12h)",
            "Mises à jour illimitées",
            "Infrastructure scalable",
            "A/B testing",
            "Notifications push incluses",
            "Consultant dédié"
          ],
          popular: false,
          borderColor: "border-pink-500/20"
        },
        {
          icon: Rocket,
          name: "Enterprise",
          description: "Sur-mesure",
          price: "Sur devis",
          features: [
            "Tout l'offre Business",
            "Support 24/7",
            "SLA garanti 99.9%",
            "Équipe dédiée",
            "Infrastructure dédiée",
            "DevOps inclus",
            "Audit trimestriel"
          ],
          popular: false,
          borderColor: "border-emerald-500/20"
        }
      ]
    },
    annual: {
      eur: [
        {
          icon: Shield,
          name: "Essentiel",
          description: "Maintenance de base",
          price: "1 485",
          features: [
            "Hébergement backend sécurisé",
            "Monitoring des crashes",
            "Mises à jour de sécurité",
            "Support par email (réponse sous 48h)",
            "1 mise à jour mineure/mois",
            "Sauvegarde quotidienne"
          ],
          popular: false,
          borderColor: "border-violet-500/20"
        },
        {
          icon: Zap,
          name: "Pro",
          description: "Performance optimale",
          price: "3 475",
          features: [
            "Tout l'offre Essentiel",
            "Monitoring avancé (performances)",
            "Support prioritaire (24h)",
            "3 mises à jour/mois",
            "Analytics intégré",
            "Optimisation performances",
            "Tests de régression"
          ],
          popular: true,
          borderColor: "border-violet-500"
        },
        {
          icon: Crown,
          name: "Business",
          description: "Solution premium",
          price: "6 465",
          features: [
            "Tout l'offre Pro",
            "Support prioritaire (12h)",
            "Mises à jour illimitées",
            "Infrastructure scalable",
            "A/B testing",
            "Notifications push incluses",
            "Consultant dédié"
          ],
          popular: false,
          borderColor: "border-pink-500/20"
        },
        {
          icon: Rocket,
          name: "Enterprise",
          description: "Sur-mesure",
          price: "Sur devis",
          features: [
            "Tout l'offre Business",
            "Support 24/7",
            "SLA garanti 99.9%",
            "Équipe dédiée",
            "Infrastructure dédiée",
            "DevOps inclus",
            "Audit trimestriel"
          ],
          popular: false,
          borderColor: "border-emerald-500/20"
        }
      ],
      dzd: [
        {
          icon: Shield,
          name: "Essentiel",
          description: "Maintenance de base",
          price: "178 300",
          features: [
            "Hébergement backend sécurisé",
            "Monitoring des crashes",
            "Mises à jour de sécurité",
            "Support par email (réponse sous 48h)",
            "1 mise à jour mineure/mois",
            "Sauvegarde quotidienne"
          ],
          popular: false,
          borderColor: "border-violet-500/20"
        },
        {
          icon: Zap,
          name: "Pro",
          description: "Performance optimale",
          price: "417 300",
          features: [
            "Tout l'offre Essentiel",
            "Monitoring avancé (performances)",
            "Support prioritaire (24h)",
            "3 mises à jour/mois",
            "Analytics intégré",
            "Optimisation performances",
            "Tests de régression"
          ],
          popular: true,
          borderColor: "border-violet-500"
        },
        {
          icon: Crown,
          name: "Business",
          description: "Solution premium",
          price: "776 300",
          features: [
            "Tout l'offre Pro",
            "Support prioritaire (12h)",
            "Mises à jour illimitées",
            "Infrastructure scalable",
            "A/B testing",
            "Notifications push incluses",
            "Consultant dédié"
          ],
          popular: false,
          borderColor: "border-pink-500/20"
        },
        {
          icon: Rocket,
          name: "Enterprise",
          description: "Sur-mesure",
          price: "Sur devis",
          features: [
            "Tout l'offre Business",
            "Support 24/7",
            "SLA garanti 99.9%",
            "Équipe dédiée",
            "Infrastructure dédiée",
            "DevOps inclus",
            "Audit trimestriel"
          ],
          popular: false,
          borderColor: "border-emerald-500/20"
        }
      ]
    }
  }
};

interface MaintenanceSectionProps {
  onOpenContact: () => void;
}

export function MaintenanceSection({ onOpenContact }: MaintenanceSectionProps) {
  const [serviceType, setServiceType] = useState<"website" | "app">("website");
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");
  const [currency, setCurrency] = useState<"eur" | "dzd">("eur");

  const currentOffers = maintenanceOffers[serviceType][billingPeriod][currency];

  return (
    <section id="maintenance" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Sparkles background */}
      <SparklesCore
        id="maintenanceSparkles"
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={30}
        className="w-full h-full absolute inset-0"
        particleColor="#10b981"
      />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Abonnements <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">Maintenance</span>
          </h2>
          <ShinyText className="text-lg text-gray-400 max-w-2xl mx-auto">
            Gardez votre site ou application performant avec nos formules de maintenance tout-inclus
          </ShinyText>
        </motion.div>

        {/* Toggles */}
        <div className="flex flex-col items-center gap-6 mb-12">
          {/* Service Type Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl rounded-full p-1.5 border border-white/10"
          >
            <button
              onClick={() => setServiceType("website")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                serviceType === "website"
                  ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg shadow-violet-500/50"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Globe className="w-4 h-4" />
              Sites Web
            </button>
            <button
              onClick={() => setServiceType("app")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                serviceType === "app"
                  ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg shadow-violet-500/50"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Applications
            </button>
          </motion.div>

          {/* Billing Period Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl rounded-full p-1.5 border border-white/10"
          >
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                billingPeriod === "monthly"
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                billingPeriod === "annual"
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Annuel
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-lg">
                -17%
              </span>
            </button>
          </motion.div>

          {/* Currency Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl rounded-full p-1.5 border border-white/10"
          >
            <button
              onClick={() => setCurrency("eur")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                currency === "eur"
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              🇫🇷 EUR
            </button>
            <button
              onClick={() => setCurrency("dzd")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                currency === "dzd"
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              🇩🇿 DZD
            </button>
          </motion.div>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentOffers.map((offer, index) => (
            <TiltedCard
              key={offer.name}
              className={`relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border-2 ${offer.borderColor} hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300 group ${
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
                  className={`w-12 h-12 rounded-xl ${offer.popular ? 'bg-violet-500/20' : 'bg-emerald-500/20'} flex items-center justify-center mb-4 transition-all duration-300`}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -10, 10, -10, 0],
                    boxShadow: offer.popular ? "0 0 25px rgba(168, 85, 247, 0.6)" : "0 0 25px rgba(16, 185, 129, 0.6)"
                  }}
                  transition={{
                    rotate: { duration: 0.5 },
                    scale: { duration: 0.3 }
                  }}
                >
                  <offer.icon className={`w-6 h-6 ${offer.popular ? 'text-violet-400' : 'text-emerald-400'} group-hover:text-white transition-colors duration-300`} />
                </motion.div>

                <h4 className="text-xl font-bold text-white mb-2">
                  {offer.name}
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  {offer.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    {offer.price === "Sur devis" ? (
                      <span className="text-2xl font-bold text-emerald-400">Sur devis</span>
                    ) : (
                      <>
                        <span className={`text-3xl font-bold ${offer.popular ? 'text-violet-400' : 'text-emerald-400'}`}>
                          {offer.price}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {currency === "eur" ? "€" : "DA"}/{billingPeriod === "monthly" ? "mois" : "an"}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {offer.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className={`w-4 h-4 ${offer.popular ? 'text-violet-400' : 'text-emerald-400'} mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {offer.popular ? (
                  <Button
                    variant="cta"
                    className="w-full"
                    onClick={onOpenContact}
                  >
                    Souscrire
                  </Button>
                ) : (
                  <GlareHover className="w-full rounded-lg">
                    <Button
                      variant="outline"
                      className="w-full bg-white/5 hover:bg-white/10 text-white border-white/20"
                      onClick={onOpenContact}
                    >
                      Souscrire
                    </Button>
                  </GlareHover>
                )}
              </motion.div>
            </TiltedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
