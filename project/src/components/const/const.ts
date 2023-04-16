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

export enum NameSpace {
  Data = 'DATA',
  Offer = 'OFFER',
  User = 'USER',
  Review = 'REVIEW'
}

export const FIRST_CITY_STEP = 'Paris';

export const MAX_COUNT_REVIEWS = 10;

export const MIN_TEXT_COMMENT = 50;
export const MAX_TEXT_COMMENT = 300;

export const URL_MARKER_DEFAULT =
  'img/pin.svg';

export const URL_MARKER_CURRENT =
  'img/pin-active.svg';

export const BACKEND_URL = 'https://112.react.pages.academy/six-cities-simple';
export const REQUEST_TIMEOUT = 5000;

export const LOCATIONS = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
export const OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];
export const RATINGS = ['perfect', 'good', 'not bad', 'badly', 'terribly'];
