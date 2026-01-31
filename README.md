# Nexaura v2.0 - Restructuration Digital / Consulting

Nexaura Holding regroupe deux expertises distinctes sous une même marque :
- **Nexaura Digital** - Développement web & mobile
- **Nexaura Consulting** - Conseil en IA & transformation digitale

---

## 🏗️ Architecture

```
nexauraholding.com/
├── /                     → Page d'accueil (chooser)
├── /digital/             → Landing Nexaura Digital
├── /consulting/          → Landing Nexaura Consulting
├── /holding/a-propos     → À propos du groupe
└── /fitxp                → Produit FitXP (gardé)
```

---

## 💰 Grilles Tarifaires Corrigées

### Nexaura Digital

| Offre | Prix EUR | Prix DZD | Délai |
|-------|----------|----------|-------|
| **One Page** | 990 € | 145 000 DA | 5-7 j |
| **Business** | 2 490 € | 365 000 DA | 10-14 j |
| **E-commerce** | 4 900 € | 720 000 DA | 3-4 s |
| **Sur-mesure** | Sur devis | Sur devis | 6+ s |
| **App Vitrine** | 8 900 € | 1.3M DA | 3-4 s |
| **App Business** | 18 500 € | 2.7M DA | 6-8 s |

### Nexaura Consulting

| Offre | Prix EUR | Prix DZD | Durée |
|-------|----------|----------|-------|
| **Audit IA Express** | 2 900 € | 420 000 DA | 2-3 j |
| **Audit IA Stratégique** | 8 500 € | 1.2M DA | 1 sem |
| **POC sur-mesure** | 15 000 € | 2.2M DA | 4-6 s |
| **Conseil Mensuel** | 3 500 €/mois | 500K DA/mois | - |

**Changement majeur** : Suppression du double affichage EUR/DZD simultané. 
Un toggle permet de basculer entre les devises.

---

## 🎨 Design System

### Couleurs

| Entité | Primaire | Secondaire |
|--------|----------|------------|
| **Digital** | Violet (#8b5cf6) | Rose/Fuchsia |
| **Consulting** | Indigo (#6366f1) | Ambre/Or |

### Typography
- Digital : Sans-serif moderne (Inter/Satoshi)
- Consulting : Même base avec accents élégants

---

## 🚀 Développement

```bash
# Installation
npm install

# Dev server
npm run dev

# Build
npm run build

# Preview
npm run preview
```

---

## 📁 Structure des fichiers

```
src/
├── pages/
│   ├── Index.tsx           # Accueil Holding
│   ├── digital/index.tsx   # Landing Digital
│   ├── consulting/index.tsx # Landing Consulting
│   ├── holding/a-propos.tsx # À propos
│   ├── FitXP.tsx           # Produit (inchangé)
│   └── NotFound.tsx
├── components/
│   ├── digital/            # Composants spécifiques Digital
│   ├── consulting/         # Composants spécifiques Consulting
│   └── holding/            # Composants Holding
└── ...
```

---

## 🔄 Changements depuis v1

1. **Séparation claire** Digital vs Consulting
2. **Prix corrigés** (taux de change réaliste)
3. **Devise unique** par affichage (toggle EUR/DZD)
4. **Navigation distincte** pour chaque entité
5. **Calendly** intégré pour Consulting
6. **Footer cross-linking** entre les entités

---

## 📞 Contact

- **Digital** : Formulaire de contact
- **Consulting** : Calendly (RDV stratégique)

---

© 2026 Nexaura Holding
