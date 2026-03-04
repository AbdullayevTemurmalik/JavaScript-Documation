// Switch bir nechta if statement'larning o'rnini bosadi
let guessedNumber = 8;
switch (guessedNumber) {
  case 1: // Agar guessedNumber == 1 bo'lsa
    console.log("more");
    break; // To'xtatish uchun break shart
  case 6:
    console.log("less");
    break;
  case 5:
    console.log("yes");
    break;
  default: // Agar hech biri to'g'ri kelmasa
    console.log("you couldnt guess");
}
// Agar break yozilmasa, case to'g'ri bo'lsa ham kod to'xtamasdan ishlayveradi
