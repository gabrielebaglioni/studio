import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Showcase from './components/Showcase.jsx';
import './styles/global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Showcase />
  </StrictMode>
);

