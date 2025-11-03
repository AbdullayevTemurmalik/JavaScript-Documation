// ///////////////////////////////////////Numbers/////////////////////////////////////////////////////////////////
// to make the number in the power of something we can use ** operator
const num = 5
console.log(num ** 5); //=> 3125
// we use +=, -=, *= etc to say that we need to add a variable a number and change the value of it
let nums = 10
console.log(nums+=15);//=> 25 because nums == 10 + 15 =25 and then it is = nums
let num2 = 10
console.log(num2 = num2 + 15);//the same but longer

console.log(1/0); //=> this is going to be infinity

// in javascript any manupulation with + - * etc are not going to return an error at worst NaN

// to create a bigint number we add n to the end
console.log(typeof 48348384834902n); //=> bigint
// to convert  variable into a boolean we do Boolean()
const sum = 20
console.log(typeof sum);//=> number
console.log(typeof Boolean(sum));//=>boolean

console.log(typeof Infinity); //number




