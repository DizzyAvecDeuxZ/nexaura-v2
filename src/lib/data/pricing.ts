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
    description: "iOS ou Android, fonctionnalités de base",
    priceEUR: 8900,
    priceDZD: 1300000,
    deliveryTime: "3-4 semaines",
    features: [
      "iOS ou Android (au choix)",
      "Design natif conforme Apple/Google",
      "3-5 écrans personnalisés",
      "Publication sur App Store/Play Store",
      "Code source livré",
      "Documentation technique"
    ],
    popular: false
  },
  {
    id: "app-business",
    name: "App Business",
    description: "iOS + Android, authentification, API complète",
    priceEUR: 18500,
    priceDZD: 2700000,
    deliveryTime: "6-8 semaines",
    features: [
      "iOS + Android (deux plateformes)",
      "Authentification utilisateurs",
      "API & backend sécurisé",
      "Notifications push",
      "Analytics intégré (Firebase)",
      "Optimisation performances",
      "Support 6 mois inclus"
    ],
    popular: true,
    badge: "Recommandé"
  },
  {
    id: "app-premium",
    name: "App Premium",
    description: "Marketplace, temps réel, architecture scalable",
    priceEUR: 0,
    priceDZD: 0,
    deliveryTime: "10+ semaines",
    features: [
      "Architecture scalable (microservices)",
      "Temps réel (WebSocket)",
      "Marketplace multi-vendeurs",
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
    id: "maint-essential",
    name: "Essentiel",
    description: "Maintenance de base pour sites vitrines",
    priceEURMonthly: 79,
    priceDZDMonthly: 11500,
    priceEURYearly: 790,
    priceDZDYearly: 115000,
    features: [
      "Hébergement web sécurisé (SSL)",
      "Nom de domaine inclus",
      "Sauvegardes hebdomadaires",
      "Mises à jour de sécurité",
      "Support email (48h)",
      "2 modifications mineures/mois"
    ],
    popular: false
  },
  {
    id: "maint-pro",
    name: "Pro",
    description: "Performance optimale pour business actif",
    priceEURMonthly: 199,
    priceDZDMonthly: 29000,
    priceEURYearly: 1990,
    priceDZDYearly: 290000,
    features: [
      "Tout l'offre Essentiel",
      "Sauvegardes quotidiennes",
      "Support prioritaire (24h)",
      "5 modifications/mois",
      "Monitoring uptime 24/7",
      "Optimisation SEO mensuelle",
      "Rapport performance"
    ],
    popular: true
  },
  {
    id: "maint-business",
    name: "Business",
    description: "Solution premium pour e-commerce",
    priceEURMonthly: 399,
    priceDZDMonthly: 58000,
    priceEURYearly: 3990,
    priceDZDYearly: 580000,
    features: [
      "Tout l'offre Pro",
      "Support prioritaire (12h)",
      "Modifications illimitées",
      "CDN mondial inclus",
      "Optimisation continue",
      "A/B testing mensuel",
      "Consultant dédié"
    ],
    popular: false
  },
  {
    id: "maint-enterprise",
    name: "Enterprise",
    description: "Solution sur-mesure pour grands comptes",
    priceEURMonthly: 0,
    priceDZDMonthly: 0,
    priceEURYearly: 0,
    priceDZDYearly: 0,
    features: [
      "Infrastructure dédiée",
      "Support 24/7",
      "SLA garanti 99.9%",
      "Accompagnement personnalisé",
      "Sécurité avancée",
      "Audit trimestriel",
      "DRP (Plan reprise)"
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

export function convertPrice(priceEUR: number): number {
  if (priceEUR === 0) return 0;
  return Math.round(priceEUR * EXCHANGE_RATE / 1000) * 1000;
}
