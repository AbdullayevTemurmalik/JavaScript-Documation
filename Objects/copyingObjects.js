////////////////////////////////////////////////////////Copying objects/////////////////////////////////////////////
// in js to copy variables we would do 
let hi = "hello"
let wow = hi
console.log(wow); //Hi
// but with objects it is different. When we do:
let obj = {
  name:"samir",
  Surame:"Qodirov"
} 
let dubl = obj
console.log(dubl);//{ name: 'samir', Surame: 'Qodirov' }
// Yes we can say that we doubled the object however we just doubled the link tot the object because if we mske changes
obj.name = "John"
console.log(dubl); //{ name: 'John', Surame: 'Qodirov' }
// As we can see the changes made in obj affect double and vice verse, that is why main purpose of dubling is lost,we double to make changes and do not affect the main one
// If we wnat to clone we can do this
let obj1 = {
  name:"Ben",
  age:40
}  

let es = {}
for(let key in obj1){
  es[key] = obj1[key]
}
console.log(es);//{ name: 'Ben', age: 40 }
es.name ="Tom"
console.log(obj1);//{ name: 'Ben', age: 40 }
console.log(es);//{ name: 'Tom', age: 40 }
//As we can see changes are made only in es while obj1 remained untouched

// Or we can use Object.assign

let duobl = {
  hobby:"Playing ball",
  hates:"Movies"
}
let doubles ={
  cares:"Mom"
}
let sum = {}
console.log(Object.assign(sum,...[duobl,doubles]));
console.log(sum);//{ hobby: 'Playing ball', hates: 'Movies', cares: 'Mom' }
// In this method we dont just copy we just connect two object to double we could judt elemenate sum and make doubles empty
let ew = {
  hobby:"They",
  hates:"You"
}
let mark = {}
console.log(Object.assign(mark,ew));

mark.hobby = "Her"
console.log(ew);//{ hobby: 'They', hates: 'You' }
console.log(mark);//{ hobby: 'Her', hates: 'You' }
//As we can see ew didnt change
// Or we can do:
let clone  = Object.assign({},ew)
console.log(clone); //{ hobby: 'They', hates: 'You' }, the same


// Comparing objects
let a = {};
let b = a;

console.log( a == b ); // true
console.log( a === b ); // true

let w = {};
let e = {};

console.log( w == e ); // false

let cop = {
  name:samir,
  age:20
}
console.log(cop[1]);



