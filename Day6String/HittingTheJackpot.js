/*
Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

*/
function testJackpot(result) {
	for(let i=1; i<result.length; i++){
		if(result[i] != result[i-1]){
			return false;
		}
	}
	return true;
   // return new Set(result).size === 1;
}