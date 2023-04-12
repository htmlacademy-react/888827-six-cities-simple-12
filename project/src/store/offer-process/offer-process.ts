import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, FIRST_CITY_STEP} from '../../components/const/const';
import {OfferProcess} from '../../types/state';

const initialState: OfferProcess = {
  firstCity: FIRST_CITY_STEP,
  offers: [],
  data: [],
  selectPoint: 0,
  sortType: 'Popular',
};

function getSortOffers(a:number, b:number) {
  return (a - b);
}

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<{visibleCity: string}>) => {
      const {visibleCity} = action.payload;
      state.firstCity = visibleCity;
    },
    changeOffer: (state, action: PayloadAction<{checkCity: string}>) => {
      const {checkCity} = action.payload;
      state.offers = state.data.filter((offer) => offer.city.name === checkCity);
    },
    selectPoint: (state, action: PayloadAction<{selectedPoint: number}>) => {
      const {selectedPoint} = action.payload;
      state.selectPoint = selectedPoint;
    },
    changeOption: (state, action: PayloadAction<{sortType: string}>) => {
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
    },
    // loadOffers: (state, action: PayloadAction<Offers>) => {
    //   state.offers = action.payload;
    //   state.data = action.payload;
    // },
  },
});

export const {changeCity, changeOffer, selectPoint, changeOption} = offerProcess.actions;
