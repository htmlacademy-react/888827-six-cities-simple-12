type RatingProps = {
  id: number;
  value: number;
  title: string;
  onChange: (evt: HTMLInputElement) => void;
}

function Rating(props: RatingProps):JSX.Element {
  const {id, value, title, onChange} = props;

  const fieldChangeHandle = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const data = evt.target;
    onChange(data);
  };

  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${id}-stars`} type="radio" onChange={fieldChangeHandle}/>
      <label htmlFor={`${id}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default Rating;