import {memo} from 'react';

type RatingProps = {
  id: number;
  value: number;
  disabled: boolean;
  onChange: (evt: HTMLInputElement) => void;
}

function Rating(props: RatingProps):JSX.Element {
  const {id, value, disabled, onChange} = props;

  const fieldChangeHandle = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const data = evt.target;
    onChange(data);
  };

  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${id}-stars`} type="radio" disabled={disabled} onChange={fieldChangeHandle}/>
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default memo(Rating, (prevProps, nextProps) => prevProps.value === nextProps.value);
