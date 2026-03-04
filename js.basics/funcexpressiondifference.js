// Function expression — bu anonymous (nomsiz) bo'lgan funksiya turi
// anonymous shuni anglatadiki, uning nomi yo'q, masalan: arr.filter((item)=>console.log(item)) — bu anonymous funksiya
// Sintaksisi juda oddiy:
let welcome = function () {
  console.log("hello");
};
welcome();

// callback function — bu boshqa bir funksiyaga argument sifatida beriladigan funksiya turi
function names(question, yes, no) {
  if (false) {
    yes();
  } else {
    no();
  }
}

names(
  "how are you",
  function () {
    console.log("wooooooow");
  },
  function () {
    console.log("why??????????");
  },
);
// Bu yerda "wooooooow" va "why??????" callback function'lar hisoblanadi, chunki ular names funksiyasiga argument sifatida berilgan
// Aytgancha, bu callback funksiyalar ham anonymous funksiyalardir

// Expression'ning Declaration'dan asosiy (yagona) ustunligi:
// Function Declaration o'zi e'lon qilingan kod blokining ichida hamma joyda mavjud bo'ladi.
// Ammo u e'lon qilingan blokdan (masalan, if/else blokidan) tashqarida unga murojaat qilib bo'lmaydi.

let age = 16;

if (age < 18) {
  // Bu yerda welcome() ishlaydi, chunki Declaration shu blok ichida hamma joyda ko'rinadi
  function welcome() {
    console.log("Salom!");
  }
} else {
  function welcome() {
    console.log("Assalomu alaykum!");
  }
}

// welcome(); // Bu yerda Xatolik beradi: welcome is not defined

// Function Expression bilan esa bu muammoni hal qilsa bo'ladi:
let welcomeFunc;
let userAge = 18;

if (userAge < 18) {
  welcomeFunc = function () {
    console.log("Salom!");
  };
} else {
  welcomeFunc = function () {
    console.log("Assalomu alaykum!");
  };
}

welcomeFunc(); // Endi hammasi tartibda va funksiya ishlaydi
