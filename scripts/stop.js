#!/usr/bin/env node

/**
 * Script per fermare tutti i processi di sviluppo (Next.js e Turborepo)
 * senza mostrare errori WebSocket
 */

const { execSync } = require('child_process');
const path = require('path');

// Ottieni il percorso del progetto
const projectRoot = path.resolve(__dirname, '..');

// Funzione per trovare i PID dei processi usando pgrep (più affidabile)
function findProcessesWithPgrep(pattern) {
  try {
    const output = execSync(`pgrep -f "${pattern}"`, {
      encoding: 'utf-8',
      stdio: 'pipe'
    });
    
    return output
      .split('\n')
      .filter(line => line.trim())
      .map(pid => parseInt(pid))
      .filter(pid => !isNaN(pid));
  } catch (error) {
    // pgrep ritorna exit code 1 se non trova processi, non è un errore
    return [];
  }
}

// Funzione alternativa usando ps (fallback se pgrep non è disponibile)
function findProcessesWithPs(pattern) {
  try {
    const output = execSync(`ps aux | grep -E "${pattern}" | grep -v grep`, {
      encoding: 'utf-8',
      stdio: 'pipe'
    });
    
    return output
      .split('\n')
      .filter(line => line.trim())
      .map(line => {
        const parts = line.trim().split(/\s+/);
        return parseInt(parts[1]);
      })
      .filter(pid => pid && !isNaN(pid));
  } catch (error) {
    return [];
  }
}

// Funzione per trovare i processi
function findProcesses(pattern) {
  // Prova prima con pgrep (più affidabile)
  let pids = findProcessesWithPgrep(pattern);
  
  // Se non trova nulla, prova con ps
  if (pids.length === 0) {
    pids = findProcessesWithPs(pattern);
  }
  
  return pids;
}

// Funzione per terminare un processo gracefulmente
function killProcess(pid, signal = 'SIGTERM') {
  try {
    process.kill(pid, signal);
    return true;
  } catch (error) {
    // Il processo potrebbe essere già terminato
    return false;
  }
}

// Funzione per verificare se un processo esiste ancora
function isProcessAlive(pid) {
  try {
    process.kill(pid, 0); // Invia segnale 0 per verificare esistenza
    return true;
  } catch {
    return false;
  }
}

console.log('🛑 Fermando tutti i processi di sviluppo...\n');

// Trova tutti i processi rilevanti
// Cerca processi che contengono il percorso del progetto o pattern specifici
const patterns = [
  'next dev',
  'turbo dev',
  'next-dev-wrapper',
  `--port 3000`,
  `--port 3002`,
  `--port 3024`
];

// Combina tutti i PID unici
const allPids = new Set();
patterns.forEach(pattern => {
  const pids = findProcesses(pattern);
  pids.forEach(pid => allPids.add(pid));
});

// Filtra i PID che non sono il processo corrente
const currentPid = process.pid;
const pidsToKill = Array.from(allPids).filter(pid => pid !== currentPid);

if (pidsToKill.length === 0) {
  console.log('✅ Nessun processo di sviluppo trovato.\n');
  process.exit(0);
}

console.log(`Trovati ${pidsToKill.length} processo/i da terminare:\n`);

// Termina tutti i processi con SIGTERM (graceful)
pidsToKill.forEach(pid => {
  console.log(`  Terminando PID ${pid}...`);
  killProcess(pid, 'SIGTERM');
});

// Attendi un momento per permettere la chiusura graceful
setTimeout(() => {
  // Controlla se ci sono ancora processi attivi
  const remaining = pidsToKill.filter(pid => isProcessAlive(pid));

  if (remaining.length > 0) {
    console.log(`\n⚠️  ${remaining.length} processo/i ancora attivo/i, forzando chiusura...\n`);
    remaining.forEach(pid => {
      console.log(`  Forzando chiusura PID ${pid}...`);
      killProcess(pid, 'SIGKILL');
    });
    
    // Attendi un altro momento per SIGKILL
    setTimeout(() => {
      console.log('\n✅ Tutti i processi sono stati terminati.\n');
      process.exit(0);
    }, 500);
  } else {
    console.log('\n✅ Tutti i processi sono stati terminati.\n');
    process.exit(0);
  }
}, 2000);

