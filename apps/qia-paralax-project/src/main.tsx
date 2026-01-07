import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppWrapper } from './components/app-wrapper';
import './app/globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWrapper />
 
  </StrictMode>
);

