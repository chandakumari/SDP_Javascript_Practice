// let data;
// function fetchData(){
//     setTimeout(() => {
//         data = "Hey, I'm Chanda";
//     },2000)
// }
//  function displayData(){
//      console.log(data);
//      console.log("end here");
//  }
//   fetchData();
//   displayData();
  
//Callback
let data;
function fetchData(cb){
    setTimeout(() => {
        data = "Hey, I'm Chanda";
        cb();
    },2000)
}
//  function displayData(){
//      console.log(data);
//      console.log("end here");
//  }
  fetchData(function(){
    console.log(data);
    console.log("end here");
});
 // displayData(); 
