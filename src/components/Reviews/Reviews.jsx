import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { NoReviwsNotification } from './Reviews.styled';

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
      {reviews.lenght > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <NoReviwsNotification>
          We don't have any reviews for this movie!
        </NoReviwsNotification>
      )}
    </>
  );
};

export default Reviews;
