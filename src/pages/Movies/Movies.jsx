import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { getMovieByQuery } from 'services/api';
import { useSearchParams } from 'react-router-dom';
import { SearchForm, SearchInput, Button } from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const movieName = params.get('query') ?? '';

    if (movieName === '') {
      return;
    }

    getMovieByQuery(movieName).then(setMovies);
  }, [params]);

  const onChangeHandler = e => {
    setQuery(e.currentTarget.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const newQuery = query !== '' ? { query } : {};
    setParams(newQuery);
  };

  return (
    <>
      <SearchForm onSubmit={onSubmit}>
        <SearchInput type="text" onChange={onChangeHandler} />
        <Button type="submit">Search movie</Button>
      </SearchForm>
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
