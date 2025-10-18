//To make something work after some time we use scheduling(setTimeout and setInterval)
/////////////////////////////////////////////////////setTimeout///////////////////////////////////////////////////////
//there are tow ways of using setTimeout
//1)
function sayHi() {
  console.log("hi");
}
setTimeout(sayHi,5000)//showing hi after 5 seconds(5000ms == 5s)
//2
setTimeout(()=>{
  console.log("hi");
},5000)//showing hi after 5 seconds

//we can also us eit like new function(in a string format)
// setTimeout('console.log("in a string")',5000)
//but doing that is a bad idea
 
//here how it looks woth argumets
function sayHiAgain(name,age) {
  console.log(`hi again ${name} and ${age}`)
}
setTimeout(sayHiAgain,5000,"samir",20)//hi again samir and 20

//it is preferable to use arrow functions
 let hello = setTimeout((name)=>{
  console.log("heeee" + name);
},5000,"samir")//heeeesamir
///////////////////////////////////////////////////clearTimeout//////////////////////////////////////////////////////
if(Math.random() < 0.5){
  console.log("success");
}else{
  console.log("unsuccess");
  clearTimeout(hello)
}
////////////////////////////////////////////////////setInterval///////////////////////////////////////////////////////
//Does something infitnitively untill we stop it
 let sec = 5000
let saved = setInterval((time)=>{
  console.log(`this will be appearing each ${time} ms`);
},sec,sec)
setTimeout(()=>{
  clearTimeout(saved)
},10000)

//Note we dont need to run both setTimeout and setInterval by wrapping it woth a variable and use it like function expression they run authomatically after we write the code, variable() incorrect
/////////////////////////////////////////////////////nested setTimeout/////////////////////////////////////////////
//There are two ways of runnig something regularly,setInterval and nested setTimeout(recursive setTimeout)
//And using recursive setTimeout can be better for several reasons 
//Examples
let exam1 = setInterval(()=>{
  console.log("Hello world");
},2000)

let exam2;

function run() {
  console.log("hello");
  exam2 = setTimeout(run, 2000);
}

exam2 = setTimeout(run, 2000);
//we do this because if i had written let variable = function, it would have stopped only first function not second

setInterval(()=>{
  clearInterval(exam1)
  clearTimeout(exam2)
},5000)

//So the reason that recursive setTimeout is better is that setInterval literaaly says: make something work after some time, however the duration of the function can be long, and if it is long setinterval will not wait for the end it will push the other function so because of that there can be some errors, for example real time can be either lower and higher than expacted one, while recursive setTimeout waits for the end of the function, setTimeout says wait some time after the function finishes.
//setInterval => real time, we gave 1000ms despite the function finishes starts the other one appear
//setTimeout(recursive) => real time after function ends working, we use to avoig bugs

/////////////////////////////////////////garbage collection/////////////////////////////////////////////////////////
//functions inside of setTimeout and setInterval are send to scheduler, scheduler is a inner js mechanism that will be holding the link of the function and  will not be giving it to the garbage collector untill the time of scheduler passes out
//setInterval will be wotking untill clearInterval is written
//but there are some side effects for example as functions inside of setTimeout and setInterval can access outer lexical environment this lexical environment will be existing untill garbage collector stops function from functioning, as the result of which lexical environment will take too much memory on pc. To prevet this from happening we dont need to use big objects inside of schedule functions, use only small parts of the object that we need, we need to always use clear interval if we need to stop

///////////////////////////////////////////////setTimout with no delay////////////////////////////////////////////////
//even if our code is 0ms it will be consoled after simple code because even inside this 0ms js checks the function that takes some time

setTimeout(()=> console.log("exam is coming"))
console.log("it will be showed first");