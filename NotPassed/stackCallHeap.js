// //In javascript everything that has fixed amount of memoty is placed on stack
// //Stack is a memory storage
// //While the elements that dont have fixed amount of memory (it can be different) will be kept in heap
// let hello = {
//   hello:"said",
//   by:"said"
// }//this object now is kept in the heap(the reference will be kept in stack (let hello))
// let name = "samir" //it goes to stack
///////////1
function getString(string) {
  if(typeof string == "string"){
    return string.length
  }else{
    return 0
  }
}
console.log(getString(12));
//////2
function repeatString(str,amount) {
  return str.repeat(amount)
}
console.log(repeatString("cat",3));
////3
function countVowel(str) {
  let vowels = [
    "a","e","i","o","u","y"
  ]
  let count = 0
  for (let i = 0; i < str.length; i++) {
   for (let j = 0; j < vowels.length; j++) {
    if(str[i].toLowerCase() == vowels[j]){
      count+=1
    } 
   }
  }
  return count
}

console.log(countVowel("banana"));
///4
function smash(words) {
  return words.join(" ")
}
console.log(smash(["hello","my","name","dew"]));
///5
function squareSum(numbers) {
 let arr = numbers.map((item)=>item * item)
 return arr.reduce((acc,item)=>acc+item,0)
}
console.log(squareSum([3,5,4]));

