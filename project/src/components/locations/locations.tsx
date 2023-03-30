import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/index';
import { changeCity, changeOffer } from '../../store/action';

type LocationsProps = {
  value: string;
  visibleCity: string;
};

const LOCATIONS = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];


function Locations ({value, visibleCity}: LocationsProps): JSX.Element {

  const dispatch = useAppDispatch();

  const onClickСall = (): void => {
    dispatch(changeCity({visibleCity: value}));
    dispatch(changeOffer({checkCity: value}));
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {LOCATIONS.map((city)=>(
          <li key={city} className="locations__item">
            <Link
              className="locations__item-link tabs__item"
              to="/"
              onClick={onClickСall}
            >
              <span>{value}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Locations;
