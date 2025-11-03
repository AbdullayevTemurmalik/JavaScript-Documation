//////////////////////////////////////////////////function constructor , new/////////////////////////////////////
//In javascript we sometimes need to create lots of similar objects and creating objects literally cant allow us doing that because we can only create one object by using literal method
// So for that reason we have the key word "new" which allow us to create multiple of similar objects
// Actually  constructor is a simple function however there are two main differences
//1) constructor should  start with a capital letter  
// function myName(){} => incorrect
// function MyName(){} => correct
//2)function constructors should be used with "new"
function SayHi(name) {
  this.name = name //here this is equal to function itself
} 
let user = new SayHi("samir")
console.log(user.name);//Samir

// function can also be created by new 
let hello = new function() {
  this.name = "John"
  this.age = 20
}
console.log(hello); //{name: 'John', age: 20 }
// This trick is used to prevent the function to be used more than once

// new.target -> cheks if the function was created by a constructor or not
function Say() {
  console.log(new.target);
}
Say() //undefined

   function Users(){
   console.log(new.target);
}
Users() //undefined
new Users() //[Function: Users]

function BigUser() {

  this.name = "John";

  return { name: "Godzilla" };  // <-- возвращает этот объект
}

console.log( new BigUser().name );  // Godzilla, получили этот объект

function SmallUser() {

  this.name = "John";

  return; // <-- возвращает this
}

console.log( new SmallUser().name );  // John