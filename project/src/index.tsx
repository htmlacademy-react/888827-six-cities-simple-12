import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { places } from './mocks/offers';
import { CITY } from './mocks/city';
import { POINTS } from './mocks/points';

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
      offers = {places}
      city={CITY}
      points={POINTS}
    />
  </React.StrictMode>,
);
