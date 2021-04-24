const p1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Promise1");
    },2000)
});
const p2 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Promise2");
    },2000)
});
const p3 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Promise3");
    },2000)
});
Promise.allSettled([p1,p2,p3]).then((Msg)=>{
    console.log(Msg);
});