#!/usr/bin/env node

/**
 * Wrapper per next dev che sopprime errori WebSocket durante la chiusura
 */

let isShuttingDown = false;

// Intercetta console.error per filtrare errori WebSocket durante la chiusura
const originalConsoleError = console.error;
console.error = function(...args) {
  if (isShuttingDown) {
    const message = args.map(arg => 
      typeof arg === 'string' ? arg : JSON.stringify(arg)
    ).join(' ');
    
    // Sopprimi errori WebSocket specifici durante la chiusura
    if (
      message.includes('WebSocket protocol error') ||
      message.includes('Connection reset without closing handshake') ||
      message.includes('Error reading from client')
    ) {
      return; // Sopprimi l'errore
    }
  }
  originalConsoleError(...args);
};

// process.stderr.write verrà intercettato solo per il processo child

// I segnali verranno gestiti dopo la creazione del processo child

// Esegui il comando Next.js passato come argomenti
const { spawn } = require('child_process');

// Prendi tutti gli argomenti dopo il nome dello script
const args = process.argv.slice(2);
const command = args[0] || 'next';
const commandArgs = args.slice(1);

// Usa npx per eseguire il comando (next, ecc.)
// Usa 'pipe' invece di 'inherit' per intercettare gli output
const child = spawn('npx', [command, ...commandArgs], {
  stdio: ['inherit', 'inherit', 'pipe'],
  shell: true,
  env: process.env,
});

// Intercetta stderr del processo child per filtrare errori WebSocket
if (child.stderr) {
  child.stderr.on('data', (data) => {
    if (isShuttingDown) {
      const message = data.toString();
      if (
        message.includes('WebSocket protocol error') ||
        message.includes('Connection reset without closing handshake') ||
        message.includes('Error reading from client')
      ) {
        return; // Sopprimi l'errore
      }
    }
    // Altrimenti scrivi normalmente su stderr
    process.stderr.write(data);
  });
}

// Variabile per tracciare se abbiamo già un timeout di chiusura
let shutdownTimeout = null;

// Gestisci la chiusura graceful
const gracefulShutdown = (signal) => {
  if (isShuttingDown) return;
  isShuttingDown = true;

  if (child && !child.killed) {
    // Invia il segnale al processo child
    child.kill(signal);
    
    // Attendi che il processo child si chiuda (max 3 secondi)
    shutdownTimeout = setTimeout(() => {
      if (child && !child.killed) {
        child.kill('SIGKILL');
      }
      process.exit(0);
    }, 3000);
  } else {
    process.exit(0);
  }
};

// Passa i segnali al processo child
process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));

child.on('exit', (code) => {
  // Pulisci il timeout se esiste
  if (shutdownTimeout) {
    clearTimeout(shutdownTimeout);
    shutdownTimeout = null;
  }
  
  // Se stiamo chiudendo manualmente, esci sempre con codice 0
  // per evitare errori in Turborepo
  if (isShuttingDown) {
    process.exit(0);
  } else {
    // Altrimenti passa il codice di uscita originale
    process.exit(code || 0);
  }
});

child.on('error', (error) => {
  // Pulisci il timeout se esiste
  if (shutdownTimeout) {
    clearTimeout(shutdownTimeout);
    shutdownTimeout = null;
  }
  
  if (!isShuttingDown) {
    originalConsoleError('Errore:', error);
    process.exit(1);
  } else {
    // Durante la chiusura, ignora gli errori e esci con 0
    process.exit(0);
  }
});

