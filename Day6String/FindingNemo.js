/*
You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".

If you can't find Nemo, return "I can't find Nemo :(".


*/
function findNemo(sentence) {
	let arr=sentence.split(" ");
   for(let i=0;i<arr.length;i++)
   {
        if(arr[i]=="Nemo")
        {
            return `I found Nemo at ${i+1}!`;
        }
   }
   return "I can't find Nemo :(";
}