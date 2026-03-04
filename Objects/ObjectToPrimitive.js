///////////////////////////////////////////////// Object to primitive /////////////////////////////////////////////

// Obyektlar har doim 'true' hisoblanadi. Ular raqamga yoki stringga aylanishi mumkin.
// JS aylantirish jarayonida "Hints" (ishoralardan) foydalanadi:
// 1) "string" (alert kabi hollarda)
// 2) "number" (matematik amallarda)
// 3) "default" (JS aniq bilmagan holatlarda)

// Maxsus metod: [Symbol.toPrimitive](hint)
let user = {
  name: "John",
  money: 1000,
  [Symbol.toPrimitive](hint) {
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  },
};
console.log(String(user)); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
