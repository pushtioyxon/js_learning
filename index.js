// // 1. foydalanuvchi kiritgan qiymat asosida hafta kunini aniqlash

// // 1 -> dushanba

// // 1 - 1 = 0
// // 0 - dushanba

// // 50 - 1 = 49 % 7 = 0

// // foydalanuvchi 2 ta qiymat kiritishi kerak:
// // 1 - yilning birinchi kuni haftaning qaysi kuni edi, shuni kiritadi, du se cho pa ju sh yak
// // 2 - yilning nechanchi kuni ekani, masalan 50

// // example:
// // > Birinchi kun nima edi: payshanba
// // > Yilning nechanchi kuni: 50
// // 50 - kun payshanba

// const prompt = require("prompt-sync")();
// let firstDay = prompt("Birinchi kun : ");
// let n = +prompt("Yilning nechanchi kuni: ");
// let firstNum;
// switch (firstDay) {
//   case "du":
//     firstNum = 1;
//     break;
//   case "se":
//     firstNum = 2;
//     break;
//   case "cho":
//     firstNum = 3;
//     break;
//   case "pa":
//     firstNum = 4;
//     break;
//   case "ju":
//     firstNum = 5;
//     break;
//   case "sh":
//     firstNum = 6;
//     break;
//   case "yak":
//     firstNum = 7;
//     break;
//   default:
//     console.log("Xato kun kiritildi");
// }
// let result = (firstNum + n - 1) % 7;
// if (result === 0) result = 7;
// switch (result) {
//   case 1:
//     console.log("du");
//     break;
//   case 2:
//     console.log("se");
//     break;
//   case 3:
//     console.log("cho");
//     break;
//   case 4:
//     console.log("pa");
//     break;
//   case 5:
//     console.log("ju");
//     break;
//   case 6:
//     console.log("sh");
//     break;
//   case 7:
//     console.log("yak");
//     break;
// }

// brr
// ! while loop
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++; // 0 dan 9 gacha sonlar chiqadi chunnki i++ oxirida bajarilyapti
// }

// ?
// let num = 0;
// while (i < 10) {
//   i++; // i ++ boshida bajarilyapgani uchun 1 dan 10 gacha son chiqadi
//   console.log(i);
// }
// ? eng katta umumiy buluvchisini aniqlash
// let a = 10;
// let b = 12;

// let num = a < b ? a : b;
// ekub = 1;
// for (let i = 2; i <= num; i++) {
//   if (a % i == 0 && b % i == 0) {
//     ekub = i;
//     console.log("eng katta umumiy buluvchi", i);

//   }
// }
// ? eng kichik umumiy buluvchini aniqlash
// ekuk = 1;
// for (let i = num; i >= num; i--) {
//   if (a % i == 0 && b % i == 0) {
//     console.log("eng kichik umumiy buluvchi", i);
//   }
//   // ekuk = i;
//   // break;
// }
// ? tub son

// let n = 5;

// tub_son = true;
// for (let i = 2; i < n; i++) {
//   if (n % i == 0) {
//     console.log(i);
//     tub_son = false;
//   }
// }

// if (tub_son) {
//   console.log((tub_son = true));
// } else {
//   console.log((tub_son = false));
// }
// ? count algoritmi
// n = 32;
// let count = 0;
// for (let i = 2; i < n; i++) {
//   if (n % i == 0) {
//     console.log("bo'lgan son -", i);
//     count++;
//   }
// }
// console.log("Bo'la olgan raqamlar soni -", count, "ta");
// if (count == 1) {
//   console.log("tub son");
// } else {
//   console.log("tub son emas");
// }
// ? SQRT algoritmi

let n = 24;
// no flag algoritmi
for (let i = 1; i < n; i++) {
  if (i * i == n) {
    console.log(i);
    break;
  }
}
// flag algoritmi  bilan
let sqrt = 10;
for (let i = 1; i < n; i++) {
  if (i * i == n) {
    sqrt = i;
  }
}
if (sqrt == -1) {
  console.log("sqrt topilmadi ");
} else {
  console.log(sqrt);
}
