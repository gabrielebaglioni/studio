# Architecture Baseline - Pre-Migration

Documento creato durante STEP 1 per tracciare lo stato attuale della repo prima del refactor.

## Entry Points

- **Main App**: `src/app/page.tsx` - Landing page con HeroSection
- **Layout**: `src/app/layout.tsx` - Root layout
- **Global CSS**: `src/app/globals.css` - Tailwind + CSS variables

## Routing

- **Current**: Single-page application (SPA-like)
- **Router**: Next.js App Router (src/app/)
- **Routes attuali**: Solo `/` (home)
- **Routes target**: 
  - Shell: `/`
  - Core: `/core`, `/core/:slug`

## CSS Pipeline

- **Framework**: Tailwind CSS v3.4.17
- **Config**: `tailwind.config.ts`
- **Global Styles**: `src/app/globals.css`
  - CSS variables per brand colors
  - Preflight attivo (default Tailwind)
  - Custom base layer con ottimizzazioni parallax
- **No prefix**: Attualmente nessun prefix Tailwind
- **No CSS Modules**: Non utilizzati

## Data Model Projects

### Source of Truth
- **File**: `src/lib/data.ts`
- **Array**: `programs: Program[]` (3 elementi)
- **Type**: `Program` con:
  - `name`: "CLIMATE" | "FOOD" | "SOCIAL"
  - `subtitle`: string
  - `description`: string
  - `ctas`: { primary, secondary }
  - `sequence`: config per animazioni canvas

### Progetti Identificati
1. **CLIMATE** (slug: "climate")
   - Subtitle: "CHANGE MITIGATION"
   - Sequence: 80 frames
   
2. **FOOD** (slug: "food")
   - Subtitle: "SECURITY"
   - Sequence: 120 frames
   
3. **SOCIAL** (slug: "social")
   - Subtitle: "IMBALANCE"
   - Sequence: 112 frames

### State Management
- **Context**: `src/contexts/hero-context.tsx`
  - `activeHero`: 'CLIMATE' | 'FOOD' | 'SOCIAL'
  - `setActiveHero`: function
- **Component**: `HeroSection` usa context per stato attivo
- **Switching**: Gestito via `useProgramSwitch` hook

## Componenti Chiave

### HeroSection
- **File**: `src/components/hero-section.tsx`
- **Features**:
  - 3 parallax differenti (config in `hero.constants.ts`)
  - Switcher progetti (tabs/frecce)
  - Canvas rendering per animazioni
  - Bottoni CTA (attualmente senza href)
- **Dependencies**:
  - `useHeroBoot` - preload sequenze
  - `useScrollSequence` - gestione scroll
  - `useCanvasRenderer` - rendering canvas
  - `useProgramSwitch` - switching progetti

### Header
- **File**: `src/components/header.tsx`
- **Status**: Trasparente con logo overlay

### Bottoni CTA
- **Current**: Solo `onClick` con tracking analytics
- **Target**: Aggiungere href dinamici:
  - "Dettagli progetto" → `/core/:slug`
  - "Supporta / Dona" → `/core/:slug`

## TypeScript Configuration

- **Config**: `tsconfig.json`
- **Paths**: `@/*` → `./src/*`
- **Target**: ES2017
- **Module**: esnext
- **JSX**: preserve

## Build Configuration

- **Package Manager**: pnpm (workspaces) - lockfile: `pnpm-lock.yaml`
- **Next.js**: v15.5.9
- **React**: v19.2.1
- **Dev Port**: 9002 (configurato in package.json)
- **Build Command**: `NODE_ENV=production next build`

## Risks Identificati

1. **CSS Isolation**: 
   - Global CSS in shell deve essere isolato
   - Core non deve ereditare reset
   - Soluzione: Preflight OFF + data-mfe attribute per isolation

2. **State Communication**:
   - Attualmente state in context React
   - Migrazione a URL-first (slug nel path)
   - Eventi opzionali per UX enhancement

3. **Asset Paths**:
   - Immagini in `/public/`
   - Sequence frames da Supabase (URL esterni)
   - Verificare funzionamento con basePath se applicato

4. **Import Aliases**:
   - `@/*` alias attualmente punta a `./src/*`
   - Dopo move a `apps/qia-paralax-project/` potrebbe rompersi
   - Fix: aggiornare tsconfig dopo move

5. **Dependencies**:
   - Alcune dipendenze potrebbero essere condivise
   - Valutare estrazione in `packages/*`

## Next Steps

1. Verificare funzionamento attuale: `pnpm dev`
2. Procedere con STEP 2: Bootstrap Monorepo
3. Spostare tutto in `apps/qia-paralax-project/`
4. Fix import/alias dopo move

