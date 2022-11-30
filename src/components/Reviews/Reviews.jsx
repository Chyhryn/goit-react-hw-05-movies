import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import {
  ReviewList,
  ReviewItem,
  Author,
  NoReviwsNotification,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <>
      {reviews.length > 0 ? (
        <ReviewList>
          {reviews.map(({ id, author, content }) => (
            <ReviewItem key={id}>
              <Author>Author: {author}</Author>
              <p>{content}</p>
            </ReviewItem>
          ))}
        </ReviewList>
      ) : (
        <NoReviwsNotification>
          We don't have any reviews for this movie!
        </NoReviwsNotification>
      )}
    </>
  );
};

export default Reviews;
