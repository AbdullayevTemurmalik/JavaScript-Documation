///////////////////////////////////////////// Destructure ///////////////////////////////////////////////////////////

// Destructure — bu Array yoki Object ichidagi narsalarni ochib (unpack), alohida o'zgaruvchilarga olish usuli.
// Bu bizga butun bir Array yoki Object emas, balki uning ichidagi ba'zi elementlar kerak bo'lganda juda asqotadi.
const arr = [1, 2, 3];
const [one, two, three] = arr;
// Bu yerda one == arr[0], two == arr[1], three == arr[2]
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3

// Stringni ham destructure qilsa bo'ladi:
let str = "hello bro";
const [h, e] = str;
console.log(h); // h

// Aslida biz buni shunday qilsak ham bo'lar edi:
// let firstNames = arr[0];
// let surname = arr[1];
// Lekin bu usul ko'p joy oladi va chiroyli ko'rinmaydi.

// Elementni tashlab ketish (skip) uchun shunchaki vergul (,) qo'shiladi:
let destArr = ["Temur", "Mad", "Good", "Well"];
const [firstName, , thirdname] = destArr;
// Endi firstName => destArr[0], destArr[1] esa tashlab ketildi, thirdname => destArr[2]
console.log(firstName); // Temur
console.log(thirdname); // Good

// Chap tomonda nafaqat o'zgaruvchilar, balki deyarli hamma narsa bo'lishi mumkin:
let user = {};
[user.name, user.surname] = "Ilya Kantor".split(" ");
console.log(user); // { name: 'Ilya', surname: 'Kantor' }

let user1 = {};
[user1.name, user1.age] = ["Temur", 20];
console.log(user1); // { name: 'Temur', age: 20 }

// Destructure'ni loop'lar ichida ham ishlatsa bo'ladi, ayniqsa Object.entries bilan:
let objj = {
  name: "Temur",
};
for (const [key, value] of Object.entries(objj)) {
  console.log(`my ${key} is ${value}`);
} // my name is Temur

// Map bilan ishlash yanada osonroq:
let map = new Map();
map.set("name", "Temur");
map.set("age", 20);
for (const [key, value] of map) {
  console.log(key, value);
}

// Ikkita o'zgaruvchi qiymatini bir-biri bilan almashtirish (swapping):
let guest = "Jane";
let admin = "Pete";
[guest, admin] = [admin, guest]; // Qiymatlar almashdi
console.log(`${guest} ${admin}`); // Pete Jane

//////////////////////////////////////////// The rest "..." ///////////////////////////////////////////////////////

// Agar Array juda uzun bo'lsa va qolgan hamma narsani bir joyga saqlash kerak bo'lsa "..." (rest) ishlatiladi:
let tooLongArray = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
const [name1, name2, ...rest] = tooLongArray;
// rest qolgan barcha elementlarni to'plab oladi
console.log(rest); // [ 'Consul', 'of the Roman Republic' ]

///////////////////////////////////////////// Default values ////////////////////////////////////////////////////////

// Agar Arraydagi qiymatlar kam bo'lsa, o'zgaruvchi undefined bo'lib qoladi:
let arr2 = ["Mike"];
const [arr2name, arr2age] = arr2;
console.log(arr2age); // undefined

// Buning oldini olish uchun default value (standart qiymat) berish mumkin:
const [defname = "guest", defage = "age is not given"] = arr2;
console.log(defage); // age is not given (chunki Arrayda yosh berilmagan)

///////////////////////////////////////// Destructuring objects //////////////////////////////////////////////////////

// Diqqat: Objectlarni destructure qilishda {} (jingalak qavs) ishlatiladi:
let options = {
  title: "Menu",
  width: 100,
  height: 200,
  place: "Namangan",
};

let { width, height, title, plc } = options;
console.log(title); // Menu
// Diqqat: O'zgaruvchi nomi Object key'i bilan bir xil bo'lishi kerak. Tartibi muhim emas.

// Agar o'zgaruvchi nomini boshqacha qo'ymoqchi bo'lsak:
let hobby = {
  hobby1: "football",
  hobby2: "chess",
};
let { hobby1: f, hobby2: c } = hobby;
console.log(f); // football (f o'zgaruvchisi hobby1 qiymatini oldi)

/////////////////////////////////////////////// the rest "..." in objects /////////////////////////////////////////////

let obj10 = {
  name: "Mat",
  surname: "Edinson",
  age: 10,
};
const { age: howOld, ...rest1 } = obj10;
console.log(rest1); // { name: 'Mat', surname: 'Edinson' }

//////////////////////////////////////////////////// Nested destructure /////////////////////////////////////////////

let options1 = {
  size: { width: 100, height: 200 },
  items: ["Cake", "Donut"],
};

let {
  size: { width: w, height: h1 }, // Ichma-ich (nested) ochish
  items: [it1, it2],
} = options1;

/////////////////////////////////// Smart function parameters ////////////////////////////////////////////////////////

// 1) Eski (iflos) usul:
function showMenuOld(title = "Untitled", width = 200, items = []) {}
showMenuOld("My Menu", undefined, ["Item1"]); // Argumentlar tartibi va undefined yozish noqulay

// 2) Toza (clear) usul:
let options3 = {
  title: "My menu",
  items: ["Item1", "Item2"],
};

function showMenu({
  title = "Untitled",
  width = 200,
  height = 100,
  items = [],
}) {
  console.log(`${title} ${width} ${height}`); // O'zgaruvchilar to'g'ridan-to'g'ri ishlatiladi
}
showMenu(options3);
