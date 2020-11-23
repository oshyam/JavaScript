/* 
create a app with roles like:
admin - have the full access
subadmin - get access to create and delete content
moderator - can access to create and delete content
user - gets access to consume content

*/

const user= "admin";

switch(user){
    case "admin":
        console.log("Admin, You have the full access");
    break;
    case "subadmin":
        console.log("subadmin, Get access to create and delete content");
    break;
    case "moderator":
        console.log("moderator, You can access to create and delete content");
    break;
    case "user":
        console.log("user, You gets access to consume content");
    break;

}
 
