import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trendingMovies } from 'components/Shared/Api';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await trendingMovies();
        setItems([...data]);
      } catch (error) {
        setError('Ooops, something went wrong');
      }
    };
    fetchMovies();
  }, []);

  const elements = items.map(({ id, title }) => (
    <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
      <li>{title}</li>
    </Link>
  ));

  return (
    <>
      <h2>Trending movies</h2>
      <ul>{elements}</ul>
      {error && <p>{error}</p>}
    </>
  );
};

export default HomePage;

