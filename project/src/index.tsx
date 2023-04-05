import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {ToastContainer} from 'react-toastify';
import {reviews} from './mocks/reviews';
import {store} from './store';
import {Provider} from 'react-redux';
import {fetchOfferAction, checkAuthAction} from './store/api-actions';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchOfferAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App
        //передачу можно будет удалить
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
);
