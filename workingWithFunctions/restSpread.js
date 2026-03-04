/////////////////////////////////////////////// Rest parameters /////////////////////////////////////////////////////

// Funksiyaga cheksiz miqdordagi argumentlarni chaqirishimiz mumkin
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20, 402, 8439, 354, 493)); // 30
// Biroq, faqat dastlabki ikkitasi o'qiladi

// Lekin bizga qolganlari ham kerak bo'lsa, "..." dan foydalanishimiz mumkin:
function sum1(a, b, ...rest) {
  return rest.reduce((acc, item) => acc + item + a + b, 0);
}
console.log(sum1(10, 20, 402, 8439, 354, 493)); // 9808
// Bu yerda men qolgan barcha argumentlarni massivga (massive) olishni aytdim

// Eslatma: rest parametri har doim oxirida bo'lishi kerak, aks holda xatolik (error) yuzaga keladi

////////////////////////////////////////// arguments ///////////////////////////////////////////////////////////////

// Eski vaqtlarda, rest parametrlari bo'lmaganda, odamlar massivning qolgan qismini olish uchun "arguments" dan foydalanishgan
function showName() {
  console.log(arguments); // [Arguments] { '0': 'me', '1': 'you' }
  console.log(arguments[0]); // me
  console.log(arguments[1]); // you

  // U iterable (aylanuvchi) hisoblanadi
  // for(let arg of arguments) alert(arg);
}
showName("me", "you");
showName("them");

// Biroq, arrow function'lar (strelkali funksiyalar) o'zlarining "arguments" obyektiga ega emas
let showArg = () => console.log(arguments[0]);
showArg(); // {}

// Arrow function'lar doim tashqi muhitdan (outer) ma'lumot oladi, shuning uchun biz quyidagicha qilishimiz mumkin:
function f() {
  let showArg = () => console.log(arguments[0]); // tashqaridan [0] ni oladi
  showArg();
}

f(1); // 1

////////////////////////////////////////////////// Copying with spread operator //////////////////////////////////////

let obj = {
  name: "ekf",
  age: 32,
  hobby: "football",
};

// Spread operator yordamida nusxa olish:
let newObj = { ...obj };
console.log(obj == newObj); // false
// Shunday qilib, biz butunlay yangi massiv (obyekt) yaratdik
// Bu Object.assign() metodining o'rnini bosuvchi zamonaviy usuldir
