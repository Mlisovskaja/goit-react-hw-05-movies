import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieCast } from 'components/Shared/Api';

const MovieCastPage = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await movieCast(id);
        setItems(data);
      } catch (error) {
        setError('Ooops, something went wrong');
      }
    };
    fetchCast();
  }, [id, setItems]);

  const linkImg = 'https://image.tmdb.org/t/p/w400';

  const elements = items.map(({ cast_id, name, character, profile_path }) => (
    <li key={cast_id}>
      <img src={linkImg + profile_path} alt={name} />
      <p>Name: {name}</p>
      <p>Character: {character}</p>
    </li>
  ));

  return (
    <>
      {items && !!items.length ? (
        <ul>{elements}</ul>
      ) : (
        <div>There is no information about the cast of the movie</div>
      )}
    </>
  );
};

export default MovieCastPage;
