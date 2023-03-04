import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  PlaceSelection: 320,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      placeSelection = {Setting.PlaceSelection}
    />
  </React.StrictMode>,
);
