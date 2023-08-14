"use strict";

// Место для первой задачи:

function getTimeFromMinutes(int) {
  let hours = Math.floor(int/60);
  let minuts = int - hours*60;

if(typeof(int) !== 'number' || !Number.isInteger(int) || int < 0) {
  console.log("Ошибка, проверьте данные");
}
else{
  if (hours === 0 || hours >= 5 && hours <= 10){
    console.log(`Это ${hours} часов и ${minuts} минут`);
  }
  if (hours === 1){
    console.log(`Это ${hours} час и ${minuts} минут`);
  }
  if (hours >= 2 && hours <= 4){
    console.log(`Это ${hours} часа и ${minuts} минут`);
  }
}
}

getTimeFromMinutes(255);




// Место для второй задачи
function findMaxNumber(a, b, c, d) {
if(typeof(a) !== 'number' ||
typeof(b) !== 'number' ||
typeof(c) !== 'number' ||
typeof(d) !== 'number'){
  console.log(0);
} else{
  console.log(Math.max(a, b, c, d));
}
}

findMaxNumber(1, 5, '6', '10');
