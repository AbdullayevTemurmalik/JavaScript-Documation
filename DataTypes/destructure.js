/////////////////////////////////////////////Destructure///////////////////////////////////////////////////////////
//Dustructure is a method which is used to unpack the items of the array or the object
//Why do we need that? We need if we have nothing to do with the array or object itself. That means when we need some elements of it. Here is the example:
const arr = [1, 2, 3];
const [one, two, three] = arr;
//Here one == arr[0],two == arr[1]. three == arr[2]
console.log(one); //1
console.log(two); //2
console.log(three); //3
// We can also destructure string
let str = "hello bro";
const [h, e] = str;
console.log(h); //h

// So actually we could do:
// let [firstName, surname] = arr;
let firstNames = arr[0];
let surname = arr[1];
//however it takes two rows and it doesnt look beautiful

//It is possible to skip an element by adding just coma
let destArr = ["Samir", "Mad", "Good", "Well"];
const [firstName, , thirdname] = destArr;
//Now firstname => destarr[0], destarr[1] => skipped because as a name of a variable it is nothing,thirdname => destarr[2]
console.log(firstName); //Samir
console.log(thirdname); //Good

//in the left site can be almost everything not only variables
let user = {};
[user.name, user.surname] = "Ilya Kantor".split(" "); //Split method also works(i did this because user.name would be a letter I, and surname a letter l)

console.log(user); // { name: 'Ilya', surname: 'Kantor' }

let user1 = {};//Note if i dont put(;) there will be a mistake
[user1.name, user1.age] = ["Samir",20]
console.log(user1);//{ name: 'Samir', age: 20 }

//We can you destructure in loops, but together with Object,entries because we need an array to narmally access the data
let objj = {
  name:"Samir"
}
//For of is used because obj.enries returns a massive
for (const [key,value] of Object.entries(objj)) {
  console.log(`my ${key} is ${value} `);
}//my name is Samir


//with new Map it is simpler
//For in doesnt work with a map
let map = new Map()
map.set("name","Samir")
map.set("age",20)
for (const [key,value] of map) {
  console.log(key,value);
}/*name Samir
age 20*/

//There’s a well-known trick for swapping values of two variables using a destructuring assignment:

let guest = "Jane";
let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

console.log(`${guest} ${admin}`); // Pete Jane (successfully swapped!)

////////////////////////////////////////////The rest "..."///////////////////////////////////////////////////////
//If an array is too long and we need to save the rest somewhere we use ... For example:
let tooLongArray = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
const [name1,name2,...rest]=tooLongArray
//rest will return a list of items that left
console.log(`${name1} is a first name ${name2} is the second`);//Julius is a first name Caesar is the second
console.log(rest);//[ 'Consul', 'of the Roman Republic' ]

/////////////////////////////////////////////Default values////////////////////////////////////////////////////////
//in case the amount of values is bigger than array itself the value will be undefined
let arr2 = ["Mike"]
const [arr2name, arr2age] = arr2
console.log(arr2name);//Mike
console.log(arr2age);//undefined

//But if we dont want undefined to be as a result we can set a default value (default valu will work only if the value from the array is not given)
const [defarr2 ="guest",defagearr2 = "age is not given"] = arr2
console.log(defarr2);//Still mike because name is given
console.log(defagearr2);//age is not given, because there is no age in the array


// we can make more complex instructions with default 
// runs only prompt for surname
// let [name3 = prompt('name?'), surnames = prompt('surname?')] = ["Julius"];

// alert(name3);    // Julius (from array)
// alert(surnames); // whatever prompt gets

/////////////////////////////////////////Destructuring objects//////////////////////////////////////////////////////
//Note to destructure objects we use curly brackets {}, not squuare [], othervice there will be a mistake
let options = {
  title: "Menu",
  width: 100,
  height: 200,
  place:"Namangan"
};

let { width, height,title,plc} = options;
console.log(title);//Menu
console.log(width);//100
console.log(height);//200
console.log(plc);//undefined because the key named plc doesnt exist
//Note the name of the variable should be the same with a key
//And the order doesnt matter
//if the key doestn exist there will be a mistake

//if we want to make code more beautiful we can do
let hobby = {
hobby1:"football",
hobby2:"chess",
hobby3:"music",
}
let {hobby1: f="nothing", hobby2:c,hobby3:m,hobby4:d="default"} = hobby
//here we say the value of hobby1 will be in the variable called f, and so on
console.log(f);//football, not nothing because football is given
console.log(c);//chess
console.log(m);//music
console.log(d);//default as value is not given
//default is put in the same way


///////////////////////////////////////////////the rest "..." in objects/////////////////////////////////////////////
//... work in objects work the same as in arrays, but some browsers do not support it
let obj10 ={
  name:"Mat",
  surname:"Edinson",
  age:10
}
const {age: howOld = "age is not given",...rest1} = obj10
console.log(howOld);//10
console.log(rest1);//{ name: 'Mat', surname: 'Edinson' }




////////////////////////////////////////////////////Nested destructure/////////////////////////////////////////////
let options1 = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// деструктуризация разбита на несколько строк для ясности
let {
  size: { // положим size сюда
    width1,
    height1
  },
  items: [item1, item2], // добавим элементы к items
  title1 = "Menu" // отсутствует в объекте (используется значение по умолчанию)
} = options1;

///////////////////////////////////Smart function parameters//////////////////////////////////////////////////////
//sometimes we may have a big amount of items given to the fucntion as an argument, and there are two ways of working with these arguments
//1)Dirty method
function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
  
}
// undefined where default values are fine
showMenu("My Menu", undefined, undefined, ["Item1", "Item2"])
//2)Clear method
let options3 = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

// ...and it immediately expands it to variables
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
  // title, items – taken from options,
  // width, height – defaults used
  console.log( `${title} ${width} ${height}` ); // My Menu 200 100
  console.log( items ); // Item1, Item2
}

showMenu(options3);

//to make all value to be obj by default we do:
//function showMenu({ title = "Menu", width = 100, height = 200 } = {})

