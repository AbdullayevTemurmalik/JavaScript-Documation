////////////////////////////////////////////////// function constructor , new /////////////////////////////////////

// JavaScript-da ba'zan juda ko'p o'xshash obyektlar yaratishimiz kerak bo'ladi.
// Obyektni literal usulda ({}) yaratish bunga yo'l qo'ymaydi, chunki u faqat bitta obyekt yaratadi.
// Shuning uchun bizda "new" kalit so'zi bor, u bir xil turdagi ko'plab obyektlar yaratishga yordam beradi.

// Aslida constructor oddiy funksiya, lekin ikkita asosiy farqi bor:
// 1) Constructor nomi doim katta harf bilan boshlanishi kerak (masalan: MyName).
// 2) Constructor funksiyalari doim "new" bilan ishlatilishi shart.

function SayHi(name) {
  this.name = name; // Bu yerda 'this' funksiyaning o'ziga teng
}
let user = new SayHi("Temur");
console.log(user.name); // Temur

// Funksiyani ham 'new' orqali yaratish mumkin. Bu usul funksiyadan faqat bir marta foydalanishni ta'minlaydi:
let hello = new (function () {
  this.name = "John";
  this.age = 20;
})();
console.log(hello); // {name: 'John', age: 20}

// new.target — funksiya constructor orqali yaratilgan yoki yo'qligini tekshiradi
function Users() {
  console.log(new.target);
}
Users(); // undefined
new Users(); // [Function: Users]

// Constructor-da return ishlatsa bo'ladimi?
// 1. Agar return bilan obyekt qaytarilsa, 'this' o'rniga o'sha obyekt qaytadi.
// 2. Agar return bo'sh bo'lsa yoki primitiv bo'lsa, 'this' qaytadi.
