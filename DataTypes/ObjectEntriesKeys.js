////////////////////////////////////////////// Iterations with object ///////////////////////////////////////////////

// JavaScriptda obyektlarni aylanish (iteratsiya) uchun uchta asosiy method bor:
// 1. Object.keys(obj) — faqat key (kalit)larni qaytaradi
// 2. Object.values(obj) — faqat value (qiymat)larni qaytaradi
// 3. Object.entries(obj) — [key, value] juftliklarini qaytaradi

// Eslatma: Oddiy obyektlarda obj.keys() ko'rinishida chaqirib bo'lmaydi. Nega?
/*
Birinchi sabab:
Moslashuvchanlik (Flexibility). Siz o'zingizning obj.keys() degan shaxsiy mehtodingizni yaratishingiz mumkin, 
lekin baribir Object.keys(obj) metodidan ham parallel foydalana olasiz.

Ikkinchi sabab:
Object.* metodlari bizga haqiqiy Array qaytaradi. Boshqa iterable (aylanuvchi) narsalardan farqli o'laroq, 
Array metodlarini (map, filter) darhol ishlatish mumkin.
*/

let obj = {
  name: "Temur",
  age: 20,
  hobby: "football",
};

// Kalitlarni olib, hammasini katta harfga o'tkazamiz:
console.log(Object.keys(obj).map((item) => item.toUpperCase())); // [ 'NAME', 'AGE', 'HOBBY' ]

let map = new Map();
map.set("name", "Temur");
map.set("age", 20);

let keysOfMap = map.keys(); // [Map Iterator] { 'name', 'age' }
// Map Iterator bilan map() metodini ishlatib bo'lmaydi. Buning uchun uni Arrayga o'tkazish kerak:
console.log([...keysOfMap]); // [ 'name', 'age' ]

// Object.keys/values/entries metodlari Symbol() bilan yaratilgan propertylarni e'tiborsiz qoldiradi (ignore).

// Obyektlar uchun Array metodlarini ishlatmoqchi bo'lsak:
function makeAllCapital(obj) {
  // 1. entries orqali Arrayga o'tkazamiz
  // 2. map orqali hamma narsani katta harf qilamiz
  // 3. fromEntries orqali qaytadan Obyekt yasaymiz
  return Object.fromEntries(
    Object.entries(obj).map((item) =>
      item.map((val) => String(val).toUpperCase()),
    ),
  );
}
console.log(makeAllCapital(obj)); // { NAME: 'TEMUR', AGE: '20', HOBBY: 'FOOTBALL' }

// Oyliklar yig'indisini hisoblash misoli:
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

// 1-yo'l: Object.values va reduce yordamida
let total = Object.values(salaries).reduce((acc, item) => acc + item, 0);
console.log(total); // 650

// 2-yo'l: for...in tsikli orqali
let sum = 0;
for (const key in salaries) {
  sum += salaries[key];
}
console.log(sum); // 650

// Obyekt ichidan faqat sonlarni ajratib olish funksiyasi:
let user = {
  name: "Temur",
  age: 30,
};

function onlyNumbers(obj) {
  let arr = [];
  Object.values(obj).filter((item) =>
    typeof item == "number" ? arr.push(item) : item,
  );
  return arr;
}

console.log(onlyNumbers(user)); // [30]
