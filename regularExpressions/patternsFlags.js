/////////////////////////////////////////////// regEx //////////////////////////////////////////////////////////////

// Regular Expressions yaratishning ikkita sintaksisi mavjud:

// 1) Uzun sintaksis (Constructor):
let regexLong = new RegExp("pattern", "flags");

// 2) Qisqa sintaksis (Literal):
let regexShort = /pattern/; // flaglarsiz
let regexWithFlags = /pattern/gim; // g, m va i flaglari bilan

// Slashlar (/) matnlar uchun qo'shtirnoqlar qanday ishlasa, shunday ishlaydi.

// Bu ikki usul o'rtasidagi asosiy farq:
// Literal (/.../) usuli statik hisoblanadi (ya'ni uning ichiga ${} yordamida o'zgaruvchilarni kiritib bo'lmaydi).
// RegExp constructor'i esa dinamik qidiruv yaratishga imkon beradi:

// Masalan:
// let tag = prompt("Qaysi tegni topmoqchisiz?", "h2");
// let regexp = new RegExp(`<${tag}>`); // Agar "h2" deb yozilsa, /<h2>/ bilan bir xil bo'ladi.

////////////////////////////////////////////////// Flags //////////////////////////////////////////////////////////////

// JavaScriptda regEx uchun 7 ta flag mavjud:

// 1) i => Bu flag qidiruvda harf registrini (katta-kichikligini) e'tiborsiz qoldirishga imkon beradi.
// 2) g => Birinchi topilgan natija bilan to'xtab qolmay, barcha mos keladigan natijalarni topadi.
// 3) m => Ko'p qatorli rejim (multiline mode).
// 4) s => "dotall" rejimi, nuqta (.) belgisi yangi qator belgisiga ham mos kelishiga imkon beradi.
// 5) u => Unicode'ni to'liq qo'llab-quvvatlashga imkon beradi.
// 6) v => Unicode uchun qo'shimcha imkoniyatlar (yangi flag).
// 7) y => "Sticky" rejimi, qidiruvni matnning aniq bir pozitsiyasidan boshlashga imkon beradi.
