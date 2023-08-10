"use strict";

let numberOfFilms;

function start () {
  numberOfFilms = +prompt('How many films have you already watched?', '');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt('How many films have you already watched?', '');
  }
}

start ();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++){
    const a = prompt('Which one out of the latest films have you watched?', ''),
          b = prompt('How do you evaluate it?', '');
          
          if (a != null && b != null && a != '' && b != '' && a.length <= 50 && b.length <= 50) {
            personalMovieDB.movies[a] = b;
            console.log ('done!');
          } else {
            console.log ('error');
            i--;
          }
  }
}

// rememberMyFilms();

function detectPersonalLevel (){
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов')
  }
  else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {console.log('Вы классический зритель');
  }
  else if (personalMovieDB.count >= 30) {console.log('Вы киноман');
  }
  else{
    console.log('Произошла ошибка');
  };
}

// detectPersonalLevel();


/*2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

function showMyDB (){
  if(personalMovieDB.privat === false) {
console.log(personalMovieDB);
  }
}

showMyDB ();



function writeYourGenres(){
  let i = 1;
  for(; i<=3; i++){
    personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}?`);
  }
}

writeYourGenres();