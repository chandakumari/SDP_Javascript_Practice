async function myFunc(){
    console.log("Inside myFunc");
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await Response.json();
    console.log('users resolved');
    return users;
}
console.log("before calling func");
let res = myFunc();
console.log("after calling");
console.log(res);
res.then(data=>console.log(data))
console.log("end");