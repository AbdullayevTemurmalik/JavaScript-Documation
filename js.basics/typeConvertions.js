//////////////////////////////////////////////Type convertion////////////////////////////////////////////////////////
console.log("5" / "2") //=> the answer is 2.5,because in javascript symbols like * / - converts strings into number however + just adds not mathematically for example
console.log(5 + "5") //=> 55 in string
// when we do mathematical manipulations 
// undefined = NaN
// null = 0
// false = 0
// true = 1
console.log(true + null);//=> 1 because true=1;null =0
console.log("" - 3);//=> the answer is -3 in number
console.log("" + 3);//=> string three
console.log("" * 3) // => 0
// when we do Number() spaces are being ommited
console.log( Number("      123     ")); //=> number 123
// boolean("0") is true because it is a string
// boolean(" ") also true
// at least one string can convert everything into its type
console.log(1+2+3+"4");//=>result is "1234"



 