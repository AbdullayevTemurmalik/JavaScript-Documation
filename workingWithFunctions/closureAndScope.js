////////////////////////////////////////////////////Scope///////////////////////////////////////////////////////////
//variables are only visible inside a code block
{
  const hello = "hello world"
  console.log(hello);//"hello world"
}
//tgis  code block
// console.log(hello);//error

//////////////////////////////////////////Nested functions///////////////////////////////////////////////////////////
//A function is called nested when it is created inside another function
function  mainFunction(name,surname) {
  console.log(`My name is ${name}`);
  function childFunction() {
    console.log(`my saurname is ${surname}`);
  }
  childFunction()
}
mainFunction("samir","qodirov")
//My name is samir
//my saurname is qodirov

//A nested function can be also returned and taken as a variable
function counter() {
  let count = 0
  return function(){
    return count++
  }
}
let alreadyUsed = counter()
console.log(alreadyUsed());//0
console.log(alreadyUsed());//1
//So here to use the the child function we do king of this:counter()()
//First call returns fucntion 
//second call makes the returned function return count++ work
//Step 1 variables
//There is a thing that cannects script and the fucntion adn it is called lexical environment
//Lexical environment consists of two part:
/*
1)Environment record=> it is an abject where all local variables are saved, and some information about "this"
2)A link for outer lexical environment=> a link to a code that is outside the fucntion
For example:
*/
let secondPhrase = "world"//this global lexical environment it doesnt have link to outer
{
let phrase = "hello"
//now environment record contains "phrase = hello"
let second = secondPhrase
//now environmet record is: 
// "phrase = hello"
// second = "secondPhrase"
//secondPhrase is found because there is a link for outer code inside of Lexical environment 
}
//the part inside of {} is block lexical environment
//so basically LexicalEnvironment is object inside if javascript that containes all the variables
//Lexical environament doesnt exist this term is used to explain how it works

//so with variables it works like this:
//example:
let phrase = "HELLO";
phrase = "WORLD";
/*
so when js starts to read the code two operations are done:
1)creation => js finds out all let const var, functions and their names
2)Execution => runs the code
in example above phrase = "World" is located in tdz because the part  "=hello" is not read yet
but after creation ends and execution starts working "hello" and world will be read and it will be initiolized
that is why:
console.log(hi)
let hi = "hello"
is an error, because even if js knows that hi exists for log(hi) hi is still uninitiolized   
*/
//Step 2 fucntion declaration
//function expression can be called before its initialization because whenever it is called it will be in ready state to function unlike let
//the name of the function will be located in LexicalEnvironmnent and this name will be a ready function
befort("hi")
function befort(hi) {
  console.log(hi)
}
//hi

//So here is the explanation:
/*
javascaript is both compiled and interpreted, in past it was just interpreted, but after they started using JIT(just in time) compilator
so here is the order in which js works
1)Parsing or preparement, checks the syntax if i had some probems maybe forgot the bracket and so on, builts AST(Abstract Syntax Tree) it is a structure of a programm, so in this level js understands where function variables are located but doesnt pay attention. in this level code is not interpreted it is just analyzed
2)Compilation(creation phase)here lexicalEnvironment is used and everything is saved on the memory,all the variables and functions are registered, but let and const are in TDZ and they dont have value, unlike function declaration which is registered together with body, however the moment we call function dosnt work, dec() will be remembered as a variable
3)Interpretation(execution phase)=> this is where value are given and functions expression start to work,console.log()also starts working in this level, so it expalins why function declaration has hoisting(able to be used before initilization) because when console.log(declaration) comes function ddeclaration will be already in the memory with the body or value, and the moment when function was called will work     
*/

//Note pure function is a function that doesnt use code from the outside
//closure is when function remembers the variables from the outside and uses it 
let names = "samir"
dec(names)
function dec(name) {
  console.log(`hello i am ${name}`);
}//hello i am samir
//in this example dec is remembered with body but name will come in execution phase together with dec(names) so practically dec() will work in execution
// fwrf(age)
// let age = 23
// function fwrf(age) {
//   console.log(`i am ${age} years old`);
// }//error because let age will be in tdz

//step 3 outer and inner lexical Environment
let step34 = "dar"
function step3(name) {
  console.log(`hello ${name} and ${step34}`);
}
step3("tre")
//There are two lexical Environment
//1)inner for inside of function console.log(`hello ${name} and ${step34}`);
//2)outer or global
//in inner the variable name is located and console.log(easily finds it), then outer place where let sterp34 and fucntion step3 are located, and it gains access to the step34 and shows on console
//Note it will be searching untill it comes to the global lexical Environment and if it doesnt find the error will come 

//step 4 returning function
//Each function remeber wits lexical environament or the place where it was created
//Each function has hidden fucn.[[Environment]] property [[Environment]] is a outer lexical environment for a function:
let exam = "hello"
function ret() {
  console.log(exam);
}
//here the [[Environment]] for res is global lexical environment which is let exam = hello
//it goes to global because it couldnt find the variable exam in ints(fucntion ret) inner environment


//Garbage collection:
function f() {
  let value = 123;

  return function() {
    alert(value);
  }
}

let g = f(); // пока существует функция g, value остается в памяти

g = null; // ...и теперь память очищена.