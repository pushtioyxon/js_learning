// # RAQAMLAR CHIQARISH

// 1. ichidagi o'zgaruvchining scope, i faqat for loop ichida mavjud, whileda esa u global bo'lib qoladi
// 2. 0 dan 9 gacha chiqishi uchun oxiriga i++ qilamiz, yoki 1 dan 10 gacha chiqishi uchun boshiga i++

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let i = 0;
// // For loop bilan bir xil 0 dan 9 gacha chiqaradi
// while (i < 10) {

//     console.log(i);

//     i++; // chunki i++ oxirida bajariladi
// }

// i = 0;
// // bu yerda 1 dan 10 gacha chiqaradi
// while (i < 10) {

//     i++; // chunki i++ birinchi bajarilayapti

//     console.log(i);
// }

// Eng katta umumiy bo'luvchi

// a = 10;
// b = 20;

// min = (a < b) ? a : b; // 10 agar a kichik bulsa a dan a olinsin 
// // agar bunday bulmasa b olinsin shunda eng kichigi olinadi

// ekub = 1; // 2

// // 
// // to'g'ridan to'g'ri topish usul, eng oxirigisi kattasi bo'lib chiqadi
// for (let i = 2; i <= min; i++) { // i = 2 .. 10 // i = 5

//     if (a % i == 0 && b % i == 0) {
//         console.log(i);
//         ekub = i;
//     }
// }

// console.log(ekub);
///////////////////////////////////

// for (let i = min; i >= 2; i--) { // i = 10 .. 2 // i = 2

//     if (a % i == 0 && b % i == 0) {
//         console.log(i);

//         // eng kattasini aniqlash logikasi - oldingisidan kichkina bo'lsa ignore qiladi
//         // if (ekub < i) {
//         //     ekub = i;
//         // }

//         // birinchi uchragani bo'lsa qolganlarini ko'rib ham chiqmaydi
//         ekub = i;
//         break;
//     }
// }

// console.log(ekub);

// ? Tub sonlarni aniqlash

// let n = 33;

// *Flag algoritmi, boshida tub son deb tahmin qiladi, agar biror son uni bo'la olsa tub emas ekan deydi
// tub_son = true;

// for (let i = 2; i < n; i++) { // i = 2..30 / i = 2

//     if (n % i == 0) {

//         console.log(i);

//         tub_son = false;
//     }
// }

// if (tub_son) {
//     console.log("Tub");
// } else {
//     console.log("Tub emas");
// }

// ? count algoritmi

// n = 38;

// let count = 0;

// for (let i = 1; i < n; i++) { // i = 1..32 / i = 1

//     if (n % i == 0) {

//         console.log("Bo'lgan son -", i);
//         count++;
//     }
// }

// console.log("Bo'la olgan raqamlar soni -", count, "ta");

// if (count == 1) {
//     console.log("Tub");
// } else {
//     console.log("Tub emas");
// }

// ? SQRT algoritmi

// let n = 68;

// // no flag, ya'ni faqat mavjud bo'lsa chiqaradi, aks holda hech narsa qilmaydi
// for (let i = 1; i < n; i++) { // i = 1..63

//     if (i * i == n) {

//         console.log(i);

//         break; // javobi topilganidan keyin boshqalarini ko'rib chiqish shart emas
//     }
// }

// flag algoritmi bilan
// let sqrt = -1;

// for (let i = 1; i < n; i++) { // i = 1..63

//     if (i * i == n) {

//         sqrt = i;

//         break; // javobi topilganidan keyin boshqalarini ko'rib chiqish shart emas
//     }
// }

// if (sqrt == -1) {
//     console.log("SQRT ni topolmadim");
// } else {
//     console.log(sqrt);
// }

// // Continue, real hayotda biror foydali tomonini ko'rmaganman,
// // chunki if else'lar bemalol uni o'rnini bosa oladi
// for (let i = 0; i < 10; i++) {

//     if (i % 2 != 0 && i % 3 != 0) { // if else asosida toq sonlarni chiqarish
//         console.log(i);
//     }
// }

// console.log((2 % 5 == 0) ? 1 : 2);

// for (let i = 0; i < 10; i++) {

//     if (i % 2 == 0) { // continue + if else orqali toq sonlarni chiqarish
//         continue;
//     }

//     if (i % 3 == 0) { // continue + if else orqali toq sonlarni chiqarish
//         continue;
//     }

//     console.log(i);
// }

// // sanash, yig'indi, ko'paytma

// count = 0
// sum = 0
// mul = 1

// for (let i = 1; i <= 5; i++) {

//     count++;
//     sum += i;
//     mul *= i;
// }

// console.log(count);
// console.log(sum);
// console.log(mul);

// User kiritgan raqam asosida takrorlash

const prompt = require("prompt-sync")();

// // takrorlanishlar soni aniq, for loop ishlatiladi
// let amount = +prompt("Necha marta: ");

// for (let i = 0; i < amount; i++) {
  //     console.log("Hello");
  // }
  
// function randint(min, max) {
//   min = Math.ceil(min); // eng kattasi 3.4 = 4 
//   max = Math.floor(max); // eng kichik 3.4 = 3
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// takrorlanishlar soni noaniq bo'lishi
// let expected = 5;

// for (let i = 0; i < 100000; i++) {
//     if (randint(1, 100000) == expected) {
//         console.log(i);
//     }
// }

// let i = 0;
// while (randint(1, 10000000) != expected) {

//     i++;
// }

// console.log(i);

// while (true) {
//     console.log("Hello");
// }


/// Number xonalarining sanog'i yig'indisi ko'paytmasi
// let number = 55; // 0

// // console.log(number);

// let count = (number == 0) ? 1 : 0;
// let sum = 0;
// let mul = (number == 0) ? 0 : 1;

// while (number != 0) {

//   count++;

//   sum += number % 10
//   mul *= number % 10

//   if (number > 0) {
//     number = Math.floor(number / 10)
//   } else {
//     number = Math.ceil(number / 10)
//   }

//   // console.log(number);
// }


// console.log(count);
// console.log(sum);
// console.log(mul);


/// ? REVERSE Number

// let number = 1234;

// console.log(number);


// //*  xonalar sonini hisoblash
// count = 0;
// let num1 = number
// while (num1 != 0) {

//   count++;
  
//   num1 = Math.floor(num1 / 10)
// }

// yangi o'zgaruvchiga terish
// let number2 = 0;
// let num2 = number;
// let i = 1;


// while (num2 != 0) {

//   console.log(i, count - i, 10 ** (count - i), num2 % 10);
//   // i                              - bu nechinchi iteratsiya
//   // count                          - i qaysi xonada turganini aniqlash, o'ngdan chapga 0 dan boshlanadi
//   // 10 ** (count - i)              - o'sha xonani o'ziga o'tkazish uchun, masalan 10^3 = 1000
//   // 10 ** (count - i) * num2 % 10  - o'sha xonaning raqamini hisoblash
//   number2 = number2 + ((10 ** (count - i)) * (num2 % 10))
  
//   num2 = Math.floor(num2 / 10)

//   i++;
// }


// console.log(number2);


// let running = true;

// while (running) {

//   let input = prompt("Buyruq kiriting: ");

//   switch (input) {
//     case "exit":
//       running = false;
//       break;
//     case "clear":
//       console.clear();
//       break;
//     case "random":
//       console.log(randint(1, 100));
//       break;
//     default:
//       console.log("Noma'lum buyruq!");
//   }
// }

