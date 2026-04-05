let password = "0000";
const prompt = require("prompt-sync")();
let counter = 5; //3
while (counter !== 0) {
  let EnterPass = prompt("Enter the password, please!"); //6
  //   i=2
  if (password == EnterPass) {
    console.log("Welcome to our site");
    break;
  } else if (EnterPass.length < 4) {
    console.log("password kamida 4 ta pin bulsin");
    // counter++
  } else {
    counter--; //1
    if (counter == 0) {
      console.log("Bloklandingiz keyinroq urinib kuring!");
      break;
    }
    console.log("xato pin kiritdingiz", counter, "ta urinish qoldi");
  }
}
