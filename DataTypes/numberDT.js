/////////////////////////////////////////////// Numbers //////////////////////////////////////////////////////////////

// Sonlarni yozishning bir necha yo'li bor:
// 1) Oddiy (normal)
console.log(120000000);

// 2) Syntactic sugar (o'qishga oson ko'rinishi)
console.log(120_000_000); // Pastki chiziqlar o'qishni osonlashtiradi, lekin songa ta'sir qilmaydi

// 3) "e" harfi orqali yozish (eksponenta)
console.log(1e6); // 1000000 (1 dan keyin 6 ta nol)
console.log(6e2); // 600 (6 dan keyin 2 ta nol)

// Juda kichik sonlarni yozish uchun: 0.000002
console.log(2e-6); // 0.000002 (2 dan oldin 6 ta nol bor deb tushuniladi)

// toString(base) / Hex, Binary va Octal sonlar
// toString(base) sonni turli sanoq tizimlariga o'tkazib beradi.
// Ko'p ishlatiladigan sanoq tizimlari:
// 1) base(2) => Binary (ikkilik)
// 2) base(8) => Octal (sakkizlik)
// 3) base(10) => Decimal (o'nlik - odatiy sonlar)
// 4) base(16) => Hex (o'n oltilik)

// Diqqat: metodni to'g'ridan-to'g'ri songa qo'llash uchun ikkita nuqta (..) ishlatiladi
// yoki son qavs ichiga olinadi (20).toString(2)
console.log((20).toString(2)); // 10100
console.log((20).toString(16)); // 14

// toFixed()
// Bu method verguldan keyin nechta raqam qolishini ko'rsatadi:
console.log((2).toFixed(0)); // 2
console.log((2).toFixed(4)); // 2.0000

// Noaniq hisob-kitoblar (Unaccurate solutions)
// JavaScriptda sonlar 64-bitli formatda saqlanadi.
// Agar son juda katta bo'lsa, u Infinity qaytaradi:
console.log(1e500); // Infinity

// Eng mashhur bug (xato) - bu o'nlik kasrlarning noaniqligi:
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 == 0.3); // False

// Buning sababi - kompyuter xotirasida sonlar binary (0, 1) holatda saqlanishi.
// Buni tuzatish uchun toFixed(2) ishlatish mumkin:
let sum = 0.1 + 0.2;
console.log(sum.toFixed(2)); // "0.30"

// isNaN va isFinite
// 1) isNaN — elementni songa aylantiradi va u NaN (son emas) ekanligini tekshiradi.
console.log(isNaN(20)); // False
console.log(isNaN("str")); // True

// Nega NaN === NaN ishlata olmaymiz? Chunki NaN o'z-o'ziga ham teng emas.
console.log(NaN === NaN); // False

// 2) isFinite — element NaN, Infinity yoki -Infinity emasligini tekshiradi.
console.log(isFinite("15")); // True
console.log(isFinite(Infinity)); // False

// Number.isNaN va Number.isFinite
// Bular ancha qat'iyroq ishlaydi.
// Number.isNaN faqat qiymat NaN bo'lsa va turi (typeof) number bo'lsagina true qaytaradi.
console.log(Number.isNaN("str")); // false (chunki turi string)
console.log(isNaN("str")); // true (chunki isNaN avval songa aylantiradi)

// Object.is
// Bu xuddi === (strict comparison) kabi ishlaydi, lekin ikkita holatda kuchliroq:
// 1) NaN va NaN solishtirganda:
console.log(Object.is(NaN, NaN)); // true
// 2) 0 va -0 solishtirganda:
console.log(Object.is(0, -0)); // false

// parseInt va parseFloat
// Ular matn ichidagi sonlarni "sug'urib" oladi:
console.log(parseInt("120px")); // 120 (px ni tashlab ketadi)
console.log(parseFloat("12.5em")); // 12.5

// Agar matn harf bilan boshlansa, NaN qaytaradi:
console.log(parseInt("q123")); // NaN

// parseInt'ning ikkinchi parametri sanoq tizimini belgilaydi:
console.log(parseInt("0xff", 16)); // 255

// i++ va ++i farqi:
// i++ — avval qiymatni qaytaradi, keyin 1 ni qo'shadi.
// ++i — avval 1 ni qo'shadi, keyin yangi qiymatni qaytaradi.
let i = 0;
let a = i++; // a = 0, keyin i = 1 bo'ladi
console.log(a, i); // 0 1

let j = 0;
let b = ++j; // j = 1 bo'ladi, b ham 1 bo'ladi
console.log(b, j); // 1 1
