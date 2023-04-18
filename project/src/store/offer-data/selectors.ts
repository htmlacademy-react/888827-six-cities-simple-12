import {NameSpace} from '../../components/const/const';
import {State} from '../../types/state';
import {Offers, OfferCity} from '../../types/offer';

export const getOffers = (state: State): Offers => state[NameSpace.Data].offers;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;
export const getOffer = (state: State): OfferCity | null => state[NameSpace.Data].offer;
export const getData = (state: State): Offers => state[NameSpace.Data].data;
export const getSortType = (state: State): string => state[NameSpace.Data].sortType;
export const getSelectPoint = (state: State): number => state[NameSpace.Data].selectPoint;
export const getNearOffers = (state: State): Offers => state[NameSpace.Data].nearOffers;
export const getNearOfferLoadingStatus = (state: State): boolean => state[NameSpace.Data].isNearOfferLoading;
