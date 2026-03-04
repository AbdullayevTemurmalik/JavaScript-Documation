//////////////////////////////////////////// Date /////////////////////////////////////////////////////////////////////

// Date yaratish uchun quyidagicha yozamiz:
let now = new Date();
console.log(now); // 2025-10-08T12:35:38.545Z (Konsolga chiqarilgan vaqt)

// 1970-yildan boshlab o'tgan millisekundlar soni "timestamp" deb ataladi
// 1970-yildan oldingi Date'lar negative timestampga ega bo'ladi
let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969); // 1969-12-31T00:00:00.000Z

// 0 soni 1970-yilga teng
let Jan1970 = new Date(0);
console.log(Jan1970); // 1970-01-01T00:00:00.000Z

// new Date(year, month, date, hours, minutes, seconds, ms)
// Year uchun to'rtta raqam ishlatish kerak: 2002
// Month 0 dan 11 gacha boshlanadi, 0 - January, 11 - December (index kabi)
// Date oyning kuniga teng bo'lishi kerak: 24. Agar argument berilmasa, default holatda 1 bo'ladi
// Agar hours/minutes/seconds/ms berilmasa, ular 0 ga teng deb hisoblanadi

// Masalan:
// new Date(2011, 0, 1, 0, 0, 0, 0) // 1 Jan 2011, 00:00:00
// Quyidagiga teng:
// new Date(2011, 0, 1) // 1 Jan 2011, 00:00:00
// Aniqlik darajasi 1ms

//////////////////////////////////////////////////// Methods //////////////////////////////////////////////////////////

// getFullYear() => yilni qaytaradi
let past = new Date(2016, 3, 18);
let year = past.getFullYear();
console.log(year); // 2016

// getMonth() => oyni qaytaradi
console.log(past.getMonth()); // 3

// getDate() => kunni (sana) qaytaradi
console.log(past.getDate()); // 18

// getHours(), getMinutes(), getSeconds(), getMilliseconds()
console.log(past.getHours(), past.getMinutes()); // 0 0 (chunki berilmagan)

// Shuningdek, haftaning kunini ham olishimiz mumkin (Monday, Friday...)
// 0 - Sunday, 6 - Saturday
console.log(now.getDay()); // 3 // Wednesday

/*
Date komponentlarini o'rnatish (Setting date components)
Quyidagi methodlar date/time komponentlarini o'rnatish imkonini beradi:

setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds) (01.01.1970 UTC dan boshlab millisekundlar orqali butun dateni o'rnatadi)
*/

// AutoCorrection (Avtomatik tuzatish)
// Agar Date yozishda xato qilsak, engine buni o'zi tuzatadi. Masalan:
let incDate = new Date(2025, 1, 32); // Fevralda 32-sana yo'q, shuning uchun:
console.log(incDate); // 2025-03-04 (Martga o'tib ketadi)

// Date'ni songa aylantirish
console.log(+now); // 1759929206141 (bu millisekundlar miqdori)

// Date.now()
// Bu yangi obyekt yaratmasdan hozirgi vaqtni olish uchun ishlatiladi
// Bu shunga teng => new Date().getTime()
console.log(Date.now()); // 1759929352038 milliseconds
console.log(now.getTime()); // 1759929352038 milliseconds

// Ism o'zgarishi:
let student = {
  name: "Temur",
};
console.log(student.name); // Temur
