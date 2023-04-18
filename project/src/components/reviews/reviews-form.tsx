import {ChangeEvent,useState, useRef, useEffect, FormEvent, memo} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {sendReviewAction} from '../../store/api-actions';
import {ReviewData} from '../../types/review-data';
import {OfferCity} from '../../types/offer';
import {MIN_TEXT_COMMENT, MAX_TEXT_COMMENT} from '../const/const';
import {getOffer} from '../../store/offer-data/selectors';
import Rating from '../rating/rating';

function ReviewsForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const reviewRef = useRef<HTMLTextAreaElement | null>(null);

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [disable, setDisabled] = useState(false);

  const onSubmit = (reviewData: ReviewData) => {
    dispatch(sendReviewAction(reviewData));
    clearForm();
  };

  const offer = useAppSelector(getOffer) as OfferCity;
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit({
      hotelId: offer.id,
      comment: review,
      rating: rating,
    });
  };

  useEffect(() => {
    setDisabled(!!(review.length > MAX_TEXT_COMMENT || review.length < MIN_TEXT_COMMENT || rating === 0));
  }, [rating, review]);

  const fieldChangeHandle = ({ target }:ChangeEvent<HTMLTextAreaElement>) => {
    setReview(target.value);
  };

  const clearForm = () => {
    if (rating) {
      const ratingElement = document.getElementById(`${rating}-stars`);
      if (ratingElement) {
        (ratingElement as HTMLInputElement).checked = false;
      }
    }

    if (reviewRef.current !== null) {
      reviewRef.current.value = '';
    }

    setRating(0);
    setReview('');
    setDisabled(false);
  };

  const ratingValue = Array.from({length: 5}, (_, index) => index + 1);

  return (
    <form className="reviews__form form" action="" method="post" onSubmit={handleSubmit} >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingValue.reverse().map((value: number) => (
          <Rating key={value} id={value} value={value} onChange={() => setRating(value)} />
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={fieldChangeHandle} value={review}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_TEXT_COMMENT} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={disable}>Submit</button>
      </div>
    </form>
  );
}

export default memo(ReviewsForm);
