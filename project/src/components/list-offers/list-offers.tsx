import { Offers } from '../../types/offer';
import Card from '../card/card';

type ListOffersProps = {
  offers: Offers;
  //onListItemHover: (onListItemName: number) => void;
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

export default ListOffers;
