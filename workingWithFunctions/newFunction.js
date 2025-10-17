/////////////////////////////////////////////////new Function///////////////////////////////////////////////////////
//There is a method to create a new function, it is rarely used:
let func = new Function('a','b', 'return a+b')
console.log(func(10,20));//30
//here is the function without arguments:
let show = new Function('console.log("Hello")')
show()//hello

//Closure
//Unlike other types of function  new fucntion cannot access to its outer lexical environment, only global

// function doesntHaveTheAccess() {
//   let value = "hello"
//   let func = new Function(`console.log(value)`)
//   return func
// }
// let returned = doesntHaveTheAccess()
// returned()//error
   globalThis.value = "hi"
 function doesntHaveTheAccess() {
   
   let func1 = new Function('console.log(value)')
   return func1
 }
 let returned = doesntHaveTheAccess()
 returned()//hi

//In node js each file is a module that doesnt have a global lexical environment, everything inside this file is local, as we it was said in the last file we locate the variable to the global by writing globalThis.value = "hi", we just manually place a variable to a global environment, and as we said new function have the access only to global

//Usage:
//Lets imagine we receive stringified function from server
 let serverCode = `
  if (price > 100) {
    return price * 0.9; // скидка 10%
  } else {
    return price;
  }
`;
//so to use that we need to use new function, explanation will be below
let makeFunctionWork = new Function("price",serverCode)
console.log(makeFunctionWork(10));//10
console.log(makeFunctionWork(542));//487.8
//new function can be dynamic, dynamic means it can work even if it doesnt know exactly what upcomming function does, simple function always do the code that was written to it, it already knows what it does,however new function can be "adaptive"
//So simply we use new function when we dont know what upcomming function does
 //Firestly lets see what is minifier
 //Minifier is a programm that shrinks the code, by removing comments, spaces, and the most important, making short names for local variables, for example if it was "let hello", after minifier it may become "let a".
//What would happen if new function had the access to the outer environment?
// function makeFunc() {
//   let userName = "Samir";
//   return new Function('console.log(userName)');
// }
// makeFunc()();
//in this example minifier would change the "let userName = "Samir";" to something like that "let a = "Samir";", in normal functions the variable where it was used would also change, but as inside of new function we write in a string, minifier would not access the string and the ame of variable would remain inside of a string, and as the variable has changed the name the name inside of string would be undefined
//Minifier would function look like this:
//function makeFunc(){let a="Samir";return new Function('console.log(userName)')}makeFunc()();
 

