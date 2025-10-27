//When we give the methods of objects as a callback there is a problem, which is the loss of "this"
let obj ={
  name:"samir",
  age:20,
  sayhi:function(){
    console.log(`Hello ${this.name} your age is ${this.age} right?`);
  }
}
obj.sayhi()//Hello samir your age is 20 right?
//now it works correctly but if we do:
setTimeout(obj.sayhi,3000)//Hello undefined your age is undefined right?
//this happened because setTimeout received the function separatly from the object it looks like this
/*
let f = obj.sayHi;
setTimeout(f, 1000);
as we already know this will be lost if we copy the reference to an object 
*/
//So setTimout has a unique ability which is - any "this"  will be equal to window not the function itself, in setTimeout this works similarly with arraw function, so when this == window, in the example above this.name will not be searching in the function but in window, however window doesnt have such property, so for that reason it is undefined
//so there are several solutions:
//covering function into anonymous function
setTimeout(function(){
  obj.sayhi()
},3000)//Hello samir your age is 20 right?
//or
setTimeout(() => obj.sayhi(), 1000);////Hello samir your age is 20 right?
// here we as we know that in setTimeout this == window or undefined, we just use anonymous or simple function that have an access to "this"
//meanwhile in the incorrect example as i said this == undefined

//However there is a downside of this example, because if the value changes settimeout will not triger the changes
/*
let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

setTimeout(() => user.sayHi(), 1000);

// ...the value of user changes within 1 second
user = {
  sayHi() { alert("Another user in setTimeout!"); }
};

// Another user in setTimeout!
*/

//to fix this we have method bind
/////////////////////////////////////////////////////bind///////////////////////////////////////////////////
let user = {
  name:"samir"
}
let ager={
  age:20,
  sayage:function(){
    console.log(`Hello ${this.name} your age is ${this.age}`);
  }
}
let newFunc = ager.sayage.bind(user.name)
console.log(newFunc);
