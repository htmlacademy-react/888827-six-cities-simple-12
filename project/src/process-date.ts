import {Review} from './types/review';

function ProcessDate (review:Review) {
  const reviewDate = new Date(review.date);
  const monthName = reviewDate.toLocaleString('en-EN', { month: 'long' });
  const reviewTime = `${monthName} ${reviewDate.getFullYear()}`;
  const reviewDateTime = review.date.substring(0, 10);

  return [reviewTime, reviewDateTime];
}

export default ProcessDate;
