// /////////////////////////////////////// Numbers /////////////////////////////////////////////////////////////////

// Sonni biror darajaga ko'tarish uchun ** operatoridan foydalanishimiz mumkin
const num = 5;
console.log(num ** 5); // => 3125

// O'zgaruvchiga qiymat qo'shish va uni birdaniga o'zgartirish uchun +=, -=, *= kabi qisqartmalardan foydalanamiz
let nums = 10;
console.log((nums += 15)); // => 25, chunki nums = 10 + 15 va natija yana nums'ga tenglanadi

let num2 = 10;
console.log((num2 = num2 + 15)); // Yuqoridagi bilan bir xil, lekin uzunroq yozilishi

// JavaScriptda sonni nolga bo'lish xatolik bermaydi, balki Infinity (cheksizlik) qaytaradi
console.log(1 / 0); // => Infinity

// JavaScriptda har qanday + - * kabi amallar xatolik qaytarmaydi, eng yomon holatda NaN natijasini beradi

// BigInt (juda katta son) yaratish uchun sonning oxiriga n harfini qo'shamiz
console.log(typeof 48348384834902n); // => bigint

// O'zgaruvchini boolean (mantiqiy) turga o'tkazish uchun Boolean() funksiyasidan foydalaniladi
const sumVal = 20;
console.log(typeof sumVal); // => number
console.log(typeof Boolean(sumVal)); // => boolean

// Infinity turini tekshirsak, u number bo'lib chiqadi
console.log(typeof Infinity); // => number
