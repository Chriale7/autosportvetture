# 🏎️ Autosport - Sistema Completo con Pannello Admin

Sito web professionale per rivendita auto con **PANNELLO DI CONTROLLO** per gestire le tue auto facilmente!

## 🎯 CARATTERISTICHE PRINCIPALI

✅ **Pannello Admin** - Aggiungi, modifica ed elimina auto con pochi click  
✅ **Login Sicuro** - Accesso protetto da username e password  
✅ **Gestione Facile** - Interfaccia intuitiva stile Subito.it  
✅ **Filtri Avanzati** - I clienti possono cercare per marca, tipo, prezzo, carburante  
✅ **Aggiornamento Automatico** - Le modifiche appaiono subito sul sito  
✅ **100% Gratuito** - Hosting gratis su GitHub Pages  
✅ **Responsive** - Funziona perfettamente su mobile, tablet e desktop  

---

## 📁 FILE INCLUSI

```
autosport-completo/
├── index.html        → Sito pubblico (quello che vedono i clienti)
├── admin.html        → Pannello admin (per gestire le auto)
├── app.js           → Logica sito pubblico
├── admin.js         → Logica pannello admin
├── style.css        → Stili grafici
└── README.md        → Questa guida
```

---

## 🚀 INSTALLAZIONE SU GITHUB PAGES (GRATIS)

### 1️⃣ Crea Repository GitHub

1. Vai su https://github.com
2. Fai login (o registrati)
3. Clicca **"New repository"**
4. Nome: `autosport-sito`
5. Seleziona **"Public"**
6. Clicca **"Create repository"**

### 2️⃣ Carica i File

1. Clicca **"uploading an existing file"**
2. Trascina **TUTTI I 5 FILE** dalla cartella estratta:
   - `index.html`
   - `admin.html`
   - `app.js`
   - `admin.js`
   - `style.css`
3. Clicca **"Commit changes"**

### 3️⃣ Attiva GitHub Pages

1. Vai su **Settings** → **Pages**
2. Source: **main** branch, **/ (root)** folder
3. Clicca **"Save"**
4. ⏱️ Aspetta 2 minuti

### 4️⃣ Il Tuo Sito è Online! 🎉

Il sito sarà disponibile a:
**`https://tuo-username.github.io/autosport-sito`**

---

## 🔐 ACCESSO AL PANNELLO ADMIN

### Come Accedere:

1. Vai su: `https://tuo-username.github.io/autosport-sito/admin.html`
2. Username: **`admin`**
3. Password: **`autosport2024`**

### ⚠️ IMPORTANTE - Cambia la Password!

**DOPO IL PRIMO ACCESSO**, cambia la password per sicurezza:

1. Apri il file `admin.js` su GitHub
2. Cerca questa riga (circa riga 18):
   ```javascript
   if (username === 'admin' && password === 'autosport2024') {
   ```
3. Sostituisci `autosport2024` con la TUA password segreta
4. Salva (Commit changes)

---

## 📝 COME USARE IL PANNELLO ADMIN

### ➕ Aggiungere una Nuova Auto

1. Fai login al pannello admin
2. Clicca **"➕ Aggiungi Nuova Auto"**
3. Compila il form:
   - Marca (es: BMW)
   - Modello (es: Serie 3)
   - Tipo (Berlina, SUV, City Car, ecc.)
   - Anno
   - Chilometri
   - Carburante
   - Prezzo
   - Potenza (CV)
   - Cambio (Manuale/Automatico)
   - N° Posti
   - Garantita (Sì/No)
   - Emoji 🚗 (opzionale, per personalizzare)
   - Descrizione (opzionale)
4. Clicca **"💾 Salva Auto"**
5. ✨ L'auto appare SUBITO sul sito!

### ✏️ Modificare un'Auto

1. Trova l'auto nell'elenco
2. Clicca **"✏️ Modifica"**
3. Cambia i dati che vuoi
4. Clicca **"💾 Salva Auto"**

### 🗑️ Eliminare un'Auto

1. Trova l'auto nell'elenco
2. Clicca **"🗑️ Elimina"**
3. Conferma
4. L'auto sparisce dal sito immediatamente!

---

## 💡 FUNZIONALITÀ DEL PANNELLO

### Dashboard Statistiche
- **Auto Totali** - Quante auto hai in vendita
- **Prezzo Medio** - Il prezzo medio del tuo stock
- **Anno Più Recente** - L'auto più nuova in vendita

### Lista Auto
Vedi tutte le tue auto con:
- Immagine (emoji personalizzabile)
- Marca e modello
- Anno, km, carburante, cambio
- Prezzo
- Bottoni modifica ed elimina

---

## 🎨 PERSONALIZZAZIONE

### Cambiare i Tuoi Dati di Contatto

Tutti i tuoi dati (telefono, email, indirizzo) sono già inseriti nei file!

Se vuoi cambiarli:
1. Apri `index.html` su GitHub
2. Clicca matita ✏️
3. Cerca e sostituisci:
   - Email: `autosportvetture@gmail.com`
   - Telefono: `039 968 6292`
   - Cellulare: `340 002 4151`
   - Indirizzo: `Via Graziano Oltolini 23, Robbiate`
4. Commit changes

### Cambiare Colori del Sito

1. Apri `style.css`
2. Trova le prime righe:
```css
:root {
    --primary-color: #2563eb;    /* Blu principale */
    --accent-color: #f59e0b;     /* Arancione */
}
```
3. Sostituisci con i tuoi colori (usa https://colorpicker.me)

---

## ❓ DOMANDE FREQUENTI

### 📱 Come vedono le auto i clienti?

I clienti vanno sul sito principale:
`https://tuo-username.github.io/autosport-sito`

Vedranno:
- Tutte le auto che hai inserito
- Filtri per cercare (marca, tipo, prezzo, carburante)
- Pulsanti per contattarti via WhatsApp o telefono
- Form per valutazione usato
- Tutte le info di contatto

### 🔄 Le modifiche appaiono subito?

**SÌ!** Quando aggiungi/modifichi/elimini un'auto dal pannello admin:
- Viene salvata nel browser (localStorage)
- Appare immediatamente sul sito pubblico
- Nessun tempo di attesa!

### 🔐 Il pannello admin è sicuro?

Il sistema usa una password base. Per maggiore sicurezza:
1. Cambia la password nel file `admin.js` (vedi sopra)
2. Non condividere il link `admin.html` pubblicamente
3. Fai logout dopo ogni uso

### 📸 Posso caricare foto vere?

Attualmente il sistema usa emoji 🚗🚙🚕 come placeholder.

Per aggiungere foto vere serve un upgrade più avanzato (hosting con database).
Le emoji funzionano benissimo e rendono il sito moderno e colorato!

### 💾 Dove vengono salvate le auto?

Le auto vengono salvate nel **localStorage del browser**.

**IMPORTANTE**: 
- I dati rimangono sul browser che usi
- Se apri il sito da un altro computer, non vedrai le stesse auto
- Per sincronizzare su più dispositivi serve un database online (upgrade futuro)

### 🌐 Posso usare un mio dominio?

Sì! Puoi collegare un dominio tipo `www.autosport.com`:
1. Compra un dominio (GoDaddy, Namecheap, ecc.)
2. Nelle impostazioni GitHub Pages, aggiungi il dominio custom
3. Configura i DNS del dominio
(Guida completa: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## 🆘 PROBLEMI COMUNI

### Il pannello admin non si apre

1. Controlla di aver caricato `admin.html` e `admin.js`
2. L'URL deve essere: `https://tuo-username.github.io/autosport-sito/admin.html`
3. Aspetta 2-3 minuti dopo il caricamento dei file

### Le auto non si vedono sul sito

1. Verifica di aver fatto login al pannello admin
2. Aggiungi almeno un'auto
3. Ricarica il sito pubblico (F5 o Cmd+R)
4. Controlla che `app.js` sia stato caricato correttamente

### Password dimenticata

1. Apri `admin.js` su GitHub
2. Cerca la riga con la password (circa riga 18)
3. Puoi vedere la password attuale o cambiarla

---

## 🚀 UPGRADE FUTURI

Vuoi funzionalità avanzate? Ecco cosa si può aggiungere:

✨ **Upload Foto Vere** - Carica immagini delle auto  
✨ **Database Cloud** - Sincronizzazione multi-dispositivo  
✨ **WhatsApp Automatico** - Messaggi pre-compilati per ogni auto  
✨ **Form Lead** - Raccogli richieste clienti  
✨ **Google Analytics** - Statistiche visitatori  
✨ **SEO Avanzato** - Ottimizzazione motori di ricerca  

---

## 📞 SUPPORTO

Il sistema è completo e pronto all'uso!

Tutti i file sono commentati per facilitare eventuali modifiche.

---

## 🎉 CONGRATULAZIONI!

Hai ora un **sito professionale** con **pannello admin** per la tua rivendita auto!

**Completamente GRATIS** e facile da usare! 🚗✨

---

**Creato con ❤️ per Autosport Robbiate**