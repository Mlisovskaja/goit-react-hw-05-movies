import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { searchMovies } from 'components/Shared/Api';
import SearchMoviesForm from 'components/SearchMovie';

const MoviesPage = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query');

  const location = useLocation();

  useEffect(() => {
    if (!movieName) {
      return;
    }
    const fetchMovies = async () => {
      try {
        const data = await searchMovies(movieName);
        setItems(data);
      } catch (error) {
        setError('Ooops, something went wrong');
      }
    };
    fetchMovies();
  }, [movieName]);

  const handleSearch = query => {
    setSearchParams({ query });
  };

  const elements = items.map(({ id, title }) => (
    <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
      <li>{title}</li>
    </Link>
  ));

  return (
    <>
      <SearchMoviesForm onSubmit={handleSearch} />
      <ul>{elements}</ul>
      {error && <p>{error}</p>}
    </>
  );
};

export default MoviesPage;
