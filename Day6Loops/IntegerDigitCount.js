/*
Create a function that counts the integer's number of digits.

Examples
count(318) ➞ 3
 
count(-92563) ➞ 5
 
count(4666) ➞ 4

count(-314890) ➞ 6

count(654321) ➞ 6

count(638476) ➞ 6
*/
function count(n) {
    let ans = 0;
	while(n>0){
        let rem = Math.floor(n%10);
        n = Math.floor(n/10);
        ans++;
    }
    return ans;
}
console.log(count(318));
console.log(count(654321));
