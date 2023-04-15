import {NameSpace} from '../../components/const/const';
import {State} from '../../types/state';

export const getFirstCity = (state: State): string => state[NameSpace.Offer].firstCity;
