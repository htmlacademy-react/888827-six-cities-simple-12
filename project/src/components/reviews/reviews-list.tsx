import {useAppSelector} from '../../hooks';
import {MAX_COUNT_REVIEWS} from '../const/const';
import ReviewsItem from '../../components/reviews/reviews-item';
import ReviewsSort from '../../components/reviews/reviews-sort';


function ReviewsList():JSX.Element {
  const reviews = useAppSelector((state) => state.reviews);

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
