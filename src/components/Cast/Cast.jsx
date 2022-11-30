import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';
import { CastList, CastItem, Image, CastText } from './Cast.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <CastList>
      {cast.map(({ character, profile_path, name, id }) => {
        return (
          <CastItem key={id}>
            {profile_path ? (
              <Image src={`${BASE_IMG_URL}${profile_path}`} alt={name} />
            ) : (
              <Image
                src="https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg"
                alt="Placeholder"
                width="300"
                height="450"
              />
            )}

            <CastText>{name}</CastText>
            <CastText>Character: {character}</CastText>
          </CastItem>
        );
      })}
    </CastList>
  );
};

export default Cast;
