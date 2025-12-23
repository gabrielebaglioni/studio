# Guida Sviluppo Locale

## 🚀 Avvio Sviluppo

### Comando Principale

```bash
pnpm dev
```

Questo comando avvia:
- **Turborepo proxy** su porta **3024** (configurata in `apps/shell/microfrontends.json`)
- Tutte le app con porte automatiche:
  - **Shell**: porta 3000 → gestisce `/`
  - **Details**: porta 3001 → gestisce `/projects/*`
  - **Checkout**: porta 3002 → gestisce `/support/*`

---

## 🔀 Navigazione DEV: Gateway vs Standalone

Il progetto supporta **due modalità di sviluppo** per testare diversi scenari:

### Modalità 1 — Gateway / Proxy (DEV "COME PROD") 🌐 **RACCOMANDATO**

**Come funziona:**
- Un solo URL: `http://localhost:3024`
- Il proxy instrada automaticamente per path:
  - `/` → Shell (porta 3000)
  - `/projects/*` → Details (porta 3001)
  - `/support/*` → Checkout (porta 3002)
- **Link relativi**: I link cross-app usano path relativi (es. `/projects/climate`)
- Replica l'ambiente di produzione su Vercel (un dominio unico + routing multi-zones)

**Avvio:**
```bash
pnpm dev
```

**Accesso:**
- Tutto su: `http://localhost:3024`
  - `http://localhost:3024/` → Shell
  - `http://localhost:3024/projects/climate` → Details
  - `http://localhost:3024/support/climate` → Checkout

**Regole link:**
- ✅ Link relativi: `/projects/${slug}`, `/support/${slug}`
- ❌ Mai hardcodare porte nei link

---

### Modalità 2 — Standalone (DEV "PORTE SEPARATE") 🔌

**Come funziona:**
- Ogni app gira e si naviga sulla sua porta:
  - Shell: `http://localhost:3000/`
  - Details: `http://localhost:3001/`
  - Checkout: `http://localhost:3002/`
- **Link assoluti con porte**: Quando passi da una app all'altra, devi **CAMBIARE PORTA** manualmente
- Le app sono isolate e non c'è proxy che instrada
- Utile per testare le app in isolamento completo

**Avvio:**
```bash
# Avvia solo le app che ti servono
pnpm dev --filter @qia/shell
pnpm dev --filter @qia/details
pnpm dev --filter @qia/checkout
```

**Accesso:**
- Shell: `http://localhost:3000/`
- Details: `http://localhost:3001/projects/climate`
- Checkout: `http://localhost:3002/support/climate`

**Regole link:**
- ✅ Link assoluti con porta: `http://localhost:3001/projects/${slug}`, `http://localhost:3002/support/${slug}`
- ✅ Quando navighi da shell a details/checkout, il link deve puntare alla porta corretta
- ❌ Non usare link relativi (non funzionerebbero tra app diverse)

**Esempi navigazione:**
- Da Shell (3000) → Details: link deve essere `http://localhost:3001/projects/climate`
- Da Shell (3000) → Checkout: link deve essere `http://localhost:3002/support/climate`
- Da Details (3001) → Checkout: link deve essere `http://localhost:3002/support/climate`
- Da Checkout (3002) → Details: link deve essere `http://localhost:3001/projects/climate`

---

## ⚙️ Configurazione Modalità

### Variabili d'Ambiente

Crea un file `.env.local` nella root del progetto o in ogni app:

```bash
# Modalità sviluppo (opzionale, default: auto-detect)
# Valori: 'gateway' | 'standalone'
# - 'gateway': Sempre link relativi (come produzione)
# - 'standalone': Sempre link assoluti con porte
# - non settato: Auto-detect basato sulla porta corrente
NEXT_PUBLIC_DEV_MODE=gateway

# Origin delle app (opzionale, default: localhost con porte standard)
# Solo necessario se vuoi override le porte di default o usare host diversi
NEXT_PUBLIC_SHELL_ORIGIN=http://localhost:3000
NEXT_PUBLIC_DETAILS_ORIGIN=http://localhost:3001
NEXT_PUBLIC_CHECKOUT_ORIGIN=http://localhost:3002

# Gateway origin (opzionale, solo per debug)
NEXT_PUBLIC_GATEWAY_ORIGIN=http://localhost:3024
```

**Comportamento:**
- Se `NEXT_PUBLIC_DEV_MODE` non è settato: **auto-detect** basato sulla porta corrente
  - Porta 3024 → gateway mode (link relativi)
  - Porte 3000/3001/3002 → standalone mode (link assoluti con porte)
- Se `NEXT_PUBLIC_DEV_MODE=gateway`: sempre link relativi (come produzione)
- Se `NEXT_PUBLIC_DEV_MODE=standalone`: sempre link assoluti con porte

**In produzione:**
- Le env vars `NEXT_PUBLIC_*` non devono essere settate
- I link sono sempre relativi (path-only)
- Nessuna porta hardcodata

### Hint UI (Solo Development)

In modalità sviluppo, viene mostrato un hint in basso a destra che indica:
- La modalità attiva (Gateway/Standalone)
- La porta corrente
- Le regole per i link

Per disabilitarlo, rimuovi `<DevModeHint />` da `apps/shell/src/app/layout.tsx`.

---

## 📋 Tabella Riepilogativa

| Modalità | URL Base | Link Type | Quando Usare |
|----------|----------|-----------|--------------|
| **Gateway** | `http://localhost:3024` | Relativi (`/projects/*`) | Test "come PROD", sviluppo normale |
| **Standalone** | `http://localhost:3000/3001/3002` | Assoluti (`http://localhost:3001/projects/*`) | Test isolamento app, debug singola app |

---

## 🔄 Modalità Fallback

Se avvii solo alcune app (es. solo shell), le altre useranno automaticamente il fallback di produzione:
- Details non in esecuzione → proxy a `https://details-yourteam.vercel.app`
- Checkout non in esecuzione → proxy a `https://checkout-yourteam.vercel.app`

**Per avviare solo shell:**
```bash
pnpm dev --filter @qia/shell
```

---

## 📝 Note Importanti

### Gateway Mode (Raccomandato)
- ✅ **Usa sempre `http://localhost:3024`** per accedere alle app
- ✅ Il routing è gestito automaticamente da Turborepo proxy
- ✅ I link sono relativi e funzionano come in produzione
- ✅ Simula perfettamente l'ambiente Vercel

### Standalone Mode
- ✅ Ogni app è isolata e testabile indipendentemente
- ✅ I link cross-app devono essere assoluti con porta
- ✅ Utile per debug di una singola app
- ⚠️ Non replica l'ambiente produzione (app separate)

### Produzione
- In **produzione**, Vercel gestisce il routing usando lo stesso `microfrontends.json`
- I link sono sempre relativi (path-only)
- Nessuna porta hardcodata

## 🔧 Configurazione Immagini

Le immagini da Supabase sono configurate in:
- `apps/shell/next.config.ts`
- `apps/details/next.config.ts`
- `apps/checkout/next.config.ts`

Se aggiungi nuovi domini, aggiorna `remotePatterns` in questi file.

