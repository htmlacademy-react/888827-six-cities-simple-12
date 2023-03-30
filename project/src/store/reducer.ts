import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeOffer } from './action';
import { FIRST_CITY_STEP } from '../components/const/const';
import { places } from '../mocks/offers';

const initialState = {
  firstCity: FIRST_CITY_STEP,
  offers: places,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {visibleCity} = action.payload;
      state.firstCity = visibleCity;
    })
    .addCase(changeOffer, (state, action) => {
      const {checkCity} = action.payload;
      const newOffer = places.filter((offer) => offer.city.name === checkCity);
      state.offers = newOffer;
    });
// .addCase(resetOffers, (state) => {
//   state.offers = places;
//   state.firstCity = FIRST_CITY_STEP;
// });
});

export {reducer};
