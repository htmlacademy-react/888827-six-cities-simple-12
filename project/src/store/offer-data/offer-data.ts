import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../components/const/const';
import {OfferData} from '../../types/state';
import {fetchOfferAction, fetchOfferByIdAction, fetchNearOffersAction} from '../api-actions';

const initialState: OfferData = {
  offers: [],
  offer: null,
  data: [],
  nearOffers: [],
  selectPoint: 0,
  sortType: 'Popular',
  isOffersDataLoading: false,
  isNearOfferLoading: false,
  hasError: false,
};

function getSortOffers(a:number, b:number) {
  return (a - b);
}

export const offerData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
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
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.data = action.payload;
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
      })
      .addCase(fetchNearOffersAction.pending, (state) => {
        state.isNearOfferLoading = true;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
        state.isNearOfferLoading = false;
      })
      .addCase(fetchNearOffersAction.rejected, (state) => {
        state.isNearOfferLoading = false;
      });
  }
});

export const {changeOffer, changeOption, selectPoint} = offerData.actions;
