import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeOffer, selectPoint } from './action';
import { FIRST_CITY_STEP } from '../components/const/const';
import { places } from '../mocks/offers';

const initialState = {
  firstCity: FIRST_CITY_STEP,
  offers: places,
  selectPoint: 0,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {visibleCity} = action.payload;
      state.firstCity = visibleCity;
    })
    .addCase(changeOffer, (state, action) => {
      const {checkCity} = action.payload;
      state.offers = places.filter((offer) => offer.city.name === checkCity);
    })
    .addCase(selectPoint, (state, action) => {
      const {selectedPoint} = action.payload;
      state.selectPoint = selectedPoint;
    });
});

export {reducer};
