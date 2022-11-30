import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'a0ca7f55ad45082e1adc2f62ff95899a';

export const getTrandingMovies = async () => {
  const {
    data: { results },
  } = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return results;
};

export const getMovieById = async id => {
  const { data } = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getMovieByQuery = async query => {
  const {
    data: { results },
  } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return results;
};

export const getMovieCast = async id => {
  const {
    data: { cast },
  } = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
  return cast;
};

export const getMovieReviews = async id => {
  const {
    data: { results },
  } = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return results;
};
