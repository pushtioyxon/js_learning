// ?1
// const prompt = require("prompt-sync")();
// console.log("HI");

// while (true) {
//   let sayYourName = prompt("Please, write your name.");
//   if (sayYourName == "exit") {
//     break;
//   }
//   console.log(sayYourName);
// }
//? 2
// const prompt = require("prompt-sync")();
// let count = 0; // counter ochamiz
// console.log("3*3 = ?"); // savol berish uchun konsolda chiqaid
// let answer = 9; // tugri javobni uzgaruvchiga olamiz chunki  tugri yoki notugriligini tekshirish uchun
// while (true) { 
//   let Calculate = prompt("leave your answer here"); // javobini foydalanuvchi kiritadi
//   if (Calculate =="") { // javob bush bulsa 

//     continue   // qaytadan surash uchun continue ishlatilinadi
//   }
//   if (Number(Calculate) == answer) { // numberga uzgartirvolamiz
//   //   answer  bilan togrimi notogrimi tekshiriladi
//     console.log(true); // tori bulsa true chiqadi
//     console.log(count, "urinishda bo'ldi");  // yuqorida count ochiladi va shunga hisoblab boriladi
//     break; // keyin shu bilan chiqib ketadi
//   } else { 
//     console.log(false); // agar foydalanuvchi kiritgan javob xato bulsa answer bilan false buladi va 
//     // counterga yana hisob qushiladi chunki qaytadan kiritishi 
//     count++;
//   }
// }
// ? 3
// let i = 10;  
// while (i>= 1) {
//  // i--; // agar i bu yerda tursa logdan oldin 9 dan 0 gacha chiqaradi
//   console.log(i);
//   i--; // agar i bu yerda chiqsa 10 dan 1 gacha chiqaradi
// }
//? 4
// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// async function execute() {
//   let i = 10;
//   while (i >= 1) {
//     console.log(i);
//     i--;
//     await sleep(1000); // Pauses execution of THIS function only
//   }
//   console.log("Boom!");
// }

// execute();
// 