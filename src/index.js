import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
// import './index.css';

const container = document.getElementById('root');
createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
