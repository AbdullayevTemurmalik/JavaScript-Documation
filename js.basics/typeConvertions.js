// Matematik amallar (* / -) string'ni avtomatik raqamga aylantiradi
console.log("5" / "2"); // => 2.5

// Lekin "+" operatori string'larni bir-biriga ulab qo'yadi
console.log(5 + "5"); // => "55"

// Matematik hisobda: undefined = NaN, null = 0, false = 0, true = 1
console.log(true + null); // => 1 (1 + 0)
console.log("" - 3); // => -3 (0 - 3)

// Number() funksiyasi matn ichidagi bo'shliqlarni olib tashlaydi
console.log(Number("      123     ")); // => 123

// Agar ifoda ichida bitta string bo'lsa, natija string bo'lishi mumkin
console.log(1 + 2 + 3 + "4"); // => "1234" (6 emas)
