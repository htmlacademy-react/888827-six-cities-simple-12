import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offer';
import {AppRoute, AuthorizationStatus} from '../components/const/const';

export const changeCity = createAction<{visibleCity: string}>('offer/changeCity');

export const changeOffer = createAction<{checkCity: string}>('offer/changeOffer');

export const resetOffers = createAction<{resetedOffers: number}>('offer/resetOffers');

export const selectPoint = createAction<{selectedPoint: number}>('offer/selectPoint');

export const changeOption = createAction<{sortType: string}>('offer/changeOption');

export const loadOffers = createAction<Offers>('data/loadQuestions');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setQuestionsDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('offer/redirectToRoute');
