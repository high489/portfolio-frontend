import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'app';
import 'app/providers/translations/i18n';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals();