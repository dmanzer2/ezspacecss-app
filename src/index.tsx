import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/_custom.scss';
import './assets/styles/index.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
