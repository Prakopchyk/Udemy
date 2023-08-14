"use strict";

function fib(int) {
  if (typeof(int) !== 'number' || !Number.isInteger(int) || int <= 0){
    return '';
  } 
  let str = ''; 
  let a = 0,
      b = 1;
    
  for (let i = 0; i < int; i++) {
    if (i + 1 === int){
      str += `${a}`;
    } else{
      str += `${a} `;
    }
    let c = a + b;
        a = b;
        b = c;
  }
  return str;
}


fib(1);