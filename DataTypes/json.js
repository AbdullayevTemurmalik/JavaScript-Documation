////////////////////////////////////////////////// Json //////////////////////////////////////////////////////////////

// Bizga JSON ma'lumotlarimizni backendga yuborish yoki u yerdan ma'lumot olish uchun kerak.
// Aslida biz toString methodidan foydalansak ham bo'lar edi:
let user = {
  name: "Temur",
  age: 30,

  toString() {
    return `{name: "${this.name}", age: ${this.age}}`;
  },
};

console.log(user);
// Lekin qiymatlar doim o'zgarib turgani uchun, toString funksiyasini ham qo'lda (manually) o'zgartirib turish kerak bo'ladi.
// Shu muammoning oldini olish uchun JSON formati yaratilgan.

// JSON.stringify()
// Bu method obyektni JSON string (matn) holatiga o'tkazadi.
let person = {
  name: "Temur",
  age: 20,
  "plays football": true,
  opinion: null,
};
console.log(JSON.stringify(person)); // {"name":"Temur","age":20,"plays football":true,"opinion":null}

// Eslatma: JSON doim qo'shtirnoq "" ishlatadi, hatto key (kalit)lar uchun ham.
// Biz primitive qiymatlarni ham stringify qilishimiz mumkin.

/*
JSON quyidagi data typelarni qo'llab-quvvatlaydi:
- Objects { ... }
- Arrays [ ... ]
- Primitives: strings, numbers, booleans (true/false), null.
*/

console.log(JSON.stringify(1)); // 1
console.log(JSON.stringify("test")); // "test"
console.log(JSON.stringify(true)); // true
console.log(JSON.stringify([1, 2, 3])); // [1,2,3]

// Ba'zi obyekt xususiyatlari (property) JSON tomonidan tashlab ketiladi (ignore qilinadi):
// 1. Funksiyalar (metodlar)
// 2. Symbol'lar
// 3. undefined qiymatga ega xususiyatlar

let user1 = {
  sayHi() {
    // O'chirib yuboriladi
    console.log("Hello");
  },
  [Symbol("id")]: 123, // O'chirib yuboriladi
  something: undefined, // O'chirib yuboriladi
};

console.log(JSON.stringify(user1)); // {} (bo'sh obyekt qaytadi)

// Circular references (aylanma havolalar) JSON tomonidan qo'llab-quvvatlanmaydi.
// Circular reference — bu obyekt o'z-o'ziga havola berib, cheksiz takrorlanish hosil qilishi.
// Masalan: "A nima? B dan so'ra. B nima? A dan so'ra."
// let ref = {}; ref.self = ref;
// console.log(JSON.stringify(ref)); // Xatolik (Error) beradi

// To'liq sintaksis quyidagicha:
// let json = JSON.stringify(value[, replacer, space])

/////////////////////////////////////////////// JSON.parse ////////////////////////////////////////////////////////////

// Sintaksis: let value = JSON.parse(str[, reviver]);
// Biz JSON.parse dan string (matn) holatidagi ma'lumotni qaytadan oddiy obyekt yoki arrayga aylantirish (decode) uchun foydalanamiz.

let numbers = "[1, 2, 3]";
console.log(JSON.parse(numbers)); // [1, 2, 3] (Endi bu oddiy Array)

// JSON ichida commentlar (izohlar) yozish mumkin emas.

// Binary (ikkilik sanoq tizimi) haqida kichik misol:
let df = (20).toString(2); // 20 sonini ikkilik tizimga o'tkazish
console.log(df + (10).toString(2)); // Matnlarni biriktirish (String concatenation)
