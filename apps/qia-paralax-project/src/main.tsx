import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppWrapper } from './components/app-wrapper';
import { Toaster } from './components/ui/toaster';
import './app/globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWrapper />
    <Toaster />
  </StrictMode>
);

