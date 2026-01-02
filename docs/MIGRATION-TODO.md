# Migration TODO - Microfrontends Refactor

## Status Overview

- [x] STEP 0: Aggiornato tech-research.md con sezioni richieste
- [ ] STEP 1: Baseline Audit
- [ ] STEP 2: Bootstrap Monorepo
- [ ] STEP 3: Standard Config Shared
- [ ] STEP 4: Estrai Project Model e Route Helpers
- [x] STEP 5: Crea Core App (sostituisce Details + Checkout)
- [ ] STEP 7: Crea microfrontends.json in Shell
- [ ] STEP 8: Dev Proxy Unificato
- [ ] STEP 9: Blocca CSS Isolation
- [ ] STEP 10: Stato & Comunicazione
- [x] STEP 11: Design System Shared - packages/ui creato
- [ ] STEP 12: Pagamenti Fiat
- [ ] STEP 13: Pagamenti Crypto
- [ ] STEP 14: Deploy Vercel + Microfrontends Group

---

## STEP 1 — BASELINE AUDIT

### Azioni completate
- [x] Identificato Next.js App Router (src/app/)
- [x] Identificato Tailwind CSS con variabili globali
- [x] Identificati 3 progetti: CLIMATE, FOOD, SOCIAL
- [x] Identificato hero context per stato progetto attivo
- [x] Identificati bottoni CTA senza href (solo onClick)

### File da creare
- [ ] docs/ARCHITECTURE-BASELINE.md

### Verifica
- [x] Eseguire `pnpm dev` e confermare funzionamento landing (avviato su porta 9002)

---

## STEP 2 — BOOTSTRAP MONOREPO

### Azioni
- [x] Creare struttura apps/, packages/, docs/
- [x] Spostare tutto in apps/shell/
- [x] Creare root config files

### File da creare/modificare
- [x] root/pnpm-workspace.yaml
- [x] root/turbo.json
- [x] root/package.json
- [x] root/tsconfig.base.json
- [x] apps/shell/package.json (update)
- [x] apps/shell/tsconfig.json (estende base)

### Verifica
- [ ] `pnpm install` (da eseguire manualmente - pnpm non disponibile in sandbox)
- [ ] `pnpm --filter shell dev` funziona
- [ ] `pnpm --filter shell build` passa

### Note
- Struttura monorepo creata
- File spostati in apps/shell/
- Config root pronti
- Installazione dipendenze da eseguire manualmente

---

## Note e Problemi Incontrati

_Questo spazio verrà aggiornato durante la migrazione con problemi e soluzioni._

