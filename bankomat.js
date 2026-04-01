const prompt = require("prompt-sync")();

console.log("Assalomu aleykum, uzum bankiga xush kelibsiz!");

const accounts = {
  "9860 0705 1232 7737": {
    pin: "3313",
    balance: 500,
    holder: "Sevara",
  },
  "9860 0705 4433 7737": {
    pin: "3232",
    balance: 200,
    holder: "Ibrohim",
  },
};

let current_account;

console.log("Xizmatdan foydalanish uchun karta raqamingizni kiriting!");

while (true) {
  const user_card = prompt("Karta raqami: ");

  if (user_card == "exit") {
    console.log("Bizning xizmatimizdan foydalanganingiz uchun tashakkur!");

    return;
  }

  if (Object.keys(accounts).includes(user_card)) {
    current_account = accounts[user_card];

    let attempt = 0;

    while (true) {
      const user_pin = prompt("PIN: ");

      if (user_pin == "exit") {
        console.log("Bizning xizmatimizdan foydalanganingiz uchun tashakkur!");

        return;
      }

      if (user_pin == current_account.pin) {
        while (true) {
          console.clear();
          console.log(current_account.holder);
          console.log("Quyidagi menyularni tanlang:");
          console.log("1. Xisobni ko'rish");
          console.log("2. Chiqish");

          const input = prompt("> ");

          if (input == "exit") {
            console.log(
              "Bizning xizmatimizdan foydalanganingiz uchun tashakkur!"
            );

            return;
          }

          if (input == "1") {
            console.log(current_account.balance + "$");
          } else if (input == "2") {
            console.log("Hisobdan chiqildi!");
            break;
          } else {
            console.log("Noma'lum buyruq!");
          }

          prompt("Davom etish uchun enterni bosing!");
        }

        break; //? nima uchun bu break
      } else if (user_pin == "") {
        continue;
      } else {
        attempt++;
        console.log("PIN noto'g'ri, qaytadan urinib ko'ring");
      }

      if (attempt > 2) {
        console.log("Kartangiz bloklandi, keyinroq urinib ko'ring!");
        break;
      }
    }
  } else {
    console.log("Bunday karta mavjud emas! Qaytadan urinib ko'ring!");
  }
}
