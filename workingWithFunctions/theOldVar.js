//////////////////////////////////////////////// Var /////////////////////////////////////////////////////////////

// Bir qarashda var xuddi let kabi ishlaydi, biroq ularning o'rtasida bir qancha farqlar bor:

// 1) var kod bloklarini (block scope) e'tiborsiz qoldiradi
let exam = true;
if (exam) {
  var hi = "Salom";
}
console.log(hi); // Salom
// U shunchaki jingalak qavslarni ({}) e'tiborsiz qoldiradi.
// let bilan bunday qilib bo'lmaydi, chunki let blok scope'ga ega.

// Hatto for tsiklida ham var qavslarni e'tiborsiz qoldiradi:
for (var index = 0; index < 10; index++) {
  // ...
}
console.log(index); // 10

// Biroq, agar biz var'ni funksiya ichida ishlatsak, u funksiya uchun mahalliy (local) o'zgaruvchiga aylanadi.
function example() {
  if (exam) {
    var functVar = "Temur";
  }
  console.log(functVar); // Temur
}
example();
// Funksiya ichidagi var'ga tashqaridan kirib bo'lmaydi.

// var'ning bunday o'ziga xos bo'lishiga sabab — o'tmishda Lexical Environment tushunchasi bo'lmaganidir.

// 2) var'ni bir necha marta e'lon qilish mumkin
var user = "Men";
var user = "Ular";
var user = "U (qiz)";
console.log(user); // U (qiz)
// let bilan bunday qilish xatolikka (error) olib keladi.

// 3) var o'zgaruvchisini e'lon qilishdan (declaration) oldin ishlatish mumkin
// Bunday xatti-harakat "hoisting" (ko'tarilish) deb ataladi.
function sayHi() {
  phrase = "salom";
  console.log(phrase);
  var phrase; // salom
}
sayHi();

// Nima uchun bunday?
// Hoisting shuni anglatadiki, yaratilish jarayonida qiymat berilmagan o'zgaruvchilar eng yuqoriga chiqadi va birinchi bo'lib o'qiladi.
// Masalan:
console.log(ok); // undefined
var ok = "taxmin";

// JavaScript buni quyidagicha ko'radi:
// var ok;
// console.log(ok);
// ok = "taxmin";

// let va const ham tepaga ko'tariladi, lekin ular TDZ (Temporal Dead Zone) ichida bo'ladi.
// Bu shuni anglatadiki, let yoki const'ni e'lon qilishdan oldin ishlatish xatolik beradi, var esa shunchaki "undefined" qaytaradi.

// IIFE => Immediately-Invoked Function Expressions
// Bu usul var'ga blok scope berish uchun ishlatiladi (uni chegaralaydi).
(function () {
  var message = "salom";
  console.log(message); // salom
})();

// Funksiyani darhol ishlatish uchun oxiriga () qavslar qo'yiladi.
// Funksiyaning o'zini o'rab turgan qavslar esa bu deklaratsiya emas, balki ifoda (expression) ekanligini bildiradi.

var count = 10;
(function () {
  var count = 5; // Bu boshqa o'zgaruvchi!
  console.log("Inside:", count);
})();
console.log("Outside:", count);
// IIFE ishlatganimiz sababli global o'zgaruvchi o'zgarmadi, chunki u ichki lexical environment'ga ega.
