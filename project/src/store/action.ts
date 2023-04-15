import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../components/const/const';

export const redirectToRoute = createAction<AppRoute>('offer/redirectToRoute');
