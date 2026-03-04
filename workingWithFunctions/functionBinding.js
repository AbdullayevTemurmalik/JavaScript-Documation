///////////////////////////////////////////////////// bind ///////////////////////////////////////////////////

// Obyekt metodini callback sifatida berganda 'this' yo'qolishi muammosi yuzaga keladi.
// Masalan, setTimeout ichida 'this' obyektga emas, balki 'window'ga teng bo'lib qoladi.

let obj = {
  name: "Temur",
  sayhi() {
    console.log(`Salom ${this.name}`);
  },
};

// Yechim 1: Strelkali funksiya (wrapper) ishlatish
setTimeout(() => obj.sayhi(), 1000);

// Yechim 2: bind metodidan foydalanish
let sayHiFixed = obj.sayhi.bind(obj);
setTimeout(sayHiFixed, 1000); // Salom Temur
