import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../components/const/const';
import {ReviewProcess} from '../../types/state';
import {fetchReviewsAction, sendReviewAction} from '../api-actions';

const initialState: ReviewProcess = {
  reviews: [],
  hasError: false,
};

export const reviewProcess = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.hasError = true;
      })
      .addCase(fetchReviewsAction.pending, (state, action) => {
        state.hasError = false;
      })
      .addCase(sendReviewAction.rejected, (state) => {
        state.hasError = false;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  }
});
