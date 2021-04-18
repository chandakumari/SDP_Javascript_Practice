/*
Create a function that moves all capital letters to the front of a word.

Examples
capToFront("hApPy") ➞ "APhpy"

capToFront("moveMENT") ➞ "MENTmove"

capToFront("shOrtCAKE") ➞ "OCAKEshrt"
*/
function capToFront(s) {
	let res='';
    for(let i=0;i<s.length;i++)
    {
        if(s.charAt(i).codePointAt(0)>=65 && s.charAt(i).codePointAt(0)<=90)
        {
           res+=s.charAt(i);
        }
    }
    for(let i=0;i<s.length;i++)
    {
        if(s.charAt(i).codePointAt(0)>=97 && s.charAt(i).codePointAt(0)<=122)
        {
           res+=s.charAt(i);
        }
    }
    return res;
}