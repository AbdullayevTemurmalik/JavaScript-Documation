///////////////////////////////////////////////// Garbage collection ////////////////////////////////////////////////////////

// JavaScript-da xotirani boshqarish avtomatik amalga oshiriladi.
// Asosiy tushuncha — Reachability (erishuvchanlik). Xotirada foydalanish mumkin bo'lgan narsalar saqlanadi.
// Roots (ildizlar) — bular xotiradan o'chirilmaydigan asosiy narsalar (Global variables, ishlayotgan funksiyalar).

let user = { name: "Temur" };
let admin = user; // 'admin' obyektga havola bo'lib turibdi
user = null; // 'user' havolasi o'chdi, lekin obyekt 'admin' orqali hali ham erishuvchan.

// Agar barcha havolalar o'chirilsa, obyekt xotiradan o'chiriladi.
// Asosiy tozalash algoritmi — "mark-and-sweep" (belgilash va supurish) deb ataladi.
