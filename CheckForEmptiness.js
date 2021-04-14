/*
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
*/
let obj = {
    userName : "chanda",
};
function isEmpty(obj){
    for(let key in obj){
        return true;
    }
    return false;
}
console.log(isEmpty(obj));