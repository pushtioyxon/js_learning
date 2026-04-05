// ? xonadagi sonlarni yigindisini aniqlash kerak birinchi xonadagi
// ? raqamlar olinadi va logga + qilib yozish mumkin

// const prompt = require("prompt-sync")();
// let number = prompt("son kiriting: "); // 7890
// if (number.length > 4) {
//   console.log("number maximum 4 xonalik bulsin");
// } else {
//   let birlik = number % 10;
//   let unlik = Math.floor((number / 10) % 10);
//   let yuzlik = Math.floor((number / 100) % 10);
//   let minglik = Math.floor((number / 1000) % 10);
//   console.log(birlik + unlik + yuzlik + minglik);
// }

//? 4 tadan katta raqamlar bilan ishlay olishi kerak
// const prompt = require("prompt-sync")();
// let number = prompt("son kiriting: ");
// count = 0;
// let num1 = number;
// while (num1 != 0) {
//   // console.log(num1 % 10);

//   count += num1 % 10; // 3+2+1
//   num1 = Math.floor(num1 / 10);
// }
// console.log(count);

// ? qayta takror yozilgan kod
// const prompt = require("prompt-sync")();
// let number = prompt(" son kiriting: ");

// let summa = 0;
// while (number !== 0) {
//   summa += number % 10;
//   number = Math.floor(number / 10);
// }
// console.log(summa);
///////////////////////////////////////////////////////////////////////////////////////////////
// ? bulish amalisiz bulish
const prompt = require("prompt-sync")();

// let number = prompt("bulinuvchini kiriting: "); // 26
// let diviser = prompt("buluvchini kiriting: "); // 5
let number = 56;
let diviser = 8;
// 25-5-5 -5
// number-diveser 0 bulgancha ayirishi kerak
let counter = 0;
while (number >= diviser) {
  counter++;
  bulinma = number - diviser;
  number = bulinma;
  // console.log(bulinma);
}
console.log(counter);

// 26 - 5 21
// 21-5 16
// 16-5 11
// 11-5 6
// 6 - 5 1

