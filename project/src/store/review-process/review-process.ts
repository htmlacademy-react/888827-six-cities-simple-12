import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../components/const/const';
import {ReviewProcess} from '../../types/state';
import {Reviews} from '../../types/review';

const initialState: ReviewProcess = {
  reviews: [],
};

export const reviewProcess = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {
    loadReviews: (state, action: PayloadAction<Reviews>) => {
      state.reviews = action.payload;
    },
  },
});

export const {loadReviews} = reviewProcess.actions;
