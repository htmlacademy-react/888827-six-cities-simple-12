import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../components/const/const';
import {OfferData} from '../../types/state';
import {fetchOfferAction, fetchOfferByIdAction} from '../api-actions';

const initialState: OfferData = {
  offers: [],
  isOffersDataLoading: false,
  hasError: false,
  offer: null,
};

export const offerData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchOfferByIdAction.pending, (state) => {
        state.hasError = false;
      })
      .addCase(fetchOfferByIdAction.fulfilled, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(fetchOfferByIdAction.rejected, (state) => {
        state.hasError = true;
      });
  }
});
