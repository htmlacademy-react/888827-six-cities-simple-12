import {createAction} from '@reduxjs/toolkit';
import {Offers, OfferCity} from '../types/offer';
import {Review, Reviews} from '../types/review';
import {UserData} from '../types/user-data';
import {AppRoute, AuthorizationStatus} from '../components/const/const';

export const changeCity = createAction<{visibleCity: string}>('offer/changeCity');

export const changeOffer = createAction<{checkCity: string}>('offer/changeOffer');

export const resetOffers = createAction<{resetedOffers: number}>('offer/resetOffers');

export const selectPoint = createAction<{selectedPoint: number}>('offer/selectPoint');

export const changeOption = createAction<{sortType: string}>('offer/changeOption');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const loadReviews = createAction<Reviews>('data/loadReviews');

export const loadNextReview = createAction<Review>('data/loadNextReview');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('offer/redirectToRoute');

export const setUserData = createAction<UserData | null>('user/setUserData');

export const loadOfferById = createAction<OfferCity>('data/loadOfferById');
