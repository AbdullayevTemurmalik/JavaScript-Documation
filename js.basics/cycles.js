// /////////////////////////////////////////Cycles(loops)//////////////////////////////////////////////////////////
// while =>while has this syntax
// while(condition){body of the cycle} 
let i = 0
while(i < 10){
  i++
  console.log(i)
}
// one full work of cycle is called iteration
// do while
// we need do while to make a function work at least once
let j =5

do{
  j++
  console.log(j);
}while (j<5)
  console.log("the end of the cycle ");//=>6

  // however in normal cycle it would be nothing as 5<5 is never true
  let hi = 1
  res = 0
  while(hi <100){
    hi++
    res += hi
    
  }
  console.log(res);
  for(let i =0;i<100;i+=2){
    console.log(i);
    
  }
  // break is used to stop a loop from working 
  for(let i=8;i<50;i++){
   if(i % 7 ==0){
    console.log("found the number:"+" "+i);
    break
   }
   console.log(i +" "+"is not devided by 7");
   
    
  }
// we need continue to omit only one part of the for loop
for (let i = 0; i < 50; i++) {
  if(i % 2 ==0)continue
  console.log(i);
  
}
// so here if it sees number %2 ==0 it breaks only for one iteration
// break and continue cant be used with ternary operator