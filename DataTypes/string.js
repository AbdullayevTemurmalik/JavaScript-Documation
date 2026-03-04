////////////////////////////////////////////// Strings /////////////////////////////////////////////////////////////

// JavaScript-da oddiy qo'shtirnoqlar bilan bir necha qatordan iborat matn yaratib bo'lmaydi:
// console.log("w\ne\ne"); // Bu xatolik beradi

// Shu sababli bizda Backticks (qiyshiq qo'shtirnoqlar) bor:
console.log(`
  w
  e
  e`);
// Natija xatosiz chiqadi va qatorlarni saqlab qoladi.

// Agar baribir oddiy qo'shtirnoq ishlatmoqchi bo'lsak, "Special characters" (maxsus belgilar)dan foydalanamiz.

///////////////////////////////////////////////////// \n /////////////////////////////////////////////////////////

// \n belgisi klaviaturadagi "Enter" tugmasi kabi vazifani bajaradi:
let guestList = "Mehmonlar:\n * John\n * Pete\n * Mary";
console.log(guestList);
/* Mehmonlar:
 * John
 * Pete
 * Mary
 */

// Matn elementlarini (harflarni) olishning ikkita yo'li bor:
// 1) [] va index orqali:
let str = "hello";
console.log(str[1]); // e

// 2) str.at(index) metodi orqali:
console.log(str.at(1)); // e

// Farqi:
console.log(str[-1]); // undefined (manfiy indexni [] tanimaydi)
console.log(str.at(-1)); // o (oxirgi harfni topib beradi)

// str.at() xuddi str.slice() kabi ishlaydi, lekin u faqat bitta harfni qaytaradi.

///////////////////////////////////// Matn ichidan qidirish /////////////////////////////////////

// 1) indexOf(substr, pos) — qidirilayotgan qism matnning indexini qaytaradi:
let str1 = "Salom mening ismim Temur";
console.log(str1.indexOf("Salom")); // 0
console.log(str1.indexOf("is")); // 13
console.log(str1.indexOf("xato")); // -1 (agar topilmasa)

let str2 = "Widget with id";
console.log(str2.indexOf("id")); // 1 (chunki "Widget" so'zi ichida "id" bor)
console.log(str2.indexOf("id", 2)); // 12 (2-indexdan keyingi "id"ni qidiradi)

// Bitwise "NOT" operatori (~)
// Bu operator eskilarning "hiylasi" bo'lib, n ni -(n+1) ko'rinishiga o'tkazadi.
// Uni indexOf bilan birga ishlatishgan (hozirda ko'p ishlatilmaydi):
let name = "Temur";
console.log(~name.indexOf("r")); // Agar -1 bo'lsa 0 qaytaradi (ya'ni false)

// Shuningdek, ~~ (double not) sonning kasr qismini olib tashlashda foydali:
console.log(~~3.4); // 3

///////////////////////////////////// Qirqib olish (Slice vs Substring) /////////////////////////////////////

// str.slice(start, end) va str.substring(start, end) deyarli bir xil, lekin:
// Agar start end'dan katta bo'lsa, Substring ularning o'rnini almashtiradi, Slice esa bo'sh matn qaytaradi.

let vc = "vanilla";
console.log(vc.slice(1, 4)); // ani
console.log(vc.substring(1, 4)); // ani

// Farqi:
console.log(vc.slice(4, 1)); // "" (bo'shliq)
console.log(vc.substring(4, 1)); // "ani" (o'rnini almashtirib 1 dan 4 gacha qirqdi)

// Slice manfiy indexlarni qo'llab-quvvatlaydi, Substring esa yo'q:
console.log(vc.slice(-1)); // "a" (oxirgi harf)
console.log(vc.substring(-1)); // "vanilla" (manfiy sonni 0 deb hisoblaydi)

// Xulosa: Hozirgi kunda slice ishlatish afzalroq.

// substr() — bu metod eskirgan (deprecated).
// U (index, nechta element) ko'rinishida ishlaydi:
console.log(vc.substr(2, 4)); // "nill" (2-indexdan boshlab 4 ta harf oldi)

///////////////////////////////////// localeCompare /////////////////////////////////////

// Nega < > belgilaridan foydalanmaymiz?
// Chunki localeCompare turli tillardagi harflarni (masalan, ruscha 'ю' va inglizcha 'a') to'g'ri solishtiradi.
// 0 qaytarsa — teng
// -1 qaytarsa — str1 kichik str2 dan
// 1 qaytarsa — str1 katta str2 dan

let comp1 = "sen";
let comp = "zen";
console.log(comp1.localeCompare(comp)); // -1 (chunki 'z' alifboda 's' dan keyin keladi)

let dd = [1, 2, 3, 4, 5, 6, 7];
dd.splice(5, 1); // 5-indexdagi elementni (6 sonini) o'chirdi
console.log(dd); // [1, 2, 3, 4, 5, 7]
