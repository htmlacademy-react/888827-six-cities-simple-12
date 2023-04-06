export enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/hotels',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export const FIRST_CITY_STEP = 'Paris';

export const URL_MARKER_DEFAULT =
  'img/pin.svg';

export const URL_MARKER_CURRENT =
  'img/pin-active.svg';

export const BACKEND_URL = 'https://12.react.pages.academy/six-cities-simple';
export const REQUEST_TIMEOUT = 5000;

export const LOCATIONS = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
export const OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];
