import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/_custom.scss';
import './assets/styles/index.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import ReactGA from "react-ga4";

ReactGA.initialize("G-QY8KBKH16Q");
ReactGA.send("pageview");

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
