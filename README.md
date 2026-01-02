# QIA Monorepo - Microfrontends Architecture

Monorepo con architettura microfrontend per Quick Impact Agency.

## 🚀 Quick Start

### Prerequisiti
- Node.js >= 18.0.0
- pnpm >= 9.0.0 (o Corepack abilitato)

### Installazione Dipendenze
```bash
pnpm install
```

### Avvio Sviluppo Locale
```bash
pnpm dev
```

Questo comando avvia:
- **Proxy unificato** su `http://localhost:3024`
- **Shell app** (landing) su porta 3000 → `/`
- **Core app** su porta 3001 → `/core/*`

Tutte le app sono accessibili tramite `http://localhost:3024` con routing automatico.

## 📁 Struttura

```
studio/
├── apps/
│   ├── shell/          # Landing page (default app)
│   └── core/           # Core application (replaces details + checkout)
├── packages/
│   ├── types/          # Shared types (Project model)
│   ├── utils/          # Route helpers + eventBus
│   ├── ui/             # Shared UI components
│   └── config/         # Shared configs
└── docs/               # Documentation
```

## 🛠️ Scripts

- `pnpm dev` - Avvia tutte le app in modalità sviluppo (con proxy unificato su porta 3024)
- `pnpm build` - Build di tutte le app
- `pnpm lint` - Lint di tutte le app
- `pnpm typecheck` - Type checking

## 🔧 Configurazione

- **microfrontends.json**: Configurazione routing (in `apps/shell/`)
- **turbo.json**: Configurazione Turborepo
- **package.json**: Workspace root

## 📚 Documentazione

Vedi `docs/tech-research.md` per dettagli tecnici e decisioni architetturali.
