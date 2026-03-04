///////////////////////////////////////// Comparison ///////////////////////////////////////////////////////////

// Matnlarni (string) solishtirganimizda ichki kodlash jadvalidan (Unicode) foydalanamiz.
// Ko'rib turganimizdek, alifboda harf qancha pastda bo'lsa, uning indeksi shuncha yuqori bo'ladi:
console.log("z" > "a"); // true

// Shuningdek, katta harflar (uppercase) kichik harflardan (lowercase) kichikroq indeksga ega:
console.log("A" < "a"); // true
console.log("Z" < "a"); // true

// Turli xil tiplarni solishtirish:
// String va number solishtirilganda, string number'ga aylantiriladi:
console.log("2" > 1); // true, chunki 2 raqami 1 dan katta
console.log("002" > 1); // true, chunki "002" son ko'rinishida 2 ga teng

// Agar aylantirilgan string NaN bo'lsa (masalan "abc" yoki "hello"), natija har doim false bo'ladi:
console.log("sam" < 1000); // false
console.log("sam" > 1000); // false

// undefined va null solishtiruvi:
// Strict comparison (===) da natija false:
console.log(undefined === null); // false
// Oddiy (==) solishtirishda esa true:
console.log(undefined == null); // true

// null va nolni (0) solishtirish:
// Oddiy tenglikda natija false:
console.log(null == 0); // false
// Kichik yoki katta solishtirganda ham false:
console.log(null < 0); // false
console.log(null > 0); // false

// Biroq null >= 0 bo'lganda natija true chiqadi:
console.log(null >= 0); // true
// Buning sababi: == va < > >= <= operatorlari turlicha ishlaydi.
// < > >= <= operatorlari null'ni raqamga (0) aylantiradi, lekin == unday qilmaydi.

// undefined va nolni solishtirish:
console.log(undefined > 0); // false
console.log(undefined < 0); // false
// Bu mantiqiy, chunki < > operatorlari undefined'ni NaN'ga aylantiradi. NaN bilan har qanday solishtirish false qaytaradi.
// undefined faqat null bilan solishtirilganda true beradi, boshqa hollarda har doim false.

// "12" < "2" solishtiruvi:
// Ikkala tomon ham string bo'lgani uchun, ular raqamga o'tmaydi va jadvaldagi birinchi belgilar ("1" va "2") bo'yicha solishtiriladi:
console.log("12" < "2"); // true, chunki "1" raqami "2" dan kichik indeksda

// Biroq "12" < 2 bo'lsa, "12" raqamga aylanadi va natija false bo'ladi:
console.log("12" < 2); // false
