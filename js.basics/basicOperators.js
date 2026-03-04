///////////////////////////////////////////// Basic operators ///////////////////////////////////////////////////////

// Operand — bu operator qo'llaniladigan qiymatdir
// 5 + 2 => bu yerda 5 va 2 ikkita operanddir
// Yuqoridagi misolda "+" binary operator hisoblanadi, chunki u ikkita operandga ega
// Biroq, operator bitta songa qo'llanilsa, u unary operator bo'ladi
// const num = -5 => bu yerda "-" unary operator

// Javascript binary operatorlarga qaraganda unary operatorlarga ustunlik beradi (prioriteti yuqori)
console.log(+"12" + +"3"); // => bu son ko'rinishidagi 15, chunki unary operator binary'dan tezroq ishlaydi

// Shuningdek, "**" (daraja) operatori "*" (ko'paytirish) dan kuchliroq
// "=" eng past ustunlikka ega, shuning uchun const x = 1+2+3 amali oxirida bajariladi

// "++" yoki "--" operatorlari faqat o'zgaruvchilar (variables) bilan ishlaydi, 5++ yozish xato hisoblanadi

// Bitwise operatorlar:
// AND(и) ( & )
// OR(или) ( | )
// XOR(побитовое исключающее или) ( ^ )
// NOT(не) ( ~ )
// LEFT SHIFT(левый сдвиг) ( << )
// RIGHT SHIFT(правый сдвиг) ( >> )
// ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) ( >>> )
