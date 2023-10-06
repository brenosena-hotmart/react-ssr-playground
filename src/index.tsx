import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.querySelector<HTMLElement>('#root');

if (rootElement) {
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
