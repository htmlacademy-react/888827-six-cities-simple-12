import {useAppSelector} from '../../hooks';
import {getFirstCity} from '../../store/offer-process/selectors';
import {LOCATIONS} from '../../components/const/const';
import Locations from '../../components/locations/locations';

function ErrorScreen(): JSX.Element {
  const visibleCity = useAppSelector(getFirstCity);

  return (
    <>
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
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in {visibleCity}</p>
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      </div>
    </>
  );
}

export default ErrorScreen;
