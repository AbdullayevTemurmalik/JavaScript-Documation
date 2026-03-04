////////////////////////////////////////////////// Arrow function ////////////////////////////////////////////////////

// Arrow function — bu funksiyaning shunchaki qisqaroq ko'rinishi
// Agar u declaration bo'lsa:
function sum(a, b) {
  console.log(a + b);
}
sum(10, 20);

// Arrow function esa quyidagicha ko'rinadi:
let hello = (a, b) => console.log(a + b);
hello(10, 20);
// Ikkalasi ham bir xil narsa
// Ko'rib turganingizdek, bu funksiya anonymous (nomsiz) hisoblanadi, chunki arrow function aslida function expression'ning bir turidir

// Agar faqat bitta parametr bo'lsa, quyidagicha yozishimiz mumkin:
let root = (a) => console.log(Math.sqrt(a));
root(49); // 7
// Bunda biz shunchaki yumaloq qavslarni tashlab ketdik

// Agar parametrlar bo'lmasa, quyidagicha yozamiz:
let greet = () => console.log("hello");
greet(); // Hello

// Agar funksiya faqat bir qatordan iborat bo'lsa, arrow function'larda return so'zi ishlamaydi (ya'ni return yozish shart emas)
