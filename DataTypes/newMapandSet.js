//////////////////////////////////////////////// new Map //////////////////////////////////////////////////////////////

// Map — bu oddiy Object'ga o'xshaydi, lekin uning asosiy farqi: istalgan turdagi (type) key ishlatish mumkin.
// Yangi Map yaratishning faqat bitta yo'li bor — bu constructor orqali:
let objMap = new Map();
console.log(objMap); // Map(0) {}

// Methodlar:
// Map.set(key, value) — qiymat saqlash
objMap.set(true, "Temur");
objMap.set("age", 20);
console.log(objMap); // Map(2) { true => 'Temur', 'age' => 20 }

// Map.get(key) — key orqali qiymatni olish. Agar topilmasa undefined qaytaradi
console.log(objMap.get(true)); // Temur
console.log(objMap.get("hobby")); // undefined

// Map.has(key) — key mavjud bo'lsa true, bo'lmasa false qaytaradi
console.log(objMap.has("age")); // true

// Map.delete(key) — key va uning qiymatini o'chirib tashlaydi
objMap.delete("age");

// Map.size — ichidagi elementlar sonini ko'rsatadi
console.log(objMap.size); // 1

// Map.clear() — Map'ni butunlay tozalaydi
objMap.clear();

// Diqqat: map[key] = "hi" deb ishlatish mumkin, lekin bu xato usul. Chunki bunda Map oddiy Object'ga aylanib qoladi.

// Map'da Object'ni ham key sifatida ishlatish mumkin:
let temur = { name: "Temur" };
let visitsCountMap = new Map();
visitsCountMap.set(temur, 123);
console.log(visitsCountMap); // Map(1) { { name: 'Temur' } => 123 }

// Key'larni solishtirishda Object.is() ga o'xshash usuldan foydalaniladi (NaN === NaN bunda true beradi).
// Chain (zanjir) ko'rinishida yozish ham mumkin:
// map.set("1", "str1").set(1, "num1").set(true, "bool1");

// Map Iterations (Aylanish)
let ite = new Map([
  ["bodring", 500],
  ["pomidor", 350],
  ["piyoz", 50],
]);

// map.keys() — faqat key'larni qaytaradi
for (let ent of ite.keys()) {
  console.log(`key: ${ent}`);
}

// map.values() — faqat value'larni qaytaradi
for (let ent of ite.values()) {
  console.log(`value: ${ent}`);
}

// map.entries() — ham key, ham value'ni qaytaradi (default holatda shunday ishlaydi)
for (const ent of ite) {
  console.log(ent); // [key, value] ko'rinishida
}

// Obyektdan Map yasash (Object to Map)
// Object.entries yordamida oddiy obyektni Map'ga o'tkazamiz:
let obj = { name: "Temur", age: 20 };
let mapFromObj = new Map(Object.entries(obj));

// Map'dan Obyekt yasash (Map to Object)
// Object.fromEntries yordamida Map'ni qaytadan obyektga aylantiramiz:
let readyObj = Object.fromEntries(mapFromObj.entries());
console.log(readyObj); // { name: 'Temur', age: 20 }

//////////////////////////////////////////// new Set ////////////////////////////////////////////////////////////////

// new Set — bu faqat qiymatlardan (value) iborat to'plam. Eng muhimi, qiymatlar takrorlanmas (unique) bo'lishi kerak.
let set = new Set();
set.add("Temur");
set.add(28);
set.add(28); // Ikkinchi marta 28 qo'shilmaydi
console.log(set); // Set(2) { 'Temur', 28 }

// Methodlar:
// set.delete(value) — qiymatni o'chiradi
// set.has(value) — qiymat borligini tekshiradi
// set.size — elementlar soni
// set.clear() — hammasini o'chirish

// Set Iterations
let set1 = new Set(["apelsin", "olma", "banan"]);

for (let value of set1) console.log(value);

// Set'da ham keys(), values() va entries() bor, lekin ular Map bilan moslashuvchanlik (compatibility) uchun yaratilgan.
// set.keys() va set.values() bir xil narsa qaytaradi.

// Array'dan takrorlangan elementlarni olib tashlash uchun ajoyib usul:
function unique(arr) {
  return [...new Set(arr)]; // ... yordamida Set'ni qaytadan Arrayga o'tkazamiz
}

let values = ["Temur", "Ali", "Temur", "Ali", "Vali"];
console.log(unique(values)); // [ 'Temur', 'Ali', 'Vali' ]
