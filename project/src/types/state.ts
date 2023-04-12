import {store} from '../store/index';
import {AuthorizationStatus} from '../components/const/const';
import {Offers, OfferCity} from '../types/offer';
import {UserData} from '../types/user-data';
import {Reviews} from '../types/review';

export type OfferData = {
  offers: Offers;
  isOffersDataLoading: boolean;
  hasError: boolean;
  offer: OfferCity | null;
};

export type OfferProcess = {
  firstCity: string;
  offers: Offers;
  data: Offers;
  selectPoint: number;
  sortType: string;
};

export type ReviewProcess = {
  reviews: Reviews;
};

export type UserProcess = {
  userData: UserData | null;
  authorizationStatus: AuthorizationStatus;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
