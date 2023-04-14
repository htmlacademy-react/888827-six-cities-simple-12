import {memo} from 'react';
import {Offers} from '../../types/offer';
import Card from '../card/card';

type ListOffersProps = {
  offers: Offers;
};

function ListOffers({offers}: ListOffersProps): JSX.Element {

  return (
    <>
      {offers.map((offer) => (
        <Card
          key={`${offer.id}`}
          offer={offer}
        />
      ))}
    </>
  );
}

export default memo(ListOffers, (prevProps, nextProps) => prevProps.offers === nextProps.offers);
