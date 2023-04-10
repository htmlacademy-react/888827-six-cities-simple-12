import {Review} from '../../types/review';

function ProcessData(review: Review):JSX.Element {
  const reviewDate = new Date(review.date);
  const monthName = reviewDate.toLocaleString('en-EN', { month: 'long' });
  const reviewTime = `${monthName} ${reviewDate.getFullYear()}`;
  const reviewDateTime = review.date.substring(0, 10);

  return (
    <time className="reviews__time" dateTime={reviewDateTime}>{reviewTime}</time>
  );
}

export default ProcessData;
