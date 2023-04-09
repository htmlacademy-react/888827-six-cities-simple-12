import {Helmet} from 'react-helmet-async';
import {useParams} from 'react-router-dom';
import {OfferCity} from '../../types/offer';
import {useAppSelector} from '../../hooks/index';
import {AuthorizationStatus} from '../../components/const/const';
import ReviewsList from '../../components/reviews/reviews-list';
import ReviewsForm from '../../components/reviews/reviews-form';
import Map from '../../components/map/map';
import ListOffers from '../../components/list-offers/list-offers';
import PropertyGallery from '../../components/property-gallery/property-gallery';

function RoomRender(): JSX.Element {

  const places = useAppSelector((state) => state.offers);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const {id} = useParams() as {id: string};
  const roomOffers: OfferCity | undefined = places.find((offer) => offer.id === Number(id));
  if (!roomOffers) {
    return <>Page not Found</>;
  }

  const place = places.find((offer) => offer.id === parseInt(id, 10)) as OfferCity;

  const {bedrooms, description, host, maxAdults, price, rating, title, type, isPremium} = roomOffers;
  const {avatarUrl, name} = host;
  const visuallyRating = `${Math.round(rating) / 5 * 100}%`;

  const GOODS = ['Heating', 'WiFi', 'Cabel TV', 'Coffee machine', 'Kitchen'];

  const nearOffer = places.filter((item) => item.id !== Number(id));


  return (
    <>
      <Helmet>
        <title>Apartment</title>
      </Helmet>
      <div className="page">
        <div style={{display: 'none'}}>
          <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
        </div>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <PropertyGallery images={place.images}/>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium ? (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                ) : (
                  ''
                )}
                <div className="property__name-wrapper">
                  <h1 className="property__name">{title}</h1>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: visuallyRating}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {GOODS.map((good)=>(<li key={good}className="property__inside-item">{good}</li>))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">{name}</span>
                    <span className="property__user-status">
                      Pro
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">{description}</p>
                    <p className="property__text">
                      An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewsList />
                  { authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm />}
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map places={nearOffer} />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <ListOffers offers={nearOffer} />
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default RoomRender;
