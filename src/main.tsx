import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import App from './App.tsx';  // Make sure you're importing App.tsx if you're using TypeScript
import './index.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>  {/* Wrap App in BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);