'use script';

const newMap = new Map([
  [{zara: 120}, 120]
]);

const budget = [500, 100, 2000];
const shops = [
  {handm : 100},
  {calzedonia: 100},
  {annakruk : 2000}
]

shops.forEach((shop, i) =>
{
  newMap.set(shop, budget[i])
})

let prices = [];

for(let price of newMap.values()){
prices.push(price);
}

let goods = [];

for(let shop of newMap.keys()){
goods.push(Object.keys(shop)[0]);
}

let minPrice = [];
for(let shop of newMap.keys()){
// console.log(shop);
minPrice.push(Object.values(shop).toString());
}

console.log(newMap);
console.log(goods);
console.log(minPrice);
console.log(prices);

