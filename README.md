# 🚗 AutoPro - Sito Rivendita Auto

Sito web completo e gratuito per rivendita auto, pronto all'uso!

## 📁 Contenuto del Pacchetto

- `index.html` - Pagina principale del sito
- `style.css` - Tutti gli stili e design
- `script.js` - Funzionalità interattive
- `README.md` - Questa guida

## 🚀 Come Pubblicare il Sito GRATIS

### Opzione 1: GitHub Pages (CONSIGLIATA)

1. **Crea un account GitHub** (se non ce l'hai): https://github.com
2. **Crea un nuovo repository**:
   - Clicca su "New repository"
   - Nome: `rivendita-auto` (o quello che preferisci)
   - Seleziona "Public"
   - Clicca "Create repository"

3. **Carica i file**:
   - Clicca "uploading an existing file"
   - Trascina i 3 file (index.html, style.css, script.js)
   - Clicca "Commit changes"

4. **Attiva GitHub Pages**:
   - Vai su Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: seleziona "main" → cartella "/(root)"
   - Clicca "Save"

5. **Il tuo sito sarà online** in 1-2 minuti all'indirizzo:
   `https://tuousername.github.io/rivendita-auto`

### Opzione 2: Netlify

1. Vai su https://www.netlify.com
2. Clicca "Sign up" (gratis)
3. Trascina la cartella con i 3 file nell'area di upload
4. Il sito sarà online immediatamente!
5. Puoi cambiare il nome del sito nelle impostazioni

### Opzione 3: Vercel

1. Vai su https://vercel.com
2. Registrati gratis
3. Clicca "New Project"
4. Carica i file
5. Deploy automatico!

## ✏️ Come Personalizzare il Sito

### 1. Modificare Nome e Contatti

Apri `index.html` e cerca:

```html
<!-- Cerca questa sezione -->
<h1>🚗 AutoPro</h1>
```

Sostituisci "AutoPro" con il nome della tua rivendita.

Cerca anche:
```html
<a href="mailto:info@autopro.it">
<a href="tel:+393341234567">
```

Sostituisci con la tua email e telefono (mantieni il formato).

### 2. Cambiare le Auto in Vendita

Apri `script.js` e trova l'array `carsDatabase`:

```javascript
const carsDatabase = [
    {
        marca: 'audi',      // Cambia marca
        modello: 'A4',      // Cambia modello
        prezzo: 32990,      // Cambia prezzo
        anno: 2022,         // ecc...
        // ... altri dati
    },
    // Aggiungi più auto copiando il blocco
];
```

**Per aggiungere un'auto**, copia un blocco completo e modifica i valori.
**Per rimuovere un'auto**, elimina l'intero blocco.

### 3. Cambiare Colori

Apri `style.css` e modifica le prime righe:

```css
:root {
    --primary-color: #2563eb;    /* Blu principale */
    --secondary-color: #1e40af;  /* Blu scuro */
    --accent-color: #f59e0b;     /* Arancione */
}
```

Usa un color picker online per trovare i codici colore che preferisci.

### 4. Modificare Testi

Apri `index.html` e cerca le sezioni che vuoi modificare:

- **Hero Title**: Cerca `<h2 class="hero-title">`
- **Chi Siamo**: Cerca `<section class="about-section"`
- **Recensioni**: Cerca `<section class="reviews-section"`

### 5. Cambiare Indirizzo e Orari

Cerca in `index.html`:

```html
<section class="contact-section" id="contatti">
```

Modifica indirizzo, orari, telefono, email secondo le tue necessità.

## 🎨 Aggiungere Foto Vere delle Auto

Attualmente il sito usa emoji 🚗 come placeholder. Per usare foto vere:

1. **Carica le foto** nella stessa cartella del sito (o usa un servizio come Imgur)

2. In `script.js`, modifica l'auto aggiungendo il campo `immagine`:

```javascript
{
    marca: 'bmw',
    modello: 'Serie 3',
    immagine: 'bmw-serie3.jpg',  // Nome del file foto
    // ... altri dati
}
```

3. In `script.js`, cerca la funzione `displayCars` e modifica:

```javascript
// CERCA QUESTA PARTE:
<div class="car-image">
    <span style="font-size: 60px;">${car.emoji}</span>

// SOSTITUISCI CON:
<div class="car-image" style="background-image: url('${car.immagine || 'placeholder.jpg'}'); background-size: cover; background-position: center;">
```

## 📱 Funzionalità Incluse

✅ Design responsive (funziona su mobile, tablet, desktop)
✅ Filtri di ricerca auto
✅ Form valutazione usato
✅ Form contatto
✅ Recensioni clienti
✅ Pulsante WhatsApp fisso
✅ Menu mobile hamburger
✅ Smooth scroll
✅ Notifiche toast
✅ SEO-friendly

## 🔧 Personalizzazioni Avanzate

### Aggiungere Google Maps

In `index.html`, nella sezione contatti, aggiungi:

```html
<iframe 
    src="https://www.google.com/maps/embed?pb=TUO_CODICE_EMBED"
    width="100%" 
    height="300" 
    style="border:0; border-radius: 10px;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

Per ottenere il codice embed:
1. Vai su Google Maps
2. Cerca il tuo indirizzo
3. Clicca "Condividi" → "Incorpora mappa"
4. Copia il codice

### Aggiungere Google Analytics

Prima del tag `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TUO-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TUO-ID');
</script>
```

### Collegare un Form a Email Vera

Il sito attualmente mostra solo notifiche. Per inviare email vere:

**Opzione A - Formspree (gratis fino a 50 form/mese)**
1. Vai su https://formspree.io
2. Registrati e crea un form
3. Sostituisci il form in `index.html` con il codice fornito

**Opzione B - EmailJS (gratis fino a 200 email/mese)**
1. Vai su https://www.emailjs.com
2. Configura il servizio
3. Aggiungi il loro script in `index.html`

## 💡 Suggerimenti

1. **Backup**: Salva sempre una copia dei file originali prima di modificare
2. **Test**: Prova il sito localmente aprendo `index.html` nel browser
3. **Mobile**: Controlla sempre come appare su mobile
4. **SEO**: Modifica il tag `<title>` e `<meta description>` in `index.html`
5. **Velocità**: Ottimizza le immagini prima di caricarle (max 200KB ciascuna)

## 📸 Come Aggiungere Logo Personalizzato

1. Crea un file `logo.png` o `logo.jpg`
2. Caricalo nella stessa cartella
3. In `index.html`, cerca:

```html
<div class="logo">
    <h1>🚗 AutoPro</h1>
```

Sostituisci con:

```html
<div class="logo">
    <img src="logo.png" alt="Nome Rivendita" style="height: 50px;">
```

## 🆘 Problemi Comuni

**Il sito non si vede online**
- Aspetta 2-3 minuti dopo il caricamento
- Controlla che i file siano nella cartella principale (root)
- Verifica che il file si chiami esattamente `index.html`

**I form non funzionano**
- I form mostrano solo notifiche, non inviano email
- Usa Formspree o EmailJS per email vere (vedi sopra)

**Le auto non si vedono**
- Controlla in `script.js` che l'array `carsDatabase` sia corretto
- Apri la console del browser (F12) per vedere eventuali errori

**Il sito è lento**
- Ottimizza le immagini (usa TinyPNG o Squoosh)
- Limita il numero di auto mostrate (max 20-30)

## 📞 Supporto

Il sito è completo e pronto all'uso. Tutti i file sono commentati per aiutarti nella personalizzazione.

## 📄 Licenza

Questo sito è completamente gratuito. Puoi usarlo, modificarlo e personalizzarlo come preferisci per la tua rivendita auto!

---

**Creato con ❤️ per la tua rivendita auto**

Buona fortuna con il tuo nuovo sito! 🚗✨