# Nexaura Contact API

API backend pour gérer les soumissions du formulaire de contact Nexaura.

## 🚀 Stack Technique

- **Runtime:** Node.js 20+
- **Framework:** Express.js 4.18
- **Validation:** Zod 3.22
- **Email:** Nodemailer 6.9
- **Sécurité:** Helmet + CORS + Rate Limiting
- **Process Manager:** PM2

---

## 📡 Endpoints

### GET /api/health
Health check de l'API

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2026-01-24T00:30:41.110Z"
}
```

---

### POST /api/contact
Soumettre un nouveau lead

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+33 6 12 34 56 78",
  "projectType": "Site Web",
  "message": "Je voudrais créer un site e-commerce...",
  "wantCall": true
}
```

**Validation:**
- `name`: 2-100 caractères (requis)
- `email`: Format email valide (requis)
- `phone`: Optionnel
- `projectType`: "Site Web" | "Application Mobile" | "Autre" (requis)
- `message`: 10-2000 caractères (requis)
- `wantCall`: Boolean (défaut: false)

**Response Success (201):**
```json
{
  "success": true,
  "message": "Votre demande a été envoyée avec succès!",
  "leadId": "mkrkw6xingmb5f3qj1"
}
```

**Response Error (400):**
```json
{
  "success": false,
  "error": "Données invalides",
  "details": [
    { "field": "email", "message": "Email invalide" }
  ]
}
```

**Rate Limiting:**
- 10 requêtes max par 15 minutes par IP
- Header `Retry-After` si limite dépassée

---

### GET /api/leads
Liste de tous les leads (protégé)

**Headers:**
```
X-API-Key: votre-clé-admin
```

**Response:**
```json
{
  "total": 42,
  "leads": [
    {
      "id": "mkrkw6xingmb5f3qj1",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+33612345678",
      "projectType": "Site Web",
      "message": "...",
      "wantCall": true,
      "createdAt": "2026-01-24T00:35:37.878Z",
      "status": "new",
      "ip": "::ffff:192.168.1.1",
      "userAgent": "Mozilla/5.0..."
    }
  ]
}
```

---

## ⚙️ Configuration

### Variables d'environnement (.env)

```env
# Port du serveur
PORT=3002

# Email SMTP (Gmail, SendGrid, Brevo, etc.)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASS=votre-mot-de-passe-application

# Email de notification
NOTIFICATION_EMAIL=services@nexauraholding.com

# Clé API admin (générer avec: openssl rand -hex 32)
ADMIN_API_KEY=d04e9718c6147148d2132127f66f4d759c3e93f478611a9bb4f5223a11c82738
```

### Générer une clé admin:
```bash
openssl rand -hex 32
```

---

## 🚀 Installation & Démarrage

### Installation
```bash
cd api/
npm install
```

### Développement
```bash
npm run dev  # Mode watch avec --watch
```

### Production
```bash
npm start
```

### Avec PM2
```bash
pm2 start server.js --name nexaura-api
pm2 save
pm2 startup  # Auto-démarrage
```

---

## 📊 Monitoring

### Logs PM2
```bash
pm2 logs nexaura-api          # Logs en temps réel
pm2 logs nexaura-api --lines 50  # Dernières 50 lignes
```

### Consulter les leads
```bash
# Avec l'API Key
curl -H "X-API-Key: VOTRE_CLE" https://api.nexauraholding.com/api/leads

# Ou directement dans le fichier
cat data/leads.json | jq
```

### Statistiques
```bash
# Nombre total de leads
cat data/leads.json | jq '. | length'

# Leads des dernières 24h
cat data/leads.json | jq '[.[] | select(.createdAt > "2026-01-23")]'

# Leads par type de projet
cat data/leads.json | jq 'group_by(.projectType) | map({type: .[0].projectType, count: length})'
```

---

## 🔒 Sécurité

### Mesures implémentées:
- ✅ Helmet (security headers)
- ✅ CORS configuré
- ✅ Rate limiting (10 req/15min)
- ✅ Validation Zod stricte
- ✅ Body size limit (10kb)

### À configurer:
- [ ] HTTPS seulement (Nginx)
- [ ] CSRF tokens si sessions
- [ ] Honeypot field anti-bot
- [ ] reCAPTCHA v3

---

## 📧 Configuration Email

### Gmail (App Password requis)

1. Activer 2FA sur votre compte Gmail
2. Générer un mot de passe d'application:
   - https://myaccount.google.com/apppasswords
3. Configurer dans `.env`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASS=mot-de-passe-application-16-caracteres
```

### SendGrid

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=votre-clé-api-sendgrid
```

### Brevo (Sendinblue)

```env
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=votre-email@brevo.com
SMTP_PASS=votre-clé-smtp-brevo
```

---

## 🧪 Tests

### Test manuel
```bash
# Health check
curl https://api.nexauraholding.com/api/health

# Soumettre un lead test
curl -X POST https://api.nexauraholding.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "projectType": "Site Web",
    "message": "Ceci est un test"
  }'
```

### Test de charge
```bash
# Avec Apache Bench
ab -n 100 -c 10 https://api.nexauraholding.com/api/health

# Avec hey
hey -n 100 -c 10 https://api.nexauraholding.com/api/health
```

---

## 📁 Structure des Données

### Lead Object
```typescript
interface Lead {
  id: string                    // Unique ID
  name: string                  // Nom complet
  email: string                 // Email
  phone?: string                // Téléphone (optionnel)
  projectType: string           // Type de projet
  message: string               // Message
  wantCall: boolean             // Demande appel
  createdAt: string             // ISO timestamp
  status: 'new' | 'contacted' | 'closed'
  ip: string                    // IP du client
  userAgent: string             // Navigateur
}
```

### Stockage
Fichier: `data/leads.json`
Format: Array JSON

**Backup recommandé:**
```bash
# Backup quotidien
0 2 * * * cp /home/billy/Nexaura/api/data/leads.json /home/billy/backups/leads-$(date +\%Y\%m\%d).json
```

---

## 🔧 Maintenance

### Redémarrer l'API
```bash
pm2 restart nexaura-api
```

### Mettre à jour
```bash
cd /home/billy/Nexaura/api
git pull
npm install
pm2 restart nexaura-api
```

### Nettoyer les vieux leads
```bash
# Archiver leads > 90 jours
node -e "
const fs = require('fs');
const leads = JSON.parse(fs.readFileSync('data/leads.json'));
const cutoff = Date.now() - 90 * 24 * 60 * 60 * 1000;
const active = leads.filter(l => new Date(l.createdAt) > cutoff);
const archived = leads.filter(l => new Date(l.createdAt) <= cutoff);
fs.writeFileSync('data/leads.json', JSON.stringify(active, null, 2));
fs.writeFileSync('data/leads-archive.json', JSON.stringify(archived, null, 2));
console.log('Archived', archived.length, 'leads');
"
```

---

## 🌐 URLs de Production

- **API Base:** https://api.nexauraholding.com
- **Health:** https://api.nexauraholding.com/api/health
- **Contact:** https://api.nexauraholding.com/api/contact
- **Leads (admin):** https://api.nexauraholding.com/api/leads

---

## 📞 Support

Pour toute question ou problème:
- Email: services@nexauraholding.com
- Logs: `pm2 logs nexaura-api`
- Fichier leads: `/home/billy/Nexaura/api/data/leads.json`

---

**Version:** 1.0.0  
**Dernière mise à jour:** 2026-01-24
