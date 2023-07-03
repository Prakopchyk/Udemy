let numberOfFilms = +prompt('How many films have you already watched?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

const a = prompt('Which one out of the latest films have you watched?', ''),
      b = prompt('How do you evaluate it?', ''),
      c = prompt('Which one out of the latest films have you watched?', ''),
      d = prompt('How do you evaluate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);