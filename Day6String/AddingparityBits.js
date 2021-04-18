/*
Parity bits are used as a very simple checksum to ensure that binary data isn't corrupted during transit. Here's how they work:

If a binary string has an odd number of 1's, the parity bit is a 1.
If a binary string has an even number of 1's, the parity bit is a 0.
The parity bit is appended to the end of the binary string.
Create a function that adds the correct parity bit to a binary string.
*/

function addParityBit(b) {
	let cnt=0;
	for(let i=0; i<b.length; i++){
		if(b[i]== '1'){
			cnt++;
		}
	}
	if(cnt%2 == 0){
		return b + 0;
	}
	else{
		return b + 1;
	}
}