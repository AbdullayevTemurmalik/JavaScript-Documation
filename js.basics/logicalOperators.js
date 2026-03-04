// /////////////////////////////////////////////// logical operators /////////////////////////////////////////////////

// Yangi qo'shilgan ||= operatori mavjud.
// Bu operator agar birinchi o'zgaruvchining qiymati falsy bo'lsa, uni o'zgartirish uchun kerak bo'ladi.
let a = "";
const hi = (a ||= 10);
console.log(a); // => 10
// Bu misolda boshida a qiymati "" (bo'sh matn) edi, lekin keyin a agar falsy bo'lsa (hozirgi holatda shunday), u 10 ga teng bo'lsin deb aytdim.
// Biz buni if() ishlatmasdan kodni qisqartirish uchun ishlatamiz.
// &&= operatori ham xuddi shu mantiqda ishlaydi.

// alert(1) || 2 || alert(3) holati:
console.log(alert(1) || 2 || alert(3)); // Bunda alert ko'rsatiladi va keyin 2 chiqadi.
// Buning sababi alert bu yerda undefined qaytaradi, undan keyin esa true qiymat kelmoqda. || operatori true qiymatni olgani uchun kodni quyidagicha qayta yozish mumkin:
console.log(undefined || 2 || alert(3)); // Oldingi misol bilan bir xil.

// alert(3) ko'rsatilmaydi, chunki || operatoriga bitta true (bu yerda 2) yetarli hisoblanadi.
// alert nima uchun undefined qaytarishining sababi shundaki, u hech narsa qaytarmaydigan funksiya, natijada chiqish undefined bo'ladi.

// && operatori || dan kuchliroqdir, masalan:
console.log(true || (false && false)); // Javob: true.
// Bir qarashda JS kodni chapdan o'ngga o'qiyotgandek tuyuladi (true || false natijasi true, keyin true && false natijasi false bo'lishi kerakdek).
// Biroq, JS && operatorini || dan ustun qo'ygani uchun, birinchi bo'lib && amali bajariladi.
