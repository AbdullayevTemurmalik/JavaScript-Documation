// // JavaScript-da xotirada aniq joy egallaydigan hamma narsa Stack-da saqlanadi
// // Stack — bu xotira ombori
// // Xotirada aniq bir joy egallamaydigan (hajmi o'zgarishi mumkin bo'lgan) elementlar esa Heap-da saqlanadi

let hello = {
  hello: "said",
  by: "said",
}; // Bu Object hozir Heap-da saqlanmoqda (Stack-da esa faqat unga bo'lgan havola — reference (let hello) saqlanadi)

let name = "Temur"; // Bu String Stack-ga boradi

/////////// 1
// Bu funksiya berilgan narsa string ekanligini tekshiradi va uning uzunligini qaytaradi
function getString(string) {
  if (typeof string == "string") {
    return string.length;
  } else {
    return 0;
  }
}
console.log(getString(12)); // 0

////// 2
// Berilgan matnni (str) aytilgan miqdorda (amount) takrorlab beradigan funksiya
function repeatString(str, amount) {
  return str.repeat(amount);
}
console.log(repeatString("cat", 3)); // "catcatcat"

//// 3
// Matn ichidagi unli harflarni sanaydigan funksiya
function countVowel(str) {
  let vowels = ["a", "e", "i", "o", "u", "y"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i].toLowerCase() == vowels[j]) {
        count += 1;
      }
    }
  }
  return count;
}
console.log(countVowel("banana")); // 3

/// 4
// Array ichidagi so'zlarni bitta gap qilib birlashtiruvchi funksiya
function smash(words) {
  return words.join(" ");
}
console.log(smash(["hello", "my", "name", "dew"])); // "hello my name dew"

/// 5
// Berilgan sonlarning kvadratini hisoblab, keyin ularni qo'shib beruvchi funksiya
function squareSum(numbers) {
  let arr = numbers.map((item) => item * item); // Har bir elementni kvadratga ko'taradi
  return arr.reduce((acc, item) => acc + item, 0); // Hammasini yig'ib chiqadi
}
console.log(squareSum([3, 5, 4])); // 50 (9 + 25 + 16)
