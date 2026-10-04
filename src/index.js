import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Styles/main.css';
import './Styles/dark-mode.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { CartProvider } from './Context/CartContext';
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './Context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider>
    <CartProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </CartProvider>
  </ThemeProvider>
);

reportWebVitals();