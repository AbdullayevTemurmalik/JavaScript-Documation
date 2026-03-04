//////////////////////////////////////////////////// Scope ///////////////////////////////////////////////////////////

// O'zgaruvchilar faqat o'zi e'lon qilingan kod bloki ichida ko'rinadi
{
  const hello = "hello world";
  console.log(hello); // "hello world"
}
// Ushbu blokdan tashqarida hello'ni chaqirib bo'lmaydi (error beradi)

////////////////////////////////////////// Nested functions ///////////////////////////////////////////////////////////

// Funksiya boshqa bir funksiya ichida yaratilsa, u "nested" funksiya deyiladi
function mainFunction(name, surname) {
  console.log(`Mening ismim ${name}`);
  function childFunction() {
    console.log(`Mening familiyam ${surname}`);
  }
  childFunction();
}
mainFunction("Temur", "Qodirov");

// "Lexical Environment" — bu o'zgaruvchilar saqlanadigan ichki obyekt.
// U ikki qismdan iborat: Environment Record (mahalliy o'zgaruvchilar) va tashqi muhitga havola.

// "Closure" (yopilish) — bu funksiyaning tashqi o'zgaruvchilarni eslab qolishi va ularga kirish qobiliyatidir.
// Har bir funksiya yashirin [[Environment]] xususiyati orqali o'zi yaratilgan joyni eslab qoladi.

// Garbage collection: Funksiya havolasi (masalan, g = null) o'chirilsa, uning o'zgaruvchilari ham xotiradan tozalanadi.
