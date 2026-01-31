# Nexaura v2.0 - Architecture Multi-Page

## 🏗️ Structure du Site

```
nexauraholding.com/
├── /                             → Home (Chooser Digital/Consulting)
│
├── /digital/                     → Nexaura Digital Landing
│   ├── /digital/sites            → Sites Web
│   ├── /digital/apps             → Applications Mobiles
│   ├── /digital/maintenance      → Plans de maintenance
│   └── /digital/contact          → Formulaire de contact
│
├── /consulting/                  → Nexaura Consulting Landing
│   ├── /consulting/audit         → Audit IA (Express & Stratégique)
│   ├── /consulting/poc           → Proof of Concept
│   ├── /consulting/cases         → Cas d'usage détaillés
│   └── /consulting/contact       → Formulaire + Calendly
│
├── /holding/a-propos             → À propos du groupe
├── /fitxp                        → Produit FitXP (conservé)
└── *                             → 404 Page
```

---

## 💰 Grilles Tarifaires

### Digital - Développement

| Service | EUR | DZD | Délai |
|---------|-----|-----|-------|
| One Page | 990€ | 145 000 DA | 5-7j |
| Business | 2 490€ | 365 000 DA | 10-14j |
| E-commerce | 4 900€ | 720 000 DA | 3-4s |
| Sur-mesure | Sur devis | Sur devis | 6s+ |
| App Vitrine | 8 900€ | 1.3M DA | 3-4s |
| App Business | 18 500€ | 2.7M DA | 6-8s |

### Consulting - IA

| Service | EUR | DZD | Durée |
|---------|-----|-----|-------|
| Audit Express | 2 900€ | 420 000 DA | 2-3j |
| Audit Stratégique | 8 500€ | 1.2M DA | 1s |
| POC sur-mesure | 15 000€ | 2.2M DA | 4-6s |
| Conseil Mensuel | 3 500€/mois | 500K DA/mois | - |

**Taux de change : 146 DZD/EUR** (taux réel 2026)

---

## 🎨 Design System

| Entité | Couleur Primaire | Couleur Secondaire | CTA |
|--------|-----------------|-------------------|-----|
| **Digital** | Violet (#8b5cf6) | Fuchsia/Rose | "Demander un devis" |
| **Consulting** | Indigo (#6366f1) | Ambre/Or | "Prendre RDV stratégique" |
| **Holding** | Dégradé Violet→Indigo | Blanc | "Explorer" |

---

## 🧩 Composants Partagés

### Navigation
- `Header` - Adaptatif selon la section (variant prop)
- `Footer` - Liens croisés Digital/Consulting

### Pricing
- `CurrencyToggle` - Bascule EUR/DZD
- `PriceDisplay` - Formatage avec formatPrice()
- `pricing.ts` - Données centralisées

### UI
- `SEO` - Gestion des meta tags
- `Vortex` - Background animé (hues différents)

---

## 📱 Fonctionnalités Clés

### Digital
- ✅ Toggle EUR/DZD sur toutes les pages tarifaires
- ✅ Toggle Mensuel/Annuel (-17%) sur maintenance
- ✅ Formulaire avec types de projet
- ✅ 4 niveaux de maintenance

### Consulting
- ✅ Modal Calendly intégrée (placeholder prêt)
- ✅ Cas d'usage détaillés avec ROI
- ✅ Méthodologie en 5 étapes
- ✅ Formulaire avec taille d'entreprise

### Global
- ✅ Navigation responsive mobile
- ✅ Page 404 stylisée
- ✅ Animations Framer Motion
- ✅ SEO de base (title/meta)

---

## 🚀 Déploiement

```bash
# Installation
cd nexaura-v2
npm install

# Développement
npm run dev

# Build production
npm run build

# Preview
npm run preview
```

---

## 📊 Stats du Projet

- **19 nouveaux fichiers** créés
- **15+ pages** complètes
- **4 composants** partagés
- **1 fichier** de données centralisé

---

## 🔧 Prochaines Étapes Recommandées

1. **Intégrer Calendly** - Remplacer les placeholders par vrai widget
2. **Connecter formulaires** - API backend pour réception leads
3. **Ajouter react-helmet-async** - SEO avancé (OG tags, Twitter cards)
4. **Images optimisées** - WebP pour les screenshots cas d'usage
5. **Analytics** - Google Analytics ou Plausible par section
6. **Tests E2E** - Playwright pour critical paths

---

*Architecture créée le 31 janvier 2026*
*Version: 2.0.0*
