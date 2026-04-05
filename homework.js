// ! 1. +prompt orqali kelgan raqamlarni bitta bittalab ekranga chiqarishi kerak

// input:
// 1234
const prompt = require("prompt-sync")();
let num = 2326;
// +prompt("son kirting: ");
let count = 0;
while (num !== 0) {
  // 0 ga teng emasligini tekshiradi

  if (num % 10) {
    count = count + num;
    console.log(count);
  }
  num = Math.floor(num / 10);
}

// output:
// 4
// 3
// 2
// 1
// ! 2. reverse number
// input:
// 1234
// const prompt = require("prompt-sync")();
// let num = +prompt("son kirting: ");
// 12,34 % 10 = 4 birlik olish
// 1234 / 10 = floor(123.4) = 123
// 123 % 10 = 3 o'nlik
// 123 / 10 = floor(123.4) = 12
// 12 % 10 = 2 yuzlik
// 12 / 10 = floor(123.4) = 1
// 1 % 10 = 1 minglik
// 1 / 10 = floor(123.4) = 0

// let birlik = num % 10;
// let unlik = Math.floor((num / 10) % 10);
// let yuzlik = Math.floor((num / 100) % 10);
// let minglik = Math.floor((num / 1000) % 1000);
// console.log(birlik, unlik, yuzlik, minglik);

// output:
// 4321
// ! 3. +prompt orqali kelgan raqamlarni bitta bittalab ekranga chiqarishi kerak

// input:
// 12345,6
// const prompt = require("prompt-sync")();
// let num = +prompt("son kirting: ");
// let birlik = Math.floor((num / 1) % 10);
// let unlik = Math.floor((num / 10) % 10);
// let yuzlik = Math.floor((num / 100) % 10);
// let minglik = Math.floor((num / 1000) % 10);
// let unming = Math.floor((num / 10000) % 10);
// let olti = Math.floor((num / 100000) % 10);
// console.log(olti);
// console.log(unming);
// console.log(minglik);
// console.log(yuzlik);
// console.log(unlik);
// console.log(birlik);

// output:
// 1
// 2
// 3
// 4
// ! 4. pallindrom sonni aniqlash

// input:
// 123454321

// output:
// pallindrom

// input2:
// 1234

// output:
// pallindrom emas
// [30.03.2026 10:18] Ibrohim Khalilov teacher IT: 5. Sonni raqamlar yig‘indisi 1 xonali bo‘lguncha kamaytirish
// // n = 987 → 9+8+7=24 → 2+4=6

// input:
// 573

// process:
// 5 7 3 => 15
// 15 => 6

// output:
// 6
// ! 6. Foydalanuvchi 0 kiritmaguncha son kiritib yig‘indisini hisoblash

// stream:
// < 5
// > 5
// < 6
// > 11
// < 3
// > 14
// < 0
// summa: 14

// ? welcome to out site
// #include <iostream>

// using namespace std;

// int main() {
//
//     cout << "Dasturimizga xush kelibsiz!" << endl;
// console.log(" dasturimizga xush kelibsiz!");
// const prompt = require("prompt-sync")();
// //     while (true) {
// while (true) {
//   let num = prompt("Buyruq kiriting!: ");
//   if (num == "0" || num == "exit") {
//     break;
//   }
// }
//         int a;
//         cin >> a;

//         if (a == 0) {
//             break;
//         }
//     }

//     return 0;
// }
// ? tutiqush dasturi
// console.log("To'tiqush nomli dasturimizga xush kelibsiz!");
// const prompt = require("prompt-sync")();
// const badWords = [
//   "stupid",
//   "donkey",
//   "potato mind",
//   "giraffe",
//   "dog",
//   "monkey",
//   "cucumber",
// ];
// while (true) {
//   const str = prompt("Say smth:  ");

//   if (badWords.includes(str)) {
//     console.log("I am not, you are", str, "I was a sad");
//     break;
//   }
//   console.log("You are", str, "too.");
// }
