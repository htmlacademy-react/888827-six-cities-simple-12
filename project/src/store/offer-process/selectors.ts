import {NameSpace} from '../../components/const/const';
import {State} from '../../types/state';
import {Offers} from '../../types/offer';

export const getFirstCity = (state: State): string => state[NameSpace.Offer].firstCity;
export const getOffers = (state: State): Offers => state[NameSpace.Offer].offers;
export const getSelectPoint = (state: State): number => state[NameSpace.Offer].selectPoint;
export const getSortType = (state: State): string => state[NameSpace.Offer].sortType;
export const getData = (state: State): Offers => state[NameSpace.Offer].data;
