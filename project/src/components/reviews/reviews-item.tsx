import {Review} from '../../types/review';
import ProcessData from '../../components/process-data/process-data';

function ReviewsItem(review: Review):JSX.Element {
  const visuallyRating = `${Math.round(review.rating) / 5 * 100}%`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
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
          {review.comment}
        </p>
        <ProcessData comment={review.comment} date={review.date} id={review.id} rating={review.rating} user={review.user}/>
      </div>
    </li>
  );
}

export default ReviewsItem;
