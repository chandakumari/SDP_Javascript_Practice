/*
Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:

function unique(arr) {
  
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O
P.S. Here strings are used, but can be values of any type.

P.P.S. Use Set to store unique values.
*/
function unique(arr){
    let set = new Set(arr);
    // for(let i=0; i<arr.length; i++){
    //     set.add(arr[i]);
    // }
    return set;
    //return Array.from(new Set(arr));
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(values));