//////////////////////////////////////////////////Arrow function////////////////////////////////////////////////////
// arrow function is just a shorter version of a function 
// if it is declaration
function sum(a,b) {
  console.log(a+b);
}
sum(10,20)
// While arrow function looks like this:
let hello = (a,b) => console.log(a+b);
hello(10,20)
// Both are the same
// As you can see this function is anonymous because arrow function is actually a type of function expression

// If there is only one parameter we can do next
let root = a=>console.log(Math.sqrt(a));
root(49)//7
// we just ommited the round brackets

// But if we dont have parameters we can do this:
let greet = () => console.log("hello");
greet() //Hello

// return doesnt work in arrow functions if it is only one line
 