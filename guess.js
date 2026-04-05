const prompt = require("prompt-sync")();
//  *  1 dan 100 gacha son orasidan foydalanuvchi tanlagan sonni aniqlash
// * 13
// * 50 katta
// * 10 kichik
// * 20 katta
// * 15 katta
// * 13 topdiz

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNum = getRandomInt(1, 100); 

// console.log(getRandomInt(1, 100));
let count = 0;
for (let i = 1; i < 100; i++) {
  let FindNum = prompt("son toping: "); 
  count++
  if (FindNum == randomNum) {
    console.log(count, "ta urinishda topdingiz!");
    break;
  }else if (FindNum < randomNum) {
    console.log("kichik son kiritdingiz");
    continue;
  } else if (FindNum > randomNum) {
    console.log("katta son kiritdingiz");
    continue;
  }
}
