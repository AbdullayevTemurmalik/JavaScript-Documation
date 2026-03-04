//////////////////////////////////////////////////////// Copying objects /////////////////////////////////////////////

// Primitiv o'zgaruvchilarni (let hi = "hello") nusxalaganda qiymat to'liq ko'chadi.
// Lekin obyektlarda boshqacha: obyektni tenglashtirganda biz faqat unga bo'lgan havolani (link/reference) nusxalaymiz.

let obj = {
  name: "Temur",
  surname: "Qodirov",
};
let dubl = obj; // Havola nusxalandi

obj.name = "John";
console.log(dubl.name); // John (Chunki ikkalasi bitta obyektga qaramoqda)

// Haqiqiy klonlash (nusxa olish) uchun:
// 1-yo'l: for...in tsikli orqali
let obj1 = { name: "Ben", age: 40 };
let es = {};
for (let key in obj1) {
  es[key] = obj1[key];
}

// 2-yo'l: Object.assign() orqali
let ew = { hobby: "Dasturlash", hates: "Movies" };
let clone = Object.assign({}, ew);
clone.hobby = "Chess";
console.log(ew.hobby); // Dasturlash (Asl obyekt o'zgarmadi)

// Obyektlarni solishtirish:
let a = {};
let b = a;
console.log(a == b); // true (Chunki bitta obyekt)
console.log({} == {}); // false (Chunki bular ikki xil xotira maydoni)
