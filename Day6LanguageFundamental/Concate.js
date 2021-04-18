/*
Create a function that concatenates n input arrays, where n is variable.

Examples
concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
Notes
Arrays should be concatenated in order of the arguments.
*/

function concat(...args) {
	let arr = new Array();
	for(let i=0; i<args.length; i++){
		arr.push(args[i]);
	}
	return arr.reduce((arr1, val) => {
      return arr1.concat(...val);
   }, []);
}