// ? Parol tekshirish
// Parol "12345" ga teng bo‘lsa "Access granted", aks holda "Wrong password"
// let parol;
// if (parol == 12345) {
//   console.log("Access granted");
// } else {
//   console.log("Wrong password");
// }
// 🔴 Hard
// Leap year (kabisa yili)
// Yil berilgan. Kabisa bo‘lsa "Leap year", aks holda "Not leap year"
// let leap = 2004;
// let not = 2003;
// if (leap % 2 == 0) {
//   console.log("kabisa yili");
// } else {
//   console.log("not leap year");
// }
// // Login tizimi
// // username = "admin", password = "1234"
// // Ikkalasi to‘g‘ri bo‘lsa "Welcome"
// // username noto‘g‘ri → "User not found"
// // password noto‘g‘ri → "Wrong password"
// let username = "admin";
// let password = "1234";
// if (username == "admin" && password == "1234") {
//   console.log("Welcome");
// } else if (username !== "admin") {
//   console.log("User not found");
// } else {
//   console.log("Wrong password");
// }
// // ? 🟢 2. switch masalalari
// // 🟡 Easy
// // Hafta kuni
// // 1–7 son berilgan:
// // 1 → Dushanba
// // 2 → Seshanba
// // ...
// switch (weekdays) {
//   case Monday:
//     1;
//     break;
//   case Tuesday:
//     2;
//     break;
//   case Wednesday:
//     3;
//     break;
//   case Thursday:
//     4;
//     break;
//   case Friday:
//     5;
//     break;
//   case Saturday:
//     6;
//     break;
//   case Sunday:
//     7;
//     break;
//   default:
//     break;
// }
// // ? 🟠 Medium
// // Oy nomi
// // 1–12 son berilgan → mos oy nomini chiqar
// switch (weekdays) {
//   case Yanvar:
//     1;
//     break;
//   case Fevral:
//     2;
//     break;
//   case Mart:
//     3;
//     break;
//   case Aprel:
//     4;
//     break;
//   case May:
//     5;
//     break;
//   case Iyun:
//     6;
//     break;
//   case Iyul:
//     7;
//     break;
//   case Avgust:
//     8;
//     break;
//   case Sentyabr:
//     9;
//     break;
//   case Oktyabr:
//     10;
//     break;
//   case Noyabr:
//     11;
//     break;
//   case Dekabr:
//     12;
//     break;
//   default:
//     break;
// }
// // ? Kalkulyator
// // 2 ta son va operator (+ - * /)
// // Natijani switch bilan hisobla
// switch ((a, b)) {
//   case kupaytirish:
//     a * b;
//     break;
//   case bulish:
//     a / b;
//     break;
//   case qushish:
//     a + b;
//     break;
//   case ayirish:
//     a - b;
//     break;
//   default:
//     break;
// }
// // ? 🔴 Hard
// // Bahoga qarab izoh
// // "A" → "Excellent"
// // "B" → "Good"
// // "C" → "Average"
// // "F" → "Fail"
// switch (grade) {
//   case "A":
//     "Excellent";
//     break;
//   case "B":
//     "Excellent";
//     break;
//   case "C":
//     "Excellent";
//     break;
//   case "F":
//     "Excellent";
//     break;
//   default:
//     break;
// }
// ? 🟢 3. Ternary operator masalalari
// 🟡 Easy
// Odd or Even (ternary)
// let result = num % 2 === 0 ? "Even" : "Odd";

// Katta yoki kichik
// Son > 100 bo‘lsa "Big", aks holda "Small"
// if (Son > 100) {
//   console.log("Big");
// } else {
//   console.log("Small");
// }
//?  🟠 Medium
// Discount
// Agar summa > 100 bo‘lsa 10% chegirma, aks holda 5%
// if (Son > 100) {
//   console.log(son % 10);
// } else {
//   console.log(son % 5);
// }
// Login status
// isLoggedIn true bo‘lsa "Welcome", aks holda "Please login"
// let isLoggedIn;
// if (isLoggedIn == true) {
//   console.log("Welcome");
// } else {
//   console.log("Small");
// }
// ?🔴 Hard
// Nested ternary

// Ball:

// 90+ → A
// 80+ → B
// aks holda C
// let son;
// let results = 90 >= son === 0 ? "Even" : "Odd";
//? 🔥 BONUS (Real-life challenge)
// Traffic light 🚦
// "red" → "Stop"
// "yellow" → "Ready"
// "green" → "Go"
// Online shop
// Narx:

// 200 → 20% discount

// 100 → 10%

// aks holda → 0%

// ? 💪 Challenge (pro level)
// Number guess logic
// secret number = 7
// user number:
// teng → "Correct"
// katta → "Too high"
// kichik → "Too low"
// TASK: Int to string

// input example
// 6 003 148

// output example
// olti million uch ming bir yuz qirq sakkiz

// tips:
// 1. raqamlarni matnga o'girish uchun switch case ishlating
// 2. 0 uchragan xonalar o'qilmaydi
// 3. birlar o'nlar yuzlar xonasi va har 3 tada o'zgaruvchi ming million milliard va hokazo
// 🧩 Topshiriq: “Oddiy Login Tizimi”
// 🎯 Vazifa:
const prompt = require("prompt-sync")();
// Foydalanuvchidan login va parol so‘rab, to‘g‘ri yoki noto‘g‘ri ekanini tekshiradigan dastur yoz.
let login = prompt("Loginni kiriting:");
let password = prompt("Parolni kiriting:");

// 📌 Talablar:
// 1. Dastur boshida to‘g‘ri login va parolni ber:
const correctLogin = "admin";
const correctPassword = "12345";
// 2. Foydalanuvchidan ma’lumot ol:
// let login = prompt("Loginni kiriting:")
// let password = prompt("Parolni kiriting:")
// 3. Tekshiruv qil:
// 👉 Agar login noto‘g‘ri bo‘lsa:
// Login noto‘g‘ri!
if (login !== correctLogin) {
  console.log("Login not'g'ri");
} else if (password !== correctPassword) {
  console.log("password notog'g'ri");
} else if (password == correctPassword && login == correctLogin) {
  console.log("Xush kelibsiz!");
} else if (login == "" || password == "") {
  console.log("Iltimos, barcha maydonlarni to'ldiring!");
}
// 👉 Agar login to‘g‘ri, lekin parol noto‘g‘ri bo‘lsa:
// Parol noto‘g‘ri!
// 👉 Agar ikkalasi ham to‘g‘ri bo‘lsa:
// Xush kelibsiz!
// 💡 Qo‘shimcha (ozgina qiyinroq qilish uchun):

// 👉 Agar foydalanuvchi hech narsa kiritmasa (""):

// Iltimos, barcha maydonlarni to‘ldiring!
// ⭐️ Bonus:

// 👉 Oxirida shunaqa yoz:

// Dastur tugadi!
// 🔥 Nima o‘rganasan:
// if / else if / else
// bir nechta shartlarni tekshirish
// real hayotdagi login logikasi
