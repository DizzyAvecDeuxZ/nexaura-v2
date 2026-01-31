# 🚀 Mise en ligne sur GitHub

## Étape 1 : Créer le repo sur GitHub

1. Connecte-toi sur https://github.com
2. Clique sur "New repository"
3. Nom : `nexaura-v2`
4. Visibilité : Public (ou Private)
5. **Ne coche PAS** "Initialize with README"
6. Clique "Create repository"

## Étape 2 : Pousser le code

```bash
cd /home/dizzy/nexaura-v2

# Ajouter le remote
git remote add origin git@github.com:DizzyAvecDeuxZ/nexaura-v2.git

# Renommer la branche
git branch -m main

# Pousser
git push -u origin main
```

## Étape 3 : Vérifier

Le repo sera disponible sur :
`https://github.com/DizzyAvecDeuxZ/nexaura-v2`

---

# 🌐 Déploiement

## Option A : Vercel (Recommandé)

1. Connecte-toi sur https://vercel.com avec GitHub
2. "Add New Project"
3. Sélectionne `nexaura-v2`
4. Framework : Vite
5. Build command : `npm run build`
6. Output directory : `dist`
7. Deploy

## Option B : Netlify

1. Connecte-toi sur https://netlify.com
2. "Add new site" → "Import from Git"
3. Sélectionne le repo
4. Build settings auto-détectés (Vite)
5. Deploy

## Option C : GitHub Pages

1. Dans le repo GitHub → Settings → Pages
2. Source : GitHub Actions
3. Utiliser le workflow Vite

---

Le site sera alors accessible publiquement !
