import {NameSpace} from '../../components/const/const';
import {State} from '../../types/state';
import {Reviews} from '../../types/review';

export const getReviews = (state: State): Reviews => state[NameSpace.Review].reviews;
