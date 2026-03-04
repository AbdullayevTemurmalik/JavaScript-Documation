// Sonni darajaga ko'tarish uchun ** operatori ishlatiladi
const num = 5;
console.log(num ** 5); // => 3125

// +=, -=, *= kabi operatorlar o'zgaruvchi qiymatini hisoblab, qayta saqlaydi
let nums = 10;
nums += 15; // nums = 10 + 15 bilan bir xil
console.log(nums); // => 25

// Nolga bo'lish Infinity (cheksizlik) qaytaradi
console.log(1 / 0); // => Infinity

// BigInt yaratish uchun son oxiriga "n" qo'shiladi
console.log(typeof 48348384834902n); // => bigint

// O'zgaruvchini boolean turiga o'tkazish
const sumVal = 20;
console.log(typeof Boolean(sumVal)); // => boolean

// Infinity turi raqam deb hisoblanadi
console.log(typeof Infinity); // => number
