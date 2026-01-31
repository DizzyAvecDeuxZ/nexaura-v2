# Contexte Session - Nexaura v2

**Ce fichier est lu à chaque boot Prométhée pour restaurer le contexte.**

---

## 🎯 Résumé du Projet

**Nexaura v2** = Restructuration complète du site Nexaura en architecture multi-page avec :
- **Digital** : Sites web, apps, maintenance (cible PME)
- **Consulting** : IA, audit, POC (cible entreprises)
- **Holding** : Vision, équipe, valeurs

---

## 🔥 Problème Résolu Ce Soir (31/01/2026)

### Le Problème
Je n'arrivais pas à retrouver le projet parce que :
1. Pas de mémoire entre les sessions (nouveau contexte à chaque fois)
2. Le projet était dans `/home/dizzy/nexaura-v2/` (pas dans `Nexaura/`)
3. Aucun point d'entrée clair pour savoir où chercher

### La Solution Implémentée
1. ✅ Création de `/home/dizzy/CURRENT_PROJECT.md` - Point d'entrée universel
2. ✅ Création de `/home/dizzy/nexaura-v2/SESSION_CONTEXT.md` - Contexte projet
3. ✅ Push sur GitHub : https://github.com/DizzyAvecDeuxZ/nexaura-v2
4. ✅ Déploiement Vercel : https://nexaura-zeta.vercel.app
5. ✅ Token Vercel sauvegardé dans `~/.local/share/com.vercel.cli/auth.json`

---

## 🚀 Prochaines Étapes Prioritaires

1. **Calendly** - Remplacer les placeholders dans `/consulting/contact`
2. **Backend** - Connecter l'API pour les formulaires
3. **Analytics** - Ajouter Google Analytics ou Plausible
4. **SEO** - react-helmet-async pour les méta-tags dynamiques

---

## 📝 Notes Techniques

### Composants Clés
- `Header` : Navigation adaptative (3 variants selon la section)
- `Footer` : Liens croisés Digital/Consulting
- `CurrencyToggle` : Toggle EUR/DZD unique (pas de double affichage)
- `PriceDisplay` : Formatage intelligent des prix
- `pricing.ts` : Données centralisées

### Routes Important à Tester
- `/` - Home chooser
- `/digital` - Landing avec tarifs
- `/consulting` - Landing premium
- `/consulting/audit` - Audit IA

---

**Dernière mise à jour :** 31 janvier 2026 - 05:45
