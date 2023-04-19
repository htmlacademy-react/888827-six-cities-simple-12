import {useAppSelector} from '../../hooks';
import {MAX_COUNT_REVIEWS} from '../const/const';
import {getReviews} from '../../store/review-process/selectors';
import ReviewsItem from '../reviews-item/reviews-item';
import ReviewsSort from '../reviews-sort/reviews-sort';

function ReviewsList():JSX.Element {
  const reviews = useAppSelector(getReviews);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {ReviewsSort(reviews).slice(0, MAX_COUNT_REVIEWS).map((comment) => (
          <ReviewsItem
            key={comment.id}
            comment={comment.comment}
            date={comment.date}
            id={comment.id}
            rating={comment.rating}
            user={comment.user}
          />
        ))}
      </ul>
    </>
  );
}

export default ReviewsList;
