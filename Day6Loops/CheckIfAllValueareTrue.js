/*
Create a function that returns true if all parameters are truthy, and false otherwise.

Examples
allTruthy(true, true, true) ➞ true

allTruthy(true, false, true) ➞ false

allTruthy(5, 4, 3, 2, 1, 0) ➞ false
*/
function allTruthy(...args) {
  let arr=[];
  for(let i=0;i<arguments.length;i++)
  {
      arr[i]=arguments[i];
      if(!arr[i])
      {
         return false;
      }
  }
  return true;
}
console.log(allTruthy(true, true, true));//true

console.log(allTruthy(true, false, true));//false

console.log(allTruthy(5, 4, 3, 2, 1, 0));//false