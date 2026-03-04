"use strict";
//////////////////////////////////////////// Object methods ////////////////////////////////////////////////

// Obyekt ichida funksiya yozishning qisqa usuli:
let user = {
  name: "Temur",
  sayHi() {
    // sayHi: function() o'rniga
    console.log("Salom");
  },
};

////////////////////////////////////////////////////// This ///////////////////////////////////////////////////////////

// 'this' — bu o'sha funksiya chaqirilgan obyektga havola beradi.
let user1 = {
  name: "Temur",
  greet() {
    console.log(this.name + " Salom");
  },
};
user1.greet(); // Temur Salom

// Diqqat: Arrow functions (strelkali funksiyalar) o'zining 'this'iga ega emas. Ular tashqi 'this'dan foydalanadi.
