function Myfunc(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const error = true;
            if(!error){
                console.log("Promise si resolved");
                resolve();
            }
            else{
                console.log("promise is rejected");
                reject("Sorry");
            }
        },2000);
    })
}
Myfunc().then(function(){
    console.log("Thanks For resolving");
}).catch(function(error){
    console.log("Bad Luck " + error);
})