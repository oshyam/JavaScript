//Function in JavaScript
const user = "Shyam Mohan Kunwar";
const byeMsg = "Happy to see you on the other end..!";

//demo function
function msg(){
    console.log("User is LoggedIn");
}


//function with interpolation
function greetToUser(){
    console.log("Welcome " + `${user}`);
};

//msg means referencing a function later you will find out in react or vue
//msg(); calling a function 


// function with parameter
function lastGreet(byeMsg){
// console.log(byeMsg); 
console.log(`${byeMsg}`);

}
msg();
greetToUser();
// function with parameter
lastGreet(byeMsg);

//Throwing a return in function and later assign to meaningful thing
function namastey(){
    // return 2+2 you can return anything but returning and console.log() is two diff thing;
    return "DemoUser from India";
}

const helloFromIndia = namastey();
console.log(helloFromIndia);


