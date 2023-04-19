import {Review} from '../../types/review';

function ReviewsSort(reviews: Review[]) {
  const items = [...reviews];
  items.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
  return items;
}

export default ReviewsSort;
