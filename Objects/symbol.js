//////////////////////////////////////////////////// Symbol ///////////////////////////////////////////////////////

// Symbol — bu mutlaqo noyob identifikator. Agar ikkita symbol bir xil nomga ega bo'lsa ham, ular teng emas.
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 == id2); // false

// Symbol obyekt kaliti sifatida ishlatilganda, for...in va Object.keys tomonidan ko'rinmaydi (yashirin qoladi).
let id = Symbol("id");
let user = { [id]: 123, name: "Temur" };

// Global symbollar: Symbol.for("id")
// Agar shu nomli symbol bo'lsa qaytaradi, bo'lmasa yaratadi.
let idAgain = Symbol.for("id");
console.log(Symbol.keyFor(idAgain)); // id
