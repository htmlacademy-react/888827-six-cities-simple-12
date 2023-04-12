import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../components/const/const';
import {offerData} from './offer-data/offer-data';
import {offerProcess} from './offer-process/offer-process';
import {userProcess} from './user-process/user-process';
import {reviewProcess} from './review-process/review-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: offerData.reducer,
  [NameSpace.Offer]: offerProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Review]: reviewProcess.reducer,
});
