import {useAppSelector} from '../../hooks';
import {getFirstCity} from '../../store/offer-process/selectors';

function ErrorScreen(): JSX.Element {
  const visibleCity = useAppSelector(getFirstCity);

  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in {visibleCity}</p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  );
}

export default ErrorScreen;
