/*
make a conditional check for a purchase if a user is only:
 isLoggedIn,
 isEmailverified,
 isCartValue
 is true.
*/

//true or false is the boolean vaule on that basis all the check perform action

const isLoggedIn = true;
const isEmailverified = true;
const isCartValue = true;

// && called as AND operator-->Check only if both condition is true 
// and || OR operator  -->Check  if any one of the condition is true 

if(isLoggedIn && isEmailverified && isCartValue ){
    console.log("You can now make payment,go ahead.. :-)");
}else{
    console.log("You are not authorized to do the operation");
}
