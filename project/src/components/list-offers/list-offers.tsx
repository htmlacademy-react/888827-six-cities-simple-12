import { Offers } from '../../types/offer';
import { useState } from 'react';
import Card from '../card/card';

type ListOffersProps = {
  offers: Offers;
};

function ListOffers({offers}: ListOffersProps): JSX.Element {
  const [activeId, setActiveId] = useState(0);

  return (
    <>
      {offers.map((offer) => (
        <Card
          activeId={activeId}
          key={`${offer.id}`}
          offer={offer}
          onMouseOverHandler={() => setActiveId(offer.id)}
        />
      ))}
    </>
  );
}

export default ListOffers;
