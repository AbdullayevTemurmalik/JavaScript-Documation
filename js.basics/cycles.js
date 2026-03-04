// ///////////////////////////////////////// Cycles (loops) //////////////////////////////////////////////////////////

// while => while tsikli quyidagi syntax'ga ega:
// while(condition){ tsikl tanasi }
let i = 0;
while (i < 10) {
  i++;
  console.log(i);
}
// Tsiklning bir marta to'liq aylanishi "iteration" deb ataladi

// do while
// do while tsikli funksiyani (kodni) kamida bir marta ishlatish uchun kerak bo'ladi
let j = 5;

do {
  j++;
  console.log(j);
} while (j < 5);
console.log("the end of the cycle "); //=> 6

// Biroq, oddiy tsiklda hech narsa bo'lmagan bo'lardi, chunki 5 < 5 hech qachon true emas
let hi = 1;
let res = 0;
while (hi < 100) {
  hi++;
  res += hi;
}
console.log(res);

for (let i = 0; i < 100; i += 2) {
  console.log(i);
}

// break — tsiklning ishlashini to'xtatish uchun ishlatiladi
for (let i = 8; i < 50; i++) {
  if (i % 7 == 0) {
    console.log("found the number:" + " " + i);
    break;
  }
  console.log(i + " " + "is not devided by 7");
}

// continue — for tsiklining faqat bir qismini (iteratsiyasini) tashlab o'tish uchun kerak
for (let i = 0; i < 50; i++) {
  if (i % 2 == 0) continue;
  console.log(i);
}
// Bu yerda agar son % 2 == 0 shartini bajarsa, u faqat o'sha iteratsiyani to'xtatadi

// break va continue'ni ternary operator bilan birga ishlatib bo'lmaydi
