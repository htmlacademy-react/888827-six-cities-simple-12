import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/index';
import { changeCity, changeOffer } from '../../store/action';

type LocationsProps = {
  value: string;
  visibleCity: string;
};

function Locations ({value, visibleCity}: LocationsProps): JSX.Element {

  const dispatch = useAppDispatch();

  const onClickСall = (): void => {
    dispatch(changeCity({visibleCity: value}));
    dispatch(changeOffer({checkCity: value}));
  };

  return (
    <Link to={'/'} className={`locations__item-link tabs__item ${visibleCity === value ? 'tabs__item--active' : ''}`}
      onClick={onClickСall}
    >
      <span>{value}</span>
    </Link>
  );
}

export default Locations;
