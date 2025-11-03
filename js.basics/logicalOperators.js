// ///////////////////////////////////////////////logical operators/////////////////////////////////////////////////
// there is a new feature that was added which is ||=
// so we need this to change the value of the first variable if it is falsy
let a = ""
const hi = a||=10
console.log(a);//=>10
// so in this example in the beginning a was "" however then i said if a is falsy which it is right now it will be equal to 10
// we need this to shorten our code by avoiding if()
// the same with &&=
// there is scenario where we have alert(1) and then || 2
console.log(alert(1)||2||alert(3));//so here alert will be shown and then 2
// so this is because alert here returns undefined after which true is coming and as it is || true is taken so basically we can rewrite like this:
console.log(undefined || 2 || alert(3));//identical to a previous example
//alert(3) will not be shown because || needs only one true which is 2 that comes before it
//so the reason why alert is undefined is that it is a function that doesnt return anythyng and if the function doesnt retur anything the output will be undefined  
// && is stronger than || for example:
console.log(true || false && false);//the answer is true
// at first glance it seems like js is reading from left to right so true || false is true and then true && false and the answer is false
// however as js prioritices && over ||,  && is being done firstly  




