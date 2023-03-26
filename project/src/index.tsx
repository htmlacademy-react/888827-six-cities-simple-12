import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { places } from './mocks/offers';
import { CITY } from './mocks/city';
import { reviews } from './mocks/reviews';

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
      places={places}
      city={CITY}
      reviews={reviews}
    />
  </React.StrictMode>,
);
