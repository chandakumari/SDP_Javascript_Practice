/*
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/
let calculator = {
    sum() {
        return (this.a + this.b);
    },
    mul() {
        return (this.a * this.b);
    },
    read() {
        this.a = 10;
        this.b = 20;
    }
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());