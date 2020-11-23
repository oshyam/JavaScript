//check if he user login with any of tyhe method via email,facebook or gmail and then only show the website content using statement

const user = "demoUser";

const email = false;
const facebook = false;
const gmail = true ;

//check if all condition true

/* 

if(email && facebook && gmail ){
    console.log("statement");
}else{
    console.log("statement");
}
*/

if(email || facebook || gmail){
    console.log("Welcome " + `${user}`);
}else{
    console.log("OOPs..Please Sign In to Continue");
}


