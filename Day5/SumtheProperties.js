/*
There is a salaries object with arbitrary number of salaries.

Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

If salaries is empty, then the result must be 0.

For instance:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650
*/
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
 function sumSalaries(salaries){
     let sum = 0;
     for(let value of Object.values(salaries)){
         sum += value;
     }
     return sum;
 }
 console.log(sumSalaries(salaries));
