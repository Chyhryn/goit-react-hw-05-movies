import { useState, useEffect } from 'react';
import { getTrandingMovies } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [trandingMovies, setTrandingMovies] = useState([]);

  useEffect(() => {
    getTrandingMovies().then(setTrandingMovies);
  }, []);

  return (
    <>
      <h1>Tranding today</h1>
      <MovieList movies={trandingMovies} />
    </>
  );
};

export default Home;
