import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Navbar = lazy(() => import('./Navbar/Navbar'));
const MoviesPage = lazy(() => import('./Pages/MoviesPage'));
const HomePage = lazy(() => import('./Pages/HomePage'));
const MovieDetailsPage = lazy(() => import('./Pages/MovieDetailsPage'));
const MovieCastPage = lazy(() => import('./Pages/MovieCast'));
const MovieReviewsPage = lazy(() => import('./Pages/MovieReviews'));

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<p>...loading</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCastPage />} />
            <Route path="reviews" element={<MovieReviewsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
