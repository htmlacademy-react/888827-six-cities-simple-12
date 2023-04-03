import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { reviews } from './mocks/reviews';
import { store } from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
      //передачу можно будет удалить
        //placeSelection = {Setting.PlaceSelection}
        //places={places}
        //city={CITY}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
);
