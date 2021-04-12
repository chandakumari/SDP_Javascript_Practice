/*
Rewrite this if using the conditional operator '?':
*/

let Value = 7;
if(Value > 0){
console.log(1);
}
else if(Value < 0){
console.log(-1);
}
else{
console.log(0);
}
let ans = (Value > 0)? 1: (value < 0)? -1:0;
console.log(ans);