import {useState} from 'react';
import {changeOption} from '../../store/offer-data/offer-data';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {OPTIONS} from '../const/const';
import {getSortType} from '../../store/offer-data/selectors';

function SortOptions():JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();
  const onClickHandler = (option: string) => {
    dispatch(changeOption({sortType: option}));
    setIsOpen(false);
  };

  const sortType = useAppSelector(getSortType);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setIsOpen(!isOpen)}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {OPTIONS.map((option, id) => (
          <li
            className={`places__option ${sortType === option ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => onClickHandler(option)}
            key={`${id * 10}`}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortOptions;
