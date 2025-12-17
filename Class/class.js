//////////////////////////////////////////////classes//////////////////////////////////////////////////////////////
//The syntax:
// class Myclass {
//   constructor(){
  
//   }
//   method1:(){}
//   method2:(){}
//   method3:(){}
// }
//And we can use it by doing:
//new Myclass

//Constructor is an intializator for the classes all the values are being created there and the parameters will also go to contructor part
// class Multiply {
//   constructor(a,b){
//    this.a = a
//    this.b = b
//   }
//   mult(){
//    console.log(`The answer for ${this.a} * ${this.b} is ${this.a*this.b}`)
//   }
// }
// const cl = new Multiply(10,20)  
// cl.mult()//200
//we can also make some logic
class Multiply {
  constructor(a,b){
    if(a > 10 || b > 10){
      throw new Error("To big number i cant calculate")
    }
    this.a = a
    this.b = b
  }
  mult(){
   console.log(`The answer for ${this.a} * ${this.b} is ${this.a*this.b}`)
  }
}
const cl = new Multiply(9,9)  
cl.mult()
// Class is not just a syntax suntax sugar, even if ve still can rewrite the classees in functions:
function multiply(a,b) {
  if(a> 10 || b >10){
     throw new Error("To big number i cant calculate")
  }
  this.a = a
  this.b = b
}

multiply.prototype.mult = function() {
  console.log(this.a * this.b)
}
let smth = new multiply(2,3)
smth.mult()
//However for lcasses js has special property [[IsClassConstructor]]: true, so for that reason classes cant be called without new
//Classes are always in use strict mode


//Class expressions
//class can also be expressions:
const saveClass = class{
  constructor(a,b){
    if(a > 10 || b > 10){
      throw new Error("To big number i cant calculate")
    }
    this.a = a
    this.b = b
  }
  mult(){
   console.log(`The answer for ${this.a} * ${this.b} is ${this.a*this.b}`)
  }
}
const wow = new saveClass(9,9)
wow.mult()
// and cas also be nfe => named function expression
//const hello = class Hello{}
//getters and setters