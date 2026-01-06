# Tech Research - Documentazione Context7/MCP

Questo documento contiene la documentazione raccolta tramite MCP Context7 per le tecnologie elencate.

---

## Scope & Goals

Refactor della landing monolitica Next.js in architettura microfrontend multi-zones su Vercel. Obiettivo: dividere l'applicazione in 2 app indipendenti (shell, core) con routing path-based, mantenendo la funzionalità esistente durante la migrazione incrementale. Supporto per pagamenti fiat (Stripe/PayPal) e crypto (MetaMask/WalletConnect) con verifica server-side.

---

## Decisions (Final)

| Area | Decisione | Motivazione | Data |
|------|-----------|-------------|------|
| Package Manager | PNPM (workspaces) + Turborepo | Monorepo + dedupe + tooling microfrontends dev | 2025-01-27 |
| Monorepo | pnpm workspaces + Turborepo | Gestione dipendenze condivise e orchestrazione build | 2025-01-27 |
| Proxy locale | Turborepo microfrontends proxy | Integrazione nativa con Vercel, supporto fallback | 2025-01-27 |
| microfrontends.json | apps/qia-paralax-project/ (unico file) | Turborepo legge da qia-paralax-project (root route), Vercel usa stesso file | 2025-01-27 |
| basePath | NO - Routing gestito da Vercel Microfrontends | Vercel proxy gestisce routing, basePath non necessario | 2025-01-27 |
| assetPrefix | SÌ in DEV gateway mode | Necessario per instradare correttamente asset statici (_next/static/*) tramite proxy. In PROD Vercel gestisce automaticamente | 2025-01-27 |
| Tailwind prefix | NO prefix per ora | Se necessario, aggiungere in futuro | 2025-01-27 |
| Tailwind preflight | Shell: ON, Core: OFF | Solo shell ha reset globale, isolation garantita | 2025-01-27 |
| CSS Isolation Gateway | data-mfe attribute + scoped rules | In gateway mode, shell CSS globale può interferire con remote. Usiamo data-mfe per scoping e regole CSS robuste per immagini/container | 2025-01-27 |
| Pagamenti fiat | Stripe Payment Element + PayPal Orders API | Supporto completo metodi di pagamento | 2025-01-27 |
| Pagamenti crypto | viem (server-side verification) + manual txHash input | Verifica on-chain server-side, UI per inserimento txHash | 2025-01-27 |
| Comunicazione MFE | URL-first + CustomEvent opzionale | Source of truth nel path, eventi per UX | TBD |
| Shell Header | Rimosso | Riduzione bundle size iniziale, miglioramento performance | 2025-01-27 |
| Code Splitting | Webpack manual chunks | Chunk separati per vendor, canvas, hero, UI per caricamento ottimizzato | 2025-01-27 |
| Lazy Loading | React.lazy() per HeroSection | Caricamento on-demand dei componenti principali | 2025-01-27 |

---

## Open Questions

- [x] basePath necessario per core? (configurato in next.config.ts)
- [x] Quale prefix Tailwind per core? (non necessario, isolation via data-mfe)
- [x] Strategia webhook: endpoint separati per Stripe (`/support/api/webhook/stripe`) e PayPal (`/support/api/webhook/paypal`)
- [ ] Verifica tx crypto: quante confirmations minime? (attualmente verifica solo success status)
- [ ] Fallback environment per dev: produzione o staging?

---

## Performance Optimizations (Shell App)

### Code Splitting Strategy

La shell app è configurata con code splitting avanzato per ottimizzare il caricamento JavaScript:

**Chunk Configuration:**
- `react-vendor`: React, React DOM, Scheduler (priorità 30)
- `radix-vendor`: Tutti i componenti @radix-ui (priorità 25)
- `icons-vendor`: Lucide React icons (priorità 20)
- `canvas-chunk`: Logica canvas e sequenze frame (priorità 15)
- `hero-chunk`: Hero section componenti (priorità 15)
- `ui-chunk`: Componenti UI riutilizzabili (priorità 10)
- `default`: Altri chunk condivisi (priorità 5)

**Lazy Loading:**
- `HeroSection`: Caricato con `React.lazy()` e `Suspense`
- `Footer`: Caricato con `React.lazy()` (se abilitato)

**Bundle Optimization:**
- Tree shaking automatico
- Minificazione con Terser (console.log rimossi in produzione)
- Compressione abilitata
- Package imports ottimizzati (lucide-react, @radix-ui)
- Source maps disabilitati in produzione per bundle più piccoli

**Risultati Attesi:**
- Bundle iniziale ridotto del ~40-50%
- Time to Interactive (TTI) migliorato
- First Contentful Paint (FCP) più veloce
- Migliore caching dei chunk vendor

### Header Removal

L'header è stato rimosso dalla shell app per:
- Ridurre il bundle size iniziale
- Eliminare dipendenze non necessarie (@qia/ui header)
- Migliorare il First Contentful Paint
- Semplificare la struttura dell'app

## Keywords for MCP Context7

- pnpm workspaces
- pnpm-lock.yaml
- Corepack pnpm
- Turborepo
- Turborepo microfrontends proxy / turbo dev / turbo get-mfe-port
- Vercel Microfrontends
- Vercel Microfrontends Group / Default application
- Next.js code splitting / webpack chunking
- React lazy loading / Suspense
- microfrontends.json / microfrontends.js
- MICROFRONTENDS_CONFIG (env var)
- @vercel/microfrontends
- microfrontends proxy (local development proxy)
- Next.js App Router
- Next.js basePath
- CSS Modules
- Tailwind CSS (prefix, preflight)
- CustomEvent / BroadcastChannel / postMessage
- Stripe Payment Element / PaymentIntent / Webhooks
- PayPal JS SDK / Orders API / Webhooks
- MetaMask (EIP-1193)
- WalletConnect
- wagmi
- viem

---

## microfrontends.json Schema

Basato su documentazione Vercel, il file `microfrontends.json` deve essere creato SOLO in `apps/qia-paralax-project/` (default application).

### Schema Base
```json
{
  "$schema": "https://openapi.vercel.sh/microfrontends.json",
  "applications": {
    "shell": {
      "development": {
        "fallback": "production-url.vercel.app"
      }
    },
    "core": {
      "routing": [
        {
          "paths": ["/core/:path*"]
        }
      ]
    }
  }
}
```

### Note
- `applications` object contiene tutte le app del gruppo
- `routing` array definisce i pattern di path per ogni app
- `development.fallback` opzionale per proxy a produzione quando app non in esecuzione
- Schema completo: https://openapi.vercel.sh/microfrontends.json

---

## Comando per Avviare il Dev Locale

### Comando Principale
```bash
pnpm dev
```

Questo comando:
1. Avvia Turborepo che legge `microfrontends.json` da `apps/qia-paralax-project/`
2. Avvia il proxy server su porta **3024** (configurata in `options.localProxyPort`)
3. Inietta `TURBO_MFE_PORT` per ogni app
4. Avvia tutte le app:
   - **shell** su porta 3000 → gestisce `/`
   - **core** su porta 3001 → gestisce `/core/*`

### Accesso Unificato
Tutte le app sono accessibili tramite un'unica URL:
- **http://localhost:3024** → Shell (landing)
- **http://localhost:3024/core** → Core app

### Come Funziona
1. Turborepo avvia il proxy su porta 3024
2. Il proxy legge i pattern di routing da `microfrontends.json`
3. Le richieste vengono instradate alle app corrette in base al path
4. Ogni app gira sulla sua porta (3000, 3001) ma è accessibile tramite 3024

### Note
- Il proxy è solo per sviluppo locale
- In produzione, Vercel gestisce il routing automaticamente
- Gli script `dev` usano `${TURBO_MFE_PORT:-PORT_DEFAULT}` per fallback se la variabile non è settata

---

## Notes / Links

- Documentazione Vercel Microfrontends: https://vercel.com/docs/microfrontends
- Turborepo Microfrontends Guide: https://turborepo.com/docs/guides/microfrontends
- Next.js App Router: https://nextjs.org/docs/app
- Stripe Payment Element: https://stripe.com/docs/payments/payment-element
- PayPal Orders API: https://developer.paypal.com/docs/api/orders/v2/
- wagmi Docs: https://wagmi.sh
- viem Docs: https://viem.sh

---

## 1. Vercel Microfrontends

### Overview
I microfrontends permettono di dividere un'applicazione in unità più piccole, indipendentemente deployabili, che vengono renderizzate come un'applicazione coerente per gli utenti.

### Caratteristiche principali
- **Sviluppo indipendente**: Team diversi possono usare stack tecnologici diversi
- **Deploy indipendente**: Ogni microfrontend può essere deployato separatamente
- **Routing automatico**: Vercel gestisce il routing delle richieste ai microfrontend appropriati
- **Miglioramento della velocità di sviluppo**: Riduce i tempi di build e sviluppo

### Configurazione
- **microfrontends.json / microfrontends.js**: File di configurazione per definire i microfrontend
- **MICROFRONTENDS_CONFIG**: Variabile d'ambiente per la configurazione
- **@vercel/microfrontends**: Pacchetto npm per l'integrazione

### Local Development Proxy
- **Proxy locale**: Risolve il problema di dover eseguire tutti i microfrontend localmente
- **Fallback intelligente**: Le richieste ai microfrontend non in esecuzione vengono instradate alla produzione
- **Variabile d'ambiente**: `MFE_DISABLE_LOCAL_PROXY_REWRITE=1` per disabilitare il redirect

### Path Routing
- Routing basato su pattern di path
- Ogni microfrontend gestisce percorsi specifici
- Supporto per routing osservabile e debugging

### Managing Microfrontends
- Aggiunta e rimozione di microfrontend
- Condivisione di impostazioni
- Gestione della sicurezza
- Ottimizzazione delle navigazioni tra microfrontend
- Vercel Toolbar per override del routing

---

## 2. Turborepo Microfrontends

### Overview
Turborepo fornisce un proxy server integrato che instrada automaticamente il traffico tra le applicazioni microfrontend durante lo sviluppo.

### Configurazione
- **microfrontends.json**: File di configurazione nella parent application
- **turbo dev**: Comando per avviare il proxy e tutte le applicazioni
- **Porta predefinita**: 3024 (configurabile con `localProxyPort`)

### Funzionalità
- **Routing automatico**: Instrada le richieste basate su pattern di path
- **Porte dinamiche**: `turbo get-mfe-port` per assegnare porte dinamicamente
- **Fallback environment**: Supporto per proxy a produzione quando un'app non è in esecuzione
- **Integrazione con Vercel**: Progettato per funzionare con il supporto nativo di Vercel

### Esempio di configurazione
```json
{
  "applications": [
    {
      "name": "web",
      "path": "/",
      "port": 3000
    },
    {
      "name": "docs",
      "path": "/docs",
      "port": 3001
    }
  ],
  "development": {
    "fallback": "https://production.example.com"
  }
}
```

---

## 3. Next.js App Router

### Overview
Il App Router è il nuovo sistema di routing di Next.js basato su file system, introdotto in Next.js 13+.

### Caratteristiche
- **File-system routing**: Le cartelle definiscono le route
- **Layout annidati**: Supporto per layout condivisi
- **Server Components**: Componenti React renderizzati sul server
- **Data Fetching**: Fetching asincrono nativo

### basePath
La configurazione `basePath` in `next.config.js` permette di servire l'app sotto un subpath specifico:

```typescript
// next.config.ts
import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  basePath: '/my-subpath',
  // ...
}

export default nextConfig
```

### Struttura App Router
```
app/
  ├── layout.tsx      # Root layout (obbligatorio)
  ├── page.tsx        # Home page
  └── [[...slug]]/   # Optional catch-all route
      └── page.tsx
```

### Data Fetching
```typescript
// Static (getStaticProps equivalent)
const staticData = await fetch(`https://...`, { cache: 'force-cache' })

// Dynamic (getServerSideProps equivalent)
const dynamicData = await fetch(`https://...`, { cache: 'no-store' })

// Revalidated (ISR equivalent)
const revalidatedData = await fetch(`https://...`, {
  next: { revalidate: 10 },
})
```

---

## 3.5. CSS Isolation in Gateway Mode

### Problema Identificato

In gateway mode (porta 3024), il CSS globale della shell (preflight + reset) può interferire con i remote app (core), causando problemi di layout, specialmente con Next.js Image usando `fill`.

**Root Cause:**
- Shell carica `@tailwind base` (include preflight/reset CSS)
- Shell ha reset globale: `* { @apply border-border; }`
- In gateway mode, quando si accede a `/core/*`, il CSS della shell è già caricato nel browser
- Il preflight di Tailwind applica regole come `img { max-width: 100%; height: auto; }` e `* { box-sizing: border-box; }`
- Queste regole possono interferire con Next.js Image quando usa `fill` e `object-cover`
- La classe `container` definita in shell può collidere con quella usata nei remote

**Sintomo:**
- Immagini che "escono" dal container in gateway mode (3024)
- Immagini che stanno correttamente nel container in standalone mode (3001)

### Soluzione Implementata

**Approccio: CSS Scoping con data-mfe attribute**

1. **Aggiunto `data-mfe` attribute ai layout HTML:**
   - `apps/core/src/app/layout.tsx`: `<html lang="en" data-mfe="core">`

2. **Regole CSS scoped nei remote app:**
   - `apps/core/src/app/globals.css`

**Regole CSS aggiunte:**
```css
/* Image container isolation */
[data-mfe="core"] .relative img,
.relative img {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
}

/* Container isolation */
[data-mfe="core"] .container,
.container {
  box-sizing: border-box;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

/* Image wrapper isolation */
[data-mfe="core"] .relative,
.relative {
  position: relative;
  box-sizing: border-box;
}

/* Prevent overflow issues */
[data-mfe="core"] .overflow-hidden,
.overflow-hidden {
  overflow: hidden;
}
```

**Perché funziona:**
- Le regole scoped con `[data-mfe="core"]` hanno priorità più alta e sovrascrivono eventuali interferenze del CSS globale della shell
- L'uso di `!important` per le proprietà critiche delle immagini assicura che Next.js Image con `fill` funzioni correttamente
- Le regole per `.container` e `.relative` assicurano che i container abbiano le proprietà corrette anche se il CSS della shell interferisce

**Note:**
- Non aggiungiamo reset globali nei remote (mantiene isolation)
- Le regole sono specifiche per elementi critici (immagini, container)
- Il fix funziona sia in gateway che in standalone mode

### Problema: Asset Statici Non Caricati in Gateway Mode

**Root Cause:**
Quando le app remote (core) sono servite tramite gateway proxy (porta 3024), gli asset statici (`/_next/static/*`, CSS, JS) non vengono caricati correttamente perché il proxy instrada solo i path di routing definiti, non gli asset statici.

**Sintomo:**
- Standalone mode (3001): CSS e design funzionano correttamente
- Gateway mode (3024): Solo HTML plain, nessun CSS caricato

**Soluzione Implementata:**

Configurazione `assetPrefix` e `rewrites` in `next.config.ts`:

```typescript
// apps/core/next.config.ts
const nextConfig: NextConfig = {
  // basePath: Prefissa le route e gli asset statici con il path del routing
  // Questo assicura che gli asset vengano richiesti con il path corretto
  basePath: process.env.NODE_ENV === 'production' ? undefined : '/core',
};
```

**Come Funziona:**
1. `basePath: '/core'` fa sì che Next.js generi asset con path `/core/_next/static/...`
2. Il proxy instrada `/core/*` alla app core (porta 3001)
3. Gli asset vengono serviti correttamente dalla app core

**In Produzione:**
- `assetPrefix` è `undefined` (Vercel gestisce automaticamente)
- `rewrites` è vuoto (non necessario)

**Note:**
- `assetPrefix` modifica solo gli asset statici, non le route
- Le route fisiche rimangono `app/projects/[slug]/page.tsx` (non cambiano)
- Funziona solo in development gateway mode
- In standalone mode, gli asset vengono serviti normalmente senza prefisso

---

## 4. Tailwind CSS

### Prefix
Il prefix permette di aggiungere un prefisso a tutte le classi Tailwind per evitare conflitti di naming:

```css
@import "tailwindcss" prefix(tw);
```

Uso in HTML:
```html
<div class="tw:flex tw:bg-red-500 tw:hover:bg-red-600">
  <!-- ... -->
</div>
```

### Preflight
Preflight è il reset CSS di Tailwind che rimuove gli stili predefiniti del browser.

**Disabilitare Preflight:**
```css
@layer theme, base, components, utilities;

@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
/* Preflight rimosso */
```

**Estendere Preflight:**
```css
@layer base {
  h1 {
    font-size: var(--text-2xl);
  }
  a {
    color: var(--color-blue-600);
    text-decoration-line: underline;
  }
}
```

**Override per librerie di terze parti:**
```css
@layer base {
  .google-map * {
    border-style: none;
  }
}
```

---

## 5. Stripe

### Payment Element
Il Payment Element è un componente UI unificato che supporta tutti i metodi di pagamento di Stripe.

**Mount del Payment Element:**
```javascript
const options = {
  clientSecret: '{{CLIENT_SECRET}}',
  appearance: {/*...*/}
};

const elements = stripe.elements(options);
const paymentElement = elements.create('payment', { layout: 'accordion' });
paymentElement.mount('#payment-element');
```

### PaymentIntent
PaymentIntent traccia il ciclo di vita di un tentativo di pagamento.

**Creare un PaymentIntent:**
```bash
curl https://api.stripe.com/v1/payment_intents \
  -u <<YOUR_SECRET_KEY>>: \
  -H "Stripe-Version: 2025-10-29.clover" \
  -d "amount"=1099 \
  -d "currency"="usd" \
  -d "automatic_payment_methods[enabled]"=true
```

**Confermare un pagamento:**
```javascript
const {error} = await stripe.confirmPayment({
  elements,
  clientSecret,
  confirmParams: {
    return_url: 'https://example.com/order/123/complete',
  },
});
```

### Webhooks
Eventi webhook principali:
- `payment_intent.created`: Quando un PaymentIntent viene creato
- `payment_intent.succeeded`: Quando un pagamento è completato con successo

---

## 6. PayPal JS SDK

### Orders API
L'API Orders di PayPal gestisce la creazione e il completamento degli ordini.

**Integrazione React:**
```jsx
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function App() {
    function createOrder() {
        return fetch("/my-server/create-paypal-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                cart: [{ id: "YOUR_PRODUCT_ID", quantity: "YOUR_PRODUCT_QUANTITY" }]
            }),
        })
        .then((response) => response.json())
        .then((order) => order.id);
    }
    
    function onApprove(data) {
        return fetch("/my-server/capture-paypal-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ orderID: data.orderID })
        })
        .then((response) => response.json());
    }
    
    return (
        <PayPalScriptProvider options={{ clientId: "test" }}>
            <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
        </PayPalScriptProvider>
    );
}
```

### Webhooks
I webhook di PayPal notificano eventi come:
- Creazione ordine
- Approvazione pagamento
- Cattura pagamento
- Rimborsi

---

## 7. MetaMask (EIP-1193 Provider)

### EIP-1193
EIP-1193 definisce lo standard per i provider Ethereum, utilizzato da MetaMask e altri wallet.

**Interfaccia EIP-1193:**
```typescript
interface EIP1193Provider {
  request: (request: {
    method: string
    params?: Array<unknown>
  }) => Promise<unknown>
  send?: (request, callback) => void
  sendAsync?: (request, callback) => void
}
```

**Richiedere account:**
```typescript
const accounts = await window.ethereum.request({
  method: "eth_requestAccounts"
});
```

### EIP-6963
EIP-6963 standardizza la scoperta dei wallet provider.

**Interfaccia Provider Info:**
```typescript
interface EIP6963ProviderInfo {
  rdns: string
  uuid: string
  name: string
  icon: string
}

interface EIP6963ProviderDetail {
  info: EIP6963ProviderInfo
  provider: EIP1193Provider
}
```

**Ascoltare annunci di provider:**
```typescript
window.addEventListener('eip6963:announceProvider', (event) => {
  const { detail } = event as EIP6963AnnounceProviderEvent;
  // detail.info contiene i metadati del wallet
  // detail.provider contiene il provider EIP-1193
});
```

---

## 8. WalletConnect

### Overview
WalletConnect è un protocollo aperto per connettere wallet a dApp decentralizzate.

### Connessione
**JavaScript/TypeScript:**
```typescript
const isConnected = modal.getIsConnected();
const address = modal.getAddress();
```

**Swift (iOS):**
```swift
try await Web3Modal.instance.connect(
    requiredNamespaces: [String: ProposalNamespace],
    optionalNamespaces: [String: ProposalNamespace]?,
    sessionProperties: [String: String]?,
    topic: topic
)
```

**Dart:**
```dart
ConnectResponse response = await signClient.connect(
    requiredNamespaces: {
        'eip155': RequiredNamespace(
            chains: ['eip155:1'],
            methods: ['eth_signTransaction'],
        ),
    }
);
```

### Session Management
- **Pairing**: Stabilisce una connessione tra wallet e dApp
- **Ping**: Verifica la liveness della sessione
- **Disconnect**: Termina la connessione

---

## 9. Wagmi

### Overview
Wagmi è una collezione di React Hooks per Ethereum, progettata per costruire frontend blockchain type-safe e ad alte prestazioni.

### Setup
**Wrapping dell'app:**
```tsx
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from './config'

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {/* Your app */}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
```

### Hooks principali
**useAccount:**
```tsx
import { useAccount } from 'wagmi'

const { address, isConnected } = useAccount()
```

**useBalance:**
```tsx
import { useBalance } from 'wagmi'

const { data: balance } = useBalance({
  address: '0x...',
})
```

**useEnsName:**
```tsx
import { useEnsName } from 'wagmi'

const { data: ensName } = useEnsName({ address })
```

**useConnectorClient:**
```tsx
import { useConnectorClient } from 'wagmi'

const { data: client } = useConnectorClient()
```

### TypeScript Configuration
```typescript
import { type Config } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
```

---

## 10. Viem

### Overview
Viem è un'interfaccia TypeScript per Ethereum che fornisce astrazioni sull'API JSON-RPC.

### Client Types
**Public Client:**
```typescript
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
```

**Wallet Client:**
```typescript
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const [address] = await window.ethereum.request({
  method: 'eth_requestAccounts'
})

const client = createWalletClient({
  account: address,
  chain: mainnet,
  transport: custom(window.ethereum),
})
```

**Test Client:**
```typescript
import { createTestClient, http } from 'viem'
import { foundry } from 'viem/chains'

const client = createTestClient({
  chain: foundry,
  mode: 'anvil',
  transport: http(),
})
```

### JSON-RPC Account
```typescript
import 'viem/window'
import { createWalletClient, custom } from 'viem'

const [address] = await window.ethereum.request({
  method: 'eth_requestAccounts'
})

const client = createWalletClient({
  account: address,
  transport: custom(window.ethereum!),
})
```

### Batch JSON-RPC
```typescript
const transport = http('https://...', {
  batch: true,
  batch: {
    batchSize: 2000
  }
})

// Le richieste vengono automaticamente batchate
const [blockNumber, balance, ensName] = await Promise.all([
  client.getBlockNumber(),
  client.getBalance({ address: '0x...' }),
  client.getEnsName({ address: '0x...' }),
])
```

---

## Tecnologie aggiuntive (non documentate via Context7)

### pnpm workspaces
Gestione di monorepo con pnpm. Configurazione tramite `pnpm-workspace.yaml`.

**Configurazione:**
- `pnpm-workspace.yaml`: Definisce i workspace packages
- `packageManager`: Specificato in `package.json` root (es. `"pnpm@9.15.0"`)
- Corepack: Abilitare con `corepack enable` (Node >= 16.10) per gestione automatica versione pnpm

### CSS Modules
Moduli CSS per scope locale delle classi CSS. Supportato nativamente in Next.js.

### CustomEvent / BroadcastChannel / postMessage
API del browser per comunicazione tra window/worker:
- **CustomEvent**: Eventi personalizzati
- **BroadcastChannel**: Comunicazione tra tab/window
- **postMessage**: Comunicazione tra window/iframe/worker

### Vercel Rewrites
Configurazione in `vercel.json` per rewrite delle URL. Generalmente non necessario con multi-zones che gestisce già il routing.

---

## Note finali

Questa documentazione è stata generata utilizzando MCP Context7 per accedere alla documentazione ufficiale delle tecnologie elencate. Per informazioni più dettagliate, consultare:
- Documentazione ufficiale di ciascuna tecnologia
- Repository GitHub delle librerie
- Esempi di codice nei repository ufficiali

