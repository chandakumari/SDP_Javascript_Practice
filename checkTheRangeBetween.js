/*
Write an if condition to check that age is between 14 and 90 inclusively.

“Inclusively” means that age can reach the edges 14 or 90.
*/

let Age = 20;
if(Age >= 14 && Age <= 90){
    console.log("Inclusively");
}
else{
    console.log("Not Inclusively");
}
/*
Write an if condition to check that age is NOT between 14 and 90 inclusively.

Create two variants: the first one using NOT !, the second one – without it.

*/
if(!(Age >= 14 && Age <= 90)){
    console.log("Inclusively");
}
else{
    console.log("Not Inclusively");
}