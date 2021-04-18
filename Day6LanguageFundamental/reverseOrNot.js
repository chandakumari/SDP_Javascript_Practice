function reverseAndNot(i) {
	let str = "";
    let num = i;
    while(num >= 1){
        let rem = Math.floor(num%10);
        str += rem;
        num = Math.floor(num/10);
    }
	return (str+`${i}`);
}
console.log(reverseAndNot(123));
console.log(reverseAndNot(152));
console.log(reverseAndNot(123456789));