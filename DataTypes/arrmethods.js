///////////////////////////////////////////////// Array methods ///////////////////////////////////////////////////////

// Deleting (O'chirish)
// Arraylar aslida Object bo'lgani uchun biz "delete obj.key" usulini qo'llab ko'rishimiz mumkin:
let arr = [1, 2, 3, 4, 5];
delete arr[2];
// Biz [1, 2, 4, 5] bo'lishini kutgan edik
console.log(arr); // [ 1, 2, <1 empty item>, 4, 5 ]
// Ko'rib turganingizdek, o'rin bo'sh qoldi va hatto length ham o'zgarmadi.
// Shuning uchun bizda yaxshiroq yechim bor:

// splice
// U quyidagicha ishlaydi: splice(boshlanish indexi, nechta element, nima bilan almashtirish)
let arr2 = [1, 2, 3, 4, 5];
let res = arr2.splice(1, 2, "hi"); // 1-indexdan boshlab 2 ta elementni o'chir va o'rniga "hi" qo'sh
console.log(arr2); // [ 1, 'hi', 4, 5 ]

// Eslatama: splice original Arrayni o'zgartiradi.
// Agar biz "res"ni konsolga chiqarsak: console.log(res) -> natija [2, 3] bo'ladi, chunki u faqat o'chirilgan qismni oladi.

// Shunchaki element qo'shishimiz ham mumkin:
arr2.splice(1, 0, "i added this as first index");
console.log(arr2); // [ 1, 'i added this as first index', 'hi', 4, 5 ]

// Agar biz slice() ishlatsak, u shunchaki Arraydan nusxa (copy) oladi.

// concat metodida argument sifatida nafaqat Array, balki primitive qiymatlarni ham berishimiz mumkin:
let ar1 = [1, 2];
let ar2 = [3, 4];
console.log(ar1.concat(ar2, 5, 6)); // [ 1, 2, 3, 4, 5, 6 ]

// Map va forEach o'rtasidagi farq
// 1. forEach hech narsa return qilmaydi (natija har doim undefined).
// 2. forEach original Arrayni o'zgartirmaydi va nusxa ham yaratmaydi.

// Map esa o'zgargan elementlardan iborat yangi Array return qiladi, lekin length o'sha-o'sha qoladi.
let example = [1, 2, 3, 4, 5];
console.log(example.forEach((item) => item + 1)); // undefined
console.log(example.map((item) => item + 1)); // [ 2, 3, 4, 5, 6 ], yangi Array qaytdi.

// indexOf / includes
// Sintaksis:
// indexOf(item, from index) -> topilgan elementning indexini qaytaradi.
// includes(item, from index) -> agar topsa true, topmasa false qaytaradi.
let ind = [1, 2, 3, 4, 5, 2];
console.log(ind.indexOf(2)); // 1, birinchi uchragan index
console.log(ind.indexOf(2, 2)); // 5, 2-indexdan keyin qidirib topilgan index

console.log(
  ind.includes(2) ? `Ha, Arrayda 2 raqami bor` : `Yo'q, Arrayda 2 raqami yo'q`,
);

// Lekin indexOf metodida bitta muammo bor: u NaN qiymatini ko'ra olmaydi.
let notanumber = [NaN];
console.log(notanumber.indexOf(NaN)); // -1 (topa olmadi)
console.log(notanumber.includes(NaN)); // true (topdi)

// findIndex sintaksisi find bilan bir xil, lekin u qiymatni emas, o'sha elementning indexini qaytaradi.
let array = [1, 2, 3, 4, 5];
console.log(array.findIndex((item) => item == 3)); // 2 (3 raqami turgan index)

// sort
// Standart holatda sort() elementlarni String (matn) sifatida tartiblaydi:
let arrayd = [46, 5, 39, 5, 721, 83];
console.log(arrayd.sort()); // [ 39, 46, 5, 5, 721, 83 ] -> faqat birinchi raqamlarga qarab tartibladi.
// Masalan: console.log("15" > "95"); // false, chunki "1" raqami "9" dan katta emas.

// Stringlarni (matnlarni) sort qilganda localeCompare ishlatgan ma'qul:
let countries = ["Österreich", "Andorra", "Vietnam"];
console.log(countries.sort((a, b) => (a > b ? 1 : -1))); // Noto'g'ri tartiblash
console.log(countries.sort((a, b) => a.localeCompare(b))); // To'g'ri tartiblash!

// Split metodida ikkinchi argument ham bor, u nechta elementni olish kerakligini ko'rsatadi.

// Array.isArray(arr)
// Bu funksiya biror narsa Array ekanligini tekshirish uchun yordam beradi:
console.log(Array.isArray(["hi", 1])); // true
console.log(Array.isArray({ name: "Samir" })); // false

// Array.from — har qanday narsadan Array yasaydigan metod:
let str = "hello";
console.log(Array.from(str)); // [ 'h', 'e', 'l', 'l', 'o' ]

let obj = {
  name: "Temur",
  age: 20,
};
console.log(Array.from(obj)); // [] - oddiy obyektni to'g'ridan-to'g'ri Array qilib bo'lmaydi.

// Lekin "array-like" (Arrayga o'xshash) obyektlarni o'girsa bo'ladi:
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2,
};
let arrs = Array.from(arrayLike);
console.log(arrs); // [ 'Hello', 'World' ]
