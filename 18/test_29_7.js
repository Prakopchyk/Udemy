'use strict';

// Место для первой задачи:

function calculateVolumeAndArea(int) {
if(typeof(int) !== 'number' || !Number.isInteger(int) || int<0){
  return "При вычислении произошла ошибка";
}else{
  return `Объем куба: ${Math.pow(int, 3)}, площадь всей поверхности: ${6*Math.pow(int, 2)}`;
}
}

calculateVolumeAndArea(-15);


// Место для второй задачи:

  function getCoupeNumber(seatNumber) {
    if(typeof(seatNumber) !== 'number' || !Number.isInteger(seatNumber) || seatNumber<0){
      return "Ошибка. Проверьте правильность введенного номера места";
    }
    if( seatNumber === 0 || seatNumber > 36){
      return "Таких мест в вагоне не существует";
    }
     return Math.ceil(seatNumber/4);
        }

    getCoupeNumber(7.7);
    
