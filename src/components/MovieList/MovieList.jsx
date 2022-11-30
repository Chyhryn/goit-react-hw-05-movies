import { useLocation } from 'react-router-dom';
import { List, NavItem, ListItem } from './MovieList.styled';
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <NavItem to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title ?? movie.name}
          </NavItem>
        </ListItem>
      ))}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
