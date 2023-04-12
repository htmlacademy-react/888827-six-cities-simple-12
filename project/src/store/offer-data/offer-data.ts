import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../components/const/const';
import {OfferData} from '../../types/state';
import {fetchOfferAction} from '../api-actions';

const initialState: OfferData = {
  offers: [],
  isOffersDataLoading: false,
};

export const offerData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      });
  }
});
