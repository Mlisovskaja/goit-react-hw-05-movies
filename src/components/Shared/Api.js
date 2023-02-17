import axios from 'axios';

export const trendingMovies = async () => {
  const {data} = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=c60edd70b8b52249425a4fc37989f133`
  );

  return data.results;
};

export const movieDetails = async (id) => {
  const {data} = await axios.get(
    `https://api.themoviedb.org/3/movie//${id}?api_key=c60edd70b8b52249425a4fc37989f133&language=en-US`
  );

  return data;
};

export const movieCast = async (id) => {
  const {data} = await axios.get(
    `https://api.themoviedb.org/3/movie//${id}/credits?api_key=c60edd70b8b52249425a4fc37989f133&language=en-US`
  );

  return data.cast;
};

export const movieReviews = async (id) => {
  const {data} = await axios.get(
    `https://api.themoviedb.org/3/movie//${id}/reviews?api_key=c60edd70b8b52249425a4fc37989f133&language=en-US`
  );

  return data.results;
};

export const searchMovies = async (query) => {
  const {data} = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=c60edd70b8b52249425a4fc37989f133&language=en-US&query=${query}&page=1&include_adult=false`
  );

  return data.results;
};



