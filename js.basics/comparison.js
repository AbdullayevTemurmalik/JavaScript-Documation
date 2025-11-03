// ///////////////////////////////////////Comparison///////////////////////////////////////////////////////////
// when we compare the string we use internal encoding table (Unicode). Here it is :
// ==================== DIGITS ====================
// '0' -> 48
// '1' -> 49
// '2' -> 50
// '3' -> 51
// '4' -> 52
// '5' -> 53
// '6' -> 54
// '7' -> 55
// '8' -> 56
// '9' -> 57

// ==================== LATIN UPPERCASE ====================
// 'A' -> 65
// 'B' -> 66
// 'C' -> 67
// 'D' -> 68
// 'E' -> 69
// 'F' -> 70
// 'G' -> 71
// 'H' -> 72
// 'I' -> 73
// 'J' -> 74
// 'K' -> 75
// 'L' -> 76
// 'M' -> 77
// 'N' -> 78
// 'O' -> 79
// 'P' -> 80
// 'Q' -> 81
// 'R' -> 82
// 'S' -> 83
// 'T' -> 84
// 'U' -> 85
// 'V' -> 86
// 'W' -> 87
// 'X' -> 88
// 'Y' -> 89
// 'Z' -> 90

// ==================== LATIN LOWERCASE ====================
// 'a' -> 97
// 'b' -> 98
// 'c' -> 99
// 'd' -> 100
// 'e' -> 101
// 'f' -> 102
// 'g' -> 103
// 'h' -> 104
// 'i' -> 105
// 'j' -> 106
// 'k' -> 107
// 'l' -> 108
// 'm' -> 109
// 'n' -> 110
// 'o' -> 111
// 'p' -> 112
// 'q' -> 113
// 'r' -> 114
// 's' -> 115
// 't' -> 116
// 'u' -> 117
// 'v' -> 118
// 'w' -> 119
// 'x' -> 120
// 'y' -> 121
// 'z' -> 122
// ==================== COMMON SYMBOLS ====================
// ' ' (space) -> 32
// '!' -> 33
// '"' -> 34
// '#' -> 35
// '$' -> 36
// '%' -> 37
// '&' -> 38
// "'" -> 39
// '(' -> 40
// ')' -> 41
// '*' -> 42
// '+' -> 43
// ',' -> 44
// '-' -> 45
// '.' -> 46
// '/' -> 47
// ':' -> 58
// ';' -> 59
// '<' -> 60
// '=' -> 61
// '>' -> 62
// '?' -> 63
// '@' -> 64
// '[' -> 91
// '\\' -> 92
// ']' -> 93
// '^' -> 94
// '_' -> 95
// '`' -> 96
// '{' -> 123
// '|' -> 124
// '}' -> 125
// '~' -> 126
//  as we can see the lower  letter is in the alphabet the higher its index is so that is why
console.log("z" > "a"); //is true
// and also upper case is lower than the lowecase
console.log("A" < "a"); //true
//or
console.log("Z" < "a"); //true
// comparing different types
// when we compare string and the number string will be converted into a number
console.log("2" > 1); //true as number 2 is higher than 1
// and also this
console.log("002" > 1); //true as technically 002 in number is 2
// however if the converted string into a number is NaN for example "abc" or "hello" the result is always false
console.log("sam" < 1000); //false
console.log("sam" > 1000); // also false
// when we compare undefined with  null in strict comparison the result is false
console.log(undefined === null); //false
//however in simple it is true
console.log(undefined == null); //true
// Comparing null with a zero
//if we compare zero and null in normal equality sign the result is false
console.log(null == 0); //false
// and also higher and lower is also false
console.log(null < 0); //false
console.log(null > 0); //false
// however when we say that null is higher or equal to 0 the result is true
console.log(null >= 0); //true
// so that is weird null == 0 is false and null >= 0 is true, but there is a reson for that.
// Thats because == and < > >= <= work differently, < > >= <=  converts null to a number while == doesnt
// comparing undefined to a zero
console.log(undefined > 0); //false
//or
console.log(undefined < 0); //false
// so that is logical because < > sign converts to a number as i said before, undefined  is NaN so any comprison with NaN is false
// however undefined == 0 has to be true? No
// undefined is always false unless it is compare to a null
// i didnt mention that if we compare string "12" and "2" that answer will be  true is that weird? yes because
// < > convert items into a number when it is compared to a number but "12" < "2" are still string so we compare first symbols by the table of index there "1" is smaller than "2"
console.log("12" < "2"); //true
// however "12" < 2 is false because 12 is converted into a number
console.log("12" < 2); //false
