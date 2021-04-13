/*
Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

Run the demo

P.S. In this task the function should support only natural values of n: integers up from 1.
*/
let base = 3;
let exp = 7;
function check(base,exp){
    if(exp < 1)
    return (`Can't find with this ${exp}`);
    return (pow(base,exp));
}
function pow(base,exp){
    let result = base;

  for (let i = 1; i < exp; i++) {
    result *= base;
  }

  return result;
}
console.log(check(base,exp));
