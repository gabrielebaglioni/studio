# Environment Variables Setup

Questo documento spiega come configurare le variabili d'ambiente per l'applicazione QIA.

## File di Configurazione

- **`.env`**: File con i valori reali delle variabili d'ambiente (NON committare mai questo file)
- **`.env.example`**: Template con i placeholder (questo file PUÒ essere committato)

## Setup Iniziale

1. **Copia il file di esempio:**
   ```bash
   cp .env.example .env
   ```

2. **Compila il file `.env`** con i tuoi valori reali (vedi sezioni sotto)

3. **Verifica che `.env` sia nel `.gitignore`** (già configurato)

## Variabili d'Ambiente Richieste

### Stripe Payment Integration

**Dove ottenere le chiavi:**
- Dashboard Stripe: https://dashboard.stripe.com/apikeys
- Usa chiavi di test per sviluppo, chiavi di produzione per produzione

**Variabili:**
- `STRIPE_SECRET_KEY`: Chiave segreta Stripe (server-side only)
  - Formato: `sk_test_...` (test) o `sk_live_...` (production)
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Chiave pubblica Stripe (client-side)
  - Formato: `pk_test_...` (test) o `pk_live_...` (production)
- `STRIPE_WEBHOOK_SECRET`: Secret per verificare le firme dei webhook
  - Ottieni da: https://dashboard.stripe.com/webhooks
  - Per test locali: usa Stripe CLI
    ```bash
    stripe listen --forward-to localhost:3002/support/api/webhook/stripe
    ```

### PayPal Payment Integration

**Dove ottenere le credenziali:**
- Dashboard PayPal Developer: https://developer.paypal.com/dashboard/applications
- Usa credenziali sandbox per sviluppo, live per produzione

**Variabili:**
- `PAYPAL_CLIENT_ID`: Client ID dell'applicazione PayPal
- `PAYPAL_CLIENT_SECRET`: Client Secret dell'applicazione PayPal
- `PAYPAL_BASE_URL`: URL base dell'API PayPal (opzionale)
  - Sandbox (default): `https://api-m.sandbox.paypal.com`
  - Production: `https://api-m.paypal.com`

### Crypto Payment Integration

**Variabili:**
- `CRYPTO_WALLET_ADDRESS`: Indirizzo wallet Ethereum per ricevere pagamenti (server-side)
  - Formato: `0x...` (indirizzo Ethereum valido)
- `NEXT_PUBLIC_CRYPTO_WALLET_ADDRESS`: Stesso indirizzo ma esposto al client (safe to expose)
  - Usato per mostrare l'indirizzo nella UI

### Google Analytics (Opzionale)

**Dove ottenere l'ID:**
- Google Analytics: https://analytics.google.com/

**Variabili:**
- `NEXT_PUBLIC_GA_ID`: ID di tracking Google Analytics
  - Formato: `G-...` (GA4) o `UA-...` (Universal Analytics)

## Verifica della Configurazione

Dopo aver compilato il file `.env`, verifica che:

1. **Tutti i placeholder sono stati sostituiti** con valori reali
2. **Le chiavi Stripe sono dello stesso ambiente** (entrambe test o entrambe live)
3. **L'indirizzo crypto è valido** (formato `0x` seguito da 40 caratteri esadecimali)
4. **Il file `.env` non è tracciato da git** (verifica con `git status`)

## Sicurezza

⚠️ **IMPORTANTE:**
- **NON committare mai** il file `.env`
- **NON condividere** le chiavi segrete pubblicamente
- **Usa variabili d'ambiente** su Vercel per produzione
- **Rigenera le chiavi** se sospetti che siano state compromesse

## Setup su Vercel

Quando fai il deploy su Vercel:

1. Vai su **Project Settings** → **Environment Variables**
2. Aggiungi tutte le variabili dal file `.env`
3. Assicurati di selezionare gli ambienti corretti (Production, Preview, Development)
4. Per le variabili `NEXT_PUBLIC_*`, vengono esposte al client automaticamente

## Test Locale

Per testare i webhook Stripe in locale:

```bash
# Installa Stripe CLI
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Forward webhooks al server locale
stripe listen --forward-to localhost:3002/support/api/webhook/stripe
```

Il comando ti darà un `webhook secret` da usare in `STRIPE_WEBHOOK_SECRET` per i test locali.

