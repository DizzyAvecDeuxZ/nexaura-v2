// ═══════════════════════════════════════════════════════════════
// NEXAURA HOLDING - GRILLES TARIFAIRES V2.0
// Taux de change: 1 EUR = 146 DZD (taux réel 2026)
// ═══════════════════════════════════════════════════════════════

export const EXCHANGE_RATE = 146;

// ═══════════════════════════════════════════════════════════════
// NEXAURA DIGITAL - DÉVELOPPEMENT WEB & MOBILE
// ═══════════════════════════════════════════════════════════════

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  priceEUR: number;
  priceDZD: number;
  deliveryTime: string;
  features: string[];
  popular?: boolean;
  badge?: string;
}

export const websiteTiers: PricingTier[] = [
  {
    id: "one-page",
    name: "One Page",
    description: "Landing page, portfolio, vitrine simple - idéal pour démarrer",
    priceEUR: 990,
    priceDZD: 145000,
    deliveryTime: "5-7 jours",
    features: [
      "Design sur-mesure unique",
      "Responsive mobile & tablette",
      "Formulaire de contact",
      "Optimisation SEO de base",
      "Hébergement 1 an offert",
      "Certificat SSL inclus",
      "1 révision incluse"
    ],
    popular: false
  },
  {
    id: "business",
    name: "Business",
    description: "Site 5-10 pages, blog, SEO avancé - pour entreprises en croissance",
    priceEUR: 2490,
    priceDZD: 365000,
    deliveryTime: "10-14 jours",
    features: [
      "Tout l'offre One Page",
      "5 à 10 pages personnalisées",
      "Module blog / actualités",
      "SEO avancé & analytics",
      "Rapport mensuel performance",
      "Support 6 mois inclus",
      "2 révisions incluses"
    ],
    popular: true,
    badge: "Populaire"
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    description: "Boutique en ligne complète avec paiement et gestion",
    priceEUR: 4900,
    priceDZD: 720000,
    deliveryTime: "3-4 semaines",
    features: [
      "Jusqu'à 100 produits",
      "Paiement sécurisé (Stripe/PayPal)",
      "Gestion stocks & commandes",
      "Comptes clients & historique",
      "Formation admin 2h",
      "Support 12 mois inclus",
      "3 révisions incluses"
    ],
    popular: false
  },
  {
    id: "custom-web",
    name: "Sur-mesure",
    description: "Architecture complexe, API, intranet - solutions enterprise",
    priceEUR: 0,
    priceDZD: 0,
    deliveryTime: "6+ semaines",
    features: [
      "Architecture personnalisée",
      "Intégrations API tierces",
      "Back-office sur-mesure",
      "Multi-utilisateurs & rôles",
      "Sécurité renforcée (OWASP)",
      "Documentation technique",
      "Maintenance dédiée SLA"
    ],
    popular: false,
    badge: "Sur devis"
  }
];

export const appTiers: PricingTier[] = [
  {
    id: "app-vitrine",
    name: "App Vitrine",
    description: "iOS ou Android, fonctionnalités de base - idéal pour tester votre concept",
    priceEUR: 8900,
    priceDZD: 1300000,
    deliveryTime: "4-6 semaines",
    features: [
      "iOS ou Android (au choix)",
      "Conception accélérée avec IA",
      "3-5 écrans personnalisés",
      "Design natif conforme Apple/Google",
      "Publication sur App Store/Play Store",
      "Code source livré",
      "Documentation technique"
    ],
    popular: false
  },
  {
    id: "app-business",
    name: "App Business",
    description: "iOS + Android, authentification, backend complet",
    priceEUR: 19500,
    priceDZD: 2850000,
    deliveryTime: "8-12 semaines",
    features: [
      "iOS + Android (React Native/Flutter)",
      "Conception UI/UX avec IA + validation",
      "Authentification utilisateurs sécurisée",
      "API & backend sur mesure",
      "Notifications push",
      "Analytics & crash reporting",
      "Support technique 6 mois inclus"
    ],
    popular: true,
    badge: "Recommandé"
  },
  {
    id: "app-premium",
    name: "App Premium",
    description: "Marketplace, temps réel, architecture scalable",
    priceEUR: 45000,
    priceDZD: 6570000,
    deliveryTime: "14-20 semaines",
    features: [
      "iOS + Android + Web (PWA optionnel)",
      "Architecture scalable (microservices)",
      "Fonctionnalités temps réel (WebSocket)",
      "Intégrations API tierces multiples",
      "Back-office admin complet",
      "Tests automatisés (CI/CD)",
      "Support 12 mois inclus",
      "SLA garanti 99.9%"
    ],
    popular: false,
    badge: "Sur devis"
  }
];

// ═══════════════════════════════════════════════════════════════
// MAINTENANCE & ABONNEMENTS
// ═══════════════════════════════════════════════════════════════

export interface MaintenanceTier {
  id: string;
  name: string;
  description: string;
  priceEURMonthly: number;
  priceDZDMonthly: number;
  priceEURYearly: number;
  priceDZDYearly: number;
  features: string[];
  popular?: boolean;
}

export const maintenanceTiers: MaintenanceTier[] = [
  {
    id: "maint-starter",
    name: "Starter",
    description: "Maintenance essentielle pour app simple",
    priceEURMonthly: 199,
    priceDZDMonthly: 29000,
    priceEURYearly: 1990,
    priceDZDYearly: 290000,
    features: [
      "Mises à jour iOS/Android obligatoires",
      "Correction de bugs critiques",
      "Monitoring crash reporting",
      "Support email (48h)",
      "1 mise à jour fonctionnelle/mois",
      "Sauvegarde données utilisateurs"
    ],
    popular: false
  },
  {
    id: "maint-growth",
    name: "Growth",
    description: "Accompagnement continu pour app en activité",
    priceEURMonthly: 499,
    priceDZDMonthly: 73000,
    priceEURYearly: 4990,
    priceDZDYearly: 730000,
    features: [
      "Tout l'offre Starter",
      "Support prioritaire (24h)",
      "Optimisation ASO (App Store)",
      "3 mises à jour fonctionnelles/mois",
      "Analytics & rapports mensuels",
      "A/B testing fonctionnalités",
      "Gestion avis utilisateurs"
    ],
    popular: true
  },
  {
    id: "maint-scale",
    name: "Scale",
    description: "Solution complète pour app à fort trafic",
    priceEURMonthly: 999,
    priceDZDMonthly: 146000,
    priceEURYearly: 9990,
    priceDZDYearly: 1460000,
    features: [
      "Tout l'offre Growth",
      "Support prioritaire (12h)",
      "Modifications illimitées",
      "Performance monitoring avancé",
      "Sécurité renforcée & audits",
      "Feature flags & déploiement continu",
      "Product manager dédié",
      "SLA 99.5% garanti"
    ],
    popular: false
  },
  {
    id: "maint-enterprise",
    name: "Enterprise",
    description: "Infrastructure dédiée pour grands comptes",
    priceEURMonthly: 0,
    priceDZDMonthly: 0,
    priceEURYearly: 0,
    priceDZDYearly: 0,
    features: [
      "Équipe dédiée 24/7",
      "Infrastructure cloud sur mesure",
      "SLA garanti 99.9%",
      "Cybersécurité avancée",
      "Disaster recovery plan",
      "Audit trimestriel complet",
      "Accompagnement stratégique"
    ],
    popular: false
  }
];

// ═══════════════════════════════════════════════════════════════
// NEXAURA CONSULTING - IA & TRANSFORMATION DIGITALE
// ═══════════════════════════════════════════════════════════════

export interface ConsultingOffer {
  id: string;
  name: string;
  description: string;
  priceEUR: number;
  priceDZD: number;
  duration: string;
  targetAudience: string;
  deliverables: string[];
  popular?: boolean;
  cta: string;
}

export const consultingOffers: ConsultingOffer[] = [
  {
    id: "audit-express",
    name: "Audit IA Express",
    description: "Diagnostic rapide des opportunités IA dans votre entreprise",
    priceEUR: 2900,
    priceDZD: 420000,
    duration: "2-3 jours",
    targetAudience: "PME & Startups",
    deliverables: [
      "Entretiens avec collaborateurs clés (2-3 pers.)",
      "Analyse de 3 processus prioritaires",
      "Rapport 20 pages avec recommandations",
      "Roadmap d'implémentation 12 mois",
      "Présentation aux dirigeants"
    ],
    popular: false,
    cta: "Réserver un appel"
  },
  {
    id: "audit-strategique",
    name: "Audit IA Stratégique",
    description: "Étude approfondie pour grandes organisations",
    priceEUR: 8500,
    priceDZD: 1200000,
    duration: "1 semaine",
    targetAudience: "ETI & Grands groupes",
    deliverables: [
      "Atelier de co-conception (1 journée)",
      "Analyse complète de la valeur chaine",
      "Benchmark concurrentiel IA",
      "Plan de transformation détaillé",
      "Business case avec ROI estimé",
      "Plan de change management"
    ],
    popular: true,
    cta: "Prendre RDV stratégique"
  },
  {
    id: "poc-custom",
    name: "POC sur-mesure",
    description: "Développement d'un prototype IA fonctionnel",
    priceEUR: 15000,
    priceDZD: 2200000,
    duration: "4-6 semaines",
    targetAudience: "Entreprises engagées",
    deliverables: [
      "Cadrage précis du use case",
      "Développement POC fonctionnel",
      "Tests avec données réelles anonymisées",
      "Documentation technique complète",
      "Plan de déploiement industrialisé",
      "Formation des utilisateurs finaux"
    ],
    popular: false,
    cta: "Discuter de mon POC"
  }
];

export interface RetainerOffer {
  id: string;
  name: string;
  priceEURMonthly: number;
  priceDZDMonthly: number;
  description: string;
  features: string[];
}

export const retainerOffers: RetainerOffer[] = [
  {
    id: "retainer-monthly",
    name: "Conseil Mensuel",
    priceEURMonthly: 3500,
    priceDZDMonthly: 500000,
    description: "Accompagnement continu de votre transformation",
    features: [
      "2 jours de conseil sur site",
      "Suivi hebdomadaire des initiatives",
      "Hotline technique (réponse 24h)",
      "Veille technologique mensuelle",
      "Accès privilégié partenaires tech",
      "Rapport mensuel d'avancement"
    ]
  },
  {
    id: "retainer-transformation",
    name: "Transformation IA",
    priceEURMonthly: 0,
    priceDZDMonthly: 0,
    description: "Projet complet de transformation sur 3-6 mois",
    features: [
      "Accompagnement end-to-end",
      "Audit + POC + Déploiement",
      "Formation des utilisateurs (jusqu'à 20 pers.)",
      "Change management & communication",
      "Suivi ROI sur 12 mois",
      "Garantie résultats ou remboursement"
    ]
  }
];

// ═══════════════════════════════════════════════════════════════
// CAS D'USAGE IA
// ═══════════════════════════════════════════════════════════════

export interface UseCase {
  id: string;
  title: string;
  description: string;
  impact: string;
  metrics: string;
  icon: string;
}

export const aiUseCases: UseCase[] = [
  {
    id: "doc-automation",
    title: "Automatisation Documents",
    description: "Extraction automatique de données, classification intelligente et traitement sans intervention humaine de vos documents entrants",
    impact: "Réduction drastique du temps de traitement",
    metrics: "-70% temps de traitement",
    icon: "FileText"
  },
  {
    id: "chatbot-enterprise",
    title: "Chatbot Enterprise",
    description: "Assistant IA disponible 24/7 pour support client ou collaborateur, intégré à vos bases de connaissances internes",
    impact: "Support permanent et réduction des tickets",
    metrics: "24/7 disponible, -40% tickets",
    icon: "MessageSquare"
  },
  {
    id: "bi-prediction",
    title: "BI + Prédiction",
    description: "Tableaux de bord intelligents avec algorithmes de prédiction pour anticiper tendances et comportements",
    impact: "Meilleure anticipation décisions business",
    metrics: "+25% précision prévisions",
    icon: "BarChart3"
  },
  {
    id: "ai-agents",
    title: "Agents IA Internes",
    description: "Automatisation des workflows métier répétitifs par des agents IA autonomes intégrés à vos outils existants",
    impact: "Libération temps des collaborateurs sur tâches à faible valeur",
    metrics: "-50% tâches manuelles",
    icon: "Bot"
  }
];

// ═══════════════════════════════════════════════════════════════
// UTILITAIRES DE FORMATAGE
// ═══════════════════════════════════════════════════════════════

export function formatPrice(price: number, currency: 'eur' | 'dzd'): string {
  if (price === 0) return 'Sur devis';
  
  if (currency === 'eur') {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  } else {
    return new Intl.NumberFormat('fr-FR').format(price) + ' DA';
  }
}

// ═══════════════════════════════════════════════════════════════
// NEXAURA DIGITAL - GRILLES TARIFAIRES B2B ENTREPRISE
// ═══════════════════════════════════════════════════════════════

export interface EnterpriseTier {
  id: string;
  name: string;
  description: string;
  price: string;
  deliveryTime: string;
  features: string[];
  popular?: boolean;
  badge?: string;
  icon: typeof Building2;
  cta: string;
}

export const enterpriseTiers: EnterpriseTier[] = [
  {
    id: "audit-express",
    name: "Audit Digital Express",
    description: "Diagnostic rapide de vos processus et identification des gains potentiels",
    price: "4 900 €",
    deliveryTime: "5 jours",
    features: [
      "Entretien avec équipes opérationnelles",
      "Analyse de 3 processus prioritaires",
      "Rapport 30 pages avec préconisations",
      "Estimation ROI et planning",
      "Présentation aux décideurs"
    ],
    popular: false,
    icon: Building2,
    cta: "Demander un audit"
  },
  {
    id: "poc-metier",
    name: "POC Métier",
    description: "Preuve de concept fonctionnelle pour valider l'approche avant investissement",
    price: "15 000 € - 25 000 €",
    deliveryTime: "4-6 semaines",
    features: [
      "Cadrage précis du périmètre",
      "Développement fonctionnalités clés",
      "Tests avec utilisateurs finaux",
      "Documentation technique",
      "Roadmap déploiement complet"
    ],
    popular: true,
    badge: "Recommandé",
    icon: Building2,
    cta: "Lancer mon POC"
  },
  {
    id: "app-sur-mesure",
    name: "Application Sur-mesure",
    description: "Solution digitale complète, intégrée à votre écosystème",
    price: "35 000 € - 120 000 €+",
    deliveryTime: "10-20 semaines",
    features: [
      "Architecture scalable & sécurisée",
      "Mode offline avec synchronisation",
      "Intégrations API (ERP, CRM, etc.)",
      "Formation équipes & documentation",
      "Support 12 mois inclus",
      "SLA 99.9% garanti"
    ],
    popular: false,
    badge: "Sur devis",
    icon: Building2,
    cta: "Discuter du projet"
  }
];

export interface MaintenanceEnterpriseTier {
  id: string;
  name: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  popular?: boolean;
}

export const maintenanceEnterpriseTiers: MaintenanceEnterpriseTier[] = [
  {
    id: "support-essentiel",
    name: "Support Essentiel",
    description: "Maintenance corrective pour applications en production",
    price: "15%",
    period: " du projet/an",
    features: [
      "Corrections de bugs",
      "Mises à jour sécurité",
      "Support email (48h)",
      "Monitoring basique"
    ],
    popular: false
  },
  {
    id: "accompagnement-pro",
    name: "Accompagnement Pro",
    description: "Évolution continue et support prioritaire",
    price: "3 500 €",
    period: "/mois",
    features: [
      "Évolutions fonctionnelles",
      "Support prioritaire (24h)",
      "Rapports mensuels d'usage",
      "Optimisations performances",
      "Hotline technique"
    ],
    popular: true
  },
  {
    id: "partenaire-strategique",
    name: "Partenaire Stratégique",
    description: "Équipe dédiée et innovation continue",
    price: "7 000 €",
    period: "/mois",
    features: [
      "Évolutions illimitées",
      "Support 24/7",
      "Product manager dédié",
      "Innovation & veille",
      "SLA 99.9%",
      "Ateliers trimestriels"
    ],
    popular: false
  },
  {
    id: "enterprise-dedie",
    name: "Enterprise Dédié",
    description: "Infrastructure et équipe dédiées",
    price: "Sur devis",
    features: [
      "Équipe dédiée full-time",
      "Infrastructure cloud sur mesure",
      "Cybersécurité renforcée",
      "Disaster recovery",
      "Audit trimestriel",
      "Accompagnement transformation"
    ],
    popular: false
  }
];

// ═══════════════════════════════════════════════════════════════
// UTILITAIRES DE FORMATAGE
// ═══════════════════════════════════════════════════════════════

export function convertPrice(priceEUR: number): number {
  if (priceEUR === 0) return 0;
  return Math.round(priceEUR * EXCHANGE_RATE / 1000) * 1000;
}
