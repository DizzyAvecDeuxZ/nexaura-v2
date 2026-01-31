# Changelog - Nexaura

## [2.0.0] - 2026-01-24

### 🚀 Nouvelles Fonctionnalités

#### Backend API Contact
- **Nouveau serveur Express.js** pour gérer les soumissions du formulaire de contact
- Validation des données avec **Zod** (nom, email, téléphone, type de projet, message)
- Stockage des leads dans `/api/data/leads.json`
- **Rate limiting** : 10 requêtes max par 15 minutes
- Support CORS pour le frontend
- Préparation pour l'envoi d'emails (Nodemailer configuré)

**Endpoints API :**
| Méthode | URL | Description |
|---------|-----|-------------|
| GET | `/api/health` | Vérification du statut de l'API |
| POST | `/api/contact` | Soumettre un nouveau lead |
| GET | `/api/leads` | Liste des leads (protégé par API key) |

**URL de production :** `https://api.nexauraholding.com/api/contact`

---

### ⚡ Optimisations de Performance

#### Images WebP
- Conversion de tous les logos PNG en WebP
- **Réduction de 95%** de la taille des images

| Image | Avant | Après | Réduction |
|-------|-------|-------|-----------|
| logo-nexaura-3d-chrome | 2.14 MB | 109 KB | 95% |
| logo-nexaura-footer | 2.06 MB | 76 KB | 96% |
| logo-nexaura | 709 KB | 15 KB | 98% |
| **Total** | **4.9 MB** | **200 KB** | **96%** |

#### Code Splitting
Séparation du bundle en chunks optimisés :
- `vendor.js` : React, React DOM, React Router (162 KB)
- `ui.js` : Framer Motion, Radix UI (198 KB)
- `three.js` : Three.js et dépendances 3D (1.1 KB loader)
- Lazy loading automatique des pages

---

### 📱 Progressive Web App (PWA)

- **Manifest.json** généré automatiquement
- **Service Worker** avec stratégies de cache :
  - NetworkFirst pour l'API
  - CacheFirst pour les images Unsplash
- **Mode offline** : le site reste accessible sans connexion
- **Installable** sur mobile et desktop
- Icônes 192x192 et 512x512

---

### 🔍 SEO & Référencement

#### Sitemap XML
Fichier `/public/sitemap.xml` avec :
- Page d'accueil (priorité 1.0)
- Page FitXP (priorité 0.8)

#### Données Structurées JSON-LD
Schema.org LocalBusiness avec :
- Nom, description, logo
- Zone de service (France, Algérie)
- Types de services
- Note agrégée (4.9/5)
- Liens sociaux

#### Meta Tags Améliorés
- Open Graph complet (og:url, og:locale, og:site_name)
- Twitter Card optimisé
- Theme-color pour PWA
- Apple mobile web app capable

---

### 🛡️ TypeScript Strict Mode

Configuration stricte activée :
```json
{
  "strict": true,
  "noImplicitAny": true,
  "strictNullChecks": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true,
  "noFallthroughCasesInSwitch": true,
  "forceConsistentCasingInFileNames": true
}
```

---

### ✅ Tests avec Vitest

- Framework **Vitest** configuré
- **Testing Library** pour les tests React
- Configuration `vitest.config.ts`
- Tests utilitaires dans `/src/test/`

**Commandes :**
```bash
npm run test        # Mode watch
npm run test:run    # Exécution unique
npm run test:coverage  # Avec couverture
```

---

### 📏 ESLint Configuré

Règles actives :
- React Hooks recommended
- TypeScript ESLint recommended
- Pas de `console.log` (warn)
- Pas de `any` explicite (warn)
- Variables non utilisées (warn avec pattern `_`)
- `prefer-const` et `no-var` (error)

---

### ♿ Accessibilité (WCAG)

#### Améliorations CSS
- **Focus visible** amélioré sur tous les éléments interactifs
- Support **prefers-reduced-motion** : désactive les animations
- Support **prefers-contrast: high** : couleurs plus contrastées
- Classe `.sr-only` pour le contenu screen-reader only
- Skip link amélioré

#### Contrastes
- Violet primaire ajusté pour meilleur contraste
- Mode sombre avec couleurs optimisées

---

### 🌍 Internationalisation (i18n)

Structure préparée avec **i18next** :

```
src/i18n/
├── config.ts           # Configuration i18next
└── locales/
    ├── fr/
    │   └── common.json # Traductions françaises
    └── en/
        └── common.json # Traductions anglaises
```

**Sections traduites :**
- Navigation
- Hero section
- Statistiques
- Formulaire de contact
- Footer

---

## Structure du Projet

```
/home/billy/Nexaura/
├── api/                          # Backend API
│   ├── server.js                 # Serveur Express
│   ├── package.json              # Dépendances API
│   ├── .env                      # Configuration (PORT, SMTP, etc.)
│   ├── .env.example              # Template de configuration
│   └── data/
│       └── leads.json            # Stockage des leads
│
├── src/
│   ├── assets/
│   │   ├── logo-nexaura-3d-chrome.webp
│   │   ├── logo-nexaura-footer.webp
│   │   └── logo-nexaura.webp
│   │
│   ├── components/
│   │   ├── ContactModal.tsx      # Formulaire avec appel API
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   │
│   ├── i18n/
│   │   ├── config.ts
│   │   └── locales/{fr,en}/
│   │
│   ├── test/
│   │   ├── setup.ts
│   │   └── utils.test.ts
│   │
│   └── index.css                 # Styles + accessibilité
│
├── public/
│   ├── sitemap.xml
│   ├── robots.txt
│   ├── favicon-192.png
│   └── favicon-512.png
│
├── index.html                    # Meta tags + JSON-LD
├── vite.config.ts                # PWA + code splitting
├── vitest.config.ts              # Configuration tests
├── tsconfig.app.json             # TypeScript strict
├── eslint.config.js              # Règles ESLint
└── package.json
```

---

## Services Actifs

| Service | Port | URL |
|---------|------|-----|
| Frontend (dev) | 8082 | http://168.231.81.53:8082 |
| API Contact | 3002 | https://api.nexauraholding.com/api/* |
| PM2 Process | - | nexaura-api |

---

## Commandes Utiles

```bash
# Développement
npm run dev              # Serveur de dev Vite
npm run build            # Build production
npm run preview          # Preview du build

# Tests
npm run test             # Tests en mode watch
npm run test:run         # Tests une fois
npm run lint             # Vérification ESLint

# API (dans /api)
npm start                # Démarrer l'API
pm2 restart nexaura-api  # Redémarrer via PM2
pm2 logs nexaura-api     # Voir les logs
```

---

## Configuration Email (À faire)

Pour activer les notifications email, modifier `/api/.env` :

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASS=votre-mot-de-passe-application
NOTIFICATION_EMAIL=services@nexauraholding.com
```

---

## Auteurs

- **Nexaura Team**
- **Claude Opus 4.5** (Co-Author)

---

## Licence

Propriétaire - Nexaura Holding © 2026
