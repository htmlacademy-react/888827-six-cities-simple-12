import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../components/const/const';
import {ReviewProcess} from '../../types/state';
import {fetchReviewsAction, sendReviewAction} from '../api-actions';

const initialState: ReviewProcess = {
  reviews: [],
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
      // .addCase(fetchReviewsAction.rejected, (state) => {
      //   state.reviews = action.payload;
      // })
      // .addCase(fetchReviewsAction.fulfilled, (state, action) => {
      //   state.reviews = action.payload;
      // })
      // .addCase(sendReviewAction.rejected, (state) => {
      //   state.reviews = action.payload;
      // })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  }
});
