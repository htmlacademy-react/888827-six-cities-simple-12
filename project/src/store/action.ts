import { createAction } from '@reduxjs/toolkit';
//import { OfferCity } from '../types/offer';

export const changeCity = createAction<{visibleCity: string}>('offer/changeCity');

//export const changeOffer = createAction<{checkOffers: OfferCity; checkCity: string}>('offer/changeOffer');
export const changeOffer = createAction<{checkCity: string}>('offer/resetOffers');

//export const resetOffers = createAction('offer/resetOffers');
