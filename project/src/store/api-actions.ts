import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {Offers, OfferCity} from '../types/offer';
import {Reviews} from '../types/review';
import {ReviewData} from '../types/review-data';
import {OfferId} from '../types/offer-id';
import {redirectToRoute} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AppRoute} from '../components/const/const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';

export const fetchOfferAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    //dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    //dispatch(setOffersDataLoadingStatus(false));
    //dispatch(loadOffers(data));
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: userData} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(userData.token);
    //dispatch(setUserData(userData));
    dispatch(redirectToRoute(AppRoute.Main));
    return userData;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    //dispatch(setUserData(null));
  },
);

export const fetchOfferByIdAction = createAsyncThunk<OfferCity, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferById',
  async ({id}, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferCity>(`${APIRoute.Offers}/${id}`);
    //dispatch(loadOfferById(data));
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<Reviews, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async ({id}, {dispatch, extra: api}) => {
    const {data} = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);
    //dispatch(loadReviews(data));
    return data;
  },
);

export const sendReviewAction = createAsyncThunk<Reviews, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/sendReview',
  async ({hotelId, comment, rating}, {dispatch, extra: api}) => {
    const {data: review} = await api.post<Reviews>(`${APIRoute.Comments}/${hotelId}`, {comment, rating});
    //dispatch(loadReviews(review));
    return review;
  },
);
