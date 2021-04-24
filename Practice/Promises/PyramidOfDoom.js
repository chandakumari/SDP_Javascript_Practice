function sqaure(n,cb){
    setTimeout(() => {
        return cb(n*n);
    })
}
sqaure(2,function(res){
   console.log(res);
   sqaure(res,function(res1){
       console.log(res1);
   })
});