/*
Which of these alerts are going to execute?

What will the results of the expressions be inside if(...)?

*/

if(-1 || 0){
    console.log("First");
}
if(-1 && 0){
    console.log("Second");
}
if(null || (-1 && 1)){
    console.log("Third");
}