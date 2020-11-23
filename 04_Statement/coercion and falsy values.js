
/*
falsy values in JS:
undefined
null
0
''
NaN

*/

//except this all are truthy values.


//examples

/*
var user = "";
console.log(user);
*/


/*

*/

/*
Treat String and Number as Same:
var user ="8";
console.log(8 + user);
*/

/*
loosley type checking
var user ="8";
if(user==8){
    console.log("Condition is True");
}



*/

/*

Triple equals) is a strict equality comparison operator in JavaScript, 
which returns false for the values which are not of a similar type. 
This operator performs type casting for equality. 
If we compare 2 with "2" using ===, 
then it will return a false value.

*/
var user = 8;
if(user===8){
    console.log("Condition is True");
}

