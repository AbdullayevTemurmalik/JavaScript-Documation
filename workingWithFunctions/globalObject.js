/////////////////////////////////////////////Window or global/////////////////////////////////////////////////////
//Recently new globalThis was added and it can be used both in termainal and browser
//We can find all the methods in window or global
let str ="cedek"
globalThis.console.log(str)//cedek

//All the variabkes that was creted by var become a global object, unlike let andd const
var hello = "enck"
console.log(window.hello);//enck

//the same with function declaration
//but its better not to make use of this because in modern js moduls are used

//If function is so important we can do this:
// сделать информацию о текущем пользователе глобальной, для предоставления доступа всем скриптам
window.currentUser = {
  name: "John"
};
//but this is preferable not to use global variables becasue the code will becaome easier and for testing it becomes much easier

//We can check if the browser has the objects that we are using
//for exampe checking if browser has Promise
if (!window.Promise) {
  alert("Ваш браузер очень старый!");
}
// If there’s none (say, we’re in an old browser), we can create “polyfills”: add functions that are not supported by the environment, but exist in the modern standard.

if (!window.Promise) {
  window.Promise = "sw" // custom implementation of the modern language feature
}

