import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeOffer, selectPoint, changeOption } from './action';
import { FIRST_CITY_STEP } from '../components/const/const';
import { places } from '../mocks/offers';

const FIRST_CITY_OFFERS = places.filter((offer) => offer.city.name === 'Paris');

const initialState = {
  firstCity: FIRST_CITY_STEP,
  offers: FIRST_CITY_OFFERS,
  selectPoint: 0,
  sortType: 'Popular',
};

function getSortOffers(a:number, b:number) {
  return (a - b);
}

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
    })
    .addCase(changeOption, (state, action) => {
      const {sortType} = action.payload;

      if (sortType === 'Price: low to high') {
        const sortOffers = state.offers.sort((a, b) => getSortOffers(a.price, b.price));
        state.offers = sortOffers;
      } else if (sortType === 'Price: high to low') {
        const sortOffers = state.offers.sort((a, b) => getSortOffers(b.price, a.price));
        state.offers = sortOffers;
      } else if (sortType === 'Top rated first') {
        const sortOffers = state.offers.sort((a, b) => getSortOffers(b.rating, a.rating));
        state.offers = sortOffers;
      } else {
        const sortOffers = state.offers.sort((a, b) => getSortOffers(a.id, b.id));
        state.offers = sortOffers;
      }
      state.sortType = sortType;
    });
});

export {reducer};
