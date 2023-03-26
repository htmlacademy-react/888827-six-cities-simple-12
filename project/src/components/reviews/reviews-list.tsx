import { Review } from '../../types/review';
import ReviewsItem from '../../components/reviews/reviews-item';
import Comment from '../../components/comment/comment';
//import Rating from '../../components/rating/rating';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({reviews}:ReviewsListProps):JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review, id) => (
          <li key={`${id * 10}`} className="reviews__item">
            <ReviewsItem review={review} />
          </li>
        ))}
      </ul>
      <Comment />
    </section>
  );
}

export default ReviewsList;
