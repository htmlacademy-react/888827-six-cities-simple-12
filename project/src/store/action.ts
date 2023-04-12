import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../components/const/const';

//export const resetOffers = createAction<{resetedOffers: number}>('offer/resetOffers');

export const redirectToRoute = createAction<AppRoute>('offer/redirectToRoute');
