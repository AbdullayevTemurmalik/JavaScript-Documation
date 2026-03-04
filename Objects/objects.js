////////////////////////////////////////////////// Objects //////////////////////////////////////////////////////////

// Obyekt yaratishning ikki yo'li:
let obj = new Object(); // constructor usuli
let obj1 = {}; // literal usuli

// Elementni o'chirish:
let exampleobj = { name: "Temur", age: 20 };
delete exampleobj.age; // age o'chirildi

// Agar kalit (key) bir nechta so'zdan iborat bo'lsa, "" qo'shtirnoq ishlatiladi:
let obj2 = {
  "Favourite activity": "football",
};
// Bunday kalitlarni nuqta bilan chaqirib bo'lmaydi, [] qavs kerak:
console.log(obj2["Favourite activity"]); // football

// O'zgaruvchini kalit sifatida ishlatish (computed properties):
let fruit = "apple";
let bag = { [fruit]: 5 }; // bag.apple = 5 bo'ladi

// Qisqartma (Shorthand):
function makeUser(name, age) {
  return { name, age }; // name: name o'rniga shunchaki name
}

// "in" operatori — kalit borligini tekshiradi:
let user = { age: 30 };
console.log("age" in user); // true

// for...in tsikli — obyektning barcha kalitlarini aylanish uchun:
for (let key in user) {
  console.log(key + ": " + user[key]);
}
