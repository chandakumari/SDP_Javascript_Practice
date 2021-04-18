/*
Is it possible to create functions A and B such as new A()==new B()?

function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true
If it is, then provide an example of their code.
*/
let obj = {};
function C(){
    return this;
}
let user = new C();
function A(){
    return obj;
}
function B() {
    return obj;
}
 console.log(new A() == new B());
 console.log(user);