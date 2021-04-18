/*
Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.

Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).

*/
function removeLeadingTrailing(n) {
	//let num = parseInt(n,10);
	//let ans = "" + num;
	let ans = "" + parseFloat(+n);
	return ans;
    //return ("" + (+n));
}