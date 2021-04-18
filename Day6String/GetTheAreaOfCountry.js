/*
Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass.
*/
function areaOfCountry(name, area) {
	let ans = (+area*100) / 148_940_000;
	return `${name} is ${ans.toFixed(2)}% of the total world's landmass`
}