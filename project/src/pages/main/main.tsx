import { Helmet } from 'react-helmet-async';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { changeOffer } from '../../store/action';
import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import ListOffers from '../../components/list-offers/list-offers';
import Map from '../../components/map/map';
import SortOptions from '../../components/sort-options/sort-options';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

function MainRender(): JSX.Element {
  const LOCATIONS = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

  const places = useAppSelector((state) => state.offers);
  const visibleCity = useAppSelector((state) => state.firstCity);
  const loading = useAppSelector((state) => state.isOffersDataLoading);

  const data = useAppSelector((state) => state.data);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeOffer({ checkCity: 'Paris' }));
  }, [data]);

  return (
    <>
      <Helmet>
        <title>Choose your city</title>
      </Helmet>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {LOCATIONS.map((city, id)=>(
                <li key={`${id * 10}-city`} className="locations__item">
                  <Locations value={city} visibleCity={visibleCity} />
                </li>
              ))}
            </ul>
          </section>
        </div>
        {!loading ? (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{places.length} places to stay in {visibleCity}</b>
                <SortOptions />
                <div className="cities__places-list places__list tabs__content">
                  {!loading ? (
                    <ListOffers offers={places} />
                  ) : (
                    <LoadingScreen />
                  )}
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map" style={{height: '819px'}}>
                  <Map places={places} />
                </section>
              </div>
            </div>
          </div>
        ) : (
          <LoadingScreen />
        )};
      </main>
    </>
  );
}

export default MainRender;
