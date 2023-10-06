'use strict';

const shoppingMallData = {
  shops: [
      {
          width: 10,
          length: 5
      },
      {
          width: 15,
          length: 7
      },
      {
          width: 20,
          length: 5
      },
      {
          width: 8,
          length: 10
      }
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000
}

function isBudgetEnough(data) {
  let countOfMallSquare = 0;
  let countOfShopSquare;
  let countOfMallValue = 0;
  let countOfBudget;

data.shops.forEach((shop) => {
  for(let key in shop) {
    countOfShopSquare = shop.width * shop.length;
        }
        countOfMallSquare += countOfShopSquare;
       })
       countOfMallValue = countOfMallSquare * data['height'];
    //    console.log(countOfMallValue);

       countOfBudget = countOfMallValue * data['moneyPer1m3'];
    //    console.log(countOfBudget);

       if (countOfBudget > data['budget']) {
        return `Бюджета недостаточно`;
       } else {
        return `Бюджета достаточно`;
       }

}

isBudgetEnough(shoppingMallData);

// Задача:

// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. 
// Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр 
// и бюджет на оплату отопления за месяц.

// Основная задача - это написать функцию isBudgetEnough, которая будет возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - 
// выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂

// Но эта задача содержит несколько подзадач внутри:

// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;

// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;

// - определение того, хватает ли бюджета на оплату такого объема;

// - все числа идут без единиц измерения для упрощения, просто цифры и все;

// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.