/*
A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

[3, 6, 12, 36]

// 3 is a factor of 6
// 6 is a factor of 12
// 12 is a factor of 36
Create a function that determines whether or not an array is a factor chain.
*/
function factorChain(arr)
 {
     for(let i=arr.length-1; i>=0; i--)
     {
        for(let j=0;j<=i;j++)
        {
            if(arr[i]%arr[j]!=0)
            {
                return false;
            }
        }
     }
     return true;
 }
 console.log(factorChain([1, 2, 4, 8, 16, 32]));
