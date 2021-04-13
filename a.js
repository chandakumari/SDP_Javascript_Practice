function start() {
    for (var i = 0; i < 2; i++) {
        console.log(i);
    }
    console.log(i);
}
start();
let x = null;
console.log(x);
let width = null;
let height = null;
let area = height ?? (100*width) ??50;
console.log(area);
let firstName = null;
let lastName = null;
let nickName = "Supercoder";
let ans = firstName ?? lastName ?? nickName ?? "Anonymous";
console.log(ans);