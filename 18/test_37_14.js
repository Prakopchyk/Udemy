'use strict';

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//   let team1 = [],
//       team2 = [],
//       team3 = [],
//       rest = [];
  
//       for(let i = 0; i < arr.length; i ++) {
//   if(i<=2) {
//     team1.push(arr[i]);
//   }
//  else if(i<=5) {
//     team2.push(arr[i]);
//   }
//  else if(i<=8) {
//     team3.push(arr[i]);
//   }
//   else {
//    rest.push(arr[i]);
//   }
// }
// console.log([team1, team2, team3, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]);
// }

// sortStudentsByGroups(students);

// function sortStudentsByGroups(arr) {
//   let arr1 = [];
// const chunkSize = 3;
// let chunk;
// let str = `Оставшиеся студенты: `;
// arr.sort();
// for(let i = 0; i < arr.length; i + chunkSize) {
//     chunk = arr.slice(i, i + chunkSize);
// for(let j = 8; i < arr.length; i + chunkSize){
//     arr1.push(chunk);
//   }
// else if(chunk.length < 3) {
//   chunk.map(el=>{
//     str += `${el}`;
//   })
//     }
// else if(chunk.length === 0) {
//      str += `-`;
//       }
//     } 
//   console.log([arr1, `${str}`]);
// }


// sortStudentsByGroups(students);


function sortStudentsByGroups(arr) {
  let arr1 = [],
  arr2 = [],
  arr3 = [],
  rest = [];

let str = `Оставшиеся студенты: `;
arr.sort();
for(let i = 0; i < arr.length; i ++) {
if(i<3){
    arr1.push(arr[i]);
  }
else if(i<6) {
    arr2.push(arr[i]);
    }
else if(i<9) {
    arr3.push(arr[i]);
    }
else{
    rest.push(arr[i]);
    }
} 
  console.log([arr1, arr2, arr3, `${str} ${rest.length === 0 ? '-' : rest.join(', ')}`]);
}

sortStudentsByGroups(students);

// Задача:

// У вас есть список учеников, которые хотят поиграть в игру:

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. 
// Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

// Пример:

// sortStudentsByGroups(students)  =>

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]
// Если убрать одно студента из списка, то результат будет:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]
// А если добавить одного, то:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi, Somebody'
// ]
// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.