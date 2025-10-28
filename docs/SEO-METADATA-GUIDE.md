# Guía de Metadatos SEO - GameStore

## 📋 Resumen de Cambios

Se han agregado metadatos completos para optimizar tu sitio web en navegadores y motores de búsqueda.

## 🎯 Archivos Creados/Modificados

### 1. **index.html** - Metadatos principales
- ✅ Meta tags SEO básicos (descripción, keywords, autor)
- ✅ Open Graph para Facebook/LinkedIn
- ✅ Twitter Cards
- ✅ Meta tags para Apple (iOS)
- ✅ Meta tags para Microsoft
- ✅ Favicon y múltiples iconos
- ✅ URL canónica
- ✅ Service Worker registrado
- ✅ Structured Data (JSON-LD)

### 2. **manifest.json** - PWA (Progressive Web App)
- ✅ Nombre y descripción de la app
- ✅ Iconos en múltiples tamaños
- ✅ Tema y colores
- ✅ Shortcuts (accesos rápidos)
- ✅ Screenshots para tiendas de apps

### 3. **browserconfig.xml** - Optimización Microsoft
- ✅ Configuración para Windows/Edge
- ✅ Tiles de diferentes tamaños

### 4. **robots.txt** - Control de rastreo
- ✅ Permite rastreo de bots
- ✅ Bloquea áreas privadas
- ✅ Referencia al sitemap

### 5. **sitemap.xml** - Mapa del sitio
- ✅ URLs principales del sitio
- ✅ Prioridades y frecuencias de actualización

### 6. **service-worker.js** - Funcionalidad offline
- ✅ Cache de recursos
- ✅ Funcionalidad offline
- ✅ Push notifications (preparado)

### 7. **.htaccess** - Configuración Apache
- ✅ Redirección HTTPS
- ✅ Compresión
- ✅ Cache del navegador
- ✅ Headers de seguridad

## 🔧 Personalización Necesaria

### 1. Reemplaza las URLs
Busca y reemplaza `https://gamestore.com` con tu dominio real en:
- `index.html`
- `sitemap.xml`
- `manifest.json`

### 2. Actualiza redes sociales
En `index.html`, actualiza:
```html
<meta name="twitter:site" content="@tu_usuario">
<meta name="twitter:creator" content="@tu_usuario">
```

Y en el JSON-LD:
```javascript
"sameAs": [
  "https://www.facebook.com/tu_pagina",
  "https://www.twitter.com/tu_usuario",
  "https://www.instagram.com/tu_usuario"
]
```

### 3. Crea las imágenes requeridas

#### Iconos (PNG):
- `icon-72x72.png`
- `icon-96x96.png`
- `icon-128x128.png`
- `icon-144x144.png`
- `icon-152x152.png`
- `icon-192x192.png`
- `icon-384x384.png`
- `icon-512x512.png`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png` (180x180)

#### Imágenes para redes sociales:
- `assets/og-image.jpg` (1200x630px) - Para Facebook/LinkedIn
- `assets/twitter-card.jpg` (1200x675px) - Para Twitter

#### Screenshots (opcional para PWA):
- `screenshots/home.png` (1280x720px)
- `screenshots/games.png` (750x1334px)

### 4. Actualiza el sitemap.xml
Agrega todas las URLs de tu sitio:
```xml
<url>
  <loc>https://gamestore.com/tu-pagina</loc>
  <lastmod>2025-10-27</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
```

## 🚀 Beneficios de estos metadatos

### SEO (Posicionamiento)
- ✅ Mejor indexación en Google, Bing, etc.
- ✅ Rich snippets en resultados de búsqueda
- ✅ Mayor tasa de clics (CTR)

### Redes Sociales
- ✅ Vista previa atractiva al compartir enlaces
- ✅ Control sobre título, descripción e imagen
- ✅ Mejor engagement

### Navegadores
- ✅ Instalable como app (PWA)
- ✅ Funciona offline
- ✅ Aparece en recomendaciones
- ✅ Notificaciones push (preparado)

### Experiencia de Usuario
- ✅ Carga más rápida (cache)
- ✅ Accesos directos
- ✅ Mejor en móviles

## 📊 Herramientas de Validación

Prueba tus metadatos en:

1. **Google Search Console**: https://search.google.com/search-console
2. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
3. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
4. **Lighthouse (Chrome DevTools)**: Para auditoría PWA y SEO
5. **PageSpeed Insights**: https://pagespeed.web.dev/

## 🔐 Seguridad

Los headers de seguridad incluidos protegen contra:
- XSS (Cross-Site Scripting)
- Clickjacking
- MIME sniffing
- Referrer leaks

## 📱 PWA - App Instalable

Con estos cambios, tu sitio puede:
- ✅ Instalarse en dispositivos móviles y escritorio
- ✅ Aparecer en pantalla de inicio
- ✅ Funcionar offline
- ✅ Enviar notificaciones (cuando configures)

## 🎨 Próximos Pasos

1. **Genera los iconos**: Usa herramientas como:
   - https://realfavicongenerator.net/
   - https://www.favicon-generator.org/

2. **Crea imágenes para redes sociales**: Tamaños específicos:
   - Open Graph: 1200x630px
   - Twitter: 1200x675px

3. **Registra tu sitio**:
   - Google Search Console
   - Bing Webmaster Tools
   - Google Analytics (opcional)

4. **Verifica**: Usa las herramientas de validación

5. **Actualiza regularmente**: El sitemap y las fechas

## ⚠️ Notas Importantes

- El archivo `.htaccess` solo funciona con servidores Apache
- Si usas Nginx, necesitarás una configuración diferente
- El Service Worker funciona solo con HTTPS (excepto en localhost)
- Actualiza las URLs antes de desplegar

## 🆘 Soporte

Si necesitas ayuda configurando:
- Revisa la consola del navegador (F12)
- Usa Lighthouse para diagnóstico
- Verifica que todos los archivos estén accesibles

---

**¡Tu sitio ahora está optimizado para SEO y PWA! 🎉**
