import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../components/const/const';
import {ReviewProcess} from '../../types/state';
import {fetchReviewsAction, sendReviewAction} from '../api-actions';

const initialState: ReviewProcess = {
  reviews: [],
  hasError: false,
  isReviewLoading: false,
};

export const reviewProcess = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.hasError = false;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.hasError = true;
      })
      .addCase(sendReviewAction.pending, (state) => {
        state.hasError = false;
        state.isReviewLoading = true;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.hasError = false;
        state.isReviewLoading = false;
      })
      .addCase(sendReviewAction.rejected, (state) => {
        state.hasError = true;
        state.isReviewLoading = false;
      });
  }
});
