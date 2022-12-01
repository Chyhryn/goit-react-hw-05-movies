import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import { getMovieById } from 'services/api';
import { MdArrowBack } from 'react-icons/md';
import {
  MovieContainer,
  Button,
  MovieInfoWrapper,
  Image,
  OtherInfoWrapper,
  List,
  ListItem,
  NavItem,
  SuspenseTitle,
} from './MovieDetails.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  const onClick = () => {
    navigate(location.state?.from);
  };

  return (
    <>
      <Button type="button" onClick={onClick}>
        <MdArrowBack />
        <span>Go back</span>
      </Button>
      <MovieContainer>
        {movie.poster_path ? (
          <Image
            src={`${BASE_IMG_URL}${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
        ) : (
          <Image
            src="https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg"
            alt="Placeholder"
            width="300"
            height="450"
          />
        )}
        <MovieInfoWrapper>
          <h1>{movie.title}</h1>
          <p>User Score: {movie.vote_average.toFixed(1)}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </MovieInfoWrapper>
      </MovieContainer>
      <OtherInfoWrapper>
        <h3>Additional information</h3>
        <List>
          <ListItem>
            <NavItem to="cast" state={{ from: location.state?.from }}>
              Cast
            </NavItem>
          </ListItem>
          <ListItem>
            <NavItem to="reviews" state={{ from: location.state?.from }}>
              Reviews
            </NavItem>
          </ListItem>
        </List>
      </OtherInfoWrapper>
      <Suspense fallback={<SuspenseTitle>Loading...</SuspenseTitle>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
