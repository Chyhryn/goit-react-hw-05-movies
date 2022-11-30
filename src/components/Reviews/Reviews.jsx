import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { Author, NoReviwsNotification } from './Reviews.styled';

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
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <Author>Author: {author}</Author>
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
