import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, FIRST_CITY_STEP} from '../../components/const/const';
import {OfferProcess} from '../../types/state';

const initialState: OfferProcess = {
  firstCity: FIRST_CITY_STEP,
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<{visibleCity: string}>) => {
      const {visibleCity} = action.payload;
      state.firstCity = visibleCity;
    },
  },
});

export const {changeCity} = offerProcess.actions;
