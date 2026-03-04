/////////////////////////////////////////// optional chain (?.) ////////////////////////////////////////////////////////

// Agar obyekt ichidagi biror xususiyat mavjud bo'lmasa, kodimiz to'xtab qolmasligi uchun ?. ishlatiladi.
let user = {}; // manzili yo'q foydalanuvchi

// user.address.street — xatolik beradi (error)
console.log(user?.address?.street); // undefined qaytaradi, lekin xato bermaydi

// Funksiyalarda ham ishlatish mumkin:
user.admin?.(); // Agar admin metodi bo'lsa ishlaydi, bo'lmasa xato bermaydi

// O'chirishda ham:
delete user?.name;
