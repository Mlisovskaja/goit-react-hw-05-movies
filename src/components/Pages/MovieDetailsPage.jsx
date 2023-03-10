import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { movieDetails } from 'components/Shared/Api';
import { findGenresOfMovie } from 'components/Shared/findGenre';

import styles from './movieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [items, setItems] = useState({});

  const { id } = useParams();

  const location = useLocation();
  const ref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await movieDetails(id);
        setItems(data);
      } catch {
        alert('Ooops, something went wrong');
      }
    };
    fetchMovies();
  }, [id]);

  const linkPoster = 'https://image.tmdb.org/t/p/w400';

  function createYear(data) {
    if (data) {
      return data.slice(0, 4);
    } else {
      return (data = 'Not found');
    }
  }

  return (
    <>
      <Link to={ref.current}>Go back</Link>
      <div className={styles.box}>
        <img
          className={styles.poster}
          src={linkPoster + items.poster_path}
          alt={items.title}
        />
        <div className={styles.desc}>
          <h2>
            {items.title} ({createYear(items.release_date)})
          </h2>
          <p>User score: {Math.round(items.popularity)}%</p>
          <h3>Overview</h3>
          <p>{items.overview}</p>
          <h3>Genres</h3>
          <p>{findGenresOfMovie(items.genres)}</p>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <div>
          <Link to="cast" state={{ ref }}>
            Cast
          </Link>
        </div>
        <div>
          <Link to="reviews" state={{ ref }}>
            Reviews
          </Link>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsPage;
