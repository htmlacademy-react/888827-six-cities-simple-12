import {store} from '../store/index';
import {AuthorizationStatus} from '../components/const/const';
import {Offers, OfferCity} from '../types/offer';
import {UserData} from '../types/user-data';
import {Reviews} from '../types/review';

export type OfferData = {
  offers: Offers;
  offer: OfferCity | null;
  nearOffers: Offers;
  data: Offers;
  selectPoint: number;
  sortType: string;
  isOffersDataLoading: boolean;
  isNearOfferLoading: boolean;
  hasError: boolean;
};

export type OfferProcess = {
  firstCity: string;
};

export type ReviewProcess = {
  reviews: Reviews;
  hasError: boolean;
  isReviewLoading: boolean;
};

export type UserProcess = {
  userData: UserData | null;
  authorizationStatus: AuthorizationStatus;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
