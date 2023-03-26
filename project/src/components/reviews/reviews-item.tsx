import { Review } from '../../types/review';

type ReviewsItemProps = {
  review: Review;
}

function ReviewsItem({review}:ReviewsItemProps):JSX.Element {
  const {images, name, rating, time, text} = review;
  const visuallyRating = `${Math.round(rating) / 5 * 100}%`;

  return (
    <>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={images} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: visuallyRating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{time}</time>
      </div>
    </>
  );
}

export default ReviewsItem;
