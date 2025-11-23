///////////////////////////////////////////Objects as a function///////////////////////////////////////////////////
//Name method. Finds out the name of the function:
function foundTheName() {
  console.log("Hi");
}
console.log(foundTheName.name);//foundTheName
//It even works with function expression:
let hello = function() {
    console.log("helo");
}
console.log(hello.name);//hello

function f(sayHi = function() {}) {
  console.log(sayHi.name); // sayHi (работает!)
}

f();

//This is called context name

//Length=> finds out the length
console.log(hello.length);//0
//we need length for introseption
//Introseption is the ability to request the type or the structure of the object
/*
function ask(question, ...handlers) {
  let isYes = confirm(question);

  for(let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }

}

// для положительных ответов вызываются оба типа обработчиков
// для отрицательных - только второго типа
ask("Вопрос?", () => alert('Вы ответили да'), result => alert(result));
*/
///////////////////////////////////////////////Custom properties/////////////////////////////////////////////////////
//We can create our own custom methods
//For example the one checks how many times the function was called:
function count() {
  console.log("hello");
  count.counter++
}
count.counter = 0
count()
count()
console.log(count.counter);//2
//Here count.counter is not a variable, we can threat the function as an object and count.counter is the method

////////////////////////////////////////////////////////Nfe////////////////////////////////////////////////////////
//Named function expression
// let first = function(name){
//   console.log(`hi ${name}`);
// } 
//we can rewrite as 
let first = function second(name){
  console.log(`hi ${name}`);
} 
//so what is the purpose of naming the function?
//First of all the fact that i gave the name "second" doesnt change the function to function declaration, it is still expression, and giving the name doesnt change the result
//However there are two possibilities
/*
1)Name function allows the function to reference itself(recursion)
2)It is impossible to have an access to the function outside the function
*/
let invite = function who(name) {
  if(name){
    console.log(`${name} you are welcome`);
  }else{
    who("guest")
  }
}
invite()//guest you are welcome
invite("alex")//alex you are welcome

//we could use invite(the name of the variable), however if the value of sayHi changes the function will stop working
/*
let sayHi = function(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    sayHi("Guest"); // Ошибка: sayHi не является функцией
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Ошибка, вложенный вызов sayHi больше не работает!
*/

//So this happens because fucntion expression while accessing the variable accessess the outer Lexical environment and if the value is changed we receive null and function will stop working  

//Why is it better that function declaration:
/*
1)Do not litter the global lexical Environment, because NFE works only inside of itself and we cannot get the access to it
2)Doesnt have the hoisting, it may be both good and bad but as hoistin makes the code hard to read NFE is better
3)We can save it as a variable, we can do almost whatever to the variable and NFE will be still functionnig
*/