'use strict';

// Задание
// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

const mygcdFirst =(x,y)=>{
  let divisor = [];
  for(let i=x; i>=1; i--){
    
    if((x % i === 0) && (y % i === 0)) {
      divisor.push(i);
      
    }
  }
  return divisor[0];
}

const mygcdTwo =(x,y)=>{
    
    while(x!==0 && y!==0){
      if(x>y) {
      x=x%y;
       } else {
        y=y%x;
    }
  }
  return x+y;
}

const mygcdThreeTheBest = (x, y)=>{
  if (y === 0) {
    return x;
  }
  return mygcdThreeTheBest(y, x % y);
};



console.log(mygcdFirst(8, 9));

console.log(mygcdTwo(30,12));

console.log(mygcdThreeTheBest(30,12));

