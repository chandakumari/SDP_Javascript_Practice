/*
Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
*/
function ask(question, yes, no) {
    if ((question)) yes();
    else no();
  }
  
  ask(
    "",
    () => console.log("You agreed."),
    () => console.log("You canceled the execution.")
  );
