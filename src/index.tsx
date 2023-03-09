import React from 'react';
import ReactDOM from 'react-dom/client';
import APP from './App';
const amisEnv = import.meta.env.VITE_AMIS_ENV_PATH;
window.env = amisEnv;
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <APP />
);
