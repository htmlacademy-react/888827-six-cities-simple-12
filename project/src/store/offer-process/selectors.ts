import {NameSpace} from '../../components/const/const';
import {State} from '../../types/state';
import {Offers, OfferCity} from '../../types/offer';

export const getFirstCity = (state: State): string => state[NameSpace.Offer].firstCity;
export const getOffers = (state: State): Offers => state[NameSpace.Offer].offers;
export const getData = (state: State): Offers => state[NameSpace.Offer].data;
export const getSelectPoint = (state: State): number => state[NameSpace.Offer].selectPoint;
export const getSortType = (state: State): string => state[NameSpace.Offer].sortType;
export const getOffer = (state: State): OfferCity | null => state[NameSpace.Offer].offer;
