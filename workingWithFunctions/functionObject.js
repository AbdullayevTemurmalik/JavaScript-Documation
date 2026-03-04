/////////////////////////////////////////// Objects as a function ///////////////////////////////////////////////////

// Name metodi. Funksiyaning nomini aniqlaydi:
function foundTheName() {
  console.log("Hi");
}
console.log(foundTheName.name); // foundTheName

// Bu hatto function expression bilan ham ishlaydi:
let hello = function () {
  console.log("helo");
};
console.log(hello.name); // hello

function f(sayHi = function () {}) {
  console.log(sayHi.name); // sayHi (ishlaydi!)
}

f();

// Bu "kontekst nomi" (context name) deb ataladi.

// Length => funksiya parametrlarining sonini aniqlaydi:
console.log(hello.length); // 0

// Bizga length "introspetsiya" (introspection) uchun kerak.
// Introspetsiya — bu obyektning turi yoki tuzilishini so'rash qobiliyatidir.

/*
function ask(question, ...handlers) {
  let isYes = confirm(question);

  for(let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }
}

// Musbat javoblar uchun har ikkala turdagi handler chaqiriladi
// Manfiy javoblar uchun - faqat ikkinchi turdagi
ask("Savol?", () => alert('Siz ha deb javob berdingiz'), result => alert(result));
*/

/////////////////////////////////////////////// Custom properties /////////////////////////////////////////////////////

// Biz o'zimizning shaxsiy metodlarimizni yaratishimiz mumkin.
// Masalan, funksiya necha marta chaqirilganini tekshiruvchi metod:
function count() {
  console.log("hello");
  count.counter++;
}
count.counter = 0;
count();
count();
console.log(count.counter); // 2

// Bu yerda count.counter o'zgaruvchi emas, biz funksiyaga obyekt kabi munosabatda bo'lyapmiz va count.counter uning metodidir.

//////////////////////////////////////////////////////// NFE ////////////////////////////////////////////////////////

// Named Function Expression (Nomlangan funksiya ifodasi)
// let first = function(name){
//   console.log(`hi ${name}`);
// }
// Biz buni quyidagicha qayta yozishimiz mumkin:
let first = function second(name) {
  console.log(`hi ${name}`);
};

// Funksiyaga nom berishdan maqsad nima?
// Birinchidan, "second" nomini berish funksiyani function declaration'ga aylantirmaydi, u hali ham ifoda (expression) bo'lib qoladi va natija o'zgarmaydi.
// Biroq, bu ikki xil imkoniyatni beradi:
/*
1) Funksiya nomi uning o'ziga murojaat qilishiga (rekursiya) imkon beradi.
2) Funksiyaga uning tashqarisidan kirish imkoni yo'q.
*/

let invite = function who(name) {
  if (name) {
    console.log(`${name} xush kelibsiz`);
  } else {
    who("mehmon");
  }
};
invite(); // mehmon xush kelibsiz
invite("Temur"); // Temur xush kelibsiz

// Biz invite (o'zgaruvchi nomi) dan ham foydalanishimiz mumkin edi, lekin agar sayHi qiymati o'zgarsa, funksiya ishlashdan to'xtaydi.

/*
let sayHi = function(who) {
  if (who) {
    alert(`Salom, ${who}`);
  } else {
    sayHi("Mehmon"); // Xatolik: sayHi funksiya emas
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Xatolik, ichki sayHi chaqiruvi endi ishlamaydi!
*/

// Bu shuning uchun sodir bo'ladiki, function expression o'zgaruvchiga murojaat qilganda tashqi Lexical Environment'ga qaraydi, agar qiymat o'zgargan bo'lsa (null bo'lsa), funksiya to'xtaydi.

// Nima uchun u function declaration'dan ko'ra yaxshiroq?
/*
1) Global Lexical Environment'ni "axlat" bilan to'ldirmaydi, chunki NFE faqat o'zining ichida ishlaydi va biz unga tashqaridan kira olmaymiz.
2) Hoisting'ga ega emas (bu ham yaxshi, ham yomon bo'lishi mumkin, lekin hoisting kodni o'qishni qiyinlashtirgani uchun NFE ma'qulroq).
3) Uni o'zgaruvchi sifatida saqlashimiz mumkin, o'zgaruvchi ustida nima qilsak ham NFE baribir ishlayveradi.
*/
