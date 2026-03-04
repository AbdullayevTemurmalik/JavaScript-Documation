///////////////////////////////////////////////// new Function ///////////////////////////////////////////////////////

// Yangi funksiya yaratishning bir usuli bor, u kamdan-kam qo'llaniladi:
let func = new Function("a", "b", "return a + b");
console.log(func(10, 20)); // 30

// Argumentlarsiz funksiya namunasi:
let show = new Function('console.log("Hello")');
show(); // hello

// Closure (Yopilish)
// Funksiyaning boshqa turlaridan farqli o'laroq, new Function o'zining tashqi lexical environment'iga kira olmaydi, faqat global muhitga kira oladi.

/*
function doesntHaveTheAccess() {
  let value = "hello"
  let func = new Function(`console.log(value)`)
  return func
}
let returned = doesntHaveTheAccess()
returned() // xatolik (error)
*/

globalThis.value = "hi";
function doesntHaveTheAccess() {
  let func1 = new Function("console.log(value)");
  return func1;
}
let returned = doesntHaveTheAccess();
returned(); // hi

// Node.js'da har bir fayl modul hisoblanadi va u global lexical environment'ga ega emas, bu fayl ichidagi hamma narsa mahalliy (local).
// Biz o'zgaruvchini "globalThis.value = 'hi'" deb yozish orqali qo'lda global muhitga joylashtiramiz va new Function faqat global muhitga kira oladi.

// Ishlatilishi (Usage):
// Tasavvur qilaylik, biz serverdan string ko'rinishidagi funksiyani qabul qildik:
let serverCode = `
  if (price > 100) {
    return price * 0.9; // 10% chegirma
  } else {
    return price;
  }
`;

// Undan foydalanish uchun bizga new Function kerak bo'ladi:
let makeFunctionWork = new Function("price", serverCode);
console.log(makeFunctionWork(10)); // 10
console.log(makeFunctionWork(542)); // 487.8

// new Function dinamik bo'lishi mumkin, ya'ni u kelayotgan funksiya nima qilishini aniq bilmasa ham ishlay oladi.
// Oddiy funksiyalar har doim o'ziga yozilgan kodni bajaradi, ammo new Function "moslashuvchan" bo'la oladi.

// Minifier haqida:
// Minifier — bu kodni sharhlar va bo'shliqlarni olib tashlash orqali qisqartiradigan dastur.
// Eng muhimi, u mahalliy o'zgaruvchilar uchun qisqa nomlar beradi (masalan, "let hello" o'rniga "let a").

// Agar new Function tashqi muhitga (outer environment) kirish imkoniga ega bo'lganda nima bo'lardi?
/*
function makeFunc() {
  let userName = "Temur";
  return new Function('console.log(userName)');
}
makeFunc()();
*/
// Bu misolda minifier "let userName = 'Temur';" qismini "let a = 'Temur';" ga o'zgartirgan bo'lardi.
// Oddiy funksiyalarda bu o'zgaruvchi ishlatilgan hamma joyda o'zgaradi, lekin new Function ichida kod string (matn) ko'rinishida yozilgani uchun minifier unga tegmaydi va o'zgaruvchi nomi string ichida o'zgarishsiz qolib ketadi.
// Natijada o'zgaruvchi nomi o'zgargani uchun string ichidagi eski nom "undefined" bo'lib qoladi.
