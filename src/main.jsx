import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <SpeedInsights />
    <App />
    <Analytics />
  </React.StrictMode>
);

// Production HTML is pre-rendered at build time (scripts/prerender.js), so hydrate it.
if (container.firstElementChild) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
