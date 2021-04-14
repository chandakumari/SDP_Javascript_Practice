/*
There’s a ladder object that allows to go up and down:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};
Now, if we need to make several calls in sequence, can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
Modify the code of up, down and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep(); // 1
Such approach is widely used across JavaScript libraries.

*/
// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//     },
//     down() {
//       this.step--;
//     },
//     showStep: function() { // shows the current step
//       console.log( this.step );
//     }
//   };
//   ladder.up();
//   ladder.up();
//   ladder.down();
//   ladder.showStep();
 // ladder.up().up().down().showStep();
 let ladder = {
     step : 0,
     up() {
         this.step++;
         return this;
     },
     down() {
         this.step--;
         return this;
     },
     showStep : function() {
         console.log(this.step);
     },
};
ladder.up().up().down().showStep();