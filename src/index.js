import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.tsx';
import reportWebVitals from './reportWebVitals';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
reportWebVitals();
