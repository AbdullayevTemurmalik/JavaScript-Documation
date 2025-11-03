// In js there are two ways of creating an array
// 1)[]
// 2)new Array()

// we can change somethig inside of an array by using index
let arr = [1,2,3,4,5]
console.log(arr);//[ 1, 2, 3, 4, 5 ]
arr[2]=100
console.log(arr);//[ 1, 2, 100, 4, 5 ]

/////////////////////arr.at
// arr.at works the same with str.at finds out something by index
// why cant we just do arr[-1] instead of at
//this is because arrays do not support negative index 
console.log(arr[-1]);//undefined
console.log(arr.at(-1));//5 (last element)

// Варианты неправильного применения массива:

// Добавление нечислового свойства, например: arr.test = 5.
// Создание «дыр», например: добавление arr[0], затем arr[1000] (между ними ничего нет).
// Заполнение массива в обратном порядке, например: arr[1000], arr[999] и т.д.


// push is faster then unshift, and it is preferable to use push more
// when we use unshift:
//it finds out and adds the element with to [0]
//moves all the elemnts after [0] to one more index
//and updates the length
// while push just skips the second part

// Cycles
// there are three cycles that we can use 
//1)for(let i=0;i<10;i++)
//2)for of
//2)for in

// The cycle for of doesnt have the access to the index of the element only values
let arr3 = ["apple","map","guy"]
for (const value of arr3) {
  console.log(value);
}
/*apple
map
guy*/

// Technically as the array is the object we can also use for in
for (const key in arr3) {
  console.log(key);
}
/*0
1
2*/

for (const key in arr3) {
  console.log(arr3[key]);
}
/*apple
map
guy*/

// But there is a problem with for in, it reads the whole array not just the ones who have index, and brausers or other environments have "array-like" objets which have some other properties other than elements by index, so that is why it is better not to use for in 

// arr.length
// In javascript length does not count each element of the array but adds one to the last index
// Another interesting thing about length is that we can rewrite them
//1) we can add some length
let change = [1,2,3,4,5,6]
console.log(change.length);//6
change.length = 8
console.log(change.length);//8
//now change is =>  [ 1, 2, 3, 4, 5, 6, null, null ]
//2) we can decrease the length
let decrease = [1,2,3,4,5,6]
console.log(`it looks like this:${decrease} and its length is: ${decrease.length}`);
// it looks like this:1,2,3,4,5,6 and its length is: 6
decrease.length = 4
console.log(`it looks like this:${decrease} and its length is: ${decrease.length}`);
//it looks like this:1,2,3,4 and its length is: 4

//So, the simplest way to clear the array is: arr.length = 0;.

// Arrays inside of an array are called "multidimensional arrays"

// Array comparison
// comparing two arrays is always false
console.log([0] == [0]);//false
// Comparing to ptimitive
console.log(Number([]));//0
// That is why 
console.log([] == 0);//true



