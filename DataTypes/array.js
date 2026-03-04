////////////////////////////////////////////// ARRAYS //////////////////////////////////////////////////////////////

// JS da Array yaratishning ikkita yo'li bor:
// 1) []
// 2) new Array()

// Biz Array ichidagi qiymatni index orqali o'zgartirishimiz mumkin:
let arr = [1, 2, 3, 4, 5];
console.log(arr); // [ 1, 2, 3, 4, 5 ]
arr[2] = 100;
console.log(arr); // [ 1, 2, 100, 4, 5 ]

///////////////////// arr.at
// arr.at xuddi str.at kabi ishlaydi, index bo'yicha elementni topadi.
// Nega biz arr[-1] qila olmaymiz?
// Chunki Arraylar negative indexni qo'llab-quvvatlamaydi.
console.log(arr[-1]); // undefined
console.log(arr.at(-1)); // 5 (oxirgi element)

// Arrayni noto'g'ri ishlatish holatlari:
// 1. Son bo'lmagan property qo'shish, masalan: arr.test = 5.
// 2. "Teshiklar" yaratish, masalan: arr[0] ni qo'shib, keyin arr[1000] ni qo'shish.
// 3. Arrayni teskari tartibda to'ldirish, masalan: arr[1000], arr[999] va hokazo.

// push metodi unshiftga qaraganda tezroq ishlaydi va pushdan foydalanish tavsiya etiladi.
// Biz unshift ishlatganimizda:
// - U elementni topadi va [0]-indexga qo'shadi.
// - Undan keyingi barcha elementlarni bitta indexga surib chiqadi.
// - Va lengthni yangilaydi.
// push esa shunchaki oxirgi bosqichni bajarmaydi.

// Cycles (Tsikllar)
// Biz foydalanishimiz mumkin bo'lgan uchta cycle bor:
// 1) for(let i=0; i<10; i++)
// 2) for of
// 3) for in

// for of cycle elementning indexiga kira olmaydi, faqat value (qiymat) bilan ishlaydi:
let arr3 = ["apple", "map", "guy"];
for (const value of arr3) {
  console.log(value);
}
/*
apple
map
guy
*/

// Texnik jihatdan Array ham Object bo'lgani uchun for in ishlatsa bo'ladi:
for (const key in arr3) {
  console.log(key); // indexlarni chiqaradi
}
/*
0
1
2
*/

for (const key in arr3) {
  console.log(arr3[key]); // valuelarni chiqaradi
}

// Lekin for in bilan muammo bor: u butun Arrayni o'qiydi va ba'zi "array-like" obyektlarda ortiqcha propertylarni ham chiqarib yuborishi mumkin.
// Shuning uchun for in ishlatmagan ma'qul.

// arr.length
// JavaScriptda length elementlarni sanamaydi, balki oxirgi indexga birni qo'shib hisoblaydi.
// Lengthni biz o'zimiz ham o'zgartirishimiz mumkin:

// 1) Lengthni oshirish:
let change = [1, 2, 3, 4, 5, 6];
change.length = 8;
// Endi change shunday bo'ladi => [ 1, 2, 3, 4, 5, 6, empty, empty ]

// 2) Lengthni kamaytirish:
let decrease = [1, 2, 3, 4, 5, 6];
decrease.length = 4;
console.log(decrease); // [ 1, 2, 3, 4 ] - qolgan elementlar o'chib ketadi.

// Arrayni tozalashning eng oson yo'li: arr.length = 0;.

// Array ichidagi Arraylar "multidimensional arrays" deyiladi.

// Array comparison (Solishtirish)
// Ikkita Arrayni solishtirish har doim false beradi:
console.log([0] == [0]); // false

// Primitive bilan solishtirganda:
console.log(Number([])); // 0
// Shuning uchun:
console.log([] == 0); // true
