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

//A nested function can be also returned nd taken as a variable
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

//Step 2 fucntion declaration