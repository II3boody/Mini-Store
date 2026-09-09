import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Styles/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { CartProvider } from './Context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <CartProvider>
    <App />
  </CartProvider>
);

reportWebVitals();