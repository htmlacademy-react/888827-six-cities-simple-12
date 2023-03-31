import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction<{visibleCity: string}>('offer/changeCity');

export const changeOffer = createAction<{checkCity: string}>('offer/changeOffer');

//export const resetOffers = createAction('offer/resetOffers');

export const selectPoint = createAction<{selectedPoint: number}>('offer/selectPoint');
