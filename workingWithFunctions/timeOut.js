// Biror ishni ma'lum vaqtdan keyin bajarish uchun biz scheduling (rejalashtirish) - setTimeout va setInterval'dan foydalanamiz

///////////////////////////////////////////////////// setTimeout ///////////////////////////////////////////////////////

// setTimeout ishlatishning ikkita yo'li bor:
// 1)
function sayHi() {
  console.log("hi");
}
setTimeout(sayHi, 5000); // 5 soniyadan keyin "hi" chiqadi (5000ms == 5s)

// 2)
setTimeout(() => {
  console.log("hi");
}, 5000); // 5 soniyadan keyin "hi" chiqadi

// Shuningdek, uni yangi funksiya kabi (string formatida) ishlatish ham mumkin:
// setTimeout('console.log("string ichida")', 5000)
// Lekin bunday qilish yomon g'oya hisoblanadi

// Argumentlar bilan ko'rinishi:
function sayHiAgain(name, age) {
  console.log(`hi yana ${name} va ${age}`);
}
setTimeout(sayHiAgain, 5000, "Temur", 20); // hi yana Temur va 20

// Arrow function'lardan foydalanish afzalroqdir
let hello = setTimeout(
  (name) => {
    console.log("heeee " + name);
  },
  5000,
  "Temur",
); // heeee Temur

/////////////////////////////////////////////////// clearTimeout //////////////////////////////////////////////////////

if (Math.random() < 0.5) {
  console.log("muvaffaqiyatli");
} else {
  console.log("muvaffaqiyatsiz");
  clearTimeout(hello); // Taymerni bekor qilish
}

//////////////////////////////////////////////////// setInterval ///////////////////////////////////////////////////////

// Biz to'xtatmagunimizcha biror ishni cheksiz takrorlaydi
let sec = 5000;
let saved = setInterval(
  (time) => {
    console.log(`bu har ${time} ms'da chiqib turadi`);
  },
  sec,
  sec,
);

setTimeout(() => {
  clearInterval(saved); // Intervalni to'xtatish
}, 10000);

// Eslatma: setTimeout va setInterval'ni o'zgaruvchiga o'rab, funksiya kabi ishga tushirish (variable()) shart emas, ular yozilishi bilanoq avtomatik ishlaydi

///////////////////////////////////////////////////// nested setTimeout /////////////////////////////////////////////

// Biror narsani muntazam ravishda ishga tushirishning ikki yo'li bor: setInterval va nested setTimeout (rekursiv setTimeout)
// Va rekursiv setTimeout ishlatish bir qancha sabablarga ko'ra yaxshiroq bo'lishi mumkin

// Misollar:
let exam1 = setInterval(() => {
  console.log("Hello world");
}, 2000);

let exam2;
function run() {
  console.log("hello");
  exam2 = setTimeout(run, 2000); // Funksiya tugagach, o'zini qayta chaqiradi
}
exam2 = setTimeout(run, 2000);

// Nima uchun rekursiv setTimeout yaxshiroq?
// setInterval shunchaki: "ma'lum vaqtdan keyin ishni bajar" deydi. Agar funksiyaning o'zi uzoq vaqt ishlasa, setInterval kutib turmaydi va yangi funksiyani ham qo'shib yuboradi. Natijada xatoliklar yoki kutilmagan vaqt oralig'i yuzaga kelishi mumkin.
// Rekursiv setTimeout esa funksiya to'liq tugashini kutadi va shundan keyingina keyingi taymerni boshlaydi.

///////////////////////////////////////// garbage collection ////////////////// : 14]

// setTimeout va setInterval ichidagi funksiyalar "scheduler"ga yuboriladi. Scheduler — bu ichki mexanizm bo'lib, u funksiyaga bo'lgan havolani (link) ushlab turadi va vaqti kelmaguncha uni garbage collector'ga (xotirani tozalovchi) bermaydi.
// Bu ba'zida xotira bilan bog'liq muammolarga olib kelishi mumkin (memory leak), chunki funksiya tashqi muhitdagi katta obyektlarni ushlab qoladi. Buni oldini olish uchun rejalashtirilgan funksiyalar ichida faqat kerakli kichik qismlardan foydalanish va kerak bo'lmaganda intervalni har doim tozalash (clear) lozim.

/////////////////////////////////////////////// setTimeout no delay ////////////////////////////////////////////////

// Hatto kechikish 0ms qilib belgilansa ham, u oddiy koddan keyin konsolga chiqadi, chunki JS bu vaqt ichida navbatni tekshiradi

setTimeout(() => console.log("exam is coming"));
console.log("bu birinchi bo'lib chiqadi"); // Avval oddiy kod, keyin 0ms taymer ishlaydi
