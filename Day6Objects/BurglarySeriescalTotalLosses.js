/*
You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

Examples
const stolenItems = {
  tv: 30,
  skate: 20,
  stereo: 50,
} ➞ 100

const stolenItems = {
  painting: 20000,
} ➞ 20000

const stolenItems = {} ➞ "Lucky you!"
*/
function calculateLosses(obj) {
	let sum =0;
	for(let value of Object.values(obj)){
		sum += value;
	}
	if(sum == 0){
		return "Lucky you!"; 
	}
	else{
		return sum;
	}
}