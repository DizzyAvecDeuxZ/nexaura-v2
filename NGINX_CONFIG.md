# Configuration Nginx - Nexaura

## Configuration Active

**Fichier:** /etc/nginx/sites-available/nexauraholding.com

### Sites Servis
1. **nexauraholding.com** - Site statique Vite (port 443)
2. **api.nexauraholding.com** - API backends (port 443)

### Upstreams
- fastapi_backend: 127.0.0.1:8000
- nexaura_contact_api: 127.0.0.1:3002

### Cache Strategy
- Assets: 1 an immutable
- HTML: 1h revalidate
- Service Worker: no-cache
- Manifest: 1h

### Compression
- Gzip activé (niveau 6)
- Types: js, css, json, xml, fonts, svg

## Commandes Utiles

Tester config:
```
nginx -t
```

Recharger:
```
systemctl reload nginx
```

Déployer nouveau build:
```
cd /home/billy/Nexaura
npm run build
rm -rf /var/www/nexaura/dist
cp -r dist /var/www/nexaura/
systemctl reload nginx
```

## URLs Actives
- Site: https://nexauraholding.com
- API: https://api.nexauraholding.com/api/contact
- Health: https://api.nexauraholding.com/api/health

Voir fichier complet: /etc/nginx/sites-available/nexauraholding.com
