///////////////////////////////////////////////Numbers//////////////////////////////////////////////////////////////
//There are two ways of writing the number
// 1)normal
console.log(120000000);
//2)syntactic sugar
console.log(120_000_000);
//3)Writing "e"
console.log(1e6); //1000000
//In the third way i literally say add to a number 1, 6 zeroes
// Or this one
console.log(6e2); //600
// Here i say add to the six two zeroes

// With this method we can write small numbers also for ex: 0,0000002
console.log(2e-6); //0.000002
// So it says put 6 zeroes before 2

//toString(base)/Hex, binary and octal numbers
//To string base shows the number in hex,octal or binary numbers
//we need this to protect the code(kodirovanie)
// there are 4 most used number systems
//1) base(2) =>Binary b
//2) base(8) =>Octal 0o
//3)base(10) =>decimal(normal number)
//4)base(16) =>hex(ox)
// Note to make the mothod work for a number itself we use double dot(..)
// or we can cover a number into a bracket ()
console.log((20).toString(2)); //10100
console.log((20).toString(2)); //10100
console.log((20).toString(8)); //24
console.log((20).toString(10)); //20
console.log((20).toString(16)); //14

// toFixed()
// This method shows how many number will be after the ","
console.log((2).toFixed(0)); //2
console.log((2).toFixed(4)); //2.0000

// Unaccurate solutions
// In js the number is represented by 64 bit format, 52 of which is given to save the numbers,11 for the location of the full stop, and one bit for the sign itself
//If the number is too big it will reach the maximum and return infinity
console.log(1e500); //Infinity
// One of the most common bugs in js is the unaccuracy of the answer
console.log(0.1 + 0.2); //0.30000000000000004
console.log(0.1 + 0.2 == 0.3); //False
// There is an explanation for that
// simple numbers are being saved in binary form (0,1), and decimal numbers look normally while fractions such as    0,1 or 0,2 have infinite amount of numbers in binary form
// To fix this we could use the method toFixed(2)
let sum = 0.1 + 0.2;
console.log(sum.toFixed(2)); //0.30
console.log(0.1 + 0.2 === sum); //True

// To check the number, if it is infinity or number we have two methods
//1)isNaN
console.log(isNaN(20)); //False
console.log(isNaN("str")); //True
//or we can do
console.log(!isNaN(20)); //True

// So how it works
//isNan converts the element inside of the brackets into number, if Number(element) == Nan it shows true,if something different false
// But the question is coming: Why cant we just compare our element to the NaN? no we cant because any strict comparison to NaN is false
console.log(NaN === NaN); //false
console.log(NaN == NaN); //Also false
// For that reason isNaN is useful
console.log(isNaN("25")); //false, because "25" in NUmber("25") == 25

//2) isFinite =>checks if element is NaN,Infinity,-Infinity
console.log(isFinite("15")); //True
console.log(isFinite(15)); //True
console.log(isFinite("hello")); //False, because Number("hello") == NaN
console.log(isFinite(Infinity)); //False, because finite is opposite of infinity
console.log(typeof Number("Infinity")); //number

// We can check if the elemnt is a number or not
let bro = "very";
if (isFinite(bro) == false) {
  console.log("this is not a number");
} else {
  console.log("Ok well, that is a number");
}

// There is also Number.isNan or Number.isFinite
console.log(Number.isNaN("hello")); //false
// Number.isNaN return true only if the number is NaN and typeof is number, again i said "and" both should be included (&&)
console.log(Number.isNaN(NaN)); //true

console.log(Number.isNaN("str")); //false =>because even if Number("str") == NaN && typeof "str" !== number
console.log(isNaN("str")); //true => because Number("str")

console.log(Number.isNaN(25)); //false => even if it is a number however it is not NaN
//number is NaN returbs true if the value is NaN
console.log(Number.isNaN(NaN));//true
console.log(Number.isNaN(Math.sqrt(-1)));//true because it is also NaN
// Number.isFinite(value) возвращает true только в том случае, если аргумент принадлежит к типу number и не является NaN/Infinity/-Infinity. Во всех остальных случаях возвращает false.

// There is a method Object.is => it is the same with === strict comparison
console.log(Object.is(20,20));//true 20 === 20 
console.log(Object.is(19,35));//false 19 is not equal to 35
// However there are two places where Object.is is stronger
// 1)when we work with isNaN
console.log(Object.is(NaN,NaN));//true NaN === NaN
// While
console.log(NaN === NaN);//false
//2)0 and -0
console.log(Object.is(0,-0));//fasle 0 and -0 are two different numbers
// while
console.log(0 === -0);//true

// In js there are some greate methods parseInt and parseFloat
// What do they do?
// for example in css we can have 120px and when we convert it to a number it is NaN
console.log(Number("120px"));//NaN
// But we can use parseInt
console.log(parseInt("120px"));//120
// This is how it works, it checks the number and as son as it sees something which is not number it stops and shows numbers that were before
console.log(parseInt("q123"));//NaN because immediatelly it sees "q" which is not number and stops
console.log(parseInt("127qew332"));//127 it proves my point
// parseFloat is the same but it works with numbers with a fullstop
console.log(parseFloat("12.5em"));//12.5

// Функция parseInt() имеет необязательный второй параметр. Он определяет систему счисления, таким образом parseInt может также читать строки с шестнадцатеричными числами, двоичными числами и т.д.:

console.log( parseInt('0xff', 16) ); // 255
console.log( parseInt('ff', 16) ); // 255, без 0x тоже работает

//The difference between i++ and ++i is that 
//i++ firstly retunrns the normal value and the adds one
//++i returns the the value that was added to one
//using ++i is better because it doesnt need extra memory for saving value
//there is no difference in for loop but we can see the difference here:
let i = 0;
let a = i++;
console.log(a, i); // 0 1

let j = 0;
let b = ++j;
console.log(b, j); // 1 1