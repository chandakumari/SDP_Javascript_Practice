function Sum(a,b)
{
 this.sum= +(a+b);
}
let sum1=new Sum(1,2);
let sum2=new Sum(5,8);
console.log(sum1.sum);
console.log(sum2.sum);
let user = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      console.log(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
  };
  
  // conversions demo:
  console.log(user); // hint: string -> {name: "John"}
  console.log(+user); // hint: number -> 1000
  console.log(user + 500); // hint: default -> 1500
  let user2 = {
    name: "John",
    money: 1000,
  
    // for hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // for hint="number" or "default"
    valueOf() {
      return this.money;
    }
  
  };
  console.log(user2); // hint: string -> {name: "John"}
  console.log(+user2); // hint: number -> 1000
  console.log(user2 + 500); // hint: default -> 1500
  let user3 = {
    name: "John",
  
    toString() {
      return this.name;
    }
  };
  
  console.log(user3); // toString -> John
  console.log(user3 + 500); // toString -> John500
  