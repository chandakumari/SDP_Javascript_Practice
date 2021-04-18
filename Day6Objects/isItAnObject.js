/*
Create a function to check whether the given parameter is an Object or not.

Examples
isObject(function add(x,y) {return x + y}) ➞ true

isObject(new RegExp('^[a-zA-Z0-9]+$', 'g')) ➞ true

isObject(null) ➞ false

isObject("") ➞ false
*/
function isObject(value) {
	if(typeof(value)== 'object' && (value)!=null)
		return true;
	else
		return false;
}