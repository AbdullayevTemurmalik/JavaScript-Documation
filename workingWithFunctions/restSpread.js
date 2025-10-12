///////////////////////////////////////////////Rest parameters/////////////////////////////////////////////////////
//we can call infinite amount of arguments for a function
function sum(a,b) {
  return a + b
}
console.log(sum(10,20,402,8439,354,493))//30
//however only first towo will be read

//but if we really need the rest we could use ...
function sum1(a,b,...rest) {
 return  rest.reduce((acc,item)=>acc+ item +a + b,0)
}
console.log(sum1(10,20,402,8439,354,493))//9808
//so here i literally said take the rest ti the massive

//Note the rest parameter should be at the enfd otherwise error

//////////////////////////////////////////arguments///////////////////////////////////////////////////////////////
//In old times when there was no rest, people use d "arguments" to take the rest of array
function showName() {
  console.log( arguments);//[Arguments] { '0': 'me', '1': 'you' }
  console.log( arguments[0] );//me
  console.log( arguments[1] );//you

  // it's iterable
  // for(let arg of arguments) alert(arg);
}
showName("me","you")
// shows: 1, Ilya, undefined (no second argument)
showName("them")

//However arraw functions dont have their own "arguments"
let showArg = () => console.log(arguments[0]);
  showArg();//{}
  //Arrow fuctions always take from the outer so we could do this:
  function f() {
  let showArg = () => console.log(arguments[0]);//takes [0] from the outside
  showArg();
}

f(1); // 1

//////////////////////////////////////////////////Copying with spread operator//////////////////////////////////////
let obj = {
  name:"ekf",
  age:32,
  hobby:"football"
} 
let newObj = {...obj}
console.log(obj == newObj);//false
//So we created fully new array
//it is the replacement for object.assign()