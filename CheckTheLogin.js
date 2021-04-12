/*
Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”
*/
let UserName = "Admin";
let Password = "TheMaster";
if(UserName == "Admin"){
    if(Password == "TheMaster")
    console.log("welcome");
    else if(Password == "" || Password ===null)
    console.log("Cancelled");
    else
    console.log("wrong password");
}
else if(UserName == '' || UserName === null){
console.log("cancelled");
}
else{
    console.log("I don’t know you");
}