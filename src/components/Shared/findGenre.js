import allGenres from './genres.json';


function findGenresOfMovie() {
    const genres = allGenres;
    let movieGenres = genres.genres.map(genre => genre.name + ' ').slice(0, 3)
    return movieGenres.join(' ');
  
}

export { findGenresOfMovie };