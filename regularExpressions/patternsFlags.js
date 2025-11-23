///////////////////////////////////////////////regEx//////////////////////////////////////////////////////////////
//There are two syntaxes of regEx
//long:
regex = new RegExp("patter","flags")
//short
regex = /pattern/ //no flags
regex = /pattern/gmi //with flags g,m and i(to be covered soon)
//slashes works the same as quotes for strings
//The difference between these two methods is sthat // slashes are static(doesnt allow to insert variables through   ${})
// let tag = prompt("Какой тег вы хотите найти?", "h2");

// let regexp = new RegExp(`<${tag}>`); // то же, что /<h2>/  при ответе "h2" на prompt выше
//////////////////////////////////////////////////Flags//////////////////////////////////////////////////////////////
//In javaScript there are 7 flags
//i=>this flag allows the search to ignore the register g=both capital and small letters can be used
//g=>allows to find all the result not only one
//m=>multyline mode
//s=>dotall mode
//u=> allows unicode
//y=>allows to serach the exact position of the code