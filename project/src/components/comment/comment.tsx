import { useState } from 'react';
import Rating from '../rating/rating';

function Comment(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: '',
    review: '',
  });

  const ratings = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

  const fieldChangeHandle = (evt: HTMLInputElement) => {
    const {name, value,} = evt;

    setFormData({...formData, [name]: value});
  };

  const fieldChangeHandleTextare = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = evt.target;

    setFormData({...formData, review: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratings.map((rating, id) => (
          <Rating onChange={fieldChangeHandle} key={`${id * 10}`} title={rating} id={id} value={id} />
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={fieldChangeHandleTextare} value={formData.review}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default Comment;
