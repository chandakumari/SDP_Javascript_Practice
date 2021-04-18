/*
Create a function which returns the number of true values there are in an array.

Examples
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
*/
function countTrue(arr) {
	let cnt = 0;
	 for(let value of arr){
		 if(value == true)
			 cnt++;
	 }
	return cnt;
}