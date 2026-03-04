////////////////////////////////////////// WeakMap va WeakSet //////////////////////////////////////////

// Biz bilamizki, JavaScript-da obyekt reacheable (unga murojaat qilish imkoni bor) bo'lsa, xotirada saqlanadi.
let john = { name: "Temur" };
// Obyekt mavjud, john o'zgaruvchisi unga havola (reference) bo'lib turibdi.

john = null;
// Havola o'chirildi, endi obyekt Garbage Collector (Axlat yig'uvchi) tomonidan xotiradan o'chiriladi.

let john1 = { name: "Temur" };
let array = [john1];

john1 = null;
// Obyekt john1 o'zgaruvchisi orqali o'chirilsa ham, u array[0] ichida saqlanib qoladi.
// Shuningdek, Map ichida ham obyekt null qilinsa, u baribir Map xotirasida yashashda davom etaveradi.

// WeakMap'ning Map'dan asosiy farqlari:

// 1. Key (kalit) har doim Obyekt bo'lishi shart.
let weakmap = new WeakMap();
let map = new Map();

map.set("age", 10); // To'g'ri (primitive key)
weakmap.set({}, "hello"); // To'g'ri (object key)

// weakmap.set("age", 20); // Xatolik (Error), chunki "age" string (primitive)

// 2. Tashqarida obyektga havola qolmasa, u WeakMap ichidan ham avtomatik o'chib ketadi.
let john2 = { name: "Temur" };
let weakMapEx = new WeakMap();
weakMapEx.set(john2, "maxfiy ma'lumotlar");

john2 = null;
// Obyekt john2 xotiradan butunlay o'chirildi! WeakMap ichida ham u endi yo'q.
// Map bo'lganda edi, obyektni saqlab qolgan bo'lardi va xotira to'lib borardi.

// 3. Iteratsiya (aylanish) metodlari yo'q.
// WeakMap-da keys(), values(), entries() va size ishlamaydi.
// Unda faqat quyidagi metodlar bor:
/*
  weakMap.get(key)
  weakMap.set(key, value)
  weakMap.delete(key)
  weakMap.has(key)
*/

// Nega bunday? Chunki JavaScript dvigateli obyektni qachon o'chirishni o'zi hal qiladi (darhol yoki keyinroq).
// Shuning uchun WeakMap ichida nechta element borligini va ular qayerdaligini aniq bilib bo'lmaydi.

// Nega WeakMap kerak?
// Agar biz boshqa birovning kodi yoki kutubxonasi (library) bilan ishlayotgan bo'lsak, u yerdagi obyektlarga qo'shimcha ma'lumot biriktirish uchun kerak.
// Agar u obyekt o'chib ketsa, biz biriktirgan ma'lumot ham o'chadi va xotirani axlatga (litter) to'ldirmaydi.

// weakMap.set(temur, "maxfiy hujjatlar");
// Agar temur o'chsa (null bo'lsa), "maxfiy hujjatlar" ham avtomatik yo'q qilinadi.

//////////////////////////////////////////// new WeakSet ////////////////////////////////////////////////

// WeakSet ham Set'ga o'xshaydi, lekin:
// - Faqat obyektlarni saqlaydi (primitive mumkin emas).
// - entries, keys va size metodlari yo'q.
// - Faqat "ha/yo'q" (bor/yo'q) kabi tekshiruvlar uchun ishlatiladi.

let visitedSet = new WeakSet();

let john4 = { name: "Temur" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john4); // Temur keldi
visitedSet.add(pete); // Keyin Pete keldi
visitedSet.add(john4); // Temur yana keldi (lekin faqat bir marta saqlanadi)

// Temur kelganini tekshiramiz:
console.log(visitedSet.has(john4)); // true

// Mary kelganini tekshiramiz:
console.log(visitedSet.has(mary)); // false

john4 = null;
// visitedSet avtomatik ravishably tozalanadi, john4 obyekti xotiradan va set ichidan o'chadi.
