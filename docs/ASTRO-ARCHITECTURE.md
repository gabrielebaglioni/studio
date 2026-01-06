# Astro Architecture - QIA Parallax Project

## Perché Astro e non Next.js?

Astro è la scelta migliore per questa applicazione per i seguenti motivi:

### 1. Islands Architecture
- **Zero JavaScript di default**: Astro renderizza HTML statico, inviando JavaScript solo dove necessario
- **React Islands**: I componenti React vengono caricati come "islands" indipendenti
- **Caricamento ottimizzato**: Ogni island si carica in modo asincrono, migliorando le prestazioni

### 2. Prestazioni per il caricamento dei frame
- **Code splitting automatico**: Astro divide automaticamente il codice in chunk ottimali
- **Lazy loading**: I componenti React si caricano solo quando necessario
- **Pre-rendering statico**: Le pagine vengono pre-renderizzate come HTML statico

### 3. Architettura MPA (Multi-Page App)
- **Nessun overhead SPA**: Non c'è bisogno di un router client-side complesso
- **Routing nativo**: Astro gestisce il routing a livello di file system
- **ViewTransitions**: Transizioni fluide tra pagine senza ricaricamento completo

## Struttura dell'App

```
apps/qia-paralax-project/
├── src/
│   ├── pages/           # Pagine Astro (routing automatico)
│   │   └── index.astro  # Home page
│   ├── layouts/         # Layout Astro
│   │   └── Layout.astro # Layout principale
│   ├── components/      # Componenti React (islands)
│   │   ├── app-wrapper.tsx    # Wrapper con provider React
│   │   ├── app-content.tsx    # Contenuto principale
│   │   └── hero-section.tsx   # Hero section (island React)
│   └── ...
```

## Come funziona

1. **Astro renderizza HTML statico**: La pagina viene pre-renderizzata come HTML puro
2. **React islands si idratano**: I componenti React con `client:load` si caricano e idratano
3. **Caricamento ottimizzato**: Ogni island si carica in modo indipendente

## Vantaggi per il caricamento dei frame

- **Chunk separati**: Canvas e sequenze sono in chunk separati, caricati solo quando necessario
- **Preload intelligente**: Possiamo pre-caricare i frame critici senza bloccare il rendering
- **Lazy loading**: I frame vengono caricati progressivamente durante lo scroll

## Deploy

Astro genera un sito statico ottimizzato in `dist/` che può essere deployato su:
- Vercel
- Netlify
- Cloudflare Pages
- Qualsiasi hosting statico

## Best Practices

1. **Usa `client:load` per componenti critici**: Carica immediatamente
2. **Usa `client:visible` per componenti non critici**: Carica quando visibili
3. **Minimizza le dipendenze React**: Solo dove serve interattività
4. **Ottimizza i chunk**: Usa manualChunks per controllare il code splitting

