# 🏎️ Autosport - Sito con Pannello Admin

Sistema completo: **Sito originale con LOGO** + **Pannello Admin nuovo**!

## ✅ COSA C'È IN QUESTO PACCHETTO

- ✅ **Sito pubblico** con il TUO logo Autosport
- ✅ **Pannello Admin** per gestire le auto facilmente
- ✅ Tutti i tuoi dati (telefono, email, indirizzo, Instagram)
- ✅ Sistema automatico: aggiungi auto dal pannello → appaiono sul sito!

---

## 📁 FILE DA CARICARE SU GITHUB

Carica **TUTTI questi 6 file**:

1. ✅ `index.html` - Sito pubblico (CON LOGO)
2. ✅ `admin.html` - Pannello admin
3. ✅ `app.js` - Logica sito pubblico
4. ✅ `admin.js` - Logica pannello admin
5. ✅ `style.css` - Stili grafici
6. ✅ `logo.png` - Il tuo logo Autosport

---

## 🚀 INSTALLAZIONE (5 MINUTI)

### 1. CANCELLA i file vecchi su GitHub

Prima di tutto, **ELIMINA** tutti i file vecchi dal tuo repository:
- Vai sul tuo repository GitHub
- Seleziona ogni file vecchio
- Clicca sui 3 puntini → Delete file
- Commit

### 2. CARICA i nuovi file

1. Clicca **"Upload files"**
2. Trascina **TUTTI E 6 I FILE** (vedi lista sopra)
3. Clicca **"Commit changes"**
4. ⏱️ Aspetta 2 minuti

### 3. Il sito è online!

- **Sito pubblico**: `https://tuo-username.github.io/repo-name`
- **Pannello admin**: `https://tuo-username.github.io/repo-name/admin.html`

---

## 🔐 ACCESSO PANNELLO ADMIN

**URL**: Vai su `tuosito.com/admin.html`

**Credenziali**:
- Username: `admin`
- Password: `autosport2024`

---

## 📝 COME AGGIUNGERE AUTO

1. Vai su `tuosito.com/admin.html`
2. Login (admin / autosport2024)
3. Clicca **"➕ Aggiungi Nuova Auto"**
4. Compila:
   - Marca (es: BMW)
   - Modello (es: Serie 3)
   - Tipo (Berlina, SUV, ecc.)
   - Anno, Km, Carburante
   - Prezzo, CV, Cambio
   - Posti, Garantita
   - Emoji 🚗 (opzionale)
   - Descrizione (opzionale)
5. Clicca **"💾 Salva Auto"**
6. ✨ **L'auto appare SUBITO sul sito!**

---

## ✏️ MODIFICARE/ELIMINARE AUTO

### Modificare:
1. Pannello admin → trova l'auto
2. Clicca **"✏️ Modifica"**
3. Cambia i dati
4. Salva

### Eliminare:
1. Pannello admin → trova l'auto
2. Clicca **"🗑️ Elimina"**
3. Conferma
4. L'auto sparisce dal sito

---

## 🎨 PERSONALIZZARE

### Cambiare Password Admin:

1. Apri `admin.js` su GitHub
2. Clicca matita ✏️
3. Cerca la riga 18:
   ```javascript
   if (username === 'admin' && password === 'autosport2024') {
   ```
4. Sostituisci `autosport2024` con la TUA password
5. Commit changes

### Cambiare Colori:

1. Apri `style.css`
2. Prime righe:
   ```css
   --primary-color: #2563eb;  /* Cambia questo */
   ```
3. Metti il tuo codice colore

---

## ❓ DOMANDE FREQUENTI

**Q: Dove vedo le auto che aggiungo?**
A: Sul sito pubblico (`tuosito.com`). Refresh la pagina se non vedi subito.

**Q: Posso caricare foto vere?**
A: Attualmente usa emoji 🚗. Per foto vere serve upgrade avanzato.

**Q: Le auto rimangono salvate?**
A: Sì, nel localStorage del browser. Usa sempre lo stesso browser/computer per il pannello admin.

**Q: Posso usare il pannello da cellulare?**
A: Sì! Funziona perfettamente anche da mobile.

---

## ⚠️ IMPORTANTE

- **Non cancellare** `app.js` o `admin.js` - servono per far funzionare tutto!
- **Non rimuovere** `logo.png` - è il tuo logo!
- Fai **logout** dal pannello admin dopo l'uso

---

## 🎉 FATTO!

Hai il tuo sito originale (CON LOGO) + il pannello admin!

Carica i 6 file su GitHub e sei online! 🚗✨