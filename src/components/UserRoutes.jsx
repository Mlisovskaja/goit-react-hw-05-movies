import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const MoviesPage = lazy(() => import('./Pages/MoviesPage'));
const HomePage = lazy(() => import('./Pages/HomePage'));
const MovieDetailsPage = lazy(() => import('./Pages/MovieDetailsPage'));
const MovieCastPage = lazy(() => import('./Pages/MovieCast'));
const MovieReviewsPage = lazy(() => import('./Pages/MovieReviews'));
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage'));

const UserRoutes = () => {
  return (
    <div>
      <Suspense fallback={<p>...loading</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCastPage />} />
            <Route path="reviews" element={<MovieReviewsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default UserRoutes;
