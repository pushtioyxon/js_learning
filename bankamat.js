const prompt = require("prompt-sync")();

console.log("Assalomu aleykum, NBU bankiga xush kelibsiz!!");

const accounts = {
  "9860 1224 5652 1515": {
    pin: "1204",
    balance: "500$ ",
    holder: "sevara",
  },
  "9860 1334 5652 1513": {
    pin: "1204",
    balance: "500$ ",
    holder: "Muxriddin",
  },
};
let current_account;

console.log("Xizmatdan foydalamish uchu karta raqamingizni kiriting: ");

while (true) {
  const user_card = prompt("karta raqami: ");
  if (user_card == "exit") {
    console.log("Bizning xixmatdan foydalanganingiz uchun tashakkur!");
    return;
  }

  if (Object.keys(accounts).includes(user_card)) {
    current_account = accounts[user_card];

    let attempt = 0;

    while (true) {
      const user_pin = prompt("PIN: ");

      if (user_pin == "exit") {
        console.log("Bizning xixmatdan foydalanganingiz uchun tashakkur!");

        return;
      }
      if (user_pin == current_account.pin) {
        while (true) {
          console.clear();
          console.log(current_account.holder);
          console.log("Quyidagi menyulardan birini tanlang");
          console.log("1.Hisobni ko'rish");
          console.log("2.Chiqish");

          const input = prompt("> ");

          if (input == "exit") {
            console.log("Bizning xizmatdan foydalanganingiz uchun tashakkur!");
            return;
          }
          if (input == "1") {
            console.log(current_account.balance);
          } else if (input == 2) {
            console.log("Hisobdan chiqish");
            break;
          } else {
            console.log("Noma'lum buyruq");
          }
          prompt("Davom etish uchun enterni bosing");
        }
        // break;
      } else if (user_pin == "") {
        continue;
      } else {
        attempt++;
        console.log("Pin notogri , qaytadan urinib kuring");
      }
      if (attempt > 2) {
        console.log("Krtangiz bloklandi, keyinroq urinib kuring");
        break;
      }
    }
  } else {
    console.log("Bunday karta mavjud emas! Qaytadan urinib kuring");
  }
}
